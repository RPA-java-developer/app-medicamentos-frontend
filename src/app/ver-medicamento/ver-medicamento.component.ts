import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../medicamento';
import { MedicamentoService } from '../medicamento.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ver-medicamento',
  templateUrl: './ver-medicamento.component.html',
  styleUrl: './ver-medicamento.component.css'
})
export class VerMedicamentoComponent  implements OnInit {

  idDto:number;
  medicamento:Medicamento;

  constructor(private medicamentoServicio:MedicamentoService, private route:ActivatedRoute) {}


  ngOnInit(): void {


    this.idDto = this.route.snapshot.params['idDto'];
    this.medicamento = new Medicamento();


    this.medicamentoServicio.buscarMedicamentoPorId(this.idDto).subscribe(dato => {
      this.medicamento = dato;
      (swal as any).fire(`Ver medicamento ${this.medicamento.nombre}`);
    });


    /*
    this.medicamentoServicio.buscarMedicamentoPorId(this.idDto).subscribe(dato => {
      this.medicamento = dato
    });
    */

  }


}
