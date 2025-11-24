import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Medicamento } from './medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  // Esta URL obtiene el listado de los MEDICAMENTOS desde el backend.
  private baseURL = "http://localhost:8080/api/v1/medicamentosPlano";
  //private baseURL = "http://localhost:8080/api/v1/sedes";

    constructor(private httpClient : HttpClient) { }

    obtenerListaDeMedicamentos():Observable<Medicamento[]>{

      return this.httpClient.get<Medicamento[]>(`${this.baseURL}`)

    }



}
