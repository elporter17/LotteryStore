
-- FUNCIONES DE OPTIMIZACIÓN PARA SISTEMA DE LOTERÍA
-- Ejecutar todas las funciones en Supabase SQL Editor

-- 1. Función principal optimizada para obtener resumen de sorteos
CREATE OR REPLACE FUNCTION get_resumen_sorteos_optimizado(
    p_fecha TEXT,
    p_sucursal TEXT
)
RETURNS TABLE (
    sorteo TEXT,
    total_vendido NUMERIC,
    numeros_vendidos JSONB,
    numero_ganador TEXT,
    total_pagar NUMERIC,
    factor INTEGER
) 
LANGUAGE sql
AS $$
    WITH sorteo_totals AS (
        SELECT 
            s.sorteo,
            SUM(sd.monto) as total_vendido
        FROM sales s
        INNER JOIN sale_details sd ON s.id = sd.sale_id
        WHERE (
            s.fecha::date = p_fecha::date
            OR s.created_at::date = p_fecha::date
            OR s.fecha::text = p_fecha
        )
        AND s.sucursal = p_sucursal
        GROUP BY s.sorteo
    ),
    numeros_por_sorteo AS (
        SELECT 
            sub.sorteo,
            jsonb_object_agg(sub.numero::TEXT, sub.numero_total) as numeros_vendidos
        FROM (
            SELECT 
                s.sorteo,
                sd.numero,
                SUM(sd.monto) as numero_total
            FROM sales s
            INNER JOIN sale_details sd ON s.id = sd.sale_id
            WHERE (
                s.fecha::date = p_fecha::date
                OR s.created_at::date = p_fecha::date
                OR s.fecha::text = p_fecha
            )
            AND s.sucursal = p_sucursal
            GROUP BY s.sorteo, sd.numero
        ) sub
        GROUP BY sub.sorteo
    )
    SELECT 
        st.sorteo,
        COALESCE(st.total_vendido, 0)::NUMERIC as total_vendido,
        COALESCE(nps.numeros_vendidos, '{}'::jsonb) as numeros_vendidos,
        NULL::TEXT as numero_ganador,
        0::NUMERIC as total_pagar,
        70 as factor
    FROM sorteo_totals st
    LEFT JOIN numeros_por_sorteo nps ON st.sorteo = nps.sorteo
    ORDER BY st.sorteo;
$$;

-- 2. Función específica para obtener números vendidos por sorteo (llamada lazy)
CREATE OR REPLACE FUNCTION get_numeros_vendidos_sorteo(
    p_fecha TEXT,
    p_sucursal TEXT,
    p_sorteo TEXT
)
RETURNS TABLE (
    numero TEXT,
    monto_total NUMERIC
) 
LANGUAGE sql
AS $$
    SELECT 
        sd.numero::TEXT,
        SUM(sd.monto)::NUMERIC as monto_total
    FROM sales s
    INNER JOIN sale_details sd ON s.id = sd.sale_id
    WHERE (
        s.fecha::date = p_fecha::date
        OR s.created_at::date = p_fecha::date
        OR s.fecha::text = p_fecha
    )
    AND s.sucursal = p_sucursal
    AND (
        s.sorteo = CASE 
            WHEN UPPER(p_sorteo) = 'MANANA' THEN 'mañana'
            WHEN UPPER(p_sorteo) = 'TARDE' THEN 'tarde' 
            WHEN UPPER(p_sorteo) = 'NOCHE' THEN 'noche'
            ELSE LOWER(p_sorteo)
        END
    )
    GROUP BY sd.numero
    ORDER BY monto_total DESC;
$$;

-- 2b. Función de diagnóstico para verificar datos
CREATE OR REPLACE FUNCTION debug_ventas_data(
    p_fecha TEXT,
    p_sucursal TEXT,
    p_sorteo TEXT
)
RETURNS TABLE (
    total_sales BIGINT,
    fechas_encontradas TEXT[],
    sucursales_encontradas TEXT[],
    sorteos_encontrados TEXT[]
) 
LANGUAGE sql
AS $$
SELECT 
    COUNT(*)::BIGINT as total_sales,
    array_agg(DISTINCT s.fecha::text) as fechas_encontradas,
    array_agg(DISTINCT s.sucursal) as sucursales_encontradas,
    array_agg(DISTINCT s.sorteo) as sorteos_encontrados
FROM sales s
WHERE s.fecha::text LIKE '%' || p_fecha || '%'
   OR s.sucursal LIKE '%' || p_sucursal || '%'
   OR UPPER(s.sorteo) LIKE '%' || UPPER(p_sorteo) || '%';
$$;

-- 3. Versión alternativa con condiciones más flexibles
CREATE OR REPLACE FUNCTION get_numeros_vendidos_sorteo_flexible(
    p_fecha TEXT,
    p_sucursal TEXT,
    p_sorteo TEXT
)
RETURNS TABLE (
    numero TEXT,
    monto_total NUMERIC,
    debug_info TEXT
) 
LANGUAGE sql
AS $$
    SELECT 
        sd.numero::TEXT,
        SUM(sd.monto)::NUMERIC as monto_total,
        STRING_AGG(DISTINCT (s.fecha::text || ' | ' || s.sucursal || ' | ' || s.sorteo), '; ') as debug_info
    FROM sales s
    INNER JOIN sale_details sd ON s.id = sd.sale_id
    WHERE (
        s.fecha::text = p_fecha 
        OR s.fecha::date = p_fecha::date
        OR s.created_at::date = p_fecha::date
    )
    AND (
        s.sucursal = p_sucursal
        OR s.sucursal ILIKE '%' || p_sucursal || '%'
    )
    AND (
        UPPER(s.sorteo) = UPPER(p_sorteo)
        OR s.sorteo ILIKE '%' || p_sorteo || '%'
    )
    GROUP BY sd.numero
    ORDER BY monto_total DESC;
$$;

-- 4. Permisos para las funciones
GRANT EXECUTE ON FUNCTION get_resumen_sorteos_optimizado(TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION get_numeros_vendidos_sorteo(TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION debug_ventas_data(TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION get_numeros_vendidos_sorteo_flexible(TEXT, TEXT, TEXT) TO anon, authenticated;