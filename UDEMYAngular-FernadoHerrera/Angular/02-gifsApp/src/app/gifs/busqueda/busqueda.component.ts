import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

//[INFO] Con este decorador accedemos a el input buscar de nuestro html, la exclamacion evita el error por defecto de confiar que ese valor esta declarado. Con elementRef indicamos que tipo de elmento obtenemos lo almacenamos en la funcion buscar, reseteamos el valor busqueda indicandole un valor vacio.

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

//[INFO] Importamos servicio gifsService.
  constructor ( private gifsService: GifsService) {

  }

  buscar( ) {
    
    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length === 0) {
      return;
    };

    

//[INFO] Mandamos el valor al sercivo para que lo almacene en la Array del historial.
    this.gifsService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }

}
