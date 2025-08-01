// ========================================
// Filter() + Boolean() Full Revision Notes
// ========================================

// --------- Basic filter() usage ---------

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// --------- Filter() with full parameters ---------

const arr = [10, 20, 30, 40];

const filtered = arr.filter((element, index, array) => {
  console.log("Element:", element, "Index:", index, "Array:", array);
  return element > 15;
});

console.log(filtered); // Output: [20, 30, 40]

// --------- Filter() with objects ---------

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
];

const adults = users.filter((user) => user.age >= 30);
console.log(adults);
// Output: [{ name: 'Jane', age: 30 }, { name: 'Bob', age: 40 }]

// --------- Filter() with strings ---------

const words = ["apple", "banana", "cherry", "date"];

const filteredWords = words.filter((word) => word.includes("a"));
console.log(filteredWords); // Output: ['apple', 'banana', 'date']

// --------- Chaining filter() with map() ---------

const nums = [1, 2, 3, 4, 5, 6];

const result = nums.filter((num) => num % 2 === 0).map((num) => num * 10);

console.log(result); // Output: [20, 40, 60]

// ==========================================
// Boolean() usage inside filter()
// ==========================================

// --------- The famous filter(Boolean) trick ---------

const mixed = [0, 1, false, 2, "", 3, null, undefined, 4];

const filteredMixed = mixed.filter(Boolean);
console.log(filteredMixed); // Output: [1, 2, 3, 4]

// --------- Why it works ---------

// Boolean(value) converts value to true or false based on truthiness

// Table of results:
// 0           => false
// 1           => true
// false       => false
// 2           => true
// '' (empty)  => false
// 3           => true
// null        => false
// undefined   => false
// 4           => true

// Final output: [1, 2, 3, 4]

// --------- Another real-world example ---------

const names = ["Ravi", "", null, "John", undefined, "Alex", false];

const cleanedNames = names.filter(Boolean);
console.log(cleanedNames); // Output: ["Ravi", "John", "Alex"]

// --------- Short explanation ---------
// filter(Boolean) is equivalent to:
// filter(value => Boolean(value))
// or:
// filter(value => !!value)

// --------- Boolean() shortcut ---------
// You can also use double NOT (!!value) if you want:
console.log(!!"hello"); // true
console.log(!!""); // false
console.log(!!123); // true
console.log(!!null); // false

// ==========================================
// Summary:
// - filter(Boolean) removes falsy values.
// - Works for: 0, false, '', null, undefined, NaN.
// - Be careful if falsy values like 0 or false are valid data.
// ==========================================
