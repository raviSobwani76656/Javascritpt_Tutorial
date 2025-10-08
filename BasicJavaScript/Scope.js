/* 
=========================================
        📘 JAVASCRIPT SCOPE NOTES
=========================================

👉 Definition:
Scope defines where variables, functions, and objects are accessible in your code.
It determines the visibility and lifetime of variables.

JavaScript has three main types of scope:
1️⃣ Global Scope
2️⃣ Function Scope
3️⃣ Block Scope
Plus the concept of Lexical Scope (Closures).
-----------------------------------------
*/

/* 
=========================================
1️⃣ GLOBAL SCOPE
=========================================
- Variables declared outside any function or block.
- Accessible anywhere in the code.
- Added to the 'window' object in browsers.
*/

var globalVar = "I am Global";

function showGlobal() {
  console.log(globalVar); // ✅ accessible
}

showGlobal();
console.log(globalVar); // ✅ accessible globally

/* 
=========================================
2️⃣ FUNCTION SCOPE (LOCAL SCOPE)
=========================================
- Variables declared inside a function are local to that function.
- They cannot be accessed outside the function.
*/

function greet() {
  var message = "Hello from function";
  console.log(message); // ✅ accessible here
}

greet();
// console.log(message); // ❌ ReferenceError: message is not defined

/* 
=========================================
3️⃣ BLOCK SCOPE
=========================================
- Introduced in ES6 with 'let' and 'const'.
- Variables declared inside {} (curly braces) are only accessible inside that block.
- 'var' is NOT block-scoped — it leaks outside.
*/

{
  var city = "Delhi"; // function/global scoped
  let state = "UP"; // block-scoped
  const country = "India"; // block-scoped
}

console.log(city); // ✅ accessible (var is not block-scoped)
// console.log(state);   // ❌ ReferenceError
// console.log(country); // ❌ ReferenceError

/* 
=========================================
4️⃣ LEXICAL SCOPE (STATIC SCOPE)
=========================================
- Inner functions can access variables from their outer (parent) functions.
- The scope chain is determined at compile time.
- Foundation of closures.
*/

function outer() {
  let fruit = "Apple";

  function inner() {
    console.log(fruit); // ✅ accessible due to lexical scope
  }

  inner();
}

outer();

/* 
=========================================
5️⃣ SCOPE CHAIN
=========================================
When JS tries to access a variable, it checks in this order:
1. Local scope
2. Outer scope
3. Global scope
If not found → ReferenceError.
*/

let a = 10;

function outerFunc() {
  let b = 20;

  function innerFunc() {
    let c = 30;
    console.log(a + b + c); // ✅ accessible via scope chain
  }

  innerFunc();
}

outerFunc();

/* 
=========================================
6️⃣ var, let, const - SCOPING DIFFERENCES
=========================================
| Keyword | Scope Type   | Hoisted | Reassignable | Redeclarable |
|----------|--------------|----------|---------------|--------------|
| var      | Function     | ✅ Yes   | ✅ Yes        | ✅ Yes       |
| let      | Block        | ✅ (TDZ) | ✅ Yes        | ❌ No        |
| const    | Block        | ✅ (TDZ) | ❌ No         | ❌ No        |
*/

function compareScopes() {
  console.log(aVar); // ✅ undefined (hoisted)
  // console.log(aLet); // ❌ ReferenceError (TDZ)
  // console.log(aConst); // ❌ ReferenceError (TDZ)

  var aVar = 1;
  let aLet = 2;
  const aConst = 3;
}

compareScopes();

/* 
=========================================
7️⃣ TEMPORAL DEAD ZONE (TDZ)
=========================================
- 'let' and 'const' are hoisted but uninitialized until the code reaches their declaration.
- Accessing them before declaration causes ReferenceError.
*/

function demoTDZ() {
  // console.log(num); // ❌ ReferenceError (in TDZ)
  let num = 10;
  console.log(num); // ✅ 10
}

demoTDZ();

/* 
=========================================
8️⃣ var INSIDE BLOCK {}
=========================================
- 'var' is NOT block-scoped.
- It gets hoisted to the nearest function scope or global scope.
*/

{
  var lang = "JavaScript";
  let framework = "React";
}

console.log(lang); // ✅ accessible
// console.log(framework); // ❌ ReferenceError

/* 
=========================================
9️⃣ NESTED SCOPE EXAMPLE
=========================================
*/

let x = 1;

function first() {
  let y = 2;

  function second() {
    let z = 3;
    console.log(x, y, z); // 1, 2, 3
  }

  second();
}

first();

/* 
=========================================
🔟 SUMMARY
=========================================
| Scope Type | Accessibility | Created By | Example |
|-------------|---------------|-------------|----------|
| Global      | Anywhere       | Script or module | var a = 10 |
| Function    | Inside function| function | function test(){ let y=5; } |
| Block       | Inside {}      | let, const | if(true){ let z=3; } |
| Lexical     | Nested access  | Inner function | Closure Example |

⚠️ Always prefer 'let' and 'const' over 'var' to avoid scope leakage.
-----------------------------------------
*/
