-- Script para hacer merge entre auth.users y profiles
-- Este script sincroniza los usuarios existentes en auth.users con la tabla profiles

-- Paso 0: Asegurar que la tabla profiles existe con la estructura correcta
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'sucursal' CHECK (role IN ('admin', 'sucursal')),
    sucursal VARCHAR(100),
    active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Configurar permisos y políticas de seguridad
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas existentes si existen
DROP POLICY IF EXISTS "Enable read access for all users" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for users based on email" ON public.profiles;
DROP POLICY IF EXISTS "Enable delete for users based on email" ON public.profiles;

-- Crear políticas más permisivas para desarrollo
CREATE POLICY "Enable read access for all users" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.profiles
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for users based on email" ON public.profiles
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for users based on email" ON public.profiles
    FOR DELETE USING (auth.role() = 'authenticated');

-- Conceder permisos necesarios
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO authenticated, service_role;
GRANT ALL ON SCHEMA public TO service_role;

-- Paso 1: Insertar usuarios de auth.users que no estén en profiles
INSERT INTO public.profiles (id, email, role, sucursal, active, created_at)
SELECT 
    au.id,
    au.email,
    CASE 
        WHEN au.email = 'gerencia@loteria.com' THEN 'admin'
        WHEN au.email LIKE '%admin%' THEN 'admin'
        ELSE 'sucursal'
    END as role,
    CASE 
        WHEN au.email = 'venta1@loteria.com' THEN 'Sucursal 1'
        WHEN au.email = 'venta2@loteria.com' THEN 'Sucursal 2'
        WHEN au.email = 'venta3@loteria.com' THEN 'Sucursal 3'
        WHEN au.email = 'venta4@loteria.com' THEN 'Sucursal 4'
        ELSE COALESCE(au.raw_user_meta_data->>'sucursal', '')
    END as sucursal,
    true as active,
    au.created_at
FROM auth.users au
LEFT JOIN public.profiles p ON au.id = p.id
WHERE p.id IS NULL  -- Solo usuarios que no estén ya en profiles
AND au.email IS NOT NULL
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    updated_at = NOW();

-- Paso 2: Actualizar emails en profiles que puedan haber cambiado
UPDATE public.profiles 
SET email = au.email,
    updated_at = NOW()
FROM auth.users au
WHERE profiles.id = au.id 
AND profiles.email != au.email;

-- Paso 3: Verificar el resultado
SELECT 
    p.id,
    p.email,
    p.role,
    p.sucursal,
    p.active,
    p.created_at,
    CASE 
        WHEN au.id IS NOT NULL THEN 'Sincronizado'
        ELSE 'Perfil huérfano'
    END as estado_sync
FROM public.profiles p
LEFT JOIN auth.users au ON p.id = au.id
ORDER BY p.created_at DESC;

-- Paso 4: Mostrar estadísticas
SELECT 
    'Total usuarios en auth.users' as descripcion,
    COUNT(*) as cantidad
FROM auth.users
WHERE email IS NOT NULL

UNION ALL

SELECT 
    'Total perfiles en profiles' as descripcion,
    COUNT(*) as cantidad
FROM public.profiles

UNION ALL

SELECT 
    'Administradores' as descripcion,
    COUNT(*) as cantidad
FROM public.profiles
WHERE role = 'admin'

UNION ALL

SELECT 
    'Usuarios de sucursal' as descripcion,
    COUNT(*) as cantidad
FROM public.profiles;

-- Función para manejar la creación automática de perfiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, role, active, sucursal)
    VALUES (
        NEW.id, 
        NEW.email, 
        CASE 
            WHEN NEW.email LIKE '%admin%' OR NEW.email = 'gerencia@loteria.com' THEN 'admin'
            ELSE 'sucursal'
        END,
        true,
        CASE 
            WHEN NEW.email = 'venta1@loteria.com' THEN 'Sucursal 1'
            WHEN NEW.email = 'venta2@loteria.com' THEN 'Sucursal 2'
            WHEN NEW.email = 'venta3@loteria.com' THEN 'Sucursal 3'
            WHEN NEW.email = 'venta4@loteria.com' THEN 'Sucursal 4'
            ELSE ''
        END
    );
    RETURN NEW;
EXCEPTION WHEN OTHERS THEN
    -- Si hay error, log pero no fallar
    RAISE NOTICE 'Error creating profile for user %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Crear/reemplazar trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Script de verificación final
DO $$
DECLARE
    user_count INTEGER;
    profile_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO user_count FROM auth.users WHERE email IS NOT NULL;
    SELECT COUNT(*) INTO profile_count FROM public.profiles;
    
    RAISE NOTICE 'Usuarios en auth.users: %', user_count;
    RAISE NOTICE 'Perfiles en profiles: %', profile_count;
    
    IF profile_count = 0 THEN
        RAISE NOTICE 'ADVERTENCIA: No se crearon perfiles. Verificar permisos.';
    ELSE
        RAISE NOTICE 'SUCCESS: Perfiles sincronizados correctamente.';
    END IF;
END $$;
