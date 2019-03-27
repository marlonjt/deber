import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  verpdf() {
    let doc = new jsPDF(
      {
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      }
    )
    
    doc.setFontSize(38);
    doc.text(150, 20, 'FORMULARIO INSTITUCIONAL', { align: 'center' });
    doc.line(20, 22, 285, 22); // horizontal line

    doc.setFontSize(20);
    doc.setFont('courier')
    doc.setFontType('normal')
    doc.text(20, 30, 'NOMBRE:')
    doc.text(20, 40, 'APELLIDO:')
    doc.text(20, 50, 'EDAD:')
    doc.text(20, 60, 'DIRECCION:')
    doc.text(20, 70, 'EMAIL:')
    doc.text(20, 80, 'CARGO INSTITUCIONAL:')
    doc.line(20, 85, 285, 85)

    doc.text(20, 90, 'CARRERA:')
    doc.setFontSize(15)
    doc.getLineHeightFactor() 
    doc.text(20, 100, 'D.Software')
    doc.rect(60, 96, 5, 5)  
    doc.text(70, 100, 'D.Modas')
    doc.rect(98, 96, 5, 5)  
    doc.text(110, 100, 'A.Culinario')
    doc.rect(150, 96, 5, 5) 

    doc.setFontSize(20)
    doc.text(20, 110, 'JORNADA:')
    doc.setFontSize(15)
    doc.text(20, 118, 'MATUTINA')
    doc.rect(50, 115, 5, 5)  
    doc.text(65, 118, 'VESPERTINA')
    doc.rect(98, 115, 5, 5)  
    doc.text(110, 118, 'NOCTURNA')
    doc.rect(140, 115, 5, 5)  
    doc.line(20, 125, 285, 125)

    doc.setFontSize(20)
    doc.text(20, 130, 'INSTITUTOS:')
    doc.setFontSize(15)
    doc.text(20, 140, 'BENITO JUAREZ')
    doc.rect(65, 135, 5, 5)  
    doc.text(75, 140, 'GRAN COLOMBIA')
    doc.rect(120, 135, 5, 5)  
    doc.text(130, 140, '24 DE MAYO')
    doc.rect(165, 135, 5, 5)  
  


    doc.save('prueba.pdf')
  }

}
