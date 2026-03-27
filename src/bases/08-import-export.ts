import {heroes, type Hero} from './data/heroes.data';


const getHeroById=(id: number): Hero | undefined =>{
    const hero= heroes.find((hero) =>{
        return hero.id == id;
    });

    return hero;
}

//console.log(getHeroById(6));

//Tarrea 
export const getHerobyOwner=(myOwner:string): Hero[] |[] =>{
    const heroObj=heroes.filter((e)=>{
        return e.owner == myOwner;
    })

    return heroObj;
}

//console.log(getHerobyOwner('Marvel'));