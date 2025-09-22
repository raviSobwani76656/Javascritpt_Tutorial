/*
===============================================
📌 JavaScript `arguments` Object - Complete Notes
===============================================

🔹 1. What is `arguments`?
- `arguments` is a special **array-like object** available inside every
  *regular function* (not in arrow functions).
- It holds all values passed to the function, regardless of the defined parameters.

Example:
*/
function example(a, b) {
  console.log(arguments[0]); // first argument
  console.log(arguments[1]); // second argument
  console.log(arguments.length); // total count
}
example("Ravi", "Rajesh", "Extra");
// Output: Ravi, Rajesh, 3

/*
🔹 2. Array-like but not a real Array
- `arguments` has indexed elements and `length`.
- ❌ Does not have array methods like `map`, `filter`, `forEach`.
- ✅ Can be converted to an array using:
  - `Array.from(arguments)`
  - `[...arguments]` (spread, but only works in regular functions)
*/

function printArgs() {
  let arr1 = Array.from(arguments);
  let arr2 = [...arguments];
  console.log(arr1, arr2);
}
printArgs("apple", "banana", "cherry");

/*
🔹 3. Regular Functions vs Arrow Functions
- Regular functions → have their own `arguments` object.
- Arrow functions → do NOT have their own `arguments`.
  Instead, they "inherit" `arguments` from the nearest regular function scope.
*/

function outer() {
  const arrow = () => {
    console.log(arguments); // refers to outer's arguments
  };
  arrow("x", "y");
}
outer(1, 2, 3);
// Output: Arguments(3) [1, 2, 3]

/*
🔹 4. Rest Parameters (Modern Alternative)
- Rest parameters (`...args`) are the preferred way in ES6+.
- They:
  ✅ Work in both regular and arrow functions.
  ✅ Return a real array.
  ✅ Safer and more predictable.

Example:
*/

const sum = (...nums) => {
  return nums.reduce((acc, n) => acc + n, 0);
};
console.log(sum(1, 2, 3, 4)); // 10

/*
🔹 5. Key Properties of `arguments`
- `arguments.length` → number of arguments passed
- `arguments.callee` → refers to the function itself (DEPRECATED, not in strict mode)
- Index-based access: `arguments[0], arguments[1], ...`

Example:
*/
function info() {
  console.log("Length:", arguments.length);
  console.log("First:", arguments[0]);
  console.log("Second:", arguments[1]);
}
info("Node.js", "JavaScript");

/*
🔹 6. Arguments vs Parameters
- Parameters → names in the function definition
- Arguments → actual values passed when calling the function

Example:
function greet(name) {   // "name" is a parameter
  console.log("Hello", arguments[0]); // value passed is an argument
}
greet("Ravi"); // "Ravi" is an argument
*/

/*
🔹 7. Behavior in Strict Mode
- In non-strict mode:
  `arguments` is linked to parameters (changing one affects the other).
- In strict mode:
  `arguments` and parameters are independent.

Example:
*/
function demo(a) {
  arguments[0] = 99;
  console.log(a); // 99 (non-strict mode behavior)
}
demo(10);

("use strict");
function demoStrict(a) {
  arguments[0] = 99;
  console.log(a); // 10 (independent in strict mode)
}
demoStrict(10);

/*
🔹 8. When to Use `arguments`
✅ Good for handling unknown number of inputs (legacy code).
❌ Avoid in new code → prefer rest parameters (`...args`) for cleaner syntax.

*/

/*
🔹 9. Comparisons

`arguments` vs Rest Parameters
---------------------------------
1. Availability:
   - arguments → only in regular functions
   - rest → in both arrow & regular functions
2. Type:
   - arguments → array-like (not true array)
   - rest → real array
3. Readability:
   - rest → modern, clean, recommended

Example:
function oldWay() {
  let args = Array.from(arguments);
  console.log("Old:", args);
}
oldWay(1, 2, 3);

const newWay = (...args) => {
  console.log("New:", args);
};
newWay(1, 2, 3);

*/

/*
🔹 10. Useful Tricks
- Convert `arguments` to array:
  let arr = Array.prototype.slice.call(arguments);
  let arr = Array.from(arguments);
  let arr = [...arguments];

- Use with Math functions:
*/
function maxValue() {
  return Math.max(...arguments);
}
console.log(maxValue(10, 20, 5)); // 20

/*
===============================================
✅ Summary
- `arguments` = legacy, array-like, only in regular functions.
- Use `Array.from(arguments)` or spread to convert to array.
- Arrow functions don’t have `arguments`.
- Use rest parameters (`...args`) in modern JavaScript.
===============================================
*/
