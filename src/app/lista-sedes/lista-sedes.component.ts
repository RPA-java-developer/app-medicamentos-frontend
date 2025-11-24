import { Component, OnInit } from '@angular/core';
import { Sede } from '../sede';
import { SedeService } from '../sede.service';

@Component({
  selector: 'app-lista-sedes',
  templateUrl: './lista-sedes.component.html',
  styleUrl: './lista-sedes.component.css'
})
export class ListaSedesComponent implements OnInit {

  sedes:Sede[];

  constructor(private sedeServicio:SedeService) {}

  ngOnInit(): void {

    /*
        this.sedes = [
          {
            "id":1,
            "nombre":"Centro",
            "direccion":"Avenida Caracas 32-16 -San Martin"
          },
          {
            "id":2,
            "nombre":"Cartagena",
            "direccion":"Avenida del Mar 40-89 Malecon"
          },
        ]
    */

        this.obtenerSedes();

  }

  private obtenerSedes() {
    this.sedeServicio.obtenerListaDeSedes().subscribe(
      dato => {
        this.sedes = dato;
      }
    );
  }



}
