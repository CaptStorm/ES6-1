
let a = {
x:1
};

let b = {
y: 2
};

Object.setPrototypeOf(a,b);
console.log(a.y);

let a1 = { ab: 1}, b1 = { ba: 2 };

let target = {};
Object.assign(target, a1, b1);
console.log(target);
// 




let z = { z: 1}, w = {z: 3, w: 2};
let target = {};
Object.assign(target, z, w);
console.log(target);
/*

[object Object] {
  w: 2,
  z: 3
}

*/



let a = { a: 1}, b = { a: 5, b:2};
Object.defineProperty(b, 'c', {
value: 10,
enumerable: false
});

let target = {};
Object.assign(target, a, b);
console.log(target);

/*

[object Object] {
  a: 5,
  b: 2
}


*/


let a = { a: 1}, b = {a:5, b:2}, c = {c: 32};

Object.setPrototypeOf(b, c);

let target = {};
Object.assign (target, a, b);
console.log(target);
/*
[object Object] {
  a: 5,
  b: 2
}


let amount = NaN;
console.log(amount === amount);
//false
console.log(Object.is(amount, amount));
//true


let amount = 0,
total = -0;
console.log(amount === total);
//true 
console.log(Object.is(amount, total));


let article = {
    title: 'White horse',
    [Symbol.for('article')]:'My Article'
};

console.log( Object.getOwnPropertySymbols(article));
//output is symbol article


*/
