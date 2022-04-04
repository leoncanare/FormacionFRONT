define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculaIVA = void 0;
    const telefono = {
        descripcion: 'Nokia A2',
        precio: 40
    };
    const ipad = {
        descripcion: 'Ipad 10',
        precio: 100
    };
    function calculaIVA(productos) {
        let total = 0;
        productos.forEach(({ precio }) => {
            total += precio;
        });
        return [total, total * 0.21];
    }
    exports.calculaIVA = calculaIVA;
    const articulos = [telefono, ipad];
    const [total, iva] = calculaIVA(articulos);
});
//console.log('Total => ',total);
//console.log('IVA => ',iva);
