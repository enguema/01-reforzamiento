/**
 * TypeCript especifica el valor de retorno de una función, esto es opcional. Pero es una buena práctica hacerlo, 
 * ya que ayuda a evitar errores y hace que el código sea más fácil de entender.
 * 
 * Si no se pone el tipo de retorno, TypeScript lo infiere automáticamente.
 */

function greet(name:string ): string {
    return `Hola ${name}`;
}
const message = greet('Goku');
console.log(message);


//funciones de flecha
/**
 * 1. Función tradicional
 * 
        function (a){
            return a + 100;
        }

    2. Desglose de la función flecha

    3. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
        (a) => {
            return a + 100;
        }

    4. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
        (a) => a + 100;

    5. Suprime los paréntesis de los argumentos
        a => a + 100;
 */

interface User{
    name:string,
    id:string
}
const greet2= (name:string):string => `Hola ${name}`;
console.log(greet2('Vegeta'));

function getUser(){//funcion tradicional
    return{
        name:'Nchama',
        id:'1234'
    };
}

const getUser2= ():User => {//Funcion de flecha
     return{
        name:'Nchama',
        id:'1234'
    };
};
const getUser3=()=>({
    /*
        Funcion de flecha con retorno implícito,
        se debe envolver el objeto entre paréntesis para que no se confunda con el cuerpo de la función
    */ 
    name:'Nchama',
    id:'1234'
});
console.log(getUser2(), getUser(), getUser3());