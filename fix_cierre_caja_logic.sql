-- Script para corregir la función calcular_resumen_caja_diario
-- Corrección: El total_pagado ya no se resta automáticamente del balance
-- Solo se contabiliza cuando efectivamente se paga el premio en el cierre de caja

CREATE OR REPLACE FUNCTION calcular_resumen_caja_diario(
    p_fecha DATE,
    p_sucursal TEXT
) RETURNS TABLE (
    total_vendido DECIMAL(10,2),
    total_pagado DECIMAL(10,2),
    total_neto DECIMAL(10,2),
    movimientos_entrada DECIMAL(10,2),
    movimientos_salida DECIMAL(10,2),
    balance_final DECIMAL(10,2)
) 
LANGUAGE plpgsql
AS $$
DECLARE
    v_total_vendido DECIMAL(10,2) := 0;
    v_total_pagado DECIMAL(10,2) := 0;
    v_movimientos_entrada DECIMAL(10,2) := 0;
    v_movimientos_salida DECIMAL(10,2) := 0;
BEGIN
    -- Calcular total vendido del día
    SELECT COALESCE(SUM(s.total), 0)
    INTO v_total_vendido
    FROM public.sales s
    WHERE DATE(s.fecha) = p_fecha 
    AND s.sucursal = p_sucursal;

    -- El total_pagado ahora se calcula solo desde los movimientos de caja reales (pagos efectivos)
    -- Ya no se resta automáticamente desde sorteos cerrados
    -- Solo se contabiliza cuando efectivamente se paga el premio en el cierre
    SELECT COALESCE(SUM(mc.monto), 0)
    INTO v_total_pagado
    FROM public.movimientos_caja mc
    WHERE DATE(mc.fecha) = p_fecha
    AND mc.sucursal = p_sucursal
    AND mc.tipo = 'salida'
    AND mc.sorteo_id IS NOT NULL; -- Solo movimientos que son pagos de sorteos

    -- Calcular movimientos de entrada de efectivo
    SELECT COALESCE(SUM(mc.monto), 0)
    INTO v_movimientos_entrada
    FROM public.movimientos_caja mc
    WHERE DATE(mc.fecha) = p_fecha
    AND mc.sucursal = p_sucursal
    AND mc.tipo = 'entrada';

    -- Calcular movimientos de salida de efectivo
    SELECT COALESCE(SUM(mc.monto), 0)
    INTO v_movimientos_salida
    FROM public.movimientos_caja mc
    WHERE DATE(mc.fecha) = p_fecha
    AND mc.sucursal = p_sucursal
    AND mc.tipo = 'salida';

    RETURN QUERY SELECT
        v_total_vendido,
        v_total_pagado,
        v_total_vendido - v_total_pagado,
        v_movimientos_entrada,
        v_movimientos_salida,
        v_total_vendido  + v_movimientos_entrada - v_movimientos_salida;
END;
$$;

-- Otorgar permisos
GRANT EXECUTE ON FUNCTION calcular_resumen_caja_diario(DATE, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.calcular_resumen_caja_diario(DATE, TEXT) TO anon;

-- Verificar que la función se creó correctamente
SELECT 'Función calcular_resumen_caja_diario actualizada correctamente' as status;
