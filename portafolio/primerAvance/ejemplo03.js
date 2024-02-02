/* 
    Santillan Galaviz Ken Antonio 
    ---- 10.B -----
*/

var url = "https://jsonplaceholder.typicode.com/albums";

fetch(url)
.then(resp => resp.json())
.then(resp => {
    resp.forEach(element => {
        console.log("ID " + element.id + " -- title " + element.title + " -- userID " + element.userId);
    });
})
.catch(err => console.log(err));