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

  // Manejo de suscripciones y timers
  private userSubscription?: Subscription;
  private sorteoUpdateInterval?: any;
  private timeCheckInterval?: any;
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
    console.log('[SUCURSAL] ngOnInit iniciado');
    
    this.userSubscription = this.supabaseService.currentUser$.subscribe(user => {
      console.log('[SUCURSAL] Usuario actualizado:', user);
      this.currentUser = user;
      if (!user || user.role !== 'sucursal') {
        this.router.navigate(['/login']);
      }
    });

    this.initializeComponent();
    this.checkTimeRestrictions();
    
    // Verificar bloqueo cada minuto - usar método que se puede limpiar
    this.timeCheckInterval = setInterval(() => {
      this.checkTimeRestrictions();
    }, 60000);
    
    console.log('[SUCURSAL] ngOnInit completado');
  }

  ngOnDestroy(): void {
    console.log('[SUCURSAL] ngOnDestroy iniciado - limpiando recursos');
    
    // Limpiar suscripciones y timers
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      console.log('[SUCURSAL] Suscripción de usuario limpiada');
    }
    if (this.sorteoUpdateInterval) {
      clearInterval(this.sorteoUpdateInterval);
      console.log('[SUCURSAL] Interval de sorteo limpiado');
    }
    if (this.timeCheckInterval) {
      clearInterval(this.timeCheckInterval);
      console.log('[SUCURSAL] Interval de tiempo limpiado');
    }
    
    console.log('[SUCURSAL] ngOnDestroy completado');
  }

  private async initializeComponent(): Promise<void> {
    try {
      this.isLoading = true;
      this.notificationService.showLoading('Cargando datos...');

      await this.updateSorteoInfo();
      await this.loadTodaySales();
      await this.loadRecentSales();
      this.setFilterDate();
      
      // Limpiar timer anterior si existe
      if (this.sorteoUpdateInterval) {
        clearInterval(this.sorteoUpdateInterval);
      }
      
      // Actualizar cada minuto - usar método que se puede limpiar
      this.sorteoUpdateInterval = setInterval(() => {
        this.updateSorteoInfo();
      }, 60000);
    } catch (error) {
      console.error('Error inicializando componente:', error);
      this.notificationService.showError('Error al cargar los datos');
    } finally {
      this.isLoading = false;
      this.notificationService.hideLoading();
    }
  }

  setFilterDate(): void {
    const today = new Date();
    this.filterDate = today.toISOString().split('T')[0];
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

  updateSorteoInfo(): void {
    try {
      this.currentSorteo = this.sorteoService.getCurrentSorteo();
      
      if (this.currentSorteo) {
        this.isSorteoOpen = this.sorteoService.isSorteoOpen(this.currentSorteo);
        this.timeUntilClose = this.sorteoService.getTimeUntilClose(this.currentSorteo);
      }
    } catch (error) {
      console.error('Error actualizando info del sorteo:', error);
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
    console.log('Eliminando número en índice:', index);
    console.log('Array antes:', [...this.selectedNumbers]);
    
    this.selectedNumbers.splice(index, 1);
    
    console.log('Array después:', [...this.selectedNumbers]);
    this.cdr.detectChanges(); // Forzar actualización visual inmediata
  }

  // Generar número de recibo único con correlativo
  generateReceiptNumber(correlativo: number, sucursal: string): string {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // Últimos 2 dígitos del año
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    
    // Formato: SUC001-REC-250717-0001
    const sucursalCode = sucursal.replace(/\s+/g, '').toUpperCase().substring(0, 3);
    const correlativoFormatted = correlativo.toString().padStart(4, '0');
    const numeroRecibo = `${sucursalCode}-REC-${year}${month}${day}-${correlativoFormatted}`;
    
    console.log('Número de recibo generado:', numeroRecibo);
    return numeroRecibo;
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
      console.error('Usuario sin sucursal:', this.currentUser);
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
      console.log('=== INICIANDO CÁLCULO DE CORRELATIVO ===');
      console.log('Sucursal:', this.currentUser.sucursal);
      
      const correlativo = await this.supabaseService.getNextCorrelativo(this.currentUser.sucursal);
      console.log('Correlativo obtenido del servicio:', correlativo);
      
      // Generar número de recibo con correlativo
      const numeroRecibo = this.generateReceiptNumber(correlativo, this.currentUser.sucursal);
      console.log('Número de recibo generado:', numeroRecibo);
      
      const sale: any = {
        userId: this.currentUser.id,
        sucursal: this.currentUser.sucursal,
        sorteo: this.currentSorteo.name,
        fecha: new Date(),
        total: this.getTotal(),
        numeroRecibo: numeroRecibo,
        correlativo: correlativo
      };

      console.log('=== OBJETO SALE COMPLETO ===');
      console.log('Sale object:', JSON.stringify(sale, null, 2));
      console.log('Correlativo en sale:', sale.correlativo);

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
      console.log('Imprimiendo recibo para venta:', saleWithId);
      console.log('Detalles para imprimir:', saleDetails);
      
      // Asegurar que los detalles tengan datos
      if (saleDetails.length === 0) {
        console.warn('No hay detalles de venta, usando selectedNumbers como fallback');
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
        
        console.log('Selección limpiada, selectedNumbers:', this.selectedNumbers);
        console.log('Estado de modales reseteado');
        
        // Recargar ventas actuales para mostrar la venta recién realizada
        console.log('Recargando ventas después de la venta...');
        await this.loadTodaySales();
        await this.loadRecentSales();
        
        console.log('Ventas recargadas después de la venta');
        console.log('recentSales:', this.recentSales.length);
        console.log('todaySales:', this.todaySales.length);
        
        this.cdr.detectChanges(); // Forzar actualización después de cargar ventas
      }, 100); // Pequeño retraso para evitar conflictos con la ventana de impresión
      
      this.notificationService.showSuccess('Venta procesada e impresa exitosamente');
    } catch (error) {
      console.error('Error procesando venta:', error);
      this.notificationService.showError('Error al procesar la venta');
    } finally {
      this.isLoading = false;
      this.notificationService.hideLoading();
    }
  }

  async loadTodaySales(): Promise<void> {
    if (!this.currentUser) return;

    try {
      const today = new Date();
      const allSales = await this.supabaseService.getSalesByDateAndSorteo(today, '');
      
      this.todaySales = allSales.filter(sale => sale.sucursal === this.currentUser.sucursal);
      
      // Cargar detalles de cada venta con timeout individual
      for (const sale of this.todaySales) {
        try {
          const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Timeout cargando detalles')), 3000);
          });
          
          const detailsPromise = this.supabaseService.getSaleDetails(sale.id);
          
          this.saleDetails[sale.id] = await Promise.race([detailsPromise, timeoutPromise]) as SaleDetail[];
        } catch (error) {
          console.warn(`Error cargando detalles de venta ${sale.id}:`, error);
          this.saleDetails[sale.id] = [];
        }
      }

      this.filterSales();
    } catch (error) {
      console.error('Error cargando ventas:', error);
      this.notificationService.showError('Error al cargar las ventas');
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
        console.error('Error cerrando sesión:', error);
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
    console.log('[MODAL] Intentando abrir modal de número');
    console.log('[MODAL] Estado actual - isProcessingModal:', this.isProcessingModal, 'isBlocked:', this.isBlocked);
    
    if (this.isProcessingModal || this.isBlocked) {
      console.log('[MODAL] Cancelando apertura - procesando o bloqueado');
      if (this.isBlocked) {
        this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      }
      return;
    }
    
    this.isProcessingModal = true;
    console.log('[MODAL] Marcando como procesando');
    
    // Reiniciar estado de modales
    this.closeAllModals();
    
    // Eliminamos el setTimeout para evitar parpadeo
    this.showNumberModal = true;
    this.modalNumberInput = '';
    this.cdr.detectChanges();
    this.isProcessingModal = false;
    console.log('[MODAL] Modal abierto, estado final:', this.showNumberModal);
  }

  closeAllModals(): void {
    console.log('[MODAL] Cerrando todos los modales');
    this.showNumberModal = false;
    this.showAmountModal = false;
    this.showConfirmModal = false;
    this.modalNumberInput = '';
    this.modalAmountInput = '';
    this.tempNumber = null;
    this.tempAmount = null;
    this.isProcessingModal = false;
    this.cdr.detectChanges(); // Forzar detección de cambios
    console.log('[MODAL] Todos los modales cerrados');
  }

  // Modal 1: Selección de número
  pressModalNumber(num: number): void {
    console.log('Presionando número:', num);
    if (this.modalNumberInput.length < 2) {
      this.modalNumberInput += num.toString();
      this.cdr.detectChanges(); // Forzar actualización de la UI
      console.log('Input actual:', this.modalNumberInput);
    }
  }

  clearModalNumber(): void {
    console.log('Limpiando número');
    this.modalNumberInput = '';
    this.cdr.detectChanges(); // Forzar actualización inmediata
    console.log('Número limpiado, input actual:', this.modalNumberInput);
  }

  acceptModalNumber(): void {
    console.log('Aceptando número:', this.modalNumberInput);
    
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
      this.isProcessingModal = false;
      this.cdr.detectChanges();
      console.log('Modal de apuesta abierto, número seleccionado:', numero);
      
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
    }
  }

  // Modal 2: Selección de apuesta
  pressModalAmount(num: number): void {
    console.log('Presionando cantidad:', num);
    if (this.modalAmountInput.length < 4) { // Máximo 4 dígitos para el monto
      this.modalAmountInput += num.toString();
      this.cdr.detectChanges(); // Forzar actualización de la UI
      console.log('Monto actual:', this.modalAmountInput);
    }
  }

  clearModalAmount(): void {
    console.log('Limpiando monto');
    this.modalAmountInput = '';
    this.cdr.detectChanges(); // Forzar actualización inmediata
    console.log('Monto limpiado, input actual:', this.modalAmountInput);
  }

  acceptModalAmount(): void {
    console.log('Aceptando monto:', this.modalAmountInput);
    
    if (!this.modalAmountInput || this.isProcessingModal) {
      if (!this.modalAmountInput) {
        this.notificationService.showError('Monto requerido', 'Debe ingresar un monto');
      }
      return;
    }

    this.isProcessingModal = true;

    const monto = parseFloat(this.modalAmountInput);
    if (monto > 0 && monto <= 1000) { // Límite de apuesta
      this.tempAmount = monto;
      
      // Transición suave sin setTimeout
      this.showAmountModal = false;
      this.showConfirmModal = true;
      this.isProcessingModal = false;
      this.cdr.detectChanges();
      console.log('Pasando a confirmación, monto:', monto);
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Monto inválido', 'El monto debe estar entre 1 y 1000');
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
  checkTimeRestrictions() {
    if (!this.currentSorteo) return;

    const now = new Date();
    const [hours, minutes] = this.currentSorteo.closeTime.split(':');
    const closeTime = new Date();
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const timeDiff = closeTime.getTime() - now.getTime();
    const minutesLeft = Math.floor(timeDiff / (1000 * 60));

    if (minutesLeft <= 5 && minutesLeft >= 0) {
      this.isBlocked = true;
      if (minutesLeft <= 0) {
        this.notificationService.showWarning('Sorteo cerrado', 'El sorteo ya ha comenzado. No se pueden realizar más ventas.');
      } else {
        this.notificationService.showWarning('Ventas bloqueadas', `Faltan ${minutesLeft} minutos para el sorteo. Ventas bloqueadas.`);
      }
    } else {
      this.isBlocked = false;
    }
  }

  // Filtrar ventas solo del sorteo actual
  getFilteredSales(): Sale[] {
    if (!this.recentSales || !this.currentSorteo) return [];
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return this.recentSales.filter((sale: Sale) => {
      const saleDate = new Date(sale.createdAt);
      saleDate.setHours(0, 0, 0, 0);
      // Filtrar por día actual Y sorteo actual
      return saleDate.getTime() === today.getTime() && sale.sorteo === this.currentSorteo?.name;
    });
  }

  // Obtener fecha de hoy formateada
  getTodayDate(): string {
    return new Date().toLocaleDateString('es-HN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Formatear hora
  formatTime(date: string | Date): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleTimeString('es-HN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  // Método para cargar ventas recientes (inicializar recentSales)
  async loadRecentSales(): Promise<void> {
    try {
      // Asegurar que las ventas del día estén cargadas
      if (!this.todaySales || this.todaySales.length === 0) {
        await this.loadTodaySales();
      }
      
      // Asignar las ventas del día como ventas recientes
      this.recentSales = [...this.todaySales];
      
      console.log('Ventas recientes actualizadas:', this.recentSales.length);
    } catch (error) {
      console.error('Error cargando ventas recientes:', error);
      this.recentSales = [];
    }
  }

  // Método mejorado para reimprimir recibo
  async reprintReceipt(sale: Sale): Promise<void> {
    try {
      console.log('Reimprimiendo recibo para venta:', sale);
      
      this.notificationService.showLoading('Reimprimiendo recibo...');
      
      // Obtener detalles de la venta desde la base de datos
      const details = await this.supabaseService.getSaleDetails(sale.id);
      console.log('Detalles obtenidos de la BD:', details);
      
      if (details.length === 0) {
        console.warn('No se encontraron detalles para la venta:', sale.id);
        this.notificationService.showError('Sin detalles', 'No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
        return;
      }
      
      // Generar recibo con los detalles obtenidos
      this.printService.generateThermalReceipt(sale, details);
      
      this.notificationService.showSuccess('Recibo reimpreso', `Recibo #${sale.numeroRecibo || sale.id} enviado a impresora`);
      
    } catch (error) {
      console.error('Error reimprimiendo recibo:', error);
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
    console.log('=== DEBUG MODAL STATE ===');
    console.log('showNumberModal:', this.showNumberModal);
    console.log('showAmountModal:', this.showAmountModal);
    console.log('showConfirmModal:', this.showConfirmModal);
    console.log('isProcessingModal:', this.isProcessingModal);
    console.log('isBlocked:', this.isBlocked);
    console.log('isLoading:', this.isLoading);
    console.log('modalNumberInput:', this.modalNumberInput);
    console.log('modalAmountInput:', this.modalAmountInput);
    console.log('tempNumber:', this.tempNumber);
    console.log('tempAmount:', this.tempAmount);
    console.log('currentUser:', this.currentUser);
    console.log('========================');
    
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
    console.log('[SUCURSAL] Bloqueo manual:', this.isBlocked);
  }

  // Método de debug temporal para verificar conexión con BD
  async debugSalesData(): Promise<void> {
    console.log('=== INICIANDO DEBUG DESDE SUCURSAL ===');
    console.log('Usuario actual:', this.currentUser);
    
    try {
      // Verificar permisos primero
      console.log('=== VERIFICANDO PERMISOS ===');
      await this.supabaseService.checkDatabasePermissions();
      
      // Llamar al método de debug del servicio
      console.log('=== DEBUG GENERAL DE DATOS ===');
      await this.supabaseService.debugSalesData();
      
      // Intentar cargar ventas de hoy directamente
      console.log('=== PROBANDO loadTodaySales ===');
      await this.loadTodaySales();
      console.log('Ventas del día cargadas:', this.todaySales.length);
      console.log('Detalles de ventas cargados:', Object.keys(this.saleDetails).length);
      
      // Probar con fechas diferentes
      console.log('=== PROBANDO FECHAS ESPECÍFICAS ===');
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      const yesterdaySales = await this.supabaseService.getSalesByDateAndSorteo(yesterday, '');
      console.log('Ventas de ayer:', yesterdaySales.length);
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const tomorrowSales = await this.supabaseService.getSalesByDateAndSorteo(tomorrow, '');
      console.log('Ventas de mañana:', tomorrowSales.length);
      
      // Verificar estado de ventas recientes
      console.log('=== ESTADO DE VENTAS RECIENTES ===');
      console.log('recentSales length:', this.recentSales.length);
      console.log('todaySales length:', this.todaySales.length);
      
      // Probar refresh forzado
      console.log('=== PROBANDO REFRESH FORZADO ===');
      await this.loadRecentSales();
      console.log('Después del refresh - recentSales:', this.recentSales.length);
      
    } catch (error) {
      console.error('Error en debug de sucursal:', error);
    }
  }
}
