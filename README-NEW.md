# 🎰 Sistema de Lotería

Un sistema completo de gestión de lotería desarrollado con Angular 17 y Supabase.

## 🚀 Demo en Vivo

🌐 **[Ver Demo](https://elporter17.github.io/loteria/)**

## ✨ Características

- 🔐 **Autenticación segura** con Supabase
- 👥 **Roles de usuario** (Admin/Sucursal)
- 🎲 **Gestión de sorteos** (Mañana, Tarde, Noche)
- 💰 **Ventas y recibos** con impresión térmica
- 📊 **Reportes y estadísticas**
- 🎯 **Números ganadores** y cálculo automático
- 📱 **Interfaz responsive**
- 🔔 **Notificaciones** con SweetAlert2
- 📄 **Generación de PDFs**

## 🛠️ Tecnologías

- **Frontend**: Angular 17, TypeScript, SCSS
- **Backend**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Notificaciones**: SweetAlert2
- **PDF**: jsPDF
- **Despliegue**: GitHub Pages

## 🏗️ Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/elporter17/loteria.git
   cd loteria
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Supabase**
   - Crear proyecto en [Supabase](https://supabase.com)
   - Ejecutar el schema SQL incluido
   - Configurar variables de entorno

4. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```

## 🎮 Uso del Sistema

### 👤 Roles de Usuario

**Sucursal:**
- Vender números de lotería
- Ver ventas del día
- Imprimir recibos
- Consultar sorteos activos

**Admin:**
- Gestionar usuarios
- Configurar sorteos
- Ver reportes completos
- Establecer números ganadores

### 🕒 Horarios de Sorteos

- **Mañana**: Cierre a las 10:55 AM
- **Tarde**: Cierre a las 2:55 PM  
- **Noche**: Cierre a las 10:00 PM

## 📋 Funcionalidades Principales

- ✅ Sistema de login/logout
- ✅ Manejo de sesiones persistentes
- ✅ Validación de formularios
- ✅ Cálculo automático de ganancias
- ✅ Impresión de recibos térmicos
- ✅ Filtros por fecha y sorteo
- ✅ Confirmaciones de acciones
- ✅ Loading states y timeouts
- ✅ Manejo robusto de errores

## 🚀 Despliegue

El proyecto se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`.

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Eduardo David** - [elporter17](https://github.com/elporter17)

---

⭐ ¡Dale una estrella si te gusta el proyecto!
