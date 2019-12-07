// This keyword references the execution context of a function's call,
// which just determine how that function was called and in non-strict mode is always a reference to an object.

// This keyword can be different depending how the function is called.
// In other words, you cannot look at how a function was declared and know what this context will be.
// You have to see how the function is called at run time.

// To figure out in what context, we could easily look at the object where this function lives,
// which is the object immediately to the left of the function property.

const person = {
    firstName: 'tyler',
    getName() {
        return `${this.firstName} is my first name`; // tyler is my first name
    }
};

console.log(person.getName());

// 1. Was the function invoked? Yes
// 2. How was it invoked? Implicit binding with ()
// 3. What context was it invoked in? The person object


const person1 = {
    value: {
        firstName: 'tyler',
        getName() {
            return `${this.firstName} is my first name`; // tyler is my first name
        }
    }
};

console.log(person1.value.getName());

// 1. Was the function invoked? Yes
// 2. How was it invoked? Implicit binding with ()
// 3. What context was it invoked in? The value object


const person2 = {
    firstName: 'tyler',
    value: {
        getName() {
            return `${this.firstName} is my first name`
        }
    }
};

console.log(person2.value.getName());   // undefined is my first name

// Now our console.log says undefined is my first name, because firstName no longer lives on the value object.


function getName(){
    return `${this.firstName} is my first name`
}

console.log(getName()); // undefined is my first name
// console.log(window.getName());

// Whenever a function is declared, it is automatically added to the window object.
// 1. Was the function invoked? Yes
// 2. How was it invoked? Implicit binding with ()
// 3. What context was it invoked in? The window object



const person4 = {
    firstName: 'tyler',
    getName() {
        return `${this.firstName} is my first name`
    }
};

const anotherPerson = {};

anotherPerson.getName = person4.getName;

console.log(anotherPerson.getName()); // undefined is my first name

// 1. Was the function invoked? Yes
// 2. How was it invoked? Implicit binding with ()
// 3. What context was it invoked in? The anotherperson object, which have a getName() function defined, but not a firstName property.

// anotherPerson is the context object that this keyword will reference since it's the next in line object
// of when the function was called. anotherPerson does not have a firstName property on it.
// Again, even though the getName function was defined on person originally, that does have a firstName property.
//
// Because it was copied over to anotherPerson, the anothePerson object is what the function is actually called.
// Thus, making anotherPerson the context that this is going to reference.









