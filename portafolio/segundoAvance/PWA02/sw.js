self.addEventListener('install', event => {
    console.log('Event: ' + event);

    const Instalacion = new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('Instalacion finalizada')
            self.skipWaitting();
            resolve();
        }, 1000)
    });
});

self.addEventListener('activate', event => {
    console.log('SW activado')
});

