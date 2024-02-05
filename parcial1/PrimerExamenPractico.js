//Santillan Galaviz Ken Antonio

const axios = require('axios');
var url = 'https://jsonplaceholder.typicode.com/todos';
const greenColor = "\x1b[32m";
const resetColor = "\x1b[0m";


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function LtpSoloId(){
    console.clear();
    axios.get(url).then(response => {

        response.data.forEach(element => {
            console.log("ID: " + element.id);
        });
    });
}

function LtpIdTitles(){
    console.clear();
    axios.get(url).then(response => {

        response.data.forEach(element => {
            console.log("ID: " + element.id + " Titulos: " + element.title);
        });
    });
}

function LtpIdTitlesUnsolved(){
    console.clear();
    axios.get(url).then(response => {

        response.data.forEach(element => {
            if (!element.completed)
                console.log("ID: " + element.id + " Titulos: " + element.title);
        });
    });
}

function LtpIdTitlesSolved(){
    console.clear();
    axios.get(url).then(response => {

        response.data.forEach(element => {
            if (element.completed)
                console.log("ID: " + element.id + " Titulos: " + element.title);
        });
    });
}

function LtpIdUserid(){
    console.clear();
    axios.get(url).then(response => {

        response.data.forEach(element => {
                console.log("ID: " + element.id + " Id de usuario: " + element.userId);
        });
    });
}

function LtpIdUseridUnsolved(){
    console.clear();
    axios.get(url).then(response => {

        response.data.forEach(element => {
            if (!element.completed)
                console.log("ID: " + element.id + " Id de usuario: " + element.userId);
        });
    });
}

function LtpIdUseridSolved(){
    console.clear();
    axios.get(url).then(response => {

        response.data.forEach(element => {
            if (element.completed)
                console.log("ID: " + element.id + " Id de usuario: " + element.userId);
        });
    });
}

function esperaUsuario(title) {
    console.clear();
    return new Promise(resolve => {
        rl.question(title + '\n', () => {
            resolve();
        });
    });
}


function menu() {
    console.clear();
    console.log("  Lista DE PENDIENTES DE LA NFL");
    console.log( greenColor + "-------------------------" + resetColor);

    console.log("1. Solo ID's");
    console.log("2. ID's y Titulos");
    console.log("3. Sin resolver ID's y Titulos");
    console.log("4. Resueltos ID's y Titulos");
    console.log("5. ID's y Id de usuario");
    console.log("6. Resueltos ID's y Id de usuario");
    console.log("7. Sin resolver ID's y Id de usuario");

    console.log(greenColor + "-------------------------" + resetColor);

    console.log("8. Salir");
}

async function handleOption(option) {
    switch(option){
        case '1':
            LtpSoloId();
            await esperaUsuario(greenColor + "Solo ID's" + resetColor);
            menu();
        break;
        case '2':
            LtpIdTitles();
            await esperaUsuario(greenColor + "ID's y Titulos" + resetColor);
            menu();
        break;
        case '3':
            LtpIdTitlesUnsolved();
            await esperaUsuario(greenColor + "Sin resolver ID's y Titulos" + resetColor);
            menu();
        break;
        case '4':
            LtpIdTitlesSolved();
            await esperaUsuario(greenColor + "Resueltos ID's y Titulos" + resetColor);
            menu();
        break;
        case '5':
            LtpIdUserid();
            await esperaUsuario(greenColor + "ID's y Id de usuario" + resetColor);
            menu();
        break;
        case '6':
            LtpIdUseridSolved();
            await esperaUsuario(greenColor + "Resueltos ID's y Id de usuario" + resetColor);
            menu();
        break;
        case '7':
            LtpIdUseridUnsolved();
            await esperaUsuario(greenColor + "Sin resolver ID's y Id de usuario" + resetColor);
            menu();
        break;
        case '8':
            console.clear();
            rl.close();
            process.exit(); 
        break;
        default:
            menu();
            askForOption(); 
        break;
    }
};

async function askForOption() {
    while (true) {
        menu();
        const option = await new Promise(resolve => rl.question('Ingrese un valor: ', resolve));
        await handleOption(option);
    }
};

rl.on('close', () => {
    console.clear();
    console.log('¡Saliste de la aplicacion!');
});


menu();
askForOption();
