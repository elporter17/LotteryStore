-- Verificar el estado de las tablas de cierre de caja

-- 1. Verificar estructura de las tablas
SELECT 
    'ESTRUCTURA CIERRES_DIARIOS' as info,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'cierres_diarios' 
ORDER BY ordinal_position;

SELECT 
    'ESTRUCTURA MOVIMIENTOS_CAJA' as info,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'movimientos_caja' 
ORDER BY ordinal_position;

-- 2. Verificar datos existentes
SELECT 'REGISTROS CIERRES_DIARIOS' as info;
SELECT COUNT(*) as total_registros FROM public.cierres_diarios;

SELECT 'REGISTROS MOVIMIENTOS_CAJA' as info;
SELECT COUNT(*) as total_registros FROM public.movimientos_caja;

-- 3. Verificar el problema específico del usuario
SELECT 'BUSQUEDA PROBLEMA ESPECÍFICO' as info;
SELECT * FROM public.cierres_diarios 
WHERE fecha::text LIKE '2025-07-25%' 
AND sucursal = 'Centro Sur';
