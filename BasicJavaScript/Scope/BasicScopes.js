/************************************************************
 *                  JAVASCRIPT SCOPES NOTES                 *
 ************************************************************/

/* 
  🧠 WHAT IS SCOPE?
  Scope determines where variables and functions are accessible in your code.
  Each scope acts like a boundary: some variables are visible only in certain areas.
*/

/************************************************************
 * 1. GLOBAL SCOPE
 ************************************************************/

/* 
  Definition: Variables declared outside of any function or block.
  Accessible anywhere in the program: inside functions, blocks, or other scripts.
  Global variables live until the program ends.
*/

var globalVar = "I am global"; // global scope

function checkGlobal() {
  console.log(globalVar); // ✅ accessible inside function
}

checkGlobal();
console.log(globalVar); // ✅ accessible globally

/************************************************************
 * 2. FUNCTION SCOPE
 ************************************************************/

/*
  Definition: Variables declared inside a function are accessible only within that function.
  Function scope applies to var, let, and const.
  Each function call creates a new scope.
*/

function functionScopeExample() {
  var functionVar = "I am local to function";
  let functionLet = "I am also local to function";
  const functionConst = "Me too!";
  console.log(functionVar, functionLet, functionConst); // ✅ accessible inside function
}

functionScopeExample();

// console.log(functionVar); // ❌ ReferenceError
// console.log(functionLet); // ❌ ReferenceError
// console.log(functionConst); // ❌ ReferenceError

/************************************************************
 * 3. BLOCK SCOPE
 ************************************************************/

/*
  Definition: Variables declared inside a block {} using let or const are accessible only inside that block.
  var does NOT respect block scope — it’s function-scoped.
*/

if (true) {
  var blockVar = "var ignores block scope";
  let blockLet = "let respects block scope";
  const blockConst = "const respects block scope";
  console.log(blockVar, blockLet, blockConst); // ✅ accessible inside block
}

console.log(blockVar); // ✅ var leaks outside block
// console.log(blockLet); // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError

for (let i = 0; i < 2; i++) {
  let loopLet = i;
  var loopVar = i;
  console.log("Inside loop:", loopLet, loopVar);
}

// console.log(loopLet); // ❌ ReferenceError
console.log("Outside loop, loopVar:", loopVar); // ✅ accessible

/************************************************************
 * 4. LOCAL SCOPE
 ************************************************************/

/*
  Definition: Any scope that is not global is local.
  Includes both function scope and block scope.
  Local variables are private to the function or block where they are declared.
*/

let globalNumber = 100; // global

function localScopeExample() {
  let functionLocal = 200; // function local

  if (true) {
    let blockLocal = 300; // block local
    console.log(globalNumber, functionLocal, blockLocal); // ✅ all accessible inside block
  }

  console.log(globalNumber, functionLocal); // ✅ blockLocal NOT accessible here
  // console.log(blockLocal); // ❌ ReferenceError
}

localScopeExample();

// console.log(functionLocal); // ❌ ReferenceError
// console.log(blockLocal); // ❌ ReferenceError

/************************************************************
 * 5. HOISTING & SHADOWING EXAMPLES
 ************************************************************/

/*
  Hoisting: var variables are "hoisted" to the top of their function and initialized as undefined.
  let and const are also hoisted but cannot be accessed before declaration (Temporal Dead Zone)
*/

function hoistingExample() {
  console.log(varHoist); // undefined
  // console.log(letHoist); // ❌ ReferenceError
  // console.log(constHoist); // ❌ ReferenceError

  var varHoist = "I am hoisted";
  let letHoist = "I am TDZ";
  const constHoist = "I am TDZ too";

  console.log(varHoist, letHoist, constHoist); // ✅ accessible after declaration
}

hoistingExample();

/*
  Shadowing: A local variable can "shadow" a variable from an outer scope
*/

let shadow = "global shadow";

function shadowExample() {
  let shadow = "local shadow"; // shadows global variable
  console.log(shadow); // ✅ local shadow
}

shadowExample();
console.log(shadow); // ✅ global shadow

/************************************************************
 * 6. SCOPE CHAIN EXAMPLE
 ************************************************************/

/*
  JS searches for variables in the following order:
  1. Local scope
  2. Outer function scopes
  3. Global scope
  4. ReferenceError if not found
*/

let a = 1;

function outer() {
  let b = 2;

  function inner() {
    let c = 3;
    console.log(a, b, c); // ✅ 1 2 3
  }

  inner();
}

outer();

/************************************************************
 * ✅ SUMMARY
 ************************************************************/

/*
Global Scope: Accessible anywhere, declared outside functions or blocks
Function Scope: Accessible only inside the function
Block Scope: Accessible only inside {} (let/const)
Local Scope: Any non-global scope (function + block)
Hoisting: var is hoisted, let/const are hoisted but in TDZ
Shadowing: Local variables can hide outer/global variables
Scope Chain: JS looks up the chain to resolve variables
*/
