import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.heroesUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return {...this._auth!}
  }

  constructor( private http: HttpClient) { }

  login(): Observable<Auth> {

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      // [INFO] El tap pipe es como un intermediario antes de que la subscripcion llegue a nuestro login lo que va a hacer es almacenar en la variable _auth el usuario que quiera loguearse.
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('token',auth.id))
    );

  }
  // [INFO] El of lo que retorn es un opbserveble con el valor contenido si no pusieramos este of retornariamos unicamente el valor.
  verificarAuth(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`) 
      .pipe(
        map( auth => {
          this._auth = auth;
          return true
        } )
      );
  }
}
