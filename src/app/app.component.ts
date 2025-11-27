import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Gestión de Medicamentos';

  isLogged: boolean;

  constructor(
    private tokenServicio: TokenService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    //this.tokenServicio.isLogged() ? this.isLogged=true : this.isLogged=false;

    if (this.tokenServicio.isLogged()) {
        console.log("SI SI SI LOGIN");
        this.isLogged=true;
    } else {
        console.log("NO NO NO LOGIN");
        this.isLogged=false;
    }

  }

  logOut(): void {
    this.tokenServicio.logOut();
    this.router.navigate(['/home']);
  }


}
