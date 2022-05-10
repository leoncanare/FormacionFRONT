import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Ricardo', 'Felipe', 'Sara', 'Gustavo'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': ' tenemos un cliente esperando.',
    '=2': ' tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre = 'León';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue
  persona = {
    nombre: 'León',
    edad: 26,
    direccion: 'Calle Lago, Pamplona',
  };

  //Json
  heroes = [
    { nombre: 'Superman', vuela: true },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async
  miObservable = interval(1000);

  //[INFO] La siguiente promesa hace que la pasar 3500 milesimas de segundo muestre por pantalla el siguiente mensaje.
  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('¡Tenemos la data de la promesa!');
    }, 3500);
  });
}
