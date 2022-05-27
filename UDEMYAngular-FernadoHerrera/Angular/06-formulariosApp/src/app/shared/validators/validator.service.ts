import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  //[INFO] Exportamos las validaciones desde el servicio a los modulos donde las requerimos en este caso al ahut.registro

  //Validamos que nombre contenga dos palabaras tanto con letras min como mayus.
  public nombrePaterrn: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  //Validamos que la cadena de caracteres que componen un email sea correcta con lo introducido en nuestro input.
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

constructor() { }

usernameValidator ( control: FormControl): ValidationErrors | null {
  const valor:string = control.value?.trim().toLowerCase();
  if (valor === 'user'){
    return {
      noUser: true
    }
  }
  return null;
}

matchPasword(campo1: string, campo2: string) {
  return (formGroup: AbstractControl): ValidationErrors | null => {

    const pass1 = formGroup.get(campo1)?.value;
    const pass2 = formGroup.get(campo2)?.value;

    if (pass1 !== pass2) {
      formGroup.get(campo2)?.setErrors({noIguales: true});
      return {noIguales:true}
    }
    formGroup.get(campo2)?.setErrors(null);
    return null
  }
}

}
