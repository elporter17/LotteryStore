import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User as SupabaseUser } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { User, Sale, SaleDetail, Sorteo, SorteoSchedule, SORTEO_SCHEDULES, SucursalFactor } from '../models/interfaces';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { format, parseISO } from 'date-fns';
import { toZonedTime, fromZonedTime, formatInTimeZone } from 'date-fns-tz';
import { es } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Subject para comunicación entre componentes
  public resumenUpdateSubject = new Subject<void>();

  // Getter para acceso directo al cliente Supabase
  get client(): SupabaseClient {
    return this.supabase;
  }



  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);

    // Inicializar sesión existente
    this.initializeSession();

    // Escuchar cambios en la autenticación
    this.supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user && session.user.email) {
        // Obtener sucursal del metadata si existe, sino usar método por email
        const userMetadata = (session.user as any).user_metadata || {};
        const rawMetadata = (session.user as any).raw_user_meta_data || {};
        const metaSucursal = userMetadata.sucursal || rawMetadata.sucursal;
        const metaRole = userMetadata.role || rawMetadata.role;

        const userData: User = {
          id: session.user.id,
          email: session.user.email,
          role: metaRole || (session.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
          sucursal: metaSucursal || this.getSucursalFromEmail(session.user.email),
          active: true,
          createdAt: new Date()
        };

        this.currentUserSubject.next(userData);
      } else {
        this.currentUserSubject.next(null);
      }
    });
  }

  // Inicializar sesión existente
  private async initializeSession(): Promise<void> {
    try {
      const { data: { session }, error } = await this.supabase.auth.getSession();

      if (error) {
        this.currentUserSubject.next(null);
        return;
      }

      if (session?.user && session.user.email) {
        // Obtener sucursal del metadata si existe, sino usar método por email
        const userMetadata = (session.user as any).user_metadata || {};
        const rawMetadata = (session.user as any).raw_user_meta_data || {};
        const metaSucursal = userMetadata.sucursal || rawMetadata.sucursal;
        const metaRole = userMetadata.role || rawMetadata.role;

        const userData: User = {
          id: session.user.id,
          email: session.user.email,
          role: metaRole || (session.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
          sucursal: metaSucursal || this.getSucursalFromEmail(session.user.email),
          active: true,
          createdAt: new Date()
        };

        this.currentUserSubject.next(userData);
      } else {
        this.currentUserSubject.next(null);
      }
    } catch (error) {
      this.currentUserSubject.next(null);
    }
  }

  // Cargar datos del usuario en segundo plano
  private async loadUserDataInBackground(uid: string): Promise<void> {
    try {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Background load timeout')), 5000);
      });

      const queryPromise = this.supabase
        .from('users')
        .select('*')
        .eq('id', uid)
        .single();

      const { data, error } = await Promise.race([queryPromise, timeoutPromise]) as any;

      if (data && !error) {
        const updatedUser: User = {
          id: data.id,
          email: data.email,
          role: data.role,
          sucursal: data.sucursal,
          active: data.active,
          createdAt: new Date(data.created_at)
        };
        this.currentUserSubject.next(updatedUser);
      }
    } catch (error) {
      // No hacer nada, mantener los datos por defecto
    }
  }

  // Autenticación
  async login(email: string, password: string): Promise<User | null> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        throw error;
      }

      if (data.user && data.user.email) {
        // Obtener sucursal del metadata si existe, sino usar método por email
        const userMetadata = (data.user as any).user_metadata || {};
        const rawMetadata = (data.user as any).raw_user_meta_data || {};
        const metaSucursal = userMetadata.sucursal || rawMetadata.sucursal;
        const metaRole = userMetadata.role || rawMetadata.role;

        const userData: User = {
          id: data.user.id,
          email: data.user.email,
          role: metaRole || (data.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
          sucursal: metaSucursal || this.getSucursalFromEmail(data.user.email),
          active: true,
          createdAt: new Date()
        };

        this.currentUserSubject.next(userData);
        return userData;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  private getSucursalFromEmail(email: string): string {
    if (email === 'gerencia@loteria.com') return '';
    if (email.includes('venta1')) return 'Sucursal 1';
    if (email.includes('venta2')) return 'Sucursal 2';
    if (email.includes('venta3')) return 'Sucursal 3';
    if (email.includes('venta4')) return 'Sucursal 4';
    return 'Principal';
  }

  async logout(): Promise<void> {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  // Verificar conexión a la base de datos
  async testConnection(): Promise<boolean> {
    try {
      const { data, error } = await this.supabase
        .from('usuarios')
        .select('count')
        .limit(1);

      return !error;
    } catch (error) {
      return false;
    }
  }

  // Usuarios
  async getUserData(uid: string): Promise<User | null> {
    try {
      // Primero obtener datos básicos de auth
      const { data: authUser, error: authError } = await this.supabase.auth.getUser();

      if (authError || !authUser.user) {
        return null;
      }

      // Datos por defecto usando auth
      const defaultUserData: User = {
        id: authUser.user.id,
        email: authUser.user.email || '',
        role: 'sucursal' as const,
        sucursal: 'Principal',
        active: true,
        createdAt: new Date()
      };

      // Intentar obtener datos de la tabla users con timeout muy corto
      try {
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Database timeout')), 1000); // 1 segundo timeout
        });

        const queryPromise = this.supabase
          .from('users')
          .select('*')
          .eq('id', uid)
          .single();

        const { data, error } = await Promise.race([queryPromise, timeoutPromise]) as any;

        if (data && !error) {
          return {
            id: data.id,
            email: data.email,
            role: data.role,
            sucursal: data.sucursal,
            active: data.active,
            createdAt: new Date(data.created_at)
          } as User;
        }
      } catch (dbError) {
        // Error/timeout consultando tabla users, usar datos por defecto
      }

      return defaultUserData;

    } catch (error) {
      return null;
    }
  }

  // Ventas
  async getNextCorrelativo(sucursal: string): Promise<number> {
    try {
      // Obtener el correlativo más alto para esta sucursal en el día actual
      const today = new Date();
      const startOfDay = new Date(today);
      const endOfDay = new Date(today);

      startOfDay.setHours(0, 0, 0, 0);
      endOfDay.setHours(23, 59, 59, 999);

      const startStr = this.formatLocalDateForSupabase(startOfDay);
      const endStr = this.formatLocalDateForSupabase(endOfDay);



      console
      // Obtener solo las del día actual
      const { data, error } = await this.supabase
        .from('sales')
        .select('correlativo, fecha, created_at')
        .eq('sucursal', sucursal)
        .gte('fecha', startStr)
        .lte('fecha', endStr)
        .order('correlativo', { ascending: false })
        .limit(1);

      if (error) {
        throw error;
      }

      const nextCorrelativo = data && data.length > 0 ? (data[0].correlativo || 0) + 1 : 1;

      return nextCorrelativo;
    } catch (error) {
      // En caso de error, usar 1 como fallback
      return 1;
    }
  }

  async createSale(sale: Omit<Sale, 'id' | 'createdAt'>): Promise<string> {
    try {
      // Obtener fecha/hora actual en Honduras

      const formatted = this.formatLocalDateForSupabase(new Date());

      const saleData = {
        user_id: sale.userId,
        sucursal: sale.sucursal,
        sorteo: sale.sorteo,
        fecha: formatted,
        total: sale.total,
        numero_recibo: sale.numeroRecibo,
        correlativo: sale.correlativo,
        created_at: formatted
      };

      const { data, error } = await this.supabase
        .from('sales')
        .insert([saleData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data.id;
    } catch (error) {
      throw error;
    }
  }

  async createSaleDetail(detail: Omit<SaleDetail, 'id'>): Promise<string> {
    try {
      // Validar que los datos sean válidos
      if (detail.numero === null || detail.numero === undefined) {
        throw new Error('Número no puede ser null o undefined');
      }

      if (detail.monto === null || detail.monto === undefined || detail.monto <= 0) {
        throw new Error('Monto debe ser mayor a 0');
      }

      // Convertir el número a string con formato de 2 dígitos (00, 01, 02, etc.)
      const numeroString = detail.numero.toString().padStart(2, '0');

      const detailData = {
        sale_id: detail.saleId,
        numero: numeroString,  // Enviar como string
        monto: Number(detail.monto)
      };

      const { data, error } = await this.supabase
        .from('sale_details')
        .insert([detailData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data.id;
    } catch (error) {
      throw error;
    }
  }



  async getSalesByDateAndSorteo(fecha: Date, sorteo: string): Promise<Sale[]> {
    try {
      // Usar los nuevos métodos para obtener inicio y final del día en Honduras
      const startOfDayStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(fecha));
      const endOfDayStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(fecha));

      let query = this.supabase
        .from('sales')
        .select('*')
        .gte('fecha', startOfDayStr)
        .lte('fecha', endOfDayStr)
        .order('created_at', { ascending: false });

      if (sorteo && sorteo.trim() !== '') {
        query = query.eq('sorteo', sorteo);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      if (!data || data.length === 0) {
        return [];
      }

      const mappedSales = data.map(sale => ({
        id: sale.id,
        userId: sale.user_id,
        sucursal: sale.sucursal,
        sorteo: sale.sorteo,
        fecha: this.parseDateFromDatabase(sale.fecha), // Convertir a hora Honduras
        total: sale.total,
        numeroRecibo: sale.numero_recibo || sale.id.slice(-6),
        correlativo: sale.correlativo || 0,
        createdAt: this.parseDateFromDatabase(sale.created_at) // Convertir a hora Honduras
      })) as Sale[];

      return mappedSales;
    } catch (error) {
      return [];
    }
  }

  async getSaleDetails(saleId: string): Promise<SaleDetail[]> {
    try {
      const { data, error } = await this.supabase
        .from('sale_details')
        .select('*')
        .eq('sale_id', saleId);

      if (error) throw error;

      return data.map(detail => ({
        id: detail.id,
        saleId: detail.sale_id,
        numero: parseInt(detail.numero), // Convertir string a número para la interfaz
        monto: detail.monto
      })) as SaleDetail[];
    } catch (error) {
      return [];
    }
  }

  // Sorteos
  async createOrUpdateSorteo(sorteo: Omit<Sorteo, 'id'>): Promise<string> {
    try {
      const sorteoId = `${this.formatDateOnlyForSupabase(sorteo.fecha)}-${sorteo.sorteo}`;

      // Asegurar formato de string para numero_ganador
      const numeroGanadorString = (sorteo.numeroGanador ?? '').toString().padStart(2, '0');

      const sorteoData = {
        id: sorteoId,
        fecha: this.formatLocalDateForSupabase(sorteo.fecha),
        sorteo: sorteo.sorteo,
        hora_cierre: this.formatLocalDateForSupabase(sorteo.horaCierre),
        numero_ganador: numeroGanadorString,
        factor_multiplicador: sorteo.factorMultiplicador,
        total_vendido: sorteo.totalVendido,
        total_pagado: sorteo.totalPagado,
        ganancia_neta: sorteo.gananciaNeta,
        cerrado: sorteo.cerrado
      };

      const { data, error } = await this.supabase
        .from('sorteos')
        .upsert([sorteoData])
        .select()
        .single();

      if (error) throw error;

      return data.id;
    } catch (error) {
      throw error;
    }
  }

  async getSorteo(fecha: Date, sorteo: string): Promise<Sorteo | null> {
    try {
      const sorteoId = `${this.formatDateOnlyForSupabase(fecha)}-${sorteo}`;
      const { data, error } = await this.supabase
        .from('sorteos')
        .select('*')
        .eq('id', sorteoId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No se encontró el registro
          return null;
        }
        throw error;
      }

      return {
        id: data.id,
        fecha: new Date(data.fecha),
        sorteo: data.sorteo,
        horaCierre: new Date(data.hora_cierre),
        // Mantener como string ya que numero_ganador es tipo text
        numeroGanador: data.numero_ganador || '',
        factorMultiplicador: data.factor_multiplicador,
        totalVendido: data.total_vendido,
        totalPagado: data.total_pagado,
        gananciaNeta: data.ganancia_neta,
        cerrado: data.cerrado
      } as Sorteo;
    } catch (error) {
      return null;
    }
  }

  // Método específico para verificar si un sorteo existe por ID (maneja múltiples sucursales)
  async getSorteoById(sorteoId: string): Promise<Sorteo | null> {
    try {
      const { data, error } = await this.supabase
        .from('sorteos')
        .select('*')
        .eq('id', sorteoId);

      if (error) {
        // Si es un error de permisos (406, RLS), lanzar para manejo especial
        if (error.code === '42501' || error.details?.includes('permission denied')) {
          throw { ...error, isRLSError: true };
        }
        throw error;
      }

      if (!data || data.length === 0) {
        return null;
      }

      // Si hay múltiples sucursales, usar la primera para mostrar datos básicos
      const firstRecord = data[0];

      return {
        id: firstRecord.id,
        fecha: new Date(firstRecord.fecha),
        sorteo: firstRecord.sorteo,
        horaCierre: new Date(firstRecord.hora_cierre),
        numeroGanador: firstRecord.numero_ganador || '',
        factorMultiplicador: firstRecord.factor_multiplicador,
        totalVendido: firstRecord.total_vendido,
        totalPagado: firstRecord.total_pagado,
        gananciaNeta: firstRecord.ganancia_neta,
        cerrado: firstRecord.cerrado,
        sucursal: firstRecord.sucursal
      } as Sorteo;
    } catch (error) {
      throw error;
    }
  }

  // Nuevo método para obtener resumen de todas las sucursales de un sorteo
  async getSorteoResumenPorSucursal(sorteoId: string): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('sorteos')
        .select('sucursal, numero_ganador, factor_multiplicador, total_vendido, total_pagado, ganancia_neta')
        .eq('id', sorteoId)
        .order('sucursal');

      if (error) {
        console.error('Error al obtener resumen por sucursal:', error);
        return [];
      }

      // Enriquecer datos con cantidad del número ganador
      const enrichedData = await Promise.all((data || []).map(async (sorteo) => {
        const cantidadNumeroGanador = await this.getCantidadNumeroGanadorPorSucursal(
          sorteoId, 
          sorteo.sucursal, 
          sorteo.numero_ganador
        );
        
        return {
          ...sorteo,
          cantidad_numero_ganador: cantidadNumeroGanador
        };
      }));

      return enrichedData;
    } catch (error) {
      console.error('Error al obtener resumen por sucursal:', error);
      return [];
    }
  }

  // Método auxiliar para obtener la cantidad comprada del número ganador por sucursal
  private async getCantidadNumeroGanadorPorSucursal(
    sorteoId: string, 
    sucursal: string, 
    numeroGanador: string
  ): Promise<number> {
    try {
      // Usar la función SQL optimizada
      const { data, error } = await this.supabase
        .rpc('get_cantidad_numero_ganador_por_sucursal', {
          p_sorteo_id: sorteoId,
          p_sucursal: sucursal,
          p_numero_ganador: numeroGanador
        });

      if (error) {
        console.error('Error en función SQL get_cantidad_numero_ganador_por_sucursal:', error);
        return 0;
      }

      return data || 0;
    } catch (error) {
      console.error('Error al obtener cantidad del número ganador:', error);
      return 0;
    }
  }

  // Método alternativo que usa una consulta sin RLS estricto
  async getSorteoByIdSimple(sorteoId: string): Promise<any> {
    try {
      const { data, error } = await this.supabase
        .rpc('get_sorteo_simple', { sorteo_id: sorteoId });

      if (error) {
        return null;
      }

      return data;
    } catch (error) {
      return null;
    }
  }

  // Método específico para insertar un nuevo sorteo
  async insertNewSorteo(sorteoId: string, numeroGanador: string, factorMultiplicador: number): Promise<void> {
    try {

      const numeroString = numeroGanador.toString().padStart(2, '0');
      const hondurasDateTime = this.getHondurasDateTime();

      const { error } = await this.supabase
        .from('sorteos')
        .insert({
          id: sorteoId,
          fecha: this.formatLocalDateForSupabase(hondurasDateTime),
          sorteo: sorteoId.split('-').slice(1).join('-'),
          hora_cierre: this.formatLocalDateForSupabase(hondurasDateTime),
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          total_vendido: 0,
          total_pagado: 0,
          ganancia_neta: 0,
          cerrado: true
        });

      if (error) {
        throw error;
      }

    } catch (error) {
      throw error;
    }
  }

  async updateSorteoWinner(sorteoId: string, numeroGanador: string, factorMultiplicador: number): Promise<void> {
    try {

      // Asegurar formato de 2 dígitos si es número
      const numeroString = numeroGanador.toString().padStart(2, '0');

      // Primero intentar hacer un update simple
      const { data: existingData, error: selectError } = await this.supabase
        .from('sorteos')
        .select('id')
        .eq('id', sorteoId)
        .single();

      if (selectError && selectError.code !== 'PGRST116') {
        throw selectError;
      }

      let result;

      if (existingData) {
        // El sorteo existe, hacer update
        result = await this.supabase
          .from('sorteos')
          .update({
            numero_ganador: numeroString,
            factor_multiplicador: factorMultiplicador,
            cerrado: true
          })
          .eq('id', sorteoId);
      } else {
        // El sorteo no existe, hacer insert con las columnas correctas
        const hondurasDateTime = this.getHondurasDateTime();
        result = await this.supabase
          .from('sorteos')
          .insert({
            id: sorteoId,
            fecha: this.formatLocalDateForSupabase(hondurasDateTime),
            sorteo: sorteoId.split('-').slice(1).join('-'), // Extraer nombre del sorteo
            hora_cierre: this.formatLocalDateForSupabase(hondurasDateTime),
            numero_ganador: numeroString,
            factor_multiplicador: factorMultiplicador,
            total_vendido: 0,
            total_pagado: 0,
            ganancia_neta: 0,
            cerrado: true
          });
      }

      if (result.error) {
        throw result.error;
      }


    } catch (error) {
      throw error;
    }
  }

  async createSorteo(sorteoId: string, sorteoName: string, fecha: Date): Promise<void> {
    try {
      const hondurasDateTime = this.getHondurasDateTime();

      const { error } = await this.supabase
        .from('sorteos')
        .insert({
          id: sorteoId,
          fecha: this.formatLocalDateForSupabase(hondurasDateTime),
          sorteo: sorteoName,
          hora_cierre: this.formatLocalDateForSupabase(hondurasDateTime),
          numero_ganador: null,
          factor_multiplicador: 70,
          total_vendido: 0,
          total_pagado: 0,
          ganancia_neta: 0,
          cerrado: false
        });

      if (error) throw error;
    } catch (error) {
      throw error;
    }
  }

  // Método super optimizado para obtener datos agregados de sorteos con una sola consulta
  async getVentasPorSorteoOptimizado(fecha: Date, sucursal: string): Promise<any> {
    try {
      console.log('Obteniendo ventas súper optimizadas para fecha:', fecha, 'sucursal:', sucursal);

      const fechaStr = this.formatDateOnlyForSupabase(fecha);

      // Intentar primera función RPC optimizada
      const { data, error } = await this.supabase.rpc('get_resumen_sorteos_optimizado', {
        p_fecha: fechaStr,
        p_sucursal: sucursal
      });

      if (error) {
        console.log('Función RPC completa no disponible, intentando función simple...', error.message);
        // Fallback a función RPC simple
        return await this.getVentasPorSorteoRPCSimple(fecha, sucursal);
      }

      // Procesar resultado de la función RPC completa
      const sorteoResumen: any = {
        manana: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        tarde: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        noche: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 }
      };

      if (data && data.length > 0) {
        data.forEach((row: any) => {
          const sorteoKey = row.sorteo?.toLowerCase() as 'manana' | 'tarde' | 'noche';
          if (sorteoResumen[sorteoKey]) {
            sorteoResumen[sorteoKey].totalVendido = parseFloat(row.total_vendido) || 0;
            sorteoResumen[sorteoKey].numeroGanador = row.numero_ganador ? parseInt(row.numero_ganador) : null;
            sorteoResumen[sorteoKey].factor = row.factor_multiplicador || 70;
            sorteoResumen[sorteoKey].totalPagar = parseFloat(row.total_pagar) || 0;

            // Agregar números vendidos si están disponibles
            if (row.numeros_vendidos && typeof row.numeros_vendidos === 'object') {
              sorteoResumen[sorteoKey].numerosVendidos = row.numeros_vendidos;
            }
          }
        });
      }

      console.log('Datos de sorteos súper optimizados cargados:', sorteoResumen);
      return sorteoResumen;

    } catch (error) {
      console.error('Error en getVentasPorSorteoOptimizado:', error);
      // Fallback en caso de error
      return await this.getVentasPorSorteoRPCSimple(fecha, sucursal);
    }
  }

  // Método fallback con función RPC simple
  private async getVentasPorSorteoRPCSimple(fecha: Date, sucursal: string): Promise<any> {
    try {
      const fechaStr = this.formatDateOnlyForSupabase(fecha);

      // Usar función RPC simple sin agregación compleja
      const { data, error } = await this.supabase.rpc('get_resumen_sorteos_simple', {
        p_fecha: fechaStr,
        p_sucursal: sucursal
      });

      if (error) {
        console.log('Función RPC simple no disponible, usando consultas básicas...', error.message);
        return await this.getVentasPorSorteoBasico(fecha, sucursal);
      }

      const sorteoResumen: any = {
        manana: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        tarde: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        noche: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 }
      };

      if (data && data.length > 0) {
        data.forEach((row: any) => {
          const sorteoKey = row.sorteo?.toLowerCase() as 'manana' | 'tarde' | 'noche';
          if (sorteoResumen[sorteoKey]) {
            sorteoResumen[sorteoKey].totalVendido = parseFloat(row.total_vendido) || 0;
            sorteoResumen[sorteoKey].numeroGanador = row.numero_ganador ? parseInt(row.numero_ganador) : null;
            sorteoResumen[sorteoKey].factor = row.factor_multiplicador || 70;
            sorteoResumen[sorteoKey].totalPagar = parseFloat(row.total_pagar) || 0;
            // Los números vendidos se cargarán lazy cuando se necesiten
          }
        });
      }

      console.log('Datos básicos de sorteos cargados:', sorteoResumen);
      return sorteoResumen;
    } catch (error) {
      console.error('Error en función RPC simple:', error);
      return await this.getVentasPorSorteoBasico(fecha, sucursal);
    }
  }

  // Método fallback con vista materializada o consultas directas
  private async getVentasPorSorteoFallback(fecha: Date, sucursal: string): Promise<any> {
    try {
      const fechaStr = this.formatDateOnlyForSupabase(fecha);

      // Intentar usar vista materializada si existe
      const { data: resumenData, error: resumenError } = await this.supabase
        .from('vista_resumen_sorteos')
        .select('sorteo, total_vendido, numero_ganador, factor_multiplicador, total_pagar, numeros_vendidos')
        .eq('fecha', fechaStr)
        .eq('sucursal', sucursal);

      if (resumenError) {
        console.log('Vista materializada no disponible, usando consultas básicas...', resumenError.message);
        return await this.getVentasPorSorteoBasico(fecha, sucursal);
      }

      // Procesar datos de la vista
      const sorteoResumen: any = {
        manana: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        tarde: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        noche: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 }
      };

      resumenData?.forEach((row: any) => {
        const sorteoKey = row.sorteo?.toLowerCase() as 'manana' | 'tarde' | 'noche';
        if (sorteoResumen[sorteoKey]) {
          sorteoResumen[sorteoKey] = {
            totalVendido: parseFloat(row.total_vendido) || 0,
            numerosVendidos: row.numeros_vendidos && typeof row.numeros_vendidos === 'object' ? row.numeros_vendidos : {},
            numeroGanador: row.numero_ganador ? parseInt(row.numero_ganador) : null,
            totalPagar: parseFloat(row.total_pagar) || 0,
            factor: row.factor_multiplicador || 70
          };
        }
      });

      console.log('Datos de vista materializada cargados:', sorteoResumen);
      return sorteoResumen;
    } catch (error) {
      console.error('Error en vista materializada:', error);
      return await this.getVentasPorSorteoBasico(fecha, sucursal);
    }
  }

  // Método básico súper optimizado - solo totales, sin números individuales
  private async getVentasPorSorteoBasico(fecha: Date, sucursal: string): Promise<any> {
    try {
      const fechaStr = this.formatDateOnlyForSupabase(fecha);

      // Una sola consulta para obtener todos los totales de una vez
      const { data: totalesData, error: totalesError } = await this.supabase
        .from('sales')
        .select('sorteo, total.sum()')
        .eq('fecha', fechaStr)
        .eq('sucursal', sucursal);

      // Una sola consulta para obtener info de sorteos cerrados
      const { data: sorteosData, error: sorteosError } = await this.supabase
        .from('sorteos')
        .select('sorteo, numero_ganador, factor_multiplicador, cerrado')
        .like('id', `${fechaStr}-%`);

      const sorteoResumen: any = {
        manana: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        tarde: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        noche: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 }
      };

      // Procesar totales
      if (totalesData && !totalesError) {
        totalesData.forEach((item: any) => {
          const sorteoKey = item.sorteo?.toLowerCase() as 'manana' | 'tarde' | 'noche';
          if (sorteoResumen[sorteoKey]) {
            sorteoResumen[sorteoKey].totalVendido = item.sum || 0;
          }
        });
      }

      // Procesar info de sorteos
      if (sorteosData && !sorteosError) {
        sorteosData.forEach((sorteo: any) => {
          const sorteoKey = sorteo.sorteo?.toLowerCase() as 'manana' | 'tarde' | 'noche';
          if (sorteoResumen[sorteoKey]) {
            sorteoResumen[sorteoKey].numeroGanador = sorteo.numero_ganador ? parseInt(sorteo.numero_ganador) : null;
            sorteoResumen[sorteoKey].factor = sorteo.factor_multiplicador || 70;
            // No calculamos total a pagar sin los números individuales
          }
        });
      }

      console.log('Datos básicos optimizados cargados:', sorteoResumen);
      return sorteoResumen;
    } catch (error) {
      console.error('Error en método básico:', error);
      return {
        manana: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        tarde: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 },
        noche: { totalVendido: 0, numerosVendidos: {}, numeroGanador: null, totalPagar: 0, factor: 70 }
      };
    }
  }

  // Método para obtener sorteo por tipo y fecha (para tabs de ventas)
  async getSorteoByTypeAndDate(sorteoType: string, fecha: Date): Promise<any | null> {
    try {
      const fechaStr = this.formatDateOnlyForSupabase(fecha);
      const sorteoId = `${fechaStr}-${sorteoType}`;

      const { data, error } = await this.supabase
        .from('sorteos')
        .select('*')
        .eq('id', sorteoId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No se encontró el registro
          return null;
        }
        throw error;
      }

      return {
        id: data.id,
        fecha: new Date(data.fecha),
        sorteo: data.sorteo,
        horaCierre: new Date(data.hora_cierre),
        numero_ganador: data.numero_ganador ? parseInt(data.numero_ganador) : null,
        factor_multiplicador: data.factor_multiplicador,
        totalVendido: data.total_vendido,
        totalPagado: data.total_pagado,
        gananciaNeta: data.ganancia_neta,
        cerrado: data.cerrado
      };
    } catch (error) {
      console.error(`Error obteniendo sorteo ${sorteoType} para fecha ${fecha}:`, error);
      return null;
    }
  }

  // Método alternativo para actualizar sorteo sin políticas RLS complejas
  async updateSorteoWinnerDirect(sorteoId: string, numeroGanador: string, factorMultiplicador: number): Promise<void> {
    try {

      const numeroString = numeroGanador.toString().padStart(2, '0');

      const { error } = await this.supabase
        .from('sorteos')
        .update({
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          cerrado: true
        })
        .eq('id', sorteoId);

      if (error) {
        throw error;
      }


    } catch (error) {
      throw error;
    }
  }

  // Método súper simple que solo hace UPDATE (último recurso)
  async updateSorteoWinnerSimple(sorteoId: string, numeroGanador: string, factorMultiplicador: number): Promise<void> {
    try {

      const numeroString = numeroGanador.toString().padStart(2, '0');

      // Solo hacer UPDATE, sin verificaciones
      const { error } = await this.supabase
        .from('sorteos')
        .update({
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          cerrado: true
        })
        .eq('id', sorteoId);

      if (error) {
        throw error;
      }


    } catch (error) {
      throw error;
    }
  }

  async calculateSorteoWinnings(sorteoId: string): Promise<void> {
    try {
      // Obtener el sorteo
      const { data: sorteo, error: sorteoError } = await this.supabase
        .from('sorteos')
        .select('*')
        .eq('id', sorteoId)
        .single();

      if (sorteoError) throw sorteoError;
      if (!sorteo.numero_ganador) return;

      // Obtener todas las ventas del sorteo
      const startOfDay = this.getStartOfDayHonduras(new Date(sorteo.fecha));
      const endOfDay = this.getEndOfDayHonduras(new Date(sorteo.fecha));
      
      const { data: sales, error: salesError } = await this.supabase
        .from('sales')
        .select('*, sale_details(*)')
        .eq('sorteo', sorteo.sorteo)
        .gte('fecha', this.formatLocalDateForSupabase(startOfDay))
        .lte('fecha', this.formatLocalDateForSupabase(endOfDay));

      if (salesError) throw salesError;

      // Calcular total vendido
      let totalVendido = 0;
      let totalPagado = 0;

      for (const sale of sales) {
        for (const detail of sale.sale_details) {
          totalVendido += detail.monto;

          // Comparar números: convertir detail.numero a string para comparar con numero_ganador (text)
          if (detail.numero.toString().padStart(2, '0') === sorteo.numero_ganador) {
            totalPagado += detail.monto * sorteo.factor_multiplicador;
          }
        }
      }

      const gananciaNeta = totalVendido - totalPagado;

      // Actualizar el sorteo con los cálculos
      const { error: updateError } = await this.supabase
        .from('sorteos')
        .update({
          total_vendido: totalVendido,
          total_pagado: totalPagado,
          ganancia_neta: gananciaNeta
        })
        .eq('id', sorteoId);

      if (updateError) throw updateError;
    } catch (error) {
      throw error;
    }
  }

  // Método de debug para verificar conexión y datos
  async debugSalesData(): Promise<void> {
    try {

      // Verificar conexión básica
      const { data: tablesData, error: tablesError } = await this.supabase
        .from('sales')
        .select('count(*)', { count: 'exact', head: true });

      if (tablesError) {
        return;
      }


      // Verificar ventas de hoy sin filtros
      const today = new Date();
      const startOfDay = this.getStartOfDayHonduras(today);
      const endOfDay = this.getEndOfDayHonduras(today);


      const { data: todayData, error: todayError } = await this.supabase
        .from('sales')
        .select('*')
        .gte('fecha', this.formatLocalDateForSupabase(startOfDay))
        .lte('fecha', this.formatLocalDateForSupabase(endOfDay));

      if (todayError) {
        return;
      }

      if (todayData && todayData.length > 0) {
      }

      // Verificar ventas de los últimos 3 días
      const threeDaysAgo = new Date(today);
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      const startThreeDaysAgo = this.getStartOfDayHonduras(threeDaysAgo);

      const { data: recentData, error: recentError } = await this.supabase
        .from('sales')
        .select('*')
        .gte('fecha', this.formatLocalDateForSupabase(startThreeDaysAgo))
        .order('created_at', { ascending: false })
        .limit(10);

      if (recentError) {
        return;
      }

      if (recentData && recentData.length > 0) {
        recentData.forEach((sale, index) => {
        });
      }

    } catch (error) {
    }
  }

  // Método para verificar permisos y políticas RLS
  async checkDatabasePermissions(): Promise<void> {
    try {

      // Verificar sesión actual
      const { data: session, error: sessionError } = await this.supabase.auth.getSession();
      if (sessionError) {
        return;
      }


      // Probar consulta simple a la tabla sales
      const { data: simpleQuery, error: simpleError } = await this.supabase
        .from('sales')
        .select('id, sucursal, created_at')
        .limit(1);

      if (simpleError) {
      } else {
      }

      // Probar inserción de test (para verificar permisos de escritura)
      const testSale = {
        user_id: session?.session?.user?.id || 'test-user',
        sucursal: 'TEST',
        sorteo: 'test',
        fecha: this.formatLocalDateForSupabase(new Date()),
        total: 0,
        numero_recibo: 'TEST-001',
        correlativo: 999
      };

      const { data: insertTest, error: insertError } = await this.supabase
        .from('sales')
        .insert(testSale)
        .select();

      if (insertError) {
      } else {

        // Eliminar el registro de prueba
        if (insertTest && insertTest.length > 0) {
          await this.supabase
            .from('sales')
            .delete()
            .eq('id', insertTest[0].id);
        }
      }

    } catch (error) {
    }
  }

  // ========================
  // GESTIÓN DE USUARIOS
  // ========================

  async getUsers(): Promise<User[]> {
    try {

      // Retornar usuarios por defecto simples para que funcione
      return [
        {
          id: '1',
          email: 'gerencia@loteria.com',
          role: 'admin',
          sucursal: '',
          active: true,
          createdAt: new Date()
        },
        {
          id: '2',
          email: 'venta1@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 1',
          active: true,
          createdAt: new Date()
        },
        {
          id: '3',
          email: 'venta2@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 2',
          active: true,
          createdAt: new Date()
        },
        {
          id: '4',
          email: 'venta3@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 3',
          active: true,
          createdAt: new Date()
        },
        {
          id: '5',
          email: 'venta4@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 4',
          active: true,
          createdAt: new Date()
        }
      ];
    } catch (error) {
      return [];
    }
  }

  private getDefaultUsers(): User[] {
    return [
      {
        id: '1',
        email: 'admin@loteria.com',
        role: 'admin',
        sucursal: '',
        active: true,
        createdAt: new Date()
      },
      {
        id: '2',
        email: 'sucursal1@loteria.com',
        role: 'sucursal',
        sucursal: 'Sucursal 1',
        active: true,
        createdAt: new Date()
      }
    ];
  }

  private async createProfilesFromAuthUsers(authUsers: any[]): Promise<void> {
    try {
      const profilesData = authUsers.map(authUser => ({
        id: authUser.id,
        email: authUser.email,
        role: authUser.email?.includes('admin') || authUser.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal',
        sucursal: this.getSucursalFromEmail(authUser.email || ''),
        active: true,
        created_at: new Date(authUser.created_at).toISOString()
      }));

      const { error } = await this.supabase
        .from('profiles')
        .upsert(profilesData, { onConflict: 'id' });

      if (error) {
      } else {
      }
    } catch (error) {
    }
  }

  // ========================
  // GESTIÓN DE SORTEOS
  // ========================

  async getSorteoSchedules(): Promise<any[]> {
    try {

      const { data, error } = await this.supabase
        .from('sorteo_schedules')
        .select('*')
        .order('close_time', { ascending: true });

      if (error) {
        throw error;
      }

      return data || [];
    } catch (error) {
      throw error;
    }
  }

  async createSorteoSchedule(sorteoData: { name: string, label: string, close_time: string }): Promise<any> {
    try {
      const { data, error } = await this.supabase
        .from('sorteo_schedules')
        .insert([sorteoData])
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateSorteoSchedule(sorteoId: string, updates: { name?: string, label?: string, close_time?: string }): Promise<any> {
    try {
      const { data, error } = await this.supabase
        .from('sorteo_schedules')
        .update(updates)
        .eq('id', sorteoId)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteSorteoSchedule(sorteoId: string): Promise<void> {
    try {
      const { error } = await this.supabase
        .from('sorteo_schedules')
        .delete()
        .eq('id', sorteoId);

      if (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  // ========================
  // MÉTODOS DE DEBUG Y SETUP
  // ========================


  async initializeSorteoSchedules(): Promise<void> {
    try {
      // Crear los sorteos por defecto si no existen
      const defaultSorteos: SorteoSchedule[] = [...SORTEO_SCHEDULES];

      for (const sorteo of defaultSorteos) {
        const { error } = await this.supabase
          .from('sorteo_schedules')
          .upsert(sorteo, { onConflict: 'name' });

        if (error) {
        } else {
        }
      }
    } catch (error) {
    }
  }

  // Método para inicializar la tabla de perfiles si no existe
  async initializeProfilesTable(): Promise<void> {
    try {

      // Simplemente intentar hacer una consulta para ver si la tabla existe
      const { error } = await this.supabase
        .from('profiles')
        .select('count', { count: 'exact', head: true });

      if (error) {
      } else {
      }
    } catch (error) {
    }
  }

  // Método para sincronizar usuarios manualmente
  async syncUsersFromAuth(): Promise<void> {
    try {
    } catch (error) {
    }
  }

  // ========== FUNCIONES DE TIMEZONE HONDURAS CON DATE-FNS-TZ ==========
  private readonly HONDURAS_TIMEZONE = 'America/Tegucigalpa';

  // Función para obtener la fecha/hora actual en Honduras
  getHondurasDateTime(): Date {
    const now = new Date();
    return now;
  }

  // Función para formatear fecha/hora en formato de Honduras
  formatHondurasDateTime(date?: Date): string {
    const targetDate = date || new Date();
    return this.formatLocalDateForSupabase(targetDate);
  }

  formatLocalDateForSupabase(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Mes empieza en 0
    const day = pad(date.getDate());

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // Función para formatear solo la fecha (YYYY-MM-DD) para consultas RPC
  formatDateOnlyForSupabase(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Mes empieza en 0
    const day = pad(date.getDate());

    return `${year}-${month}-${day}`;
  }


  // Función para convertir una fecha de Honduras a UTC para guardar en BD
  private hondurasToUtc(date: Date): Date {
    return fromZonedTime(date, this.HONDURAS_TIMEZONE);
  }

  // Función para convertir una fecha UTC de BD a hora de Honduras
  private utcToHonduras(utcDate: Date): Date {
    return toZonedTime(utcDate, this.HONDURAS_TIMEZONE);
  }

  // Método público para convertir cualquier fecha a hora de Honduras
  convertToHondurasTime(date: Date): Date {
    return toZonedTime(date, this.HONDURAS_TIMEZONE);
  }

  // Método público para que los componentes obtengan la hora de Honduras
  getHondurasTimeNow(): Date {
    return this.getHondurasDateTime();
  }

  // Método público para formatear fechas en hora de Honduras con formato legible
  formatDateForHonduras(date?: Date): string {
    const targetDate = date || new Date();
    return formatInTimeZone(targetDate, this.HONDURAS_TIMEZONE, 'dd/MM/yyyy hh:mm:ss a', {
      locale: es
    });
  }

  // Método público para parsear fechas de la base de datos a hora de Honduras
  parseDateFromDatabase(isoString: string): Date {
    const utcDate = parseISO(isoString);
    return toZonedTime(utcDate, this.HONDURAS_TIMEZONE);
  }

  // Método para crear fecha específica en zona horaria de Honduras
  createHondurasDate(year: number, month: number, day: number, hour: number = 0, minute: number = 0, second: number = 0): Date {
    // Crear fecha en zona horaria de Honduras
    const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    return fromZonedTime(new Date(dateString), this.HONDURAS_TIMEZONE);
  }

  // Método para obtener inicio del día en Honduras
  getStartOfDayHonduras(date: Date): Date {
    // Primero convertir la fecha a zona horaria de Honduras
    const hondurasDate = toZonedTime(date, this.HONDURAS_TIMEZONE);
    const year = hondurasDate.getFullYear();
    const month = hondurasDate.getMonth() + 1;
    const day = hondurasDate.getDate();

    // Crear inicio del día (00:00:00) en zona horaria de Honduras
    return this.createHondurasDate(year, month, day, 0, 0, 0);
  }

  // Método para obtener final del día en Honduras  
  getEndOfDayHonduras(date: Date): Date {
    // Primero convertir la fecha a zona horaria de Honduras
    const hondurasDate = toZonedTime(date, this.HONDURAS_TIMEZONE);
    const year = hondurasDate.getFullYear();
    const month = hondurasDate.getMonth() + 1;
    const day = hondurasDate.getDate();

    // Crear final del día (23:59:59.999) en zona horaria de Honduras
    return this.createHondurasDate(year, month, day, 23, 59, 59);
  }

  // Método para formatear fecha para inputs datetime-local en zona horaria de Honduras
  formatDateTimeLocalHonduras(date: Date): string {
    const hondurasDate = toZonedTime(date, this.HONDURAS_TIMEZONE);
    const year = hondurasDate.getFullYear();
    const month = String(hondurasDate.getMonth() + 1).padStart(2, '0');
    const day = String(hondurasDate.getDate()).padStart(2, '0');
    const hours = String(hondurasDate.getHours()).padStart(2, '0');
    const minutes = String(hondurasDate.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  // Método para convertir string de datetime-local a fecha UTC para base de datos
  parseLocalDateTimeToUtc(dateTimeLocalString: string): Date {
    // El string viene en formato YYYY-MM-DDTHH:mm
    // Lo interpretamos como si fuera hora de Honduras y lo convertimos a UTC
    const localDate = new Date(dateTimeLocalString);
    return fromZonedTime(localDate, this.HONDURAS_TIMEZONE);
  }

  // ============= MÉTODOS DE GESTIÓN DE USUARIOS =============

  // Obtener todos los usuarios del sistema desde auth.users
  async getAllUsers(): Promise<User[]> {
    try {
      // Usar la API de administración para obtener usuarios de auth.users
      const { data, error } = await this.supabase.auth.admin.listUsers();

      console.log('Usuarios obtenidos:', data);
      if (error) {
        console.error('Error obteniendo usuarios:', error);
        // Si falla, usar datos por defecto
        return this.getDefaultUsersForManagement();
      }

      // Mapear los usuarios de auth a nuestro formato
      return data.users.map((user: any) => ({
        id: user.id,
        email: user.email || '',
        role: (user.user_metadata?.['role'] || (user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal')) as 'admin' | 'sucursal',
        sucursal: user.user_metadata?.['sucursal'] || this.getSucursalFromEmail(user.email || ''),
        active: user.user_metadata?.['active'] ?? !(user['banned_until']),
        createdAt: new Date(user.created_at)
      }));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      // Retornar usuarios por defecto si falla
      return this.getDefaultUsersForManagement();
    }
  }

  // Usuarios por defecto para gestión
  private getDefaultUsersForManagement(): User[] {
    return [
      {
        id: 'default-admin',
        email: 'gerencia@loteria.com',
        role: 'admin',
        sucursal: '',
        active: true,
        createdAt: new Date()
      },
      {
        id: 'default-venta1',
        email: 'venta1@loteria.com',
        role: 'sucursal',
        sucursal: 'Sucursal 1',
        active: true,
        createdAt: new Date()
      },
      {
        id: 'default-venta2',
        email: 'venta2@loteria.com',
        role: 'sucursal',
        sucursal: 'Sucursal 2',
        active: true,
        createdAt: new Date()
      }
    ];
  }

  // Crear un nuevo usuario en el sistema usando auth.users
  async createNewUser(userData: { email: string; role: 'admin' | 'sucursal'; sucursal?: string; active?: boolean }): Promise<User> {
    try {
      console.log('Creando usuario:', userData);

      // Crear usuario directamente en auth.users
      const { data: authData, error: authError } = await this.supabase.auth.admin.createUser({
        email: userData.email,
        password: 'LoteriaTemporal123!', // Contraseña temporal
        email_confirm: true,
        user_metadata: {
          role: userData.role,
          sucursal: userData.sucursal || '',
          active: userData.active !== undefined ? userData.active : true
        }
      });

      if (authError) {
        throw authError;
      }

      console.log('Usuario creado exitosamente:', authData.user.email);

      // Retornar el usuario en nuestro formato
      return {
        id: authData.user.id,
        email: authData.user.email || '',
        role: userData.role,
        sucursal: userData.sucursal || '',
        active: userData.active !== undefined ? userData.active : true,
        createdAt: new Date(authData.user.created_at)
      };
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  // Actualizar un usuario existente usando auth.users
  async updateExistingUser(userId: string, updates: { email?: string; role?: 'admin' | 'sucursal'; sucursal?: string; active?: boolean }): Promise<User> {
    try {
      console.log('Actualizando usuario:', userId, updates);

      // Preparar los metadatos del usuario
      const userMetadata: any = {};
      if (updates.role) userMetadata['role'] = updates.role;
      if (updates.sucursal !== undefined) userMetadata['sucursal'] = updates.sucursal;
      if (updates.active !== undefined) userMetadata['active'] = updates.active;

      // Actualizar en auth.users
      const updateData: any = {};
      if (updates.email) updateData.email = updates.email;
      if (Object.keys(userMetadata).length > 0) updateData.user_metadata = userMetadata;

      // Si se quiere desactivar el usuario, usar ban
      if (updates.active === false) {
        updateData.ban_duration = '876000h'; // Ban muy largo para simular desactivación
      } else if (updates.active === true) {
        updateData.ban_duration = 'none'; // Remover ban
      }

      const { data, error } = await this.supabase.auth.admin.updateUserById(userId, updateData);

      if (error) {
        throw error;
      }

      console.log('Usuario actualizado exitosamente:', data.user.email);

      // Retornar el usuario actualizado en nuestro formato
      return {
        id: data.user.id,
        email: data.user.email || '',
        role: updates.role || (data.user.user_metadata?.['role'] as 'admin' | 'sucursal') || 'sucursal',
        sucursal: updates.sucursal || data.user.user_metadata?.['sucursal'] || '',
        active: updates.active !== undefined ? updates.active : !(data.user as any)['banned_until'],
        createdAt: new Date(data.user.created_at)
      };
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }

  // Eliminar un usuario usando auth.users
  async deleteExistingUser(userId: string): Promise<void> {
    try {
      console.log('Eliminando usuario:', userId);

      const { error } = await this.supabase.auth.admin.deleteUser(userId);

      if (error) {
        throw error;
      }

      console.log('Usuario eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }

  // Alternar el estado activo/inactivo de un usuario usando auth.users
  async toggleExistingUserStatus(userId: string): Promise<User> {
    try {
      console.log('Alternando estado del usuario:', userId);

      // Primero obtener el usuario actual de auth.users
      const { data: authUser, error: fetchError } = await this.supabase.auth.admin.getUserById(userId);

      if (fetchError) {
        throw fetchError;
      }

      // Determinar el estado actual desde los metadatos o si está baneado
      const currentActive = authUser.user.user_metadata?.['active'] ?? !(authUser.user as any)['banned_until'];
      const newStatus = !currentActive;

      // Actualizar el estado del usuario
      const updateData: any = {
        user_metadata: {
          ...authUser.user.user_metadata,
          ['active']: newStatus
        }
      };

      // Si se está desactivando, ban el usuario
      if (!newStatus) {
        updateData.ban_duration = '876000h'; // Ban muy largo para simular desactivación
      } else {
        updateData.ban_duration = 'none'; // Remover ban
      }

      const { data, error } = await this.supabase.auth.admin.updateUserById(userId, updateData);

      if (error) {
        throw error;
      }

      console.log('Estado del usuario alternado exitosamente:', newStatus ? 'Activo' : 'Inactivo');

      return {
        id: data.user.id,
        email: data.user.email || '',
        role: (data.user.user_metadata?.['role'] as 'admin' | 'sucursal') || 'sucursal',
        sucursal: data.user.user_metadata?.['sucursal'] || '',
        active: newStatus,
        createdAt: new Date(data.user.created_at)
      };
    } catch (error) {
      console.error('Error al alternar estado del usuario:', error);
      throw error;
    }
  }

  // Actualizar contraseña de un usuario usando auth.users
  async updateUserPassword(userId: string, newPassword: string): Promise<void> {
    try {
      console.log('Actualizando contraseña del usuario:', userId);

      const { error } = await this.supabase.auth.admin.updateUserById(userId, {
        password: newPassword
      });

      if (error) {
        throw error;
      }

      console.log('Contraseña actualizada exitosamente');
    } catch (error) {
      console.error('Error al actualizar contraseña:', error);
      throw error;
    }
  }

  // Enviar email de restablecimiento de contraseña
  async sendPasswordReset(email: string): Promise<void> {
    try {
      const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  // ========================
  // GESTIÓN DE SORTEOS POR SUCURSAL
  // ========================

  // Obtener usuarios activos agrupados por sucursal
  async getActiveUsersBySucursal(): Promise<SucursalFactor[]> {
    try {
      // Intentar usar la función SQL primero
      const { data, error } = await this.supabase
        .rpc('get_active_users_by_sucursal');

      if (error) {
        console.warn('Función get_active_users_by_sucursal falló, intentando consulta directa:', error);

        // Fallback: consulta directa a auth.users
        const { data: usersData, error: usersError } = await this.supabase.auth.admin.listUsers();

        if (usersError) {
          throw usersError;
        }

        // Procesar usuarios y agrupar por sucursal
        const sucursalesMap = new Map<string, SucursalFactor>();

        for (const user of usersData.users) {
          if (user.email === 'gerencia@loteria.com' || !user.email_confirmed_at || !user.email) {
            continue;
          }

          let sucursal = 'Principal';
          if (user.user_metadata && user.user_metadata['sucursal']) {
            sucursal = user.user_metadata['sucursal'];
          } else if (user.email.includes('venta1')) {
            sucursal = 'Sucursal 1';
          } else if (user.email.includes('venta2')) {
            sucursal = 'Sucursal 2';
          } else if (user.email.includes('venta3')) {
            sucursal = 'Sucursal 3';
          } else if (user.email.includes('venta4')) {
            sucursal = 'Sucursal 4';
          }

          if (!sucursalesMap.has(sucursal)) {
            sucursalesMap.set(sucursal, {
              sucursal,
              factor: 75,
              usuario: user.id,
              email: user.email || ''
            });
          }
        }

        return Array.from(sucursalesMap.values());
      }

      return (data || []).map((user: any) => ({
        sucursal: user.sucursal,
        factor: user.factor_default,
        usuario: user.user_id,
        email: user.email
      }));
    } catch (error) {
      console.error('Error al obtener usuarios por sucursal:', error);
      // Fallback final con datos por defecto
      return [
        { sucursal: 'Sucursal 1', factor: 75, usuario: '', email: 'venta1@loteria.com' },
        { sucursal: 'Sucursal 2', factor: 75, usuario: '', email: 'venta2@loteria.com' },
        { sucursal: 'Sucursal 3', factor: 75, usuario: '', email: 'venta3@loteria.com' },
        { sucursal: 'Sucursal 4', factor: 75, usuario: '', email: 'venta4@loteria.com' },
        { sucursal: 'Principal', factor: 75, usuario: '', email: 'principal@loteria.com' }
      ];
    }
  }

  // Crear sorteos por sucursal con factores específicos
  async crearSorteosPorSucursal(
    sorteoId: string,
    numeroGanador: string,
    factoresPorSucursal: { [sucursal: string]: number }
  ): Promise<void> {
    try {
      const numeroString = numeroGanador.toString().padStart(2, '0');

      const { data, error } = await this.supabase
        .rpc('crear_sorteos_por_sucursal', {
          p_sorteo_id: sorteoId,
          p_numero_ganador: numeroString,
          p_factores_json: factoresPorSucursal
        });

      if (error) {
        throw error;
      }

      console.log('Sorteos creados por sucursal exitosamente');
    } catch (error) {
      console.error('Error al crear sorteos por sucursal:', error);
      throw error;
    }
  }

  // Calcular totales de sorteo por sucursal
  async calcularTotalesSorteoPorSucursal(sorteoId: string): Promise<void> {
    try {
      const { data, error } = await this.supabase
        .rpc('calcular_totales_sorteo_por_sucursal', {
          p_sorteo_id: sorteoId
        });

      if (error) {
        throw error;
      }

      console.log('Totales calculados por sucursal exitosamente');
    } catch (error) {
      console.error('Error al calcular totales por sucursal:', error);
      throw error;
    }
  }

  // Obtener sorteos por sucursal para una fecha y tipo específicos
  async getSorteosPorSucursal(fecha: Date, sorteo: string): Promise<Sorteo[]> {
    try {
      const fechaStr = this.formatDateOnlyForSupabase(fecha);
      const sorteoId = `${fechaStr}-${sorteo}`;

      const { data, error } = await this.supabase
        .from('sorteos')
        .select('*')
        .eq('id', sorteoId)
        .order('sucursal');

      if (error) {
        throw error;
      }

      return (data || []).map(item => ({
        id: item.id,
        fecha: new Date(item.fecha),
        sorteo: item.sorteo,
        horaCierre: new Date(item.hora_cierre),
        numeroGanador: item.numero_ganador || '',
        factorMultiplicador: item.factor_multiplicador,
        totalVendido: item.total_vendido,
        totalPagado: item.total_pagado,
        gananciaNeta: item.ganancia_neta,
        cerrado: item.cerrado,
        sucursal: item.sucursal
      }));
    } catch (error) {
      console.error('Error al obtener sorteos por sucursal:', error);
      return [];
    }
  }

  // Obtener resumen consolidado de un sorteo (todas las sucursales)
  async getResumenConsolidadoSorteo(fecha: Date, sorteo: string): Promise<{
    numeroGanador: string;
    totalVendido: number;
    totalPagado: number;
    gananciaNeta: number;
    cerrado: boolean;
    detallesPorSucursal: any[];
  }> {
    try {
      const sorteosPorSucursal = await this.getSorteosPorSucursal(fecha, sorteo);

      if (sorteosPorSucursal.length === 0) {
        return {
          numeroGanador: '',
          totalVendido: 0,
          totalPagado: 0,
          gananciaNeta: 0,
          cerrado: false,
          detallesPorSucursal: []
        };
      }

      const resumen = {
        numeroGanador: sorteosPorSucursal[0].numeroGanador || '',
        totalVendido: sorteosPorSucursal.reduce((sum, s) => sum + s.totalVendido, 0),
        totalPagado: sorteosPorSucursal.reduce((sum, s) => sum + s.totalPagado, 0),
        gananciaNeta: sorteosPorSucursal.reduce((sum, s) => sum + s.gananciaNeta, 0),
        cerrado: sorteosPorSucursal.every(s => s.cerrado),
        detallesPorSucursal: sorteosPorSucursal.map(s => ({
          sucursal: s.sucursal,
          factor: s.factorMultiplicador,
          vendido: s.totalVendido,
          pagado: s.totalPagado,
          ganancia: s.gananciaNeta
        }))
      };

      return resumen;
    } catch (error) {
      console.error('Error al obtener resumen consolidado:', error);
      return {
        numeroGanador: '',
        totalVendido: 0,
        totalPagado: 0,
        gananciaNeta: 0,
        cerrado: false,
        detallesPorSucursal: []
      };
    }
  }

  /**
   * Obtener ventas agrupadas por número para un sorteo específico en una fecha
   */
  async getVentasPorNumero(sorteoName: string, fecha: string): Promise<{ [numero: string]: number }> {
    try {
      const { data: ventas, error } = await this.supabase
        .from('sales')
        .select(`
          details:sale_details(numero, monto)
        `)
        .eq('sorteo', sorteoName)
        .gte('created_at', `${fecha}T00:00:00`)
        .lt('created_at', `${fecha}T23:59:59`);

      if (error) {
        console.error('Error al obtener ventas por número:', error);
        return {};
      }

      const ventasPorNumero: { [numero: string]: number } = {};

      // Procesar todas las ventas y detalles
      ventas?.forEach(venta => {
        venta.details?.forEach((detalle: any) => {
          const numero = detalle.numero.toString().padStart(2, '0');
          const monto = detalle.monto || 0;

          if (!ventasPorNumero[numero]) {
            ventasPorNumero[numero] = 0;
          }
          ventasPorNumero[numero] += monto;
        });
      });

      return ventasPorNumero;
    } catch (error) {
      console.error('Error en getVentasPorNumero:', error);
      return {};
    }
  }

  /**
   * Notificar actualización de resúmenes
   */
  notifyResumenUpdate(): void {
    this.resumenUpdateSubject.next();
  }

  // ========================
  // MÉTODOS OPTIMIZADOS PARA ADMIN
  // ========================

  /**
   * Obtener resumen completo optimizado para el admin en una sola consulta
   */
  async getAdminDashboardData(fechaDesde?: Date, fechaHasta?: Date, sorteoFilter?: string, sucursalFilter?: string): Promise<{
    totalVendido: number;
    totalPagado: number;
    gananciaNeta: number;
    totalVentas: number;
    ventasPorSucursal: Array<{
      sucursal: string;
      totalVendido: number;
      totalPagado: number;
      gananciaNeta: number;
      ventasCount: number;
    }>;
    numerosPorSorteo: Array<{
      sorteo: string;
      sucursales: Array<{
        sucursal: string;
        numeros: Array<{
          numero: number;
          totalVendido: number;
          cantidadVentas: number;
          porcentaje: number;
        }>;
      }>;
    }>;
  }> {
    try {
      let startDateStr, endDateStr;
      
      if (fechaDesde && fechaHasta) {
        startDateStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(fechaDesde));
        endDateStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(fechaHasta));
      } else if (fechaDesde) {
        startDateStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(fechaDesde));
        endDateStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(fechaDesde));
      } else {
        const today = this.getHondurasDateTime();
        startDateStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(today));
        endDateStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(today));
      }

      // Construir query base
      let salesQuery = this.supabase
        .from('sales')
        .select(`
          id,
          sucursal,
          sorteo,
          total,
          fecha,
          created_at,
          sale_details (
            numero,
            monto
          )
        `)
        .gte('fecha', startDateStr)
        .lte('fecha', endDateStr);

      // Aplicar filtros opcionales
      if (sorteoFilter) {
        salesQuery = salesQuery.eq('sorteo', sorteoFilter);
      }
      if (sucursalFilter) {
        salesQuery = salesQuery.eq('sucursal', sucursalFilter);
      }

      const { data: salesData, error } = await salesQuery;

      if (error) {
        console.error('Error en consulta optimizada:', error);
        throw error;
      }

      // Obtener sorteos cerrados para calcular totales pagados
      const { data: sorteosData, error: sorteosError } = await this.supabase
        .from('sorteos')
        .select('id, sorteo, numero_ganador, factor_multiplicador, cerrado')
        .eq('cerrado', true);

      if (sorteosError) {
        console.warn('Error obteniendo sorteos cerrados:', sorteosError);
      }

      // Procesar datos en memoria
      const sorteosCerrados = new Map();
      (sorteosData || []).forEach(sorteo => {
        if (sorteo.numero_ganador) {
          sorteosCerrados.set(sorteo.sorteo, {
            numeroGanador: parseInt(sorteo.numero_ganador),
            factor: sorteo.factor_multiplicador || 70
          });
        }
      });

      let totalVendido = 0;
      let totalPagado = 0;
      let totalVentas = 0;
      const ventasPorSucursal = new Map();
      const numerosPorSorteo = new Map();

      // Procesar todas las ventas en una sola iteración
      (salesData || []).forEach(sale => {
        totalVentas++;
        totalVendido += sale.total;

        // Procesar por sucursal
        if (!ventasPorSucursal.has(sale.sucursal)) {
          ventasPorSucursal.set(sale.sucursal, {
            sucursal: sale.sucursal,
            totalVendido: 0,
            totalPagado: 0,
            gananciaNeta: 0,
            ventasCount: 0
          });
        }
        const sucursalData = ventasPorSucursal.get(sale.sucursal);
        sucursalData.totalVendido += sale.total;
        sucursalData.ventasCount++;

        // Procesar números por sorteo
        if (!numerosPorSorteo.has(sale.sorteo)) {
          numerosPorSorteo.set(sale.sorteo, new Map());
        }
        const sorteoMap = numerosPorSorteo.get(sale.sorteo);
        
        if (!sorteoMap.has(sale.sucursal)) {
          sorteoMap.set(sale.sucursal, new Map());
        }
        const sucursalMap = sorteoMap.get(sale.sucursal);

        // Procesar detalles de la venta
        (sale.sale_details || []).forEach(detail => {
          const numero = parseInt(detail.numero.toString());
          
          // Agregar a números por sorteo/sucursal
          if (!sucursalMap.has(numero)) {
            sucursalMap.set(numero, { totalVendido: 0, cantidadVentas: 0 });
          }
          const numeroData = sucursalMap.get(numero);
          numeroData.totalVendido += detail.monto;
          numeroData.cantidadVentas++;

          // Calcular total pagado si el sorteo está cerrado
          const sorteoInfo = sorteosCerrados.get(sale.sorteo);
          if (sorteoInfo && numero === sorteoInfo.numeroGanador) {
            const montoPagado = detail.monto * sorteoInfo.factor;
            totalPagado += montoPagado;
            sucursalData.totalPagado += montoPagado;
          }
        });

        sucursalData.gananciaNeta = sucursalData.totalVendido - sucursalData.totalPagado;
      });

      // Convertir Maps a arrays con porcentajes
      const numerosPorSorteoArray: Array<{
        sorteo: string;
        sucursales: Array<{
          sucursal: string;
          numeros: Array<{
            numero: number;
            totalVendido: number;
            cantidadVentas: number;
            porcentaje: number;
          }>;
        }>;
      }> = [];

      numerosPorSorteo.forEach((sucursalesMap: any, sorteo: string) => {
        const sucursales: Array<{
          sucursal: string;
          numeros: Array<{
            numero: number;
            totalVendido: number;
            cantidadVentas: number;
            porcentaje: number;
          }>;
        }> = [];

        sucursalesMap.forEach((numerosMap: any, sucursal: string) => {
          let totalSucursal = 0;
          numerosMap.forEach((data: any) => {
            totalSucursal += data.totalVendido;
          });
          
          const numeros: Array<{
            numero: number;
            totalVendido: number;
            cantidadVentas: number;
            porcentaje: number;
          }> = [];

          numerosMap.forEach((data: any, numero: number) => {
            numeros.push({
              numero,
              totalVendido: data.totalVendido,
              cantidadVentas: data.cantidadVentas,
              porcentaje: totalSucursal > 0 ? (data.totalVendido / totalSucursal) * 100 : 0
            });
          });

          numeros.sort((a, b) => b.totalVendido - a.totalVendido);
          sucursales.push({ sucursal, numeros });
        });

        numerosPorSorteoArray.push({ sorteo, sucursales });
      });

      return {
        totalVendido,
        totalPagado,
        gananciaNeta: totalVendido - totalPagado,
        totalVentas,
        ventasPorSucursal: Array.from(ventasPorSucursal.values()),
        numerosPorSorteo: numerosPorSorteoArray
      };

    } catch (error) {
      console.error('Error en getAdminDashboardData:', error);
      return {
        totalVendido: 0,
        totalPagado: 0,
        gananciaNeta: 0,
        totalVentas: 0,
        ventasPorSucursal: [],
        numerosPorSorteo: []
      };
    }
  }

  /**
   * Obtener ventas optimizadas con detalles en una sola consulta
   */
  async getSalesWithDetailsOptimized(fechaDesde?: Date, fechaHasta?: Date, sorteoFilter?: string): Promise<{
    sales: Sale[];
    saleDetails: { [saleId: string]: SaleDetail[] };
  }> {
    try {
      let startDateStr, endDateStr;
      
      if (fechaDesde && fechaHasta) {
        startDateStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(fechaDesde));
        endDateStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(fechaHasta));
      } else if (fechaDesde) {
        startDateStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(fechaDesde));
        endDateStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(fechaDesde));
      } else {
        const today = this.getHondurasDateTime();
        startDateStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(today));
        endDateStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(today));
      }

      let query = this.supabase
        .from('sales')
        .select(`
          id,
          user_id,
          sucursal,
          sorteo,
          fecha,
          total,
          numero_recibo,
          correlativo,
          created_at,
          sale_details (
            id,
            numero,
            monto
          )
        `)
        .gte('fecha', startDateStr)
        .lte('fecha', endDateStr)
        .order('created_at', { ascending: false });

      if (sorteoFilter && sorteoFilter.trim() !== '') {
        query = query.eq('sorteo', sorteoFilter);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      const sales: Sale[] = [];
      const saleDetails: { [saleId: string]: SaleDetail[] } = {};

      (data || []).forEach(saleData => {
        // Mapear venta
        const sale: Sale = {
          id: saleData.id,
          userId: saleData.user_id,
          sucursal: saleData.sucursal,
          sorteo: saleData.sorteo,
          fecha: this.parseDateFromDatabase(saleData.fecha),
          total: saleData.total,
          numeroRecibo: saleData.numero_recibo || saleData.id.slice(-6),
          correlativo: saleData.correlativo || 0,
          createdAt: this.parseDateFromDatabase(saleData.created_at)
        };
        sales.push(sale);

        // Mapear detalles
        saleDetails[sale.id] = (saleData.sale_details || []).map(detailData => ({
          id: detailData.id,
          saleId: sale.id,
          numero: parseInt(detailData.numero),
          monto: detailData.monto
        }));
      });

      return { sales, saleDetails };

    } catch (error) {
      console.error('Error en getSalesWithDetailsOptimized:', error);
      return { sales: [], saleDetails: {} };
    }
  }

  /**
   * Obtener datos optimizados para una sola fecha (método más rápido para uso diario)
   */
  async getDailyOptimizedData(fecha: Date, sorteoFilter?: string): Promise<{
    sales: Sale[];
    saleDetails: { [saleId: string]: SaleDetail[] };
    dashboardData: {
      totalVendido: number;
      totalPagado: number;
      gananciaNeta: number;
      totalVentas: number;
      ventasPorSucursal: Array<{
        sucursal: string;
        totalVendido: number;
        totalPagado: number;
        gananciaNeta: number;
        ventasCount: number;
      }>;
    };
  }> {
    try {
      const startDateStr = this.formatLocalDateForSupabase(this.getStartOfDayHonduras(fecha));
      const endDateStr = this.formatLocalDateForSupabase(this.getEndOfDayHonduras(fecha));

      // Una sola consulta para obtener todo
      let query = this.supabase
        .from('sales')
        .select(`
          id,
          user_id,
          sucursal,
          sorteo,
          fecha,
          total,
          numero_recibo,
          correlativo,
          created_at,
          sale_details (
            id,
            numero,
            monto
          )
        `)
        .gte('fecha', startDateStr)
        .lte('fecha', endDateStr)
        .order('created_at', { ascending: false });

      if (sorteoFilter && sorteoFilter.trim() !== '') {
        query = query.eq('sorteo', sorteoFilter);
      }

      const { data: salesData, error } = await query;

      if (error) {
        throw error;
      }

      // Obtener sorteos cerrados del día
      const fechaStr = this.formatDateOnlyForSupabase(fecha);
      const { data: sorteosData, error: sorteosError } = await this.supabase
        .from('sorteos')
        .select('sorteo, numero_ganador, factor_multiplicador, cerrado')
        .like('id', `${fechaStr}-%`)
        .eq('cerrado', true);

      if (sorteosError) {
        console.warn('Error obteniendo sorteos del día:', sorteosError);
      }

      // Crear mapa de sorteos cerrados
      const sorteosCerrados = new Map();
      (sorteosData || []).forEach(sorteo => {
        if (sorteo.numero_ganador) {
          sorteosCerrados.set(sorteo.sorteo, {
            numeroGanador: parseInt(sorteo.numero_ganador),
            factor: sorteo.factor_multiplicador || 70
          });
        }
      });

      // Procesar datos
      const sales: Sale[] = [];
      const saleDetails: { [saleId: string]: SaleDetail[] } = {};
      let totalVendido = 0;
      let totalPagado = 0;
      const ventasPorSucursal = new Map();

      (salesData || []).forEach(saleData => {
        // Mapear venta
        const sale: Sale = {
          id: saleData.id,
          userId: saleData.user_id,
          sucursal: saleData.sucursal,
          sorteo: saleData.sorteo,
          fecha: this.parseDateFromDatabase(saleData.fecha),
          total: saleData.total,
          numeroRecibo: saleData.numero_recibo || saleData.id.slice(-6),
          correlativo: saleData.correlativo || 0,
          createdAt: this.parseDateFromDatabase(saleData.created_at)
        };
        sales.push(sale);
        totalVendido += sale.total;

        // Mapear detalles y calcular datos por sucursal
        if (!ventasPorSucursal.has(sale.sucursal)) {
          ventasPorSucursal.set(sale.sucursal, {
            sucursal: sale.sucursal,
            totalVendido: 0,
            totalPagado: 0,
            gananciaNeta: 0,
            ventasCount: 0
          });
        }
        const sucursalData = ventasPorSucursal.get(sale.sucursal);
        sucursalData.totalVendido += sale.total;
        sucursalData.ventasCount++;

        const details: SaleDetail[] = [];
        (saleData.sale_details || []).forEach(detailData => {
          const detail: SaleDetail = {
            id: detailData.id,
            saleId: sale.id,
            numero: parseInt(detailData.numero),
            monto: detailData.monto
          };
          details.push(detail);

          // Calcular total pagado si el sorteo está cerrado
          const sorteoInfo = sorteosCerrados.get(sale.sorteo);
          if (sorteoInfo && detail.numero === sorteoInfo.numeroGanador) {
            const montoPagado = detail.monto * sorteoInfo.factor;
            totalPagado += montoPagado;
            sucursalData.totalPagado += montoPagado;
          }
        });

        saleDetails[sale.id] = details;
        sucursalData.gananciaNeta = sucursalData.totalVendido - sucursalData.totalPagado;
      });

      return {
        sales,
        saleDetails,
        dashboardData: {
          totalVendido,
          totalPagado,
          gananciaNeta: totalVendido - totalPagado,
          totalVentas: sales.length,
          ventasPorSucursal: Array.from(ventasPorSucursal.values())
        }
      };

    } catch (error) {
      console.error('Error en getDailyOptimizedData:', error);
      return {
        sales: [],
        saleDetails: {},
        dashboardData: {
          totalVendido: 0,
          totalPagado: 0,
          gananciaNeta: 0,
          totalVentas: 0,
          ventasPorSucursal: []
        }
      };
    }
  }

}
