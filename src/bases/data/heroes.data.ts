//Procurar que todos los arrglos tengan un tipo de dato (gracias a las interfaces)

export interface Hero{
    id: number;
    name: string;
    owner?: Owner;//aqui uso mi tipo personalizado (myOwner)
    //sexo:sexxo;
    sexo:string;
}

 type Owner = 'DC' | 'Marvel'; //podemos crear tipos personalizados.
 //type sexxo='M'|'F';

//Enumeraciones
/*
  enum Owner { //no entiedo el error
    DC='DC',
    Marvel='Marvel'
  }
*/

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    //owner: Owner.DC,
    sexo:'M'
  },
  {
    id: 2,
    name: 'Spiderman',
    owner:'DC',
    sexo:'M'
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'Marvel',
    sexo:'M'
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
    sexo:'M'
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
    sexo:'M'
  },{
    id: 6,
    name: 'Daredevil',
    owner: 'Marvel',
    sexo:'M'
  }
];

//export default heroes;//Exportacion por defecto