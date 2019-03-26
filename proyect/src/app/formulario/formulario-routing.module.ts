import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario.component';
import { BENITOJUAREZComponent } from './benito-juarez/benito-juarez.component';

const routes: Routes = [
  {path:'',component:FormularioComponent,children:[
    {path:'benito-juarez', component:BENITOJUAREZComponent
  }]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
