export interface User {
  id: string;
  email: string;
  role: 'admin' | 'sucursal';
  sucursal?: string;
  active: boolean;
  createdAt: Date;
}

export interface UserManagement {
  id: string;
  email: string;
  role: 'admin' | 'sucursal';
  sucursal?: string;
  active: boolean;
  createdAt: Date;
  password?: string;
  raw_user_meta_data?: any;
  created_at?: string;
}

export interface Sale {
  id: string;
  userId: string;
  sucursal: string;
  sorteo: 'mañana' | 'tarde' | 'noche';
  fecha: Date;
  total: number;
  numeroRecibo: string; // Número único de recibo
  correlativo: number; // Correlativo secuencial por sucursal
  createdAt: Date;
}

export interface SaleDetail {
  id: string;
  saleId: string;
  numero: number;
  monto: number;
}

export interface Sorteo {
  id: string;
  fecha: Date;
  sorteo: 'mañana' | 'tarde' | 'noche';
  horaCierre: Date;
  numeroGanador?: string;
  factorMultiplicador: number; // Factor para calcular ganancias (ej: 70)
  totalVendido: number;
  totalPagado: number;
  gananciaNeta: number;
  cerrado: boolean;
  sucursal?: string; // Nueva propiedad para sorteos por sucursal
}

export interface SucursalFactor {
  sucursal: string;
  factor: number;
  usuario?: string;
  email?: string;
}

export interface SorteoSchedule {
  name: 'mañana' | 'tarde' | 'noche';
  label: string;
  closeTime: string; // "10:55", "14:55", "20:55"
}

export const SORTEO_SCHEDULES: SorteoSchedule[] = [
  { name: 'mañana', label: 'Mañana', closeTime: '9:15' },
  { name: 'tarde', label: 'Tarde', closeTime: '14:55' },
  { name: 'noche', label: 'Noche', closeTime: '20:55' }
];
