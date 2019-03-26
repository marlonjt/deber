import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticaComponent } from './practica.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';

const routes: Routes = [
  {path:'',component:PracticaComponent,children:[
    {path:'ejercicio', component:EjercicioComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticaRoutingModule { }
