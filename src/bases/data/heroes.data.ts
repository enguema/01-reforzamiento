//Procurar que todos los arrglos tengan un tipo de dato (gracias a las interfaces)

interface Hero{
    id: number;
    name: string;
    owner: string;
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
];
