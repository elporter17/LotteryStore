-- Script para implementar cierre de caja incremental desde último cierre
-- Fecha: 30 de agosto de 2025

-- ========================================
-- FUNCIÓN: Resumen de caja desde último cierre (MEJORADA)
-- ========================================
CREATE OR REPLACE FUNCTION fn_resumen_cierre_actual_desde_ultimo_cierre(
    p_sucursal TEXT DEFAULT NULL
)
RETURNS TABLE (
    total_vendido NUMERIC,
    total_pagado NUMERIC,
    total_neto NUMERIC,
    balance_final NUMERIC,
    movimientos_entrada NUMERIC,
    movimientos_salida NUMERIC,
    balance_movimientos NUMERIC,
    fecha_desde TIMESTAMP WITH TIME ZONE,
    fecha_hasta TIMESTAMP WITH TIME ZONE
) 
LANGUAGE plpgsql
AS $$
DECLARE
    v_fecha_ultimo_cierre TIMESTAMP WITH TIME ZONE;
    v_fecha_actual TIMESTAMP WITH TIME ZONE;
    v_count_cierres INTEGER;
BEGIN
    -- Obtener fecha actual
    v_fecha_actual := NOW();
    
    -- Contar cierres existentes para la sucursal
    SELECT COUNT(*) INTO v_count_cierres
    FROM cierres_diarios 
    WHERE (p_sucursal IS NULL OR sucursal = p_sucursal);
    
    RAISE NOTICE 'Cierres encontrados para sucursal %: %', p_sucursal, v_count_cierres;
    
    -- Buscar la fecha del último cierre para la sucursal
    SELECT MAX(created_at)
    INTO v_fecha_ultimo_cierre
    FROM cierres_diarios 
    WHERE (p_sucursal IS NULL OR sucursal = p_sucursal);
    
    -- Si no hay cierres previos, usar fecha base más reciente
    IF v_fecha_ultimo_cierre IS NULL THEN
        v_fecha_ultimo_cierre := '2025-08-01 00:00:00+00'::TIMESTAMP WITH TIME ZONE;
        RAISE NOTICE 'No se encontraron cierres previos. Usando fecha base: %', v_fecha_ultimo_cierre;
    ELSE
        RAISE NOTICE 'Último cierre encontrado para sucursal %: %', p_sucursal, v_fecha_ultimo_cierre;
    END IF;
    
    RETURN QUERY
    WITH sales_summary AS (
        SELECT 
            COALESCE(SUM(
                CASE 
                    WHEN s.status = 'sold' THEN s.total_amount 
                    ELSE 0 
                END
            ), 0) as vendido,
            COALESCE(SUM(
                CASE 
                    WHEN s.status = 'winner' THEN s.total_amount 
                    ELSE 0 
                END
            ), 0) as pagado
        FROM sales s
        WHERE s.created_at > v_fecha_ultimo_cierre
        AND s.created_at <= v_fecha_actual
        AND (p_sucursal IS NULL OR s.branch = p_sucursal)
    ),
    movements_summary AS (
        SELECT 
            COALESCE(SUM(
                CASE 
                    WHEN mc.tipo = 'entrada' THEN mc.monto 
                    ELSE 0 
                END
            ), 0) as entradas,
            COALESCE(SUM(
                CASE 
                    WHEN mc.tipo = 'salida' THEN mc.monto 
                    ELSE 0 
                END
            ), 0) as salidas
        FROM movimientos_caja mc
        WHERE mc.created_at > v_fecha_ultimo_cierre
        AND mc.created_at <= v_fecha_actual
        AND (p_sucursal IS NULL OR mc.sucursal = p_sucursal)
    )
    SELECT 
        ss.vendido as total_vendido,
        ss.pagado as total_pagado,
        (ss.vendido - ss.pagado) as total_neto,
        (ss.vendido - ss.pagado + ms.entradas - ms.salidas) as balance_final,
        ms.entradas as movimientos_entrada,
        ms.salidas as movimientos_salida,
        (ms.entradas - ms.salidas) as balance_movimientos,
        v_fecha_ultimo_cierre as fecha_desde,
        v_fecha_actual as fecha_hasta
    FROM sales_summary ss, movements_summary ms;
END;
$$;

-- ========================================
-- FUNCIÓN: Resumen por sorteo desde último cierre (MEJORADA)
-- ========================================
CREATE OR REPLACE FUNCTION fn_resumen_cierre_actual_por_sorteo(
    p_sucursal TEXT DEFAULT NULL
)
RETURNS TABLE (
    sorteo TEXT,
    total_vendido NUMERIC,
    total_pagado NUMERIC,
    neto NUMERIC,
    fecha_desde TIMESTAMP WITH TIME ZONE,
    fecha_hasta TIMESTAMP WITH TIME ZONE
) 
LANGUAGE plpgsql
AS $$
DECLARE
    v_fecha_ultimo_cierre TIMESTAMP WITH TIME ZONE;
    v_fecha_actual TIMESTAMP WITH TIME ZONE;
BEGIN
    -- Obtener fecha actual
    v_fecha_actual := NOW();
    
    -- Buscar la fecha del último cierre para la sucursal
    SELECT MAX(created_at)
    INTO v_fecha_ultimo_cierre
    FROM cierres_diarios 
    WHERE (p_sucursal IS NULL OR sucursal = p_sucursal);
    
    -- Si no hay cierres previos, usar fecha base más reciente
    IF v_fecha_ultimo_cierre IS NULL THEN
        v_fecha_ultimo_cierre := '2025-08-01 00:00:00+00'::TIMESTAMP WITH TIME ZONE;
    END IF;
    
    RETURN QUERY
    SELECT 
        s.lottery_name as sorteo,
        COALESCE(SUM(
            CASE 
                WHEN s.status = 'sold' THEN s.total_amount 
                ELSE 0 
            END
        ), 0) as total_vendido,
        COALESCE(SUM(
            CASE 
                WHEN s.status = 'winner' THEN s.total_amount 
                ELSE 0 
            END
        ), 0) as total_pagado,
        COALESCE(SUM(
            CASE 
                WHEN s.status = 'sold' THEN s.total_amount 
                WHEN s.status = 'winner' THEN -s.total_amount 
                ELSE 0 
            END
        ), 0) as neto,
        v_fecha_ultimo_cierre as fecha_desde,
        v_fecha_actual as fecha_hasta
    FROM sales s
    WHERE s.created_at > v_fecha_ultimo_cierre
    AND s.created_at <= v_fecha_actual
    AND (p_sucursal IS NULL OR s.branch = p_sucursal)
    GROUP BY s.lottery_name
    ORDER BY s.lottery_name;
END;
$$;

-- ========================================
-- FUNCIÓN: Movimientos de caja desde último cierre (MEJORADA)
-- ========================================
CREATE OR REPLACE FUNCTION fn_movimientos_caja_desde_ultimo_cierre(
    p_sucursal TEXT DEFAULT NULL
)
RETURNS TABLE (
    id UUID,
    tipo TEXT,
    monto NUMERIC,
    descripcion TEXT,
    sucursal TEXT,
    usuario_id UUID,
    sorteo_id UUID,
    nombre_receptor TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    fecha_desde TIMESTAMP WITH TIME ZONE,
    fecha_hasta TIMESTAMP WITH TIME ZONE
) 
LANGUAGE plpgsql
AS $$
DECLARE
    v_fecha_ultimo_cierre TIMESTAMP WITH TIME ZONE;
    v_fecha_actual TIMESTAMP WITH TIME ZONE;
BEGIN
    -- Obtener fecha actual
    v_fecha_actual := NOW();
    
    -- Buscar la fecha del último cierre para la sucursal
    SELECT MAX(created_at)
    INTO v_fecha_ultimo_cierre
    FROM cierres_diarios 
    WHERE (p_sucursal IS NULL OR sucursal = p_sucursal);
    
    -- Si no hay cierres previos, usar fecha base más reciente
    IF v_fecha_ultimo_cierre IS NULL THEN
        v_fecha_ultimo_cierre := '2025-08-01 00:00:00+00'::TIMESTAMP WITH TIME ZONE;
    END IF;
    
    RETURN QUERY
    SELECT 
        mc.id,
        mc.tipo,
        mc.monto,
        mc.descripcion,
        mc.sucursal,
        mc.usuario_id,
        mc.sorteo_id,
        mc.nombre_receptor,
        mc.created_at,
        v_fecha_ultimo_cierre as fecha_desde,
        v_fecha_actual as fecha_hasta
    FROM movimientos_caja mc
    WHERE mc.created_at > v_fecha_ultimo_cierre
    AND mc.created_at <= v_fecha_actual
    AND (p_sucursal IS NULL OR mc.sucursal = p_sucursal)
    ORDER BY mc.created_at DESC;
END;
$$;

-- ========================================
-- COMENTARIOS Y DOCUMENTACIÓN
-- ========================================

COMMENT ON FUNCTION fn_resumen_cierre_actual_desde_ultimo_cierre IS 
'Calcula el resumen de caja desde el último cierre registrado hasta ahora. 
Si no hay cierres previos, calcula desde el 1 de agosto de 2025.
Incluye logs para debug. Parámetros: p_sucursal (opcional)';

COMMENT ON FUNCTION fn_resumen_cierre_actual_por_sorteo IS 
'Calcula el resumen de ventas por sorteo desde el último cierre registrado.
Parámetros: p_sucursal (opcional) - filtra por sucursal específica';

COMMENT ON FUNCTION fn_movimientos_caja_desde_ultimo_cierre IS 
'Obtiene todos los movimientos de caja (entradas/salidas) desde el último cierre.
Parámetros: p_sucursal (opcional) - filtra por sucursal específica';

-- Fin del script
