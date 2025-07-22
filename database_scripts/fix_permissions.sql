-- Script para corregir permisos y función get_active_users_by_sucursal
-- Ejecutar en el SQL Editor de Supabase

-- 1. Crear/Recrear la función get_active_users_by_sucursal con permisos correctos
CREATE OR REPLACE FUNCTION public.get_active_users_by_sucursal()
RETURNS TABLE (
    user_id text,
    email text,
    sucursal text,
    factor_default numeric
)
LANGUAGE sql
SECURITY DEFINER
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
                WHEN au.email LIKE '%venta4%' THEN au.raw_user_meta_data.sucursal
                ELSE 'Principal'
            END
        ) as sucursal,
        75.00 as factor_default
    FROM auth.users au
    WHERE au.email != 'gerencia@loteria.com'
    AND NOT au.email_confirmed_at IS NULL
    ORDER BY sucursal, au.email;
$$;

-- 2. Dar permisos de ejecución a usuarios autenticados
GRANT EXECUTE ON FUNCTION public.get_active_users_by_sucursal() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_active_users_by_sucursal() TO anon;

-- 3. Verificar que la función existe
SELECT proname, proowner, proacl 
FROM pg_proc 
WHERE proname = 'get_active_users_by_sucursal';

-- 4. Probar la función
SELECT * FROM public.get_active_users_by_sucursal() LIMIT 5;

-- 5. Función para crear sorteos por sucursal
CREATE OR REPLACE FUNCTION public.crear_sorteos_por_sucursal(
    p_sorteo_id text,
    p_numero_ganador text,
    p_factores_json jsonb
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    sucursal_record record;
    factor_value numeric;
    fecha_sorteo date;
    nombre_sorteo text;
    hora_cierre_sorteo timestamp with time zone;
BEGIN
    -- Extraer fecha y nombre del sorteo del ID
    -- Formato: "2025-07-22-mañana" -> fecha: "2025-07-22", nombre: "mañana"
    fecha_sorteo := (split_part(p_sorteo_id, '-', 1) || '-' || 
                     split_part(p_sorteo_id, '-', 2) || '-' || 
                     split_part(p_sorteo_id, '-', 3))::date;
    nombre_sorteo := split_part(p_sorteo_id, '-', 4);
    hora_cierre_sorteo := timezone('utc', now());

    -- Iterar sobre cada sucursal activa y crear/actualizar su sorteo
    FOR sucursal_record IN 
        SELECT DISTINCT sucursal FROM public.get_active_users_by_sucursal()
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

-- 6. Función para calcular totales por sucursal
CREATE OR REPLACE FUNCTION public.calcular_totales_sorteo_por_sucursal(
    p_sorteo_id text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
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
        WHERE id = p_sorteo_id
    LOOP
        -- Calcular total vendido para esta sucursal
        SELECT COALESCE(SUM(s.total), 0) INTO total_vendido_calc
        FROM public.sales s
        INNER JOIN auth.users au ON s.user_id = au.id::text
        WHERE s.sorteo = sorteo_record.sorteo
        AND DATE(s.created_at) = sorteo_record.fecha
        AND COALESCE(
            (au.raw_user_meta_data->>'sucursal')::text,
            CASE 
                WHEN au.email LIKE '%venta1%' THEN 'Sucursal 1'
                WHEN au.email LIKE '%venta2%' THEN 'Sucursal 2'
                WHEN au.email LIKE '%venta3%' THEN 'Sucursal 3'
                WHEN au.email LIKE '%venta4%' THEN 'Sucursal 4'
                ELSE 'Principal'
            END
        ) = sorteo_record.sucursal;

        -- Calcular total pagado (números ganadores)
        SELECT COALESCE(SUM(sd.monto * sorteo_record.factor_multiplicador), 0) INTO total_pagado_calc
        FROM public.sale_details sd
        INNER JOIN public.sales s ON sd.sale_id = s.id
        INNER JOIN auth.users au ON s.user_id = au.id::text
        WHERE sd.numero::text = sorteo_record.numero_ganador
        AND s.sorteo = sorteo_record.sorteo
        AND DATE(s.created_at) = sorteo_record.fecha
        AND COALESCE(
            (au.raw_user_meta_data->>'sucursal')::text,
            CASE 
                WHEN au.email LIKE '%venta1%' THEN 'Sucursal 1'
                WHEN au.email LIKE '%venta2%' THEN 'Sucursal 2'
                WHEN au.email LIKE '%venta3%' THEN 'Sucursal 3'
                WHEN au.email LIKE '%venta4%' THEN 'Sucursal 4'
                ELSE 'Principal'
            END
        ) = sorteo_record.sucursal;

        ganancia_calc := total_vendido_calc - total_pagado_calc;

        -- Actualizar el sorteo con los totales calculados
        UPDATE public.sorteos 
        SET 
            total_vendido = total_vendido_calc,
            total_pagado = total_pagado_calc,
            ganancia_neta = ganancia_calc
        WHERE id = p_sorteo_id AND sucursal = sorteo_record.sucursal;
    END LOOP;

    RETURN true;
END;
$$;

-- 7. Dar permisos a las nuevas funciones
GRANT EXECUTE ON FUNCTION public.crear_sorteos_por_sucursal(text, text, jsonb) TO authenticated;
GRANT EXECUTE ON FUNCTION public.calcular_totales_sorteo_por_sucursal(text) TO authenticated;
