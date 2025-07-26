-- Crear tablas para módulo de cierre de caja y pagos por sorteo

-- Tabla de movimientos de caja
CREATE TABLE IF NOT EXISTS public.movimientos_caja (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('entrada', 'salida')),
    motivo TEXT NOT NULL,
    monto DECIMAL(10,2) NOT NULL CHECK (monto > 0),
    usuario_id UUID NOT NULL REFERENCES auth.users(id),
    sorteo_id TEXT NULL, -- Opcional, para pagos relacionados a sorteos
    fecha TIMESTAMP WITH TIME ZONE NOT NULL,
    sucursal VARCHAR(100) NOT NULL,
    nombre_receptor VARCHAR(255) NULL, -- Para pagos de sorteo
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de cierres diarios
CREATE TABLE IF NOT EXISTS public.cierres_diarios (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    fecha DATE NOT NULL,
    usuario_id UUID NOT NULL REFERENCES auth.users(id),
    sucursal VARCHAR(100) NOT NULL,
    total_vendido DECIMAL(10,2) NOT NULL DEFAULT 0,
    total_pagado DECIMAL(10,2) NOT NULL DEFAULT 0,
    neto DECIMAL(10,2) NOT NULL DEFAULT 0,
    efectivo_reportado DECIMAL(10,2) NOT NULL DEFAULT 0,
    diferencia DECIMAL(10,2) NOT NULL DEFAULT 0,
    notas TEXT NULL,
    -- Resúmenes de sorteos del día
    sorteos_manana JSONB NULL,
    sorteos_tarde JSONB NULL,
    sorteos_noche JSONB NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    -- Restricción para un solo cierre por sucursal por día
    UNIQUE(fecha, sucursal)
);

-- Índices para optimizar consultas
CREATE INDEX IF NOT EXISTS idx_movimientos_caja_fecha_sucursal 
ON public.movimientos_caja(fecha, sucursal);

CREATE INDEX IF NOT EXISTS idx_movimientos_caja_sorteo 
ON public.movimientos_caja(sorteo_id) WHERE sorteo_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_cierres_diarios_fecha_sucursal 
ON public.cierres_diarios(fecha, sucursal);

-- Configurar RLS (Row Level Security)
ALTER TABLE public.movimientos_caja ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cierres_diarios ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para movimientos_caja
CREATE POLICY "Usuarios pueden ver movimientos de su sucursal" ON public.movimientos_caja
FOR SELECT USING (
    sucursal = (
        SELECT raw_user_meta_data->>'sucursal' 
        FROM auth.users 
        WHERE id = auth.uid()
    )
);

CREATE POLICY "Usuarios pueden insertar movimientos en su sucursal" ON public.movimientos_caja
FOR INSERT WITH CHECK (
    sucursal = (
        SELECT raw_user_meta_data->>'sucursal' 
        FROM auth.users 
        WHERE id = auth.uid()
    )
    AND usuario_id = auth.uid()
);

-- Políticas RLS para cierres_diarios
CREATE POLICY "Usuarios pueden ver cierres de su sucursal" ON public.cierres_diarios
FOR SELECT USING (
    sucursal = (
        SELECT raw_user_meta_data->>'sucursal' 
        FROM auth.users 
        WHERE id = auth.uid()
    )
);

CREATE POLICY "Usuarios pueden insertar cierres en su sucursal" ON public.cierres_diarios
FOR INSERT WITH CHECK (
    sucursal = (
        SELECT raw_user_meta_data->>'sucursal' 
        FROM auth.users 
        WHERE id = auth.uid()
    )
    AND usuario_id = auth.uid()
);

CREATE POLICY "Usuarios pueden actualizar cierres de su sucursal" ON public.cierres_diarios
FOR UPDATE USING (
    sucursal = (
        SELECT raw_user_meta_data->>'sucursal' 
        FROM auth.users 
        WHERE id = auth.uid()
    )
    AND usuario_id = auth.uid()
);

-- Políticas para administradores (pueden ver todo)
CREATE POLICY "Admins pueden ver todos los movimientos" ON public.movimientos_caja
FOR SELECT USING (
    (SELECT raw_user_meta_data->>'role' FROM auth.users WHERE id = auth.uid()) = 'admin'
);

CREATE POLICY "Admins pueden ver todos los cierres" ON public.cierres_diarios
FOR SELECT USING (
    (SELECT raw_user_meta_data->>'role' FROM auth.users WHERE id = auth.uid()) = 'admin'
);

-- Función para calcular resumen de caja diario
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

    -- El total_pagado ahora se calcula solo desde los movimientos de caja reales
    -- Ya no se resta automáticamente desde sorteos cerrados
    -- Solo se contabiliza cuando efectivamente se paga el premio en el cierre
    SET v_total_pagado = 0;

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
        v_total_vendido - v_total_pagado + v_movimientos_entrada - v_movimientos_salida;
END;
$$;

-- Función para obtener resumen por sorteo
CREATE OR REPLACE FUNCTION obtener_resumen_sorteo(
    p_fecha DATE,
    p_sucursal TEXT,
    p_sorteo TEXT
) RETURNS TABLE (
    numero_ganador TEXT,
    factor_multiplicador INTEGER,
    venta_por_numero DECIMAL(10,2),
    total_vendido DECIMAL(10,2),
    total_pagado DECIMAL(10,2),
    total_neto DECIMAL(10,2)
)
LANGUAGE plpgsql
AS $$
DECLARE
    sorteo_record RECORD;
    venta_numero DECIMAL(10,2) := 0;
BEGIN
    -- Obtener información del sorteo
    SELECT numero_ganador, factor_multiplicador, total_vendido, total_pagado, ganancia_neta
    INTO sorteo_record
    FROM public.sorteos
    WHERE DATE(fecha) = p_fecha
    AND sucursal = p_sucursal
    AND sorteo = p_sorteo
    AND cerrado = true;

    IF sorteo_record IS NULL THEN
        RETURN;
    END IF;

    -- Calcular venta específica del número ganador
    IF sorteo_record.numero_ganador IS NOT NULL THEN
        SELECT COALESCE(SUM(sd.monto), 0)
        INTO venta_numero
        FROM public.sales s
        JOIN public.sale_details sd ON s.id = sd.sale_id
        WHERE DATE(s.fecha) = p_fecha
        AND s.sucursal = p_sucursal
        AND s.sorteo = p_sorteo
        AND sd.numero = sorteo_record.numero_ganador::integer;
    END IF;

    RETURN QUERY SELECT
        sorteo_record.numero_ganador,
        sorteo_record.factor_multiplicador,
        venta_numero,
        sorteo_record.total_vendido,
        sorteo_record.total_pagado,
        sorteo_record.ganancia_neta;
END;
$$;
