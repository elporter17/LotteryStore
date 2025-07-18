🧩 Tarea para IA de codificación: Corrección de Filtros de Fecha en admin.component usando date-fns
📌 Contexto del problema:
Al ingresar al módulo Admin del sistema de lotería, las ventas del día actual no se muestran por defecto. Si el usuario cambia manualmente la hora del filtro a las 12:00 AM, los datos aparecen correctamente. Sin embargo:

Al hacer F5 y volver a aplicar filtros, la interfaz no actualiza la vista, aunque en Network sí se confirma que los datos se están recibiendo correctamente desde Supabase.

🎯 Objetivo de esta tarea:
Asegurar que el sistema:

Muestre correctamente los datos del día actual al ingresar por primera vez.

Permita aplicar correctamente filtros por rango de fechas (usando horas límite).

Actualice correctamente la UI incluso tras recargar o cambiar el rango.

Usar date-fns para manipulación de fechas (startOfDay, endOfDay).

🛠️ Requisitos específicos:
Al inicializar el componente (ngOnInit), establecer:

ts
Copy
Edit
import { startOfDay, endOfDay } from 'date-fns';

this.fechaInicio = startOfDay(new Date()); // 00:00
this.fechaFin = endOfDay(new Date());     // 23:59:59
Al aplicar filtros manuales:

Usar startOfDay(fechaInicio) y endOfDay(fechaFin) antes de hacer la consulta a Supabase.

En la consulta Supabase, usar:

ts
Copy
Edit
.gte('fecha', fechaInicio.toISOString())
.lte('fecha', fechaFin.toISOString())
Asegurarse de actualizar correctamente el estado visual:

Si Angular no actualiza la vista, usar this.ventas = [...data]; para forzar renderizado.

Revisar si hay *ngIf o *ngFor que dependan de valores no sincronizados (por ejemplo, inicialización lenta o nula).

✅ Resultado esperado:
Al cargar el módulo Admin, las ventas del día actual deben mostrarse automáticamente.

El filtro por rango debe funcionar y mostrar correctamente los resultados.

El componente debe comportarse de forma predecible tras un F5 o cambio de fechas.

Toda la manipulación de fechas debe hacerse usando date-fns (no Date.setHours() manual).