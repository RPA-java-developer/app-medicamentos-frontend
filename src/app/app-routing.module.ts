import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSedesComponent } from './lista-sedes/lista-sedes.component';
import { ListaMedicamentosComponent } from './lista-medicamentos/lista-medicamentos.component';
import { RegistrarMedicamentoComponent } from './registrar-medicamento/registrar-medicamento.component';
import { VerMedicamentoComponent } from './ver-medicamento/ver-medicamento.component';

const routes: Routes = [
  {path : 'sedes', component:ListaSedesComponent},
  {path:'',redirectTo:'sedes',pathMatch:'full'},
  {path: "medicamentos", component:ListaMedicamentosComponent},
  {path: "registrar-medicamento", component : RegistrarMedicamentoComponent},
  {path: "ver-medicamento/:idDto", component :VerMedicamentoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
