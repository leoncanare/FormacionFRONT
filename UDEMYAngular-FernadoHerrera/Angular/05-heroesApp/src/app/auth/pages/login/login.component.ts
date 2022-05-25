import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
// [INFO] Como ya hemos usado en otras ocasiones nuestro Router nos permite con navigate redireccionarnos a otra ruta/pagina de una forma sencilla en este caso a nuestra pagina de heroes.
  constructor(private router: Router,
              private authService: AuthService) { }

  login() {

    this.authService.login()
    .subscribe( resp => {
      if(resp.id){
        this.router.navigate(['./heroes']);
      }
    })
  }

}
