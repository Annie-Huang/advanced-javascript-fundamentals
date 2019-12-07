const a = {};

// __proto__. This proto key is also called Dunder proto.
// What you're seeing here with this Dunder proto property is prototypes and inheritance in JavaScript.
// Every time you work with an object within JavaScript, as long as you don't mutate it later,
// will automatically be linked through this Dunder proto property to the global object prototype.

a.toString = function () { return true;};

const b = Object.create(a);

console.log(a.toString());

console.log(b.toString());

// The next-in-line prototype object through the Dunder property is
// the global object prototype object that all objects are given when no prototype is specified or mutated otherwise.

// !!! Whenever we do lookups on an object in JavaScript, it will go through each prototype chained object
// until it finds the corresponding property, or it will return undefined if it never finds it.
// It stops searching through this chain as soon as it matches on a property.
