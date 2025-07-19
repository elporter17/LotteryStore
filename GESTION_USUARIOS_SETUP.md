# Configuración de Gestión de Usuarios - Sistema Lotería

## Estado Actual
El sistema de gestión de usuarios está funcionando en **modo simulación** debido a limitaciones de permisos con Supabase Auth Admin API.

## Problema
Las operaciones de administración de usuarios (`auth.admin.listUsers()`, `auth.admin.createUser()`, `auth.admin.updateUserById()`, `auth.admin.deleteUser()`) requieren la **Service Role Key** en lugar de la **Anon Key**.

## Soluciones

### Opción 1: Usar Service Role Key (Para Producción)

1. **Obtener Service Role Key:**
   - Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com)
   - Ve a Settings → API
   - Copia la **service_role** key (NO la anon key)

2. **Configurar Environment:**
   ```typescript
   // src/environments/environment.ts
   export const environment = {
     production: false,
     supabase: {
       url: 'https://oxuhcoubrpupjmjvyzbv.supabase.co',
       key: 'TU_SERVICE_ROLE_KEY_AQUI' // Reemplazar con service_role key
     }
   };
   ```

3. **⚠️ IMPORTANTE - Seguridad:**
   - La Service Role Key tiene permisos completos
   - Solo usar en aplicaciones server-side o entornos seguros
   - Nunca exponer en aplicaciones client-side en producción

### Opción 2: Usar Funciones RPC (Recomendado para Client-Side)

1. **Ejecutar en SQL Editor de Supabase:**
   ```sql
   -- Ejecutar el archivo supabase_functions.sql que se creó
   ```

2. **Configurar RLS Policies:**
   ```sql
   -- Permitir que solo admins accedan a funciones de gestión
   CREATE POLICY "Solo admins pueden gestionar usuarios" ON auth.users
   FOR ALL USING (
     auth.jwt() ->> 'email' = 'gerencia@loteria.com'
   );
   ```

### Opción 3: Backend Separado (Más Seguro)

1. **Crear API Backend:**
   - Node.js/Express con Service Role Key
   - Endpoints protegidos para gestión de usuarios
   - Autenticación con JWT de Supabase

2. **Frontend conecta al Backend:**
   ```typescript
   // En lugar de auth.admin.*, hacer calls HTTP al backend
   async createUser(userData) {
     return fetch('/api/users', {
       method: 'POST',
       headers: { 
         'Authorization': `Bearer ${supabaseToken}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(userData)
     });
   }
   ```

## Estado Actual del Sistema

### ✅ Funcionando:
- Login/Logout de usuarios
- Obtención de datos básicos de usuario
- Interfaz de gestión de usuarios
- Validaciones de formulario

### 🔄 En Simulación:
- Listado de usuarios (usa datos por defecto)
- Creación de usuarios
- Actualización de usuarios
- Eliminación de usuarios
- Toggle de estado activo/inactivo

### 📝 Para Implementar:
- Configuración de Service Role Key
- O implementación de funciones RPC
- O creación de backend separado

## Recomendación

Para un **entorno de desarrollo/pruebas**: Usar Service Role Key temporalmente
Para **producción**: Implementar backend separado con Service Role Key

## Instrucciones de Implementación

1. **Para desarrollo rápido:**
   - Reemplazar anon key con service_role key en environment.ts
   - Remover comentarios de simulación en supabase.service.ts

2. **Para producción:**
   - Implementar backend Node.js/Express
   - Mover toda la lógica de admin al backend
   - Frontend hace HTTP calls al backend
