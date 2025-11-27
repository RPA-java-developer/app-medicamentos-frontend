import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../medicamento';
import { MedicamentoService } from '../services/medicamento.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.component.html',
  styleUrl: './lista-medicamentos.component.css'
})
export class ListaMedicamentosComponent implements OnInit {


  medicamentos:Medicamento[];

  constructor(private medicamentoServicio:MedicamentoService, private router:Router) {}


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



  actualizarMedicamento(id:number) {

  };

  /*
  eliminarMedicamento(id:number) {
    this.medicamentoServicio.eliminarMedicamento(id).subscribe(
      dato => {
        console.log(dato);
        this.obtenerMedicamentos();
      }
    );

  }
  */

  eliminarMedicamento(id:number){
    (swal as any).fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el medicamento",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result: { value: any; }) => {
      if(result.value){
        this.medicamentoServicio.eliminarMedicamento(id).subscribe(dato => {
          console.log(dato);
          this.obtenerMedicamentos();
          (swal as any).fire({
            title: 'Medicamento eliminado',
            text: 'El empleado ha sido eliminado con exito',
            icon: 'success'
          });
        })
      }
    })
  }



  verMedicamento(id:number) {
    console.log("esto es en ver medicamento...........");
    console.log(id);
    this.router.navigate(['ver-medicamento', id]);
  }




}
