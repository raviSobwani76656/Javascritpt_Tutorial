/************************************************************
 *                      JAVASCRIPT SHADOWING NOTES          *
 ************************************************************/

/*
  🧠 WHAT IS SHADOWING?
  Shadowing occurs when a variable declared in an inner scope
  (function or block) has the same name as a variable in an outer scope.
  The inner variable "shadows" the outer one inside the inner scope.
*/

/************************************************************
 * RULES OF SHADOWING
 ************************************************************/

/*
1. Local variables shadow outer/global variables inside their scope.
2. Shadowing works for all variable types: var, let, const.
3. Function parameters can also shadow outer variables.
4. Block-scoped variables (let/const) can shadow function or global variables.
5. Shadowing does not delete or modify the outer variable — it’s just hidden temporarily.
*/

/************************************************************
 * EXAMPLES OF SHADOWING
 ************************************************************/

// 🔹 Example 1 — Function Scope Shadowing
let name = "Global";

function greet() {
  let name = "Local"; // shadows the global 'name'
  console.log("Function scope shadowing:", name); // Local
}

greet();
console.log("Global variable:", name); // Global

// 🔹 Example 2 — Block Scope Shadowing
let x = 10;

if (true) {
  let x = 20; // shadows global x inside this block
  console.log("Block scope shadowing:", x); // 20
}

console.log("Global x after block:", x); // 10

// 🔹 Example 3 — Shadowing with var
var y = 5;

function testVarShadow() {
  var y = 50; // shadows global y inside the function
  console.log("Function var shadowing:", y); // 50
}

testVarShadow();
console.log("Global y after function:", y); // 5

// 🔹 Example 4 — Function Parameters Shadowing
let value = 100;

function printValue(value) {
  // parameter shadows outer 'value'
  console.log("Parameter shadowing:", value); // 200
}

printValue(200);
console.log("Outer value after function:", value); // 100

// 🔹 Example 5 — Nested Scope Shadowing
let a = 1;

function outer() {
  let a = 2; // shadows global 'a'

  function inner() {
    let a = 3; // shadows outer 'a'
    console.log("Inner nested shadowing:", a); // 3
  }

  inner();
  console.log("Outer function a:", a); // 2
}

outer();
console.log("Global a:", a); // 1

/************************************************************
 * KEY POINTS ABOUT SHADOWING
 ************************************************************/

/*
- Shadowed variable is hidden only in the inner scope.
- Shadowing works with var, let, const, and function parameters.
- Block-scoped variables (let/const) can shadow outer variables.
- var inside a block does NOT create block-level shadowing (function-scoped instead).
- Hoisting applies separately to shadowed variables in their own scope.
*/

/************************************************************
 * COMMON PITFALLS
 ************************************************************/

// ❌ Unintended shadowing
let user = "Alice";

function greetUser() {
  let user = "Bob"; // may be accidental shadowing
  console.log("Shadowed user:", user); // Bob
}

greetUser();
console.log("Global user:", user); // Alice

// ❌ Using var inside block can overwrite outer variable
var z = 10;

if (true) {
  var z = 20; // overwrites outer z (not proper shadowing)
  console.log("Var inside block:", z); // 20
}

console.log("Global z after block:", z); // 20

/************************************************************
 * ✅ SUMMARY
 ************************************************************/

/*
- Shadowing happens when inner scope variable has the same name as outer scope.
- Inner scope always takes priority when resolving variables.
- Outer variable remains unchanged outside the inner scope.

