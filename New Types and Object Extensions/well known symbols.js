//well known symbols

let Blog = function (){
};


let blog = new Blog();
console.log(blog.toString());

let Website = function (){
};
Website.prototype[Symbol.toStringTag] = "blog class";

let blog1 = new Website();
console.log(blog1.toString());

let values = [ 9, 21, 12];
console.log([].concat(values));


let values1 = [ 9, 21, 12];
values1[Symbol.isConcatSpreadable]=false;
console.log([].concat(values1));


let values2 = [ 9, 21, 12];
let sum = values2 + 100;
console.log(sum)
//"9,21,12100"

let values3 = [ 9, 21, 12];
values3[Symbol.toPrimitive] = function(hint){
console.log(hint);
return 42;
};
let sum2 = values3 + 120;
console.log(sum2);
//funciton returns a value 42 + 120
