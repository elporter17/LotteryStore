import { Injectable } from '@angular/core';
import { SORTEO_SCHEDULES, SorteoSchedule } from '../models/interfaces';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class SorteoService {
  private sorteoSchedules: SorteoSchedule[] = [...SORTEO_SCHEDULES];
  
  constructor(private supabaseService: SupabaseService) { 
    this.loadSorteoSchedules();
  }

  private async loadSorteoSchedules(): Promise<void> {
    try {
      const dynamicSchedules = await this.supabaseService.getSorteoSchedules();
      if (dynamicSchedules.length > 0) {
        this.sorteoSchedules = dynamicSchedules.map(schedule => ({
          name: schedule.name,
          label: schedule.label,
          closeTime: schedule.close_time  // Mapear de close_time a closeTime
        }));
      }
    } catch (error) {
      console.error('Error cargando horarios de sorteos dinámicos, usando horarios por defecto:', error);
      // Mantener los horarios por defecto en caso de error
    }
  }

  async refreshSorteoSchedules(): Promise<void> {
    await this.loadSorteoSchedules();
  }

  getCurrentSorteo(): SorteoSchedule | null {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentTime = `${hondurasTime.getHours().toString().padStart(2, '0')}:${hondurasTime.getMinutes().toString().padStart(2, '0')}`;
    
    console.log('=== SORTEO ACTUAL - USANDO HONDURAS TIMEZONE ===');
    console.log('Hora Honduras:', this.supabaseService.formatHondurasDateTime(hondurasTime));
    console.log('Hora actual para comparar:', currentTime);
    
    for (const sorteo of this.sorteoSchedules) {
      console.log(`Verificando sorteo ${sorteo.name}: ${currentTime} < ${sorteo.closeTime} = ${currentTime < sorteo.closeTime}`);
      if (currentTime < sorteo.closeTime) {
        return sorteo;
      }
    }
    
    // Si ya pasaron todos los sorteos del día, retorna null
    return null;
  }

  getNextSorteo(): SorteoSchedule | null {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentTime = `${hondurasTime.getHours().toString().padStart(2, '0')}:${hondurasTime.getMinutes().toString().padStart(2, '0')}`;
    
    console.log('=== PRÓXIMO SORTEO - USANDO HONDURAS TIMEZONE ===');
    console.log('Hora Honduras:', this.supabaseService.formatHondurasDateTime(hondurasTime));
    
    for (const sorteo of this.sorteoSchedules) {
      if (currentTime < sorteo.closeTime) {
        return sorteo;
      }
    }
    
    // Si ya pasaron todos los sorteos del día, retorna el primero del siguiente día
    return this.sorteoSchedules[0];
  }

  isSorteoOpen(sorteo: SorteoSchedule): boolean {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentTime = `${hondurasTime.getHours().toString().padStart(2, '0')}:${hondurasTime.getMinutes().toString().padStart(2, '0')}`;
    
    console.log(`=== VERIFICANDO SI SORTEO ${sorteo.name} ESTÁ ABIERTO ===`);
    console.log('Hora Honduras:', this.supabaseService.formatHondurasDateTime(hondurasTime));
    console.log(`Sorteo cierra a las: ${sorteo.closeTime}`);
    console.log(`Hora actual: ${currentTime}`);
    console.log(`¿Abierto?: ${currentTime < sorteo.closeTime}`);
    
    return currentTime < sorteo.closeTime;
  }

  getTimeUntilClose(sorteo: SorteoSchedule): string {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const [hours, minutes] = sorteo.closeTime.split(':');
    const closeTime = new Date(hondurasTime);
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    console.log('=== TIEMPO HASTA CIERRE ===');
    console.log('Hora Honduras actual:', this.supabaseService.formatHondurasDateTime(hondurasTime));
    console.log('Hora de cierre del sorteo:', this.supabaseService.formatHondurasDateTime(closeTime));
    
    if (closeTime <= hondurasTime) {
      return '00:00';
    }
    
    const diff = closeTime.getTime() - hondurasTime.getTime();
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const timeLeft = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`;
    console.log('Tiempo restante:', timeLeft);
    
    return timeLeft;
  }

  getAllSorteos(): SorteoSchedule[] {
    return this.sorteoSchedules;
  }
}
