import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Output,EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  //[INFO] Decorador que construlle el output y se nombrara cuando se declare el modulo para transmitirse.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //[INFO] Se nombrara cuando se esta escribiendo en el input y el modulo lo transmitirse.
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  //[INFO] Recogemos el placeholder personalizado emitido en cada app-component.
  @Input() placeholder: string = '';

  debounce: Subject<string> = new Subject();

  terminoInput: string = '';

  //[INFO] OnInit se lanza nada mas que se caraga nuestro component serian las funciones por defecto que empezarian nada mas que se declare. En nuestro caso (1) Emitimos cada vez que pulsamos una tecla almacenandola en el debounce. (2) Con el pipe le marcamos cada cuanto tiempo se actualiza nuestro subscribe emitido. Establece un ligero retardo para que se actualice cada 300 milesimas/seg.
  ngOnInit(): void {
    this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor => {
      console.log('debounce:', valor)
    });
  }

  //[INFO] Emitimos el evento que recogemos en nuestro input
  buscar() {
    this.onEnter.emit(this.terminoInput);
  }

  //[INFO] Esta funcion envia el valor del input cada vez que se escrive en el. pasando un evento como indicamos en el HTML.
  teclaPersionada ( event: any) {
    this.debounce.next( this.terminoInput );
  }
}
