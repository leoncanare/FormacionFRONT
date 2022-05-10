import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, enMyusculas: boolean = true): string {
    //     if ( enMyusculas) {
    //         return value.toUpperCase();
    //     } else{
    //         return value.toLowerCase();
    //     }
    //[INFO] Arriba el pipe estructurado con un if, Abajo aqui la estructura como ternario.
    return enMyusculas 
        ? value.toUpperCase() 
        : value.toLowerCase();
  }
}
