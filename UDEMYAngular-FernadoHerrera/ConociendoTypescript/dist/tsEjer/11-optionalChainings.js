"use strict";
const pasajero1 = {
    nombre: 'Martin'
};
const pasajero2 = {
    nombre: 'Paco',
    hijos: ['Natalia', 'Gabriel']
};
function imprimeHijos(pasajero) {
    var _a;
    const cuantosHijos = ((_a = pasajero.hijos) === null || _a === void 0 ? void 0 : _a.length) || 0;
    console.log(cuantosHijos);
}
imprimeHijos(pasajero1);
