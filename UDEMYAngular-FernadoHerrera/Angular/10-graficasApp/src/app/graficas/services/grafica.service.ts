import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor(private http: HttpClient) { }

  getUsuariosRSS() {
    return this.http.get('http://localhost:3000/grafica');
  }

  // getDataRSS() {
  //   return this.getUsuariosRSS()
  //     .pipe(
  //       map( data => {
  //         const labels = Object.keys( data ); 
  //         const values = Object.values( data );
  //         return {labels, values}; 
  //       })
  //     )
  // }
}