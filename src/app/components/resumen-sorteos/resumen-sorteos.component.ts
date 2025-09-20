import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SupabaseService } from '../../services/supabase.service';
import { SorteoSchedule } from '../../models/interfaces';

@Component({
  selector: 'app-resumen-sorteos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-sorteos.component.html',
  styleUrl: './resumen-sorteos.component.scss'
})
export class ResumenSorteosComponent implements OnInit, OnDestroy {
  sorteos: SorteoSchedule[] = [];
  resumenPorSorteo: { [sorteoName: string]: any[] } = {};
  ventasPorNumero: { [sorteoName: string]: { [numero: string]: number } } = {};
  isLoading: boolean = false;
  private subscription?: Subscription;

  constructor(
    private supabaseService: SupabaseService
  ) { }

  async ngOnInit(): Promise<void> {
    // Cargar horarios de sorteos desde la base de datos
    await this.loadSorteoSchedules();
    
    this.loadResumenesSorteos();
    
    // Suscribirse a eventos de recarga desde otros componentes
    this.subscription = this.supabaseService.resumenUpdateSubject?.subscribe(() => {
      this.loadResumenesSorteos();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async loadSorteoSchedules(): Promise<void> {
    try {
      this.sorteos = await this.supabaseService.getSorteoSchedules();
      console.log('Sorteos cargados en resumen-sorteos:', this.sorteos);
    } catch (error) {
      console.error('Error cargando sorteos en resumen-sorteos:', error);
      // Fallback a valores por defecto
      this.sorteos = [
        { name: 'mañana', label: 'Mañana', closeTime: '9:15', openTime: '00:47' },
        { name: 'tarde', label: 'Tarde', closeTime: '18:00', openTime: '9:18' },
        { name: 'noche', label: 'Noche', closeTime: '20:40', openTime: '16:00' }
      ];
    }
  }

  async loadResumenesSorteos(): Promise<void> {
    this.isLoading = true;
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    const fechaStr = this.supabaseService.formatDateOnlyForSupabase(hondurasToday);

    try {
      // Limpiar datos previos COMPLETAMENTE
      this.resumenPorSorteo = {};
      console.log('🧹 Limpiando resumenPorSorteo completamente');
      
      for (const sorteo of this.sorteos) {
        const sorteoId = `${fechaStr}-${sorteo.name}`;
        console.log(`🔍 Cargando resumen para sorteo: ${sorteo.name}, ID: ${sorteoId}`);
        
        try {
          // Cargar resumen por sucursal
          const resumen = await this.supabaseService.getSorteoResumenPorSucursal(sorteoId);
          console.log(`📊 Resumen RAW obtenido para ${sorteo.name}:`, resumen);
          
          // VALIDACIÓN ESTRICTA: Solo aceptar arrays con datos válidos
          if (Array.isArray(resumen) && resumen.length > 0) {
            // Verificar que los datos son específicos para este sorteo
            const sorteoValido = resumen.every(item => {
              const tieneDatosBasicos = item.sucursal && 
                                      (item.total_vendido !== undefined) && 
                                      (item.factor_multiplicador !== undefined);
              return tieneDatosBasicos;
            });
            
            if (sorteoValido) {
              console.log(`✅ Guardando resumen VÁLIDO para ${sorteo.name}:`, resumen);
              // Crear una nueva entrada específica para este sorteo
              this.resumenPorSorteo[sorteo.name] = [...resumen]; // Clonar array
            } else {
              console.log(`❌ Resumen inválido para ${sorteo.name}:`, resumen);
              this.resumenPorSorteo[sorteo.name] = [];
            }
          } else {
            console.log(`❌ No hay resumen válido para ${sorteo.name} (sorteo no cerrado o datos vacíos)`);
            // Asegurar que existe pero vacío
            this.resumenPorSorteo[sorteo.name] = [];
          }

          // Cargar ventas por número para este sorteo
          await this.loadVentasPorNumero(sorteo.name, fechaStr);
        } catch (error) {
          console.error(`❌ Error cargando resumen para ${sorteo.name}:`, error);
          // Asegurar que existe entrada vacía en caso de error
          this.resumenPorSorteo[sorteo.name] = [];
        }
      }
      
      console.log('📋 Estado final de resumenPorSorteo:', JSON.stringify(this.resumenPorSorteo, null, 2));
    } finally {
      this.isLoading = false;
    }
  }

  // Nuevo método para cargar ventas por número
  async loadVentasPorNumero(sorteoName: string, fecha: string): Promise<void> {
    try {
      const ventasPorNumero = await this.supabaseService.getVentasPorNumero(sorteoName, fecha);
      this.ventasPorNumero[sorteoName] = ventasPorNumero;
    } catch (error) {
      console.error(`Error cargando ventas por número para ${sorteoName}:`, error);
      this.ventasPorNumero[sorteoName] = {};
    }
  }

  // Función para obtener resumen de un sorteo específico
  getResumenSorteo(sorteoName: string): any[] {
    return this.resumenPorSorteo[sorteoName] || [];
  }

  // Función para verificar si un sorteo tiene resumen
  hasResumenSorteo(sorteoName: string): boolean {
    return this.resumenPorSorteo[sorteoName] && this.resumenPorSorteo[sorteoName].length > 0;
  }

  // Funciones auxiliares para cálculos
  getTotalVendidoSorteo(sorteoName: string): string {
    const resumen = this.getResumenSorteo(sorteoName);
    const total = resumen.reduce((sum, s) => sum + (s.total_vendido || 0), 0);
    return total.toFixed(2);
  }

  getTotalPagadoSorteo(sorteoName: string): string {
    const resumen = this.getResumenSorteo(sorteoName);
    const total = resumen.reduce((sum, s) => sum + (s.total_pagado || 0), 0);
    return total.toFixed(2);
  }

  getGananciaTotalSorteo(sorteoName: string): number {
    const resumen = this.getResumenSorteo(sorteoName);
    return resumen.reduce((sum, s) => sum + (s.ganancia_neta || 0), 0);
  }

  // Función para obtener el número ganador de un sorteo
  getNumeroGanador(sorteoName: string): string {
    console.log(`🎯 getNumeroGanador llamado para: ${sorteoName}`);
    
    const resumen = this.getResumenSorteo(sorteoName);
    console.log(`📊 Resumen obtenido para ${sorteoName}:`, resumen);
    
    // Solo mostrar número ganador si el sorteo tiene resumen y está efectivamente cerrado
    if (resumen.length === 0) {
      console.log(`❌ No hay resumen para ${sorteoName}, retornando N/A`);
      return 'N/A';
    }
    
    // Verificar que todos los registros del resumen tengan el mismo numero_ganador
    // Si hay inconsistencias, significa que los datos no son confiables
    const numerosGanadores = resumen
      .map(r => r.numero_ganador)
      .filter(n => n !== null && n !== undefined && n !== '');
    
    console.log(`🔢 Números ganadores extraídos de ${sorteoName}:`, numerosGanadores);
    
    if (numerosGanadores.length === 0) {
      console.log(`❌ No hay números ganadores válidos para ${sorteoName}, retornando N/A`);
      return 'N/A';
    }
    
    // Verificar que todos los números ganadores son iguales
    const numeroUnico = numerosGanadores[0];
    const todosIguales = numerosGanadores.every(n => n === numeroUnico);
    
    if (!todosIguales) {
      console.warn(`⚠️ Inconsistencia en números ganadores para ${sorteoName}:`, numerosGanadores);
      return 'N/A';
    }
    
    console.log(`✅ Número ganador válido para ${sorteoName}: ${numeroUnico}`);
    return numeroUnico || 'N/A';
  }

  // Función para obtener el factor más común
  getFactorPrincipal(sorteoName: string): number {
    const resumen = this.getResumenSorteo(sorteoName);
    return resumen.length > 0 ? resumen[0].factor_multiplicador || 70 : 70;
  }

  // Función para refrescar datos (para llamar desde el componente padre)
  async refreshData(): Promise<void> {
    await this.loadResumenesSorteos();
  }

  // Función para obtener sorteos con resumen (solo los cerrados)
  getSorteosConResumen(): SorteoSchedule[] {
    return this.sorteos.filter((sorteo: SorteoSchedule) => this.hasResumenSorteo(sorteo.name));
  }

  // Métodos para manejar ventas por número
  getVentasPorNumero(sorteoName: string): { [numero: string]: number } {
    return this.ventasPorNumero[sorteoName] || {};
  }

  hasVentasPorNumero(sorteoName: string): boolean {
    const ventas = this.getVentasPorNumero(sorteoName);
    return Object.keys(ventas).length > 0;
  }

  getNumerosMasVendidos(sorteoName: string, top: number = 5): Array<{numero: string, total: number}> {
    const ventas = this.getVentasPorNumero(sorteoName);
    return Object.entries(ventas)
      .map(([numero, total]) => ({ numero, total }))
      .sort((a, b) => b.total - a.total)
      .slice(0, top);
  }

  getVentaTotalPorNumero(sorteoName: string, numero: string): number {
    const ventas = this.getVentasPorNumero(sorteoName);
    return ventas[numero] || 0;
  }

  getMaxVentaPorNumero(sorteoName: string): number {
    const ventas = this.getVentasPorNumero(sorteoName);
    const valores = Object.values(ventas);
    return valores.length > 0 ? Math.max(...valores) : 0;
  }

  // Calcular promedio de ventas por número
  getPromedioVentaPorNumero(sorteoName: string): number {
    const ventas = this.getVentasPorNumero(sorteoName);
    const valores = Object.values(ventas);
    if (valores.length === 0) return 0;
    const suma = valores.reduce((acc, val) => acc + val, 0);
    return suma / valores.length;
  }

  // Método auxiliar para obtener la cantidad de números vendidos
  getCantidadNumerosVendidos(sorteoName: string): number {
    return Object.keys(this.getVentasPorNumero(sorteoName)).length;
  }

  // Generar array de números del 00 al 99 para la tabla
  getNumeros(): string[] {
    const numeros = ['00']; // Empezar con 00
    for (let i = 1; i <= 99; i++) {
      numeros.push(i.toString().padStart(2, '0'));
    }
    return numeros;
  }

  // Obtener color de intensidad basado en el total vendido
  getIntensidadColor(sorteoName: string, numero: string): string {
    const venta = this.getVentaTotalPorNumero(sorteoName, numero);
    const maxVenta = this.getMaxVentaPorNumero(sorteoName);
    
    if (venta === 0 || maxVenta === 0) return '';
    
    const intensidad = venta / maxVenta;
    if (intensidad > 0.8) return 'intensidad-alta';
    if (intensidad > 0.5) return 'intensidad-media';
    if (intensidad > 0.2) return 'intensidad-baja';
    return 'intensidad-minima';
  }
}
