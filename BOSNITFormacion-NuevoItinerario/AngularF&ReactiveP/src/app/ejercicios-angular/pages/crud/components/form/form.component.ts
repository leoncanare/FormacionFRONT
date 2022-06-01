import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Pais } from '../../interfaces/pais.interface';
import { DataComunicationService } from '../../service/dataComunication.service';
import { PasswordValidatorService } from '../../validations/password-validator.service';
import { EmailValidatorService } from '../../validations/email-validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  paises: Pais[] = [];

  crudForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6) ]  ],
    password2: ['', [ Validators.required ]  ],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    id: ['', []],
    ofers: [false, []],
  }, {
    validators: [ this.passValService.matchPassword('password','password2') ]
  });

  //TODO Falta la validadcion del email, y que los fallos de la caja de passwor 1/2 y email sean personalizados.

  // get emailErrorMsg(): string {
  //   const errors = this.crudForm.get('email')?.errors;
  //   if ( errors?.['required'] ) {
  //     return 'Email es obligatorio';
  //   } else if ( errors?.['pattern'] ) {
  //     return 'El valor ingresado no tiene formato de correo';
  //   } else if ( errors?.['emailTomado'] ) {
  //     return 'El email ya fue tomado';
  //   }

  //   return '';
  // }

  constructor(private crudService: CrudService, 
              private fb: FormBuilder,
              private dataService: DataComunicationService,
              private passValService: PasswordValidatorService,
              private emailValService: EmailValidatorService) {}

  ngOnInit() {
    this.crudService.getAllCountryes().subscribe((res) => (this.paises = res));
  }

  campoNoValido(campo: string) {
    return (
      this.crudForm.controls[campo]?.errors &&
      this.crudForm.controls[campo]?.touched
    );
  }

  submit() {
    const id = this.crudForm.get('id')?.value;
    if (this.crudForm.invalid) {
      this.crudForm.markAllAsTouched();
      return;
    } else if (id === '') {
      const formValue = {...this.crudForm.value};
      delete formValue.password2;
      this.crudService.addUser(formValue)
      .subscribe({
        next: (res) => {
          this.dataService.setformDataUpdate(true);
          this.crudService.postSnakbar('El usuario fue añadido correctamente.','Aceptar', 'perfecto');
          this.crudForm.reset();
        },
        error: () => {
          this.crudService.postSnakbar('Sucedio un error al añadir el nuevo usuario.','Cerrrar', 'error');
        },
      });
    } else {
      this.updateUser(id);
      this.crudForm.reset();
    }
  }

  updateUser(id: number) {
    this.crudService.editUser(this.crudForm.value,id)
    .subscribe({
      next: (res) => {
        this.dataService.setformDataUpdate(true);
        this.crudService.postSnakbar('El usuario fue actualizado correctamente.','Aceptar','perfecto');
        this.crudForm.reset();
      },
      error: () => {
        this.crudService.postSnakbar('Sucedio un error al actualizar el usuario.','Cerrar', 'error');
      },
    });
  }
}
