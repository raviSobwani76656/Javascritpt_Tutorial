/*
==============================
HIGHER ORDER FUNCTIONS (HOF)
==============================

DEFINITION:
- A Higher Order Function is a function that:
  1. Takes another function as an argument (callback), OR
  2. Returns another function as a result.

- HOFs allow us to write more reusable, flexible, and concise code.

-----------------------------------
1. HOF TAKING A FUNCTION AS AN ARGUMENT
-----------------------------------
*/
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  let name = "John";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, John!

/*
-----------------------------------
2. HOF RETURNING ANOTHER FUNCTION
-----------------------------------
*/
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

/*
-----------------------------------
EXAMPLES OF BUILT-IN HOFs IN JS:
-----------------------------------
- Array methods: map(), filter(), reduce(), forEach(), sort()
*/

const numbers = [1, 2, 3, 4, 5];

// map() - transforms each element
const squares = numbers.map((n) => n * n);
console.log(squares); // [1, 4, 9, 16, 25]

// filter() - filters elements based on a condition
const even = numbers.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]

// reduce() - reduces array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

/*
KEY POINT:
- HOFs make code cleaner and more functional.
- Widely used in modern JavaScript (React, Node.js, functional programming).
*/
