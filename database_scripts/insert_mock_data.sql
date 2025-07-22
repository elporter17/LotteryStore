-- SCRIPT PARA INSERTAR DATA DE PRUEBA EN SALES Y SALE_DETAILS
-- Fecha: 21 de Julio de 2025
-- Ejecutar en Supabase SQL Editor

-- Limpiar datos existentes de la fecha de hoy (opcional)
-- DELETE FROM sale_details WHERE sale_id IN (
--   SELECT id FROM sales WHERE created_at::date = '2025-07-21'
-- );
-- DELETE FROM sales WHERE created_at::date = '2025-07-21';

-- Variables para la fecha de hoy
-- SET @fecha_hoy = '2025-07-21';

-- =============================================
-- SORTEO DE LA MAÑANA (9:00 AM - 11:30 AM)
-- =============================================

-- Insertar ventas para sorteo mañana
INSERT INTO sales (sorteo, total, created_at, sucursal) VALUES
('mañana', 150.00, '2025-07-21 09:15:00', 'Centro Sur'),
('mañana', 225.50, '2025-07-21 09:30:00', 'Sucursal 2'),
('mañana', 175.25, '2025-07-21 09:45:00', 'Centro Sur'),
('mañana', 300.00, '2025-07-21 10:00:00', 'Sucursal Norte'),
('mañana', 125.75, '2025-07-21 10:15:00', 'Centro Sur'),
('mañana', 200.00, '2025-07-21 10:30:00', 'Sucursal 2'),
('mañana', 275.50, '2025-07-21 10:45:00', 'Sucursal Norte'),
('mañana', 185.25, '2025-07-21 11:00:00', 'Centro Sur'),
('mañana', 250.75, '2025-07-21 11:15:00', 'Sucursal 2'),
('mañana', 195.00, '2025-07-21 11:25:00', 'Sucursal Norte');

-- Insertar detalles de ventas para sorteo mañana
-- Sale ID 1 (asumiendo que los IDs empiezan desde el último ID + 1)
WITH sale_ids AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY created_at) as rn
  FROM sales 
  WHERE sorteo = 'mañana' AND created_at::date = '2025-07-21'
)
INSERT INTO sale_details (sale_id, numero, monto)
SELECT 
  s.id,
  d.numero,
  d.monto
FROM sale_ids s
CROSS JOIN (
  -- Venta 1: $150.00
  SELECT '07' as numero, 25.00 as monto WHERE s.rn = 1
  UNION ALL SELECT '23', 50.00 WHERE s.rn = 1
  UNION ALL SELECT '45', 75.00 WHERE s.rn = 1
  
  -- Venta 2: $225.50
  UNION ALL SELECT '12' as numero, 75.50 as monto WHERE s.rn = 2
  UNION ALL SELECT '34', 100.00 WHERE s.rn = 2
  UNION ALL SELECT '67', 50.00 WHERE s.rn = 2
  
  -- Venta 3: $175.25
  UNION ALL SELECT '89' as numero, 125.25 as monto WHERE s.rn = 3
  UNION ALL SELECT '01', 50.00 WHERE s.rn = 3
  
  -- Venta 4: $300.00
  UNION ALL SELECT '56' as numero, 150.00 as monto WHERE s.rn = 4
  UNION ALL SELECT '78', 100.00 WHERE s.rn = 4
  UNION ALL SELECT '90', 50.00 WHERE s.rn = 4
  
  -- Venta 5: $125.75
  UNION ALL SELECT '33' as numero, 75.75 as monto WHERE s.rn = 5
  UNION ALL SELECT '44', 50.00 WHERE s.rn = 5
  
  -- Venta 6: $200.00
  UNION ALL SELECT '15' as numero, 100.00 as monto WHERE s.rn = 6
  UNION ALL SELECT '27', 100.00 WHERE s.rn = 6
  
  -- Venta 7: $275.50
  UNION ALL SELECT '39' as numero, 125.50 as monto WHERE s.rn = 7
  UNION ALL SELECT '51', 100.00 WHERE s.rn = 7
  UNION ALL SELECT '63', 50.00 WHERE s.rn = 7
  
  -- Venta 8: $185.25
  UNION ALL SELECT '75' as numero, 135.25 as monto WHERE s.rn = 8
  UNION ALL SELECT '87', 50.00 WHERE s.rn = 8
  
  -- Venta 9: $250.75
  UNION ALL SELECT '99' as numero, 150.75 as monto WHERE s.rn = 9
  UNION ALL SELECT '11', 100.00 WHERE s.rn = 9
  
  -- Venta 10: $195.00
  UNION ALL SELECT '22' as numero, 95.00 as monto WHERE s.rn = 10
  UNION ALL SELECT '55', 100.00 WHERE s.rn = 10
) d;

-- =============================================
-- SORTEO DE LA TARDE (2:00 PM - 4:30 PM)
-- =============================================

-- Insertar ventas para sorteo tarde
INSERT INTO sales (sorteo, total, created_at, sucursal) VALUES
('tarde', 180.00, '2025-07-21 14:15:00', 'Centro Sur'),
('tarde', 255.75, '2025-07-21 14:30:00', 'Sucursal 2'),
('tarde', 195.50, '2025-07-21 14:45:00', 'Sucursal Norte'),
('tarde', 320.25, '2025-07-21 15:00:00', 'Centro Sur'),
('tarde', 145.00, '2025-07-21 15:15:00', 'Sucursal 2'),
('tarde', 275.75, '2025-07-21 15:30:00', 'Sucursal Norte'),
('tarde', 220.50, '2025-07-21 15:45:00', 'Centro Sur'),
('tarde', 165.25, '2025-07-21 16:00:00', 'Sucursal 2'),
('tarde', 290.00, '2025-07-21 16:15:00', 'Sucursal Norte'),
('tarde', 205.75, '2025-07-21 16:25:00', 'Centro Sur');

-- Insertar detalles de ventas para sorteo tarde
WITH sale_ids AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY created_at) as rn
  FROM sales 
  WHERE sorteo = 'tarde' AND created_at::date = '2025-07-21'
)
INSERT INTO sale_details (sale_id, numero, monto)
SELECT 
  s.id,
  d.numero,
  d.monto
FROM sale_ids s
CROSS JOIN (
  -- Venta 1: $180.00
  SELECT '00' as numero, 80.00 as monto WHERE s.rn = 1
  UNION ALL SELECT '13', 100.00 WHERE s.rn = 1
  
  -- Venta 2: $255.75
  UNION ALL SELECT '26' as numero, 125.75 as monto WHERE s.rn = 2
  UNION ALL SELECT '38', 80.00 WHERE s.rn = 2
  UNION ALL SELECT '49', 50.00 WHERE s.rn = 2
  
  -- Venta 3: $195.50
  UNION ALL SELECT '62' as numero, 145.50 as monto WHERE s.rn = 3
  UNION ALL SELECT '74', 50.00 WHERE s.rn = 3
  
  -- Venta 4: $320.25
  UNION ALL SELECT '85' as numero, 170.25 as monto WHERE s.rn = 4
  UNION ALL SELECT '97', 100.00 WHERE s.rn = 4
  UNION ALL SELECT '08', 50.00 WHERE s.rn = 4
  
  -- Venta 5: $145.00
  UNION ALL SELECT '19' as numero, 95.00 as monto WHERE s.rn = 5
  UNION ALL SELECT '31', 50.00 WHERE s.rn = 5
  
  -- Venta 6: $275.75
  UNION ALL SELECT '42' as numero, 125.75 as monto WHERE s.rn = 6
  UNION ALL SELECT '54', 100.00 WHERE s.rn = 6
  UNION ALL SELECT '66', 50.00 WHERE s.rn = 6
  
  -- Venta 7: $220.50
  UNION ALL SELECT '77' as numero, 120.50 as monto WHERE s.rn = 7
  UNION ALL SELECT '88', 100.00 WHERE s.rn = 7
  
  -- Venta 8: $165.25
  UNION ALL SELECT '02' as numero, 115.25 as monto WHERE s.rn = 8
  UNION ALL SELECT '14', 50.00 WHERE s.rn = 8
  
  -- Venta 9: $290.00
  UNION ALL SELECT '25' as numero, 140.00 as monto WHERE s.rn = 9
  UNION ALL SELECT '37', 100.00 WHERE s.rn = 9
  UNION ALL SELECT '48', 50.00 WHERE s.rn = 9
  
  -- Venta 10: $205.75
  UNION ALL SELECT '59' as numero, 105.75 as monto WHERE s.rn = 10
  UNION ALL SELECT '71', 100.00 WHERE s.rn = 10
) d;

-- =============================================
-- SORTEO DE LA NOCHE (7:00 PM - 9:30 PM)
-- =============================================

-- Insertar ventas para sorteo noche
INSERT INTO sales (sorteo, total, created_at, sucursal) VALUES
('noche', 210.25, '2025-07-21 19:15:00', 'Centro Sur'),
('noche', 285.50, '2025-07-21 19:30:00', 'Sucursal 2'),
('noche', 165.75, '2025-07-21 19:45:00', 'Sucursal Norte'),
('noche', 350.00, '2025-07-21 20:00:00', 'Centro Sur'),
('noche', 195.25, '2025-07-21 20:15:00', 'Sucursal 2'),
('noche', 225.75, '2025-07-21 20:30:00', 'Sucursal Norte'),
('noche', 275.50, '2025-07-21 20:45:00', 'Centro Sur'),
('noche', 185.00, '2025-07-21 21:00:00', 'Sucursal 2'),
('noche', 315.25, '2025-07-21 21:15:00', 'Sucursal Norte'),
('noche', 240.75, '2025-07-21 21:25:00', 'Centro Sur');

-- Insertar detalles de ventas para sorteo noche
WITH sale_ids AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY created_at) as rn
  FROM sales 
  WHERE sorteo = 'noche' AND created_at::date = '2025-07-21'
)
INSERT INTO sale_details (sale_id, numero, monto)
SELECT 
  s.id,
  d.numero,
  d.monto
FROM sale_ids s
CROSS JOIN (
  -- Venta 1: $210.25
  SELECT '03' as numero, 110.25 as monto WHERE s.rn = 1
  UNION ALL SELECT '16', 100.00 WHERE s.rn = 1
  
  -- Venta 2: $285.50
  UNION ALL SELECT '28' as numero, 135.50 as monto WHERE s.rn = 2
  UNION ALL SELECT '40', 100.00 WHERE s.rn = 2
  UNION ALL SELECT '52', 50.00 WHERE s.rn = 2
  
  -- Venta 3: $165.75
  UNION ALL SELECT '64' as numero, 115.75 as monto WHERE s.rn = 3
  UNION ALL SELECT '76', 50.00 WHERE s.rn = 3
  
  -- Venta 4: $350.00
  UNION ALL SELECT '82' as numero, 200.00 as monto WHERE s.rn = 4
  UNION ALL SELECT '94', 100.00 WHERE s.rn = 4
  UNION ALL SELECT '06', 50.00 WHERE s.rn = 4
  
  -- Venta 5: $195.25
  UNION ALL SELECT '17' as numero, 145.25 as monto WHERE s.rn = 5
  UNION ALL SELECT '29', 50.00 WHERE s.rn = 5
  
  -- Venta 6: $225.75
  UNION ALL SELECT '41' as numero, 125.75 as monto WHERE s.rn = 6
  UNION ALL SELECT '53', 100.00 WHERE s.rn = 6
  
  -- Venta 7: $275.50
  UNION ALL SELECT '65' as numero, 175.50 as monto WHERE s.rn = 7
  UNION ALL SELECT '77', 100.00 WHERE s.rn = 7
  
  -- Venta 8: $185.00
  UNION ALL SELECT '89' as numero, 135.00 as monto WHERE s.rn = 8
  UNION ALL SELECT '01', 50.00 WHERE s.rn = 8
  
  -- Venta 9: $315.25
  UNION ALL SELECT '12' as numero, 165.25 as monto WHERE s.rn = 9
  UNION ALL SELECT '24', 100.00 WHERE s.rn = 9
  UNION ALL SELECT '36', 50.00 WHERE s.rn = 9
  
  -- Venta 10: $240.75
  UNION ALL SELECT '47' as numero, 140.75 as monto WHERE s.rn = 10
  UNION ALL SELECT '58', 100.00 WHERE s.rn = 10
) d;

-- =============================================
-- VERIFICACIÓN DE DATOS INSERTADOS
-- =============================================

-- Verificar ventas por sorteo
SELECT 
  sorteo,
  COUNT(*) as total_ventas,
  SUM(total) as total_vendido,
  MIN(created_at) as primera_venta,
  MAX(created_at) as ultima_venta
FROM sales 
WHERE created_at::date = '2025-07-21'
GROUP BY sorteo
ORDER BY 
  CASE sorteo 
    WHEN 'mañana' THEN 1 
    WHEN 'tarde' THEN 2 
    WHEN 'noche' THEN 3 
  END;

-- Verificar detalles de ventas por sorteo
SELECT 
  s.sorteo,
  COUNT(sd.id) as total_detalles,
  COUNT(DISTINCT sd.numero) as numeros_diferentes,
  SUM(sd.monto) as total_monto_detalles
FROM sales s
JOIN sale_details sd ON s.id = sd.sale_id
WHERE s.created_at::date = '2025-07-21'
GROUP BY s.sorteo
ORDER BY 
  CASE s.sorteo 
    WHEN 'mañana' THEN 1 
    WHEN 'tarde' THEN 2 
    WHEN 'noche' THEN 3 
  END;

-- Verificar top 10 números más vendidos del día
SELECT 
  sd.numero,
  COUNT(*) as veces_jugado,
  SUM(sd.monto) as total_vendido
FROM sales s
JOIN sale_details sd ON s.id = sd.sale_id
WHERE s.created_at::date = '2025-07-21'
GROUP BY sd.numero
ORDER BY SUM(sd.monto) DESC
LIMIT 10;
