/*
===========================
JavaScript bind() Method Notes
===========================

1. What is bind()?
- Creates a new function with 'this' fixed to a given object.
- Allows presetting initial arguments.
- Does NOT execute the function immediately.

2. Syntax:
   func.bind(thisArg, arg1, arg2, ...);

3. Why use bind()?
- To fix 'this' in callbacks or event handlers.
- To preset some arguments (partial application).
- To borrow methods from other objects.

4. Important:
- Returns a new function.
- Original function stays unchanged.
- Bound 'this' can't be changed later.
- Useful in asynchronous code to preserve context.

*/

// Example 1: Binding 'this'
const person = {
  name: "Alice",
  greet: function (greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
  },
};

const greetFn = person.greet;
greetFn("Hello"); // ❌ this lost, prints: Hello, I'm undefined

const boundGreet = person.greet.bind(person);
boundGreet("Hello"); // ✅ prints: Hello, I'm Alice

// Example 2: Partial application (preset arguments)
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10

// Example 3: Using bind() in event handlers
function Button(name) {
  this.name = name;
  this.click = function () {
    console.log(`Button ${this.name} clicked`);
  };
}

const btn = new Button("Submit");

// Without bind, this inside click points to the HTML element
// document.getElementById("btn").addEventListener("click", btn.click);

// With bind, 'this' inside click points to btn object
// document.getElementById("btn").addEventListener("click", btn.click.bind(btn));

// Example 4: Your function with preset argument and bound this
function greetingUser(greeting) {
  console.log(`${this.name} ${greeting}`);
}

const obj = { name: "Ravi" };

const greetingUserInfo = greetingUser.bind(obj, "Hello");

greetingUserInfo(); // Output: Ravi Hello
