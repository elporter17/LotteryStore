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
    // Configurar PDF para impresora térmica de 80mm
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [80, 200] // Ancho 80mm, altura variable
    });

    // Configurar fuente
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);

    let yPosition = 10;
    const lineHeight = 4;
    const leftMargin = 5;
    const rightMargin = 75;

    // Título
    pdf.setFontSize(12);
    pdf.text('RECIBO DE VENTA', 40, yPosition, { align: 'center' });
    yPosition += lineHeight * 2;

    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;

    // Información general
    pdf.setFontSize(9);
    pdf.text(`Fecha: ${new Date(sale.fecha).toLocaleString()}`, leftMargin, yPosition);
    yPosition += lineHeight;
    
    pdf.text(`Sucursal: ${sale.sucursal}`, leftMargin, yPosition);
    yPosition += lineHeight;
    
    pdf.text(`Sorteo: ${sale.sorteo.toUpperCase()}`, leftMargin, yPosition);
    yPosition += lineHeight * 2;

    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;

    // Encabezado de números
    pdf.setFontSize(8);
    pdf.text('NÚMEROS JUGADOS:', leftMargin, yPosition);
    yPosition += lineHeight;

    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;

    // Detalles de números
    pdf.setFontSize(9);
    for (const detail of details) {
      const numeroText = `Num: ${detail.numero.toString().padStart(2, '0')}`;
      const montoText = `L. ${detail.monto.toFixed(2)}`;
      
      pdf.text(numeroText, leftMargin, yPosition);
      pdf.text(montoText, rightMargin, yPosition, { align: 'right' });
      yPosition += lineHeight;
    }

    // Línea separadora
    yPosition += lineHeight;
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;

    // Total
    pdf.setFontSize(11);
    pdf.text('TOTAL:', leftMargin, yPosition);
    pdf.text(`L. ${sale.total.toFixed(2)}`, rightMargin, yPosition, { align: 'right' });
    yPosition += lineHeight * 2;

    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;

    // Mensaje final
    pdf.setFontSize(8);
    pdf.text('¡Gracias por su compra!', 40, yPosition, { align: 'center' });
    yPosition += lineHeight;
    pdf.text('¡Mucha suerte!', 40, yPosition, { align: 'center' });
    yPosition += lineHeight * 2;

    // Código de venta (ID)
    pdf.setFontSize(7);
    pdf.text(`ID: ${sale.id}`, 40, yPosition, { align: 'center' });

    // Ajustar altura del PDF
    const finalHeight = yPosition + 10;
    pdf.internal.pageSize.height = finalHeight;

    // Guardar o imprimir
    const fileName = `recibo_${sale.sorteo}_${new Date().getTime()}.pdf`;
    pdf.save(fileName);

    // También abrir en ventana nueva para imprimir
    window.open(pdf.output('bloburl'), '_blank');
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
