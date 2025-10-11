/*
===============================================
🧩 JavaScript — Common Array & String Methods
===============================================

------------------------------------------------
1️⃣ slice()
------------------------------------------------
🔹 Extracts a portion of an array or string and returns it as a new array/string.
🔹 Does NOT modify the original.

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); // [2, 3, 4]

------------------------------------------------
2️⃣ splice()
------------------------------------------------
🔹 Adds, removes, or replaces elements in an array.
🔹 Modifies the original array.

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 99, 100); // Remove 2 items and insert 99, 100
console.log(arr); // [1, 2, 99, 100, 5]

------------------------------------------------
3️⃣ concat()
------------------------------------------------
🔹 Combines two or more arrays or strings into one.
🔹 Does NOT modify the originals.

const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]

------------------------------------------------
4️⃣ join()
------------------------------------------------
🔹 Joins all array elements into a single string.
🔹 Takes a separator as an argument.

const fruits = ["apple", "banana", "mango"];
console.log(fruits.join(", ")); // "apple, banana, mango"

------------------------------------------------
5️⃣ indexOf() / lastIndexOf()
------------------------------------------------
🔹 Returns the index of the first (or last) occurrence of an element.

const nums = [10, 20, 30, 20];
console.log(nums.indexOf(20));     // 1
console.log(nums.lastIndexOf(20)); // 3

------------------------------------------------
6️⃣ includes()
------------------------------------------------
🔹 Checks if an element exists in an array or substring exists in a string.
🔹 Returns true or false.

const names = ["John", "Sam", "Amy"];
console.log(names.includes("Sam")); // true

------------------------------------------------
7️⃣ forEach()
------------------------------------------------
🔹 Executes a provided function once for each element in an array.

const arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2)); // 2, 4, 6

------------------------------------------------
8️⃣ map()
------------------------------------------------
🔹 Creates a new array with the results of calling a function on every element.

const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

------------------------------------------------
9️⃣ filter()
------------------------------------------------
🔹 Creates a new array with elements that pass a test.

const arr = [1, 2, 3, 4, 5];
const even = arr.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

------------------------------------------------
🔟 reduce()
------------------------------------------------
🔹 Reduces array to a single value by executing a reducer function.

const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10

------------------------------------------------
11️⃣ find() / findIndex()
------------------------------------------------
🔹 find() returns the first element that satisfies a condition.
🔹 findIndex() returns the index of that element.

const arr = [5, 12, 8, 130, 44];
console.log(arr.find(num => num > 10)); // 12
console.log(arr.findIndex(num => num > 10)); // 1

------------------------------------------------
12️⃣ sort()
------------------------------------------------
🔹 Sorts array elements (by default as strings).

const nums = [40, 1, 5, 200];
console.log(nums.sort()); // [1, 200, 40, 5] ❌ (lexical)
console.log(nums.sort((a, b) => a - b)); // [1, 5, 40, 200] ✅ (numeric)

------------------------------------------------
13️⃣ reverse()
------------------------------------------------
🔹 Reverses the order of elements in the array.

const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

------------------------------------------------
14️⃣ push() / pop()
------------------------------------------------
🔹 push(): Adds an element to the end.
🔹 pop(): Removes the last element.

const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop();   // [1, 2, 3]

------------------------------------------------
15️⃣ shift() / unshift()
------------------------------------------------
🔹 shift(): Removes the first element.
🔹 unshift(): Adds elements at the start.

const arr = [1, 2, 3];
arr.shift();      // [2, 3]
arr.unshift(0);   // [0, 2, 3]

------------------------------------------------
16️⃣ toString()
------------------------------------------------
🔹 Converts an array to a string (comma-separated).

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

------------------------------------------------
17️⃣ flat()
------------------------------------------------
🔹 Flattens nested arrays into a single array.

const arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // [1, 2, 3, 4]

------------------------------------------------
18️⃣ Array.isArray()
------------------------------------------------
🔹 Checks if a variable is an array.

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false

------------------------------------------------
19️⃣ String-specific methods:
------------------------------------------------
const text = "JavaScript";

// length
console.log(text.length); // 10

// toUpperCase() / toLowerCase()
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"

// includes()
console.log(text.includes("Script")); // true

// substring(start, end)
console.log(text.substring(0, 4)); // "Java"

// replace()
console.log(text.replace("Java", "Type")); // "TypeScript"

// split()
console.log(text.split("")); // ["J","a","v","a","S","c","r","i","p","t"]

// trim()
const str = "   Hello World   ";
console.log(str.trim()); // "Hello World"

------------------------------------------------
📎 Summary:
------------------------------------------------
✅ slice() → Copy/extract
✅ splice() → Add/remove/replace
✅ map(), filter(), reduce() → Functional array ops
✅ forEach() → Looping
✅ concat(), join(), flat() → Combining arrays
✅ indexOf(), includes() → Searching
✅ push(), pop(), shift(), unshift() → Stack/queue behavior

===============================================
*/
