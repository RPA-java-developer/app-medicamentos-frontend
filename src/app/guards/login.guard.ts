import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})

//export const loginGuard: CanActivateFn = (route, state) => {

export class LoginGuard implements CanActivate {


  constructor(private tokenServicio: TokenService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.tokenServicio.isLogged()) {
      console.log("En guard SI login");
      this.router.navigate(['/']);
      return false;
    } else {
      console.log("En guard NO login");
      return true;
    }

    //return true;
  }

}
