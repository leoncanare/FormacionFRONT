import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

//[INFO] Indicamos que datos vamos a recoger en nuestro form referenciando a la dbz.interface Personajes.
  @Input ('dataNuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

//[INFO] Conectamos nuestro dbzService con nuestra app-agregar.
  constructor( private dbzServide: DbzService){

  }

  //@Output() onDataNuevo: EventEmitter<Personaje> = new EventEmitter();

  agregar () {
    if (this.nuevo.nombre.trim().length === 0){return;}

    //this.onDataNuevo.emit( this.nuevo);

//[INFO] Pasamos los datos recogidos a el metodo agrgarPersonaje de nuetro dbzService.
    this.dbzServide.agregarPersonaje(this.nuevo); 

//[INFO] Limpiamos los campos al ya agregar el nuevo personaje.
    this.nuevo = {
      nombre: '',
      poder : 0
    }

  }

}
