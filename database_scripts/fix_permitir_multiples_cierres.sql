-- Script para permitir múltiples cierres incrementales por día
-- Fecha: 30 de agosto de 2025
-- Propósito: Eliminar la restricción única (fecha, sucursal) para permitir múltiples cierres por día

-- ========================================
-- ELIMINAR RESTRICCIÓN ÚNICA PROBLEMÁTICA
-- ========================================

-- Buscar el nombre exacto de la restricción única
DO $$
DECLARE
    constraint_name TEXT;
BEGIN
    -- Buscar el nombre de la restricción única en cierres_diarios
    SELECT tc.constraint_name INTO constraint_name
    FROM information_schema.table_constraints tc
    WHERE tc.table_name = 'cierres_diarios'
    AND tc.constraint_type = 'UNIQUE'
    AND tc.table_schema = 'public';
    
    -- Si encontramos la restricción, eliminarla
    IF constraint_name IS NOT NULL THEN
        EXECUTE 'ALTER TABLE public.cierres_diarios DROP CONSTRAINT ' || constraint_name;
        RAISE NOTICE 'Restricción única eliminada: %', constraint_name;
    ELSE
        RAISE NOTICE 'No se encontró restricción única en cierres_diarios';
    END IF;
END $$;

-- ========================================
-- CREAR NUEVO ÍNDICE NO ÚNICO
-- ========================================

-- Eliminar el índice único si existe y crear uno normal
DROP INDEX IF EXISTS public.idx_cierres_diarios_fecha_sucursal;

-- Crear índice normal para optimizar consultas (sin restricción de unicidad)
CREATE INDEX IF NOT EXISTS idx_cierres_diarios_fecha_sucursal_multiple 
ON public.cierres_diarios(fecha, sucursal);

-- Crear índice adicional por fecha de creación para obtener el último cierre fácilmente
CREATE INDEX IF NOT EXISTS idx_cierres_diarios_created_at_sucursal 
ON public.cierres_diarios(created_at DESC, sucursal);

-- ========================================
-- COMENTARIOS Y DOCUMENTACIÓN
-- ========================================

COMMENT ON INDEX public.idx_cierres_diarios_fecha_sucursal_multiple IS 
'Índice para optimizar consultas por fecha y sucursal. Permite múltiples cierres por día.';

COMMENT ON INDEX public.idx_cierres_diarios_created_at_sucursal IS 
'Índice para obtener rápidamente el último cierre realizado por sucursal.';

-- ========================================
-- VERIFICACIÓN DE CAMBIOS
-- ========================================

-- Verificar que ya no existe la restricción única
SELECT 
    tc.constraint_name,
    tc.constraint_type
FROM information_schema.table_constraints tc
WHERE tc.table_name = 'cierres_diarios'
AND tc.table_schema = 'public'
AND tc.constraint_type = 'UNIQUE';

-- Si no devuelve resultados, la restricción fue eliminada exitosamente

-- Verificar índices creados
SELECT 
    indexname,
    indexdef
FROM pg_indexes 
WHERE tablename = 'cierres_diarios' 
AND schemaname = 'public'
ORDER BY indexname;

RAISE NOTICE 'Script ejecutado exitosamente. Ahora se pueden crear múltiples cierres por día.';

-- Fin del script
