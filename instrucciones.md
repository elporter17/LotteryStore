**Brief Técnico: Sistema de Control de Venta de Lotería**

---

**1. Nombre del Proyecto:**
Sistema Web y Administrativo para Venta de Lotería con Cortes y Cálculo de Ganancias

**2. Objetivo del Sistema:**
Desarrollar una aplicación multiplataforma (preferiblemente Web o Electron) que permita el registro, control y administración de ventas de números de lotería por sucursal, con funcionalidad para 3 sorteos diarios, cortes automáticos, ingreso de número ganador y cálculo automático de ganancias.

**3. Público objetivo:**
Usuarios de 5 sucursales (rol vendedor) y administradores (rol admin) sin experiencia técnica, que necesitan una plataforma fácil de usar, segura y clara.

**4. Tecnologías sugeridas:**

* Frontend: Angular o React.
* Backend/BD: Firebase (Firestore + Auth) o Supabase (PostgreSQL + Auth + Realtime).
* Opcion de PWA o empaquetado con Electron para escritorio.

**5. Funcionalidades principales:**

**A. Módulo de Venta (rol: sucursal)**

* Login por sucursal.
* Selección de uno o más números (del 1 al 99), con monto por cada uno.
* Registro de la venta asociada a la sucursal, sorteo y fecha/hora.
* Impresión de recibo: lista de números, montos, total, fecha y hora.
* Cortes automáticos para cada sorteo:

  * Mañana: 10:55 AM
  * Tarde: 2:55 PM
  * Noche: 8:55 PM

**B. Módulo Administrativo (rol: admin)**

* Login admin.
* Visualización en tiempo real de ventas por sorteo y sucursal.
* Ingreso del número ganador (después del cierre del sorteo).
* Cálculo automático de premios:

  * Ganancia = monto jugado \* 75 si el número coincide con el ganador.
* Reportes de:

  * Total vendido.
  * Total pagado.
  * Ganancia neta.
  * Exportación a Excel o PDF.

**6. Reglas del negocio:**

* Solo se pueden registrar ventas antes del cierre del sorteo.
* Cada sorteo tiene hora de cierre fija.
* El ingreso del número ganador sólo puede hacerse después del cierre.
* Un mismo usuario no puede ver ni modificar los sorteos cerrados.

**7. Base de datos sugerida (estructura):**

* usuarios: id, email, rol (admin/sucursal), sucursal
* ventas: id, id\_usuario, sucursal, sorteo, fecha\_hora, total
* venta\_detalle: id\_venta, numero, monto
* sorteos: fecha, sorteo, hora\_cierre, numero\_ganador, total\_vendido, total\_pagado, ganancia\_neta

**8. Seguridad:**

* Control de acceso por roles.
* Validación de hora del sistema para bloquear ventas.
* Historial de ventas inmutable.

**9. Extras opcionales:**

* Sincronización en tiempo real entre sucursales y admin.
* Dashboard visual para admin (gráficas).
* Módulo de usuarios para crear/editar accesos.

**10. Prioridad:**

* Fácil de usar.
* Confiabilidad en el cierre y en los datos.
* Impresión funcional para tickets.
* Soporte offline opcional en Electron o PWA.

---

Este brief está orientado a servir como base técnica para el desarrollo del sistema por una IA o por un equipo de desarrollo que necesite claridad estructural del alcance, funcionalidades y flujos esperados.
