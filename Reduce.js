// ---------------------------
// 🔥 REDUCE() - FULL REVISION
// ---------------------------

// 🔷 What is reduce()?
// reduce() is used to reduce the array into a single value.
// It executes a reducer function on each element of the array, resulting in a single output value.

// 🔷 Syntax:
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// accumulator: The value returned from the previous iteration
// currentValue: The current element being processed
// initialValue: Optional. Value to use as first accumulator value

//-------------------------------------------------------------
// Example 1️⃣ - Simple sum

const arr = [34, 35];

const result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(result); // Output: 69

//-------------------------------------------------------------
// Example 2️⃣ - Multiplying all elements

const arr1 = [2, 2, 8];

const result2 = arr1.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});

console.log(result2); // Output: 32

//-------------------------------------------------------------
// Example 3️⃣ - Summing elements without storing in variable

const arr3 = [3, 5, 3, 53, 5, 3];

const result3 = arr3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(result3); // Output: 72

//-------------------------------------------------------------
// Example 4️⃣ - Flattening array using concat

const arr2 = [2, 5, 3, 35, [3, 53, 3, 55]];

const result5 = arr2.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(result5);
// Output: [2, 5, 3, 35, 3, 53, 3, 55]

// 🔷 Note: concat() flattens only 1 level of nested arrays.
// If you need to flatten deeply nested arrays, recursion or flat() method is required.

//-------------------------------------------------------------
// Example 5️⃣ - Finding maximum value

const arr4 = [3, 5, 99, 2, 100, 35];

const max = arr4.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator;
}, arr4[0]);

console.log(max); // Output: 100

//-------------------------------------------------------------
// Example 6️⃣ - Flatten nested array completely with reduce + recursion

const deeplyNested = [1, [2, [3, [4, 5]]]];

function deepFlatten(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return Array.isArray(currentValue)
      ? accumulator.concat(deepFlatten(currentValue))
      : accumulator.concat(currentValue);
  }, []);
}

console.log(deepFlatten(deeplyNested));
// Output: [1, 2, 3, 4, 5]

//-------------------------------------------------------------
// 🔷 Summary - When to use reduce:

// ✅ To sum values
// ✅ To multiply values
// ✅ To flatten arrays
// ✅ To find max/min
// ✅ To convert array into object/map
// ✅ To do anything where you want one final value from many

//-------------------------------------------------------------
// 🔷 Mental Model of reduce:

// Start with initialValue
// Loop through array
// At each step: accumulator = function(accumulator, currentValue)

//-------------------------------------------------------------

