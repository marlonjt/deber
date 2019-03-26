import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Ejemplo } from '../modelos/ejemplo';
import { ProgressbarComponent } from 'ngx-bootstrap';
import { injectViewContainerRef } from '@angular/core/src/render3/view_engine_compatibility';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css'],
})
export class PracticaComponent implements OnInit {
  modalRef: BsModalRef;
  ejemplos: Ejemplo[];
  
  
  constructor(private modalService: BsModalService) {}
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  
 
  ngOnInit() {
  ejemplos:[{
    nombre: "juan",
    apellido: "perez",
    curso: 2,
    edad: 15
  }]  
  }

}
