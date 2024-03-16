function sumaruno(numero) {
    var prom = new Promise(function(resolve, reject){

        if(numero >= 7){
            reject("Numero muy grande");
        }
        setTimeout(function(){
            resolve(numero + 1)
        });
    })

    return prom;
}

//console.log(sumaruno(5));

sumaruno(10).then(sumaruno).then(sumaruno).then(sumaruno).then(nuevovalor =>{
    console.log('sumar con then '+ nuevovalor);
})


sumaruno(5).then(nuevovalor => {
    console.log(nuevovalor)
    return nuevovalor;
}).then(nuevovalor => {
    console.log(nuevovalor)
    return nuevovalor;
}).catch(err =>{
    console.log(err);
})