import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
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
      timeout(8000), // Aumentar timeout a 8 segundos
      map(user => {
        return !!user;
      }),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
        }
      }),
      catchError(error => {
        // Dar más tiempo antes de redirigir
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
