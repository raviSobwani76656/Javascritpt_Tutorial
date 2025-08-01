// ----------------------------------------------------
// 🔥 MAP() - FULL REVISION NOTES FOR JAVASCRIPT
// ----------------------------------------------------

// 🔷 What is map() ?
// map() is used to transform each element of an array into a new element.
// It creates a NEW ARRAY with the transformed values.
// It does NOT modify the original array (immutable).

// 🔷 Syntax:
// array.map(function(currentValue, index, array) {
//    // return new value
// });

// currentValue: the current element being processed
// index: (optional) the index of the current element
// array: (optional) the original array

//-------------------------------------------------------------
// Example 1️⃣ - Simple doubling

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
// Output: [2, 4, 6, 8, 10]

//-------------------------------------------------------------
// Example 2️⃣ - Adding 5 to each element with all parameters

const arr = [10, 20, 30];

const result = arr.map((element, index, array) => {
  console.log(element, index, array);
  return element + 5;
});

console.log(result);
// Output: [15, 25, 35]

//-------------------------------------------------------------
// Example 3️⃣ - Working with array of objects

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
];

const names = users.map((user) => user.name);
console.log(names);
// Output: ['John', 'Jane', 'Bob']

//-------------------------------------------------------------
// Example 4️⃣ - Conversion use case (Celsius to Fahrenheit)

const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map((temp) => (temp * 9) / 5 + 32);
console.log(fahrenheit);
// Output: [32, 50, 68, 86]

//-------------------------------------------------------------
// Example 5️⃣ - Map with string manipulation

const words = ["hello", "world", "javascript"];

const upperCaseWords = words.map((word) => word.toUpperCase());
console.log(upperCaseWords);
// Output: ["HELLO", "WORLD", "JAVASCRIPT"]

//-------------------------------------------------------------
// Example 6️⃣ - Chaining map()

const arr2 = [1, 2, 3, 4];

const result2 = arr2
  .map((num) => num * 2)
  .map((num) => num + 1)
  .map((num) => `Value: ${num}`);

console.log(result2);
// Output: ['Value: 3', 'Value: 5', 'Value: 7', 'Value: 9']

//-------------------------------------------------------------
// 🔷 Difference Between map() and forEach()

// ✅ map() returns a new array.  (Chainable)
// ✅ forEach() returns undefined. (Not chainable)

//-------------------------------------------------------------
// Example 7️⃣ - map() returns new array

const nums = [1, 2, 3];
const doubledNums = nums.map((num) => num * 2);
console.log(doubledNums);
// Output: [2, 4, 6]

// ✅ Original array remains same
console.log(nums);
// Output: [1, 2, 3]

//-------------------------------------------------------------
// 🔷 Summary of map():

// ✅ Transforms each element.
// ✅ Returns a new array.
// ✅ Does not modify the original array.
// ✅ Often used for data transformation, UI rendering, and working with array of objects.

// 🔷 Rule of thumb:
// - Use map() when you want to transform data.
// - Use forEach() when you only want to loop & perform side-effects.

//-------------------------------------------------------------
