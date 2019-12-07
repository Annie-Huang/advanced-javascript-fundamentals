// all var declarations are hoisted only to the top of their execution context with an initial value of undefined.

// var firstName = 'tyler';
var firstName = undefined;
firstName = 'tyler';

// window.firstName === 'tyler';

// with {}, the stuff inside become a block scope
// {
function foo() {
    // var firstName = 'clark';
    var firstName = undefined;
    firstName = 'clark';
    console.log(firstName); // clark
}

console.log(firstName); // clark

foo();

//////////////////////////////////////////////////////////////
console.log('------------------------');

let firstName1 = 'tyler';

// We see that unlike our var example, let does scope to block scopes, as well as function execution scopes.
// let is only initialized to a value when the parser evaluates it.
// In other words, it's not hoisted to this top of the scope with an initial value of undefined like var is.
{
    let firstName1 = 'clark';
    // let firstName1 = 'tyler'; //causes error
    console.log(firstName1); // clark
}

console.log(firstName1); // tyler


//////////////////////////////////////////////////////////////
console.log('------------------------');

const firstName2 = 'tyler';

{
    // You can mutate properties within an object and an array, for example, and no error will be thrown.
    // const firstName2 = 'clark';
    const firstName2 = {};
    firstName2.test = 'tyler';
    console.log(firstName2); // clark
}

console.log(firstName2); // tyler

























