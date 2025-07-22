-- SCRIPT PARA CREAR VISTA Y FUNCIÓN DE VENTAS POR NÚMERO
-- Ejecutar en Supabase SQL Editor

-- Crear vista para ventas por número
CREATE OR REPLACE VIEW ventas_por_numero_view AS
SELECT 
  s.sorteo,
  sd.numero,
  s.created_at::date as fecha,
  COUNT(sd.numero) as total_cantidad,
  SUM(sd.monto) as total_vendido
FROM sales s
JOIN sale_details sd ON s.id = sd.sale_id
WHERE s.created_at IS NOT NULL
GROUP BY s.sorteo, sd.numero, s.created_at::date
ORDER BY s.sorteo, s.created_at::date, sd.numero;

-- Función para obtener ventas por número de un sorteo específico en una fecha
CREATE OR REPLACE FUNCTION get_ventas_por_numero(
  p_sorteo_name TEXT,
  p_fecha DATE
) RETURNS TABLE (
  numero TEXT,
  total_cantidad BIGINT,
  total_vendido NUMERIC
) 
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    sd.numero::TEXT,
    COALESCE(COUNT(sd.numero), 0)::BIGINT as total_cantidad,
    COALESCE(SUM(sd.monto), 0)::NUMERIC as total_vendido
  FROM sales s
  JOIN sale_details sd ON s.id = sd.sale_id
  WHERE s.sorteo = p_sorteo_name
    AND s.created_at::date = p_fecha
  GROUP BY sd.numero
  ORDER BY sd.numero;
END;
$$;

-- Función para obtener el top de números más vendidos
CREATE OR REPLACE FUNCTION get_top_numeros_vendidos(
  p_sorteo_name TEXT,
  p_fecha DATE,
  p_limit INTEGER DEFAULT 10
) RETURNS TABLE (
  numero TEXT,
  total_cantidad BIGINT,
  total_vendido NUMERIC
) 
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    sd.numero::TEXT,
    COALESCE(COUNT(sd.numero), 0)::BIGINT as total_cantidad,
    COALESCE(SUM(sd.monto), 0)::NUMERIC as total_vendido
  FROM sales s
  JOIN sale_details sd ON s.id = sd.sale_id
  WHERE s.sorteo = p_sorteo_name
    AND s.created_at::date = p_fecha
  GROUP BY sd.numero
  ORDER BY SUM(sd.monto) DESC, COUNT(sd.numero) DESC
  LIMIT p_limit;
END;
$$;

-- Función para obtener estadísticas de ventas por número
CREATE OR REPLACE FUNCTION get_estadisticas_ventas_numero(
  p_sorteo_name TEXT,
  p_fecha DATE
) RETURNS TABLE (
  total_numeros_vendidos INTEGER,
  numero_mas_vendido TEXT,
  max_venta NUMERIC,
  promedio_por_numero NUMERIC,
  mediana_ventas NUMERIC
) 
LANGUAGE plpgsql
AS $$
DECLARE
  ventas_array NUMERIC[];
BEGIN
  -- Obtener array de todas las ventas para calcular mediana
  SELECT array_agg(total_vendido ORDER BY total_vendido)
  INTO ventas_array
  FROM (
    SELECT SUM(sd.monto) as total_vendido
    FROM sales s
    JOIN sale_details sd ON s.id = sd.sale_id
    WHERE s.sorteo = p_sorteo_name
      AND s.created_at::date = p_fecha
    GROUP BY sd.numero
  ) sub;

  RETURN QUERY
  SELECT 
    COUNT(DISTINCT sd.numero)::INTEGER as total_numeros_vendidos,
    (
      SELECT sd2.numero::TEXT
      FROM sales s2
      JOIN sale_details sd2 ON s2.id = sd2.sale_id
      WHERE s2.sorteo = p_sorteo_name
        AND s2.created_at::date = p_fecha
      GROUP BY sd2.numero
      ORDER BY SUM(sd2.monto) DESC
      LIMIT 1
    ) as numero_mas_vendido,
    COALESCE(MAX(sub.total_vendido), 0)::NUMERIC as max_venta,
    COALESCE(AVG(sub.total_vendido), 0)::NUMERIC as promedio_por_numero,
    CASE 
      WHEN array_length(ventas_array, 1) > 0 THEN
        CASE 
          WHEN array_length(ventas_array, 1) % 2 = 1 THEN
            ventas_array[array_length(ventas_array, 1) / 2 + 1]
          ELSE
            (ventas_array[array_length(ventas_array, 1) / 2] + 
             ventas_array[array_length(ventas_array, 1) / 2 + 1]) / 2
        END
      ELSE 0
    END::NUMERIC as mediana_ventas
  FROM (
    SELECT SUM(sd.monto) as total_vendido
    FROM sales s
    JOIN sale_details sd ON s.id = sd.sale_id
    WHERE s.sorteo = p_sorteo_name
      AND s.created_at::date = p_fecha
    GROUP BY sd.numero
  ) sub;
END;
$$;

-- Ejemplo de uso de las funciones:
-- SELECT * FROM get_ventas_por_numero('mañana', '2025-01-20');
-- SELECT * FROM get_top_numeros_vendidos('mañana', '2025-01-20', 5);
-- SELECT * FROM get_estadisticas_ventas_numero('mañana', '2025-01-20');

-- Función auxiliar para validar rangos de números (00-99)
CREATE OR REPLACE FUNCTION validar_numero_loteria(numero TEXT) 
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
BEGIN
  -- Verificar que sea un número válido de 00 a 99
  IF numero ~ '^[0-9]{1,2}$' THEN
    RETURN (numero::INTEGER >= 0 AND numero::INTEGER <= 99);
  END IF;
  RETURN FALSE;
END;
$$;

-- Vista mejorada que incluye validación de números
CREATE OR REPLACE VIEW ventas_por_numero_completa AS
SELECT 
  s.sorteo,
  LPAD(sd.numero, 2, '0') as numero_formateado, -- Asegurar formato 00-99
  sd.numero as numero_original,
  s.created_at::date as fecha,
  COUNT(sd.numero) as total_cantidad,
  SUM(sd.monto) as total_vendido,
  s.sucursal
FROM sales s
JOIN sale_details sd ON s.id = sd.sale_id
WHERE s.created_at IS NOT NULL 
  AND validar_numero_loteria(sd.numero)
GROUP BY s.sorteo, sd.numero, s.created_at::date, s.sucursal
ORDER BY s.sorteo, s.created_at::date, numero_formateado;

-- Comentarios sobre permisos
-- GRANT SELECT ON ventas_por_numero_view TO anon, authenticated;
-- GRANT EXECUTE ON FUNCTION get_ventas_por_numero(TEXT, DATE) TO anon, authenticated;
-- GRANT EXECUTE ON FUNCTION get_top_numeros_vendidos(TEXT, DATE, INTEGER) TO anon, authenticated;
-- GRANT EXECUTE ON FUNCTION get_estadisticas_ventas_numero(TEXT, DATE) TO anon, authenticated;
