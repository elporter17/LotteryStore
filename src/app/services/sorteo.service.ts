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
      // Cargar horarios desde la base de datos
      this.sorteoSchedules = await this.supabaseService.getSorteoSchedules();
      console.log('Horarios cargados en SorteoService:', this.sorteoSchedules);
    } catch (error) {
      console.error('Error cargando horarios en SorteoService:', error);
      // Mantener los horarios por defecto en caso de error
      this.sorteoSchedules = [
        { name: 'mañana', label: 'Mañana', closeTime: '9:15', openTime: '00:47' },
        { name: 'tarde', label: 'Tarde', closeTime: '18:00', openTime: '9:18' },
        { name: 'noche', label: 'Noche', closeTime: '20:40', openTime: '16:00' }
      ];
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

    for (const sorteo of this.sorteoSchedules) {
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const closeTimeInMinutes = closeHour * 60 + closeMinute;

      if (currentTimeInMinutes < closeTimeInMinutes) {
        return sorteo;
      }
    }

    // Si ya pasaron todos los sorteos del día, retorna null
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
