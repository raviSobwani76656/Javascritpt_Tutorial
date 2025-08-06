// ===============================
// this Keyword in JavaScript
// ===============================

// Definition:
// The `this` keyword in JavaScript refers to the object that is executing the current function.
// Its value depends on how and where the function is called, not where it is defined.

// 1. Global Context
// In the global scope, `this` refers to the global object (window in browsers, global in Node.js).
console.log("1. Global Context:");
console.log(this); // In browser: Window, In Node.js: {}
console.log("--------------------");

// 2. Inside an Object Method
// When used inside a regular function method of an object, `this` refers to the object the method is called on.
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`); // "Alice"
  },
};

console.log("2. Inside Object Method:");
person.greet();
console.log("--------------------");

// 3. Using `this` in Constructor Functions
// In a constructor function, `this` refers to the new object being created.
function Car(model) {
  this.model = model;
}

const myCar = new Car("Tesla");

console.log("3. Constructor Function:");
console.log(myCar.model); // "Tesla"
console.log("--------------------");

// 4. `this` in Arrow Functions
// Arrow functions do NOT bind their own `this`. Instead, they inherit `this` from the parent (lexical) scope.
const arrowExample = {
  name: "Bob",
  regularFunc: function () {
    console.log("Regular function:", this.name); // "Bob"
  },
  arrowFunc: () => {
    console.log("Arrow function:", this.name); // `this` is from global context, likely undefined
  },
};

console.log("4. Arrow Functions:");
arrowExample.regularFunc();
arrowExample.arrowFunc();
console.log("--------------------");

// 5. Global Variable Example
globalThis.name = "Tarkresh";

const person2 = {
  name: "Alice",
  showNameArrow: () => {
    // `this` here is not person2, it's globalThis
    console.log(`Arrow: My name is ${this.name}`); // Tarkresh
  },
  showNameRegular: function () {
    console.log(`Regular: My name is ${this.name}`); // Alice
  },
};

console.log("5. Global Variable & this:");
person2.showNameArrow(); // "Tarkresh" from globalThis
person2.showNameRegular(); // "Alice" from person2
console.log("--------------------");

// 6. Summary
/*
  Summary of `this` in JavaScript:

  ✅ In the global scope:
     - `this` refers to the global object (globalThis in Node.js, window in browser).

  ✅ In a method:
     - `this` refers to the object calling the method.

  ✅ In a constructor:
     - `this` refers to the new instance being created.

  ❌ In arrow functions:
     - `this` does NOT bind to the calling object.
     - It inherits from the enclosing (lexical) scope.

  ⚠️ When using arrow functions in object methods, avoid using `this` unless you know it comes from the outer scope.

  ✔️ `globalThis` is a universal way to access the global object across environments (Node, Browser).

  Examples:
    function test() {
      console.log(this);
    }

    const obj = {
      value: 10,
      method: function () {
        console.log(this.value);
      }
    };
*/

const p2erson = {
  name: "Ravi",

  greet: function () {
    console.log(this);
  },
};

p2erson.greet();

const p2er3son = {
  name: "Raj",
  greet: () => {
    console.log(`my name is ${this.name}`);
  },
};

p2er3son.greet();
