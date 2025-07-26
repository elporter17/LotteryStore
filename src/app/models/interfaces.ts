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
  openTime: string; // "06:00", "13:00", "20:00"
}

export const SORTEO_SCHEDULES: SorteoSchedule[] = [
  { name: 'mañana', label: 'Mañana', closeTime: '9:15' , openTime: '00:47' },
  { name: 'tarde', label: 'Tarde', closeTime: '14:55', openTime: '10:00' },
  { name: 'noche', label: 'Noche', closeTime: '20:00', openTime: '15:00' }
];

// Interfaces para módulo de cierre de caja y pagos
export interface MovimientoCaja {
  id: string;
  tipo: 'entrada' | 'salida';
  motivo: string;
  monto: number;
  usuarioId: string;
  sorteoId?: string;
  fecha: Date;
  sucursal: string;
  nombreReceptor?: string; // Para pagos de sorteo
  createdAt: Date;
}

export interface CierreDiario {
  id: string;
  fecha: Date;
  usuarioId: string;
  sucursal: string;
  totalVendido: number;
  totalPagado: number;
  neto: number;
  efectivoReportado: number;
  diferencia: number;
  notas?: string;
  sorteosMañana?: SorteoResumen;
  sorteosTarde?: SorteoResumen;
  sorteosNoche?: SorteoResumen;
  createdAt: Date;
}

export interface SorteoResumen {
  numeroGanador?: string;
  factor: number;
  ventaPorNumero: number;
  totalVendido: number;
  totalPagado: number;
  totalNeto: number;
}

export interface PagoSorteo {
  sorteoId: string;
  numeroGanador: string;
  factor: number;
  ventaPorNumero: number; // Cuánto se vendió específicamente del número ganador
  totalVendido: number;
  totalPagar: number;
  totalNeto: number;
  sucursal: string;
  nombreReceptor?: string;
  pagado?: boolean; // Campo para marcar si ya fue pagado
  fechaPago?: Date; // Fecha cuando se realizó el pago
}
