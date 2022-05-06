import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Pais[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Pais[]>( url )
            // [INFO] Operador que captura el fallo al lanzar el get url cullo pais en la API no existe.
            // .pipe(
            //   catchError(err => of([]))
            // );
  }

  buscarPaisPorCapital( termino: string): Observable<Pais[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Pais[]>( url )
  }
  
  


}
