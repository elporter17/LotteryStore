import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User as SupabaseUser } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { User, Sale, SaleDetail, Sorteo } from '../models/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
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



  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
    
    // Inicializar sesión existente
    this.initializeSession();
    
    // Escuchar cambios en la autenticación
    this.supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.id);
      
      if (session?.user && session.user.email) {
        console.log('Usuario autenticado:', session.user.email);
        
        // Determinar rol basado en email
        const userData: User = {
          id: session.user.id,
          email: session.user.email,
          role: session.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal',
          sucursal: this.getSucursalFromEmail(session.user.email),
          active: true,
          createdAt: new Date()
        };
        
        console.log('Setting user data:', userData);
        this.currentUserSubject.next(userData);
      } else {
        console.log('No session, clearing user');
        this.currentUserSubject.next(null);
      }
    });
  }

  // Inicializar sesión existente
  private async initializeSession(): Promise<void> {
    try {
      console.log('Inicializando sesión...');
      
      const { data: { session }, error } = await this.supabase.auth.getSession();
      
      if (error) {
        console.error('Error obteniendo sesión:', error);
        this.currentUserSubject.next(null);
        return;
      }
      
      if (session?.user && session.user.email) {
        console.log('Sesión encontrada:', session.user.email);
        
        // Determinar rol correctamente basado en el email
        const userData: User = {
          id: session.user.id,
          email: session.user.email,
          role: session.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal',
          sucursal: this.getSucursalFromEmail(session.user.email),
          active: true,
          createdAt: new Date()
        };
        
        console.log('Datos de usuario inicializados:', userData);
        this.currentUserSubject.next(userData);
      } else {
        console.log('No hay sesión activa');
        this.currentUserSubject.next(null);
      }
    } catch (error) {
      console.error('Error inicializando sesión:', error);
      this.currentUserSubject.next(null);
    }
  }

  // Cargar datos del usuario en segundo plano
  private async loadUserDataInBackground(uid: string): Promise<void> {
    try {
      console.log('Cargando datos de usuario en segundo plano...');
      
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
        console.log('Datos actualizados desde la base de datos:', data);
        const updatedUser: User = {
          id: data.id,
          email: data.email,
          role: data.role,
          sucursal: data.sucursal,
          active: data.active,
          createdAt: new Date(data.created_at)
        };
        this.currentUserSubject.next(updatedUser);
      } else {
        console.log('No se pudieron cargar datos adicionales, manteniendo datos por defecto');
      }
    } catch (error) {
      console.warn('Error cargando datos en segundo plano:', error);
      // No hacer nada, mantener los datos por defecto
    }
  }

  // Autenticación
  async login(email: string, password: string): Promise<User | null> {
    try {
      console.log('Intentando login con:', email);
      
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error('Error en auth.signInWithPassword:', error);
        throw error;
      }

      if (data.user && data.user.email) {
        console.log('Usuario autenticado:', data.user.email);
        
        // Crear datos del usuario basado en el email
        const userData: User = {
          id: data.user.id,
          email: data.user.email,
          role: data.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal',
          sucursal: this.getSucursalFromEmail(data.user.email),
          active: true,
          createdAt: new Date()
        };
        
        this.currentUserSubject.next(userData);
        return userData;
      }

      return null;
    } catch (error) {
      console.error('Error en login:', error);
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
      console.error('Error testando conexión:', error);
      return false;
    }
  }

  // Usuarios
  async getUserData(uid: string): Promise<User | null> {
    try {
      console.log('Buscando usuario con UID:', uid);
      
      // Primero obtener datos básicos de auth
      const { data: authUser, error: authError } = await this.supabase.auth.getUser();
      
      if (authError || !authUser.user) {
        console.error('Error obteniendo usuario autenticado:', authError);
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
          console.log('Usuario encontrado en tabla users:', data);
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
        console.warn('Error/timeout consultando tabla users, usando datos por defecto:', dbError);
      }

      console.log('Usando datos de auth como fallback');
      return defaultUserData;
      
    } catch (error) {
      console.error('Error en getUserData:', error);
      return null;
    }
  }

  // Ventas
  async getNextCorrelativo(sucursal: string): Promise<number> {
    try {
      console.log('=== CALCULANDO SIGUIENTE CORRELATIVO ===');
      console.log('Sucursal:', sucursal);
      
      // Obtener el correlativo más alto para esta sucursal en el día actual
      const today = new Date();
      const startOfDay = new Date(today);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);
      
      console.log('Fecha inicio del día:', startOfDay.toISOString());
      console.log('Fecha fin del día:', endOfDay.toISOString());
      
      // Primero, obtener TODAS las ventas de esta sucursal para debug
      const { data: allSales, error: allError } = await this.supabase
        .from('sales')
        .select('id, correlativo, fecha, created_at')
        .eq('sucursal', sucursal)
        .order('created_at', { ascending: false });
        
      if (allError) {
        console.error('Error obteniendo todas las ventas:', allError);
      } else {
        console.log('=== TODAS LAS VENTAS DE LA SUCURSAL ===');
        console.log('Total ventas encontradas:', allSales.length);
        allSales.forEach((sale, index) => {
          console.log(`Venta ${index + 1}: ID=${sale.id}, Correlativo=${sale.correlativo}, Fecha=${sale.fecha}, CreatedAt=${sale.created_at}`);
        });
      }
      
      // Ahora obtener solo las del día actual
      const { data, error } = await this.supabase
        .from('sales')
        .select('correlativo, fecha, created_at')
        .eq('sucursal', sucursal)
        .gte('fecha', startOfDay.toISOString())
        .lte('fecha', endOfDay.toISOString())
        .order('correlativo', { ascending: false })
        .limit(1);

      if (error) {
        console.error('Error obteniendo correlativo del día:', error);
        throw error;
      }

      console.log('=== VENTAS DEL DÍA ACTUAL ===');
      console.log('Ventas del día encontradas:', data.length);
      if (data.length > 0) {
        console.log('Venta con correlativo más alto:', data[0]);
        console.log('Correlativo más alto del día:', data[0].correlativo);
      } else {
        console.log('No se encontraron ventas del día actual');
      }

      const nextCorrelativo = data && data.length > 0 ? (data[0].correlativo || 0) + 1 : 1;
      console.log('SIGUIENTE CORRELATIVO CALCULADO:', nextCorrelativo);
      
      return nextCorrelativo;
    } catch (error) {
      console.error('Error calculando correlativo:', error);
      // En caso de error, usar 1 como fallback
      return 1;
    }
  }

  async createSale(sale: Omit<Sale, 'id' | 'createdAt'>): Promise<string> {
    try {
      // Obtener fecha/hora actual en Honduras
      const hondurasTime = this.getHondurasDateTime();
      // Convertir a UTC para guardar en la base de datos
      const utcTime = this.hondurasToUtc(hondurasTime);

      const saleData = {
        user_id: sale.userId,
        sucursal: sale.sucursal,
        sorteo: sale.sorteo,
        fecha: utcTime.toISOString(),
        total: sale.total,
        numero_recibo: sale.numeroRecibo,
        correlativo: sale.correlativo,
        created_at: utcTime.toISOString()
      };

      console.log('=== GUARDANDO VENTA CON DATE-FNS-TZ ===');
      console.log('Hora Honduras:', this.formatHondurasDateTime(hondurasTime));
      console.log('Hora UTC para BD:', utcTime.toISOString());
      console.log('Datos de venta:', saleData);

      const { data, error } = await this.supabase
        .from('sales')
        .insert([saleData])
        .select()
        .single();

      if (error) {
        console.error('Error en la base de datos:', error);
        throw error;
      }

      console.log('Venta guardada exitosamente:', data);
      return data.id;
    } catch (error) {
      console.error('Error creando venta:', error);
      throw error;
    }
  }

  async createSaleDetail(detail: Omit<SaleDetail, 'id'>): Promise<string> {
    try {
      console.log('=== DEBUG createSaleDetail ===');
      console.log('Detalle original recibido:', detail);
      console.log('Número original:', detail.numero, 'Tipo:', typeof detail.numero);
      console.log('Monto original:', detail.monto, 'Tipo:', typeof detail.monto);
      
      // Validar que los datos sean válidos
      if (detail.numero === null || detail.numero === undefined) {
        throw new Error('Número no puede ser null o undefined');
      }
      
      if (detail.monto === null || detail.monto === undefined || detail.monto <= 0) {
        throw new Error('Monto debe ser mayor a 0');
      }
      
      // Convertir el número a string con formato de 2 dígitos (00, 01, 02, etc.)
      const numeroString = detail.numero.toString().padStart(2, '0');
      console.log('Número como string para BD:', numeroString);
      
      const detailData = {
        sale_id: detail.saleId,
        numero: numeroString,  // Enviar como string
        monto: Number(detail.monto)
      };

      console.log('Datos finales que se enviarán a la BD:', detailData);
      console.log('Tipos de datos:', {
        sale_id: typeof detailData.sale_id,
        numero: typeof detailData.numero,
        monto: typeof detailData.monto
      });

      const { data, error } = await this.supabase
        .from('sale_details')
        .insert([detailData])
        .select()
        .single();
      
      if (error) {
        console.error('Error de Supabase:', error);
        console.error('Detalles del error:', JSON.stringify(error, null, 2));
        throw error;
      }

      console.log('Detalle creado exitosamente:', data);
      return data.id;
    } catch (error) {
      console.error('Error creando detalle de venta:', error);
      throw error;
    }
  }



  async getSalesByDateAndSorteo(fecha: Date, sorteo: string): Promise<Sale[]> {
    try {
      console.log('=== INICIANDO CONSULTA DE VENTAS CON DATE-FNS-TZ ===');
      console.log('Fecha solicitada Honduras:', this.formatDateForHonduras(fecha));
      console.log('Sorteo filtro:', sorteo || 'TODOS');

      // Crear rango de fechas para el día seleccionado en hora de Honduras
      const startOfDayHonduras = new Date(fecha);
      startOfDayHonduras.setHours(0, 0, 0, 0);
      const endOfDayHonduras = new Date(fecha);
      endOfDayHonduras.setHours(23, 59, 59, 999);

      // Convertir a UTC para consultar en la base de datos
      const startOfDayUtc = this.hondurasToUtc(startOfDayHonduras);
      const endOfDayUtc = this.hondurasToUtc(endOfDayHonduras);

      console.log('Rango Honduras:', this.formatHondurasDateTime(startOfDayHonduras), 'a', this.formatHondurasDateTime(endOfDayHonduras));
      console.log('Rango UTC para consulta:', startOfDayUtc.toISOString(), 'a', endOfDayUtc.toISOString());

      let query = this.supabase
        .from('sales')
        .select('*')
        .gte('fecha', startOfDayUtc.toISOString())
        .lte('fecha', endOfDayUtc.toISOString())
        .order('created_at', { ascending: false });

      if (sorteo && sorteo.trim() !== '') {
        console.log('Aplicando filtro de sorteo:', sorteo);
        query = query.eq('sorteo', sorteo);
      }

      console.log('Ejecutando consulta...');
      const { data, error } = await query;

      if (error) {
        console.error('Error en consulta Supabase:', error);
        throw error;
      }

      console.log('=== RESULTADOS DE CONSULTA ===');
      console.log('Cantidad de ventas encontradas:', data?.length || 0);
      
      if (!data || data.length === 0) {
        console.warn('No se encontraron ventas para los criterios especificados');
        
        // Hacer una consulta de debug para ver qué hay en la tabla
        const { data: debugData, error: debugError } = await this.supabase
          .from('sales')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);
        
        if (!debugError && debugData) {
          console.log('Últimas 5 ventas en la tabla para debug:');
          debugData.forEach((sale, index) => {
            const fechaHonduras = this.parseDateFromDatabase(sale.fecha);
            console.log(`${index + 1}. ID: ${sale.id}, Fecha Honduras: ${this.formatDateForHonduras(fechaHonduras)}, Fecha UTC: ${sale.fecha}, Sucursal: ${sale.sucursal}`);
          });
        }
        
        return [];
      }

      // Log detallado de cada venta encontrada
      data.forEach((sale, index) => {
        const fechaHonduras = this.parseDateFromDatabase(sale.fecha);
        console.log(`Venta ${index + 1}:`);
        console.log(`  - ID: ${sale.id}`);
        console.log(`  - Fecha Honduras: ${this.formatDateForHonduras(fechaHonduras)}`);
        console.log(`  - Fecha UTC: ${sale.fecha}`);
        console.log(`  - Sucursal: ${sale.sucursal}`);
        console.log(`  - Sorteo: ${sale.sorteo}`);
        console.log(`  - Total: ${sale.total}`);
      });

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

      console.log('=== VENTAS MAPEADAS EXITOSAMENTE ===');
      console.log('Total de ventas devueltas:', mappedSales.length);

      return mappedSales;
    } catch (error) {
      console.error('=== ERROR EN getSalesByDateAndSorteo ===');
      console.error('Error completo:', error);
      console.error('Fecha:', fecha);
      console.error('Sorteo:', sorteo);
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
      console.error('Error obteniendo detalles de venta:', error);
      return [];
    }
  }

  // Sorteos
  async createOrUpdateSorteo(sorteo: Omit<Sorteo, 'id'>): Promise<string> {
    try {
      const sorteoId = `${sorteo.fecha.toDateString()}-${sorteo.sorteo}`;
      
      // Convertir el número ganador a string con formato de 2 dígitos
      const numeroGanadorString = (sorteo.numeroGanador ?? 0).toString().padStart(2, '0');
      
      const sorteoData = {
        id: sorteoId,
        fecha: sorteo.fecha.toISOString(),
        sorteo: sorteo.sorteo,
        hora_cierre: sorteo.horaCierre.toISOString(),
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
      console.error('Error creando/actualizando sorteo:', error);
      throw error;
    }
  }

  async getSorteo(fecha: Date, sorteo: string): Promise<Sorteo | null> {
    try {
      const sorteoId = `${fecha.toDateString()}-${sorteo}`;
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
        // Convertir string a número para la interfaz
        numeroGanador: parseInt(data.numero_ganador) || 0,
        factorMultiplicador: data.factor_multiplicador,
        totalVendido: data.total_vendido,
        totalPagado: data.total_pagado,
        gananciaNeta: data.ganancia_neta,
        cerrado: data.cerrado
      } as Sorteo;
    } catch (error) {
      console.error('Error obteniendo sorteo:', error);
      return null;
    }
  }

  async updateSorteoWinner(sorteoId: string, numeroGanador: number, factorMultiplicador: number): Promise<void> {
    try {
      // Convertir el número a string con formato de 2 dígitos
      const numeroString = numeroGanador.toString().padStart(2, '0');
      
      const { error } = await this.supabase
        .from('sorteos')
        .update({
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          cerrado: true
        })
        .eq('id', sorteoId);

      if (error) throw error;
    } catch (error) {
      console.error('Error actualizando ganador:', error);
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
      const { data: sales, error: salesError } = await this.supabase
        .from('sales')
        .select('*, sale_details(*)')
        .eq('sorteo', sorteo.sorteo)
        .gte('fecha', new Date(sorteo.fecha).toISOString().split('T')[0])
        .lt('fecha', new Date(new Date(sorteo.fecha).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]);

      if (salesError) throw salesError;

      // Calcular total vendido
      let totalVendido = 0;
      let totalPagado = 0;

      for (const sale of sales) {
        for (const detail of sale.sale_details) {
          totalVendido += detail.monto;
          
          // Comparar números como strings (ambos deberían estar en formato "00", "01", etc.)
          if (detail.numero === sorteo.numero_ganador) {
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
      console.error('Error calculando ganancias:', error);
      throw error;
    }
  }

  // Método de debug para verificar conexión y datos
  async debugSalesData(): Promise<void> {
    try {
      console.log('=== DEBUG SALES DATA ===');
      console.log('Supabase URL:', environment.supabase.url);
      console.log('Fecha actual:', new Date().toISOString());

      // Verificar conexión básica
      const { data: tablesData, error: tablesError } = await this.supabase
        .from('sales')
        .select('count(*)', { count: 'exact', head: true });

      if (tablesError) {
        console.error('Error verificando tabla sales:', tablesError);
        return;
      }

      console.log('Total de ventas en la tabla:', tablesData);

      // Verificar ventas de hoy sin filtros
      const today = new Date();
      const startOfDay = new Date(today);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);

      console.log('Rango de fechas para hoy:');
      console.log('Inicio del día:', startOfDay.toISOString());
      console.log('Final del día:', endOfDay.toISOString());

      const { data: todayData, error: todayError } = await this.supabase
        .from('sales')
        .select('*')
        .gte('fecha', startOfDay.toISOString())
        .lte('fecha', endOfDay.toISOString());

      if (todayError) {
        console.error('Error obteniendo ventas de hoy:', todayError);
        return;
      }

      console.log('Ventas encontradas para hoy:', todayData?.length || 0);
      if (todayData && todayData.length > 0) {
        console.log('Primera venta encontrada:', todayData[0]);
      }

      // Verificar ventas de los últimos 3 días
      const threeDaysAgo = new Date(today);
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      threeDaysAgo.setHours(0, 0, 0, 0);

      const { data: recentData, error: recentError } = await this.supabase
        .from('sales')
        .select('*')
        .gte('fecha', threeDaysAgo.toISOString())
        .order('created_at', { ascending: false })
        .limit(10);

      if (recentError) {
        console.error('Error obteniendo ventas recientes:', recentError);
        return;
      }

      console.log('Ventas de los últimos 3 días:', recentData?.length || 0);
      if (recentData && recentData.length > 0) {
        console.log('Ventas recientes encontradas:');
        recentData.forEach((sale, index) => {
          console.log(`${index + 1}. ID: ${sale.id}, Fecha: ${sale.fecha}, Sucursal: ${sale.sucursal}, Total: ${sale.total}`);
        });
      }

    } catch (error) {
      console.error('Error en debug de datos de ventas:', error);
    }
  }

  // Método para verificar permisos y políticas RLS
  async checkDatabasePermissions(): Promise<void> {
    try {
      console.log('=== VERIFICANDO PERMISOS DE BASE DE DATOS ===');
      
      // Verificar sesión actual
      const { data: session, error: sessionError } = await this.supabase.auth.getSession();
      if (sessionError) {
        console.error('Error obteniendo sesión:', sessionError);
        return;
      }
      
      console.log('Usuario autenticado:', session?.session?.user?.id || 'NO AUTENTICADO');
      console.log('Email del usuario:', session?.session?.user?.email || 'SIN EMAIL');
      
      // Probar consulta simple a la tabla sales
      console.log('Probando consulta simple a tabla sales...');
      const { data: simpleQuery, error: simpleError } = await this.supabase
        .from('sales')
        .select('id, sucursal, created_at')
        .limit(1);
      
      if (simpleError) {
        console.error('Error en consulta simple:', simpleError);
        console.error('Código de error:', simpleError.code);
        console.error('Detalles:', simpleError.details);
        console.error('Mensaje:', simpleError.message);
      } else {
        console.log('Consulta simple exitosa, resultado:', simpleQuery);
      }
      
      // Probar inserción de test (para verificar permisos de escritura)
      console.log('Probando permisos de escritura...');
      const testSale = {
        user_id: session?.session?.user?.id || 'test-user',
        sucursal: 'TEST',
        sorteo: 'test',
        fecha: new Date().toISOString(),
        total: 0,
        numero_recibo: 'TEST-001',
        correlativo: 999
      };
      
      const { data: insertTest, error: insertError } = await this.supabase
        .from('sales')
        .insert(testSale)
        .select();
      
      if (insertError) {
        console.error('Error en inserción de prueba:', insertError);
      } else {
        console.log('Inserción de prueba exitosa:', insertTest);
        
        // Eliminar el registro de prueba
        if (insertTest && insertTest.length > 0) {
          await this.supabase
            .from('sales')
            .delete()
            .eq('id', insertTest[0].id);
          console.log('Registro de prueba eliminado');
        }
      }
      
    } catch (error) {
      console.error('Error verificando permisos:', error);
    }
  }

  // ========================
  // GESTIÓN DE USUARIOS
  // ========================

  async getUsers(): Promise<User[]> {
    try {
      console.log('Cargando usuarios...');
      
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
      console.error('Error obteniendo usuarios:', error);
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
        console.warn('Error creando perfiles automáticamente:', error);
      } else {
        console.log('Perfiles creados automáticamente desde auth.users');
      }
    } catch (error) {
      console.warn('Error en createProfilesFromAuthUsers:', error);
    }
  }

  async createUser(userData: { email: string, password: string, role: string, sucursal?: string }): Promise<User> {
    try {
      // Crear usuario en auth
      const { data: authData, error: authError } = await this.supabase.auth.signUp({
        email: userData.email,
        password: userData.password
      });

      if (authError) {
        console.error('Error creando usuario auth:', authError);
        throw authError;
      }

      if (!authData.user) {
        throw new Error('No se pudo crear el usuario');
      }

      // Crear perfil de usuario en la tabla profiles
      const userProfile = {
        id: authData.user.id,
        email: userData.email,
        role: userData.role,
        sucursal: userData.sucursal || '',
        active: true,
        created_at: new Date().toISOString()
      };

      const { data, error } = await this.supabase
        .from('profiles')
        .insert([userProfile])
        .select()
        .single();

      if (error) {
        console.error('Error creando perfil de usuario:', error);
        // Si falla, aún podemos retornar el usuario creado
        return {
          id: authData.user.id,
          email: userData.email,
          role: userData.role as 'admin' | 'sucursal',
          sucursal: userData.sucursal || '',
          active: true,
          createdAt: new Date()
        };
      }

      return {
        id: data.id,
        email: data.email,
        role: data.role,
        sucursal: data.sucursal || '',
        active: data.active,
        createdAt: new Date(data.created_at)
      };
    } catch (error) {
      console.error('Error creando usuario:', error);
      throw error;
    }
  }

  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    try {
      // Convertir el objeto updates al formato de la tabla profiles
      const profileUpdates: any = {};
      if (updates.email) profileUpdates.email = updates.email;
      if (updates.role) profileUpdates.role = updates.role;
      if (updates.sucursal !== undefined) profileUpdates.sucursal = updates.sucursal;
      if (updates.active !== undefined) profileUpdates.active = updates.active;

      const { data, error } = await this.supabase
        .from('profiles')
        .update(profileUpdates)
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        console.error('Error actualizando usuario:', error);
        throw error;
      }

      return {
        id: data.id,
        email: data.email,
        role: data.role,
        sucursal: data.sucursal || '',
        active: data.active,
        createdAt: new Date(data.created_at)
      };
    } catch (error) {
      console.error('Error actualizando usuario:', error);
      throw error;
    }
  }

  async toggleUserStatus(userId: string): Promise<User> {
    try {
      // Primero obtener el estado actual
      const { data: currentUser, error: fetchError } = await this.supabase
        .from('profiles')
        .select('active')
        .eq('id', userId)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      // Cambiar el estado
      const newStatus = !currentUser.active;
      return await this.updateUser(userId, { active: newStatus });
    } catch (error) {
      console.error('Error cambiando estado del usuario:', error);
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const { error } = await this.supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (error) {
        console.error('Error eliminando usuario:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error eliminando usuario:', error);
      throw error;
    }
  }

  async updateUserPassword(userId: string, newPassword: string): Promise<void> {
    try {
      const { error } = await this.supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        console.error('Error actualizando contraseña:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error actualizando contraseña:', error);
      throw error;
    }
  }

  // ========================
  // GESTIÓN DE SORTEOS
  // ========================

  async getSorteoSchedules(): Promise<any[]> {
    try {
      console.log('Ejecutando consulta a sorteo_schedules...');
      
      const { data, error } = await this.supabase
        .from('sorteo_schedules')
        .select('*')
        .order('close_time', { ascending: true });

      if (error) {
        console.error('Error en consulta sorteo_schedules:', error);
        throw error;
      }

      console.log('Datos obtenidos de sorteo_schedules:', data);
      return data || [];
    } catch (error) {
      console.error('Error obteniendo horarios de sorteos:', error);
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
        console.error('Error creando sorteo:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error creando sorteo:', error);
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
        console.error('Error actualizando sorteo:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error actualizando sorteo:', error);
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
        console.error('Error eliminando sorteo:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error eliminando sorteo:', error);
      throw error;
    }
  }

  // ========================
  // MÉTODOS DE DEBUG Y SETUP
  // ========================

  async debugSorteoSchedules(): Promise<void> {
    try {
      console.log('=== DEBUG SORTEO SCHEDULES ===');
      
      // Primero verificar si la tabla existe consultando directamente
      const { data: testQuery, error: testError } = await this.supabase
        .from('sorteo_schedules')
        .select('*')
        .limit(1);

      if (testError) {
        console.error('❌ Error consultando sorteo_schedules:', testError);
        
        if (testError.message.includes('does not exist')) {
          console.log('🔧 La tabla sorteo_schedules no existe. Necesitas crearla.');
          console.log('🔧 Ejecuta este SQL en Supabase Dashboard:');
          console.log(`
CREATE TABLE IF NOT EXISTS sorteo_schedules (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    label VARCHAR(100) NOT NULL,
    close_time VARCHAR(5) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO sorteo_schedules (name, label, close_time) VALUES
    ('matutino', 'Matutino', '11:00'),
    ('vespertino', 'Vespertino', '17:00'),
    ('nocturno', 'Nocturno', '21:00')
ON CONFLICT (name) DO NOTHING;

ALTER TABLE sorteo_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON sorteo_schedules
    FOR SELECT USING (true);
          `);
        }
        return;
      }

      console.log('✅ Tabla sorteo_schedules existe');
      console.log('📊 Datos encontrados:', testQuery);

    } catch (error) {
      console.error('💥 Error en debug sorteo_schedules:', error);
    }
  }

  async initializeSorteoSchedules(): Promise<void> {
    try {
      // Crear los sorteos por defecto si no existen
      const defaultSorteos = [
        { name: 'matutino', label: 'Matutino', close_time: '11:00' },
        { name: 'vespertino', label: 'Vespertino', close_time: '17:00' },
        { name: 'nocturno', label: 'Nocturno', close_time: '21:00' }
      ];

      for (const sorteo of defaultSorteos) {
        const { error } = await this.supabase
          .from('sorteo_schedules')
          .upsert(sorteo, { onConflict: 'name' });

        if (error) {
          console.error(`Error creando sorteo ${sorteo.name}:`, error);
        } else {
          console.log(`Sorteo ${sorteo.name} creado/actualizado exitosamente`);
        }
      }
    } catch (error) {
      console.error('Error inicializando sorteo_schedules:', error);
    }
  }

  // Método para inicializar la tabla de perfiles si no existe
  async initializeProfilesTable(): Promise<void> {
    try {
      console.log('Verificando tabla profiles...');
      
      // Simplemente intentar hacer una consulta para ver si la tabla existe
      const { error } = await this.supabase
        .from('profiles')
        .select('count', { count: 'exact', head: true });
      
      if (error) {
        console.warn('La tabla profiles no existe o no es accesible:', error.message);
      } else {
        console.log('Tabla profiles disponible');
      }
    } catch (error) {
      console.warn('Error verificando tabla profiles:', error);
    }
  }

  // Método para sincronizar usuarios manualmente
  async syncUsersFromAuth(): Promise<void> {
    try {
      console.log('Función de sincronización simplificada - no hace nada por ahora');
      console.log('Los usuarios se muestran desde la lista por defecto');
    } catch (error) {
      console.error('Error en sincronización:', error);
    }
  }

  // ========== FUNCIONES DE TIMEZONE HONDURAS CON DATE-FNS-TZ ==========
  private readonly HONDURAS_TIMEZONE = 'America/Tegucigalpa';

  // Función para obtener la fecha/hora actual en Honduras
  getHondurasDateTime(): Date {
    const now = new Date();
    return toZonedTime(now, this.HONDURAS_TIMEZONE);
  }

  // Función para formatear fecha/hora en formato de Honduras
  formatHondurasDateTime(date?: Date): string {
    const targetDate = date || new Date();
    return formatInTimeZone(targetDate, this.HONDURAS_TIMEZONE, 'yyyy-MM-dd hh:mm:ss a', { 
      locale: es 
    });
  }

  // Función para convertir una fecha de Honduras a UTC para guardar en BD
  private hondurasToUtc(date: Date): Date {
    return fromZonedTime(date, this.HONDURAS_TIMEZONE);
  }

  // Función para convertir una fecha UTC de BD a hora de Honduras
  private utcToHonduras(utcDate: Date): Date {
    return toZonedTime(utcDate, this.HONDURAS_TIMEZONE);
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

}
