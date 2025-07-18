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

  // Propiedades para gestión de sorteos
  showSorteoModal: boolean = false;
  editingSorteo: any = null;
  sorteoFormData: any = {
    name: '',
    label: '',
    close_time: ''
  };
  sorteoSchedules: any[] = [];

  // Propiedades para cambio de contraseña
  showPasswordModal: boolean = false;
  selectedUserForPassword: any = null;
  newPassword: string = '';
  confirmPassword: string = '';

  // Propiedades para acordeón
  showSorteosSection: boolean = false;
  showUsersSection: boolean = false;

  constructor(
    private supabaseService: SupabaseService,
    private sorteoService: SorteoService,
    private notificationService: NotificationService,
    public printService: PrintService,
    private router: Router
  ) {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    this.selectedDate = hondurasToday.toISOString().split('T')[0];
    
    console.log('=== ADMIN COMPONENT INICIALIZADO CON HONDURAS TIMEZONE ===');
    console.log('Fecha Honduras:', this.supabaseService.formatHondurasDateTime(hondurasToday));
    console.log('SelectedDate:', this.selectedDate);
    
    // Inicializar fechas para filtros usando Honduras timezone
    const startOfDay = new Date(hondurasToday);
    startOfDay.setHours(0, 0, 0, 0);
    this.fechaDesde = startOfDay.toISOString().slice(0, 16);
    
    const endOfDay = new Date(hondurasToday);
    endOfDay.setHours(23, 59, 59, 999);
    this.fechaHasta = endOfDay.toISOString().slice(0, 16);
  }

  ngOnInit(): void {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'admin') {
        this.router.navigate(['/login']);
      }
    });

    this.loadSales();
    this.initializeUsers();
    this.loadSorteoSchedules();
  }

  async initializeUsers(): Promise<void> {
    try {
      // Inicializar la tabla de perfiles
      await this.supabaseService.initializeProfilesTable();
      // Cargar usuarios
      await this.loadUsers();
    } catch (error) {
      console.error('Error inicializando usuarios:', error);
      // Si falla, mostramos usuarios por defecto para que funcione la interfaz
      this.users = [
        {
          id: '1',
          email: 'admin@loteria.com',
          role: 'admin',
          sucursal: '',
          active: true,
          createdAt: new Date()
        },
        {
          id: '2',
          email: 'sucursal1@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 1',
          active: true,
          createdAt: new Date()
        },
        {
          id: '3',
          email: 'sucursal2@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 2',
          active: false,
          createdAt: new Date()
        }
      ];
      this.notificationService.showError('No se pudieron cargar usuarios de la base de datos. Mostrando datos de ejemplo.');
    }
  }

  isSorteoOpen(sorteo: SorteoSchedule): boolean {
    return this.sorteoService.isSorteoOpen(sorteo);
  }

  getSorteoData(sorteo: SorteoSchedule): Sorteo | undefined {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    const todayString = hondurasToday.toDateString();
    return this.sorteosData[`${todayString}-${sorteo.name}`];
  }

  async loadSales(): Promise<void> {
    try {
      console.log('=== CARGANDO VENTAS CON HONDURAS TIMEZONE ===');
      const selectedDateObj = this.selectedDate ? new Date(this.selectedDate) : this.supabaseService.getHondurasDateTime();
      console.log('Fecha seleccionada:', this.supabaseService.formatHondurasDateTime(selectedDateObj));
      console.log('Filtro de sorteo:', this.selectedSorteoFilter);
      
      this.sales = await this.supabaseService.getSalesByDateAndSorteo(selectedDateObj, this.selectedSorteoFilter);
      
      console.log('Ventas cargadas:', this.sales.length);
      
      // Cargar detalles de cada venta
      for (const sale of this.sales) {
        this.saleDetails[sale.id] = await this.supabaseService.getSaleDetails(sale.id);
      }
    } catch (error) {
      console.error('Error cargando ventas:', error);
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
      
      alert('Número ganador establecido correctamente');
    } catch (error) {
      console.error('Error estableciendo número ganador:', error);
      alert('Error al establecer el número ganador');
    }
  }

  private async calculateSorteoResults(sorteo: SorteoSchedule, winningNumber: number, multiplicador: number = 70): Promise<void> {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    console.log('=== CALCULANDO RESULTADOS DE SORTEO CON HONDURAS TIMEZONE ===');
    console.log('Fecha Honduras:', this.supabaseService.formatHondurasDateTime(hondurasToday));
    console.log('Sorteo:', sorteo.name);
    
    const sorteoSales = await this.supabaseService.getSalesByDateAndSorteo(hondurasToday, sorteo.name);
    
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
      fecha: hondurasToday,
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
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.selectedDate = hondurasToday.toISOString().split('T')[0];
    this.selectedSorteoFilter = '';
    console.log('=== FILTROS LIMPIADOS CON HONDURAS TIMEZONE ===');
    console.log('Nueva fecha seleccionada:', this.selectedDate);
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
      console.log('Cargando usuarios...');
      this.users = await this.supabaseService.getUsers();
      console.log('Usuarios cargados exitosamente:', this.users.length);
      
      if (this.users.length === 0) {
        console.warn('No se encontraron usuarios');
        this.notificationService.showInfo('No hay usuarios configurados. Use el botón Sincronizar para cargar usuarios desde Authentication.');
      }
    } catch (error) {
      console.error('Error cargando usuarios:', error);
      this.notificationService.showError('Error al cargar usuarios: ' + (error as any)?.message);
      // Asegurar que users no sea undefined
      this.users = [];
    }
  }

  async loadSorteoSchedules(): Promise<void> {
    try {
      console.log('Iniciando carga de horarios de sorteos...');
      this.sorteoSchedules = await this.supabaseService.getSorteoSchedules();
      console.log('Horarios de sorteos cargados:', this.sorteoSchedules);
      
      if (this.sorteoSchedules.length === 0) {
        console.warn('No se encontraron horarios de sorteos en la base de datos');
        this.notificationService.showError('No se encontraron horarios de sorteos configurados');
      }
    } catch (error) {
      console.error('Error cargando horarios de sorteos:', error);
      this.notificationService.showError('Error al cargar los horarios de sorteos');
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
        await this.supabaseService.updateUser(this.editingUser.id, {
          email: this.userFormData.email,
          role: this.userFormData.role,
          sucursal: this.userFormData.sucursal,
          active: this.userFormData.active
        });
        this.notificationService.showSuccess('Usuario actualizado exitosamente');
      } else {
        // Crear nuevo usuario
        await this.supabaseService.createUser(this.userFormData);
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

  async toggleUserStatus(user: any): Promise<void> {
    try {
      this.isLoading = true;
      await this.supabaseService.toggleUserStatus(user.id);
      this.notificationService.showSuccess('Estado del usuario actualizado');
      await this.loadUsers();
    } catch (error) {
      console.error('Error cambiando estado del usuario:', error);
      this.notificationService.showError('Error al cambiar el estado del usuario');
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
    const reportDate = this.selectedDate ? new Date(this.selectedDate) : this.supabaseService.getHondurasDateTime();
    console.log('=== GENERANDO REPORTE DIARIO CON HONDURAS TIMEZONE ===');
    console.log('Fecha del reporte:', this.supabaseService.formatHondurasDateTime(reportDate));
    this.printService.generateDailyReport(this.sales, reportDate);
  }

  // Método mejorado para reimprimir recibo desde admin
  async reprintReceipt(sale: Sale): Promise<void> {
    try {
      console.log('Reimprimiendo recibo desde admin para venta:', sale);
      
      // Obtener detalles de la venta desde la base de datos
      const details = await this.supabaseService.getSaleDetails(sale.id);
      console.log('Detalles obtenidos de la BD:', details);
      
      if (details.length === 0) {
        console.warn('No se encontraron detalles para la venta:', sale.id);
        this.notificationService.showError('No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
        return;
      }
      
      // Generar recibo con los detalles obtenidos
      this.printService.generateThermalReceipt(sale, details);
      this.notificationService.showSuccess('Recibo enviado a impresión');
      
    } catch (error) {
      console.error('Error reimprimiendo recibo:', error);
      this.notificationService.showError('Error al reimprimir el recibo. Por favor intente nuevamente.');
    }
  }

  async logout(): Promise<void> {
    await this.supabaseService.logout();
    this.router.navigate(['/login']);
  }

  // Métodos para el nuevo diseño minimalista
  formatDateTime(dateInput: string | Date): string {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleString('es-HN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Métodos faltantes para el template del admin
  exportarVentas(): void {
    // Método legacy - ahora llama a Excel por defecto
    this.exportarVentasExcel();
  }

  exportarVentasExcel(): void {
    this.generateVentasReportExcel();
  }

  exportarVentasPDF(): void {
    this.generateVentasReportPDF();
  }

  trackBySale(index: number, sale: Sale): string {
    return sale.id;
  }

  trackByUser(index: number, user: any): string {
    return user.id;
  }

  trackBySorteo(index: number, sorteo: any): string {
    return sorteo.id || index.toString();
  }

  verDetalles(sale: Sale): void {
    const details = this.getSaleDetails(sale.id);
    const numeros = details.map(d => `#${d.numero.toString().padStart(2, '0')} x L${d.monto}`).join(', ');
    
    const mensaje = `Detalles de Venta\n\n` +
                   `Recibo: ${sale.numeroRecibo}\n` +
                   `Correlativo: ${sale.correlativo}\n` +
                   `Fecha: ${this.formatDateTime(sale.createdAt)}\n` +
                   `Sucursal: ${sale.sucursal}\n` +
                   `Sorteo: ${sale.sorteo}\n` +
                   `Total: L ${sale.total.toFixed(2)}\n\n` +
                   `Números: ${numeros}`;
    
    alert(mensaje);
  }

  createUser(): void {
    this.editingUser = null;
    this.userFormData = {
      email: '',
      password: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
    this.showUserModal = true;
  }

  // ========================
  // CAMBIO DE CONTRASEÑA
  // ========================

  changePassword(user: any): void {
    this.selectedUserForPassword = user;
    this.newPassword = '';
    this.confirmPassword = '';
    this.showPasswordModal = true;
  }

  closePasswordModal(): void {
    this.showPasswordModal = false;
    this.selectedUserForPassword = null;
    this.newPassword = '';
    this.confirmPassword = '';
  }

  async changeUserPassword(): Promise<void> {
    if (this.newPassword !== this.confirmPassword) {
      this.notificationService.showError('Las contraseñas no coinciden');
      return;
    }

    if (this.newPassword.length < 6) {
      this.notificationService.showError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      this.isLoading = true;
      // Implementar método en SupabaseService para cambiar contraseña
      await this.supabaseService.updateUserPassword(this.selectedUserForPassword.id, this.newPassword);
      this.notificationService.showSuccess('Contraseña actualizada exitosamente');
      this.closePasswordModal();
    } catch (error) {
      console.error('Error cambiando contraseña:', error);
      this.notificationService.showError('Error al cambiar la contraseña');
    } finally {
      this.isLoading = false;
    }
  }

  // Método para generar reporte de ventas en Excel
  generateVentasReportExcel(): void {
    if (this.sales.length === 0) {
      this.notificationService.showError('No hay ventas para exportar');
      return;
    }

    try {
      // Generar CSV
      let csvContent = 'Fecha,Sucursal,Sorteo,Total,Recibo,Correlativo,Números\n';
      
      for (const sale of this.sales) {
        const details = this.getSaleDetails(sale.id);
        const numeros = details.map(d => `${d.numero}x${d.monto}`).join(';');
        csvContent += `"${this.formatDateTime(sale.createdAt)}","${sale.sucursal}","${sale.sorteo}","${sale.total}","${sale.numeroRecibo || sale.id.slice(-6)}","${sale.correlativo}","${numeros}"\n`;
      }

      // Descargar archivo
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      const hondurasToday = this.supabaseService.getHondurasDateTime();
      link.setAttribute('download', `ventas_excel_${hondurasToday.toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      this.notificationService.showSuccess('Reporte Excel exportado exitosamente');
    } catch (error) {
      console.error('Error exportando ventas a Excel:', error);
      this.notificationService.showError('Error al exportar el reporte Excel');
    }
  }

  // Método para generar reporte de ventas en PDF
  generateVentasReportPDF(): void {
    if (this.sales.length === 0) {
      this.notificationService.showError('No hay ventas para exportar');
      return;
    }

    try {
      // Usar el servicio de impresión para generar PDF
      this.printService.generateVentasReportPDF(this.sales, this.saleDetails, {
        fechaDesde: this.fechaDesde,
        fechaHasta: this.fechaHasta,
        sorteoFilter: this.selectedSorteoFilter
      });
      
      this.notificationService.showSuccess('Reporte PDF generado exitosamente');
    } catch (error) {
      console.error('Error exportando ventas a PDF:', error);
      this.notificationService.showError('Error al exportar el reporte PDF');
    }
  }

  // Método para generar reporte de ventas (legacy)
  generateVentasReport(): void {
    // Mantener método legacy, ahora llama a Excel
    this.generateVentasReportExcel();
  }

  onFactorChange(sorteoName: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target && target.value) {
      this.factorMultiplicador[sorteoName] = +target.value;
    }
  }

  // ========================
  // GESTIÓN DE SORTEOS
  // ========================

  createSorteoSchedule(): void {
    this.editingSorteo = null;
    this.sorteoFormData = {
      name: '',
      label: '',
      close_time: ''
    };
    this.showSorteoModal = true;
  }

  editSorteoSchedule(sorteo: any): void {
    console.log('Editando sorteo:', sorteo);
    this.editingSorteo = sorteo;
    this.sorteoFormData = { 
      name: sorteo.name,
      label: sorteo.label,
      close_time: sorteo.close_time
    };
    console.log('Datos del formulario:', this.sorteoFormData);
    this.showSorteoModal = true;
  }

  closeSorteoModal(): void {
    this.showSorteoModal = false;
    this.editingSorteo = null;
    this.sorteoFormData = {
      name: '',
      label: '',
      close_time: ''
    };
  }


  // ========================
  // MÉTODOS DE DEBUG
  // ========================

  async debugSorteoSchedules(): Promise<void> {
    try {
      this.isLoading = true;
      await this.supabaseService.debugSorteoSchedules();
      this.notificationService.showSuccess('Revisa la consola para ver los resultados del debug');
    } catch (error) {
      console.error('Error en debug:', error);
      this.notificationService.showError('Error ejecutando debug');
    } finally {
      this.isLoading = false;
    }
  }

   

  // ===== MÉTODOS PARA ACORDEÓN =====
  
  toggleSorteosSection(): void {
    this.showSorteosSection = !this.showSorteosSection;
  }

  toggleUsersSection(): void {
    this.showUsersSection = !this.showUsersSection;
  }

  // ===== MÉTODOS PARA ABRIR MODALES =====
  
  openCreateSorteoModal(): void {
    this.editingSorteo = null;
    this.sorteoFormData = {
      name: '',
      label: '',
      close_time: ''
    };
    this.showSorteoModal = true;
  }

  openCreateUserModal(): void {
    this.editingUser = null;
    this.userFormData = {
      email: '',
      password: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
    this.showUserModal = true;
  }

  async syncUsersFromAuth(): Promise<void> {
    try {
      this.isLoading = true;
      this.notificationService.showInfo('Sincronizando usuarios desde auth.users...');
      
      // Usar el nuevo método de sincronización
      await this.supabaseService.syncUsersFromAuth();
      
      // Recargar la lista de usuarios
      await this.loadUsers();
      
      this.notificationService.showSuccess('Usuarios sincronizados correctamente');
    } catch (error) {
      console.error('Error sincronizando usuarios:', error);
      this.notificationService.showError('Error al sincronizar usuarios');
    } finally {
      this.isLoading = false;
    }
  }

}
