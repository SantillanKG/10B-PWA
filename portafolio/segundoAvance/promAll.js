function sumarLento(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout( function(){
            resolve(numero + 1);
        }, 800);
    })
}

function sumarRapido(numero) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(numero + 1);
        }, 300);
    })
}

sumarLento(5).then(console.log);

sumarRapido(20).then(console.log);

ken = [sumarLento(1), sumarRapido(2), 10, 43]

Promise.all([sumarLento(1), sumarRapido(2)]).then(response => {
    response.forEach(prom => {
        console.log(prom)
    });
}).catch(console.log)