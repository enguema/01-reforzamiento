const API_KEY='ajVUfrTWLnz5q7HBC5ehGW2FlmHsEqC2';

const myRequest= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest.then((response)=>{
    response.json().then((data)=>{
        console.log(data);
    })
    //console.log(response);
}).catch(error=>{
    console.error('Error al obtener el gif',error);
})