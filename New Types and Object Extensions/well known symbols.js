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


//
