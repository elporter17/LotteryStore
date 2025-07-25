# Corrección de Detección del Sorteo Nocturno

## Problema Identificado
El sistema no mostraba correctamente el sorteo de noche cuando debería estar activo, mostrando en su lugar el sorteo de tarde.

## Causa del Problema
La lógica de detección de sorteos tenía una condición inadecuada para el sorteo de noche:
- La condición `currentHour < 20` excluía horas válidas para el sorteo de noche
- No había debugging suficiente para identificar qué hora se estaba detectando

## Solución Implementada

### 1. Mejora en el Método getCurrentSorteoTab()

**Ubicación:** `src/app/components/sucursal/sucursal.component.ts` - líneas 803-825

**Cambios realizados:**
- Agregado logging detallado de la hora actual de Honduras
- Clarificación de los rangos horarios de cada sorteo
- Corrección de la lógica para el sorteo de noche

**Nuevos rangos horarios:**
- **Mañana:** 6:00 AM - 1:59 PM (horas 6-13)
- **Tarde:** 2:00 PM - 7:59 PM (horas 14-19)
- **Noche:** 8:00 PM - 5:59 AM (horas 20-23 y 0-5)

### 2. Debugging Agregado
```typescript
console.log(`Hora actual de Honduras: ${currentHour}:${currentMinutes.toString().padStart(2, '0')}`);
console.log(`Sorteo detectado: ${sorteoActual} (hora: ${currentHour})`);
```

## Código Implementado
```typescript
private getCurrentSorteoTab(): 'manana' | 'tarde' | 'noche' {
  const hondurasNow = this.supabaseService.getHondurasDateTime();
  const currentHour = hondurasNow.getHours();
  const currentMinutes = hondurasNow.getMinutes();
  
  console.log(`Hora actual de Honduras: ${currentHour}:${currentMinutes.toString().padStart(2, '0')}`);
  
  // Horarios de sorteos en Honduras (ajustados)
  // Mañana: 6:00 AM - 1:59 PM (6-13)
  // Tarde: 2:00 PM - 7:59 PM (14-19) 
  // Noche: 8:00 PM - 5:59 AM (20-23, 0-5)
  
  let sorteoActual: 'manana' | 'tarde' | 'noche';
  
  if (currentHour >= 6 && currentHour <= 13) {
    sorteoActual = 'manana';
  } else if (currentHour >= 14 && currentHour <= 19) {
    sorteoActual = 'tarde';
  } else {
    // Noche: 20-23 y 0-5
    sorteoActual = 'noche';
  }
  
  console.log(`Sorteo detectado: ${sorteoActual} (hora: ${currentHour})`);
  return sorteoActual;
}
```

## Resultado Esperado
Ahora el sistema:
1. ✅ Detecta correctamente el sorteo de noche desde las 8:00 PM hasta las 5:59 AM
2. ✅ Muestra logging en consola para facilitar debugging
3. ✅ Carga automáticamente el tab del sorteo nocturno cuando corresponde
4. ✅ Mantiene la funcionalidad existente para sorteos de mañana y tarde

## Verificación
- Compilación exitosa: ✅
- Lógica horaria corregida: ✅ 
- Debugging habilitado: ✅
- Compatible con zona horaria de Honduras: ✅

## Fecha de Implementación
24 de julio de 2025 - 22:08 UTC
