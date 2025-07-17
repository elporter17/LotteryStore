**Brief de Mejoras Técnicas: Sistema de Control de Venta de Lotería**

---

**Objetivo del documento:**
Detallar ajustes y mejoras específicas al sistema original de venta de lotería, enfocadas en optimizar la funcionalidad administrativa, la experiencia de usuario y la presentación de resultados.

**Actualizaciones y nuevas instrucciones:**

**1. Cálculo detallado al establecer el número ganador:**

* Al ingresar el número ganador, el sistema debe calcular el total vendido exclusivamente por ese número.
* Si hubo varias ventas del mismo número (ej. 5 Lps y 80 Lps al número 10), se debe sumar todo lo vendido por ese número y multiplicarlo por el factor (75) para determinar el **total a pagar**.

**2. Confirmaciones para acciones sensibles:**

* Toda acción crítica debe tener un modal de confirmación:

  * Registrar venta.
  * Cierre de sorteo.
  * Establecer número ganador.
  * Eliminación o anulación (si aplica).

**3. Filtros de fecha en vista de ventas en tiempo real:**

* Agregar un filtro por fecha o rango de fechas.
* Por defecto, debe cargarse el **día actual**.
* Todas las tarjetas/resúmenes deben actualizarse según el filtro activo.

**4. Reemplazo de alertas nativas del navegador:**

* Usar modales personalizados o notificaciones integradas en la interfaz (ej. Angular Material, SweetAlert, etc.) para feedback como:

  * Ventas exitosas.
  * Errores.
  * Confirmaciones.

**5. Visualización de ganancias por sorteo y general:**

* Mostrar claramente:

  * Total vendido por sorteo.
  * Total a pagar por número ganador.
  * Ganancia neta (vendido - pagado).
* Agregar sección o componente para visualización **general acumulada**.

**6. Sección de ventas: solo resumen de números vendidos:**

* La vista de ventas (para sucursales) debe mostrar solo un resumen de números vendidos (cuántas veces se jugó cada número), sin detalle individual de cada venta.

**7. Indicadores de carga (loaders):**

* Agregar íconos de carga o pantallas de espera:

  * Al procesar una venta.
  * Al cargar datos de cierre o reportes.
  * Durante login o carga inicial.

**8. Impresión en formato PDF térmico:**

* Al registrar una venta, debe generarse automáticamente un PDF en formato optimizado para **impresora térmica de 80mm**.
* Contenido del recibo:

  * Fecha/hora.
  * Sucursal.
  * Sorteo.
  * Lista de números y montos.
  * Total.

---

**Este documento debe ser considerado un complemento obligatorio del brief principal para implementar correctamente la lógica administrativa y mejorar la experiencia del sistema.**
