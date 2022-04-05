

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero ={
    nombre: 'Martin'
}

const pasajero2: Pasajero ={
    nombre: 'Paco',
    hijos: ['Natalia','Gabriel']
}

function imprimeHijos (pasajero: Pasajero): void{

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);