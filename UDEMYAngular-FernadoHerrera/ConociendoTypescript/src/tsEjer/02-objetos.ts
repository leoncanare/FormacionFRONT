let habilidades: string[] = ['Disparo', 'Rodar', 'Curar'];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: 'Strider',
  hp: 100,
  habilidades: ['Disparo', 'Rodar', 'Curar'],
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
