import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../medicamento';
import { MedicamentoService } from '../medicamento.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-medicamento',
  templateUrl: './registrar-medicamento.component.html',
  styleUrl: './registrar-medicamento.component.css'
})
export class RegistrarMedicamentoComponent implements OnInit {



  medicamento : Medicamento = new Medicamento();

  constructor(
        private medicamentoServicio:MedicamentoService,
        private router:Router)
        {}


  ngOnInit(): void {
  }


  guardarMedicamento() {
    this.medicamentoServicio.registrarMedicamento(this.medicamento).subscribe(
      {
        next: (dato) => {
          console.log(dato),
          this.listarMedicamentos()
        },
          error: (e) => console.error(e),
          complete: () => console.info('complete')

      });
  }

  listarMedicamentos() {
    this.router.navigate(['/medicamentos']);
  }


  onSubmit(){
    console.log(this.medicamento);
    this.guardarMedicamento();
  }

}
