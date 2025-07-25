import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { SorteoService } from '../../services/sorteo.service';
import { NotificationService } from '../../services/notification.service';
import { PrintService } from '../../services/print.service';
import { Router } from '@angular/router';
import { SorteoSchedule, Sale, SaleDetail } from '../../models/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss']
})
export class SucursalComponent implements OnInit, OnDestroy {
  currentUser: any = null;
  currentSorteo: SorteoSchedule | null = null;
  timeUntilClose: string = '';
  isSorteoOpen: boolean = false;

  selectedNumber: number | null = null;
  selectedAmount: number | null = null;
  selectedNumbers: { numero: number, monto: number }[] = [];

  // Propiedades para entrada individual
  numero: number | null = null;
  monto: number | null = null;

  todaySales: Sale[] = [];
  recentSales: Sale[] = [];
  saleDetails: { [saleId: string]: SaleDetail[] } = {};
  filteredSales: Sale[] = [];
  filterDate: string = '';
  isLoading: boolean = false;

  // Propiedades para el teclado numérico
  numberInput: string = '';
  showKeypad: boolean = false;
  isBlocked: boolean = false;
  currentInput: 'numero' | 'monto' = 'numero';

  // Propiedades para el flujo de modales
  showNumberModal: boolean = false;
  showAmountModal: boolean = false;
  showConfirmModal: boolean = false;
  tempNumber: number | null = null;
  tempAmount: number | null = null;
  modalNumberInput: string = '';
  modalAmountInput: string = '';

  // Propiedades para el stepper de monto
  stepperAmount: number = 5; // Monto mínimo
  maxAmount: number = 1000; // Monto máximo configurable (opcional)
  stepIncrement: number = 5; // Incremento de 5 en 5

  // Propiedades para tabs de sorteos
  activeTab: 'mañana' | 'tarde' | 'noche' = 'mañana';
  sorteoData: { [key: string]: any } = {};

  // Propiedades para la hora de Honduras
  currentHondurasTime: string = '';

  // Propiedades para información de bloqueo
  blockMessage: string = '';
  blockDetail: string = '';
  nextSorteoName: string = '';
  nextSorteoOpenTime: string = '';
  timeUntilNextOpening: string = '';

  // Manejo de suscripciones y timers
  private userSubscription?: Subscription;
  private sorteoUpdateInterval?: any;
  private timeCheckInterval?: any;
  private hondurasTimeInterval?: any;
  private isProcessingModal: boolean = false;

  constructor(
    private supabaseService: SupabaseService,
    private sorteoService: SorteoService,
    private notificationService: NotificationService,
    public printService: PrintService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.userSubscription = this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      console.log('Usuario actual - Sucursal:', this.currentUser?.sucursal);
      if (!user || user.role !== 'sucursal') {
        this.router.navigate(['/login']);
      }
    });

    this.initializeComponent();
    this.checkTimeRestrictions();
    this.updateHondurasTime();

    // Verificar bloqueo cada minuto - usar método que se puede limpiar
    this.timeCheckInterval = setInterval(() => {
      this.checkTimeRestrictions();
    }, 500);

    // Actualizar hora de Honduras cada segundo
    this.hondurasTimeInterval = setInterval(() => {
      this.updateHondurasTime();
    }, 1000);

  }

  ngOnDestroy(): void {

    // Limpiar suscripciones y timers
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.sorteoUpdateInterval) {
      clearInterval(this.sorteoUpdateInterval);
    }
    if (this.timeCheckInterval) {
      clearInterval(this.timeCheckInterval);
    }
    if (this.hondurasTimeInterval) {
      clearInterval(this.hondurasTimeInterval);
    }

  }

  private updateHondurasTime(): void {
    const hondurasTime = this.supabaseService.getHondurasTimeNow();
    const fullFormatted = this.supabaseService.formatDateForHonduras(hondurasTime);

    const parts = fullFormatted.split(' ');
    this.currentHondurasTime = `${parts[1]} ${parts[2]}`; // "12:49:39 AM"
  }

  private async initializeComponent(): Promise<void> {
    try {
      this.isLoading = true;
      this.notificationService.showLoading('Cargando datos...');

      // Primero asegurar que los horarios de sorteo estén actualizados
      await this.sorteoService.refreshSorteoSchedules();

      await this.updateSorteoInfo();
      this.setFilterDate();

      // Limpiar timer anterior si existe
      if (this.sorteoUpdateInterval) {
        clearInterval(this.sorteoUpdateInterval);
      }

      // Actualizar cada minuto - usar método que se puede limpiar
      this.sorteoUpdateInterval = setInterval(async () => {
        await this.updateSorteoInfo();
      }, 500);

      // Cargar datos iniciales de todos los tabs
      await this.loadAllSorteoData();

    } catch (error) {
      this.notificationService.showError('Error al cargar los datos');
    } finally {
      this.isLoading = false;
      this.notificationService.hideLoading();
    }
  }

  setFilterDate(): void {
    // Obtiene la fecha/hora actual en Honduras
    const hondurasNow = this.supabaseService.getHondurasDateTime();
    // Formatea sin zona: "YYYY-MM-DD hh:mm:ss" y extrae la parte de fecha
    const formatted = this.supabaseService.formatLocalDateForSupabase(hondurasNow);
    this.filterDate = formatted.split(' ')[0]; // -> "YYYY-MM-DD"
  }


  onFilterDateChange(): void {
    this.filterSales();
  }

  filterSales(): void {
    if (!this.filterDate) {
      this.filteredSales = this.todaySales;
      return;
    }

    const filterDateObj = new Date(this.filterDate);
    this.filteredSales = this.todaySales.filter(sale => {
      const saleDate = new Date(sale.fecha);
      return saleDate.toDateString() === filterDateObj.toDateString();
    });
  }

  async updateSorteoInfo(): Promise<void> {
    try {

      // Asegurar que tenemos los horarios más recientes
      await this.sorteoService.refreshSorteoSchedules();

      this.currentSorteo = this.sorteoService.getCurrentSorteo();


      if (this.currentSorteo) {
        this.isSorteoOpen = this.sorteoService.isSorteoOpen(this.currentSorteo);
        this.timeUntilClose = this.sorteoService.getTimeUntilClose(this.currentSorteo);

      } else {
        this.isSorteoOpen = false;
        this.timeUntilClose = '';
      }
    } catch (error) {
    }
  }

  addNumber(): void {
    if (this.numero && this.monto &&
      this.numero >= 0 && this.numero <= 99) {

      // Verificar si el número ya fue seleccionado
      const existingIndex = this.selectedNumbers.findIndex(n => n.numero === this.numero);
      if (existingIndex >= 0) {
        // Actualizar monto
        this.selectedNumbers[existingIndex].monto += this.monto!;
      } else {
        // Agregar nuevo número
        this.selectedNumbers.push({
          numero: this.numero,
          monto: this.monto
        });
      }

      this.numero = null;
      this.monto = null;
      this.numberInput = '';
      this.currentInput = 'numero';
      this.notificationService.showSuccess('Número agregado', 'Número agregado exitosamente a la venta');
    }
  }

  removeNumber(index: number): void {

    this.selectedNumbers.splice(index, 1);

    this.cdr.detectChanges(); // Forzar actualización visual inmediata
  }

  // Generar número de recibo único con correlativo
  private generateReceiptNumber(correlativo: number, sucursal: string): string {
    // Obtener fecha actual de Honduras como Date
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    // Formatear sin zona para Supabase: "YYYY-MM-DD hh:mm:ss"
    const formatted = this.supabaseService.formatLocalDateForSupabase(hondurasTime);
    // Extraer sólo la parte de fecha
    const datePart = formatted.split(' ')[0]; // "YYYY-MM-DD"
    const [yearFull, month, day] = datePart.split('-');
    const year = yearFull.slice(-2); // últimos dos dígitos

    const sucursalCode = sucursal.replace(/\s+/g, '').toUpperCase().substring(0, 3);
    const correlativoFormatted = correlativo.toString().padStart(4, '0');

    console.log('Sucursal:', `${sucursalCode}-REC-${year}${month}${day}-${correlativoFormatted}`);
    return `${sucursalCode}-REC-${year}${month}${day}-${correlativoFormatted}`;
  }

  getTotal(): number {
    return this.selectedNumbers.reduce((total, item) => total + item.monto, 0);
  }

  async processSale(): Promise<void> {
    if (!this.currentSorteo || !this.currentUser || this.selectedNumbers.length === 0) {
      return;
    }

    // Validar que el usuario tenga sucursal configurada
    if (!this.currentUser.sucursal) {
      await this.notificationService.showError(
        'Error: El usuario no tiene una sucursal asignada. Contacte al administrador.'
      );
      return;
    }

    // Confirmar venta
    const confirmed = await this.notificationService.showConfirmation(
      'Confirmar venta',
      `¿Procesar venta por L. ${this.getTotal().toFixed(2)}?`
    );

    if (!confirmed) return;

    this.isLoading = true;
    this.notificationService.showLoading('Procesando venta...');

    try {
      // Obtener el siguiente correlativo para esta sucursal

      const correlativo = await this.supabaseService.getNextCorrelativo(this.currentUser.sucursal);

      // Generar número de recibo con correlativo
      const numeroRecibo = this.generateReceiptNumber(correlativo, this.currentUser.sucursal);

      const sale: any = {
        userId: this.currentUser.id,
        sucursal: this.currentUser.sucursal,
        sorteo: this.currentSorteo.name,
        fecha: this.supabaseService.getHondurasDateTime(),
        total: this.getTotal(),
        numeroRecibo: numeroRecibo,
        correlativo: correlativo
      };


      const saleId = await this.supabaseService.createSale(sale);

      // Crear detalles de venta
      const saleDetails: SaleDetail[] = [];
      for (const item of this.selectedNumbers) {
        const detailId = await this.supabaseService.createSaleDetail({
          saleId,
          numero: item.numero,
          monto: item.monto
        });
        saleDetails.push({
          id: detailId,
          saleId,
          numero: item.numero,
          monto: item.monto
        });
      }

      // Generar e imprimir recibo
      const saleWithId = { ...sale, id: saleId };

      // Asegurar que los detalles tengan datos
      if (saleDetails.length === 0) {
        // Usar selectedNumbers como fallback
        for (const item of this.selectedNumbers) {
          saleDetails.push({
            id: `temp-${Date.now()}-${item.numero}`,
            saleId,
            numero: item.numero,
            monto: item.monto
          });
        }
      }

      this.printService.generateThermalReceipt(saleWithId, saleDetails);

      // Limpiar selección inmediatamente después de enviar a imprimir
      setTimeout(async () => {
        // Limpiar selección inmediatamente
        this.selectedNumbers = [];

        // Resetear estado de modales
        this.showNumberModal = false;
        this.showAmountModal = false;
        this.showConfirmModal = false;
        this.modalNumberInput = '';
        this.modalAmountInput = '';
        this.tempNumber = null;
        this.tempAmount = null;

        this.cdr.detectChanges(); // Forzar actualización visual inmediata

        // Recargar datos de sorteos para mostrar la venta recién realizada
        await this.loadAllSorteoData();

        this.cdr.detectChanges(); // Forzar actualización después de cargar datos
      }, 100); // Pequeño retraso para evitar conflictos con la ventana de impresión

      this.notificationService.showSuccess('Venta procesada e impresa exitosamente');
    } catch (error) {
      this.notificationService.showError('Error al procesar la venta');
    } finally {
      this.isLoading = false;
      this.notificationService.hideLoading();
    }
  }



  getSaleDetails(saleId: string): SaleDetail[] {
    return this.saleDetails[saleId] || [];
  }

  async logout(): Promise<void> {
    const confirmed = await this.notificationService.showConfirmation(
      'Cerrar sesión',
      '¿Está seguro que desea cerrar sesión?'
    );

    if (confirmed) {
      this.notificationService.showLoading('Cerrando sesión...');
      try {
        await this.supabaseService.logout();
        this.router.navigate(['/login']);
      } catch (error) {
        this.notificationService.showError('Error al cerrar sesión');
      } finally {
        this.notificationService.hideLoading();
      }
    }
  }

  // Métodos del teclado numérico
  pressNumber(num: number) {
    if (this.isBlocked) {
      this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      return;
    }

    if (this.numberInput.length < 5) { // Máximo 5 dígitos
      this.numberInput += num.toString();
    }
  }

  clearNumber() {
    this.numberInput = '';
  }

  acceptNumber() {
    if (!this.numberInput) return;

    if (this.currentInput === 'numero') {
      const numero = parseInt(this.numberInput);
      if (numero >= 0 && numero <= 99) {
        this.numero = numero;
        this.numberInput = '';
        this.currentInput = 'monto';
        this.notificationService.showInfo('Número seleccionado', 'Ahora ingresa el monto a apostar');
      } else {
        this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
      }
    } else {
      const monto = parseFloat(this.numberInput);
      if (monto > 0 && monto <= 500) {
        this.monto = monto;
        this.addNumber();
        this.numberInput = '';
        this.currentInput = 'numero';
      } else {
        this.notificationService.showError('Monto inválido', 'El monto debe ser mayor a 0 y menor o igual a L. 500');
      }
    }
  }

  // Flujo de modales para selección de números
  openNumberModal(): void {

    if (this.isProcessingModal || this.isBlocked) {
      if (this.isBlocked) {
        this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      }
      return;
    }

    this.isProcessingModal = true;

    // Reiniciar estado de modales
    this.closeAllModals();

    // Eliminamos el setTimeout para evitar parpadeo
    this.showNumberModal = true;
    this.modalNumberInput = '';
    this.cdr.detectChanges();
    this.isProcessingModal = false;
  }

  closeAllModals(): void {
    this.showNumberModal = false;
    this.showAmountModal = false;
    this.showConfirmModal = false;
    this.modalNumberInput = '';
    this.modalAmountInput = '';
    this.tempNumber = null;
    this.tempAmount = null;
    this.isProcessingModal = false;
    this.cdr.detectChanges(); // Forzar detección de cambios
  }

  // Modal 1: Selección de número
  pressModalNumber(num: number): void {
    if (this.modalNumberInput.length < 2) {
      this.modalNumberInput += num.toString();
      this.cdr.detectChanges(); // Forzar actualización de la UI
    }
  }

  clearModalNumber(): void {
    this.modalNumberInput = '';
    this.cdr.detectChanges(); // Forzar actualización inmediata
  }

  acceptModalNumber(): void {

    // Evitar múltiples ejecuciones
    if (!this.modalNumberInput || this.isProcessingModal) {
      if (!this.modalNumberInput) {
        this.notificationService.showError('Número requerido', 'Debe ingresar un número');
      }
      return;
    }

    this.isProcessingModal = true;

    // Formatear el número con ceros a la izquierda si es necesario
    let formattedNumber = this.modalNumberInput.padStart(2, '0');
    const numero = parseInt(formattedNumber);

    if (numero >= 0 && numero <= 99) {
      this.tempNumber = numero;

      // Transición suave sin setTimeout
      this.showNumberModal = false;
      this.showAmountModal = true;
      this.modalAmountInput = '';
      this.stepperAmount = 5; // Reiniciar stepper al mínimo
      this.isProcessingModal = false;
      this.cdr.detectChanges();

    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
    }
  }

  // Modal 2: Stepper de monto
  increaseAmount(): void {
    if (this.stepperAmount < this.maxAmount) {
      this.stepperAmount += this.stepIncrement;
      this.cdr.detectChanges();
    }
  }

  decreaseAmount(): void {
    if (this.stepperAmount > 5) { // Mínimo L 5
      this.stepperAmount -= this.stepIncrement;
      this.cdr.detectChanges();
    }
  }

  resetAmount(): void {
    this.stepperAmount = 5; // Reiniciar al mínimo
    this.cdr.detectChanges();
  }

  acceptStepperAmount(): void {
    if (this.isProcessingModal) {
      return;
    }

    this.isProcessingModal = true;

    if (this.stepperAmount >= 5 && this.stepperAmount <= this.maxAmount) {
      this.tempAmount = this.stepperAmount;

      // Transición al modal de confirmación
      this.showAmountModal = false;
      this.showConfirmModal = true;
      this.isProcessingModal = false;
      this.cdr.detectChanges();
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Monto inválido', `El monto debe estar entre L 5 y L ${this.maxAmount}`);
    }
  }

  // Modal 3: Confirmación
  confirmAddNumber(): void {
    if (this.tempNumber !== null && this.tempAmount !== null) {
      // Verificar si el número ya fue seleccionado
      const existingIndex = this.selectedNumbers.findIndex(n => n.numero === this.tempNumber);
      if (existingIndex >= 0) {
        // Actualizar monto
        this.selectedNumbers[existingIndex].monto += this.tempAmount!;
      } else {
        // Agregar nuevo número
        this.selectedNumbers.push({
          numero: this.tempNumber,
          monto: this.tempAmount
        });
      }

      // Quitar el modal de confirmación, solo cerrar modales
      this.closeAllModals();
      this.cdr.detectChanges(); // Forzar actualización final
    }
  }

  cancelAddNumber(): void {
    this.closeAllModals();
  }

  // Verificación de restricciones de tiempo
  private checkTimeRestrictions(): void {
    // Obtener hora de Honduras formateada
    const hnFormatted = this.supabaseService.formatLocalDateForSupabase(
      this.supabaseService.getHondurasDateTime()
    );
    const [, timePart] = hnFormatted.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    const currentTotalMinutes = parseInt(hourStr, 10) * 60 + parseInt(minuteStr, 10);

    // Obtener todos los sorteos configurados
    const sorteos = this.sorteoService.getAllSorteos();
    let isInActivePeriod = false;
    let activeSorteo: any = null;

    // Verificar si estamos en un período activo de ventas
    for (const sorteo of sorteos) {
      const [openHour, openMinute] = sorteo.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      
      const openTimeInMinutes = openHour * 60 + openMinute;
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      
      // Caso especial para sorteo de noche que puede cruzar medianoche
      if (sorteo.name === 'noche') {
        if (closeTimeInMinutes < openTimeInMinutes) {
          // Cruza medianoche
          if (currentTotalMinutes >= openTimeInMinutes || currentTotalMinutes <= closeTimeInMinutes) {
            isInActivePeriod = true;
            activeSorteo = sorteo;
            break;
          }
        } else {
          // No cruza medianoche
          if (currentTotalMinutes >= openTimeInMinutes && currentTotalMinutes <= closeTimeInMinutes) {
            isInActivePeriod = true;
            activeSorteo = sorteo;
            break;
          }
        }
      } else {
        // Sorteos normales (mañana y tarde)
        if (currentTotalMinutes >= openTimeInMinutes && currentTotalMinutes <= closeTimeInMinutes) {
          isInActivePeriod = true;
          activeSorteo = sorteo;
          break;
        }
      }
    }

    // Si no estamos en un período activo, bloquear ventas
    if (!isInActivePeriod) {
      // Buscar el próximo sorteo que abrirá
      const nextSorteo = this.getNextOpeningSorteo(currentTotalMinutes);
      
      if (nextSorteo) {
        this.blockMessage = 'Ventas cerradas';
        this.blockDetail = `El próximo sorteo ${nextSorteo.label} abre a las ${nextSorteo.openTime}`;
        this.nextSorteoName = nextSorteo.label;
        this.nextSorteoOpenTime = nextSorteo.openTime;
        this.timeUntilNextOpening = this.calculateTimeUntilOpening(currentTotalMinutes, nextSorteo);
        
        // Solo mostrar notificación la primera vez que se bloquea
        if (!this.isBlocked) {
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        }
      } else {
        this.blockMessage = 'Ventas cerradas';
        this.blockDetail = 'No hay sorteos disponibles en este momento';
        this.nextSorteoName = '';
        this.nextSorteoOpenTime = '';
        this.timeUntilNextOpening = '';
        
        if (!this.isBlocked) {
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        }
      }
      
      this.isBlocked = true;
      this.cdr.detectChanges(); // Forzar actualización de la UI
      return;
    }

    // Si estamos en período activo, verificar restricciones del sorteo actual
    if (!this.currentSorteo || !activeSorteo) {
      this.isBlocked = false;
      return;
    }

    // Hora de cierre del sorteo activo
    const [closeHourStr, closeMinuteStr] = activeSorteo.closeTime.split(':');
    const closeTotalMinutes = parseInt(closeHourStr, 10) * 60 + parseInt(closeMinuteStr, 10);

    // Calcula minutos restantes (manejar cruce de medianoche)
    let minutesLeft = closeTotalMinutes - currentTotalMinutes;
    if (activeSorteo.name === 'noche' && closeTotalMinutes < currentTotalMinutes) {
      // Si es sorteo nocturno que cruza medianoche
      minutesLeft = (24 * 60 + closeTotalMinutes) - currentTotalMinutes;
    }

    // Bloquear ventas en los últimos 5 minutos antes del sorteo
    if (minutesLeft <= 5 && minutesLeft >= 0) {
      if (!this.isBlocked) {
        if (minutesLeft <= 0) {
          this.blockMessage = 'Sorteo cerrado';
          this.blockDetail = 'El sorteo ya ha comenzado. No se pueden realizar más ventas.';
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        } else {
          this.blockMessage = 'Ventas bloqueadas';
          this.blockDetail = `Faltan ${minutesLeft} minutos para el sorteo. Ventas bloqueadas.`;
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        }
        this.nextSorteoName = '';
        this.nextSorteoOpenTime = '';
        this.timeUntilNextOpening = '';
      }
      this.isBlocked = true;
    } else {
      // Limpiar mensajes de bloqueo cuando se desbloquea
      if (this.isBlocked) {
        this.blockMessage = '';
        this.blockDetail = '';
        this.nextSorteoName = '';
        this.nextSorteoOpenTime = '';
        this.timeUntilNextOpening = '';
      }
      this.isBlocked = false;
    }
    
    this.cdr.detectChanges(); // Forzar actualización de la UI
  }

  // Método para encontrar el próximo sorteo que abrirá
  private getNextOpeningSorteo(currentTotalMinutes: number): any {
    const sorteos = this.sorteoService.getAllSorteos();
    
    // Buscar el próximo sorteo del mismo día
    for (const sorteo of sorteos) {
      const [openHour, openMinute] = sorteo.openTime.split(':').map(Number);
      const openTimeInMinutes = openHour * 60 + openMinute;
      
      if (openTimeInMinutes > currentTotalMinutes) {
        return sorteo;
      }
    }
    
    // Si no hay más sorteos hoy, el próximo será mañana (primer sorteo del día)
    return sorteos[0] || null;
  }

  // Método para calcular el tiempo hasta la próxima apertura
  private calculateTimeUntilOpening(currentTotalMinutes: number, nextSorteo: any): string {
    if (!nextSorteo) return '';
    
    const [openHour, openMinute] = nextSorteo.openTime.split(':').map(Number);
    const openTimeInMinutes = openHour * 60 + openMinute;
    
    let minutesUntilOpening: number;
    
    if (openTimeInMinutes > currentTotalMinutes) {
      // Sorteo abre hoy
      minutesUntilOpening = openTimeInMinutes - currentTotalMinutes;
    } else {
      // Sorteo abre mañana (es el primer sorteo del día)
      minutesUntilOpening = (24 * 60) - currentTotalMinutes + openTimeInMinutes;
    }
    
    const hours = Math.floor(minutesUntilOpening / 60);
    const minutes = minutesUntilOpening % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  }
  // Obtener fecha de hoy formateada usando Honduras timezone
  getTodayDate(): string {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    return hondurasToday.toLocaleDateString('es-HN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Método mejorado para reimprimir recibo
  async reprintReceipt(sale: Sale): Promise<void> {
    try {

      this.notificationService.showLoading('Reimprimiendo recibo...');

      // Obtener detalles de la venta desde la base de datos
      const details = await this.supabaseService.getSaleDetails(sale.id);

      if (details.length === 0) {
        this.notificationService.showError('Sin detalles', 'No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
        return;
      }

      // Generar recibo con los detalles obtenidos
      this.printService.generateThermalReceipt(sale, details);

      this.notificationService.showSuccess('Recibo reimpreso', `Recibo #${sale.numeroRecibo || sale.id} enviado a impresora`);

    } catch (error) {
      this.notificationService.showError('Error de reimpresión', 'Error al reimprimir el recibo. Por favor intente nuevamente.');
    } finally {
      this.notificationService.hideLoading();
    }
  }

  // Funciones de optimización para trackBy
  trackByIndex(index: number, item: any): number {
    return index;
  }

  trackBySaleId(index: number, sale: Sale): string {
    return sale.id;
  }

  trackByDetailId(index: number, detail: SaleDetail): string {
    return detail.id;
  }

  // Función de debug temporal
  debugModalState(): void {

    // Forzar reinicio completo de los modales
    this.closeAllModals();

    alert(`Estado de modales:
- showNumberModal: ${this.showNumberModal}
- showAmountModal: ${this.showAmountModal}  
- showConfirmModal: ${this.showConfirmModal}
- isProcessingModal: ${this.isProcessingModal}
- isBlocked: ${this.isBlocked}
Revisa la consola para más detalles.`);
  }

  // Función para toggle manual de bloqueo
  toggleBloqueo(): void {
    this.isBlocked = !this.isBlocked;
    const estado = this.isBlocked ? 'bloqueadas' : 'habilitadas';
    this.notificationService.showInfo('Estado actualizado', `Ventas ${estado} manualmente`);
  }


  // ===== MÉTODOS PARA TABS DE SORTEOS =====

  async loadAllSorteoData(): Promise<void> {
    try {
      console.log('Cargando datos de sorteos de forma optimizada...');
      // Construir un Date a partir de filterDate (ej. "2025-07-24")
      const fecha = new Date(this.filterDate + 'T00:00:00');
      const sucursal = this.currentUser?.sucursal || 'Sucursal 1';

      // Inicializar estructura
      this.sorteoData = {
        mañana: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        tarde: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        noche: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 }
      };

      // Ahora sí cargamos con la fecha filtrada
      await this.loadSorteoDataOptimized(fecha, sucursal);

      // Determinar y mostrar el tab activo
      this.activeTab = this.getCurrentSorteoTab();
      console.log('Datos de sorteos cargados:', this.sorteoData);
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error cargando datos de sorteos:', error);
    }
  }


  // Método optimizado que hace una sola consulta agregada

  private async loadSorteoDataOptimized(fecha: Date, sucursal: string): Promise<void> {
    try {
      console.log('Cargando datos de sorteos optimizados para fecha:', fecha, 'y sucursal:', sucursal);
      // Determinar rango completo del día
      const startOfDay = new Date(fecha);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(fecha);
      endOfDay.setHours(23, 59, 59, 999);

      // Formatear fechas para Supabase
      const startStr = this.supabaseService.formatLocalDateForSupabase(startOfDay);
      const endStr = this.supabaseService.formatLocalDateForSupabase(endOfDay);
      console.log('Rango formateado para consulta:', startStr, '->', endStr);

      // Consulta optimizada que obtiene todos los datos del día en una sola petición
      const { data, error } = await this.supabaseService.client
        .from('sales')
        .select(`
        sorteo,
        sale_details(numero, monto)
      `)
        .eq('sucursal', sucursal)
        .gte('fecha', startStr)
        .lte('fecha', endStr);
      console.log('Consulta optimizada ejecutada:', { data, error });

      if (error) {
        console.error('Error en consulta optimizada:', error);
        return;
      }

      console.log('Datos obtenidos de consulta optimizada:', data);

      // Procesar los datos agregándolos por sorteo
      if (data?.length) {
        data.forEach((sale: any) => {
          const clave = sale.sorteo?.toLowerCase() as 'mañana' | 'tarde' | 'noche';
          let mapped: 'mañana' | 'tarde' | 'noche' = clave;
          if (sale.sorteo?.toLowerCase() === 'mañana' || sale.sorteo?.toLowerCase() === 'manana') {
            mapped = 'mañana';
          }

          const target = this.sorteoData[mapped];
          if (target && sale.sale_details) {
            sale.sale_details.forEach((detail: any) => {
              target.totalVendido += detail.monto;
              const numStr = detail.numero.toString();
              if (!target.numerosVendidos[numStr]) {
                target.numerosVendidos[numStr] = 0;
              }
              target.numerosVendidos[numStr] += detail.monto;
            });
          }
        });
      }

      console.log('Datos procesados y agregados:', this.sorteoData);
    } catch (error) {
      console.error('Error en loadSorteoDataOptimized:', error);
    }
  }



  // Determinar el sorteo actual basado en la hora de Honduras y los horarios configurados
  private getCurrentSorteoTab(): 'mañana' | 'tarde' | 'noche' {
    console.log('Determinando sorteo actual basado en hora de Honduras y horarios configurados...');
    
    // Obtener la hora actual de Honduras
    const hondurasNow = this.supabaseService.getHondurasDateTime();
    const [, timeStr] = this.supabaseService
      .formatLocalDateForSupabase(hondurasNow)
      .split(' ');
    const [hourStr, minuteStr] = timeStr.split(':');
    const currentHour = parseInt(hourStr, 10);
    const currentMinute = parseInt(minuteStr, 10);
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    console.log(`Hora actual de Honduras: ${hourStr.padStart(2, '0')}:${minuteStr.padStart(2, '0')}`);

    // Obtener todos los sorteos configurados
    const sorteos = this.sorteoService.getAllSorteos();
    
    // Encontrar el sorteo activo basado en los horarios configurados
    for (const sorteo of sorteos) {
      const [openHour, openMinute] = sorteo.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      
      const openTimeInMinutes = openHour * 60 + openMinute;
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      
      console.log(`Verificando sorteo ${sorteo.name}: ${sorteo.openTime} - ${sorteo.closeTime}`);
      
      // Caso especial para sorteo de noche que puede cruzar medianoche
      if (sorteo.name === 'noche') {
        // Si closeTime es menor que openTime, significa que cruza medianoche
        if (closeTimeInMinutes < openTimeInMinutes) {
          // Caso 1: Hora actual está después de la apertura (mismo día)
          // Caso 2: Hora actual está antes del cierre (día siguiente)
          if (currentTimeInMinutes >= openTimeInMinutes || currentTimeInMinutes <= closeTimeInMinutes) {
            console.log(`Sorteo detectado: ${sorteo.name} (cruza medianoche)`);
            return sorteo.name;
          }
        } else {
          // Sorteo de noche normal (no cruza medianoche)
          if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes) {
            console.log(`Sorteo detectado: ${sorteo.name} (mismo día)`);
            return sorteo.name;
          }
        }
      } else {
        // Sorteos normales (mañana y tarde)
        if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes) {
          console.log(`Sorteo detectado: ${sorteo.name} (${sorteo.openTime} - ${sorteo.closeTime})`);
          return sorteo.name;
        }
      }
    }

    // Si no encuentra ningún sorteo activo, determinar cuál mostrar basado en proximidad
    console.log('No se encontró sorteo activo, determinando por proximidad...');
    
    // Buscar el próximo sorteo que abrirá
    const nextSorteo = this.getNextOpeningSorteo(currentTimeInMinutes);
    if (nextSorteo) {
      console.log(`Próximo sorteo: ${nextSorteo.name} abre a las ${nextSorteo.openTime}`);
      return nextSorteo.name;
    }

    // Si no hay próximo sorteo (caso muy raro), buscar el más reciente que cerró
    const recentlyClosedSorteo = this.getRecentlyClosedSorteo(currentTimeInMinutes);
    if (recentlyClosedSorteo) {
      console.log(`Sorteo recién cerrado: ${recentlyClosedSorteo.name}`);
      return recentlyClosedSorteo.name;
    }

    // Último fallback: usar mañana por defecto
    console.log('Último fallback: usando mañana por defecto');
    return 'mañana';
  }

  // Método para encontrar el sorteo que cerró más recientemente
  private getRecentlyClosedSorteo(currentTotalMinutes: number): any {
    const sorteos = this.sorteoService.getAllSorteos();
    let recentlyClosedSorteo: any = null;
    let minTimeSinceClosure = Infinity;
    
    for (const sorteo of sorteos) {
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      
      let timeSinceClosure: number;
      
      if (sorteo.name === 'noche' && closeTimeInMinutes < currentTotalMinutes) {
        // Sorteo nocturno que cerró hoy muy temprano
        timeSinceClosure = currentTotalMinutes - closeTimeInMinutes;
      } else if (closeTimeInMinutes < currentTotalMinutes) {
        // Sorteo que cerró hoy
        timeSinceClosure = currentTotalMinutes - closeTimeInMinutes;
      } else {
        // Sorteo que cerrará más tarde o mañana
        timeSinceClosure = (24 * 60) - (closeTimeInMinutes - currentTotalMinutes);
      }
      
      if (timeSinceClosure < minTimeSinceClosure && timeSinceClosure > 0) {
        minTimeSinceClosure = timeSinceClosure;
        recentlyClosedSorteo = sorteo;
      }
    }
    
    return recentlyClosedSorteo;
  }


  async setActiveTab(tab: 'mañana' | 'tarde' | 'noche'): Promise<void> {
    this.activeTab = tab;
    // Ya no necesitamos cargar números vendidos porque ya están cargados en loadAllSorteoData
    this.cdr.detectChanges();
  }

  // Método eliminado - ya no es necesario porque cargamos todo de una vez
  // private async loadNumerosVendidosForTab() - reemplazado por loadSorteoDataOptimized

  async loadSorteoData(sorteo: string): Promise<void> {
    // Este método ya no es necesario porque cargamos todo de una vez
    // Lo mantenemos por compatibilidad pero no hace nada
    return;
  }

  getSorteoTotalVendido(sorteo: string): number {
    return this.sorteoData[sorteo]?.totalVendido || 0;
  }

  getSorteoNumeroGanador(sorteo: string): number | null {
    return this.sorteoData[sorteo]?.numeroGanador || null;
  }

  getSorteoTotalPagar(sorteo: string): number {
    return this.sorteoData[sorteo]?.totalPagar || 0;
  }

  getSorteoNumerosVendidos(sorteo: string): Array<{ numero: number, total: number }> {
    const numerosVendidos = this.sorteoData[sorteo]?.numerosVendidos || {};
    return Object.keys(numerosVendidos).map(numero => ({
      numero: parseInt(numero),
      total: numerosVendidos[numero]
    })).sort((a, b) => a.numero - b.numero); // Ordenar por número ascendente (00-99)
  }

  private calculateTotalPayout(sorteo: string, numeroGanador: number, factor: number): number {
    const numerosVendidos = this.sorteoData[sorteo]?.numerosVendidos || {};
    if (numerosVendidos[numeroGanador]) {
      return numerosVendidos[numeroGanador] * factor;
    }
    return 0;
  }
}
