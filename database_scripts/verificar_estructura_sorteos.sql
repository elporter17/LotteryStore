-- Script de verificación de estructura de tabla sorteos
-- Ejecutar ANTES de corregir la función

-- 1. Verificar estructura completa de la tabla sorteos
SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'sorteos' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Verificar datos de ejemplo
SELECT * FROM public.sorteos LIMIT 3;

-- 3. Verificar si existen las columnas necesarias para los cálculos
SELECT 
    CASE WHEN EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'sorteos' 
        AND column_name = 'total_vendido'
    ) THEN 'total_vendido: EXISTE' 
    ELSE 'total_vendido: NO EXISTE' END as col_total_vendido,
    
    CASE WHEN EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'sorteos' 
        AND column_name = 'total_pagado'
    ) THEN 'total_pagado: EXISTE' 
    ELSE 'total_pagado: NO EXISTE' END as col_total_pagado,
    
    CASE WHEN EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'sorteos' 
        AND column_name = 'ganancia_neta'
    ) THEN 'ganancia_neta: EXISTE' 
    ELSE 'ganancia_neta: NO EXISTE' END as col_ganancia_neta,
    
    CASE WHEN EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'sorteos' 
        AND column_name = 'updated_at'
    ) THEN 'updated_at: EXISTE' 
    ELSE 'updated_at: NO EXISTE' END as col_updated_at;

-- 4. Si las columnas no existen, crear un script para agregarlas
/*
-- DESCOMENTAR Y EJECUTAR SOLO SI LAS COLUMNAS NO EXISTEN:

ALTER TABLE public.sorteos 
ADD COLUMN IF NOT EXISTS total_vendido numeric DEFAULT 0,
ADD COLUMN IF NOT EXISTS total_pagado numeric DEFAULT 0,
ADD COLUMN IF NOT EXISTS ganancia_neta numeric DEFAULT 0;

-- Opcionalmente agregar updated_at si se necesita:
-- ALTER TABLE public.sorteos ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP;
*/
