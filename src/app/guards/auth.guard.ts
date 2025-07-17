import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SupabaseService } from '../services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.supabaseService.currentUser$.pipe(
      map(user => {
        console.log('AuthGuard - Usuario actual:', user);
        return !!user;
      }),
      tap(isAuthenticated => {
        console.log('AuthGuard - Autenticado:', isAuthenticated);
        if (!isAuthenticated) {
          console.log('AuthGuard - Redirigiendo a login');
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
