# Configuración de Supabase para el Sistema de Lotería

## Pasos para configurar Supabase

### 1. Crear proyecto en Supabase
1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una nueva cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Anota la URL del proyecto y la clave anónima

### 2. Configurar la base de datos
1. Ve a SQL Editor en tu proyecto de Supabase
2. Ejecuta el script `supabase-schema.sql` completo
3. Verifica que todas las tablas se hayan creado correctamente

### 3. Configurar autenticación
1. Ve a Authentication > Settings
2. Asegúrate de que Email/Password esté habilitado
3. Configura los templates de email si es necesario

### 4. Crear usuarios de prueba
```sql
-- Crear usuario administrador
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_user_meta_data)
VALUES (
  gen_random_uuid(),
  'admin@loteria.com',
  crypt('password123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"role": "admin"}'::jsonb
);

-- Crear usuarios de sucursales
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_user_meta_data)
VALUES 
  (gen_random_uuid(), 'sucursal1@loteria.com', crypt('password123', gen_salt('bf')), now(), now(), now(), '{"role": "sucursal", "sucursal": "Sucursal 1"}'::jsonb),
  (gen_random_uuid(), 'sucursal2@loteria.com', crypt('password123', gen_salt('bf')), now(), now(), now(), '{"role": "sucursal", "sucursal": "Sucursal 2"}'::jsonb),
  (gen_random_uuid(), 'sucursal3@loteria.com', crypt('password123', gen_salt('bf')), now(), now(), now(), '{"role": "sucursal", "sucursal": "Sucursal 3"}'::jsonb),
  (gen_random_uuid(), 'sucursal4@loteria.com', crypt('password123', gen_salt('bf')), now(), now(), now(), '{"role": "sucursal", "sucursal": "Sucursal 4"}'::jsonb),
  (gen_random_uuid(), 'sucursal5@loteria.com', crypt('password123', gen_salt('bf')), now(), now(), now(), '{"role": "sucursal", "sucursal": "Sucursal 5"}'::jsonb);
```

### 5. Configurar el proyecto Angular
Actualiza `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  supabase: {
    url: 'https://tu-proyecto.supabase.co',
    key: 'tu-anon-key'
  }
};
```

### 6. Verificar la configuración
1. Ejecuta el proyecto: `ng serve`
2. Intenta hacer login con las credenciales de prueba
3. Verifica que las tablas se poblen correctamente

## Estructura de la base de datos

### Tablas principales:
- `users`: Información de usuarios y roles
- `sales`: Ventas por sorteo
- `sale_details`: Detalles de números y montos
- `sorteos`: Información de sorteos y ganadores

### Políticas de seguridad:
- RLS (Row Level Security) habilitado
- Usuarios solo pueden ver su propia información
- Admins pueden gestionar sorteos
- Sucursales pueden crear ventas

## Usuarios de prueba por defecto:
- **Admin**: admin@loteria.com / password123
- **Sucursal 1**: sucursal1@loteria.com / password123
- **Sucursal 2**: sucursal2@loteria.com / password123
- **Sucursal 3**: sucursal3@loteria.com / password123
- **Sucursal 4**: sucursal4@loteria.com / password123
- **Sucursal 5**: sucursal5@loteria.com / password123

## Funcionalidades implementadas:
✅ Autenticación con Supabase Auth
✅ Gestión de usuarios por rol
✅ Registro de ventas por sucursal
✅ Control de horarios de sorteo
✅ Cálculo de ganancias
✅ Reportes en tiempo real
✅ Políticas de seguridad RLS
