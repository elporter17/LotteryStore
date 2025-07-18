-- Función simple para obtener datos de sorteo sin restricciones RLS estrictas
-- Esta función se ejecuta con privilegios de definer (owner)

CREATE OR REPLACE FUNCTION get_sorteo_simple(sorteo_id TEXT)
RETURNS TABLE (
    id TEXT,
    fecha DATE,
    sorteo TEXT,
    hora_cierre TIMESTAMP WITH TIME ZONE,
    numero_ganador TEXT,
    factor_multiplicador INTEGER,
    total_vendido DECIMAL(10,2),
    total_pagado DECIMAL(10,2),
    ganancia_neta DECIMAL(10,2),
    cerrado BOOLEAN
)
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        s.id,
        s.fecha,
        s.sorteo,
        s.hora_cierre,
        s.numero_ganador,
        s.factor_multiplicador,
        s.total_vendido,
        s.total_pagado,
        s.ganancia_neta,
        s.cerrado
    FROM sorteos s
    WHERE s.id = sorteo_id;
END;
$$;

-- Dar permisos de ejecución a usuarios autenticados
GRANT EXECUTE ON FUNCTION get_sorteo_simple(TEXT) TO authenticated;

-- Comentario sobre la función
COMMENT ON FUNCTION get_sorteo_simple(TEXT) IS 'Función para obtener datos básicos de sorteo omitiendo políticas RLS restrictivas';
