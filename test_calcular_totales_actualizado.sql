-- Test actualizado para la función calcular_totales_sorteo_por_sucursal
-- Ejecutar después de aplicar fix_calcular_totales.sql

-- 1. Verificar estructura de la tabla sorteos
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'sorteos' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Verificar que existen sorteos con fecha actual
SELECT id, sucursal, numero_ganador, factor_multiplicador, 
       total_vendido, total_pagado, ganancia_neta
FROM public.sorteos
WHERE DATE(created_at) = CURRENT_DATE
ORDER BY sucursal;

-- 3. Si no hay sorteos de hoy, verificar últimos sorteos disponibles
SELECT id, sucursal, numero_ganador, factor_multiplicador, 
       DATE(created_at) as fecha_sorteo,
       total_vendido, total_pagado, ganancia_neta
FROM public.sorteos
ORDER BY created_at DESC
LIMIT 10;

-- 4. Probar la función con un sorteo existente (reemplazar con ID real)
-- Primero encontrar un sorteo válido
SELECT 'Sorteos disponibles para prueba:' as mensaje;
SELECT DISTINCT id, sucursal, numero_ganador
FROM public.sorteos
WHERE id IS NOT NULL
ORDER BY created_at DESC
LIMIT 5;

-- 5. Test de la función auxiliar (reemplazar parámetros con datos reales)
SELECT 'Test función auxiliar:' as mensaje;
-- SELECT public.get_cantidad_numero_ganador_por_sucursal('2025-01-24-mañana', 'Sucursal1', '123');

-- 6. Test de la función principal (descomentar cuando tengas un ID válido)
-- SELECT public.calcular_totales_sorteo_por_sucursal('2025-01-24-mañana');

-- 7. Verificar resultados después de ejecutar la función
-- SELECT id, sucursal, numero_ganador, total_vendido, total_pagado, ganancia_neta
-- FROM public.sorteos
-- WHERE id = '2025-01-24-mañana'
-- ORDER BY sucursal;
