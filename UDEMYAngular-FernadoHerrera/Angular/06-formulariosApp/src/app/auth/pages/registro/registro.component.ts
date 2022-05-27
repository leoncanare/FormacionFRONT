import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {

  get emailErrorMessage(): string {

    const errors = this.myForm.get('email')?.errors;
    if ( errors?.['required']) {
      return 'Debe incluir un email.'
    }else if (errors?.['pattern']){
      return 'Debe ser formato email.'
    }else if (errors?.['emailUsed']){
      return 'Este email ya existe.'
    }
    return ''
  }

  //[INFO] Nuestras validaciones provienen de shared/validators.
  myForm: FormGroup = this.fb.group({
    nombre: 
    ['',[Validators.required, Validators.pattern(this.vS.nombrePaterrn)]],
    email: 
    ['',[Validators.required, Validators.pattern(this.vS.emailPattern)],
        [this.emailvS]],
    username: ['', [Validators.required, this.vS.usernameValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators: [this.vS.matchPasword]
  });

  constructor(private fb: FormBuilder, 
              private vS: ValidatorService,
              private emailvS: EmailValidatorService) {}

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Leon Cantalapiedra',
      email: 'test1@test.com',
      username: 'leoncantallano',
      password: '123456',
      password2: '123456'
    });
  }



  // emailRequired() {
  //   return this.myForm.get('email')?.errors?.['required'] && 
  //          this.myForm.get('email')?.touched;
  // }

  // emailFormat() {
  //   return this.myForm.get('email')?.errors?.['pattern'] && 
  //          this.myForm.get('email')?.touched;
  // }

  // emailUsed() {
  //   return this.myForm.get('email')?.errors?.['emailUsed'] && 
  //          this.myForm.get('email')?.touched;
  // }

  campoNoValido(campo: string) {
    return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched;
  }

  guardar() {
    this.myForm.markAllAsTouched();
  }
}
