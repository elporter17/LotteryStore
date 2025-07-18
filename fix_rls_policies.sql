-- Script para revisar y corregir políticas RLS en tabla sorteos
-- Ejecutar en Supabase SQL Editor

-- 1. Ver las políticas RLS actuales en la tabla sorteos
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'sorteos';

-- 2. Ver si RLS está habilitado
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'sorteos';

-- 3. Verificar permisos en la tabla
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'sorteos';

-- 4. Política RLS más permisiva para administradores (ajustar según tu esquema de roles)
-- IMPORTANTE: Ajusta 'admin' por el rol real que uses en tu sistema

-- Eliminar políticas existentes si causan problemas
-- DROP POLICY IF EXISTS "sorteos_select_policy" ON sorteos;
-- DROP POLICY IF EXISTS "sorteos_insert_policy" ON sorteos;
-- DROP POLICY IF EXISTS "sorteos_update_policy" ON sorteos;

-- Crear políticas más permisivas
-- CREATE POLICY "sorteos_admin_all" ON sorteos
--   FOR ALL 
--   TO authenticated 
--   USING (true) 
--   WITH CHECK (true);

-- Alternativa: Deshabilitar RLS temporalmente para debugging
-- ALTER TABLE sorteos DISABLE ROW LEVEL SECURITY;

-- 5. Verificar que la consulta funciona sin RLS
SELECT * FROM sorteos 
WHERE id = '2025-07-18-mañana' 
LIMIT 1;

-- 6. Probar con el usuario autenticado actual
SELECT current_user, current_role;

-- 7. Si necesitas una política específica para tu rol de admin:
-- CREATE POLICY "admin_full_access" ON sorteos
--   FOR ALL 
--   TO authenticated 
--   USING (
--     EXISTS (
--       SELECT 1 FROM auth.users 
--       WHERE auth.users.id = auth.uid() 
--       AND auth.users.role = 'admin'
--     )
--   );

-- 8. Verificar que no hay conflictos de políticas
SELECT * FROM pg_policies WHERE tablename = 'sorteos';
