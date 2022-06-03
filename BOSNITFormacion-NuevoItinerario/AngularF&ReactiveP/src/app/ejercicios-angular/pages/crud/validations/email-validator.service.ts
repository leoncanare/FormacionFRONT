import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Usuario } from '../interfaces/users.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  //Generamos una constante
  originalMail: string | null = null;

  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http
      .get<Usuario[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        map((resp) => {
          if (this.originalMail === email) {
            return null;
          }

          return resp.length === 0 ? null : { emailUsed: true };
        })
      );
  }
}
