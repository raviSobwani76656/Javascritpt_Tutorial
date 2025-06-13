/* FUNCTION REVISION SUMMARY */

// 1️⃣ Simple Function with Return
function addTwoNumbers(a, b) {
  return a + b;
}
console.log(addTwoNumbers(12, 432)); // Output: 444

// 2️⃣ Return Array
function getArray(arr) {
  return arr;
}
console.log(getArray([13, 3, 53, 5, 5, 3])); // Output: [13, 3, 53, 5, 5, 3]

// 3️⃣ Default Parameter
function getname(name = "Ravi") {
  return name;
}
console.log(getname()); // Output: Ravi

// 4️⃣ Function Inside Object (Method)
const a = {
  name: "ravi",
  age: 23,
  greet: function () {
    return `say hi to this ${this.name}`;
  },
};
function getObject(object) {
  return `say hi to the this guy ${object.greet()}`;
}
console.log(getObject(a));
// Output: say hi to the this guy say hi to this ravi

// 5️⃣ Function Returning Function (Higher Order Function)
function anotherFunction(func) {
  return function addtwoNumbers(a, b) {
    return a + b;
  };
}
const returned = anotherFunction();
console.log(returned(421, 58)); // Output: 479

// 6️⃣ Rest Operator (...num gathers multiple arguments)
function restOperator(...num) {
  return num;
}
console.log(restOperator(79, 2, 2, 3, 24, 2, 4, 2));
// Output: [79, 2, 2, 3, 24, 2, 4, 2]

// 7️⃣ Function with Condition Inside
function numbers(a, b) {
  if (!a || !b) {
    return "no a and b provided";
  }
  return a + b;
}
console.log(numbers(4, 8)); // Output: 12

/* 🔥 QUICK POINTS 🔥
- Use 'return' to give back value.
- Default parameters avoid undefined errors.
- Rest operator gathers multiple arguments.
- Functions can return other functions.
- Functions can live inside objects (methods).
- Conditionals inside functions handle missing input.
*/
