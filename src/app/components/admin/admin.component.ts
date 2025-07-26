import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { startOfDay, endOfDay } from 'date-fns';
import { SupabaseService } from '../../services/supabase.service';
import { NotificationService } from '../../services/notification.service';
import { PrintService } from '../../services/print.service';
import { ExportService, ReportData } from '../../services/export.service';
import { Router } from '@angular/router';
import { SorteoSchedule, Sale, SaleDetail, Sorteo, SORTEO_SCHEDULES, SucursalFactor } from '../../models/interfaces';

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

  // Propiedades para modal de factores por sucursal
  showFactorsModal: boolean = false;
  sucursalesFactores: SucursalFactor[] = [];
  factoresPorSucursal: { [sucursal: string]: number } = {};
  currentSorteoForFactors: { sorteo: SorteoSchedule, winningNumber: string } | null = null;

  // Propiedades optimizadas para caché de datos
  private cachedDashboardData: any = null;
  private cachedNumbersData: any = null;
  private lastDataFetch: Date | null = null;
  private cacheValidTime = 30000; // 30 segundos de caché

  // Propiedades para resumen de cierre por sucursales
  showResumenModal: boolean = false;
  resumenSucursales: any[] = [];
  currentSorteoForResumen: string = '';

  // Propiedades para cierre de caja por sucursal (nueva funcionalidad)
  showCierreCajaModal: boolean = false;
  selectedSucursalForCierre: string = '';
  fechaCierreSeleccionada: Date = new Date(); // Se inicializará con fecha de Honduras en constructor
  resumenCajaSucursal: any = null;
  sorteosPendientesPagoSucursal: any[] = [];
  movimientosCajaSucursal: any[] = [];
  sucursalesDisponibles: string[] = [];
  loadingCierreCaja: boolean = false;
  cierreExistenteSucursal: any = null; // Para almacenar el cierre si ya existe

  // Cache para optimización
  private sucursalesCacheExpiry: Date | null = null;
  private readonly SUCURSALES_CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  constructor(
    private supabaseService: SupabaseService,
    private notificationService: NotificationService,
    public printService: PrintService,
    private exportService: ExportService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // Inicializar fechas usando timezone de Honduras para filtros
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    this.selectedDate = this.supabaseService.formatDateTimeLocalHonduras(hondurasToday).split('T')[0];

    // Inicializar fecha de cierre con fecha actual de Honduras
    this.fechaCierreSeleccionada = hondurasToday;

    // FORZAR CIERRE DE TODOS LOS MODALES AL INICIALIZAR
    this.showSaleDetailModal = false;
    this.showUserModal = false;
    this.showPasswordModal = false;
    this.showFactorsModal = false;
    this.showResumenModal = false;

    // Recuperar filtros de localStorage o usar valores por defecto
    this.loadFilterState();

    // Si no hay filtros guardados, usar fecha de Honduras para inicializar
    if (!this.fechaDesde || !this.fechaHasta) {
      const fechaInicio = this.supabaseService.getStartOfDayHonduras(hondurasToday);
      const fechaFin = this.supabaseService.getEndOfDayHonduras(hondurasToday);

      this.fechaDesde = this.supabaseService.formatDateTimeLocalHonduras(fechaInicio);
      this.fechaHasta = this.supabaseService.formatDateTimeLocalHonduras(fechaFin);
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
    const todayString = this.supabaseService.formatDateOnlyForSupabase(hondurasToday);
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
      const todayString = this.supabaseService.formatDateOnlyForSupabase(hondurasToday);

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

      // Limpiar caché cuando se cargan nuevos datos
      this.clearCache();

      // Si hay filtros de rango de fechas, usar el método de rango optimizado
      if (this.fechaDesde && this.fechaHasta) {
        await this.loadSalesByDateRangeOptimized();
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

      console.log('Cargando ventas optimizadas para fecha:', fechaParaConsulta);

      // Usar método optimizado para una sola fecha
      const optimizedData = await this.supabaseService.getDailyOptimizedData(
        fechaParaConsulta,
        this.selectedSorteoFilter
      );

      // Asignar datos
      this.sales = optimizedData.sales;
      this.saleDetails = optimizedData.saleDetails;
      this.cachedDashboardData = optimizedData.dashboardData;
      this.lastDataFetch = new Date();

      console.log('Datos optimizados cargados:', {
        ventas: this.sales.length,
        totalVendido: optimizedData.dashboardData.totalVendido
      });

      // Forzar detección de cambios
      this.cdr.detectChanges();

    } catch (error) {
      console.error('Error al cargar ventas optimizadas:', error);
      this.sales = [];
      this.saleDetails = {};
      this.clearCache();
      this.notificationService.showError('Error al cargar las ventas');
    } finally {
      // Solo cambiar isLoading si no estamos en modo filtros
      if (!this.isLoadingFilters) {
        this.isLoading = false;
      }
    }
  }

  // Método optimizado para rangos de fechas
  async loadSalesByDateRangeOptimized(): Promise<void> {
    if (!this.fechaDesde || !this.fechaHasta) {
      await this.loadSingleDateSales();
      return;
    }

    try {
      console.log('Cargando rango de fechas optimizado:', this.fechaDesde, 'hasta', this.fechaHasta);

      // Convertir strings de datetime-local a fechas
      const fechaDesdeUtc = this.supabaseService.parseLocalDateTimeToUtc(this.fechaDesde);
      const fechaHastaUtc = this.supabaseService.parseLocalDateTimeToUtc(this.fechaHasta);

      // Validar fechas
      if (fechaDesdeUtc > fechaHastaUtc) {
        this.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
        this.sales = [];
        this.saleDetails = {};
        return;
      }

      // Usar método optimizado del servicio
      const optimizedData = await this.supabaseService.getSalesWithDetailsOptimized(
        fechaDesdeUtc,
        fechaHastaUtc,
        this.selectedSorteoFilter
      );

      // Asignar datos
      this.sales = optimizedData.sales;
      this.saleDetails = optimizedData.saleDetails;

      // Obtener datos del dashboard para el rango
      const dashboardData = await this.supabaseService.getAdminDashboardData(
        fechaDesdeUtc,
        fechaHastaUtc,
        this.selectedSorteoFilter
      );

      this.cachedDashboardData = dashboardData;
      this.cachedNumbersData = dashboardData.numerosPorSorteo;
      this.lastDataFetch = new Date();

      console.log('Datos de rango optimizados cargados:', {
        ventas: this.sales.length,
        totalVendido: dashboardData.totalVendido
      });

      // Forzar detección de cambios
      this.cdr.detectChanges();

    } catch (error) {
      console.error('Error al cargar rango optimizado:', error);
      this.notificationService.showError('Error al cargar las ventas: ' + error);
      this.sales = [];
      this.saleDetails = {};
      this.clearCache();
    }
  }

  // Método para limpiar caché
  private clearCache(): void {
    this.cachedDashboardData = null;
    this.cachedNumbersData = null;
    this.lastDataFetch = null;
  }

  // Verificar si el caché es válido
  private isCacheValid(): boolean {
    if (!this.lastDataFetch || !this.cachedDashboardData) {
      return false;
    }
    return (new Date().getTime() - this.lastDataFetch.getTime()) < this.cacheValidTime;
  }


  getSaleDetails(saleId: string): SaleDetail[] {
    return this.saleDetails[saleId] || [];
  }

  async setWinningNumber(sorteo: SorteoSchedule): Promise<void> {
    const winningNumber = this.winningNumbers[sorteo.name];

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

    // Abrir modal para configurar factores por sucursal
    await this.openFactorsModal(sorteo, winningNumber);
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
          const sorteoId = `${this.supabaseService.formatDateOnlyForSupabase(hondurasToday)}-${sorteo.name}`;
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
      const sorteoId = `${this.supabaseService.formatDateOnlyForSupabase(hondurasToday)}-${sorteoName}`;

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
    // Usar caché si está disponible y válido
    if (this.isCacheValid() && this.cachedDashboardData) {
      return this.cachedDashboardData.totalVendido;
    }

    // Fallback al cálculo tradicional si no hay caché
    return this.sales.reduce((total, sale) => total + sale.total, 0);
  }

  getTotalPagado(): number {
    // Usar caché si está disponible y válido
    if (this.isCacheValid() && this.cachedDashboardData) {
      return this.cachedDashboardData.totalPagado;
    }

    // Fallback al cálculo tradicional si no hay caché
    let totalPagado = 0;

    // Calcular total pagado basándose en sorteos cerrados y números ganadores
    for (const sale of this.sales) {
      const sorteoSchedule = this.sorteos.find(s => s.name === sale.sorteo);
      if (sorteoSchedule) {
        const sorteoData = this.getSorteoData(sorteoSchedule);
        if (sorteoData && sorteoData.cerrado && sorteoData.numeroGanador) {
          const saleDetails = this.getSaleDetails(sale.id);
          for (const detail of saleDetails) {
            if (detail.numero.toString() === sorteoData.numeroGanador.toString()) {
              const factor = sorteoData.factorMultiplicador || 70;
              totalPagado += detail.monto * factor;
            }
          }
        }
      }
    }

    return totalPagado;
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

      // Reinicializar fechas usando zona horaria de Honduras
      const fechaInicio = this.supabaseService.getStartOfDayHonduras(hondurasToday);
      const fechaFin = this.supabaseService.getEndOfDayHonduras(hondurasToday);

      this.fechaDesde = this.supabaseService.formatDateTimeLocalHonduras(fechaInicio);
      this.fechaHasta = this.supabaseService.formatDateTimeLocalHonduras(fechaFin);
      this.selectedDate = this.supabaseService.formatDateTimeLocalHonduras(hondurasToday).split('T')[0];
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

      // Convertir strings de datetime-local a fechas UTC para la base de datos
      const fechaDesdeUtc = this.supabaseService.parseLocalDateTimeToUtc(this.fechaDesde);
      const fechaHastaUtc = this.supabaseService.parseLocalDateTimeToUtc(this.fechaHasta);

      // Validar que la fecha desde no sea mayor que la fecha hasta
      if (fechaDesdeUtc > fechaHastaUtc) {
        this.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
        this.sales = [];
        return;
      }

      // Cargar ventas para cada día en el rango usando fechas en Honduras
      let allSales: Sale[] = [];
      let currentDate = new Date(fechaDesdeUtc);
      let daysProcessed = 0;
      const maxDays = 31; // Límite de seguridad

      while (currentDate <= fechaHastaUtc && daysProcessed < maxDays) {

        const daySales = await this.supabaseService.getSalesByDateAndSorteo(currentDate, this.selectedSorteoFilter);

        allSales = [...allSales, ...daySales];

        // Avanzar al siguiente día usando fecha UTC
        currentDate = new Date(currentDate);
        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
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
      this.users = await this.supabaseService.getAllUsers();

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

  // Método para formatear fecha para inputs datetime-local (DEPRECATED - usar supabaseService)
  private formatDateTimeLocal(date: Date): string {
    // Delegar al servicio de Supabase para consistencia
    return this.supabaseService.formatDateTimeLocalHonduras(date);
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
      link.setAttribute('download', `ventas_excel_${this.supabaseService.formatDateOnlyForSupabase(hondurasToday)}.csv`);
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

  // ===== MÉTODOS PARA MODAL DE FACTORES POR SUCURSAL =====

  async openFactorsModal(sorteoName: string, winningNumber: number): Promise<void>;
  async openFactorsModal(sorteo: SorteoSchedule, winningNumber: string): Promise<void>;
  async openFactorsModal(sorteoOrName: SorteoSchedule | string, winningNumber: string | number): Promise<void> {
    try {
      this.isLoading = true;

      // Cargar usuarios activos por sucursal
      this.sucursalesFactores = await this.supabaseService.getActiveUsersBySucursal();

      // Inicializar factores con valores por defecto
      this.factoresPorSucursal = {};
      for (const sucursal of this.sucursalesFactores) {
        this.factoresPorSucursal[sucursal.sucursal] = sucursal.factor;
      }

      // Manejar ambos tipos de parámetros
      if (typeof sorteoOrName === 'string') {
        // Llamada desde la interfaz del sorteo (solo nombre y número)
        const sorteoSchedule = SORTEO_SCHEDULES.find(s => s.name === sorteoOrName);
        if (sorteoSchedule) {
          this.currentSorteoForFactors = {
            sorteo: sorteoSchedule,
            winningNumber: winningNumber.toString()
          };
        }
      } else {
        // Llamada desde setWinningNumber (objeto completo)
        this.currentSorteoForFactors = {
          sorteo: sorteoOrName,
          winningNumber: winningNumber.toString()
        };
      }

      this.showFactorsModal = true;

    } catch (error) {
      console.error('Error al cargar sucursales:', error);
      this.notificationService.showError('Error al cargar configuración de sucursales');
    } finally {
      this.isLoading = false;
    }
  }

  closeFactorsModal(): void {
    this.showFactorsModal = false;
    this.currentSorteoForFactors = null;
    this.factoresPorSucursal = {};
    this.sucursalesFactores = [];
  }

  closeResumenModal(): void {
    this.showResumenModal = false;
    this.resumenSucursales = [];
    this.currentSorteoForResumen = '';
  }

  async confirmWinningNumberWithFactors(): Promise<void> {
    if (!this.currentSorteoForFactors) {
      this.notificationService.showError('No hay sorteo seleccionado');
      return;
    }

    const { sorteo, winningNumber } = this.currentSorteoForFactors;

    try {
      this.isLoading = true;

      // Usar fecha de Honduras
      const hondurasToday = this.supabaseService.getHondurasDateTime();
      const fechaStr = this.supabaseService.formatDateOnlyForSupabase(hondurasToday);
      const sorteoId = `${fechaStr}-${sorteo.name}`;

      // Crear sorteos por sucursal con factores específicos
      await this.supabaseService.crearSorteosPorSucursal(
        sorteoId,
        winningNumber,
        this.factoresPorSucursal
      );

      // Calcular totales por sucursal
      await this.supabaseService.calcularTotalesSorteoPorSucursal(sorteoId);

      // Cerrar modal de factores
      this.closeFactorsModal();

      // Obtener resumen de sucursales para mostrar
      this.resumenSucursales = await this.supabaseService.getSorteoResumenPorSucursal(sorteoId);
      this.currentSorteoForResumen = `${sorteo.label} - Número Ganador: ${winningNumber.padStart(2, '0')}`;

      // Mostrar modal de resumen
      this.showResumenModal = true;

      // Recargar datos
      await this.loadSales();
      await this.loadSorteosData();

      // Notificar actualización de resúmenes
      this.supabaseService.notifyResumenUpdate();

      // Actualizar UI
      this.winningNumbers[sorteo.name] = winningNumber;

      this.notificationService.showSuccess(
        `Número ganador ${winningNumber.padStart(2, '0')} establecido con factores específicos por sucursal para ${sorteo.name}`
      );

    } catch (error) {
      console.error('Error al establecer número ganador:', error);
      this.notificationService.showError('Error al establecer el número ganador con factores por sucursal');
    } finally {
      this.isLoading = false;
    }
  }

  // Obtener lista única de sucursales
  getUniqueSucursales(): string[] {
    return [...new Set(this.sucursalesFactores.map(s => s.sucursal))];
  }

  // Actualizar factor para una sucursal específica
  updateFactorForSucursal(sucursal: string, factor: string | number): void {
    this.factoresPorSucursal[sucursal] = typeof factor === 'string' ? parseFloat(factor) : factor;
  }

  // Métodos auxiliares para el template
  getUsersBySucursal(sucursal: string): SucursalFactor[] {
    return this.sucursalesFactores.filter(s => s.sucursal === sucursal);
  }

  hasSucursalUsers(sucursal: string): boolean {
    return this.sucursalesFactores.filter(s => s.sucursal === sucursal).length > 0;
  }

  // Métodos para calcular totales en el resumen
  getTotalVendidoGeneral(): string {
    const total = this.getTotalVendido();
    return total.toFixed(2);
  }

  getTotalPagadoGeneral(): string {
    const total = this.getTotalPagado();
    return total.toFixed(2);
  }

  getGananciaTotalGeneral(): number {
    return this.getGananciaNeta();
  }

  // Método para calcular el total de la cantidad del número ganador
  getTotalCantidadNumeroGanador(): number {
    if (!this.resumenSucursales || this.resumenSucursales.length === 0) {
      return 0;
    }

    return this.resumenSucursales.reduce((total, sucursal) => {
      return total + (sucursal.cantidad_numero_ganador || 0);
    }, 0);
  }

  // Método para obtener resumen de ventas por número
  getNumbersSummary(): Array<{ numero: number, totalVendido: number, cantidadVentas: number, porcentaje: number }> {
    // Usar caché si está disponible y válido
    if (this.isCacheValid() && this.cachedNumbersData) {
      const totalGeneral = this.cachedNumbersData.get('total') || 0;
      const result: Array<{ numero: number, totalVendido: number, cantidadVentas: number, porcentaje: number }> = [];

      this.cachedNumbersData.forEach((value: any, key: string) => {
        if (key !== 'total' && typeof value === 'object' && value.totalVendido !== undefined) {
          result.push({
            numero: parseInt(key),
            totalVendido: value.totalVendido,
            cantidadVentas: value.cantidadVentas,
            porcentaje: totalGeneral > 0 ? (value.totalVendido / totalGeneral) * 100 : 0
          });
        }
      });

      return result.sort((a, b) => b.totalVendido - a.totalVendido);
    }

    // Fallback al cálculo tradicional si no hay caché
    const sales = this.sales;
    const numeroStats: { [numero: number]: { totalVendido: number, cantidadVentas: number } } = {};
    let totalGeneral = 0;

    // Procesar todas las ventas
    sales.forEach((sale: Sale) => {
      const details = this.getSaleDetails(sale.id);
      details.forEach(detail => {
        if (!numeroStats[detail.numero]) {
          numeroStats[detail.numero] = { totalVendido: 0, cantidadVentas: 0 };
        }
        numeroStats[detail.numero].totalVendido += detail.monto;
        numeroStats[detail.numero].cantidadVentas += 1;
        totalGeneral += detail.monto;
      });
    });

    // Convertir a array y calcular porcentajes
    return Object.entries(numeroStats)
      .map(([numero, stats]) => ({
        numero: parseInt(numero),
        totalVendido: stats.totalVendido,
        cantidadVentas: stats.cantidadVentas,
        porcentaje: totalGeneral > 0 ? (stats.totalVendido / totalGeneral) * 100 : 0
      }))
      .sort((a, b) => b.totalVendido - a.totalVendido); // Ordenar por total vendido descendente
  }

  // Método para obtener números vendidos agrupados por sorteo y sucursal
  getNumbersSummaryBySorteoAndSucursal(): Array<{
    sorteo: string,
    sucursales: Array<{
      sucursal: string,
      numeros: Array<{ numero: number, totalVendido: number, cantidadVentas: number, porcentaje: number }>
    }>
  }> {
    const groups: { [sorteo: string]: { [sucursal: string]: { [numero: number]: { totalVendido: number, cantidadVentas: number } } } } = {};

    // Agrupar por sorteo, sucursal y número
    this.sales.forEach(sale => {
      const sorteo = sale.sorteo || 'Sin Sorteo';
      const sucursal = sale.sucursal || 'Sin Sucursal';

      if (!groups[sorteo]) {
        groups[sorteo] = {};
      }
      if (!groups[sorteo][sucursal]) {
        groups[sorteo][sucursal] = {};
      }

      const details = this.getSaleDetails(sale.id);
      details.forEach(detail => {
        const numero = parseInt(detail.numero.toString());
        if (!groups[sorteo][sucursal][numero]) {
          groups[sorteo][sucursal][numero] = { totalVendido: 0, cantidadVentas: 0 };
        }
        groups[sorteo][sucursal][numero].totalVendido += detail.monto;
        groups[sorteo][sucursal][numero].cantidadVentas += 1;
      });
    });

    // Convertir a array y calcular porcentajes
    return Object.keys(groups).map(sorteo => {
      const sorteoData = groups[sorteo];

      const sucursales = Object.keys(sorteoData).map(sucursal => {
        const sucursalData = sorteoData[sucursal];
        const totalSucursal = Object.values(sucursalData).reduce((sum, data) => sum + data.totalVendido, 0);

        const numeros = Object.keys(sucursalData).map(numeroStr => {
          const numero = parseInt(numeroStr);
          const data = sucursalData[numero];
          return {
            numero,
            totalVendido: data.totalVendido,
            cantidadVentas: data.cantidadVentas,
            porcentaje: totalSucursal > 0 ? (data.totalVendido / totalSucursal) * 100 : 0
          };
        }).sort((a, b) => b.totalVendido - a.totalVendido);

        return {
          sucursal,
          numeros
        };
      });

      return {
        sorteo,
        sucursales
      };
    });
  }

  // Métodos auxiliares para la vista de números vendidos
  getSorteoTotal(sorteoGroup: any): number {
    return sorteoGroup.sucursales.reduce((total: number, sucursal: any) => {
      return total + sucursal.numeros.reduce((subtotal: number, numero: any) => subtotal + numero.totalVendido, 0);
    }, 0);
  }

  getSucursalTotal(sucursalGroup: any): number {
    return sucursalGroup.numeros.reduce((total: number, numero: any) => total + numero.totalVendido, 0);
  }

  // Métodos para el tablero de números completo
  getAllNumbers(): number[] {
    const numbers = [];
    for (let i = 0; i <= 99; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  getNumeroVenta(sucursalGroup: any, numero: number): number {
    const numeroData = sucursalGroup.numeros.find((n: any) => n.numero === numero);
    return numeroData ? numeroData.totalVendido : 0;
  }

  getNumeroIntensity(sucursalGroup: any, numero: number): string {
    const venta = this.getNumeroVenta(sucursalGroup, numero);
    const maxVenta = Math.max(...sucursalGroup.numeros.map((n: any) => n.totalVendido));

    if (venta === 0) return 'sin-venta';
    if (maxVenta === 0) return 'sin-venta';

    const intensidad = venta / maxVenta;

    if (intensidad >= 0.8) return 'intensidad-muy-alta';
    if (intensidad >= 0.6) return 'intensidad-alta';
    if (intensidad >= 0.4) return 'intensidad-media';
    if (intensidad >= 0.2) return 'intensidad-baja';
    return 'intensidad-muy-baja';
  }

  // Métodos de exportación
  private prepareReportData(): any {
    // Obtener fecha del filtro actual
    const fechaReporte = this.fechaDesde ?
      this.supabaseService.formatDateOnlyForSupabase(this.supabaseService.parseLocalDateTimeToUtc(this.fechaDesde)) :
      this.selectedDate || this.supabaseService.formatDateOnlyForSupabase(this.supabaseService.getHondurasDateTime());

    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const fechaHora = this.supabaseService.formatHondurasDateTime(hondurasTime);
    const [, hora, periodo] = fechaHora.split(' ');

    // Describir filtros aplicados
    let filtroAplicado = 'Todos los datos';
    if (this.fechaDesde && this.fechaHasta) {
      filtroAplicado = `Desde: ${this.fechaDesde} Hasta: ${this.fechaHasta}`;
    } else if (this.fechaDesde) {
      filtroAplicado = `Desde: ${this.fechaDesde}`;
    } else if (this.fechaHasta) {
      filtroAplicado = `Hasta: ${this.fechaHasta}`;
    }
    if (this.selectedSorteoFilter) {
      filtroAplicado += ` - Sorteo: ${this.selectedSorteoFilter}`;
    }

    // 1. DASHBOARD PRINCIPAL (4 cards como se ven en pantalla)
    const dashboardData = {
      totalVendido: this.getTotalVendido(),
      totalPagado: this.getTotalPagado(),
      gananciaNeta: this.getGananciaNeta(),
      ventasTotales: this.getTotalVentas()
    };

    // 2. NÚMEROS POR SORTEO Y SUCURSAL (tableros completos como se ven)
    const numerosPorSorteo = this.getNumbersSummaryBySorteoAndSucursal();

    // 3. DETALLE POR SUCURSALES (LA PARTE MÁS IMPORTANTE)
    const numeroGanador = this.resumenSucursales.length > 0 ? this.resumenSucursales[0].numero_ganador : '';
    const detallePorSucursales = {
      headers: ['Sucursal', 'Factor', `Cantidad #${numeroGanador}`, 'Total Vendido', 'Total Pagado', 'Ganancia Neta'],
      filas: this.resumenSucursales.map(sucursal => ({
        sucursal: sucursal.sucursal,
        factor: `${sucursal.factor_multiplicador}x`,
        cantidadNumeroGanador: sucursal.cantidad_numero_ganador || 0,
        totalVendido: sucursal.total_vendido || 0,
        totalPagado: sucursal.total_pagado || 0,
        gananciaNeta: sucursal.ganancia_neta || 0
      })),
      totales: {
        sucursal: 'TOTAL GENERAL',
        factor: '-',
        cantidadNumeroGanador: this.getTotalCantidadNumeroGanador(),
        totalVendido: parseFloat(this.getTotalVendidoGeneral()),
        totalPagado: parseFloat(this.getTotalPagadoGeneral()),
        gananciaNeta: this.getGananciaTotalGeneral()
      }
    };

    return {
      // Información del reporte
      fechaReporte: fechaReporte,
      horaReporte: `${hora} ${periodo}`,
      filtroAplicado: filtroAplicado,

      // Datos principales
      dashboard: dashboardData,
      numerosPorSorteo: numerosPorSorteo,
      detallePorSucursales: detallePorSucursales
    };
  }

  // Método para exportar datos tal como se ven en el admin
  private prepareVisualReportData(): any {
    // Datos del dashboard tal como aparecen en la interfaz admin
    const totalVendidoGeneral = this.getTotalVendido();
    const totalPagadoGeneral = this.getTotalPagado();
    const gananciaNeta = totalVendidoGeneral - totalPagadoGeneral;

    // Usar timezone de Honduras para fecha y hora
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const fechaFormateada = this.supabaseService.formatHondurasDateTime(hondurasTime);
    const [fecha, horaCompleta] = fechaFormateada.split(' ');
    const hora = horaCompleta || '';
    const periodo = fechaFormateada.includes('AM') ? 'AM' : 'PM';

    // Descripción de filtros
    let filtrosAplicados = 'Todos los datos';
    if (this.fechaDesde && this.fechaHasta) {
      const fechaDesdeOnly = this.fechaDesde.split('T')[0];
      const fechaHastaOnly = this.fechaHasta.split('T')[0];
      filtrosAplicados = `Desde: ${fechaDesdeOnly} Hasta: ${fechaHastaOnly}`;
    } else if (this.selectedDate) {
      filtrosAplicados = `Fecha: ${this.selectedDate}`;
    }
    if (this.selectedSorteoFilter) {
      filtrosAplicados += ` - Sorteo: ${this.selectedSorteoFilter}`;
    }

    // 1. DASHBOARD CARDS (como aparecen arriba del admin)
    const dashboard = {
      totalVendido: totalVendidoGeneral,
      totalPagado: totalPagadoGeneral,
      gananciaNeta: gananciaNeta,
      ventasTotales: this.sales.length
    };

    // 2. NÚMEROS POR SORTEO (formato tablero como en el admin)
    const numerosPorSorteo = this.getNumbersSummaryBySorteoAndSucursal();

    // 3. DETALLE POR SUCURSALES (LA MÁS IMPORTANTE - exacto como tabla admin)
    let detallePorSucursales;

    if (this.resumenSucursales && this.resumenSucursales.length > 0) {
      // Usar datos existentes de resumenSucursales
      detallePorSucursales = {
        headers: ['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia Neta'],
        filas: this.resumenSucursales.map(resumen => [
          resumen.sucursal,
          `${resumen.factor_multiplicador || 70}x`,
          `L ${(resumen.total_vendido || 0).toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${(resumen.total_pagado || 0).toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${(resumen.ganancia_neta || 0).toLocaleString('es-HN', { minimumFractionDigits: 2 })}`
        ]),
        totales: [
          'TOTAL GENERAL',
          '',
          `L ${totalVendidoGeneral.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${totalPagadoGeneral.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${gananciaNeta.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`
        ]
      };
    } else {
      // Calcular desde las ventas actuales si no hay resumenSucursales
      const sucursalesMap = new Map();

      // Agrupar ventas por sucursal
      this.sales.forEach(sale => {
        const sucursal = sale.sucursal || 'Sin Sucursal';
        if (!sucursalesMap.has(sucursal)) {
          sucursalesMap.set(sucursal, {
            sucursal: sucursal,
            factor: 70, // Factor por defecto
            totalVendido: 0,
            totalPagado: 0,
            gananciaNeta: 0
          });
        }
        const data = sucursalesMap.get(sucursal);
        data.totalVendido += sale.total;

        // Calcular total pagado basado en sorteos cerrados
        const sorteoSchedule = this.sorteos.find(s => s.name === sale.sorteo);
        if (sorteoSchedule) {
          const sorteoData = this.getSorteoData(sorteoSchedule);
          if (sorteoData && sorteoData.cerrado && sorteoData.numeroGanador) {
            const saleDetails = this.getSaleDetails(sale.id);
            saleDetails.forEach(detail => {
              if (parseInt(detail.numero.toString()) === parseInt(sorteoData.numeroGanador || '0')) {
                data.totalPagado += detail.monto * (sorteoData.factorMultiplicador || 70);
              }
            });
          }
        }

        data.gananciaNeta = data.totalVendido - data.totalPagado;
      });

      const sucursalesArray = Array.from(sucursalesMap.values());

      detallePorSucursales = {
        headers: ['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia Neta'],
        filas: sucursalesArray.map(sucursal => [
          sucursal.sucursal,
          `${sucursal.factor}x`,
          `L ${sucursal.totalVendido.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${sucursal.totalPagado.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${sucursal.gananciaNeta.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`
        ]),
        totales: [
          'TOTAL GENERAL',
          '',
          `L ${totalVendidoGeneral.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${totalPagadoGeneral.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`,
          `L ${gananciaNeta.toLocaleString('es-HN', { minimumFractionDigits: 2 })}`
        ]
      };
    }

    return {
      fecha: fecha || hondurasTime.toLocaleDateString('es-HN'),
      hora: hora || hondurasTime.toLocaleTimeString('es-HN'),
      filtros: filtrosAplicados,
      dashboard: dashboard,
      numerosPorSorteo: numerosPorSorteo,
      detallePorSucursales: detallePorSucursales
    };
  }

  async downloadDailyReportExcel(): Promise<void> {
    try {
      this.isLoading = true;
      const reportData = this.prepareVisualReportData();
      await this.exportService.exportVisualToExcel(reportData, `reporte-admin-visual-${this.selectedDate}`);
      this.notificationService.showSuccess('Reporte Excel descargado exitosamente');
    } catch (error) {
      console.error('Error descargando reporte Excel:', error);
      this.notificationService.showError('Error al descargar el reporte Excel');
    } finally {
      this.isLoading = false;
    }
  }

  async downloadDailyReportPDF(): Promise<void> {
    try {
      this.isLoading = true;
      const reportData = this.prepareVisualReportData();
      await this.exportService.exportVisualToPDF(reportData, `reporte-admin-visual-${this.selectedDate}`);
      this.notificationService.showSuccess('Reporte PDF descargado exitosamente');
    } catch (error) {
      console.error('Error descargando reporte PDF:', error);
      this.notificationService.showError('Error al descargar el reporte PDF');
    } finally {
      this.isLoading = false;
    }
  }

  // ================== MÉTODOS PARA CIERRE DE CAJA POR SUCURSAL ==================

  async abrirModalCierreCaja(): Promise<void> {
    console.log('📖 Abriendo modal de cierre de caja - INICIO');
    const startTime = performance.now();

    // PASO 1: Apertura instantánea del modal (operación síncrona)
    this.showCierreCajaModal = true;
    console.log('✅ Modal visible:', performance.now() - startTime, 'ms');

    // PASO 2: Configuración básica (operaciones síncronas optimizadas)
    this.loadingCierreCaja = false;
    await this.cargarSucursalesDisponibles();
    // Optimizar la fecha - usar fecha simple sin conversión de zona horaria
    const hoy = new Date();
    this.fechaCierreSeleccionada = hoy; // Mantener como Date

    this.selectedSucursalForCierre = '';
    this.resumenCajaSucursal = null;
    this.sorteosPendientesPagoSucursal = [];
    this.movimientosCajaSucursal = [];

    console.log('✅ Configuración inicial completa:', performance.now() - startTime, 'ms');

    // PASO 3: Forzar detección de cambios para mostrar el modal inmediatamente
    this.cdr.detectChanges();
    console.log('✅ DetectChanges ejecutado:', performance.now() - startTime, 'ms');

    // PASO 4: Cargar sucursales en background (sin bloquear)

    console.log('📖 Modal abierto completamente:', performance.now() - startTime, 'ms');
  }



  private async cargarSucursalesDisponibles(): Promise<void> {
    try {
      const now = new Date();


      let usuarios = this.users;
      if (!usuarios?.length) {
        usuarios = await this.supabaseService.getAllUsers();
        this.users = usuarios; // opcional: cache usuarios obtenidos
      }

      const sucursalesSet = new Set<string>();

      for (const user of usuarios) {
        if (user.active && user.role === 'sucursal' && user.sucursal) {
          sucursalesSet.add(user.sucursal);
        }
      }

      this.sucursalesDisponibles = Array.from(sucursalesSet).sort();

      console.log('Sucursales cargadas y cacheadas:', this.sucursalesDisponibles);
    } catch (error) {
      console.error('Error al cargar sucursales:', error);
      this.sucursalesDisponibles = [];
    }
  }


  async onSucursalSeleccionada(): Promise<void> {
    if (!this.selectedSucursalForCierre) return;

    // Inicio inmediato del loader y limpieza visual
    this.loadingCierreCaja = true;
    this.resumenCajaSucursal = null;
    this.sorteosPendientesPagoSucursal = [];
    this.movimientosCajaSucursal = [];

    // Actualiza UI inmediatamente
    this.cdr.detectChanges();

    // Permite actualizar la interfaz antes de cargar datos pesados
    setTimeout(async () => {
      try {
        await this.cargarDatosCierreCajaSucursal();
      } catch (error) {
        console.error('Error al cargar datos de cierre de caja:', error);
        this.notificationService.showError('Error al cargar los datos de la sucursal');
      } finally {
        this.loadingCierreCaja = false;
        this.cdr.detectChanges();
      }
    }, 0);
  }


  // Función auxiliar para manejar timeout por consulta individual
  private async promiseConTimeout<T>(promise: Promise<T>, timeoutMs: number, errorMsg: string): Promise<T> {
    const timeoutPromise = new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(errorMsg)), timeoutMs)
    );
    return Promise.race([promise, timeoutPromise]);
  }

  private async cargarDatosCierreCajaSucursal(): Promise<void> {
    if (!this.selectedSucursalForCierre) return;

    try {
      const [resumenCaja, sorteosPendientes, movimientosCaja, cierreExistente] = await Promise.all([
        this.supabaseService.calcularResumenCajaDiario(
          this.fechaCierreSeleccionada,
          this.selectedSucursalForCierre
        ),
        this.supabaseService.obtenerSorteosPendientesPago(
          this.fechaCierreSeleccionada,
          this.selectedSucursalForCierre
        ),
        this.supabaseService.obtenerMovimientosCaja(
          this.fechaCierreSeleccionada,
          this.selectedSucursalForCierre
        ),
        this.supabaseService.obtenerCierreDiario(
          this.fechaCierreSeleccionada,
          this.selectedSucursalForCierre
        )
      ]);

      console.log('Datos de cierre de caja cargados exitosamente');

      this.resumenCajaSucursal = resumenCaja;
      this.sorteosPendientesPagoSucursal = sorteosPendientes;
      this.movimientosCajaSucursal = movimientosCaja;
      this.cierreExistenteSucursal = cierreExistente;

    } catch (error) {
      console.error('Error al cargar datos de cierre de caja:', error);

      this.resumenCajaSucursal = {
        total_vendido: 0,
        total_pagado: 0,
        total_neto: 0,
        movimientos_entrada: 0,
        movimientos_salida: 0,
        balance_final: 0
      };
      this.sorteosPendientesPagoSucursal = [];
      this.movimientosCajaSucursal = [];
      this.cierreExistenteSucursal = null;

      throw error;
    }
  }



  async onFechaCierreChange(): Promise<void> {
    if (this.selectedSucursalForCierre) {
      await this.onSucursalSeleccionada();
    }
  }

  cerrarModalCierreCaja(): void {
    console.log('📖 Cerrando modal de cierre de caja');
    const startTime = performance.now();

    // Cierre visual inmediato
    this.showCierreCajaModal = false;
    this.loadingCierreCaja = false;

    // Actualizar UI inmediatamente
    this.cdr.detectChanges();

    // Limpieza de datos después del cierre visual para mayor fluidez
    setTimeout(() => {
      this.selectedSucursalForCierre = '';
      this.resumenCajaSucursal = null;
      this.sorteosPendientesPagoSucursal = [];
      this.movimientosCajaSucursal = [];

      console.log('✅ Modal cerrado y datos limpiados:', performance.now() - startTime, 'ms');
    }, 0);
  }


  // Métodos de utilidad para el template (copiados del cierre-caja.component)
  formatearMontoSucursal(monto: number): string {
    return `L ${monto.toFixed(2)}`;
  }

  getTipoMovimientoTextoSucursal(tipo: string): string {
    return tipo === 'entrada' ? 'Entrada' : 'Salida';
  }

  getTipoMovimientoClassSucursal(tipo: string): string {
    return tipo === 'entrada' ? 'text-success' : 'text-danger';
  }

  // Método auxiliar para formatear fecha del cierre existente
  formatFechaCierre(cierre: any): string {
    if (!cierre) return '';
    const fecha = new Date(cierre.fecha_cierre || cierre.created_at);
    return fecha.toLocaleDateString('es-HN') + ' ' + fecha.toLocaleTimeString('es-HN', { hour: '2-digit', minute: '2-digit' });
  }

  async imprimirResumenCajaSucursal(): Promise<void> {
    if (!this.resumenCajaSucursal || !this.selectedSucursalForCierre) return;

    try {
      const contenido = this.generarContenidoReporteSucursal();
      await this.printService.printContent(contenido);
    } catch (error) {
      console.error('Error al imprimir:', error);
      this.notificationService.showError('Error al imprimir el reporte');
    }
  }

  private generarContenidoReporteSucursal(): string {
    const fecha = this.fechaCierreSeleccionada.toLocaleDateString('es-HN');
    const sucursal = this.selectedSucursalForCierre;

    let contenido = `
      <div style="font-family: monospace; max-width: 300px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>RESUMEN DE CAJA DIARIO</h2>
          <p>Fecha: ${fecha}</p>
          <p>Sucursal: ${sucursal}</p>
        </div>
        
        <div style="border-bottom: 1px solid #ccc; margin: 10px 0;">
          <h3>RESUMEN FINANCIERO</h3>
          <p>Total Vendido: L ${this.resumenCajaSucursal.total_vendido?.toFixed(2) || '0.00'}</p>
          <p>Total Pagado: L ${this.resumenCajaSucursal.total_pagado?.toFixed(2) || '0.00'}</p>
          <p>Ganancia Neta: L ${this.resumenCajaSucursal.total_neto?.toFixed(2) || '0.00'}</p>
        </div>
        
        <div style="border-bottom: 1px solid #ccc; margin: 10px 0;">
          <h3>MOVIMIENTOS DE CAJA</h3>
          <p>Entradas: L ${this.resumenCajaSucursal.movimientos_entrada?.toFixed(2) || '0.00'}</p>
          <p>Salidas: L ${this.resumenCajaSucursal.movimientos_salida?.toFixed(2) || '0.00'}</p>
          <p><strong>Balance Final: L ${this.resumenCajaSucursal.balance_final?.toFixed(2) || '0.00'}</strong></p>
        </div>
    `;

    // Agregar sorteos pendientes
    if (this.sorteosPendientesPagoSucursal.length > 0) {
      contenido += `
        <div style="border-bottom: 1px solid #ccc; margin: 10px 0;">
          <h3>SORTEOS PENDIENTES DE PAGO</h3>
      `;

      this.sorteosPendientesPagoSucursal.forEach(sorteo => {
        contenido += `
          <p>${sorteo.sorteo.toUpperCase()}: 
             Ganador ${sorteo.numero_ganador} - 
             A pagar: L ${sorteo.total_pagado?.toFixed(2) || '0.00'}
          </p>
        `;
      });

      contenido += `</div>`;
    }

    // Agregar movimientos del día
    if (this.movimientosCajaSucursal.length > 0) {
      contenido += `
        <div style="margin: 10px 0;">
          <h3>MOVIMIENTOS DEL DÍA</h3>
      `;

      this.movimientosCajaSucursal.forEach(mov => {
        const tipo = mov.tipo === 'entrada' ? 'ENTRADA' : 'SALIDA';
        const signo = mov.tipo === 'entrada' ? '+' : '-';
        contenido += `
          <p style="font-size: 12px;">
            ${tipo}: ${signo}L ${mov.monto.toFixed(2)}<br>
            ${mov.motivo}
          </p>
        `;
      });

      contenido += `</div>`;
    }

    contenido += `
        <div style="text-align: center; margin-top: 20px; font-size: 12px;">
          <p>Generado: ${new Date().toLocaleString('es-HN')}</p>
        </div>
      </div>
    `;

    return contenido;
  }

  // Función para reimprimir el cierre diario de una sucursal
  async imprimirCierreDiarioSucursal(): Promise<void> {
    if (!this.cierreExistenteSucursal || !this.selectedSucursalForCierre) {
      this.notificationService.showError('No hay cierre diario para reimprimir');
      return;
    }

    try {
      const contenido = this.generarContenidoCierreDiarioSucursal();
      await this.printService.printContent(contenido);
      this.notificationService.showSuccess('Cierre diario enviado a impresión');
    } catch (error) {
      console.error('Error al imprimir cierre diario:', error);
      this.notificationService.showError('Error al imprimir el cierre diario');
    }
  }

  // Función para generar el contenido del cierre diario de una sucursal
  private generarContenidoCierreDiarioSucursal(): string {
    const fecha = this.fechaCierreSeleccionada.toLocaleDateString('es-HN');
    const sucursal = this.selectedSucursalForCierre;
    const cierre = this.cierreExistenteSucursal;

    let contenido = `
      <div style="font-family: monospace; max-width: 300px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>🔒 CIERRE DIARIO OFICIAL</h2>
          <p><strong>Fecha:</strong> ${fecha}</p>
          <p><strong>Sucursal:</strong> ${sucursal}</p>
          <p><strong>Cerrado el:</strong> ${new Date(cierre.created_at || cierre.fecha_cierre || cierre.createdAt).toLocaleString('es-HN')}</p>
          <hr style="border: 2px solid #333;">
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💰 TOTALES OFICIALES</h3>
          <p><strong>Total Vendido:</strong> L ${(cierre.totalVendido || cierre.total_vendido)?.toFixed(2) || '0.00'}</p>
          <p><strong>Total Pagado:</strong> L ${(cierre.totalPagado || cierre.total_pagado)?.toFixed(2) || '0.00'}</p>
          <p><strong>Ganancia Neta:</strong> L ${(cierre.neto || cierre.total_neto || ((cierre.totalVendido || cierre.total_vendido || 0) - (cierre.totalPagado || cierre.total_pagado || 0)))?.toFixed(2) || '0.00'}</p>
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💵 CONTROL DE EFECTIVO</h3>
          <p><strong>Balance Calculado:</strong> L ${((cierre.neto || cierre.total_neto || ((cierre.totalVendido || cierre.total_vendido || 0) - (cierre.totalPagado || cierre.total_pagado || 0))) + (this.resumenCajaSucursal?.movimientos_entrada || 0) - (this.resumenCajaSucursal?.movimientos_salida || 0))?.toFixed(2) || '0.00'}</p>
          <p><strong>Efectivo Reportado:</strong> L ${(cierre.efectivoReportado || cierre.efectivo_reportado)?.toFixed(2) || '0.00'}</p>
          <p style="color: ${Math.abs(cierre.diferencia || 0) < 0.01 ? 'green' : 'red'}; font-weight: bold;">
            <strong>Diferencia:</strong> L ${(cierre.diferencia || 0)?.toFixed(2) || '0.00'}
          </p>
        </div>
    `;

    // Agregar resúmenes de sorteos si existen
    if (cierre.sorteosMañana || cierre.sorteosTarde || cierre.sorteosNoche || cierre.sorteos_manana || cierre.sorteos_tarde || cierre.sorteos_noche) {
      contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>🎰 RESUMEN DE SORTEOS</h3>
      `;

      const sorteoManana = cierre.sorteosMañana || cierre.sorteos_manana;
      if (sorteoManana) {
        contenido += `
          <p style="margin: 5px 0;">
            <strong>MAÑANA:</strong><br>
            Ganador: ${sorteoManana.numeroGanador || sorteoManana.numero_ganador || 'N/A'}<br>
            Vendido: L ${(sorteoManana.totalVendido || sorteoManana.total_vendido)?.toFixed(2) || '0.00'}<br>
            Pagado: L ${(sorteoManana.totalPagado || sorteoManana.total_pagado)?.toFixed(2) || '0.00'}
          </p>
        `;
      }

      const sorteoTarde = cierre.sorteosTarde || cierre.sorteos_tarde;
      if (sorteoTarde) {
        contenido += `
          <p style="margin: 5px 0;">
            <strong>TARDE:</strong><br>
            Ganador: ${sorteoTarde.numeroGanador || sorteoTarde.numero_ganador || 'N/A'}<br>
            Vendido: L ${(sorteoTarde.totalVendido || sorteoTarde.total_vendido)?.toFixed(2) || '0.00'}<br>
            Pagado: L ${(sorteoTarde.totalPagado || sorteoTarde.total_pagado)?.toFixed(2) || '0.00'}
          </p>
        `;
      }

      const sorteoNoche = cierre.sorteosNoche || cierre.sorteos_noche;
      if (sorteoNoche) {
        contenido += `
          <p style="margin: 5px 0;">
            <strong>NOCHE:</strong><br>
            Ganador: ${sorteoNoche.numeroGanador || sorteoNoche.numero_ganador || 'N/A'}<br>
            Vendido: L ${(sorteoNoche.totalVendido || sorteoNoche.total_vendido)?.toFixed(2) || '0.00'}<br>
            Pagado: L ${(sorteoNoche.totalPagado || sorteoNoche.total_pagado)?.toFixed(2) || '0.00'}
          </p>
        `;
      }

      contenido += `</div>`;
    }

    // Agregar movimientos del día si existen
    if (this.movimientosCajaSucursal.length > 0) {
      contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💸 MOVIMIENTOS DE CAJA</h3>
      `;

      this.movimientosCajaSucursal.forEach(mov => {
        const tipo = mov.tipo === 'entrada' ? 'ENTRADA' : 'SALIDA';
        const signo = mov.tipo === 'entrada' ? '+' : '-';
        contenido += `
          <p style="margin: 5px 0; font-size: 12px;">
            <strong>${tipo}:</strong> ${signo}L ${mov.monto.toFixed(2)}<br>
            ${mov.motivo}<br>
            <small>${new Date(mov.fecha).toLocaleTimeString('es-HN')}</small>
          </p>
        `;
      });

      contenido += `</div>`;
    }

    // Agregar notas si existen
    if (cierre.notas && cierre.notas.trim() !== '') {
      contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>📝 OBSERVACIONES</h3>
          <p style="font-style: italic;">${cierre.notas}</p>
        </div>
      `;
    }

    contenido += `
        <div style="text-align: center; margin-top: 20px; font-size: 12px; border-top: 2px solid #333; padding-top: 10px;">
          <p><strong>🔒 CIERRE OFICIAL</strong></p>
          <p><strong>DOCUMENTO OFICIAL</strong></p>
          <p>Reimpreso: ${new Date().toLocaleString('es-HN')}</p>
          <hr style="border: 1px solid #333;">
          <p>Sistema de Lotería - Admin</p>
        </div>
      </div>
    `;

    return contenido;
  }

}
