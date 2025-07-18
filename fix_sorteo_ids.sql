-- Script para corregir IDs de sorteos con formato inconsistente
-- Este script cambia IDs del formato "Fri Jul 18 2025-mañana" al formato "2025-07-18-mañana"

-- Primero, vamos a ver qué registros necesitan corrección
SELECT 
    id as old_id,
    fecha,
    sorteo,
    -- Convertir fecha a formato YYYY-MM-DD y crear nuevo ID
    DATE(fecha) || '-' || sorteo as new_id,
    numero_ganador,
    cerrado
FROM sorteos 
WHERE id NOT LIKE '____-__-__-%' -- No tienen formato YYYY-MM-DD
ORDER BY fecha DESC;

-- Script para actualizar los IDs (ejecutar solo después de revisar los resultados de arriba)
/*
-- IMPORTANTE: Hacer backup antes de ejecutar este UPDATE

-- Crear tabla temporal con los datos corregidos
CREATE TEMP TABLE sorteos_corrected AS
SELECT 
    DATE(fecha) || '-' || sorteo as new_id,
    fecha,
    sorteo,
    hora_cierre,
    numero_ganador,
    factor_multiplicador,
    total_vendido,
    total_pagado,
    ganancia_neta,
    cerrado,
    id as old_id
FROM sorteos 
WHERE id NOT LIKE '____-__-__-%';

-- Insertar los registros corregidos
INSERT INTO sorteos (id, fecha, sorteo, hora_cierre, numero_ganador, factor_multiplicador, total_vendido, total_pagado, ganancia_neta, cerrado)
SELECT new_id, fecha, sorteo, hora_cierre, numero_ganador, factor_multiplicador, total_vendido, total_pagado, ganancia_neta, cerrado
FROM sorteos_corrected
ON CONFLICT (id) DO UPDATE SET
    numero_ganador = EXCLUDED.numero_ganador,
    factor_multiplicador = EXCLUDED.factor_multiplicador,
    total_vendido = EXCLUDED.total_vendido,
    total_pagado = EXCLUDED.total_pagado,
    ganancia_neta = EXCLUDED.ganancia_neta,
    cerrado = EXCLUDED.cerrado;

-- Eliminar los registros con IDs incorrectos
DELETE FROM sorteos 
WHERE id IN (SELECT old_id FROM sorteos_corrected);

-- Limpiar tabla temporal
DROP TABLE sorteos_corrected;
*/

-- Verificar los resultados después de la corrección
-- SELECT id, fecha, sorteo, numero_ganador FROM sorteos ORDER BY fecha DESC LIMIT 10;
