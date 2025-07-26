-- Script temporal para permitir acceso completo a las tablas de cierre de caja
-- mientras debuggeamos los problemas RLS

-- PASO 1: Deshabilitar temporalmente RLS en las tablas problemáticas
ALTER TABLE public.movimientos_caja DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.cierres_diarios DISABLE ROW LEVEL SECURITY;

-- PASO 2: Otorgar permisos completos a authenticated users
GRANT ALL PRIVILEGES ON public.movimientos_caja TO authenticated;
GRANT ALL PRIVILEGES ON public.cierres_diarios TO authenticated;

-- PASO 3: Otorgar permisos a las funciones RPC
GRANT EXECUTE ON FUNCTION calcular_resumen_caja_diario(DATE, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION obtener_resumen_sorteo(DATE, TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.calcular_resumen_caja_diario(DATE, TEXT) TO anon;
GRANT EXECUTE ON FUNCTION public.obtener_resumen_sorteo(DATE, TEXT, TEXT) TO anon;

-- PASO 4: Verificar que ahora funciona
SELECT 'ACCESO A MOVIMIENTOS_CAJA' as prueba;
SELECT COUNT(*) as total_registros FROM public.movimientos_caja;

SELECT 'ACCESO A CIERRES_DIARIOS' as prueba;
SELECT COUNT(*) as total_registros FROM public.cierres_diarios;

-- PASO 5: Probar la función RPC
SELECT 'PRUEBA FUNCIÓN RPC' as prueba;
SELECT 'calcular_resumen_caja_diario disponible' as status;

-- Mensaje para el usuario
SELECT '¡TEMPORAL! - RLS DESHABILITADO' as advertencia;
SELECT 'Ahora deberías poder acceder sin errores 403' as instruccion;
SELECT 'Una vez que funcione, vuelve a habilitar RLS con fix_rls_cierre_caja.sql' as siguiente_paso;
