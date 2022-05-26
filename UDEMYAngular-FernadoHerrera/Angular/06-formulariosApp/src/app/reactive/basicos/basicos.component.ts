import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   'nombre'     : new FormControl('RTX 4000ti'),
  //   'precio'     : new FormControl(),
  //   'existencias': new FormControl()
  // })

  myForm: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    precio: [, [Validators.required, Validators.min(0)] ],
    existencias: [, [Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder) { }
//[INFO] Setear valores por defecto al inicio de la app.
  ngOnInit(): void {
    this.myForm.setValue({
      nombre: 'RTX 1000',
      precio: 2,
      existencias: 3
    })
  }

  campoNoValido(campo: string) {
    return this.myForm.controls[campo]?.errors 
    && this.myForm.controls[campo]?.touched
  }

  guardar() {

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return 
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
