// Functions in JavaScript are first class objects.
// This basically means that they can have properties and methods just like any other plain object can.

// Whenever we create a function, behind the scenes,
// JavaScript is automatically creating a property for us on this functional object called .prototype.

// foo.prototype is just an object that has two properties on it.
// A constructor property that points back to the FOO function and a _proto_ that is referencing another object.

// If you're new to JavaScript, it might be confusing to understand the difference between a functions .prototype property and the dunder property that lives on objects.
// Dunder proto is another way of referencing the _proto_ property that lives in all objects.

// To reiterate, whenever we define a function,
// JavaScript will automatically create an object as the value of a .prototype property.


function foo(){}

foo.prototype.test = 'hello world';

console.log(foo.prototype);

const name = new foo();

console.log(name.test);


// !!! Whenever the new keyword is used, a new object is created.
// The .prototype object that lives in the function the new keyword is called against
// becomes the next-in-line dunder proto object of the new object created from the new keyword.
// e.g. foo.prototype === name.__proto__
// true
// THAT IS HOW ALL THE NEW OBJECTS LIKE const b = new Set([]) inherites all the functions from Set.prototype
// !!!


// From lesson-5-3-prototype-ObjectArrayMapSetAreActuallyFunctions.jpg:
// If we were to type the keyword Object -- with a capital O -- into our console, you might expect to see an actual object.
// However, it's actually a function.

// These are built-in object functions. It's the same for array, map, and set.
// These are all global functions and not an object type, as it implies.
// These global functions have a .prototype object just like every other function.
// This .prototype object holds mini-methods you probably use in your code every day.

// For example, every time you use the .map function on an array, you're using the global array.prototype object .map method.
// JavaScript news up these global functions for us, and connects their corresponding global function .prototype object to the instance dunder proto property.
// In other words, you're using prototype inheritance every time you use any kind of object within your code.

