import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY='ajVUfrTWLnz5q7HBC5ehGW2FlmHsEqC2';

const myRequest= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOME=(url:string)=>{
    const imgElement=document.createElement('img');
    imgElement.src=url;
    document.body.append(imgElement);
}

myRequest
.then((response)=>response.json())
.then(({data}: GiphyRandomResponse)=>{//Aquí ya aplicamos la desestructuracion.
    const imageUrl=data.images.original.url;
    //console.log(imageUrl);
    createImageInsideDOME(imageUrl);
    
}).catch((error)=>{
    console.error('Error al obtener el gif',error);
})