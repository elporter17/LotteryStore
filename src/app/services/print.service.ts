import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Sale, SaleDetail } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  // Generar PDF térmico para venta
  generateThermalReceipt(sale: Sale, details: SaleDetail[]): void {
    console.log('=== GENERANDO RECIBO ===');
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
      // Crear PDF simple sin configuraciones avanzadas
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

      // Generar archivo
      const timestamp = Date.now();
      const fileName = `recibo_${timestamp}.pdf`;
      
      console.log('Guardando archivo:', fileName);
      
      // Intentar ambas formas
      pdf.save(fileName);
      
      // Crear blob manualmente
      const pdfData = pdf.output('arraybuffer');
      const blob = new Blob([pdfData], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      console.log('Abriendo PDF en nueva ventana...');
      const newWindow = window.open(url, '_blank');
      
      if (!newWindow) {
        console.warn('Popup bloqueado, descargando directamente');
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
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
}
