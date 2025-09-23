import { Injectable } from '@angular/core';
import { SorteoSchedule } from '../models/interfaces';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class SorteoService {
  private sorteoSchedules: SorteoSchedule[] = [];

  constructor(private supabaseService: SupabaseService) {
    this.loadSorteoSchedules();
  }

  private async loadSorteoSchedules(): Promise<void> {
    try {
      // console.log('🔄 Cargando horarios desde la base de datos...');
      
      // Cargar horarios desde la base de datos
      this.sorteoSchedules = await this.supabaseService.getSorteoSchedules();
      
      // console.log('✅ Horarios cargados correctamente desde BD:', this.sorteoSchedules);
      
    } catch (error) {
      console.error('❌ Error cargando horarios desde BD:', error);
      console.log('🔄 Usando horarios actualizados de BD como fallback');
      
      // Horarios de fallback basados en los datos reales de tu BD
      this.sorteoSchedules = [
        { name: 'mañana', label: 'Mañana', closeTime: '10:55', openTime: '05:00' },
        { name: 'tarde', label: 'Tarde', closeTime: '15:00', openTime: '11:00' },
        { name: 'noche', label: 'Noche', closeTime: '23:00', openTime: '14:55' }
      ];
      
      console.log('✅ Horarios de fallback establecidos:', this.sorteoSchedules);
    }
  }

  async refreshSorteoSchedules(): Promise<void> {
    await this.loadSorteoSchedules();
  }

  getCurrentSorteo(): SorteoSchedule | null {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentHour = hondurasTime.getHours();
    const currentMinute = hondurasTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    // console.log(`🕐 Hora actual Honduras: ${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')} (${currentTimeInMinutes} minutos)`);
    // console.log('📋 Horarios disponibles:', this.sorteoSchedules);

    // Buscar el sorteo que está actualmente abierto (currentTime >= openTime && currentTime < closeTime)
    for (const sorteo of this.sorteoSchedules) {
      if (!sorteo.openTime || !sorteo.closeTime) {
        console.warn('⚠️ Sorteo con horarios incompletos:', sorteo);
        continue;
      }

      const [openHour, openMinute] = sorteo.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      
      const openTimeInMinutes = openHour * 60 + openMinute;
      const closeTimeInMinutes = closeHour * 60 + closeMinute;

      // console.log(`🎯 Sorteo ${sorteo.name}: abre a las ${sorteo.openTime} (${openTimeInMinutes} min) - cierra a las ${sorteo.closeTime} (${closeTimeInMinutes} min)`);
      
      // Verificar si estamos dentro del rango del sorteo
      const isInRange = currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes;
      // console.log(`⏰ ¿${currentTimeInMinutes} >= ${openTimeInMinutes} && ${currentTimeInMinutes} < ${closeTimeInMinutes}? ${isInRange}`);

      if (isInRange) {
        // console.log(`✅ Sorteo actual seleccionado: ${sorteo.name} (${sorteo.label})`);
        return sorteo;
      }
    }

    console.log('❌ No hay sorteos abiertos en este momento');
    return null;
  }

  getNextSorteo(): SorteoSchedule | null {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentHour = hondurasTime.getHours();
    const currentMinute = hondurasTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    for (const sorteo of this.sorteoSchedules) {
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const closeTimeInMinutes = closeHour * 60 + closeMinute;

      if (currentTimeInMinutes < closeTimeInMinutes) {
        return sorteo;
      }
    }

    // Si ya pasaron todos los sorteos del día, retorna el primero del siguiente día
    return this.sorteoSchedules[0] || null;
  }

  isSorteoOpen(sorteo: SorteoSchedule): boolean {
    // Hora actual en Honduras formateada
    const hnFormatted = this.supabaseService.formatLocalDateForSupabase(
      this.supabaseService.getHondurasDateTime()
    );
    const [, timePart] = hnFormatted.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    const currentTotalMinutes = parseInt(hourStr, 10) * 60 + parseInt(minuteStr, 10);

    // Hora de cierre del sorteo
    const [closeHourStr, closeMinuteStr] = sorteo.closeTime.split(':');
    const closeTotalMinutes =
      parseInt(closeHourStr, 10) * 60 + parseInt(closeMinuteStr, 10);

    return currentTotalMinutes < closeTotalMinutes;
  }

  getTimeUntilClose(sorteo: SorteoSchedule): string {
    // Hora actual en Honduras formateada
    const hnFormatted = this.supabaseService.formatLocalDateForSupabase(
      this.supabaseService.getHondurasDateTime()
    );
    const [, timePart] = hnFormatted.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    const currentTotalMinutes = parseInt(hourStr, 10) * 60 + parseInt(minuteStr, 10);

    // Hora de cierre del sorteo
    const [closeHourStr, closeMinuteStr] = sorteo.closeTime.split(':');
    const closeTotalMinutes =
      parseInt(closeHourStr, 10) * 60 + parseInt(closeMinuteStr, 10);

    let diff = closeTotalMinutes - currentTotalMinutes;
    if (diff <= 0) {
      return '00:00';
    }
    const hoursLeft = Math.floor(diff / 60);
    const minutesLeft = diff % 60;
    return `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft
      .toString()
      .padStart(2, '0')}`;
  }

  getAllSorteos(): SorteoSchedule[] {
    return this.sorteoSchedules;
  }
}
