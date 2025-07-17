import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f5f5;
    }
  `]
})
export class AppComponent implements OnInit {
  
  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Verificar estado de autenticación al iniciar
    this.supabaseService.currentUser$.subscribe(user => {
      if (!user && !this.router.url.includes('login')) {
        this.router.navigate(['/login']);
      }
    });
  }
}