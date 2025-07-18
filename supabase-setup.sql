-- SQL para crear la tabla profiles en Supabase
-- Ejecutar este código en el SQL Editor de Supabase

-- Crear tabla profiles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'sucursal' CHECK (role IN ('admin', 'sucursal')),
    sucursal VARCHAR(100),
    active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_active ON public.profiles(active);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Política de seguridad: Los usuarios solo pueden ver y editar su propio perfil
-- Los administradores pueden ver y editar todos los perfiles
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM public.profiles WHERE role = 'admin'
        )
    );

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can update all profiles" ON public.profiles
    FOR UPDATE USING (
        auth.uid() IN (
            SELECT id FROM public.profiles WHERE role = 'admin'
        )
    );

CREATE POLICY "Admins can insert profiles" ON public.profiles
    FOR INSERT WITH CHECK (
        auth.uid() IN (
            SELECT id FROM public.profiles WHERE role = 'admin'
        )
    );

CREATE POLICY "Admins can delete profiles" ON public.profiles
    FOR DELETE USING (
        auth.uid() IN (
            SELECT id FROM public.profiles WHERE role = 'admin'
        )
    );

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at
CREATE TRIGGER profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Función para crear un perfil automáticamente cuando se registra un usuario
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, role, active)
    VALUES (NEW.id, NEW.email, 'sucursal', true);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para crear perfil automáticamente
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Insertar usuario administrador por defecto
INSERT INTO auth.users (id, email, email_confirmed_at, created_at, updated_at)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'admin@loteria.com',
    NOW(),
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO public.profiles (id, email, role, active)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'admin@loteria.com',
    'admin',
    true
) ON CONFLICT (id) DO NOTHING;

-- Función helper para crear tabla si no existe (para el código TypeScript)
CREATE OR REPLACE FUNCTION public.create_profiles_table_if_not_exists()
RETURNS VOID AS $$
BEGIN
    -- Esta función ya no es necesaria porque la tabla ya está creada
    -- Pero la mantenemos por compatibilidad
    RETURN;
END;
$$ LANGUAGE plpgsql;

-- Conceder permisos necesarios
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
