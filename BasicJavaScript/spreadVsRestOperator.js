/*
-----------------------------------
REST OPERATOR (...) in JavaScript
-----------------------------------
1. Definition:
   - The rest operator collects multiple elements/arguments and packs them into an array/object.

2. Usage in Functions (Collects arguments into an array):
*/
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(10, 20, 30)); // Output: 60

/*
3. Usage in Destructuring (Remaining values into an array):
*/
const [first, ...restValues] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(restValues); // [2, 3, 4, 5]

/*
-----------------------------------
SPREAD OPERATOR (...) in JavaScript
-----------------------------------
1. Definition:
   - The spread operator expands (spreads) array/object elements into individual values.

2. Usage in Arrays:
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

/*
3. Usage in Objects:
*/
const obj1 = { name: "John" };
const obj2 = { age: 30 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { name: "John", age: 30 }

/*
4. Usage in Function Calls:
*/
function multiply(a, b, c) {
  return a * b * c;
}
const nums = [2, 3, 4];
console.log(multiply(...nums)); // 24

/*
-----------------------------------
DESTRUCTURING in JavaScript
-----------------------------------
1. Array Destructuring:
*/
const fruits = ["apple", "banana", "mango"];
const [fruit1, fruit2] = fruits;
console.log(fruit1); // apple
console.log(fruit2); // banana

/*
2. Array Destructuring with Default Values:
*/
const colors = ["red"];
const [primary, secondary = "blue"] = colors;
console.log(primary); // red
console.log(secondary); // blue

/*
3. Object Destructuring:
*/
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 25

/*
4. Object Destructuring with Renaming:
*/
const car = { brand: "Tesla", model: "Model S" };
const { brand: carBrand, model: carModel } = car;
console.log(carBrand); // Tesla
console.log(carModel); // Model S

/*
5. Nested Destructuring:
*/
const user = {
  id: 1,
  profile: { username: "coder", email: "coder@example.com" },
};
const {
  profile: { username, email },
} = user;
console.log(username); // coder
console.log(email); // coder@example.com

/*
-----------------------------------
KEY DIFFERENCE:
- REST: Packs values into an array/object.
- SPREAD: Spreads values out of an array/object.
-----------------------------------
*/
