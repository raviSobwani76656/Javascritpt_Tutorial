// 🧠 TYPE COERCION IN JAVASCRIPT
// ==============================
//
// 👉 Definition:
// Type Coercion is the automatic or implicit conversion of values
// from one data type to another (e.g., string to number, number to boolean)
// by JavaScript during comparison or operations.
//
// It happens because JavaScript is a loosely typed (dynamically typed) language.

// ---------------------------------------
// 🔹 TYPES OF TYPE COERCION
// ---------------------------------------
//
// 1️⃣ IMPLICIT COERCION  → done automatically by JS
// 2️⃣ EXPLICIT COERCION  → done manually by the developer

// ---------------------------------------
// 🔸 1. IMPLICIT COERCION
// ---------------------------------------
//
// Happens when you use operators like +, -, *, /, ==
// JS automatically converts types based on context.

// Example 1: String + Number → String (concatenation)
console.log("5" + 3); // "53"
console.log(5 + "3"); // "53"

// Example 2: Number - String → Number (subtraction converts both sides to numbers)
console.log("10" - 2); // 8
console.log("10" * 2); // 20
console.log("10" / 2); // 5

// Example 3: Boolean to Number
console.log(true + 1); // 2  (true → 1)
console.log(false + 1); // 1  (false → 0)

// Example 4: String + Boolean
console.log("Hello" + true); // "Hellotrue"

// Example 5: Comparison (== causes coercion)
console.log(5 == "5"); // true  (string is converted to number)
console.log(0 == false); // true  (false → 0)
console.log(1 == true); // true  (true → 1)

// Example 6: When using logical operators
console.log("" || "Hello"); // "Hello" → empty string is falsy
console.log("Hi" && 0); // 0 → first falsy value
console.log("Hi" && "JS"); // "JS" → both truthy, returns last

// ---------------------------------------

/ * 2. EXPLICIT COERCION */;
// ---------------------------------------
//
// Happens when you intentionally convert data types using functions or operators.

// Convert to String:
console.log(String(123)); // "123"
console.log((123).toString()); // "123"

// Convert to Number:
console.log(Number("123")); // 123
console.log(parseInt("123px")); // 123
console.log(parseFloat("123.45")); // 123.45

// Convert to Boolean:
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hi")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// ---------------------------------------
// ⚙️ RULES OF TYPE COERCION (Simplified)
// ---------------------------------------
//
// 🔹 Rule 1: "+" operator
// - If either operand is a string → concatenation
// - Otherwise → numeric addition
//
// 🔹 Rule 2: Other arithmetic operators (-, *, /, %)
// - Convert operands to numbers before operating.
//
// 🔹 Rule 3: == (Loose Equality)
// - Converts operands to the same type before comparison.
//
// 🔹 Rule 4: === (Strict Equality)
// - No coercion, checks both value and type.
//
// 🔹 Rule 5: Falsy values
//  false, 0, -0, "", null, undefined, NaN → all treated as false.
//
// 🔹 Rule 6: Truthy values
//  Everything else (non-empty strings, arrays, objects, etc.) → true.

// ---------------------------------------
// 🧩 COMMON PITFALLS
// ---------------------------------------

console.log([] == 0); // true  (array → "" → 0)
console.log([] == false); // true
console.log([1] == 1); // true  (array → "1" → 1)
console.log(null == undefined); // true
console.log(null === undefined); // false

// ---------------------------------------
// 🧠 BEST PRACTICES
// ---------------------------------------
//
// ✅ Always use === and !== for comparison (avoid type coercion surprises).
// ✅ Use explicit conversion when necessary.
// ✅ Don’t rely on JS auto-conversion for complex expressions.
//
// Example:
const val = "10";
console.log(Number(val) + 5); // ✅ safer → 15 instead of "105"

// ---------------------------------------
// ✅ SUMMARY
// ---------------------------------------
//
// - Implicit Coercion: JS converts automatically
// - Explicit Coercion: Developer converts manually
// - Avoid == for comparisons
// - Be mindful of falsy/truthy values
// - "+" operator behaves differently than others
