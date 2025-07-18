-- Script SQL para crear tablas necesarias para gestión de usuarios y sorteos

-- Tabla para horarios de sorteos configurables
CREATE TABLE IF NOT EXISTS sorteo_schedules (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    label VARCHAR(100) NOT NULL,
    close_time VARCHAR(5) NOT NULL, -- Formato HH:MM (cambiado a snake_case)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insertar horarios por defecto si no existen
INSERT INTO sorteo_schedules (name, label, close_time) VALUES
    ('matutino', 'Matutino', '11:00'),
    ('vespertino', 'Vespertino', '17:00'),
    ('nocturno', 'Nocturno', '21:00')
ON CONFLICT (name) DO NOTHING;

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at en sorteo_schedules
CREATE TRIGGER update_sorteo_schedules_updated_at 
    BEFORE UPDATE ON sorteo_schedules 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) para sorteo_schedules
ALTER TABLE sorteo_schedules ENABLE ROW LEVEL SECURITY;

-- Política para permitir lectura pública de sorteos (para todas las sucursales)
CREATE POLICY "Lectura pública de sorteos" ON sorteo_schedules
    FOR SELECT USING (true);

-- Política para que solo administradores puedan gestionar sorteos (insertar, actualizar, eliminar)
CREATE POLICY "Solo administradores pueden insertar sorteos" ON sorteo_schedules
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

CREATE POLICY "Solo administradores pueden actualizar sorteos" ON sorteo_schedules
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

CREATE POLICY "Solo administradores pueden eliminar sorteos" ON sorteo_schedules
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

-- Trigger para actualizar updated_at en users
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
