-- Script SQL para crear las tablas en Supabase
-- Ejecutar en el SQL Editor de Supabase

-- Crear extensión para UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'sucursal')),
  sucursal TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de ventas
CREATE TABLE IF NOT EXISTS sales (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  sucursal TEXT NOT NULL,
  sorteo TEXT NOT NULL CHECK (sorteo IN ('mañana', 'tarde', 'noche')),
  fecha TIMESTAMP WITH TIME ZONE NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de detalles de venta
CREATE TABLE IF NOT EXISTS sale_details (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sale_id UUID NOT NULL REFERENCES sales(id) ON DELETE CASCADE,
  numero INTEGER NOT NULL CHECK (numero >= 1 AND numero <= 99),
  monto DECIMAL(10,2) NOT NULL
);

-- Tabla de sorteos
CREATE TABLE IF NOT EXISTS sorteos (
  id TEXT PRIMARY KEY,
  fecha TIMESTAMP WITH TIME ZONE NOT NULL,
  sorteo TEXT NOT NULL CHECK (sorteo IN ('mañana', 'tarde', 'noche')),
  hora_cierre TIMESTAMP WITH TIME ZONE NOT NULL,
  numero_ganador INTEGER CHECK (numero_ganador >= 1 AND numero_ganador <= 99),
  factor_multiplicador DECIMAL(5,2) DEFAULT 70.00, -- Factor de multiplicación para ganancias
  total_vendido DECIMAL(10,2) DEFAULT 0,
  total_pagado DECIMAL(10,2) DEFAULT 0,
  ganancia_neta DECIMAL(10,2) DEFAULT 0,
  cerrado BOOLEAN DEFAULT false
);

-- Índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_sales_fecha ON sales(fecha);
CREATE INDEX IF NOT EXISTS idx_sales_sorteo ON sales(sorteo);
CREATE INDEX IF NOT EXISTS idx_sales_sucursal ON sales(sucursal);
CREATE INDEX IF NOT EXISTS idx_sale_details_sale_id ON sale_details(sale_id);
CREATE INDEX IF NOT EXISTS idx_sale_details_numero ON sale_details(numero);
CREATE INDEX IF NOT EXISTS idx_sorteos_fecha ON sorteos(fecha);
CREATE INDEX IF NOT EXISTS idx_sorteos_sorteo ON sorteos(sorteo);

-- Políticas de seguridad RLS (Row Level Security)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE sale_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE sorteos ENABLE ROW LEVEL SECURITY;

-- Política para usuarios: solo pueden ver su propia información
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Política para ventas: sucursales pueden crear, todos pueden leer
CREATE POLICY "Authenticated users can view sales" ON sales
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can create sales" ON sales
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Política para detalles de venta: todos pueden leer
CREATE POLICY "Authenticated users can view sale details" ON sale_details
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can create sale details" ON sale_details
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Política para sorteos: admins pueden escribir, todos pueden leer
CREATE POLICY "Authenticated users can view sorteos" ON sorteos
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can manage sorteos" ON sorteos
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'admin'
    )
  );

-- Función para obtener el rol del usuario
CREATE OR REPLACE FUNCTION get_user_role(user_id UUID)
RETURNS TEXT AS $$
BEGIN
  RETURN (SELECT role FROM users WHERE id = user_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función para sincronizar usuarios con auth.users
CREATE OR REPLACE FUNCTION handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, role, sucursal, active)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'role', 'sucursal'),
    NEW.raw_user_meta_data->>'sucursal',
    true
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para sincronizar usuarios
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Insertar usuarios de ejemplo (opcional)
-- IMPORTANTE: Estos usuarios deben crearse primero en Authentication > Users
-- con los mismos emails y las respectivas contraseñas

-- Ejemplo de usuarios que puedes crear manualmente:
-- 1. admin@loteria.com (rol: admin)
-- 2. sucursal1@loteria.com (rol: sucursal, sucursal: "Sucursal 1")  
-- 3. sucursal2@loteria.com (rol: sucursal, sucursal: "Sucursal 2")
-- 4. sucursal3@loteria.com (rol: sucursal, sucursal: "Sucursal 3")

-- Si ya has creado los usuarios en Authentication, puedes ejecutar esto:
/*
INSERT INTO users (id, email, role, sucursal, active) VALUES
  ('admin-uuid', 'admin@loteria.com', 'admin', NULL, true),
  ('sucursal1-uuid', 'sucursal1@loteria.com', 'sucursal', 'Sucursal 1', true),
  ('sucursal2-uuid', 'sucursal2@loteria.com', 'sucursal', 'Sucursal 2', true),
  ('sucursal3-uuid', 'sucursal3@loteria.com', 'sucursal', 'Sucursal 3', true),
  ('sucursal4-uuid', 'sucursal4@loteria.com', 'sucursal', 'Sucursal 4', true),
  ('sucursal5-uuid', 'sucursal5@loteria.com', 'sucursal', 'Sucursal 5', true);
*/

-- SCRIPT DE AYUDA: Para obtener los UUIDs de usuarios existentes
-- SELECT id, email, raw_user_meta_data FROM auth.users;

-- SCRIPT DE AYUDA: Para insertar usuarios en la tabla users basado en auth.users
-- INSERT INTO public.users (id, email, role, sucursal, active)
-- SELECT 
--   id,
--   email,
--   COALESCE(raw_user_meta_data->>'role', 'sucursal') as role,
--   raw_user_meta_data->>'sucursal' as sucursal,
--   true as active
-- FROM auth.users
-- WHERE NOT EXISTS (SELECT 1 FROM public.users WHERE public.users.id = auth.users.id);
