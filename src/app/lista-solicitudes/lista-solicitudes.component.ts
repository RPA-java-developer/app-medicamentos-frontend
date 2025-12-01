import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { SolicitudService } from '../solicitud.service';
import { Solicitud } from '../solicitud';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrl: './lista-solicitudes.component.css'
})
export class ListaSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[];
  //medicamentos:Medicamento[];


  constructor(
    //private medicamentoServicio:MedicamentoService,
    private solicitudServicio: SolicitudService,
    private router:Router,
    private tokenServicio: TokenService
  ) {}


  ngOnInit(): void {

    this.obtenerSolicitudes();
  }

  private obtenerSolicitudes() {
    this.solicitudServicio.obtenerListaDeSolicitudes().subscribe(
      dato => {
        this.solicitudes = dato;
      }
    );
  }


}
