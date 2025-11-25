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

@NgModule({
  declarations: [
    AppComponent,
    ListaSedesComponent,
    ListaMedicamentosComponent,
    RegistrarMedicamentoComponent,
    ActualizarMedicamentoComponent,
    VerMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
