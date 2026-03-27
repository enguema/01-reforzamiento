const myPromise= new Promise((resolve)=>{
    setTimeout(()=>{
        //Ya quiero mi dinero
        resolve(1000);
    } ,2000);// 2 segundos
})

myPromise.then((myMoney)=>{
    console.log(`Tengo mi dinero ${myMoney}`);
});

//GIPHY API URL: https://api.giphy.com/v1/gifs/random?api_key=ajVUfrTWLnz5q7HBC5ehGW2FlmHsEqC2&tag=&rating=g