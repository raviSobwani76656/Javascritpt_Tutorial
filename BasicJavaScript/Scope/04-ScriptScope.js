/************************************************************
 *                    JAVASCRIPT SCRIPT SCOPE NOTES        *
 ************************************************************/

/*
  🧠 WHAT IS SCRIPT SCOPE?

  Script scope refers to the scope created by a **single JavaScript file** or a **<script> tag**.

  - Variables declared at the **top-level of a script** have script scope.
  - They are accessible **anywhere inside that script**.
  - In non-module scripts, top-level `var` attaches to the global object (`window` in browsers).
  - In ES6 modules (type="module"), top-level variables do NOT become global.
*/

/************************************************************
 * 1. NON-MODULE SCRIPT SCOPE
 ************************************************************/

/*
  Top-level variables in a normal script tag:
  - var → script-scoped (also attached to global object)
  - let / const → block/script-scoped, NOT attached to global
*/

console.log("=== Non-module script scope example ===");

var globalVar = 10; // script-scoped, attaches to window in browsers
let blockLet = 20; // script-block scoped
const blockConst = 30; // script-block scoped

console.log("var (global/script scope):", globalVar); // 10
console.log("let (script/block scope):", blockLet); // 20
console.log("const (script/block scope):", blockConst); // 30

// In a browser, window.globalVar exists
// console.log(window.globalVar); // ✅ 10
// console.log(window.blockLet);  // ❌ undefined
// console.log(window.blockConst);// ❌ undefined

/************************************************************
 * 2. MODULE SCRIPT SCOPE
 ************************************************************/

/*
  Top-level variables in a module script:
  - Each module has its **own scope**
  - Variables are **not attached to global object**
  - Prevents variable collisions between scripts
*/

console.log("=== Module script scope example ===");

// Simulate module scope (in actual HTML use <script type="module">)
(function moduleScope() {
  var x = 100;
  let y = 200;
  const z = 300;

  console.log("var in module scope:", x); // 100
  console.log("let in module scope:", y); // 200
  console.log("const in module scope:", z); // 300
})();

// Outside module scope
// console.log(x); // ❌ ReferenceError
// console.log(y); // ❌ ReferenceError
// console.log(z); // ❌ ReferenceError

/************************************************************
 * 3. DIFFERENCE BETWEEN SCRIPT SCOPE AND GLOBAL SCOPE
 ************************************************************/

/*
| Feature                | Global Scope         | Script Scope                     |
|------------------------|--------------------|---------------------------------|
| Where declared          | Top-level var/let/const | Top-level inside a script        |
| Accessible outside script | ✅ Yes (window/global) | ❌ No (only inside that script)  |
| Attached to window       | var → yes, let/const → no | var → yes (non-module), no (module) |
| Modules                 | Same as global scope | Module script has isolated scope |
*/

/************************************************************
 * 4. MULTIPLE SCRIPTS EXAMPLE
 ************************************************************/

console.log("=== Multiple scripts example ===");

// Imagine these are different <script> tags in HTML
(function script1() {
  var a = 10; // top-level var in script1
  console.log("Script1 a:", a);
})();

(function script2() {
  // Accessing a from script1
  // console.log(a); // ❌ ReferenceError (script1 scope is isolated)
})();

/************************************************************
 * 5. SUMMARY
 ************************************************************/

/*
- Script scope = scope of variables at the top-level of a JS file or script tag
- Non-module scripts: var attaches to window, let/const do not
- Module scripts: all top-level variables are isolated to that module
- Helps prevent variable conflicts between multiple JS files
- Script scope is essentially **file-level scope**
*/
