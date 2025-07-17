import { Injectable } from '@angular/core';
import { SORTEO_SCHEDULES, SorteoSchedule } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SorteoService {
  
  constructor() { }

  getCurrentSorteo(): SorteoSchedule | null {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    for (const sorteo of SORTEO_SCHEDULES) {
      if (currentTime < sorteo.closeTime) {
        return sorteo;
      }
    }
    
    // Si ya pasaron todos los sorteos del día, retorna null
    return null;
  }

  getNextSorteo(): SorteoSchedule | null {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    for (const sorteo of SORTEO_SCHEDULES) {
      if (currentTime < sorteo.closeTime) {
        return sorteo;
      }
    }
    
    // Si ya pasaron todos los sorteos del día, retorna el primero del siguiente día
    return SORTEO_SCHEDULES[0];
  }

  isSorteoOpen(sorteo: SorteoSchedule): boolean {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    return currentTime < sorteo.closeTime;
  }

  getTimeUntilClose(sorteo: SorteoSchedule): string {
    const now = new Date();
    const [hours, minutes] = sorteo.closeTime.split(':');
    const closeTime = new Date();
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    if (closeTime <= now) {
      return '00:00';
    }
    
    const diff = closeTime.getTime() - now.getTime();
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`;
  }

  getAllSorteos(): SorteoSchedule[] {
    return SORTEO_SCHEDULES;
  }
}
