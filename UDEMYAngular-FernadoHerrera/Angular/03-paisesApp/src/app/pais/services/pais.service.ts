import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    //[INFO] Para solo seleccionar los parametros que usamos y liberar perso a todas las busquedas solo seleccionamos los campos que usamos y requerimos con los params.
    return new HttpParams()
      .set('fields', 'name,capital,cca3,flags,population')
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Pais[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Pais[]>( url, {params: this.httpParams} )
            // [INFO] Operador que captura el fallo al lanzar el get url cullo pais en la API no existe.
            // .pipe(
            //   catchError(err => of([]))
            // );
  }

  buscarPaisPorCapital( termino: string): Observable<Pais[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Pais[]>( url, {params: this.httpParams} )
  }

  //[INFO] Aqui solo retornaremos un pais solo no nos haria falta mas informacion ya que lo filtramos por id. 
  getPaisPorId( id: string): Observable<Pais[]> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Pais[]>( url )
  }
  
  buscarPorRegion( region: string): Observable<Pais[]> {

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Pais[]>( url, {params: this.httpParams} )
      .pipe(
        tap(console.log)
      )
  }
}
