import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SupabaseService } from '../services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.supabaseService.currentUser$.pipe(
      timeout(8000), // Aumentar timeout a 8 segundos
      map(user => {
        console.log('AdminGuard - Usuario actual:', user);
        const isAdmin = user?.role === 'admin';
        console.log('AdminGuard - Es admin:', isAdmin, 'Role:', user?.role);
        return isAdmin;
      }),
      tap(isAdmin => {
        if (!isAdmin) {
          console.log('AdminGuard - No es admin, redirigiendo a sucursal');
          this.router.navigate(['/sucursal']);
        }
      }),
      catchError(error => {
        console.error('AdminGuard - Error o timeout:', error);
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
