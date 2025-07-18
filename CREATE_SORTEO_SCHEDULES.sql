-- SCRIPT SQL SIMPLE PARA SUPABASE
-- Copia y pega este código completo en Supabase Dashboard > SQL Editor

-- 1. Crear la tabla sorteo_schedules
CREATE TABLE IF NOT EXISTS sorteo_schedules (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    label VARCHAR(100) NOT NULL,
    close_time VARCHAR(5) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Insertar sorteos por defecto
INSERT INTO sorteo_schedules (name, label, close_time) VALUES
    ('matutino', 'Matutino', '11:00'),
    ('vespertino', 'Vespertino', '17:00'),
    ('nocturno', 'Nocturno', '21:00')
ON CONFLICT (name) DO NOTHING;

-- 3. Habilitar RLS (Row Level Security)
ALTER TABLE sorteo_schedules ENABLE ROW LEVEL SECURITY;

-- 4. Crear política para permitir lectura pública
CREATE POLICY "Allow public read access on sorteo_schedules" ON sorteo_schedules
    FOR SELECT USING (true);

-- 5. Crear política para que solo admins puedan modificar
CREATE POLICY "Allow admin write access on sorteo_schedules" ON sorteo_schedules
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

-- 6. Verificar que se creó correctamente
SELECT * FROM sorteo_schedules;
