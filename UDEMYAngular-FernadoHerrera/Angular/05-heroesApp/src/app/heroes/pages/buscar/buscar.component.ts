import { Component, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  
  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe | undefined;
//[INFO] Igualamos heroe a undefined aqui para que en el caso de que debajo en nuestro if se cumpla la condicion (realicemos la busqueda de un heroe inexixtente) este se limpie y no muestre nada.
  
  constructor( private heroesService: HeroesService ) {}

  ngOnInit(): void {}
//[INFO] Trim limpia los espacios en el caso de que los coloquemos en el input-> s u p e r === super
  buscando() {
    this.heroesService.getSugerencias( this.termino.trim())
      .subscribe(heroes => this.heroes = heroes)
  }

  // [INFO] Este metodo declarado en el mat-autocomplete esta configurado para que ene le momento de que seleccionemos un heroe sugerido este mismo aparaezca en la caja de nuestro input, recogemos el evento que es la seleccion , seleleccionando el valor en este caso el nombre lo igualamos al nuestra const heroe el cual sacamos el nombre y lo igualamos al termino y en el getHeroes al heroeSeleccionado.
  
  opcionSeleccionada(event: any){
    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroesId( heroe.id! )
      .subscribe( heroe => this.heroeSeleccionado = heroe );
  }
}
