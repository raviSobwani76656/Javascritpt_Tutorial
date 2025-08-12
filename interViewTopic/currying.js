/*
==========================
📌 Currying in JavaScript
==========================

- Currying is the process of transforming a function that takes multiple arguments
  into a sequence of nested functions, each taking one argument at a time.

- Syntax:
    Instead of: f(a, b, c)
    We write:   f(a)(b)(c)

- Use cases:
    1. Reusing functions with partial arguments (partial application)
    2. Making code more functional and composable
    3. Useful in frameworks/libraries like React, Redux, and Lodash

- Benefit:
    Lets you "preset" arguments and create specialized functions
*/

// Example with Normal Functions
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(4)); // Output: 9

// Example with ES6 Arrow Functions
const addArrow = (a) => (b) => (c) => a + b + c;

console.log(addArrow(5)(10)(15)); // Output: 30

// Step 1: First function takes "greeting"
function greet(greeting) {
  // Step 2: Returns another function that takes "name"
  return function (name) {
    console.log(greeting + ", " + name + "!");
  };
}

// Create pre-configured greeters
var sayHello = greet("Hello");
var sayHi = greet("Hi");

// Use them
sayHello("Alice"); // Output: Hello, Alice!
sayHi("Bob"); // Output: Hi, Bob!

function discountCalculator(customerType) {
  return function (category) {
    return function (price) {
      let discount = 0;

      if (customerType === "regular") discount += 0.05;
      if (customerType === "premium") discount += 0.1;

      if (category === "electronics") discount += 0.05;
      if (category === "clothing") discount += 0.03;

      return price - price * discount;
    };
  };
}

const premiumElectronicsDiscount = discountCalculator("premium")("electronics");
const regularClothingDiscount = discountCalculator("regular")("clothing");

console.log(premiumElectronicsDiscount(1000)); // 850
console.log(regularClothingDiscount(500)); // 460

// When to Use Currying

// When you don’t have all arguments at the same time (e.g., know the customer type now, get the product and price later).

// To create specialized versions of a function for reuse without repeating fixed parameters.

// To make code cleaner and modular by pre-configuring part of a function and reusing it anywhere.

// Ideal for scenarios needing flexibility and progressive data collection over time.
