"use strict";
const superHero = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY',
    },
    mostrarDireccion() {
        return (this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais);
    },
};
const direccion = superHero.mostrarDireccion();
console.log(direccion);
