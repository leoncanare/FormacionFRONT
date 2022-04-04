"use strict";
/*function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otronumero?: number,
  base: number = 2
): number {
  return numero * base;
}*/
function cuarar(personaje, puntosHealing) {
    personaje.pv += puntosHealing;
}
const nuevoPersonaje = {
    nombre: 'Legolas',
    pv: 50,
    mostrarHP() {
        console.log('Puntos de vida: ', this.pv);
    },
};
cuarar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();
