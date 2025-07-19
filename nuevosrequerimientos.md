**Brief Técnico Ampliado: Cambios y Mejoras Funcionales para Sistema de Lotería**

---

### 👷‍♂️ Módulo Administrativo: Nuevas Funcionalidades y Reportes

**1. Selección de número ganador con factor por sucursal/usuario**

* Al momento de cerrar un sorteo y establecer el número ganador:

  * Se debe permitir establecer un **factor multiplicador diferente** por sucursal o por usuario.
  * Ejemplo: sucursal A paga 75x, sucursal B paga 65x.
  * Esto requiere que el sistema obtenga y almacene el factor aplicado por sucursal al momento del cierre.
  * **Mejora propuesta**: si una sucursal no tiene factor configurado, aplicar uno por defecto global (ej. 75x).

**2. Filtro de sucursales en panel de administración**

* Agregar selector de sucursal (dropdown o multi-select).
* Al aplicarlo, se filtran:

  * Las tarjetas de resumen (total vendido, pagado, ganancia).
  * La tabla de detalle por número.
  * El reporte general.

**3. Cuadro resumen de ventas por número**

* Tabla o grid con los números del 1 al 99.
* Cada celda muestra el **total vendido** por ese número (sumado entre todas las ventas).
* Puede estar en formato de tabla, lista agrupada o gráfico tipo tablero.
* Esto sirve como apoyo visual para ver tendencias.

**4. Reporte final de cierre del sorteo**
Debe incluir:

* Lista de números jugados y total vendido por cada uno:

  * Ej. #4 = L 10, #12 = L 300
* Lista de **números NO vendidos** (del 1 al 99 - vendidos).
* Totales:

  * Total vendido en ese sorteo.
  * Total en premios a pagar (basado en factor y coincidencias).
  * Diferencia de caja (ganancia neta).
  * Ajuste (si hay diferencias contables o manuales a realizar).
* Opción de exportar este reporte como PDF o Excel.

**5. Gestión de usuarios del sistema**

* Agregar módulo para **crear, editar y eliminar usuarios** en la base de datos con autenticación.
* Cada usuario debe tener:

  * Email
  * Contraseña
  * Rol: `admin` o `vendedor`
  * Sucursal asociada (editable)
  * Estado activo/inactivo
* **Mejora adicional**: permitir editar el **nombre de la sucursal** desde el panel administrativo, sin afectar los registros históricos.

---

### 🚀 Módulo de Ventas: Cambios Visuales y Lógicos

**1. Sincronización con cierre del sorteo desde admin**

* Cuando el admin realiza un cierre:

  * La vista de ventas debe mostrar:

    * **Número ganador** del sorteo actual.
    * **Monto que debe pagarse** por cada número ganador en esa sucursal.
    * **Total vendido** en el sorteo por parte de esa sucursal.

**2. Tabs de sorteos**

* La sección de ventas debe tener tabs para cada sorteo:

  * Mañana
  * Tarde
  * Noche
* En cada tab debe mostrarse:

  * Total vendido.
  * Lista de números vendidos y montos.
  * Número ganador (si ya fue definido).
  * Total a pagar por sucursal (si aplica).

**3. Selector de monto por jugada optimizado**

* Reemplazar el input libre de monto por un control tipo stepper:

  * Botones de + / - que suman o restan de 5 en 5.
  * Valor mínimo: L 5, máximo configurable (opcional).
  * Ejemplo: `<` 5 `>` al presionar + pasa a 10, luego a 15...
* Mejora UX para ventas rápidas en pantalla táctil o con teclado.

---

### 📈 Recomendaciones generales y mejoras sugeridas

* Aplicar control de zona horaria para Honduras al generar tickets, cierres o mostrar fechas.
* Optimizar la base de datos con una tabla de `factores_por_sucursal` o `config_sucursal` para definir factor de pago.
* Permitir reimpresión de cierre o resumen.

