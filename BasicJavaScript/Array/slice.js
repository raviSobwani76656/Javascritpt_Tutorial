/*
===============================================
🧩 JavaScript — slice() Method (Array & String)
===============================================

🔹 Definition:
The slice() method returns a shallow copy of a portion of an array or string into a new array or string object, 
without modifying the original one.

-----------------------------------------------
🧠 Syntax:
-----------------------------------------------
Array:  array.slice(start, end)
String: string.slice(start, end)

✅ start → The index to begin extraction (inclusive)
✅ end   → The index to stop extraction (exclusive)
         If omitted, slice extracts till the end.

⚠️ Both start and end can be negative (counting from the end).

-----------------------------------------------
📘 Array Examples:
-----------------------------------------------
const fruits = ["apple", "banana", "mango", "orange", "grape"];

// 1️⃣ Extract part of array
const result = fruits.slice(1, 4);
console.log(result); // ["banana", "mango", "orange"]

// 2️⃣ Omitting 'end'
const result2 = fruits.slice(2);
console.log(result2); // ["mango", "orange", "grape"]

// 3️⃣ Using negative indexes
const result3 = fruits.slice(-3, -1);
console.log(result3); // ["mango", "orange"]

// 4️⃣ Copy entire array
const copy = fruits.slice();
console.log(copy); // ["apple", "banana", "mango", "orange", "grape"]

-----------------------------------------------
📘 String Examples:
-----------------------------------------------
const text = "JavaScript";

console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(4));      // "Script"
console.log(text.slice(-6));     // "Script"
console.log(text.slice(-6, -3)); // "Scr"

-----------------------------------------------
⚙️ Key Points:
-----------------------------------------------
🔸 Does NOT modify the original array or string.
🔸 Returns a new array/string.
🔸 Commonly used for:
    - Copying arrays
    - Pagination
    - Extracting subarrays or substrings
🔸 Returns a shallow copy (nested objects are not cloned).

-----------------------------------------------
⚖️ slice() vs splice():
-----------------------------------------------
| Feature              | slice()                  | splice()                |
|----------------------|--------------------------|--------------------------|
| Purpose              | Extracts a portion        | Adds/removes elements    |
| Returns              | New array                 | Removed elements         |
| Modifies original?   | ❌ No                     | ✅ Yes                   |

const arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);   // [2, 3]  → original array unchanged
arr.splice(1, 3);  // [2, 3, 4] → original array becomes [1, 5]

-----------------------------------------------
📎 Summary:
-----------------------------------------------
- slice() creates a copy or subset.
- It’s non-destructive.
- Works on arrays and strings.
- Perfect for shallow copying and sub-selections.

===============================================
*/
