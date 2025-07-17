import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { SorteoService } from '../../services/sorteo.service';
import { NotificationService } from '../../services/notification.service';
import { PrintService } from '../../services/print.service';
import { Router } from '@angular/router';
import { SorteoSchedule, Sale, SaleDetail, Sorteo } from '../../models/interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentUser: any = null;
  sorteos = this.sorteoService.getAllSorteos();
  sales: Sale[] = [];
  saleDetails: { [saleId: string]: SaleDetail[] } = {};
  sorteosData: { [key: string]: Sorteo } = {};
  winningNumbers: { [key: string]: number } = {};
  factorMultiplicador: { [key: string]: number } = {};
  selectedSorteoFilter: string = '';
  isLoading: boolean = false;
  selectedDate: string = '';

  // Nuevas propiedades para las mejoras
  fechaDesde: string = '';
  fechaHasta: string = '';
  users: any[] = [];
  showUserModal: boolean = false;
  editingUser: any = null;
  userFormData: any = {
    email: '',
    password: '',
    role: 'sucursal',
    sucursal: '',
    active: true
  };

  constructor(
    private supabaseService: SupabaseService,
    private sorteoService: SorteoService,
    private notificationService: NotificationService,
    public printService: PrintService,
    private router: Router
  ) {
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'admin') {
        this.router.navigate(['/login']);
      }
    });

    this.loadSales();
    this.loadSorteosData();
    this.loadUsers();
  }

  isSorteoOpen(sorteo: SorteoSchedule): boolean {
    return this.sorteoService.isSorteoOpen(sorteo);
  }

  getSorteoData(sorteo: SorteoSchedule): Sorteo | undefined {
    const today = new Date().toDateString();
    return this.sorteosData[`${today}-${sorteo.name}`];
  }

  async loadSales(): Promise<void> {
    try {
      const selectedDateObj = this.selectedDate ? new Date(this.selectedDate) : new Date();
      this.sales = await this.supabaseService.getSalesByDateAndSorteo(selectedDateObj, this.selectedSorteoFilter);
      
      // Cargar detalles de cada venta
      for (const sale of this.sales) {
        this.saleDetails[sale.id] = await this.supabaseService.getSaleDetails(sale.id);
      }
    } catch (error) {
      console.error('Error cargando ventas:', error);
    }
  }

  async loadSorteosData(): Promise<void> {
    try {
      const today = new Date();
      for (const sorteo of this.sorteos) {
        const sorteoData = await this.supabaseService.getSorteo(today, sorteo.name);
        if (sorteoData) {
          this.sorteosData[sorteoData.id] = sorteoData;
        }
      }
    } catch (error) {
      console.error('Error cargando datos de sorteos:', error);
    }
  }

  getSaleDetails(saleId: string): SaleDetail[] {
    return this.saleDetails[saleId] || [];
  }

  async setWinningNumber(sorteo: SorteoSchedule): Promise<void> {
    const winningNumber = this.winningNumbers[sorteo.name];
    const multiplicador = this.factorMultiplicador[sorteo.name] || 70;
    
    if (!winningNumber) {
      alert('Por favor ingrese un número ganador');
      return;
    }

    try {
      const today = new Date();
      const sorteoId = `${today.toDateString()}-${sorteo.name}`;
      
      await this.supabaseService.updateSorteoWinner(sorteoId, winningNumber, multiplicador);
      
      // Recalcular totales
      await this.calculateSorteoResults(sorteo, winningNumber, multiplicador);
      
      // Recargar datos
      await this.loadSorteosData();
      
      alert('Número ganador establecido correctamente');
    } catch (error) {
      console.error('Error estableciendo número ganador:', error);
      alert('Error al establecer el número ganador');
    }
  }

  private async calculateSorteoResults(sorteo: SorteoSchedule, winningNumber: number, multiplicador: number = 70): Promise<void> {
    const today = new Date();
    const sorteoSales = await this.supabaseService.getSalesByDateAndSorteo(today, sorteo.name);
    
    let totalVendido = 0;
    let totalPagado = 0;
    
    for (const sale of sorteoSales) {
      totalVendido += sale.total;
      
      const details = await this.supabaseService.getSaleDetails(sale.id);
      for (const detail of details) {
        if (detail.numero === winningNumber) {
          totalPagado += detail.monto * multiplicador;
        }
      }
    }
    
    const gananciaNeta = totalVendido - totalPagado;
    
    // Actualizar o crear sorteo
    const [hours, minutes] = sorteo.closeTime.split(':');
    const horaCierre = new Date();
    horaCierre.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    await this.supabaseService.createOrUpdateSorteo({
      fecha: today,
      sorteo: sorteo.name,
      horaCierre,
      numeroGanador: winningNumber,
      factorMultiplicador: multiplicador,
      totalVendido,
      totalPagado,
      gananciaNeta,
      cerrado: true
    });
  }

  getTotalSales(): number {
    return this.sales.reduce((total, sale) => total + sale.total, 0);
  }

  getSucursalSummary(): { name: string, total: number, count: number }[] {
    const summary: { [key: string]: { total: number, count: number } } = {};
    
    for (const sale of this.sales) {
      if (!summary[sale.sucursal]) {
        summary[sale.sucursal] = { total: 0, count: 0 };
      }
      summary[sale.sucursal].total += sale.total;
      summary[sale.sucursal].count += 1;
    }
    
    return Object.entries(summary).map(([name, data]) => ({ 
      name, 
      total: data.total, 
      count: data.count 
    }));
  }

  // Métodos para cards de resumen
  getTotalVendido(): number {
    return this.sales.reduce((total, sale) => total + sale.total, 0);
  }

  getTotalPagado(): number {
    return Object.values(this.sorteosData).reduce((total, sorteo) => total + (sorteo.totalPagado || 0), 0);
  }

  getGananciaNeta(): number {
    return this.getTotalVendido() - this.getTotalPagado();
  }

  getTotalVentas(): number {
    return this.sales.length;
  }

  // Métodos para filtros de fecha
  aplicarFiltros(): void {
    if (this.fechaDesde && this.fechaHasta) {
      this.loadSalesByDateRange();
    } else if (this.fechaDesde) {
      this.selectedDate = this.fechaDesde;
      this.loadSales();
    } else {
      this.loadSales();
    }
  }

  limpiarFiltros(): void {
    const today = new Date();
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.selectedDate = today.toISOString().split('T')[0];
    this.selectedSorteoFilter = '';
    this.loadSales();
  }

  onFiltroFechaChange(): void {
    // Auto-aplicar filtros cuando cambian las fechas
    this.aplicarFiltros();
  }

  async loadSalesByDateRange(): Promise<void> {
    if (!this.fechaDesde || !this.fechaHasta) return;

    this.isLoading = true;
    try {
      const fechaDesdeDate = new Date(this.fechaDesde);
      const fechaHastaDate = new Date(this.fechaHasta);
      
      // Cargar ventas para cada día en el rango
      let allSales: Sale[] = [];
      let currentDate = new Date(fechaDesdeDate);
      
      while (currentDate <= fechaHastaDate) {
        const daySales = await this.supabaseService.getSalesByDateAndSorteo(currentDate, this.selectedSorteoFilter);
        allSales = [...allSales, ...daySales];
        currentDate.setDate(currentDate.getDate() + 1);
      }

      this.sales = allSales;
      
      // Cargar detalles de todas las ventas
      for (const sale of this.sales) {
        this.saleDetails[sale.id] = await this.supabaseService.getSaleDetails(sale.id);
      }
    } catch (error) {
      console.error('Error cargando ventas por rango:', error);
      this.notificationService.showError('Error al cargar las ventas');
    } finally {
      this.isLoading = false;
    }
  }

  // Gestión de usuarios
  async loadUsers(): Promise<void> {
    try {
      // Implementar método en SupabaseService para cargar usuarios
      // this.users = await this.supabaseService.getUsers();
      console.log('Cargando usuarios...');
    } catch (error) {
      console.error('Error cargando usuarios:', error);
    }
  }

  closeUserModal(): void {
    this.showUserModal = false;
    this.editingUser = null;
    this.userFormData = {
      email: '',
      password: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
  }

  editUser(user: any): void {
    this.editingUser = user;
    this.userFormData = { ...user };
    this.showUserModal = true;
  }

  async saveUser(): Promise<void> {
    try {
      this.isLoading = true;
      
      if (this.editingUser) {
        // Actualizar usuario existente
        console.log('Actualizando usuario:', this.userFormData);
        this.notificationService.showSuccess('Usuario actualizado exitosamente');
      } else {
        // Crear nuevo usuario
        console.log('Creando usuario:', this.userFormData);
        this.notificationService.showSuccess('Usuario creado exitosamente');
      }
      
      this.closeUserModal();
      await this.loadUsers();
    } catch (error) {
      console.error('Error guardando usuario:', error);
      this.notificationService.showError('Error al guardar el usuario');
    } finally {
      this.isLoading = false;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    const confirmed = await this.notificationService.showConfirmation(
      'Eliminar Usuario',
      '¿Está seguro que desea eliminar este usuario?'
    );

    if (confirmed) {
      try {
        this.isLoading = true;
        // Implementar eliminación en SupabaseService
        console.log('Eliminando usuario:', userId);
        this.notificationService.showSuccess('Usuario eliminado exitosamente');
        await this.loadUsers();
      } catch (error) {
        console.error('Error eliminando usuario:', error);
        this.notificationService.showError('Error al eliminar el usuario');
      } finally {
        this.isLoading = false;
      }
    }
  }

  onDateChange(): void {
    this.loadSales();
  }

  onSorteoFilterChange(): void {
    this.loadSales();
  }

  generateDailyReport(): void {
    const reportDate = this.selectedDate ? new Date(this.selectedDate) : new Date();
    this.printService.generateDailyReport(this.sales, reportDate);
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

  async logout(): Promise<void> {
    await this.supabaseService.logout();
    this.router.navigate(['/login']);
  }

  onFactorChange(sorteoName: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.factorMultiplicador[sorteoName] = +target.value;
    }
  }
}
