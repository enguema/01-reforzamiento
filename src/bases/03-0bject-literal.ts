const person= {
    firstName: 'Andrea Nchama',
    lastName: 'Nguema' ,
    age: 21,
};



/*function sum(x, y, z){
    return x + y + z;
}
const numbers= [1, 2, 3];
console.log(sum(...numbers));*/


const spideramasn = {...person};
//console.log(person);

/**
 * permite a un elemento iterable tal como un arreglo o cadena 
 * - ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos (para Array literales) son esperados.
 * - o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados
 */