symbol creates a unique id

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);
console.log(eventSymbol.toString());

const Calc_Event_Symbol = Symbol('calculate event');
console.log(Calc_Event_Symbol.toString());



let s = Symbol('event');
let s2 = Symbol('event');
console.log(s === s2);
//false 
//this is false because Symbol('event'); is unique


let s1 = Symbol.for('event');
console.log(s1.toString());
//symbol(event);


let s9 = Symbol.for('event');
let s10 = Symbol.for('event');
console.log(s9 === s10);
//true

let s20 = Symbol.for('event');
let s21 = Symbol.for('event2');
console.log(s20 === s21);
//false

let sym1 = Symbol.for('event');
let desc = Symbol.keyFor(sym1);
console.log(desc);


//object literal
let article = {
    title: 'White Mountain',
    [Symbol.for('article')]: 'My Article'
};

let value = article[Symbol.for('article')];
console.log(value);
// "My Article"

console.log(Object.getOwnPropertyNames(article));
//["title"]


let article1 = {
    title: 'White Mountain',
    [Symbol.for('article')]: 'My Article'
};
console.log(Object.getOwnPropertySymbols(article1));
//[[object Symbol] { ... }]
