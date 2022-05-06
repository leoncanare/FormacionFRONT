import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paisesBusqueda: Pais[] = [];

  constructor( private paisService: PaisService) { }
  
  buscar( terminoInput: string) {

    this.hayError = false;
    this.termino = terminoInput;
    //console.log(this.termino);
      // [INFO] Esta es la estructura del subscribe al servidorPais next lanza la respuesta y error en el caso de que no haya funcionado o no exista dicho pais.
      this.paisService.buscarPais( this.termino)
      .subscribe({
        next: (paises) => {console.log(paises), this.paisesBusqueda = paises},
        //[INFO] Declarmos nuetro error, y en el caso de que recibamos este error limpia el array de paises para que no muestre nuetra tabla en el caso de que el arry este vacio.
        error: (err) => {this.hayError = true, this.paisesBusqueda = []},
      }
      );
  }

  sugerencias( termino: string) {
    this.hayError = false;
  }

}
