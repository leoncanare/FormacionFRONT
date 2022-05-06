import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.css']
})

export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { 
    
  }

  buscar(term: string){
    this.gifsService.buscarGifs(term);
  }

}
