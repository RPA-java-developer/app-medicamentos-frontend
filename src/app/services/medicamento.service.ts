import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Medicamento } from '../medicamento';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  medicamentoURL = environment.medicamentoURL;

  // Esta URL obtiene el listado de los MEDICAMENTOS desde el backend.
  private baseURLlista = "http://localhost:8092/api/v1/medicamentosPlano";

  //private baseURL = "http://localhost:8092/api/v1/medicamentos";
  private baseURL = this.medicamentoURL;

    constructor(private httpClient : HttpClient) { }

    // Listar los medicamentos
    obtenerListaDeMedicamentos():Observable<Medicamento[]>{
      return this.httpClient.get<Medicamento[]>(`${this.baseURLlista}`)
    }

    buscarMedicamentoPorId(idDto: number):Observable<Medicamento>{
      console.log("en medicamento service");
      console.log(idDto);
      return this.httpClient.get<Medicamento>(`${this.baseURL}/${idDto}`)
    }


    // Crear un medicamento
    registrarMedicamento(medicamento:Medicamento) : Observable<Object> {
      return this.httpClient.post(`${this.baseURL}`, medicamento)
    }

    //este metodo sirve para actualizar el empleado
    actualizarMedicamento(id:number, medicamento:Medicamento) : Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,medicamento);
    }

    // Eliminar un medicamento
    eliminarMedicamento(id:number): Observable<Object> {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }


}
