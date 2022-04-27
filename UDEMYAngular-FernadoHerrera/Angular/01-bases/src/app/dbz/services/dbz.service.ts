//[INFO] Este archivo se utiliza como banco de datos y metodos para el resto de nustra app.
import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()

export class DbzService {

//[INFO] Hacemos privada nuestra BD de personajes.
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder : 15000
        },
        {
          nombre: 'Vegeta',
          poder : 7500
        }
    ];

//[INFO] La sacamos con un get de forma privada para poder utilizarla en otros componentes.
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() { }

//[INFO] Creamos la funcion agragar para utilizarla en el comp.agregar.
    agregarPersonaje( dataPersonaje: Personaje){
        this._personajes.push( dataPersonaje);
    }
}