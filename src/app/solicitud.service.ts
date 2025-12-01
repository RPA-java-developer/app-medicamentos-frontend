import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitud } from './solicitud';
import { Observable } from 'rxjs';
import { DetalleMedicamento } from './detalle-medicamento';
import { SolicitudDto } from './modules/solicitud-dto';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

    solicitudX: SolicitudDto;
    detalles: DetalleMedicamento[];




  private baseURL = "http://localhost:8092/api/v1/solicitudes";


  constructor(private httpClient : HttpClient) { }


    // Listar las solicitudes
    obtenerListaDeSolicitudes():Observable<Solicitud[]> {
      return this.httpClient.get<Solicitud[]>(`${this.baseURL}`)
    }



    // Crear una solicitud
    registrarSoicitud(solidictudEntrada:SolicitudDto) : Observable<Object> {

     console.log("LLega SOLICITUD");
     console.log(solidictudEntrada);



        this.detalles = [
              {
                  "idDto":1,
                  "nombreMedicamentoDto":"Acetaminofeno",
                  "cantidadMedicamentoDto": 2,
                  "precioDetalleDto": 1200.00,
                  "subtotalDto": 2400.00
              },
              {
                  "idDto": 3,
                  "nombreMedicamentoDto": "OMEPRAZOL (En polvo)",
                  "cantidadMedicamentoDto": 5,
                  "precioDetalleDto": 5000.00,
                  "subtotalDto": 10200.00
              }
          ];


    this.solicitudX =  {
          "fecha": "2025-11-30",
          "estado": "REGISTRADA",
          "total": 2400.00,
          "idSede": 1,
          "detalle": this.detalles
      }


     console.log("ANTES DE ENVIAR");
     console.log(this.detalles);
     console.log(this.solicitudX);


      return this.httpClient.post(`${this.baseURL}`, this.solicitudX )
    }


}
