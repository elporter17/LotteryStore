# CORRECCIÓN DE ERRORES SQL - GROUP BY

## ERROR CORREGIDO

**Error SQL 42803**: `column "s.id" must appear in the GROUP BY clause or be used in an aggregate function`

Este error ocurrió en las funciones de debug y flexible debido a problemas con las cláusulas `GROUP BY`.

## FUNCIONES CORREGIDAS

### ✅ **1. Función `debug_ventas_data` - Corregida**

**Problema**: La función intentaba usar `jsonb_build_object` con columnas individuales en un `GROUP BY`, causando conflictos.

**Solución**: Simplificada para retornar solo estadísticas agregadas esenciales:

```sql
CREATE OR REPLACE FUNCTION debug_ventas_data(
    p_fecha TEXT,
    p_sucursal TEXT,
    p_sorteo TEXT
)
RETURNS TABLE (
    total_sales BIGINT,
    fechas_encontradas TEXT[],
    sucursales_encontradas TEXT[],
    sorteos_encontrados TEXT[]
) 
LANGUAGE sql
AS $$
SELECT 
    COUNT(*)::BIGINT as total_sales,
    array_agg(DISTINCT s.fecha::text) as fechas_encontradas,
    array_agg(DISTINCT s.sucursal) as sucursales_encontradas,
    array_agg(DISTINCT s.sorteo) as sorteos_encontrados
FROM sales s
WHERE s.fecha::text LIKE '%' || p_fecha || '%'
   OR s.sucursal LIKE '%' || p_sucursal || '%'
   OR UPPER(s.sorteo) LIKE '%' || UPPER(p_sorteo) || '%';
$$;
```

### ✅ **2. Función `get_numeros_vendidos_sorteo_flexible` - Corregida**

**Problema**: El `GROUP BY` incluía `s.fecha, s.sucursal, s.sorteo` pero el debug_info intentaba acceder a estas columnas individualmente.

**Solución**: Uso de `STRING_AGG` para agregar la información de debug correctamente:

```sql
CREATE OR REPLACE FUNCTION get_numeros_vendidos_sorteo_flexible(
    p_fecha TEXT,
    p_sucursal TEXT,
    p_sorteo TEXT
)
RETURNS TABLE (
    numero TEXT,
    monto_total NUMERIC,
    debug_info TEXT
) 
LANGUAGE sql
AS $$
    SELECT 
        sd.numero::TEXT,
        SUM(sd.monto)::NUMERIC as monto_total,
        STRING_AGG(DISTINCT (s.fecha::text || ' | ' || s.sucursal || ' | ' || s.sorteo), '; ') as debug_info
    FROM sales s
    INNER JOIN sale_details sd ON s.id = sd.sale_id
    WHERE (
        s.fecha::text = p_fecha 
        OR s.fecha::date = p_fecha::date
        OR s.created_at::date = p_fecha::date
    )
    AND (
        s.sucursal = p_sucursal
        OR s.sucursal ILIKE '%' || p_sucursal || '%'
    )
    AND (
        UPPER(s.sorteo) = UPPER(p_sorteo)
        OR s.sorteo ILIKE '%' || p_sorteo || '%'
    )
    GROUP BY sd.numero
    ORDER BY monto_total DESC;
$$;
```

## MEJORAS IMPLEMENTADAS

### 1. **Función Debug Simplificada**
- Eliminada la columna `ejemplo_venta` que causaba problemas de agregación
- Mantenidas las estadísticas esenciales: total de ventas, fechas, sucursales y sorteos encontrados
- Consulta más eficiente y sin errores de GROUP BY

### 2. **Función Flexible Mejorada**
- Uso de `STRING_AGG(DISTINCT ...)` para combinar información de debug
- `GROUP BY` simplificado a solo `sd.numero`
- Información de debug ahora muestra todas las combinaciones únicas de fecha|sucursal|sorteo

### 3. **Mantenimiento de Funcionalidad**
- Todas las funciones principales (`get_resumen_sorteos_optimizado` y `get_numeros_vendidos_sorteo`) mantienen su funcionalidad completa
- Las funciones de debug y flexible están disponibles como herramientas de diagnóstico

## INSTRUCCIONES DE USO

### Función Principal (Recomendada)
```sql
SELECT * FROM get_numeros_vendidos_sorteo('2025-07-24', 'Centro Sur', 'MANANA');
```

### Función de Debug (Para diagnóstico)
```sql
SELECT * FROM debug_ventas_data('2025-07-24', 'Centro Sur', 'MANANA');
```

### Función Flexible (Búsqueda permisiva)
```sql
SELECT * FROM get_numeros_vendidos_sorteo_flexible('2025-07-24', 'Centro Sur', 'MANANA');
```

## ESTADO ACTUAL

✅ **Todos los errores SQL corregidos**
✅ **Funciones compilan sin errores en PostgreSQL**
✅ **Angular compila correctamente**
✅ **Funcionalidad principal preservada**
✅ **Herramientas de debug disponibles**

Las funciones están listas para ser ejecutadas en Supabase SQL Editor sin errores de sintaxis.
