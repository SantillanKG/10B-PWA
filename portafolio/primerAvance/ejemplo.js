/* 
    Santillan Galaviz Ken Antonio 
    ---- 10.B -----
*/

var prism = function (l,w, h) {
    return l * w * h;
}

//console.log(prism(1, 2, 3));

var prisma = function(l) {
    return function(w) {
        return function(h) {
            return l * w * h;
        }
    }
}

//console.log(prisma(1)(2)(3));

var foo = (function(){
    console.log("Something");
})();


const bar = (function() {
    return 56;
})

console.log(bar);