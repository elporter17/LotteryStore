import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { SorteoService } from '../../services/sorteo.service';
import { NotificationService } from '../../services/notification.service';
import { PrintService } from '../../services/print.service';
import { Router } from '@angular/router';
import { SorteoSchedule, Sale, SaleDetail } from '../../models/interfaces';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss']
})
export class SucursalComponent implements OnInit {
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

  constructor(
    private supabaseService: SupabaseService,
    private sorteoService: SorteoService,
    private notificationService: NotificationService,
    public printService: PrintService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'sucursal') {
        this.router.navigate(['/login']);
      }
    });

    this.initializeComponent();
    this.checkTimeRestrictions();
    
    // Verificar bloqueo cada minuto
    setInterval(() => {
      this.checkTimeRestrictions();
    }, 60000);
  }

  private async initializeComponent(): Promise<void> {
    try {
      this.isLoading = true;
      this.notificationService.showLoading('Cargando datos...');

      await this.updateSorteoInfo();
      await this.loadTodaySales();
      await this.loadRecentSales();
      this.setFilterDate();
      
      // Actualizar cada minuto
      setInterval(() => {
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
    this.selectedNumbers.splice(index, 1);
  }

  async confirmRemoveNumber(index: number): Promise<void> {
    const confirmed = await this.notificationService.showConfirmation(
      '¿Eliminar número?',
      'Esta acción no se puede deshacer.'
    );

    if (confirmed) {
      this.removeNumber(index);
    }
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
      const sale: any = {
        userId: this.currentUser.id,
        sucursal: this.currentUser.sucursal,
        sorteo: this.currentSorteo.name,
        fecha: new Date(),
        total: this.getTotal()
      };

      console.log('Procesando venta:', sale);

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

      // Limpiar selección
      this.selectedNumbers = [];
      
      // Recargar ventas
      await this.loadTodaySales();
      
      this.notificationService.showSuccess('Venta procesada exitosamente');
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
    console.log('Abriendo modal de número');
    if (this.isBlocked) {
      this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      return;
    }
    this.showNumberModal = true;
    this.modalNumberInput = '';
    console.log('Modal abierto:', this.showNumberModal);
  }

  closeAllModals(): void {
    console.log('Cerrando todos los modales');
    this.showNumberModal = false;
    this.showAmountModal = false;
    this.showConfirmModal = false;
    this.modalNumberInput = '';
    this.modalAmountInput = '';
    this.tempNumber = null;
    this.tempAmount = null;
  }

  // Modal 1: Selección de número
  pressModalNumber(num: number): void {
    console.log('Presionando número:', num);
    if (this.modalNumberInput.length < 2) {
      this.modalNumberInput += num.toString();
      console.log('Input actual:', this.modalNumberInput);
    }
  }

  clearModalNumber(): void {
    console.log('Limpiando número');
    this.modalNumberInput = '';
    // Forzar detección de cambios
    setTimeout(() => {
      console.log('Número limpiado, input actual:', this.modalNumberInput);
    }, 0);
  }

  acceptModalNumber(): void {
    console.log('Aceptando número:', this.modalNumberInput);
    
    // Evitar múltiples ejecuciones
    if (!this.modalNumberInput || this.showAmountModal) {
      if (!this.modalNumberInput) {
        this.notificationService.showError('Número requerido', 'Debe ingresar un número');
      }
      return;
    }

    // Formatear el número con ceros a la izquierda si es necesario
    let formattedNumber = this.modalNumberInput.padStart(2, '0');
    const numero = parseInt(formattedNumber);
    
    if (numero >= 0 && numero <= 99) {
      this.tempNumber = numero;
      
      // Cerrar modal actual y abrir siguiente
      this.showNumberModal = false;
      
      // Usar setTimeout para asegurar que el cambio se aplique
      setTimeout(() => {
        this.showAmountModal = true;
        this.modalAmountInput = '';
        console.log('Modal de apuesta abierto, número seleccionado:', numero);
      }, 100);
      
    } else {
      this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
    }
  }

  // Modal 2: Selección de apuesta
  pressModalAmount(num: number): void {
    console.log('Presionando cantidad:', num);
    if (this.modalAmountInput.length < 4) { // Máximo 4 dígitos para el monto
      this.modalAmountInput += num.toString();
      console.log('Monto actual:', this.modalAmountInput);
    }
  }

  clearModalAmount(): void {
    console.log('Limpiando monto');
    this.modalAmountInput = '';
    // Forzar detección de cambios
    setTimeout(() => {
      console.log('Monto limpiado, input actual:', this.modalAmountInput);
    }, 0);
  }

  acceptModalAmount(): void {
    console.log('Aceptando monto:', this.modalAmountInput);
    if (!this.modalAmountInput) {
      this.notificationService.showError('Monto requerido', 'Debe ingresar un monto');
      return;
    }

    const monto = parseFloat(this.modalAmountInput);
    if (monto > 0 && monto <= 1000) { // Límite de apuesta
      this.tempAmount = monto;
      this.showAmountModal = false;
      this.showConfirmModal = true;
      console.log('Pasando a confirmación, monto:', monto);
    } else {
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
      
      this.notificationService.showSuccess('Número agregado', `Número ${this.tempNumber.toString().padStart(2, '0')} agregado con apuesta de L. ${this.tempAmount}`);
      this.closeAllModals();
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

  // Filtrar ventas solo del día actual
  getFilteredSales(): Sale[] {
    if (!this.recentSales) return [];
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return this.recentSales.filter((sale: Sale) => {
      const saleDate = new Date(sale.createdAt);
      saleDate.setHours(0, 0, 0, 0);
      return saleDate.getTime() === today.getTime();
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
      // Este método debe cargar las ventas del día actual
      this.recentSales = this.todaySales;
    } catch (error) {
      console.error('Error cargando ventas recientes:', error);
      this.recentSales = [];
    }
  }

  // Método mejorado para reimprimir recibo
  async reprintReceipt(sale: Sale): Promise<void> {
    try {
      console.log('Reimprimiendo recibo para venta:', sale);
      
      // Obtener detalles de la venta desde la base de datos
      const details = await this.supabaseService.getSaleDetails(sale.id);
      console.log('Detalles obtenidos de la BD:', details);
      
      if (details.length === 0) {
        console.warn('No se encontraron detalles para la venta:', sale.id);
        // Mostrar un mensaje al usuario
        alert('No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
        return;
      }
      
      // Generar recibo con los detalles obtenidos
      this.printService.generateThermalReceipt(sale, details);
      
    } catch (error) {
      console.error('Error reimprimiendo recibo:', error);
      alert('Error al reimprimir el recibo. Por favor intente nuevamente.');
    }
  }
}
