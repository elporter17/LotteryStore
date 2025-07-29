import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <div class="card" style="max-width: 400px; margin: 100px auto;">
        <h2 class="text-center mb-3">Sistema de Venta</h2>
        <form (ngSubmit)="onLogin()" #loginForm="ngForm">
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="form-control" 
              [(ngModel)]="email" 
              required>
          </div>
          
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              class="form-control" 
              [(ngModel)]="password" 
              required>
          </div>
          
          <div class="alert alert-danger" *ngIf="errorMessage">
            {{ errorMessage }}
          </div>
          
          <button 
            type="submit" 
            class="btn btn-primary w-100" 
            [disabled]="!loginForm.valid || isLoading">
            {{ isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .w-100 {
      width: 100%;
    }
  `]
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private supabaseService: SupabaseService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Verificar si ya hay un usuario logueado con timeout
    this.supabaseService.currentUser$.subscribe(user => {
      if (user) {
        this.redirectUser(user);
      }
    });
  }

  async onLogin(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';
    this.notificationService.showLoading('Iniciando sesión...');

    try {
      
      // Usar timeout para evitar que se cuelgue el login
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Login timeout')), 10000); // 10 segundos
      });
      
      const loginPromise = this.supabaseService.login(this.email, this.password);
      
      const user = await Promise.race([loginPromise, timeoutPromise]) as any;
      
      
      if (user) {
        this.redirectUser(user);
      } else {
        this.errorMessage = 'Credenciales inválidas';
      }
    } catch (error: any) {
      this.errorMessage = this.getErrorMessage(error);
    } finally {
      this.isLoading = false;
      this.notificationService.hideLoading();
    }
  }

  private redirectUser(user: any): void {
    if (user.role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/sucursal']);
    }
  }

  private getErrorMessage(error: any): string {
    switch (error.message) {
      case 'Invalid login credentials':
        return 'Credenciales inválidas';
      case 'Email not confirmed':
        return 'Email no confirmado';
      case 'Too many requests':
        return 'Demasiados intentos, intenta más tarde';
      case 'Login timeout':
        return 'Tiempo de espera agotado, intenta de nuevo';
      default:
        return 'Error en el inicio de sesión';
    }
  }
}
