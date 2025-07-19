import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { startOfDay, endOfDay } from 'date-fns';
import { SupabaseService } from '../../services/supabase.service';
import { NotificationService } from '../../services/notification.service';
import { PrintService } from '../../services/print.service';
import { Router } from '@angular/router';
import { SorteoSchedule, Sale, SaleDetail, Sorteo, SORTEO_SCHEDULES } from '../../models/interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentUser: any = null;
  sorteos = SORTEO_SCHEDULES; // Usar directamente las interfaces en lugar de base de datos
  sales: Sale[] = [];
  saleDetails: { [saleId: string]: SaleDetail[] } = {};
  sorteosData: { [key: string]: Sorteo } = {};
  winningNumbers: { [key: string]: string } = {};
  factorMultiplicador: { [key: string]: number } = {};
  selectedSorteoFilter: string = '';
  isLoading: boolean = false;
  isLoadingFilters: boolean = false; // Loading específico para filtros
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

  // Propiedades para modal de detalles de venta
  showSaleDetailModal: boolean = false;
  selectedSaleForDetail: Sale | null = null;
  selectedSaleDetails: SaleDetail[] = [];

  // Propiedades para gestión de sorteos
  showSorteoModal: boolean = false;
  editingSorteo: any = null;
   
   sorteoSchedules: SorteoSchedule[] = [...SORTEO_SCHEDULES];

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
    private notificationService: NotificationService,
    public printService: PrintService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // Inicializar fechas usando date-fns para filtros
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    this.selectedDate = hondurasToday.toISOString().split('T')[0];
    
    
    // FORZAR CIERRE DE TODOS LOS MODALES AL INICIALIZAR
    this.showSaleDetailModal = false;
    this.showUserModal = false;
    this.showPasswordModal = false;
    
    // Recuperar filtros de localStorage o usar valores por defecto
    this.loadFilterState();
    
    // Si no hay filtros guardados, usar date-fns para inicializar
    if (!this.fechaDesde || !this.fechaHasta) {
      const fechaInicio = startOfDay(hondurasToday);
      const fechaFin = endOfDay(hondurasToday);
      
      this.fechaDesde = this.formatDateTimeLocal(fechaInicio);
      this.fechaHasta = this.formatDateTimeLocal(fechaFin);
    }
    
  }

  // Método para cargar estado de filtros desde localStorage
  private loadFilterState(): void {
    try {
      const savedFilters = localStorage.getItem('admin-filters');
      if (savedFilters) {
        const filters = JSON.parse(savedFilters);
        this.fechaDesde = filters.fechaDesde || '';
        this.fechaHasta = filters.fechaHasta || '';
        this.selectedSorteoFilter = filters.selectedSorteoFilter || '';
        this.selectedDate = filters.selectedDate || '';
      }
    } catch (error) {
    }
  }

  // Método para guardar estado de filtros en localStorage
  private saveFilterState(): void {
    try {
      const filters = {
        fechaDesde: this.fechaDesde,
        fechaHasta: this.fechaHasta,
        selectedSorteoFilter: this.selectedSorteoFilter,
        selectedDate: this.selectedDate
      };
      localStorage.setItem('admin-filters', JSON.stringify(filters));
    } catch (error) {
    }
  }

  ngOnInit(): void {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'admin') {
        this.router.navigate(['/login']);
      }
    });

    // Cargar datos iniciales
    this.loadSales();
    this.loadSorteosData(); // Cargar datos de sorteos existentes
    this.initializeUsers();
    this.loadSorteoSchedules(); // Ya no es async
  }

  async initializeUsers(): Promise<void> {
    try {
      // Inicializar la tabla de perfiles
      await this.supabaseService.initializeProfilesTable();
      // Cargar usuarios
      await this.loadUsers();
    } catch (error) {
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
    const now = this.supabaseService.getHondurasDateTime();
    const [hours, minutes] = sorteo.closeTime.split(':');
    const closeTime = new Date(now);
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    
    return now <= closeTime;
  }

  getSorteoData(sorteo: SorteoSchedule): Sorteo | undefined {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    const todayString = hondurasToday.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    const sorteoId = `${todayString}-${sorteo.name}`;
    
    
    // SOLO retornar datos reales de la BD, NO crear objetos temporales
    return this.sorteosData[sorteoId];
  }

  // Método para verificar si el sorteo está cerrado basado en datos guardados en BD
  isSorteoCerrado(sorteo: SorteoSchedule): boolean {
    const sorteoData = this.getSorteoData(sorteo);
    // Solo considerar cerrado si está marcado como cerrado en BD O si tiene numeroGanador en BD
    return !!(sorteoData?.cerrado || sorteoData?.numeroGanador);
  }

  // Método para verificar si hay un número ganador guardado (no temporal)
  hasSavedWinner(sorteo: SorteoSchedule): boolean {
    const sorteoData = this.getSorteoData(sorteo);
    // Solo considerar guardado si hay datos REALES de BD con número ganador
    return !!(sorteoData?.numeroGanador);
  }

  // Método para verificar si hay datos temporales en el formulario
  hasTemporaryWinnerData(sorteo: SorteoSchedule): boolean {
    return !!(this.winningNumbers[sorteo.name] && !this.hasSavedWinner(sorteo));
  }

  // Método para cargar un sorteo específico por ID y actualizar la UI
  async loadSorteoById(sorteoId: string): Promise<void> {
    try {
      
      const sorteo = await this.supabaseService.getSorteoById(sorteoId);
      
      if (sorteo) {
        // Actualizar en sorteosData
        this.sorteosData[sorteoId] = sorteo;
        
        // También actualizar el número ganador local si está disponible
        const sorteoName = sorteo.sorteo;
        if (sorteo.numeroGanador) {
          this.winningNumbers[sorteoName] = sorteo.numeroGanador;
        }
        
        // Forzar actualización de la vista
        this.cdr.detectChanges();
      } else {
      }
    } catch (error: any) {
      
      // Si es error de RLS, intentar método alternativo
      if (error?.isRLSError || error?.code === '42501') {
        try {
          const simpleData = await this.supabaseService.getSorteoByIdSimple(sorteoId);
          if (simpleData && simpleData.length > 0) {
            const data = simpleData[0];
            
            // Crear objeto Sorteo desde datos simples
            const sorteo: Sorteo = {
              id: sorteoId,
              fecha: data.fecha ? new Date(data.fecha) : new Date(),
              sorteo: data.sorteo || sorteoId.split('-')[1],
              horaCierre: data.hora_cierre ? new Date(data.hora_cierre) : new Date(),
              numeroGanador: data.numero_ganador || '',
              factorMultiplicador: data.factor_multiplicador || 0,
              totalVendido: data.total_vendido || 0,
              totalPagado: data.total_pagado || 0,
              gananciaNeta: data.ganancia_neta || 0,
              cerrado: data.cerrado || false
            };
            
            // Actualizar en sorteosData
            this.sorteosData[sorteoId] = sorteo;
            
            // Actualizar número ganador local
            if (sorteo.numeroGanador) {
              this.winningNumbers[sorteo.sorteo] = sorteo.numeroGanador;
            }
            
            this.cdr.detectChanges();
          }
        } catch (fallbackError) {
        }
      }
    }
  }

  // Método para refrescar todos los sorteos del día actual
  async refreshTodaysSorteos(): Promise<void> {
    try {
      const hondurasToday = this.supabaseService.getHondurasDateTime();
      const todayString = hondurasToday.toISOString().split('T')[0];
      
      for (const sorteo of this.sorteoSchedules) {
        const sorteoId = `${todayString}-${sorteo.name}`;
        await this.loadSorteoById(sorteoId);
      }
      
    } catch (error) {
    }
  }

  async loadSales(): Promise<void> {
    try {
      // No cambiar isLoading aquí si ya estamos en modo filtros
      if (!this.isLoadingFilters) {
        this.isLoading = true;
      }
      
      // Si hay filtros de rango de fechas, usar el método de rango
      if (this.fechaDesde && this.fechaHasta) {
        await this.loadSalesByDateRange();
        return;
      }
      
      // Determinar fecha para consulta individual
      let fechaParaConsulta: Date;
      
      if (this.selectedDate) {
        // Si hay fecha seleccionada, usar esa fecha
        fechaParaConsulta = new Date(this.selectedDate);
      } else {
        // Por defecto, usar hoy
        fechaParaConsulta = this.supabaseService.getHondurasDateTime();
      }
      
      
      // Cargar ventas usando el método existente
      this.sales = await this.supabaseService.getSalesByDateAndSorteo(
        fechaParaConsulta,
        this.selectedSorteoFilter
      );
      
      
      // Forzar actualización del array para trigger change detection
      this.sales = [...(this.sales || [])];
      
      // Cargar detalles de cada venta
      for (const sale of this.sales) {
        this.saleDetails[sale.id] = await this.supabaseService.getSaleDetails(sale.id);
      }
      
      
      // Forzar detección de cambios
      this.cdr.detectChanges();
      
    } catch (error) {
      this.sales = [];
      this.notificationService.showError('Error al cargar las ventas');
    } finally {
      // Solo cambiar isLoading si no estamos en modo filtros
      if (!this.isLoadingFilters) {
        this.isLoading = false;
      }
    }
  }


  getSaleDetails(saleId: string): SaleDetail[] {
    return this.saleDetails[saleId] || [];
  }

  async setWinningNumber(sorteo: SorteoSchedule): Promise<void> {
    const winningNumber = this.winningNumbers[sorteo.name];
    const multiplicador = this.factorMultiplicador[sorteo.name] || 70;
    
    if (!winningNumber) {
      this.notificationService.showError('Por favor ingrese un número ganador');
      return;
    }

    // Verificar autenticación
    if (!this.currentUser) {
      this.notificationService.showError('Usuario no autenticado. Por favor inicie sesión nuevamente.');
      this.router.navigate(['/login']);
      return;
    }

    try {
      this.isLoading = true;
      
      // Usar fecha de Honduras en lugar de new Date()
      const hondurasToday = this.supabaseService.getHondurasDateTime();
      
      // Usar formato de fecha más estándar para evitar problemas con caracteres especiales
      const fechaStr = hondurasToday.toISOString().split('T')[0]; // YYYY-MM-DD
      const sorteoId = `${fechaStr}-${sorteo.name}`;
      
      
      // Intentar actualizar con múltiples métodos de fallback
      let success = false;
      let lastError = null;
      
      // Asegurar formato de 2 dígitos para el número ganador
      const formattedWinningNumber = winningNumber.toString().padStart(2, '0');
      
      // Estrategia: Intentar UPDATE primero (más común), luego INSERT si falla
      try {
        await this.supabaseService.updateSorteoWinnerDirect(sorteoId, formattedWinningNumber, multiplicador);
        success = true;
      } catch (updateError) {
        
        // Si el UPDATE falla, puede ser que el registro no exista, intentar INSERT
        try {
          await this.supabaseService.insertNewSorteo(sorteoId, formattedWinningNumber, multiplicador);
          success = true;
        } catch (insertError) {
          lastError = insertError;
          
          // Último recurso: método simple
          try {
            await this.supabaseService.updateSorteoWinnerSimple(sorteoId, formattedWinningNumber, multiplicador);
            success = true;
          } catch (simpleError) {
            lastError = simpleError;
          }
        }
      }
      
      if (!success) {
        throw lastError;
      }
      
      
      // Recalcular totales y actualizar base de datos
      await this.calculateSorteoResults(sorteo, formattedWinningNumber, multiplicador);
      
      // Recargar datos de ventas y sorteos
      await this.loadSales();
      await this.loadSorteosData();
      
      // Actualizar la UI específicamente para este sorteo
      await this.updateSorteoUI(sorteo.name, formattedWinningNumber, multiplicador);
      
      this.notificationService.showSuccess(`Número ganador ${formattedWinningNumber} establecido correctamente para ${sorteo.name}`);
      
    } catch (error) {
      
      // Mostrar el error específico para debugging
      const errorMessage = (error as any)?.message || 'Error desconocido';
      const errorCode = (error as any)?.code || 'Sin código';
      
      this.notificationService.showError(`Error al establecer el número ganador: ${errorMessage} (Código: ${errorCode})`);
      
    } finally {
      this.isLoading = false;
    }
  }

  private async calculateSorteoResults(sorteo: SorteoSchedule, winningNumber: string, multiplicador: number = 70): Promise<void> {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    
    const sorteoSales = await this.supabaseService.getSalesByDateAndSorteo(hondurasToday, sorteo.name);
    
    let totalVendido = 0;
    let totalPagado = 0;
    
    for (const sale of sorteoSales) {
      totalVendido += sale.total;
      
      const details = await this.supabaseService.getSaleDetails(sale.id);
      for (const detail of details) {
        if (detail.numero.toString() === winningNumber) {
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

  // Método para recargar datos de sorteos desde la base de datos
  private async loadSorteosData(): Promise<void> {
    try {
      const hondurasToday = this.supabaseService.getHondurasDateTime();
      
      // Limpiar datos actuales
      this.sorteosData = {};
      
      // Cargar datos de sorteos para cada tipo
      for (const sorteo of this.sorteos) {
        try {
          const sorteoId = `${hondurasToday.toISOString().split('T')[0]}-${sorteo.name}`;
          const sorteoData = await this.supabaseService.getSorteoById(sorteoId);
          
          if (sorteoData) {
            this.sorteosData[sorteoId] = sorteoData; // Usar sorteoId como clave
            
            // Sincronizar con variables locales
            this.winningNumbers[sorteo.name] = sorteoData.numeroGanador || '';
            this.factorMultiplicador[sorteo.name] = sorteoData.factorMultiplicador || 70;
          }
        } catch (error: any) {
          
          // Si es error 406 o RLS, intentar método alternativo
          if (error?.status === 406 || error?.code === '42501') {
            // Aquí podrías implementar un método alternativo si tienes uno
          }
        }
      }
      
      
      // Forzar actualización de la UI
      this.cdr.detectChanges();
    } catch (error) {
    }
  }

  // Método para actualizar la UI específicamente después de establecer ganador
  private async updateSorteoUI(sorteoName: string, winningNumber: string, multiplicador: number): Promise<void> {
  try {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    const sorteoId = `${hondurasToday.toISOString().split('T')[0]}-${sorteoName}`;

    // Actualizar datos locales inmediatamente
    this.winningNumbers[sorteoName] = winningNumber;
    this.factorMultiplicador[sorteoName] = multiplicador;

    // Intentar cargar datos actualizados desde la base de datos
    await this.loadSorteoById(sorteoId);

    // Si el sorteo aún no aparece en sorteosData, crear un objeto temporal
    if (!this.sorteosData[sorteoId]) {
      this.sorteosData[sorteoId] = {
        id: sorteoId,
        fecha: hondurasToday,
        sorteo: sorteoName,
        horaCierre: hondurasToday,
        numeroGanador: winningNumber,
        factorMultiplicador: multiplicador,
        totalVendido: 0,
        totalPagado: 0,
        gananciaNeta: 0,
        cerrado: true
      } as Sorteo;
    }

    // Forzar detección de cambios para actualizar la UI
    this.cdr.detectChanges();

    // Después de un breve delay, intentar refrescar nuevamente para asegurar datos actualizados
    setTimeout(async () => {
      await this.loadSorteoById(sorteoId);
    }, 2000);

  } catch (error) {
    // En caso de error, asegurar que los datos locales estén actualizados
    this.winningNumbers[sorteoName] = winningNumber;
    this.factorMultiplicador[sorteoName] = multiplicador;
    this.cdr.detectChanges();
  }
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
  async aplicarFiltros(): Promise<void> {
    try {
      this.isLoadingFilters = true;
      
      // Validar que las fechas sean válidas
      if (this.fechaDesde && this.fechaHasta) {
        const fechaDesde = new Date(this.fechaDesde);
        const fechaHasta = new Date(this.fechaHasta);
        
        if (fechaDesde > fechaHasta) {
          this.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
          this.isLoadingFilters = false;
          return;
        }
        
      }
      
      // Guardar estado de filtros
      this.saveFilterState();
      
      // Recargar ventas
      await this.loadSales();
      
    } catch (error) {
      this.notificationService.showError('Error al aplicar filtros');
    } finally {
      // Asegurar que el loading se quite con un pequeño delay
      setTimeout(() => {
        this.isLoadingFilters = false;
        this.cdr.detectChanges();
      }, 100);
    }
  }

  async limpiarFiltros(): Promise<void> {
    try {
      this.isLoadingFilters = true;
      const hondurasToday = this.supabaseService.getHondurasDateTime();
      
      // Reinicializar fechas usando date-fns
      const fechaInicio = startOfDay(hondurasToday);
      const fechaFin = endOfDay(hondurasToday);
      
      this.fechaDesde = this.formatDateTimeLocal(fechaInicio);
      this.fechaHasta = this.formatDateTimeLocal(fechaFin);
      this.selectedDate = hondurasToday.toISOString().split('T')[0];
      this.selectedSorteoFilter = '';
      
      
      // Guardar estado limpio
      this.saveFilterState();
      
      await this.loadSales();
      
    } catch (error) {
      this.notificationService.showError('Error al limpiar filtros');
    } finally {
      // Asegurar que el loading se quite con un pequeño delay
      setTimeout(() => {
        this.isLoadingFilters = false;
        this.cdr.detectChanges();
      }, 100);
    }
  }

  async onFiltroFechaChange(): Promise<void> {
    
    // Auto-aplicar filtros cuando cambian las fechas
    await this.aplicarFiltros();
  }

  async onDateChange(): Promise<void> {
    try {
      this.isLoadingFilters = true;
      
      // Guardar cambio de fecha y recargar
      this.saveFilterState();
      await this.loadSales();
    } catch (error) {
      this.notificationService.showError('Error al cambiar la fecha');
    } finally {
      this.isLoadingFilters = false;
    }
  }

  async onSorteoFilterChange(): Promise<void> {
    try {
      this.isLoadingFilters = true;
      
      // Guardar cambio de sorteo y recargar
      this.saveFilterState();
      await this.loadSales();
    } catch (error) {
      this.notificationService.showError('Error al cambiar el filtro de sorteo');
    } finally {
      this.isLoadingFilters = false;
    }
  }

  // Método específico para cuando cambia fechaDesde
  async onFechaDesdeChange(): Promise<void> {
    await this.aplicarFiltros();
  }

  // Método específico para cuando cambia fechaHasta
  async onFechaHastaChange(): Promise<void> {
    await this.aplicarFiltros();
  }

  async loadSalesByDateRange(): Promise<void> {
    if (!this.fechaDesde || !this.fechaHasta) {
      await this.loadSingleDateSales();
      return;
    }

    // No cambiar isLoading aquí si ya estamos en modo filtros
    if (!this.isLoadingFilters) {
      this.isLoading = true;
    }
    try {
      
      // Usar date-fns para manejar las fechas correctamente
      const fechaDesdeObj = startOfDay(new Date(this.fechaDesde));
      const fechaHastaObj = endOfDay(new Date(this.fechaHasta));
      
      
      // Validar que la fecha desde no sea mayor que la fecha hasta
      if (fechaDesdeObj > fechaHastaObj) {
        this.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
        this.sales = [];
        return;
      }
      
      // Cargar ventas para cada día en el rango
      let allSales: Sale[] = [];
      let currentDate = new Date(fechaDesdeObj);
      let daysProcessed = 0;
      const maxDays = 31; // Límite de seguridad
      
      while (currentDate <= fechaHastaObj && daysProcessed < maxDays) {
        
        const daySales = await this.supabaseService.getSalesByDateAndSorteo(currentDate, this.selectedSorteoFilter);
        
        allSales = [...allSales, ...daySales];
        
        // Avanzar al siguiente día
        currentDate = new Date(currentDate);
        currentDate.setDate(currentDate.getDate() + 1);
        daysProcessed++;
      }

      if (daysProcessed >= maxDays) {
        this.notificationService.showInfo('Se procesaron los primeros 31 días del rango');
      }

      // Forzar actualización del array
      this.sales = [...allSales];
      
      
      // Cargar detalles de todas las ventas
      for (const sale of this.sales) {
        this.saleDetails[sale.id] = await this.supabaseService.getSaleDetails(sale.id);
      }
      
      // Forzar detección de cambios
      this.cdr.detectChanges();
      
      
    } catch (error) {
      this.notificationService.showError('Error al cargar las ventas: ' + error);
      this.sales = [];
    } finally {
      // Solo cambiar isLoading si no estamos en modo filtros
      if (!this.isLoadingFilters) {
        this.isLoading = false;
      }
    }
  }

  // Método auxiliar para cargar ventas de una sola fecha
  private async loadSingleDateSales(): Promise<void> {
    const fecha = this.selectedDate ? new Date(this.selectedDate) : this.supabaseService.getHondurasDateTime();
    
    this.sales = await this.supabaseService.getSalesByDateAndSorteo(fecha, this.selectedSorteoFilter);
    this.sales = [...(this.sales || [])];
    
    for (const sale of this.sales) {
      this.saleDetails[sale.id] = await this.supabaseService.getSaleDetails(sale.id);
    }
    
    this.cdr.detectChanges();
  }

  // Gestión de usuarios
  async loadUsers(): Promise<void> {
    try {
      this.users = await this.supabaseService.getUsers();
      
      if (this.users.length === 0) {
        this.notificationService.showInfo('No hay usuarios configurados. Use el botón Sincronizar para cargar usuarios desde Authentication.');
      }
    } catch (error) {
      this.notificationService.showError('Error al cargar usuarios: ' + (error as any)?.message);
      // Asegurar que users no sea undefined
      this.users = [];
    }
  }

  loadSorteoSchedules(): void {
    this.sorteoSchedules = [...SORTEO_SCHEDULES];
    
    if (this.sorteoSchedules.length === 0) {
      this.notificationService.showError('No se encontraron horarios de sorteos configurados');
    } else {
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
        await this.supabaseService.updateExistingUser(this.editingUser.id, {
          email: this.userFormData.email,
          role: this.userFormData.role,
          sucursal: this.userFormData.sucursal,
          active: this.userFormData.active
        });
        this.notificationService.showSuccess('Usuario actualizado exitosamente');
      } else {
        // Crear nuevo usuario
        await this.supabaseService.createNewUser(this.userFormData);
        this.notificationService.showSuccess('Usuario creado exitosamente');
      }
      
      this.closeUserModal();
      await this.loadUsers();
    } catch (error) {
      this.notificationService.showError('Error al guardar el usuario');
    } finally {
      this.isLoading = false;
    }
  }

  async toggleUserStatus(user: any): Promise<void> {
    try {
      this.isLoading = true;
      await this.supabaseService.toggleExistingUserStatus(user.id);
      this.notificationService.showSuccess('Estado del usuario actualizado');
      await this.loadUsers();
    } catch (error) {
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
        this.notificationService.showSuccess('Usuario eliminado exitosamente');
        await this.loadUsers();
      } catch (error) {
        this.notificationService.showError('Error al eliminar el usuario');
      } finally {
        this.isLoading = false;
      }
    }
  }

  generateDailyReport(): void {
    const reportDate = this.selectedDate ? new Date(this.selectedDate) : this.supabaseService.getHondurasDateTime();
    this.printService.generateDailyReport(this.sales, reportDate);
  }

  // Método mejorado para reimprimir recibo desde admin
  async reprintReceipt(sale: Sale): Promise<void> {
    try {
      
      // Obtener detalles de la venta desde la base de datos
      const details = await this.supabaseService.getSaleDetails(sale.id);
      
      if (details.length === 0) {
        this.notificationService.showError('No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
        return;
      }
      
      // Generar recibo con los detalles obtenidos
      this.printService.generateThermalReceipt(sale, details);
      this.notificationService.showSuccess('Recibo enviado a impresión');
      
    } catch (error) {
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

  // Método para formatear fecha para inputs datetime-local
  private formatDateTimeLocal(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  // Método para formatear fecha para mostrar en la UI
  formatDateForDisplay(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return this.supabaseService.formatHondurasDateTime(dateObj);
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

  trackBySaleDetail(index: number, detail: SaleDetail): string {
    return detail.id;
  }

  verDetalles(sale: Sale): void {
    
    // Primero cerrar cualquier modal que pueda estar abierto
    this.showSaleDetailModal = false;
    
    // Obtener detalles de la venta
    const details = this.getSaleDetails(sale.id);
    
    // Configurar modal
    this.selectedSaleForDetail = sale;
    this.selectedSaleDetails = details;
    this.showSaleDetailModal = true;
    
    // Forzar detección de cambios
    this.cdr.detectChanges();
    
  }

  // Método para cerrar el modal de detalles
  closeSaleDetailModal(): void {
    
    this.showSaleDetailModal = false;
    this.selectedSaleForDetail = null;
    this.selectedSaleDetails = [];
    
    // Forzar detección de cambios
    this.cdr.detectChanges();
    
  }

  // Método para forzar el cierre del modal
  forceCloseSaleDetailModal(): void {
    this.showSaleDetailModal = false;
    this.selectedSaleForDetail = null;
    this.selectedSaleDetails = [];
  }

  // Método de emergencia para resetear completamente el modal
  resetModal(): void {
    
    // Cerrar TODOS los modales
    this.showSaleDetailModal = false;
    this.showUserModal = false;
    this.showPasswordModal = false;
    
    // Limpiar datos de modales
    this.selectedSaleForDetail = null;
    this.selectedSaleDetails = [];
    
    // Solo si hay elementos trabados, limpiar el DOM
    setTimeout(() => {
      // Eliminar backdrop de Bootstrap si existe
      const backdrops = document.querySelectorAll('.modal-backdrop');
      backdrops.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      
      // Remover clases del body
      document.body.classList.remove('modal-open');
      
    }, 100);
  }

  // Método para calcular total de números en el modal
  getTotalNumeros(): number {
    return this.selectedSaleDetails.reduce((total, detail) => total + detail.monto, 0);
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
  // MÉTODOS DE DEBUG
  // ========================

  async debugSorteoSchedules(): Promise<void> {
    try {
      this.isLoading = true;
    //  await this.supabaseService.debugSorteoSchedules();
      this.notificationService.showSuccess('Revisa la consola para ver los resultados del debug');
    } catch (error) {
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
      this.notificationService.showError('Error al sincronizar usuarios');
    } finally {
      this.isLoading = false;
    }
  }

  // Navegar a la gestión de usuarios
  navigateToUsers(): void {
    this.router.navigate(['/admin/users']);
  }

}
