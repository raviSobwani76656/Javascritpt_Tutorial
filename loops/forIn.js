// ----------------------------
// for...in loop in JavaScript
// ----------------------------

// Definition:
// The `for...in` loop iterates over the enumerable properties (keys) of an object.
// It gives you the property name (key) each time, NOT the value directly.

// Syntax:
// for (let key in object) {
//   // code to execute for each property
// }

// Example with an object:
const person = {
  name: "Ravi",
  age: 25,
  country: "India",
};

for (let key in person) {
  console.log(key); // Prints keys: name, age, country
  console.log(person[key]); // Prints values: Ravi, 25, India
}

// Example with an array:
// `for...in` on arrays will give the indexes as strings
const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index); // Prints: 0, 1, 2 (indexes)
  console.log(colors[index]); // Prints: red, green, blue
}

// ----------------------------
// Important Notes:
// ----------------------------
// 1. for...in is best used for objects, NOT arrays (for arrays, use for...of or normal for loop).
// 2. The order of iteration is not guaranteed for objects.
// 3. It iterates over all enumerable properties, including inherited ones unless filtered using hasOwnProperty().
// 4. Avoid using for...in when array order matters.
