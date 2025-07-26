-- Script de diagnóstico para problemas de RLS en cierre de caja
-- Ejecutar este script para verificar la configuración actual

-- 1. Verificar usuario actual y su metadata
SELECT 'USUARIO ACTUAL' as info;
SELECT 
    auth.uid() as user_id,
    auth.email() as email,
    (SELECT raw_user_meta_data FROM auth.users WHERE id = auth.uid()) as metadata;

-- 2. Verificar si las tablas existen y tienen RLS habilitado
SELECT 'TABLAS Y RLS' as info;
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE tablename IN ('movimientos_caja', 'cierres_diarios', 'sales', 'sorteos');

-- 3. Verificar políticas existentes
SELECT 'POLÍTICAS ACTIVAS' as info;
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    cmd as command,
    CASE 
        WHEN qual IS NOT NULL THEN 'Tiene condición WHERE'
        ELSE 'Sin condición WHERE'
    END as has_condition
FROM pg_policies 
WHERE tablename IN ('movimientos_caja', 'cierres_diarios')
ORDER BY tablename, policyname;

-- 4. Verificar permisos de las funciones
SELECT 'FUNCIONES DISPONIBLES' as info;
SELECT 
    routine_name,
    routine_type,
    data_type
FROM information_schema.routines 
WHERE routine_name IN ('calcular_resumen_caja_diario', 'obtener_resumen_sorteo')
AND routine_schema = 'public';

-- 5. Probar acceso básico a las tablas (esto fallará si RLS bloquea)
SELECT 'PRUEBA DE ACCESO - MOVIMIENTOS_CAJA' as info;
SELECT COUNT(*) as total_registros FROM public.movimientos_caja;

SELECT 'PRUEBA DE ACCESO - CIERRES_DIARIOS' as info;
SELECT COUNT(*) as total_registros FROM public.cierres_diarios;

-- 6. Verificar metadata del usuario específico
SELECT 'METADATA USUARIO DETALLADO' as info;
SELECT 
    id,
    email,
    raw_user_meta_data->>'role' as role_metadata,
    raw_user_meta_data->>'sucursal' as sucursal_metadata,
    raw_user_meta_data as full_metadata,
    -- Intentar determinar sucursal por email
    CASE 
        WHEN email LIKE '%sucursal1%' THEN 'Sucursal 1'
        WHEN email LIKE '%sucursal2%' THEN 'Sucursal 2'
        WHEN email LIKE '%sucursal3%' THEN 'Sucursal 3'
        WHEN email LIKE '%sucursal4%' THEN 'Sucursal 4'
        WHEN email LIKE '%centro%sur%' OR email LIKE '%centrosur%' THEN 'Centro Sur'
        ELSE 'No detectada'
    END as sucursal_detectada_por_email
FROM auth.users 
WHERE id = auth.uid();

-- 7. Si las funciones existen, probar una llamada básica
SELECT 'PRUEBA FUNCIÓN CALCULAR_RESUMEN' as info;
-- Esto puede fallar si hay problemas de permisos
-- SELECT * FROM calcular_resumen_caja_diario('2025-07-25', 'Centro Sur') LIMIT 1;
