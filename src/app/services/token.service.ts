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

    // estructura token
    // adsfasdfasd.asdfsadfasdsdf.asdfasdfasdf

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


  //isAdmin(): void{
  //isAdmin(): boolean {
  getPerfilUsuario(): string {

    let perfilUser: string;

    perfilUser = "Visitante";

    console.log("Preguntar por los Roles Admin-------------------")

    if(this.isLogged()) {
      //return false;
      console.log("si esta logeado... is Admin")
    } else {
      console.log("NO esta logeado... is Admin")
    }

    const token = this.getToken();


    if (token !== null) {  // Check if token is not null
      console.log("Entra por TOKEN");
      console.log(token);

      const payload = token.split('.')[1];
      const values = atob(payload);
      console.log(values);

      const valuesJson = JSON.parse(values);

      const sub = valuesJson.sub;
      console.log(sub);

      const iss = valuesJson.iss;
      console.log(iss);

      const exp = valuesJson.exp;
      console.log(exp);

      const iat = valuesJson.iat;
      console.log(iat);

      const roles = valuesJson.role;
      console.log(roles);


      let existe: boolean;
      existe = false;


      console.log("TERMINA Entra por TOKEN");
      console.log(roles.length);

      const len = Object.keys(roles).length;
      console.log(len);



      if (roles.length > 0) {

        for (let i = 0; i < roles.length ; i++) {
          console.log(`Elemento en índice ${i}: ${roles[i]}`);
          console.log(JSON.stringify(roles[i], null, 2));
          console.log(roles[i].authority);

            if (roles[i].authority == 'ROLE_ADMIN') {
              console.log('SI ESTA ROLE_ADMIN');
              existe = true;
              perfilUser = "ADMINISTRADOR";
              break;
            }
            else {
              console.log('NO ESTA ROLE_ADMIN');
              existe = false;
              perfilUser = "USUARIO";
            }

        }
        console.log(existe);
        console.log(perfilUser);
        //return existe;
        return perfilUser;

      } else {
        console.log('NO EXISTE ARRAY');
        //return false;
        return perfilUser;
      }

    } else {
      // Handle the case where the token is null, e.g., redirect to login, show an error
      console.warn('Authentication token not found.');
      //return false;
      return perfilUser;
    }


  }




  logOut(): void {

    localStorage.clear();
    console.log("se borra TOKEN");

  }



}
