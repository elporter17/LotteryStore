import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User as SupabaseUser } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { User, Sale, SaleDetail, Sorteo } from '../models/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

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
      
      if (session?.user) {
        console.log('Usuario autenticado:', session.user.id);
        
        // Usar datos básicos inmediatamente
        const userData: User = {
          id: session.user.id,
          email: session.user.email || '',
          role: 'sucursal' as const,
          sucursal: 'Principal',
          active: true,
          createdAt: new Date()
        };
        
        console.log('Setting user data:', userData);
        this.currentUserSubject.next(userData);
        
        // Cargar datos adicionales en segundo plano
        this.loadUserDataInBackground(session.user.id);
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
      
      if (session?.user) {
        console.log('Sesión encontrada:', session.user.id);
        
        // Usar directamente los datos de la sesión para evitar timeouts
        const userData: User = {
          id: session.user.id,
          email: session.user.email || '',
          role: 'sucursal' as const,
          sucursal: 'Principal',
          active: true,
          createdAt: new Date()
        };
        
        console.log('Datos de usuario inicializados:', userData);
        this.currentUserSubject.next(userData);
        
        // Intentar obtener datos de la tabla users en segundo plano (no bloqueante)
        this.loadUserDataInBackground(session.user.id);
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

      if (data.user) {
        console.log('Usuario autenticado:', data.user.id);
        const userData = await this.getUserData(data.user.id);
        console.log('Datos del usuario obtenidos:', userData);
        return userData;
      }

      return null;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
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
  async createSale(sale: Omit<Sale, 'id' | 'createdAt'>): Promise<string> {
    try {
      const saleData = {
        user_id: sale.userId,
        sucursal: sale.sucursal,
        sorteo: sale.sorteo,
        fecha: sale.fecha,
        total: sale.total,
        created_at: new Date().toISOString()
      };

      const { data, error } = await this.supabase
        .from('sales')
        .insert([saleData])
        .select()
        .single();

      if (error) throw error;

      return data.id;
    } catch (error) {
      console.error('Error creando venta:', error);
      throw error;
    }
  }

  async createSaleDetail(detail: Omit<SaleDetail, 'id'>): Promise<string> {
    try {
      const detailData = {
        sale_id: detail.saleId,
        numero: detail.numero,
        monto: detail.monto
      };

      const { data, error } = await this.supabase
        .from('sale_details')
        .insert([detailData])
        .select()
        .single();

      if (error) throw error;

      return data.id;
    } catch (error) {
      console.error('Error creando detalle de venta:', error);
      throw error;
    }
  }

  async getSalesByDateAndSorteo(fecha: Date, sorteo: string): Promise<Sale[]> {
    try {
      const startOfDay = new Date(fecha);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(fecha);
      endOfDay.setHours(23, 59, 59, 999);

      let query = this.supabase
        .from('sales')
        .select('*')
        .gte('fecha', startOfDay.toISOString())
        .lte('fecha', endOfDay.toISOString())
        .order('created_at', { ascending: false });

      if (sorteo) {
        query = query.eq('sorteo', sorteo);
      }

      const { data, error } = await query;

      if (error) throw error;

      return data.map(sale => ({
        id: sale.id,
        userId: sale.user_id,
        sucursal: sale.sucursal,
        sorteo: sale.sorteo,
        fecha: new Date(sale.fecha),
        total: sale.total,
        createdAt: new Date(sale.created_at)
      })) as Sale[];
    } catch (error) {
      console.error('Error obteniendo ventas:', error);
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
        numero: detail.numero,
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
      const sorteoData = {
        id: sorteoId,
        fecha: sorteo.fecha.toISOString(),
        sorteo: sorteo.sorteo,
        hora_cierre: sorteo.horaCierre.toISOString(),
        numero_ganador: sorteo.numeroGanador,
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
        numeroGanador: data.numero_ganador,
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
      const { error } = await this.supabase
        .from('sorteos')
        .update({
          numero_ganador: numeroGanador,
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
          
          // Si el número coincide con el ganador, calcular ganancia
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
}
