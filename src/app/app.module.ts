import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSedesComponent } from './lista-sedes/lista-sedes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaMedicamentosComponent } from './lista-medicamentos/lista-medicamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSedesComponent,
    ListaMedicamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
