-- Script para limpiar registros duplicados en la tabla sorteos
-- Ejecutar en Supabase SQL Editor

-- 1. Ver los registros actuales de hoy para identificar duplicados
SELECT id, fecha, sorteo, numero_ganador, 
       ROW_NUMBER() OVER (PARTITION BY id ORDER BY fecha DESC) as row_num
FROM sorteos 
WHERE fecha >= '2025-07-18' 
ORDER BY id, fecha DESC;

-- 2. Eliminar duplicados manteniendo solo el registro más reciente de cada ID
-- IMPORTANTE: Ejecutar con cuidado - esto eliminará registros permanentemente

-- Primero, ver qué registros se eliminarían (los más antiguos de cada grupo duplicado):
SELECT s1.id, s1.fecha, s1.numero_ganador
FROM sorteos s1
INNER JOIN (
    SELECT id, MAX(fecha) as max_fecha
    FROM sorteos 
    WHERE fecha >= '2025-07-18'
    GROUP BY id
    HAVING COUNT(*) > 1
) s2 ON s1.id = s2.id
WHERE s1.fecha < s2.max_fecha;

-- 3. Ejecutar la eliminación (descomenta las siguientes líneas cuando estés seguro):
-- DELETE FROM sorteos 
-- WHERE (id, fecha) IN (
--     SELECT s1.id, s1.fecha
--     FROM sorteos s1
--     INNER JOIN (
--         SELECT id, MAX(fecha) as max_fecha
--         FROM sorteos 
--         WHERE fecha >= '2025-07-18'
--         GROUP BY id
--         HAVING COUNT(*) > 1
--     ) s2 ON s1.id = s2.id
--     WHERE s1.fecha < s2.max_fecha
-- );

-- 4. Alternativa más segura: Eliminar duplicados específicos por ID y fecha
-- Reemplaza estos valores con los datos reales que quieres eliminar:

-- DELETE FROM sorteos 
-- WHERE id = '2025-07-18-mañana' 
--   AND fecha = '2025-07-18T18:40:26.367+00:00';

-- 5. Verificar que no hay duplicados después de la limpieza
SELECT id, COUNT(*) as cantidad
FROM sorteos 
GROUP BY id
HAVING COUNT(*) > 1;

-- 6. Ver el estado final de los registros de hoy
SELECT * FROM sorteos 
WHERE fecha >= '2025-07-18' 
ORDER BY id, fecha;
