export interface Producto {
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: 'Nokia A2',
    precio: 40
}

const ipad: Producto = {
    descripcion: 'Ipad 10',
    precio: 100
}

export function calculaIVA(productos: Producto[]): [number, number]{
    
    let total = 0;

    productos.forEach( ({precio}) =>{
        total += precio;    
    })

    return [total, total * 0.21];
}

const articulos = [telefono,ipad];

const [total, iva] = calculaIVA(articulos);

//console.log('Total => ',total);
//console.log('IVA => ',iva);