import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSedesComponent } from './lista-sedes/lista-sedes.component';
import { ListaMedicamentosComponent } from './lista-medicamentos/lista-medicamentos.component';

const routes: Routes = [
  {path : 'sedes', component:ListaSedesComponent},
  {path:'',redirectTo:'sedes',pathMatch:'full'},
  {path: "medicamentos", component:ListaMedicamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
