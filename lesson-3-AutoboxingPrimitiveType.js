const str = 'foo';
console.log(typeof str); //string
console.log(str.length); //3
console.log((10).toString()); //10
console.log(true.valueOf()); //true

// What we can't see behind the scenes is JavaScript is doing something called autoboxing.
// Autoboxing happens automatically whenever we treat a primitive type like an object.

// JavaScript will wrap those primitives into an object.
// With this new object, it will connect it to the built-in object prototype that corresponds with that primitive type.
// Which thus, gives us access to the built-in dot prototype methods from the browser.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype



