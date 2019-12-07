console.log(typeof 'hello world'); // string
console.log(typeof 1); // number
console.log(typeof false); // boolean
console.log(typeof 42n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof undefined); // undefined


console.log('----------------------');
let obj = { a : 1};
function addTwo0(obj) {
    obj.a = 2
}
addTwo0(obj);
console.log(obj); // {a: 2}

console.log('----------------------');

// This is because primitive types are passed by value to function params.
// Objects are passed by memory reference.
// This is a interesting concept, I didn't think of this before....
let num = 1;
function addTwo(num) {
    num = num + 2;
    console.log(num) // 3
}
addTwo(num);
console.log(num); // 1


// String is still primitive...
let num1 = 'str';
function addTwo1(num1) {
    num1 = num1 + num1;
    console.log(num1) // strstr
}
addTwo1(num1);
console.log(num1); // str










