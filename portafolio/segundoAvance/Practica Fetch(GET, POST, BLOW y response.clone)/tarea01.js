//Ken Santillan 10.-B

const axios = require('axios');

//URL
const url ='https://jsonplaceholder.typicode.com/users';
// Configuración de la solicitud para obtener un Blob

//Error
function handleError(error) {
    console.error('Error:', error.message || error);
}

/*
// Metodo GET con Axios
axios.get(url).then(response => {

    response.data.forEach(element => {
        console.log(element.username);
    });
})
.catch(handleError);
*/


/*
// Metodo POST con Axios
axios.post(url, {
    username: 'Ken',
    email:'Ken@gmail.com'}
).then(response => console.log(response.data))
.catch(handleError);
*/


/*
// Metodo response.clone()
fetch(url)
    .then(response => {
        const clonedResponse = response.clone();
        return clonedResponse.text();
    })
    .then(text => console.log('Contenido de la respuesta:', text))
    .catch(handleError);
*/

