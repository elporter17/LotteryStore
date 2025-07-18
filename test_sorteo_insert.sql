-- Script SQL para probar inserción en tabla sorteos
-- Copia y pega este script en el SQL Editor de Supabase

-- 1. Primero verificar la estructura actual de la tabla
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'sorteos' 
ORDER BY ordinal_position;

-- 2. Ver datos existentes (si los hay)
SELECT * FROM sorteos LIMIT 5;

-- 3. Script de inserción con datos de prueba
-- Usa datos similares a los que envía tu aplicación

-- Ejemplo 1: Sorteo de Lotería Nacional
INSERT INTO sorteos (
    id, 
    fecha, 
    sorteo, 
    hora_cierre, 
    numero_ganador, 
    factor_multiplicador, 
    total_vendido, 
    total_pagado, 
    ganancia_neta, 
    cerrado
) VALUES (
    '2025-07-18-Lotería Nacional',
    '2025-07-18T18:00:00.000Z',
    'Lotería Nacional',
    '2025-07-18T18:00:00.000Z',
    '12',  -- Ahora es TEXT, no int4
    1.0,
    0.0,
    0.0,
    0.0,
    true
);

-- Ejemplo 2: Sorteo de Loto Pool
INSERT INTO sorteos (
    id, 
    fecha, 
    sorteo, 
    hora_cierre, 
    numero_ganador, 
    factor_multiplicador, 
    total_vendido, 
    total_pagado, 
    ganancia_neta, 
    cerrado
) VALUES (
    '2025-07-18-Loto Pool',
    '2025-07-18T20:00:00.000Z',
    'Loto Pool',
    '2025-07-18T20:00:00.000Z',
    '56',  -- Ahora es TEXT, no int4
    1.5,
    0.0,
    0.0,
    0.0,
    true
);

-- 4. Verificar que se insertaron correctamente
SELECT * FROM sorteos WHERE fecha >= '2025-07-18' ORDER BY fecha DESC;

-- 5. Test de UPDATE (como lo que hace tu aplicación)
UPDATE sorteos 
SET 
    numero_ganador = '99',  -- TEXT, no número
    fecha = '2025-07-18T19:00:00.000Z',
    hora_cierre = '2025-07-18T19:00:00.000Z'
WHERE id = '2025-07-18-Lotería Nacional';

-- 6. Verificar el UPDATE
SELECT * FROM sorteos WHERE id = '2025-07-18-Lotería Nacional';

-- 7. Test con números de 1 dígito (como envía tu app con padStart)
INSERT INTO sorteos (
    id, 
    fecha, 
    sorteo, 
    hora_cierre, 
    numero_ganador, 
    factor_multiplicador, 
    total_vendido, 
    total_pagado, 
    ganancia_neta, 
    cerrado
) VALUES (
    '2025-07-18-Leidsa',
    '2025-07-18T21:00:00.000Z',
    'Leidsa',
    '2025-07-18T21:00:00.000Z',
    '05',  -- Número con padStart(2, '0')
    1.0,
    0.0,
    0.0,
    0.0,
    true
);

-- 8. Limpiar datos de prueba (ejecutar al final)
-- DELETE FROM sorteos WHERE id IN ('2025-07-18-Lotería Nacional', '2025-07-18-Loto Pool', '2025-07-18-Leidsa');

-- NOTAS IMPORTANTES:
-- - El campo numero_ganador ahora es TEXT, no int4
-- - Las fechas están en formato UTC (terminan en Z)
-- - El ID sigue el patrón: YYYY-MM-DD-NombreSorteo
-- - Los campos numéricos usan punto decimal (1.0, no 1,0)
-- - Si alguna inserción falla, revisa el error específico
-- - Si todo funciona aquí pero no en la app, el problema son las políticas RLS

-- Para ver las políticas RLS actuales:
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'sorteos';

-- Para deshabilitar temporalmente RLS (solo para debugging):
-- ALTER TABLE sorteos DISABLE ROW LEVEL SECURITY;

-- Para rehabilitar RLS:
-- ALTER TABLE sorteos ENABLE ROW LEVEL SECURITY;
