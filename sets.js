// ======================================================
// 🧠 SET IN JAVASCRIPT — COMPLETE NOTES
// ======================================================

/*
🔹 WHAT IS A SET?
A Set is a built-in JavaScript object that allows you to store UNIQUE values of any type — primitive or object reference.
It automatically removes duplicates and maintains the order of insertion.
*/

// ✅ Create a Set
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate - ignored
mySet.add("Hello");
mySet.add({ a: 10 });

console.log(mySet); // Set(3) { 1, 2, 'Hello', { a: 10 } }

// ======================================================
// 🔹 1️⃣ CREATING A SET
// ======================================================

// You can also create a Set directly from an array
const numbers = new Set([1, 2, 3, 3, 4, 5]);
console.log(numbers); // Set(5) { 1, 2, 3, 4, 5 }

// It removes duplicates automatically
const names = new Set(["Ravi", "Ravi", "John"]);
console.log(names); // Set(2) { 'Ravi', 'John' }

// ======================================================
// 🔹 2️⃣ ADDING & DELETING ELEMENTS
// ======================================================

const fruits = new Set();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Mango");

console.log(fruits.size); // 3

// Delete an element
fruits.delete("Banana");
console.log(fruits); // Set(2) { 'Apple', 'Mango' }

// Check if an element exists
console.log(fruits.has("Apple")); // true
console.log(fruits.has("Banana")); // false

// Remove all elements
fruits.clear();
console.log(fruits.size); // 0

// ======================================================
// 🔹 3️⃣ ITERATING OVER A SET
// ======================================================

const colors = new Set(["red", "green", "blue"]);

for (let color of colors) {
  console.log(color);
}
// Output: red green blue

// You can also use forEach
colors.forEach((value) => console.log(value));

// ======================================================
// 🔹 4️⃣ CONVERTING SET <-> ARRAY
// ======================================================

const set1 = new Set([1, 2, 3]);

// Convert Set to Array
const arr = [...set1];
console.log(arr); // [1, 2, 3]

// Or using Array.from()
const arr2 = Array.from(set1);
console.log(arr2); // [1, 2, 3]

// Convert Array to Set (remove duplicates)
const arr3 = [1, 2, 2, 3, 4, 4];
const uniqueSet = new Set(arr3);
console.log(uniqueSet); // Set(4) { 1, 2, 3, 4 }

// ======================================================
// 🔹 5️⃣ SET DOES NOT SUPPORT INDEX ACCESS
// ======================================================

// ❌ You cannot access elements by index like arrays
const letters = new Set(["A", "B", "C"]);
console.log(letters[0]); // undefined

// ======================================================
// 🔹 6️⃣ DIFFERENCE BETWEEN SET AND ARRAY
// ======================================================

/*
| Feature           | Array                 | Set                    |
|------------------ |---------------------- |------------------------ |
| Allows duplicates | ✅ Yes                | ❌ No                  |
| Order             | ✅ Maintains index    | ✅ Maintains insertion  |
| Access by index   | ✅ Yes (arr[0])       | ❌ No                  |
| Performance (search/delete) | Slower | Faster (uses hash internally) |
*/

// ======================================================
// 🔹 7️⃣ USE CASES OF SET
// ======================================================

// ✅ Remove duplicates from array
const numbersArr = [1, 2, 3, 3, 4, 5, 5];
const uniqueArr = [...new Set(numbersArr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]

// ✅ Check existence quickly
const ids = new Set([101, 102, 103]);
console.log(ids.has(102)); // true
console.log(ids.has(104)); // false

// ✅ Iterate unique elements
const words = ["apple", "banana", "apple"];
const uniqueWords = new Set(words);
for (let word of uniqueWords) console.log(word); // apple banana

// ======================================================
// 🔹 8️⃣ SET OPERATIONS (UNION, INTERSECTION, DIFFERENCE)
// ======================================================

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union → elements from both sets
const union = new Set([...setA, ...setB]);
console.log(union); // Set(5) { 1, 2, 3, 4, 5 }

// Intersection → common elements
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set(1) { 3 }

// Difference → elements in A but not in B
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // Set(2) { 1, 2 }

// ======================================================
// 🔹 9️⃣ WEAKSET (BONUS CONCEPT)
// ======================================================

/*
A WeakSet is similar to Set, but:
- It only stores OBJECTS (not primitives).
- The objects are held "weakly" — if no other reference exists, they can be garbage collected.
- Not iterable (no forEach, no size, etc.)
*/

const ws = new WeakSet();

const obj1 = { name: "Ravi" };
const obj2 = { name: "John" };

ws.add(obj1);
ws.add(obj2);
console.log(ws.has(obj1)); // true

// ws.delete(obj1); // removes obj1
// ws.clear(); ❌ not supported in WeakSet

// ======================================================
// 🔹 🔟 INTERVIEW QUESTIONS
// ======================================================

/*
1. What is a Set in JavaScript?
2. How is a Set different from an Array?
3. Can a Set store duplicate values?
4. How do you convert a Set to an Array?
5. What methods does Set provide? (add, delete, has, clear)
6. Is the order of elements in a Set guaranteed?
7. How to remove duplicates from an array using Set?
8. What are Union, Intersection, and Difference operations with Sets?
9. Can you access elements in a Set using index?
10. What is the difference between Set and WeakSet?
*/

// ======================================================
// 🔸 MEMORY CONCEPT
// ======================================================

/*
- A Set uses internal "hashing" to store values uniquely.
- Primitive values are stored directly.
- Objects are stored by reference.
- WeakSet does not prevent garbage collection (weak references).
*/

const refObj = { id: 1 };
const strongSet = new Set([refObj]);
refObj.id = 2; // affects the stored reference
console.log(strongSet); // Set(1) { { id: 2 } }
