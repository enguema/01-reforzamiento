const caracterName=["Rafael", "Maria", "Carlos"];
const[p1, a]=caracterName;
//console.log({p1});

//Desestructurar [Carlos]. Se pasa la posicion actual con una coma (si no nos interesa el valor de esa posicion)

const[,,p3]=caracterName;
//console.log({p3});

const returnArrayFn=()=>{
    return ['ABC', 123] as const; //Indica que el tipo de retorno es una tupla con esos valores específicos (string y number)
}

const[letters, numbers]=returnArrayFn();
//console.log(letters + ' '+ 100);

//---------Tarrea---------
function useState(valor:string){
    return['elemento1', (name:string)=>{console.log('Hola' + name)}] as const;
}

const[nombre, setNombre]=useState('Lisandro');
console.log(nombre);
setNombre('Lisandro');
console.log('Valor despues de aplicar el setName: ' + nombre); //El valor no cambia porque no estamos mutando el estado, sino que estamos creando una nueva referencia con el nuevo valor.