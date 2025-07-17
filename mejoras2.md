**Fixes y Mejoras - Sistema de Lotería (Admin y Ventas)**

---

### 📁 Sección: Admin

**1. Cards de resumen de sorteo:**

* Actualmente no aparecen las tarjetas que muestran:

  * Total vendido
  * Total pagado (premios)
  * Ganancia neta
* Estas deben estar visibles y reflejar datos en tiempo real o tras aplicar filtros.

**2. Scroll en resumen de ventas:**

* El resumen de ventas ocupa demasiado espacio vertical.
* Debe tener un tamaño máximo (ej. altura fija de 300px) y activar scroll vertical cuando hay muchos elementos.

**3. Filtros de fecha:**

* Actualmente solo permite seleccionar una fecha.
* Debe poder usarse un **rango de fechas** (desde / hasta) para consultar ventas o sorteos anteriores.

**4. Gestor de usuarios del sistema:**

* Se necesita pantalla para **agregar, editar y eliminar usuarios**.
* Cada usuario debe tener:

  * Email
  * Rol: `admin` o `vendedor`
  * Estado activo/inactivo (opcional)

**5. Reportes detallados por fecha o rango:**

* El reporte general debe permitir:

  * Seleccionar rango de fechas.
  * Ver un detalle por cada sorteo (hora, número ganador, total vendido, total pagado, ganancia).
  * Generar un resumen acumulado.

**6. Filtro de fechas unificado:**

* El filtro de fecha/rango debe ser global.
* Al cambiarlo debe afectar:

  * Las tarjetas resumen.
  * El listado de sorteos.
  * La visualización general (actual o histórica).
* Por defecto, debe mostrar el día actual.

---

### 🚀 Sección: Ventas

**1. Ocultar detalle de ventas pasadas:**

* No mostrar todas las ventas realizadas ese día en el panel.
* Solo debe mostrarse el **resumen de la venta actual en curso**.

**2. Ingreso de número con panel numérico:**

* Reemplazar el campo de texto por un **teclado numérico** del 0 al 9.
* Límite de 2 dígitos (01–99).
* Botón de "Aceptar" para confirmar.
* Al aceptar, debe pedir el monto a apostar y mostrar modal de confirmación con número + monto.

**3. Mejora visual del resumen de venta:**

* Agregar **icono de eliminar** junto a cada número seleccionado en la lista de venta actual.
* Mejorar el diseño general del panel de resumen.

**4. Problemas con reporte / recibo impreso:**

* El recibo debe mostrar:

  * Fecha y hora exacta (ajustada a zona horaria de Honduras).
  * Hora del sorteo asociado.
  * Lista de números y montos.
  * Total de la jugada.
* Revisar que se esté tomando correctamente la fecha local al guardar la venta.

**5. Pantalla de bloqueo por PIN:**

* Agregar pantalla que bloquea el sistema tras inactividad o por acción manual.
* Se desbloquea con un PIN asociado al empleado, guardado en la base de datos.

**6. Validación de tiempo antes de vender:**

* No debe permitir vender en los últimos **5 minutos antes del cierre del sorteo**.
* Validar antes de procesar la venta:

  * Si el sorteo está cerrado.
  * Si está en periodo de bloqueo.
* Mostrar mensaje de alerta si no es posible vender.

---

**Este documento debe considerarse una guía obligatoria de ajustes funcionales y de experiencia para completar y estabilizar el sistema tanto para administradores como vendedores.**
