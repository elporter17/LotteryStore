import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private loadingInstance: any = null;

  constructor() { }

  // Mostrar mensaje de éxito
  async showSuccess(title: string, text?: string): Promise<void> {
    await Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#28a745'
    });
  }

  // Mostrar mensaje de error
  async showError(title: string, text?: string): Promise<void> {
    await Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#dc3545'
    });
  }

  // Mostrar mensaje de información
  async showInfo(title: string, text?: string): Promise<void> {
    await Swal.fire({
      title,
      text,
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#007bff'
    });
  }

  // Mostrar mensaje de advertencia
  async showWarning(title: string, text?: string): Promise<void> {
    await Swal.fire({
      title,
      text,
      icon: 'warning',
      confirmButtonText: 'OK',
      confirmButtonColor: '#ffc107'
    });
  }

  // Mostrar confirmación
  async showConfirmation(
    title: string, 
    text?: string, 
    confirmButtonText: string = 'Sí, confirmar',
    cancelButtonText: string = 'Cancelar'
  ): Promise<boolean> {
    const result = await Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545'
    });

    return result.isConfirmed;
  }

  // Mostrar loader
  showLoading(title: string = 'Cargando...'): void {
    this.hideLoading(); // Cerrar cualquier loading anterior
    
    this.loadingInstance = Swal.fire({
      title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  // Cerrar loader
  hideLoading(): void {
    if (this.loadingInstance) {
      Swal.close();
      this.loadingInstance = null;
    }
  }
}
