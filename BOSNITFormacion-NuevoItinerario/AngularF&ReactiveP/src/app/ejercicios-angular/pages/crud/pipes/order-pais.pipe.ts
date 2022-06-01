import { Pipe, PipeTransform } from '@angular/core';
import { Pais } from 'src/app/ejercicios-angular/pages/crud/interfaces/pais.interface';

@Pipe({
  name: 'orderPais'
})
export class OrderPaisPipe implements PipeTransform {

  transform(paises: Pais[]): Pais[] {
    paises = paises.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
    return paises;
  }
}