-- Script de pruebas para la función calcular_totales_sorteo_por_sucursal
-- Ejecutar después de implementar la función principal

-- 0. Consulta para verificar tipos de datos y estructura
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name IN ('sorteos', 'sales', 'sale_details') 
AND column_name IN ('numero_ganador', 'numero', 'sorteo', 'sucursal', 'total_vendido', 'total_pagado', 'ganancia_neta')
ORDER BY table_name, column_name;

-- 0.1 Verificar estructura completa de la tabla sorteos
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'sorteos' 
ORDER BY ordinal_position;

-- 0.1 Verificar datos reales existentes
SELECT 
    s.id,
    s.numero_ganador,
    pg_typeof(s.numero_ganador) as tipo_numero_ganador,
    s.sucursal,
    s.sorteo
FROM public.sorteos s
WHERE s.created_at >= CURRENT_DATE - INTERVAL '7 days'
LIMIT 5;

-- 0.2 Verificar datos en sale_details
SELECT 
    sd.numero,
    pg_typeof(sd.numero) as tipo_numero,
    sd.monto,
    s.sorteo,
    s.sucursal
FROM public.sale_details sd
INNER JOIN public.sales s ON sd.sale_id = s.id
WHERE s.created_at >= CURRENT_DATE - INTERVAL '7 days'
LIMIT 5;

-- Ejemplo de uso básico:
-- SELECT public.calcular_totales_sorteo_por_sucursal('2025-07-24-mañana');

-- 1. Consulta para verificar datos antes del cálculo
SELECT 
    s.id,
    s.sucursal,
    s.numero_ganador,
    s.factor_multiplicador,
    s.total_vendido,
    s.total_pagado,
    s.ganancia_neta
FROM public.sorteos s
WHERE s.id LIKE '2025-07-24%'
ORDER BY s.sucursal;

-- 2. Ejecutar función de cálculo (reemplazar con ID real)
-- SELECT public.calcular_totales_sorteo_por_sucursal('2025-07-24-mañana');

-- 3. Verificar resultados después del cálculo
SELECT 
    s.id,
    s.sucursal,
    s.numero_ganador,
    s.factor_multiplicador,
    s.total_vendido,
    s.total_pagado,
    s.ganancia_neta,
    s.updated_at
FROM public.sorteos s
WHERE s.id LIKE '2025-07-24%'
ORDER BY s.sucursal;

-- 4. Prueba de función auxiliar para cantidad del número ganador
-- SELECT public.get_cantidad_numero_ganador_por_sucursal(
--     '2025-07-24-mañana',
--     'Sucursal 1',
--     '45'
-- );

-- 5. Consulta para validar manualmente los cálculos
WITH ventas_por_sucursal AS (
    SELECT 
        s.sucursal,
        s.sorteo,
        DATE(s.created_at) as fecha_venta,
        SUM(s.total) as total_vendido_manual
    FROM public.sales s
    WHERE DATE(s.created_at) = '2025-07-24'
    AND s.sorteo = 'mañana'
    GROUP BY s.sucursal, s.sorteo, DATE(s.created_at)
),
detalles_numero_ganador AS (
    SELECT 
        s.sucursal,
        s.sorteo,
        DATE(s.created_at) as fecha_venta,
        sd.numero,
        SUM(sd.monto) as cantidad_numero
    FROM public.sale_details sd
    INNER JOIN public.sales s ON sd.sale_id = s.id
    WHERE DATE(s.created_at) = '2025-07-24'
    AND s.sorteo = 'mañana'
    AND sd.numero::text = '45'  -- Reemplazar con número ganador real
    GROUP BY s.sucursal, s.sorteo, DATE(s.created_at), sd.numero
)
SELECT 
    v.sucursal,
    v.total_vendido_manual,
    COALESCE(d.cantidad_numero, 0) as cantidad_numero_ganador,
    COALESCE(d.cantidad_numero, 0) * 70 as total_pagado_calculado,  -- Asumir factor 70
    v.total_vendido_manual - (COALESCE(d.cantidad_numero, 0) * 70) as ganancia_calculada
FROM ventas_por_sucursal v
LEFT JOIN detalles_numero_ganador d ON v.sucursal = d.sucursal
ORDER BY v.sucursal;

-- 6. Consulta para ver todos los sorteos disponibles para pruebas
SELECT DISTINCT 
    id,
    fecha,
    sorteo,
    numero_ganador,
    COUNT(*) OVER (PARTITION BY id) as sucursales_count
FROM public.sorteos
WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY fecha DESC, sorteo;

-- 7. Función de prueba completa (descomentar y reemplazar ID)
/*
DO $$
DECLARE
    test_sorteo_id text := '2025-07-24-mañana';
    resultado boolean;
BEGIN
    -- Mostrar datos antes
    RAISE NOTICE 'ANTES del cálculo:';
    PERFORM s.sucursal, s.total_vendido, s.total_pagado, s.ganancia_neta
    FROM public.sorteos s 
    WHERE s.id = test_sorteo_id;
    
    -- Ejecutar cálculo
    SELECT public.calcular_totales_sorteo_por_sucursal(test_sorteo_id) INTO resultado;
    
    -- Mostrar resultado
    IF resultado THEN
        RAISE NOTICE 'Cálculo completado exitosamente';
    ELSE
        RAISE NOTICE 'Error en el cálculo';
    END IF;
    
    -- Mostrar datos después
    RAISE NOTICE 'DESPUÉS del cálculo:';
    PERFORM s.sucursal, s.total_vendido, s.total_pagado, s.ganancia_neta
    FROM public.sorteos s 
    WHERE s.id = test_sorteo_id;
END $$;
*/
