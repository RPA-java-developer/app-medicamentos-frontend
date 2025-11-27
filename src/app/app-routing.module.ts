import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSedesComponent } from './lista-sedes/lista-sedes.component';
import { ListaMedicamentosComponent } from './lista-medicamentos/lista-medicamentos.component';
import { RegistrarMedicamentoComponent } from './registrar-medicamento/registrar-medicamento.component';
import { VerMedicamentoComponent } from './ver-medicamento/ver-medicamento.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sedes', component:ListaSedesComponent},
  {path: "medicamentos", component:ListaMedicamentosComponent},
  {path: "registrar-medicamento", component : RegistrarMedicamentoComponent},
  {path: "ver-medicamento/:idDto", component :VerMedicamentoComponent},
  {path: "login", component :LoginComponent},
  {path: "registro", component :RegistroComponent},
  {path: '*', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
