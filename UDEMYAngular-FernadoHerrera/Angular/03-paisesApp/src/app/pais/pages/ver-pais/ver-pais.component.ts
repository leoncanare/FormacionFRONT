import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

//[INFO] Funciona como una subscripcion a cualquier cambio de nuestra url utilizando el ngOnInit combinado con un subscribe al servidor.
  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
    //[INFO] Estas 6 lineas resumen el ultimo codigo utilizando un pipe en este caso un switchMap el cual tiene como funcoin utilizar un observavble y retornar otro al cual nos subscribimos y representamos por consola.
    //[INFO] TAP imprime por consola lo que haya justo antes de el dentro de un pipe.
    this.activatedRoute.params
    .pipe(
      switchMap( ( {id} ) => this.paisService.getPaisPorId( id ) ),
      tap( console.log )
    )
    .subscribe( resp => this.pais = resp[0]);
  }
}
    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorId( id )
    //   .subscribe( pais => {
    //     console.log(pais);
    //   })
    // });
  
