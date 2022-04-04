"use strict";
class PersonaNormal {
    constructor(nombre, direccio) {
        this.nombre = nombre;
        this.direccio = direccio;
    }
}
class Hero extends PersonaNormal {
    //alterego: string;
    //edad: number;
    //nombreReal: number;
    constructor(alterego, edad, nombreReal) {
        super(nombreReal, 'NY');
        this.alterego = alterego;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}
const ironMan = new Hero('IronMan', 45, 'Tony');
console.log(ironMan);
