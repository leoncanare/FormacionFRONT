"use strict";
class MiSuperClase {
    constructor() {
        this.miPropiedad = 'abc123';
    }
    imprimir() {
        console.log('Hola Paco');
    }
}
console.log(MiSuperClase);
const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);
//https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
