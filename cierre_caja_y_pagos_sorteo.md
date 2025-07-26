**Tarea detallada para IA - Implementación de módulo de cierre de caja y pagos por sorteo**

---

### 💰 Objetivo general:
Diseñar e implementar un módulo administrativo que permita:
1. Realizar el **pago de sorteos ganadores** y registrar la salida de efectivo.
2. Ingresar efectivo a caja.
3. Realizar un **cierre general de caja diario**, comparando ventas vs pagos vs efectivo real disponible.

---

### 🔹 Flujo: Pago de sorteo ganado

**Cuando se cierra un sorteo y se define el número ganador:**
- El sistema debe permitir al vendedor hacer clic en **“Realizar pago de sorteo”**.
- Mostrar:
  - Número ganador
  - Factor aplicado
  - Total vendido
  - Total a pagar
  - Total neto (vendido - pagado)
- Al confirmar:
  - Registrar una **salida de efectivo** en la tabla de movimientos de caja.
  - Abrir una segunda ventana para **confirmar pago manual**, con campo opcional para nombre del receptor.
  - Guardar todos estos movimientos con fecha, usuario, sorteo y sucursal.

---

### 🔹 Flujo: Control de caja y cierre diario

**Cierre general de día debe incluir:**
- Suma total de:
  - Todo lo vendido por sorteo (mañana, tarde, noche)
  - Todo lo pagado en premios
  - Todas las entradas y salidas manuales de efectivo
- Mostrar resumen por sorteo:
  - Ejemplo:
    - Sorteo mañana:  
      - Número ganador: 39  
      - Factor: 80  
      - Venta por número: L 10  
      - Total vendido: L 3400  
      - Total pagado: L 800  
      - Total neto: L 2600  
  - Sucursal: Sucursal 4  
  - Usuario: Admin  
  - Fecha y hora de cierre  
  - Campo para anotar cuánto efectivo quedó y diferencias de caja (sobrante o faltante)
  - Campo opcional de notas manuales

**Botones clave:**
- "Realizar cierre del día"
- "Imprimir resumen de caja"
- "Registrar ingreso de efectivo"
- "Registrar salida de efectivo"

---

### 📊 Reportes esperados (por tab de sorteo y general):
- Total vendido por sorteo y por número
- Total pagado en premios
- Total neto (ganancia por sorteo)
- Ventas que no ganaron (números no premiados)
- Lista de movimientos de caja (entradas y salidas)
- Diferencia entre total neto y efectivo disponible
- Opción de **imprimir reporte** y **guardar cierre** en una tabla `cierres_diarios`

---

### 📑 Base de datos sugerida
- `cierres_diarios`: id, fecha, usuario_id, sucursal, total_vendido, total_pagado, neto, efectivo_reportado, diferencia, notas
- `movimientos_caja`: id, tipo (`entrada`, `salida`), motivo, monto, usuario_id, sorteo_id (opcional), fecha, sucursal

---

Este módulo es esencial para garantizar transparencia financiera y trazabilidad total de los pagos, retiros y ventas del sistema de lotería.

