import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('dinFormulario') dinFormulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Leon',
    favoritos: [
      {id: 1, nombre: 'Elder Ring'},
      {id: 2, nombre: 'Call of Dutty'},
    ]
  }

  nombreValido(){
    return (
      this.dinFormulario?.controls['nombre']?.errors
       &&
      this.dinFormulario?.controls['nombre']?.touched
    );
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = ''
  }

  guardar() {

  }

}
