import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent {

  //@Input('data') personajes: Personaje[] = [];
  
//[INFO] Usamos un get para obtener los pernoajes de DbzService. 
  get personajes() {
    return this.dbzService.personajes;
  }

//[INFO] Conectamos nuestro dbzService con nuestra app-personajes.
  constructor( private dbzService: DbzService){

  }
}
