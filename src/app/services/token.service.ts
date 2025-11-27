import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {



  constructor() { }


  isLogged(): boolean {

    if(this.getToken()) {
      return true;
    }
    return false;

  }




  setToken(token: string): void{
    localStorage.setItem('token', token);
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }


  getNombreUsuario(): string {

    if(!this.isLogged()) {
      console.log("NO esta logeado...");
      return "XXXXX";
    } else {
      console.log("SI esta logeado...");
    }


    // adsfasdfasd.asdfsadfasdsdf.asdfasdfasdf

    let token: string | null;

    //token = this.getToken();

    /*
    const payload = token.split('.')[1];

    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    let nombreUsuario = valuesJson.nombreUsuario;
    */


    let nombreUsuario = "Rodry";



    return nombreUsuario;
  }


  logOut(): void {

    localStorage.clear();
    console.log("se borra TOKEN");

  }



}
