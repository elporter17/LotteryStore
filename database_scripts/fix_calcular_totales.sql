-- Script para corregir la función calcular_totales_sorteo_por_sucursal
-- Ejecutar en el SQL Editor de Supabase

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
        INNER JOIN auth.users au ON s.user_id::uuid = au.id
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
        INNER JOIN auth.users au ON s.user_id::uuid = au.id
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

-- Dar permisos
GRANT EXECUTE ON FUNCTION public.calcular_totales_sorteo_por_sucursal(text) TO authenticated;
