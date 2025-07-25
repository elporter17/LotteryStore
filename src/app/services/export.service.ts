import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { SupabaseService } from './supabase.service';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: typeof autoTable;
  }
}

export interface ReportData {
  // Resumen General
  resumenGeneral: {
    totalVendido: number;
    totalPagado: number;
    gananciaNeta: number;
    ventasTotales: number;
    fechaReporte: string;
    horaReporte: string;
    filtroAplicado: string;
  };
  
  // Resumen por Sorteo
  resumenPorSorteo: Array<{
    sorteo: string;
    totalVendido: number;
    totalPagado: number;
    gananciaNeta: number;
    ventasTotales: number;
    estado: string;
    numeroGanador?: string;
    factor?: number;
  }>;
  
  // Resumen por Sucursal (con factor)
  resumenPorSucursal: Array<{
    sucursal: string;
    factor: number;
    totalVendido: number;
    totalPagado: number;
    gananciaNeta: number;
    ventasTotales: number;
  }>;
  
  // Números vendidos por sorteo (formato tablero)
  numerosPorSorteo: Array<{
    sorteo: string;
    sucursal: string;
    numeros: Array<{
      numero: number;
      totalVendido: number;
      cantidadVentas: number;
      porcentaje: number;
    }>;
    totalSorteoSucursal: number;
  }>;
  
  // Detalle general de ventas
  detalleVentas: Array<{
    numeroRecibo: string;
    fecha: string;
    hora: string;
    sorteo: string;
    sucursal: string;
    numeros: string;
    total: number;
    estado: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(private supabaseService: SupabaseService) { }

  async exportToExcel(data: any, filename: string = 'reporte-diario'): Promise<void> {
    try {
      // Crear un nuevo workbook
      const workbook = XLSX.utils.book_new();

      // ===== HOJA 1: RESUMEN GENERAL =====
      const resumenData = [
        ['REPORTE DIARIO - SISTEMA DE LOTERÍA'],
        ['Fecha:', data.resumenGeneral.fechaReporte],
        ['Hora:', data.resumenGeneral.horaReporte],
        ['Filtros Aplicados:', data.resumenGeneral.filtroAplicado],
        [''],
        ['RESUMEN GENERAL'],
        ['Indicador', 'Valor'],
        ['Total Vendido', data.resumenGeneral.totalVendido],
        ['Total Pagado', data.resumenGeneral.totalPagado],
        ['Ganancia Neta', data.resumenGeneral.gananciaNeta],
        ['Ventas Totales', data.resumenGeneral.ventasTotales]
      ];
      const wsResumen = XLSX.utils.aoa_to_sheet(resumenData);
      
      // Aplicar formato
      wsResumen['!cols'] = [{ width: 20 }, { width: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsResumen, 'Resumen General');

      // ===== HOJA 2: RESUMEN POR SORTEO =====
      const sorteoHeaders = ['Sorteo', 'Total Vendido', 'Total Pagado', 'Ganancia Neta', 'Ventas', 'Estado', 'No. Ganador', 'Factor'];
      const sorteoRows = data.resumenPorSorteo.length > 0 
        ? data.resumenPorSorteo.map((s: any) => [
            s.sorteo,
            s.totalVendido,
            s.totalPagado,
            s.gananciaNeta,
            s.ventasTotales,
            s.estado,
            s.numeroGanador,
            s.factor
          ])
        : [['Sin datos', 0, 0, 0, 0, '', '', 0]];
        
      const sorteoData = [
        ['RESUMEN POR SORTEO'],
        [''],
        sorteoHeaders,
        ...sorteoRows
      ];
      const wsSorteo = XLSX.utils.aoa_to_sheet(sorteoData);
      wsSorteo['!cols'] = [{ width: 15 }, { width: 12 }, { width: 12 }, { width: 12 }, { width: 8 }, { width: 10 }, { width: 12 }, { width: 8 }];
      XLSX.utils.book_append_sheet(workbook, wsSorteo, 'Resumen por Sorteo');

      // ===== HOJA 3: RESUMEN POR SUCURSAL =====
      const sucursalHeaders = ['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia Neta', 'Ventas'];
      const sucursalRows = data.resumenPorSucursal.length > 0 
        ? data.resumenPorSucursal.map((s: any) => [
            s.sucursal,
            s.factor,
            s.totalVendido,
            s.totalPagado,
            s.gananciaNeta,
            s.ventasTotales
          ])
        : [['Sin datos', 0, 0, 0, 0, 0]];
        
      const sucursalData = [
        ['RESUMEN POR SUCURSAL'],
        [''],
        sucursalHeaders,
        ...sucursalRows
      ];
      const wsSucursal = XLSX.utils.aoa_to_sheet(sucursalData);
      wsSucursal['!cols'] = [{ width: 15 }, { width: 8 }, { width: 12 }, { width: 12 }, { width: 12 }, { width: 8 }];
      XLSX.utils.book_append_sheet(workbook, wsSucursal, 'Resumen por Sucursal');

      // ===== HOJA 4: NÚMEROS VENDIDOS POR SORTEO =====
      const numerosData = [['NÚMEROS VENDIDOS POR SORTEO'], ['']];
      
      if (data.numerosPorSorteo.length > 0) {
        data.numerosPorSorteo.forEach((grupo: any) => {
          // Título del grupo
          numerosData.push([`${grupo.sorteo} - ${grupo.sucursal} (Total: L ${grupo.totalSorteoSucursal.toFixed(2)})`]);
          numerosData.push(['Número', 'Total Vendido', 'Cantidad Ventas', 'Porcentaje']);
          
          // Números del grupo
          grupo.numeros.forEach((num: any) => {
            numerosData.push([
              num.numero.toString().padStart(2, '0'),
              num.totalVendido,
              num.cantidadVentas,
              num.porcentaje
            ]);
          });
          
          numerosData.push(['']); // Línea en blanco entre grupos
        });
      } else {
        numerosData.push(['Sin datos de números vendidos']);
      }
      
      const wsNumeros = XLSX.utils.aoa_to_sheet(numerosData);
      wsNumeros['!cols'] = [{ width: 10 }, { width: 12 }, { width: 12 }, { width: 10 }];
      XLSX.utils.book_append_sheet(workbook, wsNumeros, 'Números por Sorteo');

      // ===== HOJA 5: DETALLE DE VENTAS =====
      const ventasHeaders = ['No. Recibo', 'Fecha', 'Hora', 'Sorteo', 'Sucursal', 'Números', 'Total', 'Estado'];
      const ventasRows = data.detalleVentas.length > 0
        ? data.detalleVentas.map((v: any) => [
            v.numeroRecibo,
            v.fecha,
            v.hora,
            v.sorteo,
            v.sucursal,
            v.numeros,
            v.total,
            v.estado
          ])
        : [['Sin datos', '', '', '', '', '', 0, '']];
        
      const ventasData = [
        ['DETALLE COMPLETO DE VENTAS'],
        [''],
        ventasHeaders,
        ...ventasRows,
        [''],
        ['TOTALES:'],
        ['Total de Ventas:', data.detalleVentas.length],
        ['Monto Total:', data.resumenGeneral.totalVendido]
      ];
      const wsVentas = XLSX.utils.aoa_to_sheet(ventasData);
      wsVentas['!cols'] = [{ width: 12 }, { width: 12 }, { width: 10 }, { width: 12 }, { width: 15 }, { width: 30 }, { width: 10 }, { width: 10 }];
      XLSX.utils.book_append_sheet(workbook, wsVentas, 'Detalle de Ventas');

      // Generar el archivo Excel con fecha de Honduras
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      const hondurasDate = this.supabaseService.formatDateTimeLocalHonduras(this.supabaseService.getHondurasDateTime()).split('T')[0];
      saveAs(blob, `${filename}-${hondurasDate}.xlsx`);

    } catch (error) {
      console.error('Error exportando a Excel:', error);
      throw error;
    }
  }

  // Nuevo método para exportar Excel tal como se ve en el admin
  async exportVisualToExcel(data: any, filename: string = 'reporte-admin-visual'): Promise<void> {
    try {
      // Crear un nuevo workbook
      const workbook = XLSX.utils.book_new();

      // ===== HOJA 1: DASHBOARD PRINCIPAL =====
      const dashboardData = [
        ['REPORTE ADMINISTRADOR - SISTEMA DE LOTERÍA'],
        ['Fecha:', data.fechaReporte],
        ['Hora:', data.horaReporte],
        ['Filtros Aplicados:', data.filtroAplicado],
        [''],
        ['DASHBOARD PRINCIPAL'],
        ['Indicador', 'Valor'],
        ['Total Vendido', `L ${data.dashboard.totalVendido.toFixed(2)}`],
        ['Total Pagado', `L ${data.dashboard.totalPagado.toFixed(2)}`],
        ['Ganancia Neta', `L ${data.dashboard.gananciaNeta.toFixed(2)}`],
        ['Ventas Totales', data.dashboard.ventasTotales]
      ];
      const wsDashboard = XLSX.utils.aoa_to_sheet(dashboardData);
      
      // Aplicar formato
      wsDashboard['!cols'] = [{ width: 20 }, { width: 15 }];
      XLSX.utils.book_append_sheet(workbook, wsDashboard, 'Dashboard');

      // ===== HOJA 2: DETALLE POR SUCURSALES (LA MÁS IMPORTANTE) =====
      const sucursalData = [
        ['DETALLE POR SUCURSALES'],
        [''],
        data.detallePorSucursales.headers,
        ...data.detallePorSucursales.filas.map((fila: any) => {
          // Si ya es un array, usar directamente
          if (Array.isArray(fila)) {
            return fila;
          }
          // Si es un objeto, convertir a array
          return [
            fila.sucursal,
            fila.factor,
            fila.totalVendido,
            fila.totalPagado,
            fila.gananciaNeta
          ];
        }),
        [''],
        ['TOTAL GENERAL'],
        // Manejar totales como array u objeto
        Array.isArray(data.detallePorSucursales.totales) 
          ? data.detallePorSucursales.totales
          : [
              data.detallePorSucursales.totales.sucursal,
              data.detallePorSucursales.totales.factor,
              data.detallePorSucursales.totales.totalVendido,
              data.detallePorSucursales.totales.totalPagado,
              data.detallePorSucursales.totales.gananciaNeta
            ]
      ];
      const wsSucursales = XLSX.utils.aoa_to_sheet(sucursalData);
      wsSucursales['!cols'] = [
        { width: 20 }, 
        { width: 10 }, 
        { width: 15 }, 
        { width: 15 }, 
        { width: 15 }
      ];
      XLSX.utils.book_append_sheet(workbook, wsSucursales, 'Detalle Sucursales');

      // ===== HOJA 3: NÚMEROS POR SORTEO =====
      const numerosData = [['NÚMEROS VENDIDOS POR SORTEO'], ['']];
      
      if (data.numerosPorSorteo.length > 0) {
        data.numerosPorSorteo.forEach((sorteoGroup: any) => {
          sorteoGroup.sucursales.forEach((sucursalGroup: any) => {
            // Título del grupo
            numerosData.push([`${sorteoGroup.sorteo} - ${sucursalGroup.sucursal}`]);
            
            // Top 5 si existe
            if (sucursalGroup.topNumeros && sucursalGroup.topNumeros.length > 0) {
              numerosData.push(['Top 5 Números Más Vendidos:']);
              numerosData.push(['Posición', 'Número', 'Total Vendido']);
              
              for (let i = 0; i < Math.min(5, sucursalGroup.topNumeros.length); i++) {
                const num = sucursalGroup.topNumeros[i];
                numerosData.push([
                  `#${i + 1}`,
                  num.numero.toString().padStart(2, '0'),
                  num.totalVendido
                ]);
              }
            }
            
            // Tablero completo
            if (sucursalGroup.numeros && sucursalGroup.numeros.length > 0) {
              numerosData.push(['']);
              numerosData.push(['Tablero Completo (00-99):']);
              numerosData.push(['Número', 'Total Vendido', 'Cantidad Ventas']);
              
              sucursalGroup.numeros.forEach((num: any) => {
                numerosData.push([
                  num.numero.toString().padStart(2, '0'),
                  num.totalVendido,
                  num.cantidadVentas
                ]);
              });
            }
            
            numerosData.push(['']); // Línea en blanco entre grupos
          });
        });
      } else {
        numerosData.push(['Sin datos de números vendidos']);
      }
      
      const wsNumeros = XLSX.utils.aoa_to_sheet(numerosData);
      wsNumeros['!cols'] = [{ width: 15 }, { width: 12 }, { width: 12 }];
      XLSX.utils.book_append_sheet(workbook, wsNumeros, 'Números por Sorteo');

      // Generar el archivo Excel con fecha de Honduras
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      const hondurasDate = this.supabaseService.formatDateTimeLocalHonduras(this.supabaseService.getHondurasDateTime()).split('T')[0];
      saveAs(blob, `${filename}-${hondurasDate}.xlsx`);

    } catch (error) {
      console.error('Error exportando Excel visual:', error);
      throw error;
    }
  }

  async exportToPDF(data: any, filename: string = 'reporte-diario'): Promise<void> {
    try {
      const doc = new jsPDF();
      const pageHeight = doc.internal.pageSize.height;
      let yPosition = 20;

      // Función auxiliar para agregar nueva página si es necesario
      const checkNewPage = (requiredSpace: number = 30) => {
        if (yPosition + requiredSpace > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
        }
      };

      // ===== ENCABEZADO PRINCIPAL =====
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text('REPORTE DIARIO - SISTEMA DE LOTERÍA', 20, yPosition);
      yPosition += 15;

      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(`Fecha: ${data.resumenGeneral.fechaReporte}`, 20, yPosition);
      doc.text(`Hora: ${data.resumenGeneral.horaReporte}`, 120, yPosition);
      yPosition += 8;
      
      doc.setFontSize(10);
      doc.text(`Filtros: ${data.resumenGeneral.filtroAplicado}`, 20, yPosition);
      yPosition += 20;

      // ===== 1. RESUMEN GENERAL =====
      checkNewPage(80);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('1. RESUMEN GENERAL', 20, yPosition);
      yPosition += 15;

      const resumenTable = [
        ['Indicador', 'Valor'],
        ['Total Vendido', `L ${data.resumenGeneral.totalVendido.toFixed(2)}`],
        ['Total Pagado', `L ${data.resumenGeneral.totalPagado.toFixed(2)}`],
        ['Ganancia Neta', `L ${data.resumenGeneral.gananciaNeta.toFixed(2)}`],
        ['Ventas Totales', data.resumenGeneral.ventasTotales.toString()]
      ];

      autoTable(doc, {
        head: [resumenTable[0]],
        body: resumenTable.slice(1),
        startY: yPosition,
        theme: 'striped',
        headStyles: { fillColor: [41, 128, 185], textColor: 255 },
        styles: { fontSize: 11, cellPadding: 5 },
        columnStyles: {
          0: { cellWidth: 60 },
          1: { cellWidth: 60, halign: 'right' }
        }
      });

      yPosition = (doc as any).lastAutoTable.finalY + 25;

      // ===== 2. RESUMEN POR SORTEO =====
      checkNewPage(100);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('2. RESUMEN POR SORTEO', 20, yPosition);
      yPosition += 15;

      if (data.resumenPorSorteo.length > 0) {
        const sorteoTableData = [
          ['Sorteo', 'Vendido', 'Pagado', 'Ganancia', 'Ventas', 'Estado', 'Ganador', 'Factor'],
          ...data.resumenPorSorteo.map((s: any) => [
            s.sorteo,
            `L ${s.totalVendido.toFixed(0)}`,
            `L ${s.totalPagado.toFixed(0)}`,
            `L ${s.gananciaNeta.toFixed(0)}`,
            s.ventasTotales.toString(),
            s.estado,
            s.numeroGanador,
            s.factor.toString()
          ])
        ];

        autoTable(doc, {
          head: [sorteoTableData[0]],
          body: sorteoTableData.slice(1),
          startY: yPosition,
          theme: 'striped',
          headStyles: { fillColor: [46, 204, 113], textColor: 255 },
          styles: { fontSize: 9, cellPadding: 3 },
          columnStyles: {
            0: { cellWidth: 25 },
            1: { cellWidth: 20, halign: 'right' },
            2: { cellWidth: 20, halign: 'right' },
            3: { cellWidth: 20, halign: 'right' },
            4: { cellWidth: 15, halign: 'center' },
            5: { cellWidth: 20, halign: 'center' },
            6: { cellWidth: 20, halign: 'center' },
            7: { cellWidth: 15, halign: 'center' }
          }
        });

        yPosition = (doc as any).lastAutoTable.finalY + 25;
      }

      // ===== 3. RESUMEN POR SUCURSAL =====
      checkNewPage(100);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('3. RESUMEN POR SUCURSAL', 20, yPosition);
      yPosition += 15;

      if (data.resumenPorSucursal.length > 0) {
        const sucursalTableData = [
          ['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia', 'Ventas'],
          ...data.resumenPorSucursal.map((s: any) => [
            s.sucursal,
            `${s.factor}x`,
            `L ${s.totalVendido.toFixed(2)}`,
            `L ${s.totalPagado.toFixed(2)}`,
            `L ${s.gananciaNeta.toFixed(2)}`,
            s.ventasTotales.toString()
          ])
        ];

        autoTable(doc, {
          head: [sucursalTableData[0]],
          body: sucursalTableData.slice(1),
          startY: yPosition,
          theme: 'striped',
          headStyles: { fillColor: [230, 126, 34], textColor: 255 },
          styles: { fontSize: 10, cellPadding: 4 },
          columnStyles: {
            0: { cellWidth: 40 },
            1: { cellWidth: 20, halign: 'center' },
            2: { cellWidth: 30, halign: 'right' },
            3: { cellWidth: 30, halign: 'right' },
            4: { cellWidth: 30, halign: 'right' },
            5: { cellWidth: 20, halign: 'center' }
          }
        });

        yPosition = (doc as any).lastAutoTable.finalY + 25;
      }

      // ===== 4. NÚMEROS VENDIDOS POR SORTEO (FORMATO CUADRO) =====
      doc.addPage();
      yPosition = 20;
      
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('4. NÚMEROS VENDIDOS POR SORTEO', 20, yPosition);
      yPosition += 15;

      if (data.numerosPorSorteo.length > 0) {
        data.numerosPorSorteo.forEach((grupo: any) => {
          checkNewPage(80);
          
          // Título del grupo
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text(`${grupo.sorteo} - ${grupo.sucursal} (Total: L ${grupo.totalSorteoSucursal.toFixed(2)})`, 20, yPosition);
          yPosition += 12;

          // Crear cuadro de números (formato 10x10)
          if (grupo.numeros.length > 0) {
            // Organizar números en filas de 5
            const rows = [];
            for (let i = 0; i < grupo.numeros.length; i += 5) {
              const row = grupo.numeros.slice(i, i + 5).map((n: any) => 
                `${n.numero.toString().padStart(2, '0')}: L${n.totalVendido.toFixed(0)}`
              );
              // Rellenar con espacios vacíos si es necesario
              while (row.length < 5) row.push('');
              rows.push(row);
            }

            autoTable(doc, {
              body: rows,
              startY: yPosition,
              theme: 'grid',
              styles: { 
                fontSize: 8,
                cellPadding: 4,
                halign: 'center',
                valign: 'middle'
              },
              columnStyles: {
                0: { cellWidth: 34 },
                1: { cellWidth: 34 },
                2: { cellWidth: 34 },
                3: { cellWidth: 34 },
                4: { cellWidth: 34 }
              }
            });

            yPosition = (doc as any).lastAutoTable.finalY + 20;
          }
        });
      } else {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('No hay datos de números vendidos para mostrar', 20, yPosition);
        yPosition += 20;
      }

      // ===== 5. DETALLE DE VENTAS =====
      doc.addPage();
      yPosition = 20;
      
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('5. DETALLE COMPLETO DE VENTAS', 20, yPosition);
      yPosition += 15;

      if (data.detalleVentas.length > 0) {
        const ventasTableData = [
          ['Recibo', 'Fecha', 'Hora', 'Sorteo', 'Sucursal', 'Números', 'Total'],
          ...data.detalleVentas.map((v: any) => [
            v.numeroRecibo,
            v.fecha,
            v.hora,
            v.sorteo,
            v.sucursal,
            v.numeros.length > 25 ? v.numeros.substring(0, 25) + '...' : v.numeros,
            `L ${v.total.toFixed(2)}`
          ])
        ];

        autoTable(doc, {
          head: [ventasTableData[0]],
          body: ventasTableData.slice(1),
          startY: yPosition,
          theme: 'striped',
          headStyles: { fillColor: [52, 152, 219], textColor: 255 },
          styles: { fontSize: 7, cellPadding: 2 },
          columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 22 },
            2: { cellWidth: 18 },
            3: { cellWidth: 22 },
            4: { cellWidth: 25 },
            5: { cellWidth: 45 },
            6: { cellWidth: 18, halign: 'right' }
          }
        });

        // Totales finales
        yPosition = (doc as any).lastAutoTable.finalY + 15;
        checkNewPage(30);
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('TOTALES FINALES:', 20, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`Total de Ventas: ${data.detalleVentas.length}`, 20, yPosition);
        yPosition += 6;
        doc.text(`Monto Total Vendido: L ${data.resumenGeneral.totalVendido.toFixed(2)}`, 20, yPosition);
        yPosition += 6;
        doc.text(`Monto Total Pagado: L ${data.resumenGeneral.totalPagado.toFixed(2)}`, 20, yPosition);
        yPosition += 6;
        doc.text(`Ganancia Neta: L ${data.resumenGeneral.gananciaNeta.toFixed(2)}`, 20, yPosition);
      }

      // Guardar el PDF con fecha de Honduras
      const hondurasDate = this.supabaseService.formatDateTimeLocalHonduras(this.supabaseService.getHondurasDateTime()).split('T')[0];
      doc.save(`${filename}-${hondurasDate}.pdf`);

    } catch (error) {
      console.error('Error exportando a PDF:', error);
      throw error;
    }
  }

  // Nuevo método para exportar PDF tal como se ve en el admin
  async exportVisualToPDF(data: any, filename: string = 'reporte-admin-visual'): Promise<void> {
    try {
      const doc = new jsPDF({
        orientation: 'landscape', // Página más grande como solicitaste
        unit: 'mm',
        format: 'a4'
      });

      // ENCABEZADO PRINCIPAL (como en la imagen)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('REPORTE ADMINISTRADOR - SISTEMA DE LOTERÍA', 20, 25);
      
      // Información de fecha y hora (como en la imagen)
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text(`Fecha: ${data.fecha}`, 20, 35);
      doc.text(`Hora: ${data.hora}`, 150, 35);
      doc.text(`Filtros: ${data.filtros}`, 20, 42);

      let yPosition = 55;

      // 1. DASHBOARD CARDS (como las cards azul, naranja y verde de la imagen)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text('1. RESUMEN GENERAL', 20, yPosition);
      yPosition += 10;

      // Crear cards como en la interfaz
      const dashboardData = [
        ['Métrica', 'Valor'],
        ['Total Vendido', `L ${data.dashboard.totalVendido.toLocaleString('es-HN', {minimumFractionDigits: 2})}`],
        ['Total Pagado', `L ${data.dashboard.totalPagado.toLocaleString('es-HN', {minimumFractionDigits: 2})}`],
        ['Ganancia Total', `L ${data.dashboard.gananciaNeta.toLocaleString('es-HN', {minimumFractionDigits: 2})}`],
        ['Ventas Totales', data.dashboard.ventasTotales.toString()]
      ];

      autoTable(doc, {
        head: [dashboardData[0]],
        body: dashboardData.slice(1),
        startY: yPosition,
        theme: 'grid',
        headStyles: { 
          fillColor: [52, 73, 94],
          textColor: 255,
          fontSize: 12,
          fontStyle: 'bold'
        },
        styles: { 
          fontSize: 11,
          cellPadding: 8
        },
        columnStyles: {
          0: { fontStyle: 'bold', fillColor: [245, 245, 245] },
          1: { halign: 'right', fontStyle: 'bold' }
        },
        margin: { left: 20, right: 20 }
      });

      yPosition = (doc as any).lastAutoTable.finalY + 20;

      // 2. DETALLE POR SUCURSALES (LA PARTE MÁS IMPORTANTE - igual que en la imagen)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('🏢 Detalle por Sucursales', 20, yPosition);
      yPosition += 15;

      if (data.detallePorSucursales.filas.length > 0) {
        const sucursalTableData = [
          data.detallePorSucursales.headers,
          ...data.detallePorSucursales.filas.map((fila: any) => {
            // Si ya es un array, usar directamente
            if (Array.isArray(fila)) {
              return fila;
            }
            // Si es un objeto, convertir a array
            return [
              fila.sucursal,
              fila.factor,
              `L ${fila.totalVendido.toFixed(2)}`,
              `L ${fila.totalPagado.toFixed(2)}`,
              `L ${fila.gananciaNeta.toFixed(2)}`
            ];
          })
        ];

        autoTable(doc, {
          head: [sucursalTableData[0]],
          body: sucursalTableData.slice(1),
          startY: yPosition,
          theme: 'striped',
          headStyles: { 
            fillColor: [52, 73, 94],
            textColor: 255,
            fontSize: 12,
            fontStyle: 'bold'
          },
          styles: { 
            fontSize: 11, 
            cellPadding: 8,
            lineColor: [200, 200, 200],
            lineWidth: 0.5
          },
          columnStyles: {
            0: { cellWidth: 50, fontStyle: 'bold' }, // Sucursal
            1: { cellWidth: 25, halign: 'center' }, // Factor
            2: { cellWidth: 40, halign: 'right' },  // Total Vendido
            3: { cellWidth: 40, halign: 'right' },  // Total Pagado
            4: { cellWidth: 40, halign: 'right' }   // Ganancia Neta
          },
          alternateRowStyles: { fillColor: [249, 249, 249] },
          margin: { left: 20, right: 20 }
        });

        yPosition = (doc as any).lastAutoTable.finalY + 10;

        // TOTAL GENERAL (destacado igual que en la imagen con fondo verde)
        const totalesRow = Array.isArray(data.detallePorSucursales.totales) 
          ? data.detallePorSucursales.totales 
          : [
              data.detallePorSucursales.totales.sucursal,
              data.detallePorSucursales.totales.factor,
              `L ${data.detallePorSucursales.totales.totalVendido.toFixed(2)}`,
              `L ${data.detallePorSucursales.totales.totalPagado.toFixed(2)}`,
              `L ${data.detallePorSucursales.totales.gananciaNeta.toFixed(2)}`
            ];

        const totalesData = [totalesRow];

        autoTable(doc, {
          body: totalesData,
          startY: yPosition,
          theme: 'grid',
          styles: { 
            fontSize: 12,
            fontStyle: 'bold',
            fillColor: [46, 125, 50], // Verde como en la imagen
            textColor: 255,
            cellPadding: 8
          },
          columnStyles: {
            0: { cellWidth: 50 }, // Sucursal
            1: { cellWidth: 25, halign: 'center' }, // Factor
            2: { cellWidth: 40, halign: 'right' },  // Total Vendido
            3: { cellWidth: 40, halign: 'right' },  // Total Pagado
            4: { cellWidth: 40, halign: 'right' }   // Ganancia Neta
          },
          margin: { left: 20, right: 20 }
        });

        yPosition = (doc as any).lastAutoTable.finalY + 20;
      }

      // 3. NÚMEROS POR SORTEO (si hay datos)
      if (data.numerosPorSorteo && data.numerosPorSorteo.length > 0) {
        // Verificar si necesitamos nueva página
        if (yPosition > 150) {
          doc.addPage();
          yPosition = 25;
        }

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text('2. NÚMEROS POR SORTEO Y SUCURSAL', 20, yPosition);
        yPosition += 15;

        data.numerosPorSorteo.forEach((sorteoGroup: any, index: number) => {
          if (yPosition > 180) {
            doc.addPage();
            yPosition = 25;
          }

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          doc.text(`Sorteo: ${sorteoGroup.sorteo}`, 20, yPosition);
          yPosition += 10;

          sorteoGroup.sucursales.forEach((sucursalGroup: any) => {
            if (yPosition > 170) {
              doc.addPage();
              yPosition = 25;
            }

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            doc.text(`Sucursal: ${sucursalGroup.sucursal}`, 25, yPosition);
            yPosition += 8;

            // Mostrar top 10 números más vendidos
            const topNumeros = sucursalGroup.numeros.slice(0, 10);
            const numerosData = [
              ['Número', 'Total Vendido', 'Cantidad', '%'],
              ...topNumeros.map((num: any) => [
                num.numero.toString().padStart(2, '0'),
                `L ${num.totalVendido.toFixed(2)}`,
                num.cantidadVentas.toString(),
                `${num.porcentaje.toFixed(1)}%`
              ])
            ];

            autoTable(doc, {
              head: [numerosData[0]],
              body: numerosData.slice(1),
              startY: yPosition,
              theme: 'grid',
              styles: { fontSize: 9, cellPadding: 4 },
              headStyles: { fillColor: [52, 73, 94], textColor: 255 },
              columnStyles: {
                0: { cellWidth: 20, halign: 'center' },
                1: { cellWidth: 30, halign: 'right' },
                2: { cellWidth: 20, halign: 'center' },
                3: { cellWidth: 20, halign: 'right' }
              },
              margin: { left: 30, right: 20 }
            });

            yPosition = (doc as any).lastAutoTable.finalY + 10;
          });
        });
      }

      // Pie de página
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(`Página ${i} de ${pageCount}`, 250, 200);
        doc.text(`Generado: ${new Date().toLocaleString('es-HN')}`, 20, 200);
      }

      // Descargar el PDF
      doc.save(`${filename}.pdf`);

    } catch (error) {
      console.error('Error exportando PDF visual:', error);
      throw error;
    }
  }
}
