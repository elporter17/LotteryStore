-- Script para corregir políticas RLS del módulo de cierre de caja
-- Ejecutar DESPUÉS de cierre_caja_setup.sql

-- PASO 1: Eliminar políticas existentes que pueden estar causando conflictos
DROP POLICY IF EXISTS "Usuarios pueden ver movimientos de su sucursal" ON public.movimientos_caja;
DROP POLICY IF EXISTS "Usuarios pueden insertar movimientos en su sucursal" ON public.movimientos_caja;
DROP POLICY IF EXISTS "Usuarios pueden ver cierres de su sucursal" ON public.cierres_diarios;
DROP POLICY IF EXISTS "Usuarios pueden insertar cierres en su sucursal" ON public.cierres_diarios;
DROP POLICY IF EXISTS "Usuarios pueden actualizar cierres de su sucursal" ON public.cierres_diarios;
DROP POLICY IF EXISTS "Admins pueden ver todos los movimientos" ON public.movimientos_caja;
DROP POLICY IF EXISTS "Admins pueden ver todos los cierres" ON public.cierres_diarios;

-- PASO 2: Crear políticas RLS más flexibles

-- Políticas para movimientos_caja
CREATE POLICY "movimientos_caja_select" ON public.movimientos_caja
FOR SELECT USING (
    -- Permitir si es admin
    (SELECT raw_user_meta_data->>'role' FROM auth.users WHERE id = auth.uid()) = 'admin'
    OR
    -- O si coincide la sucursal del usuario
    (
        sucursal = (SELECT raw_user_meta_data->>'sucursal' FROM auth.users WHERE id = auth.uid())
        OR
        sucursal = (SELECT 
            CASE 
                WHEN email LIKE '%sucursal1%' THEN 'Sucursal 1'
                WHEN email LIKE '%sucursal2%' THEN 'Sucursal 2'
                WHEN email LIKE '%sucursal3%' THEN 'Sucursal 3'
                WHEN email LIKE '%sucursal4%' THEN 'Sucursal 4'
                WHEN email LIKE '%centro%sur%' OR email LIKE '%centrosur%' THEN 'Centro Sur'
                ELSE raw_user_meta_data->>'sucursal'
            END
            FROM auth.users WHERE id = auth.uid()
        )
    )
);

CREATE POLICY "movimientos_caja_insert" ON public.movimientos_caja
FOR INSERT WITH CHECK (
    -- Verificar que el usuario puede insertar en su sucursal
    (
        sucursal = (SELECT raw_user_meta_data->>'sucursal' FROM auth.users WHERE id = auth.uid())
        OR
        sucursal = (SELECT 
            CASE 
                WHEN email LIKE '%sucursal1%' THEN 'Sucursal 1'
                WHEN email LIKE '%sucursal2%' THEN 'Sucursal 2'
                WHEN email LIKE '%sucursal3%' THEN 'Sucursal 3'
                WHEN email LIKE '%sucursal4%' THEN 'Sucursal 4'
                WHEN email LIKE '%centro%sur%' OR email LIKE '%centrosur%' THEN 'Centro Sur'
                ELSE raw_user_meta_data->>'sucursal'
            END
            FROM auth.users WHERE id = auth.uid()
        )
    )
    AND usuario_id = auth.uid()
);

-- Políticas para cierres_diarios
CREATE POLICY "cierres_diarios_select" ON public.cierres_diarios
FOR SELECT USING (
    -- Permitir si es admin
    (SELECT raw_user_meta_data->>'role' FROM auth.users WHERE id = auth.uid()) = 'admin'
    OR
    -- O si coincide la sucursal del usuario
    (
        sucursal = (SELECT raw_user_meta_data->>'sucursal' FROM auth.users WHERE id = auth.uid())
        OR
        sucursal = (SELECT 
            CASE 
                WHEN email LIKE '%sucursal1%' THEN 'Sucursal 1'
                WHEN email LIKE '%sucursal2%' THEN 'Sucursal 2'
                WHEN email LIKE '%sucursal3%' THEN 'Sucursal 3'
                WHEN email LIKE '%sucursal4%' THEN 'Sucursal 4'
                WHEN email LIKE '%centro%sur%' OR email LIKE '%centrosur%' THEN 'Centro Sur'
                ELSE raw_user_meta_data->>'sucursal'
            END
            FROM auth.users WHERE id = auth.uid()
        )
    )
);

CREATE POLICY "cierres_diarios_insert" ON public.cierres_diarios
FOR INSERT WITH CHECK (
    (
        sucursal = (SELECT raw_user_meta_data->>'sucursal' FROM auth.users WHERE id = auth.uid())
        OR
        sucursal = (SELECT 
            CASE 
                WHEN email LIKE '%sucursal1%' THEN 'Sucursal 1'
                WHEN email LIKE '%sucursal2%' THEN 'Sucursal 2'
                WHEN email LIKE '%sucursal3%' THEN 'Sucursal 3'
                WHEN email LIKE '%sucursal4%' THEN 'Sucursal 4'
                WHEN email LIKE '%centro%sur%' OR email LIKE '%centrosur%' THEN 'Centro Sur'
                ELSE raw_user_meta_data->>'sucursal'
            END
            FROM auth.users WHERE id = auth.uid()
        )
    )
    AND usuario_id = auth.uid()
);

CREATE POLICY "cierres_diarios_update" ON public.cierres_diarios
FOR UPDATE USING (
    (
        sucursal = (SELECT raw_user_meta_data->>'sucursal' FROM auth.users WHERE id = auth.uid())
        OR
        sucursal = (SELECT 
            CASE 
                WHEN email LIKE '%sucursal1%' THEN 'Sucursal 1'
                WHEN email LIKE '%sucursal2%' THEN 'Sucursal 2'
                WHEN email LIKE '%sucursal3%' THEN 'Sucursal 3'
                WHEN email LIKE '%sucursal4%' THEN 'Sucursal 4'
                WHEN email LIKE '%centro%sur%' OR email LIKE '%centrosur%' THEN 'Centro Sur'
                ELSE raw_user_meta_data->>'sucursal'
            END
            FROM auth.users WHERE id = auth.uid()
        )
    )
    AND usuario_id = auth.uid()
);

-- PASO 3: Crear función auxiliar para verificar usuarios (para debugging)
CREATE OR REPLACE FUNCTION debug_user_info()
RETURNS TABLE(
    user_id UUID,
    email TEXT,
    role TEXT,
    sucursal TEXT,
    metadata JSONB
)
LANGUAGE sql
AS $$
    SELECT 
        id,
        email,
        raw_user_meta_data->>'role' as role,
        raw_user_meta_data->>'sucursal' as sucursal,
        raw_user_meta_data as metadata
    FROM auth.users 
    WHERE id = auth.uid();
$$;

-- PASO 4: Verificar que las tablas existen y RLS está habilitado
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE tablename IN ('movimientos_caja', 'cierres_diarios');

-- PASO 5: Mostrar políticas activas
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies 
WHERE tablename IN ('movimientos_caja', 'cierres_diarios');

-- PASO 6: Otorgar permisos básicos a authenticated users
GRANT SELECT, INSERT, UPDATE ON public.movimientos_caja TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.cierres_diarios TO authenticated;
GRANT EXECUTE ON FUNCTION calcular_resumen_caja_diario(DATE, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION obtener_resumen_sorteo(DATE, TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION debug_user_info() TO authenticated;
