import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Route, Router } from '@angular/router';
import { LoginUsiarioDto } from '../modules/login-usiario.dto';
import { TokenDto } from '../modules/token.dto';
import { TokenDataDto } from '../modules/tokenData.dto';
import { ErrorResponseDto } from '../modules/errorResponse.dto';
import { ErrorDto } from '../modules/error.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  usuario = new LoginUsiarioDto("a","b");

  errorMessage: string | null = null;

  nombreUsuario: string;
  password: string;

  respuesta: TokenDto;
  contenidoToken: TokenDataDto;

  error: ErrorDto
  errorRespuesta: ErrorResponseDto;


  constructor(
    private authServicio: AuthService,
    private tokenServicio: TokenService,
    //private toastrService:ToastrService,
    private router: Router
  ) {
    console.log("En el Constructor")
  }


  ngOnInit() {
  }

  onLogin(): void {
    this.usuario = new LoginUsiarioDto(this.nombreUsuario, this.password);

    this.authServicio.login(this.usuario).subscribe(
      respuesta => {
        console.log(respuesta);
        console.log(respuesta.TimeStamp);
        console.log(respuesta.Message);
        console.log(respuesta.Status);
        console.log(respuesta.Data);

        this.contenidoToken = respuesta.Data;

        console.log(this.contenidoToken.token);
        console.log(this.contenidoToken.refresh);

        //Se grava el token en el navegador
        this.tokenServicio.setToken(this.contenidoToken.token);
        this.router.navigate(['/']);

      },
      err => {
        this.error = err;
        console.log('Error al obtener el token');
        console.log(this.error);
      }
    );

  }


}
