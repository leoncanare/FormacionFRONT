import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'leon';
  nombreUpper: string = 'LEON';
  nombreCompleto: string = 'leoN cAntAlaPieDRA';

  fecha: Date = new Date(); //Fecha de hoy.

}
