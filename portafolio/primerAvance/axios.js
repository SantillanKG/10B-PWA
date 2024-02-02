/* 
    Santillan Galaviz Ken Antonio 
    ---- 10.B -----
*/

//npm install axios


const axios = require('axios');

const url ='https://jsonplaceholder.typicode.com/users'

axios.get(url).then(response => {

    response.data.forEach(element => {
        console.log(element.username);
    });
});

axios.post(url, {
    username: 'kensito',
    email:'kensito@gmail.com'}
).then(response => console.log(response.data))