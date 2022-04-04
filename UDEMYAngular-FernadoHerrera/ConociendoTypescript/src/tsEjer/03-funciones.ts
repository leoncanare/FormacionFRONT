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

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
  }
  
  function cuarar(personaje: PersonajeLOR, puntosHealing: number): void {
    personaje.pv += puntosHealing;
  }
  
  const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Legolas',
    pv: 50,
    mostrarHP() {
      console.log('Puntos de vida: ', this.pv);
    },
  };
  
  cuarar(nuevoPersonaje, 20);
  
  nuevoPersonaje.mostrarHP();
  