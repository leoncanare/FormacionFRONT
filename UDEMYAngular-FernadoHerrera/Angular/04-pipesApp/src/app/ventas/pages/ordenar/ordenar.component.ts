import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  pipeValue: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];
  //[INFO] Alterna el valor de mayus=true o mayus=false cambiando el campo de nuestro pipe entre upper y lower.
  enMayusculas() {
    this.pipeValue = !this.pipeValue;
  }
  //[INFO] Los botones cambian el valor del pipe al valor por el cual queremos ordenar la tabla.
  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

  constructor() {}

  ngOnInit(): void {}
}
