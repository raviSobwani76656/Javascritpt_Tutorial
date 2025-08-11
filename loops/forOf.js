/*
----------------------------------------
 for...of Loop in JavaScript
----------------------------------------
- Iterates over the VALUES of an iterable (Array, String, Map, Set, etc.)
- Returns the actual value, NOT the index/key
- Works only on iterables (not plain objects unless converted)
----------------------------------------
Syntax:
for (let variable of iterable) {
    // code to execute
}
----------------------------------------
Examples:
*/

// Example 1: Iterating over an array
const fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Mango

// Example 2: Iterating over a string
const name = "Ravi";
for (let char of name) {
  console.log(char);
}
// Output:
// R
// a
// v
// i

// Example 3: Getting index & value using entries()
const names = ["Ravi", "Batman", "Catwoman"];
for (let [index, value] of names.entries()) {
  console.log(index, value);
}
// Output:
// 0 Ravi
// 1 Batman
// 2 Catwoman

/*
✅ Use when:
- You want values directly from an iterable
- Cleaner & simpler than traditional for loop

❌ Avoid when:
- You want to iterate over object keys (use for...in instead)
*/
