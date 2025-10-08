/*
===============================
 JavaScript call() Method Notes
===============================

Definition:
-----------
- The call() method is a built-in function in JavaScript.
- It immediately invokes a function and allows you to:
    1. Explicitly set the `this` value.
    2. Pass arguments individually in the order the function expects.

Syntax:
-------
functionName.call(thisValue, arg1, arg2, ...);

Key Points:
-----------
1. First argument → the object to use as `this`.
2. Remaining arguments → passed to the function one by one.
3. The function is executed immediately.
4. If you pass `null` or `undefined` as the first argument, `this` will default to the global object (in non-strict mode) or `undefined` (in strict mode).

Example 1: Basic usage
----------------------
*/
function greet(greeting, place) {
  console.log(`${greeting}, I'm ${this.name} from ${place}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "Paris");
// Output: Hello, I'm Alice from Paris

/*
Explanation:
- `this` → person object
- greeting → "Hello"
- place → "Paris"
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

sayHello.call(user1, "Hi"); // Output: Hi, Ravi
sayHello.call(user2, "Hello"); // Output: Hello, Emma

/*
Example 3: Passing no arguments
-------------------------------
*/
function showName() {
  console.log(`My name is ${this.name}`);
}

showName.call({ name: "John" });
// Output: My name is John

function info(greeting) {
  console.log(`${greeting} and ${this.name}`);
}

const obj = {
  name: "Ravi",
};

info.call(obj, "HEllo");

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

user8.fullname.call(user9, "Kota", "India");

function nameCalling(city) {
  console.log(`this is the ${this.name} and he live in ${city}`);
}

const obj2 = {
  name: "Ravi",
};

nameCalling.call(obj2, "Kota");
