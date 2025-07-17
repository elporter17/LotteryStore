import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
      })
    );
  }
}
