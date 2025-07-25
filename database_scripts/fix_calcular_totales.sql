-- Script para corregir la función calcular_totales_sorteo_por_sucursal
-- Ejecutar en el SQL Editor de Supabase

-- PRIMERO: Verificar y crear columnas si no existen
DO $$
BEGIN
    -- Agregar columnas si no existen
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'sorteos' AND column_name = 'total_vendido'
    ) THEN
        ALTER TABLE public.sorteos ADD COLUMN total_vendido numeric DEFAULT 0;
        RAISE NOTICE 'Columna total_vendido agregada';
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'sorteos' AND column_name = 'total_pagado'
    ) THEN
        ALTER TABLE public.sorteos ADD COLUMN total_pagado numeric DEFAULT 0;
        RAISE NOTICE 'Columna total_pagado agregada';
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'sorteos' AND column_name = 'ganancia_neta'
    ) THEN
        ALTER TABLE public.sorteos ADD COLUMN ganancia_neta numeric DEFAULT 0;
        RAISE NOTICE 'Columna ganancia_neta agregada';
    END IF;
END $$;

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
    cantidad_numero_ganador_calc numeric := 0;
    ganancia_calc numeric := 0;
    sorteo_fecha date;
    sorteo_name text;
BEGIN
    -- Extraer fecha y nombre del sorteo del ID (formato: YYYY-MM-DD-SORTEO)
    BEGIN
        sorteo_fecha := (string_to_array(p_sorteo_id, '-'))[1] || '-' || 
                       (string_to_array(p_sorteo_id, '-'))[2] || '-' || 
                       (string_to_array(p_sorteo_id, '-'))[3];
        sorteo_name := array_to_string((string_to_array(p_sorteo_id, '-'))[4:], '-');
    EXCEPTION WHEN OTHERS THEN
        RAISE EXCEPTION 'Formato de sorteo_id inválido: %. Debe ser YYYY-MM-DD-SORTEO', p_sorteo_id;
    END;

    -- Verificar que existen sorteos para este ID
    IF NOT EXISTS (SELECT 1 FROM public.sorteos WHERE id = p_sorteo_id) THEN
        RAISE EXCEPTION 'No se encontraron sorteos con ID: %', p_sorteo_id;
    END IF;

    -- Calcular para cada sucursal del sorteo
    FOR sorteo_record IN 
        SELECT id, sucursal, numero_ganador, factor_multiplicador
        FROM public.sorteos 
        WHERE id = p_sorteo_id
        ORDER BY sucursal
    LOOP
        RAISE NOTICE 'Calculando totales para sucursal: % con factor: %', 
                     sorteo_record.sucursal, sorteo_record.factor_multiplicador;

        -- Resetear variables para cada sucursal
        total_vendido_calc := 0;
        total_pagado_calc := 0;
        cantidad_numero_ganador_calc := 0;

        -- Calcular total vendido para esta sucursal
        SELECT COALESCE(SUM(s.total), 0) INTO total_vendido_calc
        FROM public.sales s
        WHERE s.sorteo = sorteo_name
        AND DATE(s.created_at) = sorteo_fecha
        AND s.sucursal = sorteo_record.sucursal;

        -- Calcular cantidad específica del número ganador (sin multiplicar por factor)
        -- Usar conversión segura a texto para comparar
        SELECT COALESCE(SUM(sd.monto), 0) INTO cantidad_numero_ganador_calc
        FROM public.sale_details sd
        INNER JOIN public.sales s ON sd.sale_id = s.id
        WHERE sd.numero::text = sorteo_record.numero_ganador::text
        AND s.sorteo = sorteo_name
        AND DATE(s.created_at) = sorteo_fecha
        AND s.sucursal = sorteo_record.sucursal;

        -- Calcular total pagado (cantidad del número ganador × factor)
        total_pagado_calc := cantidad_numero_ganador_calc * sorteo_record.factor_multiplicador;

        -- Calcular ganancia
        ganancia_calc := total_vendido_calc - total_pagado_calc;

        RAISE NOTICE 'Sucursal %, Vendido: %, Cantidad #%: %, Factor: %, Pagado: %, Ganancia: %',
                     sorteo_record.sucursal, total_vendido_calc, sorteo_record.numero_ganador,
                     cantidad_numero_ganador_calc, sorteo_record.factor_multiplicador, 
                     total_pagado_calc, ganancia_calc;

        -- Actualizar el sorteo con los totales calculados
        -- Solo actualizar las columnas que existen en la tabla
        UPDATE public.sorteos 
        SET 
            total_vendido = total_vendido_calc,
            total_pagado = total_pagado_calc,
            ganancia_neta = ganancia_calc
        WHERE id = p_sorteo_id AND sucursal = sorteo_record.sucursal;

        -- Verificar que la actualización fue exitosa
        IF NOT FOUND THEN
            RAISE WARNING 'No se pudo actualizar el sorteo para sucursal: %', sorteo_record.sucursal;
        END IF;
    END LOOP;

    RAISE NOTICE 'Función calcular_totales_sorteo_por_sucursal completada exitosamente para ID: %', p_sorteo_id;
    
    RETURN true;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Error en calcular_totales_sorteo_por_sucursal: %', SQLERRM;
END;
$$;

-- Función auxiliar para obtener la cantidad del número ganador por sucursal
CREATE OR REPLACE FUNCTION public.get_cantidad_numero_ganador_por_sucursal(
    p_sorteo_id text,
    p_sucursal text,
    p_numero_ganador text
)
RETURNS numeric
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    resultado numeric := 0;
    sorteo_fecha date;
    sorteo_name text;
BEGIN
    -- Extraer fecha y nombre del sorteo del ID
    sorteo_fecha := (string_to_array(p_sorteo_id, '-'))[1] || '-' || 
                   (string_to_array(p_sorteo_id, '-'))[2] || '-' || 
                   (string_to_array(p_sorteo_id, '-'))[3];
    sorteo_name := array_to_string((string_to_array(p_sorteo_id, '-'))[4:], '-');

    -- Calcular cantidad específica del número ganador
    SELECT COALESCE(SUM(sd.monto), 0) INTO resultado
    FROM public.sale_details sd
    INNER JOIN public.sales s ON sd.sale_id = s.id
    WHERE sd.numero::text = p_numero_ganador::text
    AND s.sorteo = sorteo_name
    AND DATE(s.created_at) = sorteo_fecha
    AND s.sucursal = p_sucursal;

    RETURN resultado;
EXCEPTION
    WHEN OTHERS THEN
        RETURN 0;
END;
$$;

-- Dar permisos
GRANT EXECUTE ON FUNCTION public.calcular_totales_sorteo_por_sucursal(text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_cantidad_numero_ganador_por_sucursal(text, text, text) TO authenticated;
