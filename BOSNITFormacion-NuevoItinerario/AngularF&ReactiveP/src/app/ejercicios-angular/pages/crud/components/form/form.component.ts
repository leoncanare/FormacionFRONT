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

  crudForm: FormGroup = this.fb.group(
    {
      username: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.email],[this.emailValidator],],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password2: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      id: ['', []],
      ofers: [false, []],
    },
    {
      validators: [this.passValidator.matchPassword('password', 'password2')],
    }
  );

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private dataService: DataComunicationService,
    private passValidator: PasswordValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit() {
    this.crudService.getAllCountryes().subscribe((res) => (this.paises = res));
  }

  campoNoValido(campo: string) {
    return (
      this.crudForm.controls[campo]?.errors &&
      this.crudForm.controls[campo]?.touched
    );
  }

  //Establecemos el valor original del email para poder compararlo en la validacion de nuestro mail y que no salte el error de mail ya en uso.
  patchForm(value: any) {
    this.crudForm.patchValue(value);
    this.emailValidator.originalMail = value.email;
  }

  //Este metodo limpia el valor originalMail que guardamos en el emailValidador evitando generar un bug en la proxima edicion de un usuario.
  clearFrom() {
    this.crudForm.reset();
    this.emailValidator.originalMail = null;
  }

  submit() {
    const id = this.crudForm.get('id')?.value;
    const formValue = { ...this.crudForm.value };

    if (this.crudForm.invalid) {
      this.crudForm.markAllAsTouched();
      return;
    } else if (!id) {
      delete formValue.password2;
      this.crudService.addUser(formValue).subscribe({
        next: (res) => {
          this.dataService.setformDataUpdate(true);
          this.crudService.postSnakbar(
            'El usuario fue añadido correctamente.',
            'Aceptar',
            'perfecto'
          );
          this.crudForm.reset();
        },
        error: () => {
          this.crudService.postSnakbar(
            'Sucedio un error al añadir el nuevo usuario.',
            'Cerrrar',
            'error'
          );
        },
      });
    } else {
      this.updateUser(id);
      this.crudForm.reset();
    }
  }

  updateUser(id: number) {
    this.crudService.editUser(this.crudForm.value, id).subscribe({
      next: (res) => {
        this.dataService.setformDataUpdate(true);
        this.crudService.postSnakbar(
          'El usuario fue actualizado correctamente.',
          'Aceptar',
          'perfecto'
        );
        this.crudForm.reset();
      },
      error: () => {
        this.crudService.postSnakbar(
          'Sucedio un error al actualizar el usuario.',
          'Cerrar',
          'error'
        );
      },
    });
  }

  //Custom Message Validations.
  get emailErrorMsg(): string {
    const errors = this.crudForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email es obligatorio.';
    } else if (errors?.['email']) {
      return 'El valor ingresado no tiene formato de correo.';
    } else if (errors?.['emailUsed']) {
      return 'El email ingresado ya esta en uso.';
    }
    return '';
  }

  get passwordErrorMsg(): string {
    const errors = this.crudForm.get('password')?.errors;
    if (errors?.['required']) {
      return 'Este campo es obligatorio.';
    } else if (errors?.['minlength']) {
      return 'La contraseña debe contener al menos 4 caracteres.';
    }
    return '';
  }

  get password2ErrorMsg(): string {
    const errors = this.crudForm.get('password2')?.errors;
    if (errors?.['required']) {
      return 'Este campo es obligatorio.';
    } else if (errors?.['notEqual']) {
      return 'Las contraseñas deben coincidir.';
    }
    return '';
  }
}
