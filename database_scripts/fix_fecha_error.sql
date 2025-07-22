-- Script completo para solucionar el problema de fecha en crear_sorteos_por_sucursal
-- Ejecutar en el SQL Editor de Supabase

-- Recrear la función con la corrección de fecha
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

-- Dar permisos
GRANT EXECUTE ON FUNCTION public.crear_sorteos_por_sucursal(text, text, jsonb) TO authenticated;

-- Probar la función con el ejemplo que falló
SELECT public.crear_sorteos_por_sucursal(
    '2025-07-22-mañana',
    '54',
    '{"Centro Sur": 75, "probando": 75, "Sucursal 2": 75, "Sucursal 3": 75, "Sucursal 4": 75}'::jsonb
);
