import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ResumenSorteosComponent } from './components/resumen-sorteos/resumen-sorteos.component';
import { CierreCajaComponent } from './components/cierre-caja/cierre-caja.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { SucursalGuard } from './guards/sucursal.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sucursal', component: SucursalComponent, canActivate: [AuthGuard] },
  { path: 'cierre-caja', component: CierreCajaComponent, canActivate: [AuthGuard, SucursalGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/users', component: UserManagementComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SucursalComponent,
    AdminComponent,
    UserManagementComponent,
    CierreCajaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ResumenSorteosComponent
  ],
  providers: [ AuthGuard, AdminGuard, SucursalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }