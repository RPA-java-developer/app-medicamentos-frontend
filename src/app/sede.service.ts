import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sede } from './sede'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {


  // Esta URL obtiene el listado de las sedes desde el backend.
  private baseURL = "http://localhost:8092/api/v1/sedes";

    constructor(private httpClient : HttpClient) { }

    obtenerListaDeSedes():Observable<Sede[]>{

      return this.httpClient.get<Sede[]>(`${this.baseURL}`)

    }


}
