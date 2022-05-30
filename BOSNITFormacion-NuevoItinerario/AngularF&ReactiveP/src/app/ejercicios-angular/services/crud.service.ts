import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/crud.interface';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

constructor( private http: HttpClient) { }

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://my-json-server.typicode.com/leoncanare/JSON/usuarios');
  }
  getCountries() {
    return this.http.get<any>('assets/db/countries.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
  // getAllCountryes(): Observable<Pais[]> {
  //   return this.http.get<Pais[]>('https://restcountries.com/v3.1/all?fields=name');
  // }
}