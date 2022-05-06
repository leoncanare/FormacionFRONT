import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//[INFO] Importamos la interface con el campo data que renombramos.
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // [INFO] Guion bajo indica que se va a compratir alguna propiedad siendo privado el array.
  private _historial: string[] = [];
  // [INFO] Key a la api Ghipy.
  private apiKey: string = '76juh5W9Qpkl3irKp40HNszp7bN8AOek';
  private urlAPI: string = 'https://api.giphy.com/v1/gifs';
  // [INFO] Genereamos resultados com una array de la busqueda, tipo Gif como indicamos en la interface.
  public resultados: Gif[] = [];

  //[INFO] Tomamos el historial con este geter.
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    //[INFO] Almacenamos en _historial nuetro historial que es el que compartimos con el resto de modulos, pasandolo de string a number con JSON.parse() porque nos lo requiere . LocalStorage puede regresar null por eso "|| entonces" puede regresar vacio la estructura del codigo lo requiere... y exclamacion para evitar el error de la var no declarada/vacia. Lo mismo hacemos con los resultados para que se muestren aunque refresquemos.
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  //[INFO] Almacena cada nueva busqueda que hagamos en el historial colocando la nueva antes que las demas con unshift.
  buscarGifs(query: string = '') {
    //[INFO] Almacenamos cada elemento solo en minusculas.
    query = query.trim().toLowerCase();

    //[INFO] Si nuestro array no inclulle el valor de query que es cada busqueda que hacemos, lo adjunta a la array, solo detectando los nuevos de los 10 que se muestran  cortando la array de la posicion 0 a la 10 con splice().
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      //[INFO] Almacenamos en localStorage F12-Alicacion en chrome todo el historial para que no se pierda al refrescar. Convirtiendo nuestro historial number a string con JSON.stringify(). Lo mismo hacemos con los resultados para que se muestren aunque refresquemos.
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    //[INFO] Estructurar una url desde HttpParams para no usar directamente el enlace.
    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query);
        
    this.http
    //[INFO] .get(tipo) este tipo referencia a la estructura de nuestros datos. Colocada en nuestra interface. Nuestra estructura del get coge el enlace web de la API etablece la accion shearch y le pasa por params la estructura que nosotros queremos buscar y presentar en uestra web.
      .get<SearchGifsResponse>(
        `${this.urlAPI}/search`, {params}
      )
      .subscribe((resp) => {
        // console.log(resp.data);
        //[INFO] Tomamos toda la data referente a nuetrs query y limitada por 10 elementos y la almacenamos en RESULTADOS.
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
