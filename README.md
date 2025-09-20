# 📊 Sistema de Lotería - Aplicación Web

## 🎯 Descripción del Proyecto

Sistema integral de gestión de lotería desarrollado en **Angular 17** con backend en **Supabase**. Esta aplicación permite la gestión completa de ventas de números de lotería, administración de sorteos, cierre de caja y análisis de resultados para múltiples sucursales.

### 🏢 Finalidad del Proyecto

El sistema está diseñado para digitalizar y automatizar la operación de una empresa de lotería con múltiples puntos de venta, proporcionando:

- **Gestión de ventas** en tiempo real por sucursal
- **Control de sorteos** con horarios programados (mañana, tarde, noche)
- **Cierre de caja diario** con reconciliación automática
- **Administración centralizada** con reportes y análisis
- **Gestión de usuarios** por roles (admin/sucursal)
- **Cálculo automático** de premios y ganancias

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **Angular 17** - Framework principal
- **TypeScript 5.2** - Lenguaje de programación
- **SCSS** - Estilos
- **Bootstrap** - UI Framework
- **SweetAlert2** - Notificaciones y alertas
- **RxJS** - Programación reactiva

### Backend y Base de Datos
- **Supabase** - Backend as a Service
- **PostgreSQL** - Base de datos relacional
- **Row Level Security (RLS)** - Seguridad a nivel de fila

### Librerías Especializadas
- **date-fns & date-fns-tz** - Manejo de fechas y zonas horarias
- **jsPDF & jsPDF-autotable** - Generación de reportes PDF
- **html2canvas** - Captura de pantalla para impresión
- **file-saver** - Descarga de archivos
- **xlsx** - Exportación a Excel

---

## 📁 Estructura del Proyecto

```
lottery/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes de la aplicación
│   │   │   ├── admin/          # Panel de administración
│   │   │   ├── sucursal/       # Módulo de ventas por sucursal
│   │   │   ├── login/          # Autenticación
│   │   │   ├── cierre-caja/    # Cierre diario de caja
│   │   │   ├── user-management/ # Gestión de usuarios
│   │   │   └── resumen-sorteos/ # Resumen de sorteos
│   │   ├── services/           # Servicios Angular
│   │   │   ├── supabase.service.ts    # Servicio principal de Supabase
│   │   │   ├── auth.service.ts        # Servicio de autenticación
│   │   │   ├── notification.service.ts # Notificaciones
│   │   │   ├── print.service.ts       # Servicio de impresión
│   │   │   ├── export.service.ts      # Exportación de datos
│   │   │   └── sales.service.ts       # Gestión de ventas
│   │   ├── guards/             # Guards de Angular
│   │   │   ├── auth.guard.ts   # Protección de rutas autenticadas
│   │   │   ├── admin.guard.ts  # Protección para administradores
│   │   │   └── sucursal.guard.ts # Protección para sucursales
│   │   ├── models/             # Interfaces TypeScript
│   │   │   └── interfaces.ts   # Definiciones de tipos
│   │   └── environments/       # Configuración de entornos
│   │       ├── environment.ts
│   │       ├── environment.development.ts
│   │       └── environment.prod.ts
│   └── assets/                 # Recursos estáticos
├── database_scripts/           # Scripts SQL adicionales
├── package.json               # Dependencias del proyecto
├── angular.json              # Configuración de Angular
├── tsconfig.json            # Configuración de TypeScript
└── *.sql                   # Scripts de base de datos principales
```

---

## 🗄️ Arquitectura de Base de Datos

### Tablas Principales

#### **auth.users** (Supabase Auth)
- Usuarios autenticados del sistema
- Gestión nativa de Supabase

#### **sales** (Ventas)
```sql
- id: UUID (PK)
- user_id: UUID (FK → auth.users)
- sucursal: TEXT
- sorteo: TEXT ('mañana', 'tarde', 'noche')
- fecha: TIMESTAMP WITH TIME ZONE
- total: DECIMAL(10,2)
- numero_recibo: TEXT
- correlativo: INTEGER
- created_at: TIMESTAMP WITH TIME ZONE
```

#### **sale_details** (Detalles de Venta)
```sql
- id: UUID (PK)
- sale_id: UUID (FK → sales)
- numero: TEXT (número de lotería 00-99)
- monto: DECIMAL(10,2)
```

#### **sorteos** (Sorteos)
```sql
- id: TEXT (PK) (formato: YYYY-MM-DD-sorteo)
- fecha: TIMESTAMP WITH TIME ZONE
- sorteo: TEXT ('mañana', 'tarde', 'noche')
- hora_cierre: TIMESTAMP WITH TIME ZONE
- numero_ganador: TEXT
- factor_multiplicador: DECIMAL(5,2)
- total_vendido: DECIMAL(10,2)
- total_pagado: DECIMAL(10,2)
- ganancia_neta: DECIMAL(10,2)
- cerrado: BOOLEAN
- sucursal: TEXT (para sorteos por sucursal)
```

#### **sorteo_schedules** (Horarios de Sorteos)
```sql
- id: SERIAL (PK)
- name: TEXT ('mañana', 'tarde', 'noche')
- label: TEXT
- close_time: TIME
- open_time: TIME
```

#### **movimientos_caja** (Movimientos de Caja)
```sql
- id: UUID (PK)
- tipo: TEXT ('entrada', 'salida')
- motivo: TEXT
- monto: DECIMAL(10,2)
- usuario_id: UUID (FK → auth.users)
- sorteo_id: TEXT (FK → sorteos)
- fecha: TIMESTAMP WITH TIME ZONE
- sucursal: TEXT
- nombre_receptor: TEXT
- created_at: TIMESTAMP WITH TIME ZONE
```

#### **cierres_diarios** (Cierres de Caja)
```sql
- id: UUID (PK)
- fecha: DATE
- usuario_id: UUID (FK → auth.users)
- sucursal: TEXT
- total_vendido: DECIMAL(10,2)
- total_pagado: DECIMAL(10,2)
- neto: DECIMAL(10,2)
- efectivo_reportado: DECIMAL(10,2)
- diferencia: DECIMAL(10,2)
- notas: TEXT
- sorteos_manana: JSONB
- sorteos_tarde: JSONB
- sorteos_noche: JSONB
- created_at: TIMESTAMP WITH TIME ZONE
```

---

## 🔧 Funcionalidades Principales

### 👤 Sistema de Autenticación y Roles

#### **Roles de Usuario:**
- **Admin** (`gerencia@loteria.com`): Acceso completo al sistema
- **Sucursal** (`venta1@loteria.com`, etc.): Acceso a ventas y consultas

#### **Gestión de Usuarios (Solo Admin):**
- Crear, editar y eliminar usuarios
- Asignar roles y sucursales
- Activar/desactivar usuarios
- Cambiar contraseñas

### 🏪 Módulo de Sucursal (Ventas)

#### **Funcionalidades de Venta:**
- **Venta de números**: Interface intuitiva para registrar apuestas
- **Validación de horarios**: Bloqueo automático fuera de horarios de sorteo
- **Números disponibles**: Del 00 al 99
- **Montos variables**: Configurable por venta
- **Recibos automáticos**: Generación e impresión de comprobantes
- **Correlativo por sucursal**: Numeración secuencial única

#### **Características Técnicas:**
- **Zona horaria Honduras**: Manejo correcto de fechas y horarios
- **Validación en tiempo real**: Verificación de horarios de cierre
- **Impresión directa**: Generación de recibos en formato térmico
- **Consulta de ventas**: Historial filtrable por fecha y sorteo

### 👨‍💼 Panel de Administración

#### **Dashboard Ejecutivo:**
- **Resumen de ventas**: Totales por período y sucursal
- **Análisis de números**: Estadísticas de números más vendidos
- **Ganancias netas**: Cálculo automático de utilidades
- **Filtros avanzados**: Por fecha, sorteo y sucursal

#### **Gestión de Sorteos:**
- **Configuración de horarios**: Modificación de horarios de cierre
- **Ingreso de resultados**: Registro de números ganadores
- **Cálculo de premios**: Factor multiplicador configurable
- **Sorteos por sucursal**: Gestión independiente por punto de venta

#### **Reportes y Exportación:**
- **Reportes PDF**: Generación de reportes detallados
- **Exportación Excel**: Datos en formato XLSX
- **Reimpresión**: Re-emisión de recibos de venta
- **Análisis estadístico**: Tendencias y patrones de venta

### 💰 Sistema de Cierre de Caja

#### **Proceso de Cierre Diario:**
1. **Cálculo automático**: Ventas, pagos y movimientos del día
2. **Sorteos pendientes**: Identificación de premios por pagar
3. **Movimientos de caja**: Registro de entradas y salidas
4. **Reconciliación**: Comparación entre efectivo reportado y calculado
5. **Generación de reporte**: Documento PDF del cierre

#### **Gestión de Premios:**
- **Detección automática**: Identificación de números ganadores
- **Cálculo de premios**: Monto × factor multiplicador
- **Registro de pagos**: Control de premios entregados
- **Historial de pagos**: Trazabilidad completa

---

## ⚙️ Configuración e Instalación

### Prerrequisitos

```bash
# Node.js v18+
node --version

# Angular CLI v17
npm install -g @angular/cli@17

# Cuenta de Supabase activa
```

### Instalación del Proyecto

1. **Clonar el repositorio:**
```bash
git clone [URL_DEL_REPOSITORIO]
cd lottery
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar Supabase:**

   a. Crear proyecto en [Supabase](https://supabase.com)
   
   b. Obtener credenciales del proyecto:
   - Project URL
   - Service Role Key (para funciones de admin)
   - Anon Key (para operaciones generales)

   c. Configurar archivos de entorno:

   **`src/environments/environment.ts`**
   ```typescript
   export const environment = {
     production: false,
     supabase: {
       url: 'TU_SUPABASE_URL',
       key: 'TU_SERVICE_ROLE_KEY'
     }
   };
   ```

   **`src/environments/environment.prod.ts`**
   ```typescript
   export const environment = {
     production: true,
     supabase: {
       url: 'TU_SUPABASE_URL',
       key: 'TU_SERVICE_ROLE_KEY'
     }
   };
   ```

4. **Configurar Base de Datos:**

   a. Ejecutar script principal:
   ```sql
   -- En el SQL Editor de Supabase
   -- Ejecutar: supabase-schema.sql
   ```

   b. Ejecutar scripts adicionales según necesidad:
   ```sql
   -- Funciones SQL: supabase_functions.sql
   -- Configuración de usuarios: setup-users-complete.sql
   -- Optimizaciones: database_optimization.sql
   ```

5. **Crear usuarios en Supabase Auth:**

   En Dashboard → Authentication → Users, crear:
   ```
   Email: gerencia@loteria.com
   Password: [tu-password]
   User Metadata: {"role": "admin"}

   Email: venta1@loteria.com  
   Password: [tu-password]
   User Metadata: {"role": "sucursal", "sucursal": "Sucursal 1"}

   Email: venta2@loteria.com
   Password: [tu-password]
   User Metadata: {"role": "sucursal", "sucursal": "Sucursal 2"}
   ```

### Ejecución del Proyecto

#### Desarrollo
```bash
# Servidor de desarrollo
ng serve

# Con host específico (para acceso desde red)
ng serve --host 0.0.0.0

# Puerto específico
ng serve --port 4200
```

#### Producción
```bash
# Build de producción
ng build --configuration production

# Preview del build
npx http-server dist/loteria-frontend
```

---

## 🔍 Flujos de Trabajo Principales

### 📝 Proceso de Venta (Sucursal)

1. **Login del usuario sucursal**
2. **Verificación de horarios** de sorteo activo
3. **Selección de sorteo** (mañana/tarde/noche)
4. **Ingreso de números** y montos
5. **Validación** de datos
6. **Confirmación** de venta
7. **Generación** de recibo
8. **Impresión** automática

### 🎯 Gestión de Sorteos (Admin)

1. **Configuración** de horarios por sorteo
2. **Monitoreo** de ventas en tiempo real
3. **Cierre** de sorteo al llegar la hora
4. **Ingreso** del número ganador
5. **Cálculo automático** de premios
6. **Distribución** por sucursal (si aplica)

### 💼 Cierre de Caja (Admin/Sucursal)

1. **Acceso** al módulo de cierre
2. **Revisión** de ventas del día
3. **Identificación** de sorteos pendientes de pago
4. **Registro** de premios pagados
5. **Conteo** de efectivo físico
6. **Reconciliación** automática
7. **Generación** de reporte de cierre
8. **Impresión** de documentos

---

## 🛡️ Seguridad y Configuración

### Row Level Security (RLS)

El sistema implementa políticas de seguridad a nivel de fila:

```sql
-- Usuarios solo ven sus propios datos
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- Ventas: sucursales crean, todos leen
CREATE POLICY "Users can create sales" ON sales
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Sorteos: admins gestionan, todos leen  
CREATE POLICY "Admins can manage sorteos" ON sorteos
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.role = 'admin'
    )
  );
```

### Gestión de Sesiones

- **Autenticación JWT** vía Supabase Auth
- **Guards de Angular** para protección de rutas
- **Timeout** automático de sesiones
- **Renovación** transparente de tokens

---

## 📊 Análisis y Reportes

### Métricas Disponibles

#### **Ventas:**
- Total vendido por período
- Ventas por sucursal
- Ventas por sorteo
- Tendencias de números populares

#### **Financiero:**
- Ganancias netas
- Premios pagados
- Movimientos de caja
- Reconciliaciones diarias

#### **Operacional:**
- Volumen de transacciones
- Horarios pico de venta
- Performance por sucursal
- Análisis de usuarios

### Formatos de Exportación

- **PDF**: Reportes ejecutivos formateados
- **Excel**: Datos tabulares para análisis
- **Impresión térmica**: Recibos y comprobantes

---

## 🔧 Mantenimiento y Optimización

### Scripts SQL de Mantenimiento

```sql
-- Limpieza de duplicados
-- Archivo: cleanup_duplicates.sql

-- Optimización de índices
-- Archivo: database_optimization.sql

-- Diagnóstico de rendimiento
-- Archivo: diagnostico_rls.sql
```

### Tareas Programadas Recomendadas

1. **Backup diario** de base de datos
2. **Limpieza** de logs antiguos
3. **Optimización** de índices
4. **Análisis** de performance
5. **Monitoreo** de errores

---

## 🐛 Troubleshooting y Problemas Comunes

### Problemas de Conexión

```typescript
// Verificar configuración de Supabase
async testConnection() {
  const { data, error } = await this.supabase
    .from('sales')
    .select('count', { count: 'exact', head: true });
  
  console.log('Conexión:', !error ? 'OK' : 'ERROR');
}
```

### Problemas de Zona Horaria

```typescript
// El sistema está configurado para Honduras (UTC-6)
// Verificar configuración en supabase.service.ts

getHondurasDateTime(): Date {
  return toZonedTime(new Date(), 'America/Tegucigalpa');
}
```

### Problemas de Permisos RLS

```sql
-- Verificar políticas en Supabase Dashboard
-- Tabla → Settings → Policies

-- Diagnosticar con:
SELECT * FROM pg_policies WHERE tablename = 'sales';
```

---

## 📈 Roadmap y Mejoras Futuras

### Funcionalidades Planeadas

- [ ] **Integración con POS**: Conexión con sistemas de punto de venta
- [ ] **Notificaciones Push**: Alertas en tiempo real
- [ ] **API REST**: Endpoints para integraciones externas
- [ ] **Dashboard Analytics**: Métricas avanzadas con gráficos
- [ ] **Módulo de Inventario**: Control de materiales
- [ ] **Sistema de Comisiones**: Cálculo automático para vendedores
- [ ] **Backup Automático**: Respaldos programados
- [ ] **Multi-idioma**: Soporte para múltiples idiomas

### Optimizaciones Técnicas

- [ ] **PWA**: Aplicación web progresiva
- [ ] **Caching**: Implementación de cache inteligente
- [ ] **Performance**: Optimización de consultas SQL
- [ ] **Testing**: Suite completa de pruebas automatizadas
- [ ] **CI/CD**: Pipeline de integración continua
- [ ] **Monitoring**: Sistema de monitoreo y alertas

---

## 👥 Contribución al Proyecto

### Guidelines de Desarrollo

1. **Convenciones de código**: Seguir Angular Style Guide
2. **Commits**: Usar conventional commits
3. **Testing**: Incluir pruebas para nuevas funcionalidades
4. **Documentación**: Actualizar README y comentarios
5. **Code Review**: Revisión de código obligatoria

### Estructura de Branches

```
main/
├── develop/
├── feature/nueva-funcionalidad
├── hotfix/correccion-urgente
└── release/version-x.x.x
```

---

## 📄 Licencia

Este proyecto es de uso propietario. Todos los derechos reservados.

---

## 📞 Soporte y Contacto

Para soporte técnico o consultas sobre el proyecto:

- **Desarrollador Principal**: [Tu Nombre]
- **Email**: [tu-email@dominio.com]
- **Documentación**: Ver archivos SQL y comentarios en código
- **Issues**: Reportar en el sistema de issues del repositorio

---

## 🎯 Conclusión

Este sistema de lotería representa una solución completa y robusta para la gestión de operaciones de lotería multi-sucursal. Con su arquitectura moderna basada en Angular y Supabase, proporciona escalabilidad, seguridad y facilidad de uso para operadores de todos los niveles.

La implementación de mejores prácticas en desarrollo web, junto con un diseño centrado en el usuario, garantiza una experiencia óptima tanto para administradores como para personal de sucursal.

---

*Última actualización: Septiembre 2024*
*Versión del sistema: 1.0.0*