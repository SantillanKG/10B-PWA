

if(navigator.serviceWorker) {
    console.log("compatible...");
    navigator.serviceWorker.register('/sw.js');
}