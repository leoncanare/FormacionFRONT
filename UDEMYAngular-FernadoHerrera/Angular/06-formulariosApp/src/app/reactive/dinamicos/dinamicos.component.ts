import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  
  //[INFO] Esta es una forma sencilla de declarar los campos de nuestro formulario con la ayuda de FormBuilder en formularios reactivos, en el mismo se declara el valor por defecto y los validators correspondientes.
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [['Elder Ring'], ['Call of Dutty']],
      Validators.required
    ),
  });

  //[INFO] Creamos la variable nuevoFavorito el la que almacenaremos el dato a añadir en nuestra array de favoritos.
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  //[INFO] Para obtener nuestra array dentro del formGroup hacemos un get extrayendolo como un FormArray para asi poderlo usa facilmente.
  get favoritosArr() {
    return this.myForm.get('favoritos') as FormArray;
  }
 // Importamos el Servicio FormBuilder. Nos ayuda sintacticamente a generar un fromulario de una forma sencilla.
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  //[INFO] Comprobamos si nuestro campo es valido, al cual lo identificará pasandole el formControlName, esta funcion se nombra en nuestro span/if del imput al que le agregamos el metodo el cual comprueba que no tenga errores y no haya sido tocado y dejado vacio.
  campoNoValido(campo: string) {
    return (
      this.myForm.controls[campo]?.errors &&
      this.myForm.controls[campo]?.touched
    );
  }
  //[INFO] Este metodo agrega un nuevo favorito a nuestra array, si es invalid saltara la alerta, en el caso de ser valido llamamos a nuestro get favoritosArr y con un push le inyectamos el valor que recogemos desde nuestro formulario, poco despues limpiamos el campo de nuestro imput.
  agregar() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  //[INFO] En el caso de que pulsemos nuestro boton guardar y el formulario sea invalid marca todo los imputs como touched lo que hara saltar las alertas de cada input. En el caso de que sea valido resetea los capos y los printa por consola.
  guardar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  eliminar(index: number) {
    this.favoritosArr.removeAt(index);
  }
}
