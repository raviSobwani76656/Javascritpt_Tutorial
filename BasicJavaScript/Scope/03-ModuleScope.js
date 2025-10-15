/************************************************************
 *                     MODULE SCOPE IN JAVASCRIPT          *
 *                     File: moduleSCOPE.js                *
 ************************************************************/

/*
  🧠 WHAT IS MODULE SCOPE?

  - Module scope is the **top-level scope inside an ES6 module**.
  - Each module has its **own independent scope**.
  - Variables declared at the top-level of a module:
      - Do NOT attach to the global object (e.g., window in browsers)
      - Are only accessible inside that module
  - Prevents conflicts between scripts by isolating variables.
*/

/************************************************************
 * 1. TOP-LEVEL VARIABLES IN MODULE SCOPE
 ************************************************************/

// var, let, const at top-level of a module
var moduleVar = "I am a var in module scope";
let moduleLet = "I am a let in module scope";
const moduleConst = "I am a const in module scope";

console.log("moduleVar:", moduleVar); // ✅ accessible
console.log("moduleLet:", moduleLet); // ✅ accessible
console.log("moduleConst:", moduleConst); // ✅ accessible

// In browser, top-level module variables are NOT attached to window
// console.log(window.moduleVar); // ❌ undefined
// console.log(window.moduleLet); // ❌ undefined
// console.log(window.moduleConst); // ❌ undefined

/************************************************************
 * 2. FUNCTION SCOPE INSIDE MODULE
 ************************************************************/

function moduleFunctionScope() {
  var funcVar = "function var";
  let funcLet = "function let";
  const funcConst = "function const";

  console.log("Inside function - funcVar:", funcVar);
  console.log("Inside function - funcLet:", funcLet);
  console.log("Inside function - funcConst:", funcConst);
}

moduleFunctionScope();

// Outside function
// console.log(funcVar); // ❌ ReferenceError
// console.log(funcLet); // ❌ ReferenceError
// console.log(funcConst); // ❌ ReferenceError

/************************************************************
 * 3. BLOCK SCOPE INSIDE MODULE
 ************************************************************/

if (true) {
  let blockLet = "block let";
  const blockConst = "block const";
  var blockVar = "block var";

  console.log("Inside block - blockVar:", blockVar);
  console.log("Inside block - blockLet:", blockLet);
  console.log("Inside block - blockConst:", blockConst);
}

// Outside block
console.log(
  "Outside block - blockVar (var is function/module scoped):",
  blockVar
); // ✅ accessible
// console.log(blockLet); // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError

/************************************************************
 * 4. IMPORT / EXPORT (MODULE USAGE)
 ************************************************************/

/*
  Modules can export variables, functions, or classes
  so they can be imported in another module.

  Example:

  // export.js
  export const pi = 3.14;
  export function sum(a, b) { return a + b; }

  // import.js
  import { pi, sum } from './export.js';
  console.log(pi); // 3.14
  console.log(sum(2, 3)); // 5
*/

/************************************************************
 * 5. SHADOWING IN MODULE SCOPE
 ************************************************************/

let value = 100;

function shadowExample() {
  let value = 200; // shadows outer module variable
  console.log("Shadowed value inside function:", value); // 200
}

shadowExample();
console.log("Module-level value:", value); // 100

/************************************************************
 * 6. SUMMARY
 ************************************************************/

/*
- Module scope isolates top-level variables to the module file.
- Top-level vars, lets, and consts do NOT pollute the global/window object.
- Functions and blocks inside modules behave the same as normal JS scoping rules.
- Modules can export/import variables and functions for code organization.
*/
