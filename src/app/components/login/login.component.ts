import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <div class="card" style="max-width: 400px; margin: 100px auto;">
        <h2 class="text-center mb-3">Sistema de Lotería</h2>
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
    private router: Router
  ) { }

  ngOnInit(): void {
    // Verificar si ya hay un usuario logueado
    this.supabaseService.currentUser$.subscribe(user => {
      if (user) {
        this.redirectUser(user);
      }
    });
  }

  async onLogin(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      console.log('Iniciando login desde componente...');
      const user = await this.supabaseService.login(this.email, this.password);
      console.log('Resultado del login:', user);
      
      if (user) {
        console.log('Usuario logueado exitosamente, redirigiendo...');
        this.redirectUser(user);
      } else {
        console.log('Login falló - usuario es null');
        this.errorMessage = 'Credenciales inválidas';
      }
    } catch (error: any) {
      console.error('Error en login:', error);
      this.errorMessage = this.getErrorMessage(error);
    } finally {
      this.isLoading = false;
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
      default:
        return 'Error en el inicio de sesión';
    }
  }
}
