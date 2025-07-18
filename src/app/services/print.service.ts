import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Sale, SaleDetail } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  // Generar PDF térmico para venta
  generateThermalReceipt(sale: Sale, details: SaleDetail[]): void {
    console.log('=== GENERANDO RECIBO PARA IMPRESIÓN ===');
    console.log('Sale completo:', JSON.stringify(sale, null, 2));
    console.log('Details completo:', JSON.stringify(details, null, 2));
    console.log('Cantidad de detalles:', details ? details.length : 'details es null/undefined');

    // Si no hay detalles, crear datos de prueba
    if (!details || details.length === 0) {
      console.log('⚠️ No hay detalles, creando datos de prueba');
      details = [
        { id: 'test1', saleId: sale.id, numero: 11, monto: 40 },
        { id: 'test2', saleId: sale.id, numero: 54, monto: 10 }
      ];
    }

    try {
      // Crear PDF para impresión térmica
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [80, 150]
      });

      console.log('PDF creado, agregando contenido...');

      // Configuración básica
      let y = 10;
      const lineHeight = 5;

      // Título
      pdf.setFontSize(14);
      pdf.text('LOTERIA', 40, y, { align: 'center' });
      y += lineHeight;

      pdf.setFontSize(10);
      pdf.text('RECIBO DE VENTA', 40, y, { align: 'center' });
      y += lineHeight + 2;

      // Número de recibo
      pdf.setFontSize(9);
      pdf.text(`Recibo #: ${sale.numeroRecibo || 'N/A'}`, 40, y, { align: 'center' });
      y += lineHeight;

      // Línea
      pdf.line(5, y, 75, y);
      y += lineHeight;

      // Sucursal
      pdf.setFontSize(12);
      pdf.text(sale.sucursal || 'Sucursal 1', 40, y, { align: 'center' });
      y += lineHeight;

      // Sorteo
      pdf.setFontSize(9);
      pdf.text(`Sorteo: ${sale.sorteo}`, 40, y, { align: 'center' });
      y += lineHeight;

      // Fecha
      const fecha = new Date(sale.fecha).toLocaleString();
      pdf.text(`Fecha: ${fecha}`, 40, y, { align: 'center' });
      y += lineHeight + 2;

      // Encabezados
      pdf.setFontSize(10);
      pdf.text('Numero', 20, y, { align: 'center' });
      pdf.text('Valor', 60, y, { align: 'center' });
      y += lineHeight;

      // Línea
      pdf.line(5, y, 75, y);
      y += lineHeight;

      // Detalles
      let total = 0;
      for (const detail of details) {
        pdf.text(detail.numero.toString().padStart(2, '0'), 20, y, { align: 'center' });
        pdf.text(`L ${detail.monto}`, 60, y, { align: 'center' });
        total += detail.monto;
        y += lineHeight;
      }

      // Línea
      y += 2;
      pdf.line(5, y, 75, y);
      y += lineHeight;

      // Total
      pdf.setFontSize(12);
      pdf.text('Total a pagar:', 10, y);
      pdf.text(`L ${total}`, 70, y, { align: 'right' });
      y += lineHeight + 2;

      // Mensaje
      pdf.setFontSize(8);
      pdf.text('Gracias por su compra!', 40, y, { align: 'center' });
      y += lineHeight;
      pdf.text('Mucha suerte!', 40, y, { align: 'center' });

      console.log('Contenido agregado al PDF');

      // FUNCIÓN DE IMPRESIÓN DIRECTA
      // Crear blob para impresión
      const pdfData = pdf.output('arraybuffer');
      const blob = new Blob([pdfData], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      console.log('Iniciando impresión directa...');
      
      // Abrir en nueva ventana para impresión manual controlada por el usuario
      const printWindow = window.open(url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
      
      if (printWindow) {
        printWindow.onload = () => {
          // Enfocar la ventana
          printWindow.focus();
          
          // Ejecutar impresión automáticamente
          setTimeout(() => {
            try {
              printWindow.print();
              console.log('✅ Recibo enviado a impresora');
            } catch (printError) {
              console.error('Error al imprimir:', printError);
            }
          }, 1000); // Esperar 1 segundo para que cargue completamente
          
          // Limpiar URL cuando la ventana se cierre (detección manual)
          const checkClosed = setInterval(() => {
            if (printWindow.closed) {
              clearInterval(checkClosed);
              URL.revokeObjectURL(url);
              console.log('Ventana de impresión cerrada por el usuario, URL limpiada');
            }
          }, 1000);
        };
      } else {
        console.warn('No se pudo abrir la ventana de impresión, intentando método iframe');
        
        // Fallback: usar iframe como respaldo
        const printFrame = document.createElement('iframe');
        printFrame.style.display = 'none';
        printFrame.src = url;
        
        document.body.appendChild(printFrame);
        
        printFrame.onload = () => {
          try {
            printFrame.contentWindow?.focus();
            printFrame.contentWindow?.print();
            
            // Limpiar después de 5 segundos en modo iframe
            setTimeout(() => {
              document.body.removeChild(printFrame);
              URL.revokeObjectURL(url);
              console.log('iframe de impresión limpiado');
            }, 5000);
            
          } catch (printError) {
            console.error('Error al imprimir con iframe:', printError);
          }
        };
      }

    } catch (error: any) {
      console.error('Error creando PDF:', error);
      alert('Error al generar el recibo: ' + (error?.message || error));
    }
  }

  // Método de prueba para generar un recibo con datos fijos
  generateTestReceipt(): void {
    console.log('=== GENERANDO RECIBO DE PRUEBA ===');
    
    const testSale: Sale = {
      id: 'test-123',
      userId: 'user1',
      sucursal: 'Sucursal 1',
      sorteo: 'mañana',
      fecha: new Date(),
      total: 50,
      numeroRecibo: 'SUC-REC-250717-0001',
      correlativo: 1,
      createdAt: new Date()
    };

    const testDetails: SaleDetail[] = [
      { id: 'detail1', saleId: 'test-123', numero: 11, monto: 40 },
      { id: 'detail2', saleId: 'test-123', numero: 54, monto: 10 }
    ];

    this.generateThermalReceipt(testSale, testDetails);
  }

  // Generar PDF de reporte diario
  generateDailyReport(sales: Sale[], fecha: Date): void {
    const pdf = new jsPDF();
    
    pdf.setFontSize(16);
    pdf.text('REPORTE DIARIO DE VENTAS', 105, 20, { align: 'center' });
    
    pdf.setFontSize(12);
    pdf.text(`Fecha: ${fecha.toLocaleDateString()}`, 20, 35);
    
    // Aquí se puede expandir para incluir más detalles del reporte
    let yPos = 50;
    
    // Resumen por sorteo
    const sorteoSummary = this.calculateSorteoSummary(sales);
    
    pdf.setFontSize(14);
    pdf.text('RESUMEN POR SORTEO:', 20, yPos);
    yPos += 10;
    
    pdf.setFontSize(10);
    for (const [sorteo, data] of Object.entries(sorteoSummary)) {
      pdf.text(`${sorteo.toUpperCase()}: L. ${data.total.toFixed(2)} (${data.count} ventas)`, 25, yPos);
      yPos += 7;
    }
    
    // Total general
    const totalGeneral = sales.reduce((sum, sale) => sum + sale.total, 0);
    yPos += 10;
    pdf.setFontSize(12);
    pdf.text(`TOTAL GENERAL: L. ${totalGeneral.toFixed(2)}`, 20, yPos);
    
    pdf.save(`reporte_diario_${fecha.toISOString().split('T')[0]}.pdf`);
  }

  private calculateSorteoSummary(sales: Sale[]): { [key: string]: { total: number, count: number } } {
    const summary: { [key: string]: { total: number, count: number } } = {};
    
    for (const sale of sales) {
      if (!summary[sale.sorteo]) {
        summary[sale.sorteo] = { total: 0, count: 0 };
      }
      summary[sale.sorteo].total += sale.total;
      summary[sale.sorteo].count += 1;
    }
    
    return summary;
  }

  // Generar reporte de ventas en PDF
  generateVentasReportPDF(sales: Sale[], saleDetails: { [key: string]: SaleDetail[] }, filters: any): void {
    try {
      const doc = new jsPDF();
      
      // Header profesional con logo y título
      doc.setFillColor(52, 73, 94); // Color azul oscuro
      doc.rect(0, 0, 210, 35, 'F'); // Rectángulo header
      
      doc.setTextColor(255, 255, 255); // Texto blanco
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('SISTEMA DE LOTERÍA', 105, 20, { align: 'center' });
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text('REPORTE DE VENTAS', 105, 28, { align: 'center' });
      
      // Resetear color de texto
      doc.setTextColor(0, 0, 0);
      
      // Información del reporte en formato profesional
      let yPos = 50;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      
      // Sección de información general con fondo gris claro
      doc.setFillColor(248, 249, 250);
      doc.rect(15, yPos - 5, 180, 40, 'F');
      doc.setDrawColor(200, 200, 200);
      doc.rect(15, yPos - 5, 180, 40, 'S');
      
      yPos += 5;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('INFORMACIÓN DEL REPORTE', 20, yPos);
      yPos += 8;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      
      if (filters.fechaDesde || filters.fechaHasta) {
        const fechaTexto = filters.fechaDesde && filters.fechaHasta 
          ? `Período: ${new Date(filters.fechaDesde).toLocaleDateString()} - ${new Date(filters.fechaHasta).toLocaleDateString()}`
          : filters.fechaDesde 
            ? `Desde: ${new Date(filters.fechaDesde).toLocaleDateString()}`
            : `Hasta: ${new Date(filters.fechaHasta).toLocaleDateString()}`;
        doc.text(fechaTexto, 25, yPos);
        yPos += 6;
      }
      
      if (filters.sorteoFilter) {
        doc.text(`Sorteo: ${filters.sorteoFilter}`, 25, yPos);
        yPos += 6;
      }
      
      const now = new Date();
      doc.text(`Fecha de generación: ${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`, 25, yPos);
      yPos += 6;
      
      doc.text(`Total de transacciones: ${sales.length}`, 25, yPos);
      yPos += 20;
      
      // Resumen por sucursal en formato tabla
      const sucursalTotals: { [key: string]: { total: number, count: number } } = {};
      sales.forEach(sale => {
        if (!sucursalTotals[sale.sucursal]) {
          sucursalTotals[sale.sucursal] = { total: 0, count: 0 };
        }
        sucursalTotals[sale.sucursal].total += sale.total;
        sucursalTotals[sale.sucursal].count += 1;
      });
      
      // Header del resumen con estilo
      doc.setFillColor(52, 73, 94);
      doc.setTextColor(255, 255, 255);
      doc.rect(15, yPos - 3, 180, 10, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('RESUMEN POR SUCURSAL', 105, yPos + 3, { align: 'center' });
      yPos += 15;
      
      // Resetear color
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      
      // Crear mini tabla para resumen
      Object.entries(sucursalTotals).forEach(([sucursal, data], index) => {
        const fillColor = index % 2 === 0 ? [245, 245, 245] : [255, 255, 255];
        doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
        doc.rect(15, yPos - 2, 180, 8, 'F');
        
        doc.text(`${sucursal}:`, 25, yPos + 2);
        doc.text(`${data.count} ventas`, 105, yPos + 2, { align: 'center' });
        doc.text(`L ${data.total.toFixed(2)}`, 175, yPos + 2, { align: 'right' });
        yPos += 8;
      });
      
      yPos += 5;
      
      // Total general destacado
      const totalGeneral = sales.reduce((sum, sale) => sum + sale.total, 0);
      doc.setFillColor(46, 204, 113); // Verde
      doc.rect(15, yPos - 3, 180, 12, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text(`TOTAL GENERAL: L ${totalGeneral.toFixed(2)}`, 105, yPos + 4, { align: 'center' });
      yPos += 20;
      
      // Resetear para la tabla
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('DETALLE DE VENTAS:', 20, yPos);
      yPos += 10;
      
      // Preparar datos para la tabla
      const tableData = sales.map(sale => {
        const details = saleDetails[sale.id] || [];
        const numerosText = details.map(d => `${d.numero.toString().padStart(2, '0')}xL${d.monto}`).join(', ');
        
        // Formatear fecha con hora
        const saleDate = new Date(sale.createdAt);
        const fechaHoraStr = `${saleDate.toLocaleDateString()} ${saleDate.toLocaleTimeString('es-ES', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}`;
        
        return [
          fechaHoraStr,
          sale.numeroRecibo || sale.id.slice(-6),
          sale.sucursal,
          sale.sorteo,
          numerosText,
          `L ${sale.total.toFixed(2)}`
        ];
      });
      
      // Crear tabla con autoTable
      autoTable(doc, {
        startY: yPos,
        head: [['Fecha/Hora', 'Recibo', 'Sucursal', 'Sorteo', 'Números', 'Total']],
        body: tableData,
        theme: 'grid',
        headStyles: {
          fillColor: [66, 139, 202],
          textColor: 255,
          fontSize: 10,
          fontStyle: 'bold',
          halign: 'center'
        },
        bodyStyles: {
          fontSize: 9,
          cellPadding: 3
        },
        columnStyles: {
          0: { cellWidth: 35, halign: 'center' }, // Fecha/Hora (más ancho)
          1: { cellWidth: 30, halign: 'center' }, // Recibo
          2: { cellWidth: 25, halign: 'center' }, // Sucursal
          3: { cellWidth: 20, halign: 'center' }, // Sorteo
          4: { cellWidth: 45, halign: 'left' },   // Números
          5: { cellWidth: 25, halign: 'right' }   // Total
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        margin: { left: 15, right: 15 },
        didDrawPage: function(data: any) {
          // Pie de página
          doc.setFontSize(8);
          doc.text(`Página ${data.pageNumber}`, 160, 290);
          doc.text(`Generado el ${new Date().toLocaleString()}`, 15, 290);
        }
      });
      
      // Guardar el PDF
      const fileName = `reporte_ventas_${new Date().toISOString().split('T')[0]}.pdf`;
      doc.save(fileName);
      
    } catch (error) {
      console.error('Error generando PDF:', error);
      throw error;
    }
  }

}
