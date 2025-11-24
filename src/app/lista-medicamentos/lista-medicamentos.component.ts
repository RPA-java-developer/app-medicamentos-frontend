import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../medicamento';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrl: './lista-medicamentos.component.css'
})
export class ListaMedicamentosComponent implements OnInit {


  medicamentos:Medicamento[];

  constructor(private medicamentoServicio:MedicamentoService) {}


  ngOnInit(): void {

       /*
        this.medicamentos = [
          {
            "id":1,
            "nombre":"Ibuprofeno",
            "categoria":"Antiinflamatorios",
            "laboratorio": "Vicoprofen",
            "dosis": "tabletas y suspensión (líquido) para tomar por vía oral",
            "precio": 2100.55,
            "pos": true
          }
        ]
     */

        this.obtenerMedicamentos();

  }

  private obtenerMedicamentos() {
    this.medicamentoServicio.obtenerListaDeMedicamentos().subscribe(
      dato => {
        this.medicamentos = dato;
      }
    );
  }



}
