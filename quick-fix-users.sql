-- Script rápido para resolver el problema de usuarios
-- Ejecutar en Supabase SQL Editor

-- 1. Crear la tabla profiles si no existe
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    email TEXT,
    role TEXT DEFAULT 'sucursal' CHECK (role IN ('admin', 'sucursal')),
    sucursal TEXT DEFAULT '',
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Crear políticas básicas para que funcione
CREATE POLICY "Los usuarios pueden ver todos los perfiles" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Los usuarios pueden insertar su propio perfil" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Los usuarios pueden actualizar su propio perfil" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- 4. Política especial para admins
CREATE POLICY "Los admins pueden hacer todo" ON public.profiles
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- 5. Insertar usuarios básicos para prueba
INSERT INTO public.profiles (id, email, role, sucursal, active) VALUES
    ('11111111-1111-1111-1111-111111111111', 'gerencia@loteria.com', 'admin', '', true),
    ('22222222-2222-2222-2222-222222222222', 'venta1@loteria.com', 'sucursal', 'Sucursal 1', true),
    ('33333333-3333-3333-3333-333333333333', 'venta2@loteria.com', 'sucursal', 'Sucursal 2', true)
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    sucursal = EXCLUDED.sucursal,
    active = EXCLUDED.active,
    updated_at = now();

-- 6. Verificar que se insertaron correctamente
SELECT 'Usuarios en profiles:' as info, count(*) as cantidad FROM public.profiles;
SELECT * FROM public.profiles ORDER BY created_at;
