import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/formulario', pathMatch:'full'},
  {path:'formulario',loadChildren:'./formulario/formulario.module#FormularioModule'},
  {path:'practica',loadChildren:'./practica/practica.module#PracticaModule'},
  {path:'not-found',redirectTo:'/formulario',pathMatch:'full'},
  {path:'**',redirectTo:'/formulario',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
