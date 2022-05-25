import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl: string = environment.heroesUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.heroesUrl}/heroes`);
  }

  getHeroesId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.heroesUrl}/heroes/${id}`);
  }
// [INFO] Con este Observable que consumimos desde nuestra pag buscar lo que hacemos es introducir en nuestro enlace de busqueda del termino escrito por pantalla en nuestro input.
  getSugerencias( termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(
      `${this.heroesUrl}/heroes?q=${termino}&_limit=5`
    );
  }
//[INFO] Con cada atributo que agregamos a cada funcion (POST, PUT, DELETE) lo que hacemos es comunicar all backend la accion que queremos realizar sobre el ya se a actualizar, introducir nueva data o borrar data.
  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.heroesUrl}/heroes`,heroe);
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.heroesUrl}/heroes/${heroe.id}`,heroe);
  }

  borrarHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.heroesUrl}/heroes/${id}`);
  }
}
