function sumaruno(numero, callback) {
    setTimeout(function (){
        //return numero + 1;
        callback(numero + 1)
    }, 800);
}

sumaruno(10, function(nuevovalor){
    console.log(nuevovalor);
    sumaruno(nuevovalor, function(nuevovalordos){
        console.log(nuevovalordos);
        sumaruno(nuevovalordos, function(nuevovalortres){
            console.log(nuevovalortres);
        });
    });
});

