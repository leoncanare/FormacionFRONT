import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/users.interface';
import { Pais } from '../interfaces/pais.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

dbUsers: string = 'http://localhost:3000/usuarios/';
//dbUsers: string = 'https://my-json-server.typicode.com/leoncanare/JSON/usuarios/';

constructor( private http: HttpClient,
  private _snackBar: MatSnackBar) { }

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.dbUsers}`);
  }

  addUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.dbUsers}`,usuario);
  }

  editUser(usuario: Usuario, id: number): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.dbUsers}`+id,usuario);
  }

  deleteUser(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.dbUsers}`+id);
  }

  getAllCountryes(): Observable<Pais[]> {
    return this.http.get<Pais[]>('https://restcountries.com/v3.1/all?fields=name');
  }

  postSnakbar(menssaje: string, buttonMessage: string, messageType: 'error' | 'perfecto') {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: menssaje,
        buttonMessage: buttonMessage,
        type: messageType
      },
      duration: 2500,
      verticalPosition: 'bottom',
      panelClass: messageType, 
    });
  }
}