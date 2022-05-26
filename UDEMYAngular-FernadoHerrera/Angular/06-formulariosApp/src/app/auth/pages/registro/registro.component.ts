import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //TODO: Temporal
  //Validamos que nombre contenga dos palabaras tanto con letras min como mayus.
  nombrePaterrn: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.nombrePaterrn)]],
    email: ['',[Validators.required, Validators.pattern(this.emailPattern)]]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Leon Cantalapiedra',
      email: 'test1@gmail.com'
    })
  }

  campoNoValido( campo: string) {
    return this.myForm.get(campo)?.invalid
      && this.myForm.get(campo)?.touched;
  }

  guardar() {
    this.myForm.markAllAsTouched();
  }
}
