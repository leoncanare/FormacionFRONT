define(["require", "exports", "./06-desestructuracionFuncion"], function (require, exports, _06_desestructuracionFuncion_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const carritoCompras = [
        {
            descripcion: 'Telefono 1',
            precio: 100
        },
        {
            descripcion: 'Telefono 2',
            precio: 150
        },
    ];
    const [total, iva] = (0, _06_desestructuracionFuncion_1.calculaIVA)(carritoCompras);
    console.log('Total ==> ', total);
    console.log('IVA ==>', iva);
});
