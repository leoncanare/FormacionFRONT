import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      ...this.persona,
      condiciones: false,
    });

    //[INFO] EN EL CASO DE QUE QUERRAMOS QUE EL VALOR DE LA PERSONA ESTE SINCRONIZADO sin las condiciones CON EL FORMULARIO USAREMOS LOS SIGUIENTES METODOS.
    //  this.myForm.valueChanges.subscribe( ({ condiciones, ...rest}) => {
    //     this.persona = rest;
    //  })
  }

  guardar() {
    const formValue = { ...this.myForm.value };
    delete formValue.condiciones;
    this.persona = formValue;
    console.log(formValue);
  }
}
