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

// 🧠 INFINITE CURRYING IN JAVASCRIPT
// ==================================
//
// 👉 Definition:
// Currying is a technique where a function with multiple arguments
// is transformed into a sequence of functions that take one argument each.
//
// Infinite currying extends this idea — allowing you to pass
// an indefinite number of arguments one by one until you stop the chain.
//
// Example Usage:
// add(1)(2)(3)(4)(); // 10

// -------------------------------------------------------------
// 🔹 BASIC CURRYING EXAMPLE
// -------------------------------------------------------------
//
// Normal function:
function addNormal(a, b) {
  return a + b;
}
console.log(addNormal(2, 3)); // 5

// Curried function:
function addCurry(a) {
  return function (b) {
    return a + b;
  };
}
console.log(addCurry(2)(3)); // 5

// -------------------------------------------------------------
// 🔹 INFINITE CURRYING EXAMPLE
// -------------------------------------------------------------
//
// Infinite currying allows chaining unlimited arguments until we stop
// by passing an empty pair of parentheses `()`.

function add(a) {
  return function (b) {
    // if 'b' exists, keep chaining
    if (b !== undefined) {
      return add(a + b);
    }
    // if 'b' is undefined (chain ended), return the total sum
    return a;
  };
}

console.log(add(1)(2)(3)(4)(5)()); // 15
console.log(add(10)(20)()); // 30

// -------------------------------------------------------------
// 🔹 EXPLANATION (STEP-BY-STEP)
// -------------------------------------------------------------
//
// 1️⃣ First call → add(1) returns a new function waiting for the next number.
// 2️⃣ Next call → (2) adds 2 → returns another function.
// 3️⃣ (3) adds 3 → again returns a new function.
// 4️⃣ When we finally call `()` (empty), 'b' is undefined.
//     So it stops chaining and returns the accumulated value.
//
// 🧩 Key Point:
// Each inner function "remembers" the previous 'a' value due to CLOSURE.

// -------------------------------------------------------------
// 🔹 EXAMPLE WITH MULTIPLICATION
// -------------------------------------------------------------
function multiply(a) {
  return function (b) {
    if (b !== undefined) {
      return multiply(a * b);
    }
    return a;
  };
}

console.log(multiply(2)(3)(4)()); // 24
console.log(multiply(5)(10)()); // 50

// -------------------------------------------------------------
// 🔹 REAL-LIFE USE CASES
// -------------------------------------------------------------
//
// ✅ Useful in Functional Programming patterns
// ✅ Can be used to build chainable configuration methods
// ✅ Helps write expressive APIs (e.g., testing libraries, data pipelines)
//
// Example (conceptual):
// logger.info("Server started").warn("Low memory").error("Crash")();

// -------------------------------------------------------------
// 🔹 ADVANCED NOTE
// -------------------------------------------------------------
//
// Infinite currying depends on:
// 1️⃣ Recursion → calling the same function repeatedly.
// 2️⃣ Closures → inner function retaining outer scope variable.
//
// In practice, it’s mostly used for educational or functional concepts,
// but it’s an excellent way to understand closures and recursion deeply.

// -------------------------------------------------------------
// ✅ SUMMARY
// -------------------------------------------------------------
//
// - Currying splits multi-arg functions into single-arg calls.
// - Infinite currying allows chaining unlimited args.
// - Chain ends when no argument is passed (undefined check).
// - Works using closures and recursion.
//
