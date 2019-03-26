import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticaRoutingModule } from './practica-routing.module';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { PracticaComponent } from './practica.component';
import { CarouselModule,AccordionModule,TabsModule,ModalModule,ButtonsModule} from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PracticaComponent, EjercicioComponent],
  imports: [
    CommonModule,
    PracticaRoutingModule,
    CarouselModule,
    AccordionModule,
    TabsModule,
    ModalModule,
    ButtonsModule,
    FormsModule
  ]
})
export class PracticaModule { }
