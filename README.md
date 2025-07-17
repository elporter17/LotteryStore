# Sistema de Control de Venta de Lotería

## Descripción
Sistema web para el control y administración de ventas de números de lotería con 3 sorteos diarios, desarrollado en Angular con Firebase.

## Funcionalidades Principales

### Para Sucursales:
- Login por sucursal
- Selección de números (1-99) con montos
- Registro de ventas por sorteo
- Visualización de ventas del día
- Cortes automáticos por horario:
  - Mañana: 10:55 AM
  - Tarde: 2:55 PM  
  - Noche: 8:55 PM

### Para Administradores:
- Panel de control central
- Visualización de ventas en tiempo real
- Ingreso de números ganadores
- Cálculo automático de ganancias
- Reportes por sucursal y sorteo
- Gestión de sorteos cerrados

## Tecnologías Utilizadas
- **Frontend**: Angular 17
- **Backend**: Supabase (PostgreSQL + Authentication + Realtime)
- **Estilos**: SCSS
- **Autenticación**: Supabase Auth

## Instalación

### Pre-requisitos
- Node.js 18+
- npm
- Angular CLI

### Pasos de instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar Supabase:
   - Crear proyecto en Supabase
   - Ejecutar el script SQL `supabase-schema.sql`
   - Actualizar configuración en `src/environments/environment.ts`

3. Ejecutar la aplicación:
```bash
ng serve
```

## Configuración de Supabase

### 1. Crear proyecto Supabase
- Ir a [Supabase](https://supabase.com/)
- Crear nuevo proyecto
- Anotar la URL del proyecto y la clave anónima (anon key)

### 2. Configurar la base de datos
- Ir a SQL Editor en Supabase
- Ejecutar el script `supabase-schema.sql` completo
- Esto creará todas las tablas, índices y políticas necesarias

### 3. Configurar Authentication
- Ir a Authentication > Settings
- Configurar Email templates si es necesario
- Habilitar Email confirmations (opcional)

### 4. Crear usuarios de prueba
- Ir a Authentication > Users
- Crear usuarios manualmente o usar el registro
- Agregar metadata personalizada para roles:
  ```json
  {
    "role": "admin",
    "sucursal": "Sucursal 1"
  }
  ```

### 5. Configurar el proyecto Angular
Actualizar `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  supabase: {
    url: 'https://tu-proyecto.supabase.co',
    key: 'tu-anon-key'
  }
};
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── login/
│   │   ├── sucursal/
│   │   └── admin/
│   ├── models/
│   │   └── interfaces.ts
│   ├── services/
│   │   ├── firebase.service.ts
│   │   └── sorteo.service.ts
│   ├── app.component.ts
│   └── app.module.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── styles.scss
```

## Uso del Sistema

### Para Sucursales:
1. Iniciar sesión con credenciales de sucursal
2. Seleccionar sorteo disponible
3. Ingresar números y montos
4. Procesar venta antes del cierre
5. Visualizar historial de ventas

### Para Administradores:
1. Iniciar sesión con credenciales de admin
2. Monitorear ventas en tiempo real
3. Establecer números ganadores después del cierre
4. Revisar reportes y ganancias
5. Gestionar sorteos

## Reglas de Negocio

- Solo se pueden registrar ventas antes del cierre del sorteo
- Los sorteos tienen horarios de cierre fijos
- El número ganador solo se puede establecer después del cierre
- La ganancia por número acertado es: monto jugado × 75
- Los sorteos cerrados no se pueden modificar

## Seguridad

- Autenticación por Firebase Auth
- Control de acceso por roles
- Validación de horarios de cierre
- Historial de ventas inmutable
- Reglas de Firestore para proteger datos

## Desarrollo

Para contribuir al proyecto:

1. Fork del repositorio
2. Crear branch para feature
3. Implementar cambios
4. Ejecutar tests
5. Crear pull request

## Comandos Útiles

```bash
# Desarrollo
ng serve

# Build para producción
ng build

# Tests
ng test

# Linting
ng lint

# Generar componente
ng generate component nombre-componente

# Generar servicio
ng generate service nombre-servicio
```

## Soporte

Para soporte técnico o reportar bugs, crear un issue en el repositorio del proyecto.

## Licencia

Este proyecto está bajo la Licencia MIT.
