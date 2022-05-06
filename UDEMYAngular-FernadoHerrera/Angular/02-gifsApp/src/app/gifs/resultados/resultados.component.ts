import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  //[INFO] Tomamos con un get la var resultados que contiene la data de la busqueda.
  get resultado() {
    return this.gifsService.resultados;
  }
  //[INFO] Nos "vinculamos" al service.
  constructor(private gifsService: GifsService) {}
}
