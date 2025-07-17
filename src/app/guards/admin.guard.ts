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
      timeout(5000), // 5 segundos timeout
      map(user => {
        console.log('AdminGuard - Usuario actual:', user);
        return user?.role === 'admin';
      }),
      tap(isAdmin => {
        console.log('AdminGuard - Es admin:', isAdmin);
        if (!isAdmin) {
          console.log('AdminGuard - Redirigiendo a login');
          this.router.navigate(['/login']);
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
