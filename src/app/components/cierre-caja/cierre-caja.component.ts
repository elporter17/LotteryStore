import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { NotificationService } from '../../services/notification.service';
import { PrintService } from '../../services/print.service';
import {
    CierreDiario,
    MovimientoCaja,
    PagoSorteo,
    SorteoResumen,
    User
} from '../../models/interfaces';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cierre-caja',
    templateUrl: './cierre-caja.component.html',
    styleUrls: ['./cierre-caja.component.scss']
})
export class CierreCajaComponent implements OnInit, OnDestroy {
    currentUser: User | null = null;
    fechaHoy: Date = new Date();

    // Estado del cierre
    cierreExistente: CierreDiario | null = null;
    yaCerrado = false;

    // Datos del resumen
    resumenCaja: any = null;
    sorteosPendientesPago: any[] = [];
    sorteosPagados: string[] = []; // Array para llevar control de sorteos ya pagados
    movimientosDelDia: MovimientoCaja[] = [];

    // Modal states
    showPagoSorteoModal = false;
    showMovimientoModal = false;
    showCierreModal = false;
    showConfirmPagoModal = false;

    // Formularios
    sorteoParaPago: PagoSorteo | null = null;
    nuevoMovimiento: Partial<MovimientoCaja> = {
        tipo: 'entrada',
        motivo: '',
        monto: 0
    };
    datosConfirmPago = {
        nombreReceptor: '',
        montoExacto: 0
    };

    // Cierre final
    datosCierre = {
        efectivoReportado: 0,
        notas: ''
    };

    // Loading states
    loading = false;
    procesandoPago = false;

    private subscriptions: Subscription[] = [];

    constructor(
        private supabaseService: SupabaseService,
        private notificationService: NotificationService,
        private printService: PrintService,
        private cdr: ChangeDetectorRef
        
    ) { }

    async ngOnInit(): Promise<void> {
        try {
            this.loading = true;
            this.currentUser = await this.supabaseService.getCurrentUser();

            if (!this.currentUser || this.currentUser.role !== 'sucursal') {
                this.notificationService.showError('Acceso denegado. Solo usuarios de sucursal pueden acceder.');
                return;
            }

            await this.cargarDatosDelDia();
        } catch (error) {
            console.error('Error al inicializar cierre de caja:', error);
            this.notificationService.showError('Error al cargar los datos del día');
        } finally {
            this.loading = false;
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    private async cargarDatosDelDia(): Promise<void> {
        if (!this.currentUser?.sucursal) return;

        try {
            // Verificar si ya existe un cierre para hoy
            this.cierreExistente = await this.supabaseService.obtenerCierreDiario(
                this.fechaHoy,
                this.currentUser.sucursal
            );
            this.yaCerrado = !!this.cierreExistente;

            // Cargar resumen de caja
            this.resumenCaja = await this.supabaseService.calcularResumenCajaDiario(
                this.fechaHoy,
                this.currentUser.sucursal
            );

            // Cargar sorteos pendientes de pago
            this.sorteosPendientesPago = await this.supabaseService.obtenerSorteosPendientesPago(
                this.fechaHoy,
                this.currentUser.sucursal
            );

            // Cargar movimientos del día
            this.movimientosDelDia = await this.supabaseService.obtenerMovimientosCaja(
                this.fechaHoy,
                this.currentUser.sucursal
            );

            // Identificar sorteos ya pagados basándose en los movimientos
            this.identificarSorteosPagados();

            // Forzar actualización de la UI después de cargar todos los datos
            this.cdr.markForCheck();

        } catch (error) {
            console.error('Error al cargar datos del día:', error);
            throw error;
        }
    }

    // ================== PAGO DE SORTEOS ==================

    async abrirModalPagoSorteo(sorteo: any): Promise<void> {
        try {
            // Obtener venta específica del número ganador
            let ventaPorNumero = 0;
            if (sorteo.numero_ganador && this.currentUser?.sucursal) {
                const resumenSorteo = await this.supabaseService.obtenerResumenSorteo(
                    this.fechaHoy,
                    this.currentUser.sucursal,
                    sorteo.sorteo
                );
                ventaPorNumero = resumenSorteo?.ventaPorNumero || 0;
            }

            this.sorteoParaPago = {
                sorteoId: sorteo.id,
                numeroGanador: sorteo.numero_ganador,
                factor: sorteo.factor_multiplicador,
                ventaPorNumero,
                totalVendido: sorteo.total_vendido,
                totalPagar: sorteo.total_pagado,
                totalNeto: sorteo.ganancia_neta,
                sucursal: this.currentUser!.sucursal!
            };
            this.showPagoSorteoModal = true;
            this.cdr.markForCheck(); // Usar markForCheck en lugar de detectChanges
        } catch (error) {
            console.error('Error al cargar datos del sorteo:', error);
            this.notificationService.showError('Error al cargar información del sorteo');
        }
    }

    confirmarPagoSorteo(): void {
        if (!this.sorteoParaPago) return;

        console.log('Confirmando pago sorteo:', this.sorteoParaPago);
        this.datosConfirmPago.montoExacto = this.sorteoParaPago.totalPagar;
        this.showPagoSorteoModal = false;
        this.showConfirmPagoModal = true;
        
        console.log('Datos confirm pago:', this.datosConfirmPago);
        console.log('Modal confirm pago abierto:', this.showConfirmPagoModal);
        
        this.cdr.markForCheck(); // Usar markForCheck
        
        // Forzar actualización después de un breve momento
        setTimeout(() => {
            this.updateButtonValidation();
        }, 100);
    }

    // Getter para validar pago de sorteo
    get puedeConfirmarPago(): boolean {
        const montoValido = !!(this.datosConfirmPago.montoExacto && this.datosConfirmPago.montoExacto > 0);
        const noProcesando = !this.procesandoPago;
        
        const result = montoValido && noProcesando;
        
        console.log('Validación pago sorteo:', {
            montoExacto: this.datosConfirmPago.montoExacto,
            montoValido,
            procesandoPago: this.procesandoPago,
            noProcesando,
            resultado: result
        });
        
        return result;
    }

    async procesarPagoSorteo(): Promise<void> {
        if (!this.sorteoParaPago || !this.currentUser) return;

        try {
            this.procesandoPago = true;

            // Registrar movimiento de salida de efectivo
            const movimiento: Partial<MovimientoCaja> = {
                tipo: 'salida',
                motivo: `Pago premio sorteo ${this.sorteoParaPago.sorteoId} - Número ganador: ${this.sorteoParaPago.numeroGanador}`,
                monto: this.datosConfirmPago.montoExacto,
                usuarioId: this.currentUser.id,
                sorteoId: this.sorteoParaPago.sorteoId,
                fecha: new Date(),
                sucursal: this.currentUser.sucursal!,
                nombreReceptor: this.datosConfirmPago.nombreReceptor || undefined
            };

            await this.supabaseService.registrarMovimientoCaja(movimiento);

            // Marcar sorteo como pagado en el componente
            this.marcarSorteoPagado(this.sorteoParaPago.sorteoId);

            this.notificationService.showSuccess(
                `Pago registrado: L ${this.datosConfirmPago.montoExacto.toFixed(2)}`
            );

            // Limpiar y recargar
            this.cerrarModalConfirmPago();
            await this.cargarDatosDelDia();

        } catch (error) {
            console.error('Error al procesar pago:', error);
            this.notificationService.showError('Error al registrar el pago');
        } finally {
            this.procesandoPago = false;
            this.cdr.detectChanges(); // Forzar actualización final
        }
    }

    cerrarModalPagoSorteo(): void {
        console.log('Cerrando modal pago sorteo');
        console.log('Estado del modal:', this.showPagoSorteoModal);
        this.showPagoSorteoModal = false;
        this.sorteoParaPago = null;
         this.cdr.detectChanges();
        console.log('Modal cerrado, estado:', this.showPagoSorteoModal);
    }

    cerrarModalConfirmPago(): void {
        this.showConfirmPagoModal = false;
        this.datosConfirmPago = {
            nombreReceptor: '',
            montoExacto: 0
        };
        this.cdr.detectChanges(); // Forzar actualización de la UI
    }

    // ================== MOVIMIENTOS DE CAJA ==================

    abrirModalMovimiento(tipo: 'entrada' | 'salida'): void {
        console.log('Abriendo modal movimiento:', tipo);
        this.nuevoMovimiento = {
            tipo,
            motivo: '',
            monto: undefined
        };
        this.showMovimientoModal = true;
        this.cdr.markForCheck(); // Usar markForCheck
        
        // Forzar actualización después de un breve momento
        setTimeout(() => {
            this.updateButtonValidation();
        }, 100);
        
        console.log('Modal state:', this.showMovimientoModal);
        console.log('Nuevo movimiento:', this.nuevoMovimiento);
    }

    // Getter para la validación del botón
    get puedeRegistrarMovimiento(): boolean {
        const motivo = this.nuevoMovimiento.motivo;
        const monto = this.nuevoMovimiento.monto;

        // Validar motivo
        const motivoValido = !!(motivo && motivo.toString().trim().length > 0);

        // Validar monto - puede ser number o string que se convierte a number
        let montoValido = false;
        if (monto !== null && monto !== undefined) {
            const montoNum = typeof monto === 'number' ? monto : parseFloat(String(monto));
            montoValido = !isNaN(montoNum) && montoNum > 0;
        }

        const result = motivoValido && montoValido;

        console.log('Validación movimiento mejorada:', {
            motivo: motivo,
            monto: monto,
            motivoValido,
            montoValido,
            resultado: result
        });

        return result;
    }


    async registrarMovimiento(): Promise<void> {
        if (!this.currentUser || !this.puedeRegistrarMovimiento) {
            this.notificationService.showError('Complete todos los campos requeridos');
            return;
        }

        try {
            const movimiento: Partial<MovimientoCaja> = {
                ...this.nuevoMovimiento,
                usuarioId: this.currentUser.id,
                fecha: new Date(),
                sucursal: this.currentUser.sucursal!
            };

            await this.supabaseService.registrarMovimientoCaja(movimiento);

            this.notificationService.showSuccess(
                `${this.nuevoMovimiento.tipo === 'entrada' ? 'Ingreso' : 'Salida'} registrado: L ${this.nuevoMovimiento.monto?.toFixed(2)}`
            );

            this.cerrarModalMovimiento();
            await this.cargarDatosDelDia();

        } catch (error) {
            console.error('Error al registrar movimiento:', error);
            this.notificationService.showError('Error al registrar el movimiento');
        } finally {
            this.cdr.detectChanges(); // Forzar actualización final
        }
    }

    cerrarModalMovimiento(): void {
        console.log('Cerrando modal movimiento');
        this.showMovimientoModal = false;
        this.nuevoMovimiento = {
            tipo: 'entrada',
            motivo: '',
            monto: undefined
        };
        this.cdr.detectChanges(); // Forzar actualización de la UI
        console.log('Modal cerrado, state:', this.showMovimientoModal);
    }

    // ================== CIERRE DIARIO ==================

    abrirModalCierre(): void {
        if (!this.resumenCaja) return;

        // Asegurar que el cierre use exactamente los mismos valores que el resumen
        this.sincronizarValoresConResumen();
        this.showCierreModal = true;
        this.cdr.detectChanges(); // Forzar actualización de la UI
    }

    // Método para sincronizar valores del cierre con el resumen del día
    private sincronizarValoresConResumen(): void {
        if (!this.resumenCaja) return;

        // El efectivo reportado debe coincidir exactamente con el balance final del resumen
        this.datosCierre.efectivoReportado = this.resumenCaja.balance_final || 0;
        
        console.log('Valores sincronizados del resumen al cierre:', {
            totalVendido: this.resumenCaja.total_vendido,
            totalPagado: this.resumenCaja.total_pagado,
            totalNeto: this.resumenCaja.total_neto,
            movimientosEntrada: this.resumenCaja.movimientos_entrada,
            movimientosSalida: this.resumenCaja.movimientos_salida,
            balanceFinal: this.resumenCaja.balance_final,
            efectivoReportado: this.datosCierre.efectivoReportado
        });
    }

    // Getter para validar cierre diario
    get puedeRealizarCierre(): boolean {
        return !!(this.datosCierre.efectivoReportado !== undefined && 
            this.datosCierre.efectivoReportado !== null &&
            !isNaN(this.datosCierre.efectivoReportado) &&
            !this.loading);
    }

    async realizarCierreDiario(): Promise<void> {
        if (!this.currentUser || !this.resumenCaja) return;

        try {
            this.loading = true;

            const diferencia = this.datosCierre.efectivoReportado - this.resumenCaja.balance_final;

            // Obtener resúmenes de sorteos
            const sorteosMañana = await this.obtenerResumenSorteo('mañana');
            const sorteosTarde = await this.obtenerResumenSorteo('tarde');
            const sorteosNoche = await this.obtenerResumenSorteo('noche');

            // Usar exactamente los mismos valores del resumen para garantizar consistencia
            const cierre: Partial<CierreDiario> = {
                fecha: this.fechaHoy,
                usuarioId: this.currentUser.id,
                sucursal: this.currentUser.sucursal!,
                totalVendido: this.resumenCaja.total_vendido,
                totalPagado: this.resumenCaja.total_pagado,
                neto: this.resumenCaja.total_neto,
                efectivoReportado: this.datosCierre.efectivoReportado,
                diferencia,
                notas: this.datosCierre.notas,
                sorteosMañana,
                sorteosTarde,
                sorteosNoche
            };

            console.log('Datos del cierre a registrar:', cierre);

            await this.supabaseService.registrarCierreDiario(cierre);

            this.notificationService.showSuccess('Cierre diario registrado exitosamente');

            this.cerrarModalCierre();
            await this.cargarDatosDelDia();

        } catch (error) {
            console.error('Error al realizar cierre:', error);
            this.notificationService.showError('Error al registrar el cierre diario');
        } finally {
            this.loading = false;
            this.cdr.detectChanges(); // Forzar actualización final
        }
    }

    private async obtenerResumenSorteo(sorteo: string): Promise<SorteoResumen | undefined> {
        if (!this.currentUser?.sucursal) return undefined;

        try {
            const resumen = await this.supabaseService.obtenerResumenSorteo(
                this.fechaHoy,
                this.currentUser.sucursal,
                sorteo
            );
            return resumen;
        } catch (error) {
            console.warn(`No se pudo obtener resumen del sorteo ${sorteo}:`, error);
            return undefined;
        }
    }

    cerrarModalCierre(): void {
        this.showCierreModal = false;
        this.datosCierre = {
            efectivoReportado: 0,
            notas: ''
        };
        this.cdr.detectChanges(); // Forzar actualización de la UI
    }

    // ================== IMPRESIÓN ==================

    async imprimirResumenCaja(): Promise<void> {
        if (!this.currentUser || !this.resumenCaja) return;

        try {
            const contenido = this.generarContenidoResumenDia();
            await this.printService.printContent(contenido);
            this.notificationService.showSuccess('Resumen del día enviado a impresión');
        } catch (error) {
            console.error('Error al imprimir resumen del día:', error);
            this.notificationService.showError('Error al imprimir el resumen del día');
        }
    }

    async imprimirCierreDiario(): Promise<void> {
        if (!this.currentUser || !this.cierreExistente) {
            this.notificationService.showError('No hay cierre diario para reimprimir');
            return;
        }

        try {
            const contenido = this.generarContenidoCierreDiarioSucursal();
            await this.printService.printContent(contenido);
            this.notificationService.showSuccess('Cierre diario enviado a impresión');
        } catch (error) {
            console.error('Error al imprimir cierre diario:', error);
            this.notificationService.showError('Error al imprimir el cierre diario');
        }
    }

    // Método para generar contenido del resumen del día (antes del cierre)
    private generarContenidoResumenDia(): string {
        const fecha = this.fechaHoy.toLocaleDateString('es-HN');
        const sucursal = this.currentUser?.sucursal || '';

        let contenido = `
      <div style="font-family: monospace; max-width: 300px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>📊 RESUMEN DEL DÍA</h2>
          <p><strong>Fecha:</strong> ${fecha}</p>
          <p><strong>Sucursal:</strong> ${sucursal}</p>
          <hr style="border: 1px solid #333;">
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💰 RESUMEN FINANCIERO</h3>
          <p><strong>Total Vendido:</strong> L ${this.resumenCaja.total_vendido?.toFixed(2) || '0.00'}</p>
          <p><strong>Total Pagado:</strong> L ${this.resumenCaja.total_pagado?.toFixed(2) || '0.00'}</p>
          <p><strong>Ganancia Neta:</strong> L ${this.resumenCaja.total_neto?.toFixed(2) || '0.00'}</p>
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💸 MOVIMIENTOS DE CAJA</h3>
          <p><strong>Entradas Extra:</strong> L ${this.resumenCaja.movimientos_entrada?.toFixed(2) || '0.00'}</p>
          <p><strong>Salidas Extra:</strong> L ${this.resumenCaja.movimientos_salida?.toFixed(2) || '0.00'}</p>
          <p style="border-top: 1px solid #333; padding-top: 5px; font-weight: bold;">
            <strong>BALANCE FINAL:</strong> L ${this.resumenCaja.balance_final?.toFixed(2) || '0.00'}
          </p>
        </div>
    `;

        // Agregar sorteos pendientes
        if (this.sorteosPendientesPago.length > 0) {
            contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>🎰 SORTEOS PENDIENTES DE PAGO</h3>
      `;

            this.sorteosPendientesPago.forEach(sorteo => {
                contenido += `
          <p style="margin: 5px 0;">
            <strong>${sorteo.sorteo.toUpperCase()}:</strong><br>
            Ganador: ${sorteo.numero_ganador}<br>
            A pagar: L ${sorteo.total_pagado?.toFixed(2) || '0.00'}
          </p>
        `;
            });

            contenido += `</div>`;
        }

        contenido += `
        <div style="text-align: center; margin-top: 20px; font-size: 12px; border-top: 2px solid #333; padding-top: 10px;">
          <p><strong>📄 RESUMEN DEL DÍA</strong></p>
          <p>Generado: ${new Date().toLocaleString('es-HN')}</p>
        </div>
      </div>
    `;

        return contenido;
    }

    // Método para generar contenido del cierre diario (después del cierre)
    private generarContenidoCierreDiario(): string {
        const fecha = this.fechaHoy.toLocaleDateString('es-HN');
        const sucursal = this.currentUser?.sucursal || '';
        const cierre = this.cierreExistente!;

        let contenido = `
      <div style="font-family: monospace; max-width: 300px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>🔒 CIERRE DIARIO OFICIAL</h2>
          <p><strong>Fecha:</strong> ${fecha}</p>
          <p><strong>Sucursal:</strong> ${sucursal}</p>
          <p><strong>Cerrado el:</strong> ${cierre.createdAt.toLocaleString('es-HN')}</p>
          <hr style="border: 2px solid #333;">
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💰 TOTALES OFICIALES</h3>
          <p><strong>Total Vendido:</strong> L ${cierre.totalVendido?.toFixed(2) || '0.00'}</p>
          <p><strong>Total Pagado:</strong> L ${cierre.totalPagado?.toFixed(2) || '0.00'}</p>
          <p><strong>Ganancia Neta:</strong> L ${cierre.neto?.toFixed(2) || '0.00'}</p>
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💵 CONTROL DE EFECTIVO</h3>
          <p><strong>Balance Calculado:</strong> L ${(cierre.neto + (this.resumenCaja?.movimientos_entrada || 0) - (this.resumenCaja?.movimientos_salida || 0))?.toFixed(2) || '0.00'}</p>
          <p><strong>Efectivo Reportado:</strong> L ${cierre.efectivoReportado?.toFixed(2) || '0.00'}</p>
          <p style="color: ${Math.abs(cierre.diferencia || 0) < 0.01 ? 'green' : 'red'}; font-weight: bold;">
            <strong>Diferencia:</strong> L ${cierre.diferencia?.toFixed(2) || '0.00'}
          </p>
        </div>
    `;

        // Agregar resúmenes de sorteos si existen
        if (cierre.sorteosMañana || cierre.sorteosTarde || cierre.sorteosNoche) {
            contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>🎰 RESUMEN DE SORTEOS</h3>
      `;

            if (cierre.sorteosMañana) {
                contenido += `
          <p style="margin: 5px 0;">
            <strong>MAÑANA:</strong><br>
            Ganador: ${cierre.sorteosMañana.numeroGanador || 'N/A'}<br>
            Vendido: L ${cierre.sorteosMañana.totalVendido?.toFixed(2) || '0.00'}<br>
            Pagado: L ${cierre.sorteosMañana.totalPagado?.toFixed(2) || '0.00'}
          </p>
        `;
            }

            if (cierre.sorteosTarde) {
                contenido += `
          <p style="margin: 5px 0;">
            <strong>TARDE:</strong><br>
            Ganador: ${cierre.sorteosTarde.numeroGanador || 'N/A'}<br>
            Vendido: L ${cierre.sorteosTarde.totalVendido?.toFixed(2) || '0.00'}<br>
            Pagado: L ${cierre.sorteosTarde.totalPagado?.toFixed(2) || '0.00'}
          </p>
        `;
            }

            if (cierre.sorteosNoche) {
                contenido += `
          <p style="margin: 5px 0;">
            <strong>NOCHE:</strong><br>
            Ganador: ${cierre.sorteosNoche.numeroGanador || 'N/A'}<br>
            Vendido: L ${cierre.sorteosNoche.totalVendido?.toFixed(2) || '0.00'}<br>
            Pagado: L ${cierre.sorteosNoche.totalPagado?.toFixed(2) || '0.00'}
          </p>
        `;
            }

            contenido += `</div>`;
        }

        // Agregar notas si existen
        if (cierre.notas && cierre.notas.trim() !== '') {
            contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>📝 OBSERVACIONES</h3>
          <p style="font-style: italic;">${cierre.notas}</p>
        </div>
      `;
        }

        contenido += `
        <div style="text-align: center; margin-top: 20px; font-size: 12px; border-top: 2px solid #333; padding-top: 10px;">
          <p><strong>🔒 CIERRE OFICIAL</strong></p>
          <p><strong>DOCUMENTO OFICIAL</strong></p>
          <p>Reimpreso: ${new Date().toLocaleString('es-HN')}</p>
        </div>
      </div>
    `;

        return contenido;
    }

     private generarContenidoCierreDiarioSucursal(): string {
      const fecha = this.fechaHoy.toLocaleDateString('es-HN');
        const sucursal = this.currentUser?.sucursal || '';
        const cierre = this.cierreExistente!;

    let contenido = `
      <div style="font-family: monospace; max-width: 300px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>🔒 CIERRE DIARIO OFICIAL</h2>
          <p><strong>Fecha:</strong> ${fecha}</p>
          <p><strong>Sucursal:</strong> ${sucursal}</p>
          <p><strong>Cerrado el:</strong> ${new Date(cierre.createdAt || cierre.fecha || cierre.createdAt).toLocaleString('es-HN')}</p>
          <hr style="border: 2px solid #333;">
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💰 TOTALES OFICIALES</h3>
          <p><strong>Total Vendido:</strong> L ${(cierre.totalVendido || cierre.totalVendido)?.toFixed(2) || '0.00'}</p>
          <p><strong>Total Pagado:</strong> L ${(cierre.totalPagado || cierre.totalPagado)?.toFixed(2) || '0.00'}</p>
          <p><strong>Ganancia Neta:</strong> L ${(cierre.neto || cierre.neto || ((cierre.totalVendido || cierre.totalVendido || 0) - (cierre.totalPagado || cierre.totalPagado || 0)))?.toFixed(2) || '0.00'}</p>
        </div>
        
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💵 CONTROL DE EFECTIVO</h3>
          <p><strong>Balance Calculado:</strong> L ${((cierre.neto || cierre.neto || ((cierre.totalVendido || cierre.totalVendido || 0) - (cierre.totalPagado || cierre.totalPagado || 0))) + (this.resumenCaja?.movimientos_entrada || 0) - (this.resumenCaja?.movimientos_salida || 0))?.toFixed(2) || '0.00'}</p>
          <p><strong>Efectivo Reportado:</strong> L ${(cierre.efectivoReportado || cierre.efectivoReportado)?.toFixed(2) || '0.00'}</p>
          <p style="color: ${Math.abs(cierre.diferencia || 0) < 0.01 ? 'green' : 'red'}; font-weight: bold;">
            <strong>Diferencia:</strong> L ${(cierre.diferencia || 0)?.toFixed(2) || '0.00'}
          </p>
        </div>
    `;

    // Agregar resúmenes de sorteos si existen
    if (cierre.sorteosMañana || cierre.sorteosTarde || cierre.sorteosNoche || cierre.sorteosMañana || cierre.sorteosTarde || cierre.sorteosNoche) {
      contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>🎰 RESUMEN DE SORTEOS</h3>
      `;

      const sorteoManana = cierre.sorteosMañana || cierre.sorteosMañana;
      if (sorteoManana) {
        contenido += `
          <p style="margin: 5px 0;">
            <strong>MAÑANA:</strong><br>
            Ganador: ${sorteoManana.numeroGanador || sorteoManana.numeroGanador || 'N/A'}<br>
            Vendido: L ${(sorteoManana.totalVendido || sorteoManana.totalVendido)?.toFixed(2) || '0.00'}<br>
            Pagado: L ${(sorteoManana.totalPagado || sorteoManana.totalPagado)?.toFixed(2) || '0.00'}
          </p>
        `;
      }

      const sorteoTarde = cierre.sorteosTarde || cierre.sorteosTarde;
      if (sorteoTarde) {
        contenido += `
          <p style="margin: 5px 0;">
            <strong>TARDE:</strong><br>
            Ganador: ${sorteoTarde.numeroGanador || sorteoTarde.numeroGanador || 'N/A'}<br>
            Vendido: L ${(sorteoTarde.totalVendido || sorteoTarde.totalVendido)?.toFixed(2) || '0.00'}<br>
            Pagado: L ${(sorteoTarde.totalPagado || sorteoTarde.totalPagado)?.toFixed(2) || '0.00'}
          </p>
        `;
      }

      const sorteoNoche = cierre.sorteosNoche || cierre.sorteosNoche;
      if (sorteoNoche) {
        contenido += `
          <p style="margin: 5px 0;">
            <strong>NOCHE:</strong><br>
            Ganador: ${sorteoNoche.numeroGanador || sorteoNoche.numeroGanador || 'N/A'}<br>
            Vendido: L ${(sorteoNoche.totalVendido || sorteoNoche.totalVendido)?.toFixed(2) || '0.00'}<br>
            Pagado: L ${(sorteoNoche.totalPagado || sorteoNoche.totalPagado)?.toFixed(2) || '0.00'}
          </p>
        `;
      }

      contenido += `</div>`;
    }

    // Agregar movimientos del día si existen
    if (this.movimientosDelDia.length > 0) {
      contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>💸 MOVIMIENTOS DE CAJA</h3>
      `;

      this.movimientosDelDia.forEach(mov => {
        const tipo = mov.tipo === 'entrada' ? 'ENTRADA' : 'SALIDA';
        const signo = mov.tipo === 'entrada' ? '+' : '-';
        contenido += `
          <p style="margin: 5px 0; font-size: 12px;">
            <strong>${tipo}:</strong> ${signo}L ${mov.monto.toFixed(2)}<br>
            ${mov.motivo}<br>
            <small>${new Date(mov.fecha).toLocaleTimeString('es-HN')}</small>
          </p>
        `;
      });

      contenido += `</div>`;
    }

    // Agregar notas si existen
    if (cierre.notas && cierre.notas.trim() !== '') {
      contenido += `
        <div style="border-bottom: 2px solid #333; margin: 15px 0; padding-bottom: 10px;">
          <h3>📝 OBSERVACIONES</h3>
          <p style="font-style: italic;">${cierre.notas}</p>
        </div>
      `;
    }

    contenido += `
        <div style="text-align: center; margin-top: 20px; font-size: 12px; border-top: 2px solid #333; padding-top: 10px;">
          <p><strong>🔒 CIERRE OFICIAL</strong></p>
          <p><strong>DOCUMENTO OFICIAL</strong></p>
          <p>Reimpreso: ${new Date().toLocaleString('es-HN')}</p>
          <hr style="border: 1px solid #333;">
          <p>Sistema de Venta - Admin</p>
        </div>
      </div>
    `;

    return contenido;
  }

    // Método heredado para compatibilidad (genera contenido básico)
    private generarContenidoReporte(): string {
        return this.generarContenidoResumenDia();
    }

    // ================== UTILIDADES ==================

    // Método para identificar sorteos ya pagados basándose en los movimientos del día
    private identificarSorteosPagados(): void {
        this.sorteosPagados = [];
        
        // Buscar movimientos de tipo 'salida' que contengan 'Pago premio sorteo' en el motivo
        this.movimientosDelDia.forEach(movimiento => {
            if (movimiento.tipo === 'salida' && 
                movimiento.motivo && 
                movimiento.motivo.includes('Pago premio sorteo') &&
                movimiento.sorteoId) {
                
                if (!this.sorteosPagados.includes(movimiento.sorteoId)) {
                    this.sorteosPagados.push(movimiento.sorteoId);
                }
            }
        });
        
        console.log('Sorteos identificados como pagados:', this.sorteosPagados);
    }

    // Método para verificar si un sorteo ya fue pagado
    isSorteoPagado(sorteoId: string): boolean {
        return this.sorteosPagados.includes(sorteoId);
    }

    // Método para marcar un sorteo como pagado
    marcarSorteoPagado(sorteoId: string): void {
        if (!this.sorteosPagados.includes(sorteoId)) {
            this.sorteosPagados.push(sorteoId);
            console.log('Sorteo marcado como pagado:', sorteoId);
            console.log('Sorteos pagados actuales:', this.sorteosPagados);
        }
    }

    get diferenciaCaja(): number {
        if (!this.resumenCaja) return 0;
        return this.datosCierre.efectivoReportado - this.resumenCaja.balance_final;
    }

    get hayDiferencia(): boolean {
        return Math.abs(this.diferenciaCaja) > 0.01; // Tolerancia de 1 centavo
    }

    getAbsDiferencia(): number {
        return Math.abs(this.diferenciaCaja);
    }

    formatearMonto(monto: number): string {
        return `L ${monto.toFixed(2)}`;
    }

    getTipoMovimientoTexto(tipo: string): string {
        return tipo === 'entrada' ? 'Entrada' : 'Salida';
    }

    getTipoMovimientoClass(tipo: string): string {
        return tipo === 'entrada' ? 'text-success' : 'text-danger';
    }

    // ================== MÉTODOS DE ACTUALIZACIÓN DE UI ==================

    // Método para forzar actualización cuando cambian los valores del formulario
    onFormValueChange(): void {
        console.log('Form value changed - forzando actualización');
        // Usar tanto markForCheck como detectChanges para asegurar actualización
        this.cdr.markForCheck();
        setTimeout(() => {
            this.cdr.detectChanges();
        }, 0);
    }

    // Método para actualizar validaciones de botones
    updateButtonValidation(): void {
        console.log('Actualizando validación de botones');
        // Forzar re-evaluación de getters con un pequeño delay
        setTimeout(() => {
            this.cdr.markForCheck();
            this.cdr.detectChanges();
        }, 10);
    }

    // Método para debugging del estado de los modales
    logModalState(): void {
        console.log('Estado actual de modales:', {
            showPagoSorteoModal: this.showPagoSorteoModal,
            showMovimientoModal: this.showMovimientoModal,
            showCierreModal: this.showCierreModal,
            showConfirmPagoModal: this.showConfirmPagoModal,
            puedeRegistrarMovimiento: this.puedeRegistrarMovimiento,
            puedeConfirmarPago: this.puedeConfirmarPago,
            puedeRealizarCierre: this.puedeRealizarCierre,
            nuevoMovimiento: this.nuevoMovimiento,
            datosConfirmPago: this.datosConfirmPago,
            datosCierre: this.datosCierre
        });
    }

    // Método para debugging específico de formularios
    debugFormularios(): void {
        console.log('=== DEBUG FORMULARIOS ===');
        console.log('Nuevo Movimiento:', this.nuevoMovimiento);
        console.log('Puede Registrar:', this.puedeRegistrarMovimiento);
        console.log('Datos Confirm Pago:', this.datosConfirmPago);
        console.log('Puede Confirmar Pago:', this.puedeConfirmarPago);
        console.log('Datos Cierre:', this.datosCierre);
        console.log('Puede Realizar Cierre:', this.puedeRealizarCierre);
        console.log('=== SORTEOS PAGADOS ===');
        console.log('Sorteos Pagados:', this.sorteosPagados);
        console.log('Sorteos Pendientes:', this.sorteosPendientesPago);
        this.sorteosPendientesPago.forEach(sorteo => {
            console.log(`Sorteo ${sorteo.id} (${sorteo.sorteo}): ${this.isSorteoPagado(sorteo.id) ? 'PAGADO' : 'PENDIENTE'}`);
        });
        console.log('========================');
    }
}
