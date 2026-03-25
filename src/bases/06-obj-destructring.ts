//Desestructuración de objetos: desempacar un obj y usar sus propiedades
const persona={
    name:'Tony',
    age:45,
    key:'Ironman',
}

const {name, age,key}=persona;
console.log(name, age, key);

interface Hero{
    name:string;
    age:number;
    key:string;
    rank?:string;
}

const useContext=({name, age, key, rank}:Hero)=>{
    return{
        //keyName:key,
        User:{
            name,
            age,
        },
        //rank:rank
    }
}
const context =useContext(persona);
console.log(context);

//Tarrea: desestructuracion anidada

