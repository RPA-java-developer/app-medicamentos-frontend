import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';
import { Router } from '@angular/router';
import { SolicitudDto } from '../modules/solicitud-dto';

@Component({
  selector: 'app-registrar-solicitud',
  templateUrl: './registrar-solicitud.component.html',
  styleUrl: './registrar-solicitud.component.css'
})


export class RegistrarSolicitudComponent implements OnInit {


  title = 'custom-modal-appp';
  isModalOpen: boolean = false;

  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }


  solicitudDto: SolicitudDto = new SolicitudDto();

  constructor(
    private solicitudServicio: SolicitudService,
    private router: Router
  ) {}


  ngOnInit(): void {
  }

  guardarSolicitud() {
    this.solicitudServicio.registrarSoicitud(this.solicitudDto).subscribe(
      {
        next: (dato) => {
          console.log(dato),
          this.listarSolicitudes();
        },
          error: (e) => console.error(e),
          complete: () => console.info('complete')

      });
  }

  listarSolicitudes() {
    this.router.navigate(['/solicitudes']);
  }


  onSubmit(){
    console.log("llega del html")
    console.log(this.solicitudDto);
    //this.guardarSolicitud();
  }


}
