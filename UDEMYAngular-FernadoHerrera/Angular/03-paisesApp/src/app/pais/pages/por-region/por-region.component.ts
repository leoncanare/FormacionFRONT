import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
      margin-bottom: 5px;
    }
    ` 
  ]
})
export class PorRegionComponent {

  regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) 
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion( region: string){
    //[INFO] Si la region clickada es igual a regionActiva return vacio ya que ya que ya nos esta mostrando todos los paises de la regionActiva no necesitamos realizar la busqueda otra vez. 
    if (region === this.regionActiva){return;};
    
    this.regionActiva = region;
    //[INFO] Purgamos el campo para representar los paises de la region.
    this.paises = [];
  
    this.paisService.buscarPorRegion( region)
      .subscribe( paises => this.paises = paises);
  }
}
