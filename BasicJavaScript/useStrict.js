/********************************************************************************************
 * 📘 JAVASCRIPT "USE STRICT" — COMPLETE NOTES
 * ------------------------------------------------
 * "use strict" was introduced in ECMAScript 5 (ES5).
 * It helps you write cleaner, safer, and less error-prone JavaScript code.
 * It enforces stricter parsing and error handling rules.
 *
 * ✅ How to enable strict mode:
 *    1️⃣ At the beginning of a script file.
 *    2️⃣ Inside a specific function.
 *
 * Example:
 * "use strict";
 * OR
 * function test() {
 *   "use strict";
 * }
 ********************************************************************************************/


/********************************************************************************************
 * 🧠 WHY USE STRICT?
 * ------------------------------------------------
 * - Prevents the use of undeclared variables.
 * - Makes debugging easier.
 * - Avoids accidental global variables.
 * - Prevents duplicate parameter names.
 * - Makes ‘this’ behave predictably.
 * - Disallows reserved keywords for future ECMAScript versions.
 ********************************************************************************************/


/********************************************************************************************
 * 🔹 EXAMPLE 1: Undeclared Variables
 ********************************************************************************************/

// ❌ Without "use strict"
function withoutStrict_Undeclared() {
  undeclaredVar = "I am global accidentally!";
  console.log(undeclaredVar);
}
withoutStrict_Undeclared(); // Works, but creates a global variable

// ✅ With "use strict"
function withStrict_Undeclared() {
  "use strict";
  try {
    undeclaredVar = "This will throw error!";
  } catch (err) {
    console.log("Error:", err.message); // ReferenceError: undeclaredVar is not defined
  }
}
withStrict_Undeclared();



/********************************************************************************************
 * 🔹 EXAMPLE 2: Duplicate Parameter Names
 ********************************************************************************************/

// ❌ Without "use strict"
function withoutStrict_Duplicate(a, a) {
  console.log(a); // No error, takes last parameter
}
withoutStrict_Duplicate(5, 10); // Output: 10

// ✅ With "use strict"
function withStrict_Duplicate(a, a) {
  "use strict";
  // SyntaxError: Duplicate parameter name not allowed in strict mode
}



/********************************************************************************************
 * 🔹 EXAMPLE 3: `this` in Functions
 ********************************************************************************************/

// ❌ Without "use strict"
function withoutStrict_This() {
  console.log(this); // In browsers -> Window object
}
withoutStrict_This();

// ✅ With "use strict"
function withStrict_This() {
  "use strict";
  console.log(this); // undefined (safer behavior)
}
withStrict_This();



/********************************************************************************************
 * 🔹 EXAMPLE 4: Assigning to Read-Only Properties
 ********************************************************************************************/

// ❌ Without "use strict"
const obj1 = {};
Object.defineProperty(obj1, "prop", { value: 42, writable: false });
obj1.prop = 100; // Silently fails (no error)
console.log("Without strict:", obj1.prop); // 42

// ✅ With "use strict"
function withStrict_ReadOnly() {
  "use strict";
  const obj2 = {};
  Object.defineProperty(obj2, "prop", { value: 42, writable: false });
  try {
    obj2.prop = 100; // Throws TypeError
  } catch (err) {
    console.log("Error:", err.message); // Cannot assign to read only property
  }
}
withStrict_ReadOnly();



/********************************************************************************************
 * 🔹 EXAMPLE 5: `delete` on Variables, Functions or Parameters
 ********************************************************************************************/

// ❌ Without "use strict"
var sampleVar = 10;
delete sampleVar; // false (fails silently)

// ✅ With "use strict"
function withStrict_Delete() {
  "use strict";
  var sample = 10;
  try {
    delete sample; // Throws SyntaxError
  } catch (err) {
    console.log("Error:", err.message);
  }
}
withStrict_Delete();



/********************************************************************************************
 * 🔹 EXAMPLE 6: Octal Literals
 ********************************************************************************************/

// ❌ Without "use strict"
var num = 010; // 8 in decimal (old octal notation)
console.log("Without strict:", num);

// ✅ With "use strict"
function withStrict_Octal() {
  "use strict";
  try {
    var num = 010; // SyntaxError
  } catch (err) {
    console.log("Error:", err.message);
  }
}
withStrict_Octal();



/********************************************************************************************
 * 🔹 EXAMPLE 7: Reserved Keywords
 ********************************************************************************************/

// ❌ Without "use strict"
var public = "keyword"; // Allowed

// ✅ With "use strict"
function withStrict_Reserved() {
  "use strict";
  try {
    var public = "keyword"; // SyntaxError in strict mode
  } catch (err) {
    console.log("Error:", err.message);
  }
}
withStrict_Reserved();



/********************************************************************************************
 * 🔹 EXAMPLE 8: `eval()` Behavior
 ********************************************************************************************/

// ❌ Without "use strict"
eval("var a = 50;");
console.log(a); // 50 (created globally)

// ✅ With "use strict"
function withStrict_Eval() {
  "use strict";
  eval("var b = 100;");
  try {
    console.log(b); // ReferenceError: b is not defined (local to eval)
  } catch (err) {
    console.log("Error:", err.message);
  }
}
withStrict_Eval();



/********************************************************************************************
 * 🧾 SUMMARY
 * ------------------------------------------------
 * ✅ Strict mode advantages:
 *   - Eliminates silent JavaScript errors.
 *   - Prevents accidental globals.
 *   - Improves performance (engines optimize better).
 *   - Prepares code for future JS versions.
 *
 * ❌ What it disallows:
 *   - Using undeclared variables.
 *   - Deleting variables/functions.
 *   - Duplicating function param*
