import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
               private router: Router ){}

//[INFO] canActivate lo que hace es ya una vez que nuestro usuario a iniciado sesion mantiene activo el modulo cargado solo se podria acceder con un usuario ya logueado, como sabesmos que esta logueado? lo sabemos porque en el localstorage almacenamos el token de nuestro usuario y la funcion verificaAuth de nuestro servidor comprueba si esxiste si se cumpre retorna TRUE sino False y no deja acceder.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.verificarAuth()
        .pipe(
          tap( logueado => {
            if(!logueado) {
              this.router.navigate(['./auth/login'])
            }
          })
        );

    //   if(this.authService.auth.id){
    //     return true;
    //   }
    // console.log('Bloqueado por el AuthGuard: CanActivate');
    // return false;
  }

//[INFO] canLoad previene de que el usuario si no existe no pueda caragar el listado de heroes, como sabesmos que esta logueado? lo sabemos porque en el localstorage almacenamos el token de nuestro usuario y la funcion verificaAuth de nuestro servidor comprueba si esxiste si se cumpre retorna TRUE sino False y no deja acceder.
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.authService.verificarAuth();

  //     if(this.authService.auth.id){
  //       return true;
  //     }
  //   console.log('Bloqueado por el AuthGuard: CanLoad');
  //   return false;
    }
}
