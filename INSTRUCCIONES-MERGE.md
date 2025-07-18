# Instrucciones para Merge de Usuarios

## Situación Actual
Tienes usuarios en `auth.users` y una tabla `profiles` separada. Necesitamos sincronizar ambas tablas.

## Usuarios Detectados en auth.users:
- **gerencia@loteria.com** (admin)
- **venta1@loteria.com** (Sucursal 1)
- **venta2@loteria.com** (Sucursal 2) 
- **venta3@loteria.com** (Sucursal 3)
- **venta4@loteria.com** (Sucursal 4)
- **admin@loteria.com** (pendiente)

## Pasos para hacer el Merge:

### Paso 1: Ejecutar el Script de Merge
1. Ve a Supabase > SQL Editor
2. Copia y pega el contenido completo del archivo `merge-users.sql`
3. Ejecuta el script presionando "RUN"

### Paso 2: Verificar el Resultado
El script te mostrará:
- Cuántos usuarios se sincronizaron
- Estadísticas de admin vs sucursal
- Estado de sincronización

### Paso 3: Prueba en la Aplicación
1. Recarga la aplicación web
2. Ve a la sección "Gestión de Usuarios"
3. Deberías ver todos los usuarios sincronizados

## Lo que hace el Script:

### 🔄 Sincronización Automática
- Crea perfiles para usuarios de `auth.users` que no estén en `profiles`
- Asigna roles automáticamente:
  - `gerencia@loteria.com` → **Admin**
  - Emails con "admin" → **Admin**  
  - Resto → **Sucursal**

### 🏢 Asignación de Sucursales
- `venta1@loteria.com` → Sucursal 1
- `venta2@loteria.com` → Sucursal 2
- `venta3@loteria.com` → Sucursal 3
- `venta4@loteria.com` → Sucursal 4

### 🔧 Trigger Automático
- Los nuevos usuarios se sincronizarán automáticamente
- Se mantiene la consistencia entre ambas tablas

## Cambios en el Código:

### ✅ Servicio Mejorado
- Detecta automáticamente si hay datos en `profiles`
- Si no, obtiene datos de `auth.users` y los sincroniza
- Manejo robusto de errores

### ✅ Funcionalidades Mantenidas
- Crear nuevos usuarios
- Editar usuarios existentes
- Cambiar contraseñas
- Activar/desactivar usuarios
- Asignar roles y sucursales

## Resultado Esperado:
Después del merge tendrás:
- 1 usuario Admin (gerencia@loteria.com)
- 4 usuarios de Sucursal (venta1-4@loteria.com)
- Todos sincronizados entre `auth.users` y `profiles`
- Interfaz completamente funcional

## Verificación Final:
```sql
-- Ejecuta esta consulta para verificar
SELECT 
    p.email,
    p.role,
    p.sucursal,
    p.active,
    CASE WHEN au.id IS NOT NULL THEN '✅ Sincronizado' ELSE '❌ Desincronizado' END as estado
FROM profiles p
LEFT JOIN auth.users au ON p.id = au.id
ORDER BY p.role, p.email;
```

Si todo está correcto, deberías ver todos los usuarios con estado "✅ Sincronizado".
