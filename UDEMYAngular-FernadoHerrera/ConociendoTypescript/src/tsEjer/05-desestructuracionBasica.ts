interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: `La cucaracha`,
    detalles:{
        autor: 'Los Tigres del Norte',
        anio: 2003
    }
}

const autor = 'Pedrito';

const {volumen, segundo, cancion, detalles} = reproductor; 
const {autor: autorDetalle, anio} = detalles;

//console.log('El volumen actual es: ', volumen);
//console.log('El segundo actual es: ', segundo);
//console.log('La cancion actual es: ', cancion);
//console.log('El autor actual es: ', autorDetalle);
//console.log('El año de la cancion actual es: ', anio);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);