import { Producto, calculaIVA } from './06-desestructuracionFuncion';

const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono 1',
        precio: 100

    },
    {
        descripcion: 'Telefono 2',
        precio: 150

    },
];

const [total, iva] = calculaIVA(carritoCompras);

console.log('Total ==> ',total);
console.log('IVA ==>',iva);

