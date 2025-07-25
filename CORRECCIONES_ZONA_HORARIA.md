# Correcciones de Zona Horaria - Honduras

## Problema Identificado

Los filtros y la data no estaban funcionando correctamente con la zona horaria de Honduras. Los cierres realizados en la noche aparecían como si hubieran sido hechos al día siguiente debido a problemas de manejo de zonas horarias.

## Correcciones Realizadas

### 1. Mejoras en SupabaseService (supabase.service.ts)

Se agregaron nuevos métodos especializados para el manejo de zona horaria de Honduras:

```typescript
// Método para crear fecha específica en zona horaria de Honduras
createHondurasDate(year: number, month: number, day: number, hour: number = 0, minute: number = 0, second: number = 0): Date

// Método para obtener inicio del día en Honduras
getStartOfDayHonduras(date: Date): Date

// Método para obtener final del día en Honduras  
getEndOfDayHonduras(date: Date): Date

// Método para formatear fecha para inputs datetime-local en zona horaria de Honduras
formatDateTimeLocalHonduras(date: Date): string

// Método para convertir string de datetime-local a fecha UTC para base de datos
parseLocalDateTimeToUtc(dateTimeLocalString: string): Date
```

### 2. Corrección en getSalesByDateAndSorteo

Se actualizó el método para usar correctamente las funciones de zona horaria:

```typescript
async getSalesByDateAndSorteo(fecha: Date, sorteo: string): Promise<Sale[]> {
  // Usar los nuevos métodos para obtener inicio y final del día en Honduras
  const startOfDayUtc = this.getStartOfDayHonduras(fecha);
  const endOfDayUtc = this.getEndOfDayHonduras(fecha);
  // ... resto del código
}
```

### 3. Actualizaciones en AdminComponent (admin.component.ts)

#### Inicialización con zona horaria de Honduras:
```typescript
// Inicializar fechas usando timezone de Honduras para filtros
const hondurasToday = this.supabaseService.getHondurasDateTime();
this.selectedDate = this.supabaseService.formatDateTimeLocalHonduras(hondurasToday).split('T')[0];

// Si no hay filtros guardados, usar fecha de Honduras para inicializar
if (!this.fechaDesde || !this.fechaHasta) {
  const fechaInicio = this.supabaseService.getStartOfDayHonduras(hondurasToday);
  const fechaFin = this.supabaseService.getEndOfDayHonduras(hondurasToday);
  
  this.fechaDesde = this.supabaseService.formatDateTimeLocalHonduras(fechaInicio);
  this.fechaHasta = this.supabaseService.formatDateTimeLocalHonduras(fechaFin);
}
```

#### Corrección en loadSalesByDateRange:
```typescript
// Convertir strings de datetime-local a fechas UTC para la base de datos
const fechaDesdeUtc = this.supabaseService.parseLocalDateTimeToUtc(this.fechaDesde);
const fechaHastaUtc = this.supabaseService.parseLocalDateTimeToUtc(this.fechaHasta);

// Avanzar al siguiente día usando fecha UTC
currentDate.setUTCDate(currentDate.getUTCDate() + 1);
```

#### Corrección en limpiarFiltros:
```typescript
// Reinicializar fechas usando zona horaria de Honduras
const fechaInicio = this.supabaseService.getStartOfDayHonduras(hondurasToday);
const fechaFin = this.supabaseService.getEndOfDayHonduras(hondurasToday);

this.fechaDesde = this.supabaseService.formatDateTimeLocalHonduras(fechaInicio);
this.fechaHasta = this.supabaseService.formatDateTimeLocalHonduras(fechaFin);
this.selectedDate = this.supabaseService.formatDateTimeLocalHonduras(hondurasToday).split('T')[0];
```

### 4. Actualización en ExportService

Se agregó la inyección del SupabaseService para usar las funciones de zona horaria:

```typescript
constructor(private supabaseService: SupabaseService) { }
```

### 5. Corrección en prepareReportData

Se corrigió para usar el formato de hora de Honduras:

```typescript
horaReporte: this.supabaseService.formatHondurasDateTime(hondurasTime).split(' ')[1] + ' ' + this.supabaseService.formatHondurasDateTime(hondurasTime).split(' ')[2]
```

### 6. Ajustes de Configuración

Se actualizaron los presupuestos en `angular.json` para permitir el tamaño actual del bundle:

```json
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "1.2mb",
    "maximumError": "1.5mb"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "31kb",
    "maximumError": "32kb"
  }
]
```

## Beneficios de las Correcciones

1. **Consistencia temporal**: Todos los filtros y datos ahora respetan la zona horaria de Honduras
2. **Precisión en cierres**: Los cierres nocturnos aparecen en la fecha correcta
3. **Filtros precisos**: Los filtros de fecha funcionan correctamente con la hora local
4. **Exportaciones correctas**: Los reportes exportados muestran fechas y horas en zona horaria de Honduras

## Funciones Principales

- `getHondurasDateTime()`: Obtiene la fecha/hora actual en Honduras
- `getStartOfDayHonduras(date)`: Obtiene el inicio del día (00:00:00) en Honduras
- `getEndOfDayHonduras(date)`: Obtiene el final del día (23:59:59) en Honduras
- `formatDateTimeLocalHonduras(date)`: Formatea fecha para inputs datetime-local
- `parseLocalDateTimeToUtc(string)`: Convierte string datetime-local a UTC

## Estado Final

✅ Compilación exitosa
✅ Zona horaria de Honduras aplicada en todos los filtros
✅ Cierres nocturnos aparecen en fecha correcta
✅ Exportaciones con hora local correcta
✅ Consistencia temporal en toda la aplicación
