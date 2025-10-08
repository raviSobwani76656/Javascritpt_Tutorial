/* 
=========================================
        📘 JAVASCRIPT Array.findIndex() 
=========================================

👉 Definition:
The `findIndex()` method returns the **index of the first element** in an array 
that satisfies a provided testing function (callback). 
If no element satisfies the condition, it returns **-1**.

-----------------------------------------
*/

/* 
=========================================
1️⃣ SYNTAX
=========================================

array.findIndex(callback(element, index, array), thisArg);

Parameters:
- callback: Function to test each element.
  - element → Current element being processed
  - index → Index of current element
  - array → The array findIndex was called upon
- thisArg (optional): Value to use as `this` inside the callback
*/

/* 
=========================================
2️⃣ RETURN VALUE
=========================================
- Returns **index of the first element** that passes the test.
- Returns **-1** if no element passes.
*/

/* 
=========================================
3️⃣ BASIC EXAMPLES
=========================================
*/

// Example 1: Find first element greater than 10
const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex((num) => num > 10);
console.log(index); // ✅ 1  (12 is the first > 10)

// Example 2: No element satisfies condition
const letters = ["a", "b", "c"];
const result = letters.findIndex((letter) => letter === "z");
console.log(result); // ✅ -1

/* 
=========================================
4️⃣ USING INDEX AND ARRAY IN CALLBACK
=========================================
*/

const arr = [10, 20, 30, 40];
const idx = arr.findIndex((value, index, array) => {
  console.log(value, index, array); // logs each element, index, array
  return value === 30;
});
console.log(idx); // ✅ 2

/* 
=========================================
5️⃣ FINDINDEX WITH OBJECT ARRAYS
=========================================
*/

const users = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "Sita" },
  { id: 3, name: "John" },
];

// Find index of user with id = 2
const userIndex = users.findIndex((user) => user.id === 2);
console.log(userIndex); // ✅ 1

/* 
=========================================
6️⃣ CASE SENSITIVITY
=========================================
- Strings comparison in `findIndex()` is **case-sensitive**.
*/

const names = ["Ravi", "Sita", "John"];
const idxName = names.findIndex((name) => name === "ravi");
console.log(idxName); // ✅ -1 (case mismatch)

/* 
=========================================
7️⃣ DIFFERENCE BETWEEN find() AND findIndex()
=========================================
- find() → returns the **element itself** that satisfies the condition
- findIndex() → returns the **index** of the element
*/

const nums = [5, 12, 8, 130, 44];
console.log(nums.find((num) => num > 10)); // ✅ 12
console.log(nums.findIndex((num) => num > 10)); // ✅ 1

/* 
=========================================
8️⃣ BEST PRACTICES
=========================================
1. Use `findIndex()` when you need the **index**, not the value.
2. Works with **arrays of objects**, very useful for searching by property.
3. Always handle `-1` return value when no element matches.
4. For older browsers, you may need a **polyfill** (ES6 feature).
-----------------------------------------
*/
