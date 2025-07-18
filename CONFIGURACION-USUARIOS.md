# Configuración de Usuarios en Supabase

## Problema
El sistema está mostrando un error 400 Bad Request al intentar cargar usuarios porque la tabla `profiles` no existe en la base de datos de Supabase.

## Solución

### Paso 1: Acceder a Supabase
1. Ve a https://supabase.com y entra a tu proyecto
2. En el panel lateral izquierdo, haz clic en "SQL Editor"

### Paso 2: Ejecutar el Script SQL
1. Copia todo el contenido del archivo `supabase-setup.sql`
2. Pégalo en el SQL Editor de Supabase
3. Haz clic en "RUN" para ejecutar el script

### Paso 3: Verificar la Creación
1. Ve a "Table Editor" en el panel lateral
2. Deberías ver la tabla `profiles` creada
3. La tabla debe tener las siguientes columnas:
   - `id` (UUID, Primary Key)
   - `email` (VARCHAR)
   - `role` (VARCHAR)
   - `sucursal` (VARCHAR)
   - `active` (BOOLEAN)
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

### Paso 4: Usuario Administrador
El script crea automáticamente un usuario administrador:
- Email: `admin@loteria.com`
- Rol: `admin`
- Estado: Activo

### Paso 5: Reiniciar la Aplicación
1. Recarga la página web de la aplicación
2. Los usuarios deberían cargarse correctamente
3. Ya podrás crear nuevos usuarios y editarlos

## Características Implementadas

### Gestión de Usuarios
- ✅ Crear nuevos usuarios (admin y sucursal)
- ✅ Editar usuarios existentes
- ✅ Activar/desactivar usuarios
- ✅ Cambiar contraseñas
- ✅ Asignar roles (Administrador o Sucursal)
- ✅ Asignar sucursales a usuarios

### Interfaz Mejorada
- ✅ Diseño profesional con acordeón
- ✅ Iconos FontAwesome visibles
- ✅ Modales centrados para crear/editar
- ✅ Tabla responsive
- ✅ Estados visuales (activo/inactivo)
- ✅ Badges de roles
- ✅ Hover effects y animaciones

### Seguridad
- ✅ Row Level Security (RLS) habilitado
- ✅ Políticas de acceso por roles
- ✅ Administradores pueden gestionar todos los usuarios
- ✅ Usuarios regulares solo ven su perfil

## Funcionalidades Temporales
Mientras configuras la base de datos, el sistema mostrará usuarios de ejemplo para que puedas probar la interfaz:
- Admin de ejemplo
- Sucursal 1 (activa)
- Sucursal 2 (inactiva)

Una vez ejecutado el script SQL, estos usuarios de ejemplo serán reemplazados por los datos reales de la base de datos.

## Nota Importante
Asegúrate de que tu proyecto de Supabase tenga habilitada la autenticación por email/password para que la creación de usuarios funcione correctamente.
