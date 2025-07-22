-- Script para implementar sorteos con factores por sucursal
-- Ejecutar en el SQL Editor de Supabase

-- 1. Agregar columna sucursal a la tabla sorteos
ALTER TABLE public.sorteos 
ADD COLUMN IF NOT EXISTS sucursal text;

-- 2. Modificar la clave primaria para incluir sucursal
-- Primero quitar la constraint existente si existe
ALTER TABLE public.sorteos DROP CONSTRAINT IF EXISTS sorteos_pkey;

-- 3. Crear nueva clave primaria compuesta (id + sucursal)
ALTER TABLE public.sorteos 
ADD CONSTRAINT sorteos_pkey PRIMARY KEY (id, sucursal);

-- 4. Crear índices para optimizar consultas
CREATE INDEX IF NOT EXISTS idx_sorteos_fecha_sorteo 
ON public.sorteos (fecha, sorteo);

CREATE INDEX IF NOT EXISTS idx_sorteos_sucursal 
ON public.sorteos (sucursal);

CREATE INDEX IF NOT EXISTS idx_sorteos_cerrado 
ON public.sorteos (cerrado);

-- 5. Migrar datos existentes a incluir sucursal "GENERAL" para sorteos sin sucursal específica
UPDATE public.sorteos 
SET sucursal = 'GENERAL' 
WHERE sucursal IS NULL;

-- 6. Función para obtener usuarios activos por sucursal
CREATE OR REPLACE FUNCTION get_active_users_by_sucursal()
RETURNS TABLE (
    user_id text,
    email text,
    sucursal text,
    factor_default numeric
)
LANGUAGE sql
STABLE
AS $$
    SELECT 
        au.id::text as user_id,
        au.email,
        COALESCE(
            (au.raw_user_meta_data->>'sucursal')::text,
            CASE 
                WHEN au.email LIKE '%venta1%' THEN 'Sucursal 1'
                WHEN au.email LIKE '%venta2%' THEN 'Sucursal 2'
                WHEN au.email LIKE '%venta3%' THEN 'Sucursal 3'
                WHEN au.email LIKE '%venta4%' THEN 'Sucursal 4'
                ELSE 'Principal'
            END
        ) as sucursal,
        75.00 as factor_default
    FROM auth.users au
    WHERE au.email != 'gerencia@loteria.com'
    AND NOT au.email_confirmed_at IS NULL
    ORDER BY sucursal, au.email;
$$;

-- 7. Función para crear sorteos por sucursal al establecer ganador
CREATE OR REPLACE FUNCTION crear_sorteos_por_sucursal(
    p_sorteo_id text,
    p_numero_ganador text,
    p_factores_json jsonb
)
RETURNS boolean
LANGUAGE plpgsql
AS $$
DECLARE
    sucursal_record record;
    factor_value numeric;
BEGIN
    -- Extraer fecha y nombre del sorteo del ID
    DECLARE
        fecha_sorteo date;
        nombre_sorteo text;
        hora_cierre_sorteo timestamp with time zone;
    BEGIN
        fecha_sorteo := (split_part(p_sorteo_id, '-', 1))::date;
        nombre_sorteo := split_part(p_sorteo_id, '-', 2);
        hora_cierre_sorteo := timezone('utc', now());
    END;

    -- Iterar sobre cada sucursal activa y crear/actualizar su sorteo
    FOR sucursal_record IN 
        SELECT DISTINCT sucursal FROM get_active_users_by_sucursal()
    LOOP
        -- Obtener el factor para esta sucursal del JSON
        factor_value := COALESCE(
            (p_factores_json->>sucursal_record.sucursal)::numeric, 
            75.00
        );

        -- Insertar o actualizar el sorteo para esta sucursal
        INSERT INTO public.sorteos (
            id, 
            sucursal,
            fecha, 
            sorteo, 
            hora_cierre, 
            numero_ganador,
            factor_multiplicador, 
            total_vendido, 
            total_pagado, 
            ganancia_neta, 
            cerrado
        )
        VALUES (
            p_sorteo_id,
            sucursal_record.sucursal,
            fecha_sorteo,
            nombre_sorteo,
            hora_cierre_sorteo,
            p_numero_ganador,
            factor_value,
            0,
            0,
            0,
            true
        )
        ON CONFLICT (id, sucursal) 
        DO UPDATE SET
            numero_ganador = EXCLUDED.numero_ganador,
            factor_multiplicador = EXCLUDED.factor_multiplicador,
            cerrado = EXCLUDED.cerrado,
            hora_cierre = EXCLUDED.hora_cierre;
    END LOOP;

    RETURN true;
END;
$$;

-- 8. Función para calcular totales por sucursal
CREATE OR REPLACE FUNCTION calcular_totales_sorteo_por_sucursal(
    p_sorteo_id text
)
RETURNS boolean
LANGUAGE plpgsql
AS $$
DECLARE
    sorteo_record record;
    total_vendido_calc numeric := 0;
    total_pagado_calc numeric := 0;
    ganancia_calc numeric := 0;
BEGIN
    -- Calcular para cada sucursal
    FOR sorteo_record IN 
        SELECT id, sucursal, numero_ganador, factor_multiplicador, sorteo, fecha
        FROM public.sorteos 
        WHERE id = p_sorteo_id AND numero_ganador IS NOT NULL
    LOOP
        -- Calcular ventas de esta sucursal para este sorteo en esta fecha
        SELECT 
            COALESCE(SUM(sd.monto), 0) as vendido,
            COALESCE(SUM(
                CASE WHEN sd.numero::text = lpad(sorteo_record.numero_ganador, 2, '0') 
                THEN sd.monto * sorteo_record.factor_multiplicador 
                ELSE 0 END
            ), 0) as pagado
        INTO total_vendido_calc, total_pagado_calc
        FROM public.sales s
        JOIN public.sale_details sd ON s.id = sd.sale_id
        WHERE s.sucursal = sorteo_record.sucursal
        AND s.sorteo = sorteo_record.sorteo
        AND DATE(s.fecha) = DATE(sorteo_record.fecha);

        ganancia_calc := total_vendido_calc - total_pagado_calc;

        -- Actualizar totales para esta sucursal
        UPDATE public.sorteos 
        SET 
            total_vendido = total_vendido_calc,
            total_pagado = total_pagado_calc,
            ganancia_neta = ganancia_calc
        WHERE id = p_sorteo_id 
        AND sucursal = sorteo_record.sucursal;
    END LOOP;

    RETURN true;
END;
$$;

-- 9. Actualizar políticas RLS para incluir sucursal
DROP POLICY IF EXISTS "Usuarios pueden ver sorteos de su sucursal" ON public.sorteos;
CREATE POLICY "Usuarios pueden ver sorteos de su sucursal" 
ON public.sorteos FOR SELECT 
TO authenticated 
USING (
    -- Admins pueden ver todos
    EXISTS (
        SELECT 1 FROM auth.users 
        WHERE auth.users.id = auth.uid() 
        AND (
            auth.users.email = 'gerencia@loteria.com' 
            OR auth.users.raw_user_meta_data->>'role' = 'admin'
        )
    )
    OR
    -- Usuarios de sucursal solo ven los suyos
    sucursal = COALESCE(
        (SELECT raw_user_meta_data->>'sucursal' FROM auth.users WHERE id = auth.uid()),
        CASE 
            WHEN (SELECT email FROM auth.users WHERE id = auth.uid()) LIKE '%venta1%' THEN 'Sucursal 1'
            WHEN (SELECT email FROM auth.users WHERE id = auth.uid()) LIKE '%venta2%' THEN 'Sucursal 2'
            WHEN (SELECT email FROM auth.users WHERE id = auth.uid()) LIKE '%venta3%' THEN 'Sucursal 3'
            WHEN (SELECT email FROM auth.users WHERE id = auth.uid()) LIKE '%venta4%' THEN 'Sucursal 4'
            ELSE 'Principal'
        END
    )
);

-- 10. Política para modificar sorteos (solo admins)
DROP POLICY IF EXISTS "Solo administradores pueden modificar sorteos" ON public.sorteos;
CREATE POLICY "Solo administradores pueden modificar sorteos" 
ON public.sorteos FOR ALL 
TO authenticated 
USING (
    EXISTS (
        SELECT 1 FROM auth.users 
        WHERE auth.users.id = auth.uid() 
        AND (
            auth.users.email = 'gerencia@loteria.com' 
            OR auth.users.raw_user_meta_data->>'role' = 'admin'
        )
    )
);

-- 11. Grants de permisos
GRANT EXECUTE ON FUNCTION get_active_users_by_sucursal() TO authenticated;
GRANT EXECUTE ON FUNCTION crear_sorteos_por_sucursal(text, text, jsonb) TO authenticated;
GRANT EXECUTE ON FUNCTION calcular_totales_sorteo_por_sucursal(text) TO authenticated;

-- 12. Comentarios para documentación
COMMENT ON COLUMN public.sorteos.sucursal IS 'Sucursal específica para este sorteo. Permite diferentes factores por sucursal.';
COMMENT ON FUNCTION crear_sorteos_por_sucursal(text, text, jsonb) IS 'Crea registros de sorteo para cada sucursal activa con sus factores específicos';
COMMENT ON FUNCTION calcular_totales_sorteo_por_sucursal(text) IS 'Calcula totales de ventas, premios y ganancias por sucursal para un sorteo';
