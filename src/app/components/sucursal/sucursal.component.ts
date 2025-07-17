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
  
  todaySales: Sale[] = [];
  saleDetails: { [saleId: string]: SaleDetail[] } = {};
  filteredSales: Sale[] = [];
  filterDate: string = '';
  isLoading: boolean = false;

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
  }

  private async initializeComponent(): Promise<void> {
    try {
      this.isLoading = true;
      this.notificationService.showLoading('Cargando datos...');

      await this.updateSorteoInfo();
      await this.loadTodaySales();
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
    if (this.selectedNumber && this.selectedAmount && 
        this.selectedNumber >= 1 && this.selectedNumber <= 99) {
      
      // Verificar si el número ya fue seleccionado
      const existingIndex = this.selectedNumbers.findIndex(n => n.numero === this.selectedNumber);
      if (existingIndex >= 0) {
        // Actualizar monto
        this.selectedNumbers[existingIndex].monto += this.selectedAmount!;
      } else {
        // Agregar nuevo número
        this.selectedNumbers.push({
          numero: this.selectedNumber,
          monto: this.selectedAmount
        });
      }
      
      this.selectedNumber = null;
      this.selectedAmount = null;
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
}
