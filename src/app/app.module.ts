import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSedesComponent } from './lista-sedes/lista-sedes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaMedicamentosComponent } from './lista-medicamentos/lista-medicamentos.component';
import { RegistrarMedicamentoComponent } from './registrar-medicamento/registrar-medicamento.component';
import { FormsModule } from '@angular/forms';
import { ActualizarMedicamentoComponent } from './actualizar-medicamento/actualizar-medicamento.component';
import { VerMedicamentoComponent } from './ver-medicamento/ver-medicamento.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { interceptorProvider } from './interceptors/medicamento.interceptor';
//import { MediNoPosComponent } from './medi-no-pos/medi-no-pos.component';

import { RegistrarSolicitudComponent } from './registrar-solicitud/registrar-solicitud.component';

import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSedesComponent,
    ListaMedicamentosComponent,
    RegistrarMedicamentoComponent,
    ActualizarMedicamentoComponent,
    VerMedicamentoComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    RegistrarSolicitudComponent,
    ListaSolicitudesComponent,
    ModalComponent,
    //MediNoPosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
