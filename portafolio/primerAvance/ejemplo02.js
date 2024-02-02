/* 
    Santillan Galaviz Ken Antonio 
    ---- 10.B -----
*/

var say = function say(times) {
    if (times > 0) {
        console.log("times");
        say(times - 1);
    }
}

var saysay = say;

say = "Oops";
saysay(10);


function persons(p, ...msg){
    msg.forEach(arg=> {
        console.log(p + " say: " + arg);
    })
}


persons("foo", "hellow","ken", "say")