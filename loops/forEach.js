// -------------------------------------
// JavaScript forEach() - Complete Deep Dive
// -------------------------------------

// 1️⃣ forEach on Array (Basic Example)

const arr = [2, 4, 5];

arr.forEach((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Full Array:", array);
});

// Output:
// Element: 2
// Index: 0
// Full Array: [2, 4, 5]
// Element: 4
// Index: 1
// Full Array: [2, 4, 5]
// Element: 5
// Index: 2
// Full Array: [2, 4, 5]

// 2️⃣ forEach on Array of Objects

const arr1 = [
  { language: "python", filename: "py" },
  { language: "javascript", filename: "js" },
  { language: "ed", filename: "edd" },
];

arr1.forEach((item) => {
  console.log("Language:", item.language);
});

// Output:
// Language: python
// Language: javascript
// Language: ed

// 3️⃣ forEach on Set

const mySet = new Set([
  23, 3, 6, 34, 43, 53, 5, 6, 4, 434, 5, 345, 345, 345, 34,
]);

mySet.forEach((value, item) => {
  console.log("Item:", item, "Value:", value);
});

// Note: In Set, value === item
// Output:
// Item: 23 Value: 23
// Item: 3 Value: 3
// Item: 6 Value: 6
// (duplicates automatically removed)

// 4️⃣ forEach on Map

const myMap = new Map([
  ['name', 'Ravi'],
  ['language', 'JavaScript'],
  ['year', 2025]
]);

myMap.forEach((value, key) => {
  console.log("Key:", key, "Value:", value);
});

// Output:
// Key: name Value: Ravi
// Key: language Value: JavaScript
// Key: year Value: 2025

// 5️⃣ Using thisArg (2nd argument of forEach)

const numbers = [1, 2, 3, 4];
const multiplierObj = { multiplier: 3 };

numbers.forEach(function (num) {
  console.log(num * this.multiplier);
}, multiplierObj);

// Output:
// 3
// 6
// 9
// 12

// 6️⃣ Sparse array behavior (forEach skips holes)

const sparseArr = [1, , 3, undefined];
sparseArr.forEach((element, index) => {
  console.log("Index:", index, "Value:", element);
});

// Output:
// Index: 0 Value: 1
// Index: 2 Value: 3
// Index: 3 Value: undefined
// (hole at index 1 is skipped)

// 7️⃣ Common async mistake (forEach doesn't handle async/await properly)

const asyncArray = [1, 2, 3];
asyncArray.forEach(async (num) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Delayed:", num);
});

// This won't wait correctly; all delayed logs will happen together after ~1s.
// Use for...of loop instead for proper async behavior.

// 8️⃣ Correct way for async with for...of:

async function asyncLoop() {
  for (const num of asyncArray) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Properly Delayed:", num);
  }
}
asyncLoop();

// 9️⃣ Extra Real World Example (Sum of Array using forEach)

let sum = 0;
const numArr = [10, 20, 30, 40];

numArr.forEach((num) => {
  sum += num;
});
console.log("Sum of numbers:", sum);

// Output: Sum of numbers: 100

// 🔥 Summary of forEach() Differences 🔥

// For Array -> callback(element, index, array)
// For Set   -> callback(value, value, set)
// For Map   -> callback(value, key, map)

// ✅ forEach always returns undefined
// ✅ You cannot break out of forEach
// ✅ Always visits every present element
// ✅ Skips empty slots in arrays
// ✅ Allows optional thisArg for context binding

// 🔥 Remember: Use forEach when you just want to iterate.
// 🔥 Use map/filter/reduce when you want to transform data.
// 🔥 Use for...of for async loops.
