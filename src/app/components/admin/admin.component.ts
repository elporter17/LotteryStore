import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { NotificationService } from '../../services/notification.service';
import { PrintService } from '../../services/print.service';
import { ExportService } from '../../services/export.service';
import { Router } from '@angular/router';
import { SORTEO_SCHEDULES } from '../../models/interfaces';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Propiedades principales para el nuevo admin simplificado
  currentUser: any = null;
  isLoading: boolean = false;
  fechaHoy: Date = new Date();
  
  // Datos del día actual
  resumenGeneral: any = null;
  ventasPorSorteo: any = {};
  ventasPorSucursal: any = {};
  
  // Acordeones para organizar información
  showResumenGeneral: boolean = true;
  showVentasPorSorteo: boolean = false;
  showVentasPorSucursal: boolean = false;
  showGestionUsuarios: boolean = false;
  showGestionSorteos: boolean = false;

  // Datos para acordeones
  sorteos = SORTEO_SCHEDULES;
  users: any[] = [];
  sucursalesDisponibles: string[] = [];

  // Modales para gestión
  showUserModal: boolean = false;
  showPasswordModal: boolean = false;
  
  // Formularios
  editingUser: any = null;
  userFormData: any = {
    email: '',
    password: '',
    role: 'sucursal',
    sucursal: '',
    active: true
  };
  selectedUserForPassword: any = null;
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private supabaseService: SupabaseService,
    private notificationService: NotificationService,
    public printService: PrintService,
    private exportService: ExportService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // Inicializar fecha actual de Honduras
    this.fechaHoy = this.supabaseService.getHondurasDateTime();
  }

  ngOnInit(): void {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (user && user.role === 'admin') {
        this.cargarDatosDelDia();
        this.cargarSucursalesDisponibles();
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  cargarDatosDelDia() {
    this.isLoading = true;
    
    Promise.all([
      this.supabaseService.calcularResumenCajaDiaActual(),
      this.supabaseService.getVentasPorSorteoDelDia(),
      this.supabaseService.getVentasPorSucursalDelDia(),
      this.supabaseService.getUsers()
    ]).then(([resumen, ventasSorteo, ventasSucursal, usuarios]) => {
      this.resumenGeneral = resumen;
      this.ventasPorSorteo = ventasSorteo;
      this.ventasPorSucursal = ventasSucursal;
      this.users = usuarios;
      
      this.isLoading = false;
      console.log('Datos del día cargados:', {
        resumen: this.resumenGeneral,
        ventasSorteo: this.ventasPorSorteo,
        ventasSucursal: this.ventasPorSucursal
      });
    }).catch(error => {
      console.error('Error cargando datos del día:', error);
      this.notificationService.showError('Error al cargar los datos del día');
      this.isLoading = false;
    });
  }

  private async cargarSucursalesDisponibles(): Promise<void> {
    try {
      const usuarios = await this.supabaseService.getUsers();
      const sucursalesSet = new Set<string>();
      
      for (const user of usuarios) {
        if (user.active && user.role === 'sucursal' && user.sucursal) {
          sucursalesSet.add(user.sucursal);
        }
      }
      
      this.sucursalesDisponibles = Array.from(sucursalesSet).sort();
    } catch (error) {
      console.error('Error al cargar sucursales:', error);
      this.sucursalesDisponibles = [];
    }
  }

  refrescarDatos() {
    this.cargarDatosDelDia();
  }

  // Propiedades para totales
  get totalVentasPorSorteo(): number {
    return Object.values(this.ventasPorSorteo)
      .reduce((total: number, sorteo: any) => total + (sorteo.totalVendido || 0), 0);
  }

  get totalVentasPorSucursal(): number {
    return Object.values(this.ventasPorSucursal)
      .reduce((total: number, sucursal: any) => total + (sucursal.totalVendido || 0), 0);
  }

  // Métodos de accordion
  toggleResumenGeneral() {
    this.showResumenGeneral = !this.showResumenGeneral;
  }

  toggleVentasPorSorteo() {
    this.showVentasPorSorteo = !this.showVentasPorSorteo;
  }

  toggleVentasPorSucursal() {
    this.showVentasPorSucursal = !this.showVentasPorSucursal;
  }

  toggleGestionUsuarios() {
    this.showGestionUsuarios = !this.showGestionUsuarios;
  }

  toggleGestionSorteos() {
    this.showGestionSorteos = !this.showGestionSorteos;
  }

  // Métodos para ventas por sorteo
  getSorteosDelDia(): string[] {
    return Object.keys(this.ventasPorSorteo);
  }

  getVentasSorteo(sorteo: string): any {
    return this.ventasPorSorteo[sorteo] || { totalVendido: 0, cantidadVentas: 0, sucursales: {} };
  }

  // Métodos para ventas por sucursal
  getSucursalesDelDia(): string[] {
    return Object.keys(this.ventasPorSucursal);
  }

  getVentasSucursal(sucursal: string): any {
    return this.ventasPorSucursal[sucursal] || { totalVendido: 0, cantidadVentas: 0, sorteos: {} };
  }

  // Métodos para usuarios
  getUsuariosActivos(): any[] {
    return this.users.filter(user => user.active);
  }

  abrirModalUsuario() {
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

  editarUsuario(user: any) {
    this.editingUser = user;
    this.userFormData = {
      email: user.email,
      password: '',
      role: user.role,
      sucursal: user.sucursal || '',
      active: user.active
    };
    this.showUserModal = true;
  }

  cambiarPasswordUsuario(user: any) {
    this.selectedUserForPassword = user;
    this.newPassword = '';
    this.confirmPassword = '';
    this.showPasswordModal = true;
  }

  async guardarUsuario() {
    try {
      if (this.editingUser) {
        // Editar usuario existente - por ahora solo mostrar mensaje
        this.notificationService.showError('Funcionalidad de edición en desarrollo');
      } else {
        // Crear nuevo usuario
        await this.supabaseService.createNewUser(this.userFormData.email);
        this.notificationService.showSuccess('Usuario creado correctamente');
      }
      
      this.showUserModal = false;
      this.cargarDatosDelDia(); // Recargar usuarios
    } catch (error: any) {
      console.error('Error al guardar usuario:', error);
      this.notificationService.showError(error.message || 'Error al guardar usuario');
    }
  }

  async cambiarPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.notificationService.showError('Las contraseñas no coinciden');
      return;
    }

    if (this.newPassword.length < 6) {
      this.notificationService.showError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      // Por ahora, solo mostrar mensaje de funcionalidad en desarrollo
      this.notificationService.showError('Funcionalidad de cambio de contraseña en desarrollo');
      this.showPasswordModal = false;
    } catch (error: any) {
      console.error('Error al cambiar contraseña:', error);
      this.notificationService.showError(error.message || 'Error al cambiar contraseña');
    }
  }

  cerrarModalUsuario() {
    this.showUserModal = false;
    this.editingUser = null;
  }

  cerrarModalPassword() {
    this.showPasswordModal = false;
    this.selectedUserForPassword = null;
  }

  // Métodos para sorteos
  isSorteoOpen(sorteo: any): boolean {
    const now = new Date();
    const closeTime = new Date();
    const [hours, minutes] = sorteo.closeTime.split(':');
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    return now < closeTime;
  }

  // Navegación
  navigateToCierreCaja() {
    this.router.navigate(['/cierre-caja']);
  }

  logout() {
    this.supabaseService.logout();
    this.router.navigate(['/login']);
  }

  // Método auxiliar para Object.keys en el template
  Object = Object;
}
