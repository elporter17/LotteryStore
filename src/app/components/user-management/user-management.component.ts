import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UserManagement } from '../../models/interfaces';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, OnDestroy {
  currentUser: any = null;
  users: UserManagement[] = [];
  isLoading: boolean = false;

  // Modal para crear/editar usuario
  showUserModal: boolean = false;
  isEditMode: boolean = false;
  selectedUser: UserManagement | null = null;

  // Formulario de usuario
  userForm = {
    email: '',
    password: '',
    confirmPassword: '',
    role: 'sucursal' as 'admin' | 'sucursal',
    sucursal: '',
    active: true
  };

  // Lista de sucursales predefinidas para autocompletado
  sucursalesSugeridas: string[] = [
    'Sucursal Central',
    'Sucursal Norte', 
    'Sucursal Sur',
    'Sucursal Este',
    'Sucursal Oeste'
  ];

  private userSubscription?: Subscription;

  constructor(
    private supabaseService: SupabaseService,
    private notificationService: NotificationService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'admin') {
        this.router.navigate(['/login']);
        return;
      }
    });

    this.loadUsers();
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  async loadUsers(): Promise<void> {
    console.log('loadUsers iniciado, isLoading:', this.isLoading);
    this.isLoading = true;
    try {
      console.log('Llamando getAllUsers...');
      this.users = await this.supabaseService.getAllUsers();
      console.log('Usuarios cargados:', this.users);
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
      this.notificationService.showError('Error al cargar usuarios');
    } finally {
      this.isLoading = false;
      console.log('loadUsers terminado, isLoading:', this.isLoading);
    }
  }

  openCreateUserModal(): void {
    this.isEditMode = false;
    this.selectedUser = null;
    this.resetForm();
    this.showUserModal = true;
    this.cdr.detectChanges();
  }

  openEditUserModal(user: UserManagement): void {
    this.isEditMode = true;
    this.selectedUser = user;
    this.userForm = {
      email: user.email,
      password: '', // No mostramos la contraseña actual
      confirmPassword: '',
      role: user.role,
      sucursal: user.sucursal || '',
      active: user.active
    };
    this.showUserModal = true;
    this.cdr.detectChanges(); // Forzar detección de cambios
  }

  closeUserModal(): void {
    this.showUserModal = false;
    this.resetForm();
    this.selectedUser = null;
    this.cdr.detectChanges(); // Forzar detección de cambios
  }

  goToMainMenu(): void {
    this.router.navigate(['/admin']);
  }

  resetForm(): void {
    this.userForm = {
      email: '',
      password: '',
      confirmPassword: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
  }

  async saveUser(): Promise<void> {
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;
    try {
      if (this.isEditMode && this.selectedUser) {
        // Actualizar usuario existente
        await this.supabaseService.updateExistingUser(this.selectedUser.id, {
          email: this.userForm.email,
          role: this.userForm.role as 'admin' | 'sucursal',
          sucursal: this.userForm.sucursal,
          active: this.userForm.active
        });

        // Si se proporcionó una nueva contraseña, actualizarla
        if (this.userForm.password && this.userForm.password.trim() !== '') {
          await this.supabaseService.updateUserPassword(this.selectedUser.id, this.userForm.password);
          this.notificationService.showSuccess('Usuario y contraseña actualizados exitosamente');
        } else {
          this.notificationService.showSuccess('Usuario actualizado exitosamente');
        }
      } else {
        // Crear nuevo usuario
        await this.supabaseService.createNewUser({
          email: this.userForm.email,
          role: this.userForm.role as 'admin' | 'sucursal',
          sucursal: this.userForm.sucursal,
          active: this.userForm.active
        });
        this.notificationService.showSuccess('Usuario creado exitosamente con contraseña temporal: LoteriaTemporal123!');
      }

      this.closeUserModal();
      await this.loadUsers();
    } catch (error: any) {
      this.notificationService.showError(error.message || 'Error al guardar usuario');
    } finally {
      this.isLoading = false;
    }
  }

  async deleteUser(user: UserManagement): Promise<void> {
    const confirmed = await this.notificationService.showConfirmation(
      'Eliminar usuario',
      `¿Está seguro que desea eliminar al usuario ${user.email}?`
    );

    if (!confirmed) return;

    this.isLoading = true;
    try {
      await this.supabaseService.deleteExistingUser(user.id);
      this.notificationService.showSuccess('Usuario eliminado exitosamente');
      await this.loadUsers();
    } catch (error: any) {
      this.notificationService.showError(error.message || 'Error al eliminar usuario');
    } finally {
      this.isLoading = false;
    }
  }

  async toggleUserStatus(user: UserManagement): Promise<void> {
    const newStatus = !user.active;
    const action = newStatus ? 'activar' : 'desactivar';
    
    const confirmed = await this.notificationService.showConfirmation(
      `${action.charAt(0).toUpperCase() + action.slice(1)} usuario`,
      `¿Está seguro que desea ${action} al usuario ${user.email}?`
    );

    if (!confirmed) return;

    this.isLoading = true;
    try {
      await this.supabaseService.toggleExistingUserStatus(user.id);
      this.notificationService.showSuccess(`Usuario ${action}ado exitosamente`);
      await this.loadUsers();
    } catch (error: any) {
      this.notificationService.showError(error.message || `Error al ${action} usuario`);
    } finally {
      this.isLoading = false;
    }
  }

  private validateForm(): boolean {
    if (!this.userForm.email) {
      this.notificationService.showError('El email es requerido');
      return false;
    }

    if (!this.isEditMode && !this.userForm.password) {
      this.notificationService.showError('La contraseña es requerida para usuarios nuevos');
      return false;
    }

    if (this.userForm.password && this.userForm.password.length < 6) {
      this.notificationService.showError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    if (this.userForm.password && this.userForm.password !== this.userForm.confirmPassword) {
      this.notificationService.showError('Las contraseñas no coinciden');
      return false;
    }

    if (this.userForm.role === 'sucursal' && !this.userForm.sucursal.trim()) {
      this.notificationService.showError('La sucursal es requerida para usuarios de tipo sucursal');
      return false;
    }

    return true;
  }

  getRoleLabel(role: string): string {
    return role === 'admin' ? 'Administrador' : 'Vendedor';
  }

  getStatusLabel(active: boolean): string {
    return active ? 'Activo' : 'Inactivo';
  }

  getStatusClass(active: boolean): string {
    return active ? 'status-active' : 'status-inactive';
  }

  // Función de trackBy para optimizar el rendimiento del ngFor
  trackByUserId(index: number, user: UserManagement): string {
    return user.id;
  }

}
