/*
===============================
 JavaScript apply() Method Notes
===============================

Definition:
-----------
- The apply() method is a built-in JavaScript function method.
- It immediately invokes a function and allows you to:
    1. Explicitly set the `this` value.
    2. Pass arguments as an array (or array-like object).

Syntax:
-------
functionName.apply(thisValue, [arg1, arg2, ...]);

Key Points:
-----------
1. First argument → the object to use as `this`.
2. Second argument → an array (or array-like object) of arguments.
3. The function is executed immediately.
4. If you pass `null` or `undefined` as the first argument, `this` will default to the global object (in non-strict mode) or `undefined` (in strict mode).

Example 1: Basic usage
----------------------
*/
function greet(greeting, place) {
  console.log(`${greeting}, I'm ${this.name} from ${place}`);
}

const person = { name: "Alice" };

greet.apply(person, ["Hello", "Paris"]);
// Output: Hello, I'm Alice from Paris

/*
Explanation:
- `this` → person object
- greeting → "Hello"
- place → "Paris"
- Arguments passed as an array
*/

/*
Example 2: Borrowing a function
-------------------------------
*/
const user1 = { name: "Ravi" };
const user2 = { name: "Emma" };

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}

sayHello.apply(user1, ["Hi"]); // Output: Hi, Ravi
sayHello.apply(user2, ["Hello"]); // Output: Hello, Emma

/*
Example 3: Using apply() with built-in functions
------------------------------------------------
*/
const numbers = [5, 2, 9, 1, 7];
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // Output: 9

/*
Example 4: No arguments
-----------------------
*/
function showName() {
  console.log(`My name is ${this.name}`);
}

showName.apply({ name: "John" });
// Output: My name is John

const user8 = {
  firstName: "Ravi",
  lastName: "sobwani",

  fullname: function (city, country) {
    console.log(
      `Full name is ${this.firstName} and ${this.lastName} and ${city} and ${country}`
    );
  },
};

const user9 = {
  firstName: "Raj",
  lastName: "wadhwani",
};

user8.fullname.apply(user9, ["Kota", "India"]);

function info(name, place) {
  console.log(
    `this is the ${name} of the person and he live in ${place} and he is ${this.age} years old `
  );
}

const obj2 = {
  age: 23,
};

info.apply(obj2, ["Ravi", "Kota"]);
