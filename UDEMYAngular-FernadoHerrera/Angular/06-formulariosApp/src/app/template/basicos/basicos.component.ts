import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'valor por defecto en ngModel'
  }

  constructor() {}

  ngOnInit(): void {}

  //[INFO] Con esta funcion que utilizamos en los ngIf de los inputs lo que hacemos es comprobar si en el input el valor que se a insertado cumple con la validacion y si el campo se a tocado en el caso de que se cumplan devuelve un true por lo que se mostrara el mensaje de alerta
  nombreValido(): boolean {
    return (
      !this.miFormulario?.controls['producto']?.valid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.value < 0 &&
      this.miFormulario?.controls['precio']?.touched
    );
  }

  guardar() {
    console.log(this.miFormulario);

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    })
  }
}
