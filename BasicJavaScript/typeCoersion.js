/*
===========================================
🔥 JAVASCRIPT TYPE COERCION RULES
===========================================
*/

/*
1️⃣ DEFINITION
-------------------------------------------
- Type coercion = automatic (implicit) or manual (explicit) conversion of a value from one type to another.
- Happens in: arithmetic operations, comparisons, boolean context, string concatenation, etc.
*/

/* ===========================================
2️⃣ COERCION TO STRING
------------------------------------------- */
- Happens when using `+` operator with a string.
- Rule: If **any operand is a string**, JS converts the other operand to string.
Examples:
console.log("5" + 2);      // "52" → number 2 → string
console.log(true + " is");  // "true is"
console.log(null + "value"); // "nullvalue"
console.log(undefined + "value"); // "undefinedvalue"

/* ===========================================
3️⃣ COERCION TO NUMBER
------------------------------------------- */
- Happens in arithmetic operators other than `+` (`-`, `*`, `/`, `%`, `**`).
- Rule: JS converts values to numbers using **Number()** rules:
  - Boolean: true → 1, false → 0
  - null → 0
  - undefined → NaN
  - "" (empty string) → 0
  - "123" → 123
  - "abc" → NaN
Examples:
console.log("5" - 2);   // 3
console.log("5" * "2"); // 10
console.log(true + 2);  // 3
console.log(false - 1); // -1
console.log(null + 5);  // 5
console.log(undefined + 5); // NaN

/* ===========================================
4️⃣ COERCION TO BOOLEAN
------------------------------------------- */
- Happens in **conditional statements** (`if`, `while`, `!`, `&&`, `||`).
- Rule: JS converts values using **truthy/falsy rules**.
  - Falsy: false, 0, -0, 0n (BigInt 0), "", null, undefined, NaN
  - Truthy: everything else
Examples:
if ("") console.log("Hello");    // not printed → "" is falsy
if ("Hi") console.log("Hello");  // printed → "Hi" is truthy
console.log(!!0);   // false → double NOT converts to boolean
console.log(!!"");  // false
console.log(!!{});  // true

/* ===========================================
5️⃣ NULL AND UNDEFINED
------------------------------------------- */
- null → behaves like 0 in numeric context, falsy in boolean
- undefined → becomes NaN in numeric context, falsy in boolean
Examples:
console.log(null + 5);      // 5
console.log(undefined + 5); // NaN
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(null == undefined); // true → only equality rule

/* ===========================================
6️⃣ COMPARISON OPERATORS
------------------------------------------- */
- `==` → allows type coercion
- `===` → strict equality, no coercion
Rules for `==`:
1. If types are same → compare normally
2. null == undefined → true
3. String ↔ Number → string converted to number
4. Boolean → converted to number
5. Object ↔ Primitive → object converted to primitive via `valueOf()` or `toString()`

Examples:
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(true == 1);  // true
console.log(false == 0); // true
console.log(null == undefined); // true
console.log([] == 0);    // true → [] → "" → 0
console.log([] == false);// true → [] → "" → 0

/* ===========================================
7️⃣ SPECIAL CASES
------------------------------------------- */
// Array + String / Array + Number
console.log([] + []);    // "" → empty string
console.log([] + {});    // "[object Object]" → array to string
console.log({} + []);    // 0 → tricky, {} treated as block

// Boolean arithmetic
console.log(true + true);  // 2
console.log(false + false);// 0
console.log(true + false);// 1

// Double NOT !! → convert any value to boolean
console.log(!!"Hello"); // true
console.log(!!"");      // false
console.log(!!123);     // true
console.log(!!0);       // false

/* ===========================================
8️⃣ ORDER OF TYPE COERCION IN JS
-------------------------------------------
1. Primitive types involved in operator
2. If operator is `+` and one operand is string → convert other to string
3. For `-`, `*`, `/`, `%`, `**` → convert operands to number
4. For `==` → type coercion based on rules above
5. Boolean contexts → convert to true/false
6. null/undefined → behave differently in arithmetic and equality
*/

/* ===========================================
9️⃣ QUICK REFERENCE TABLE
-------------------------------------------
| Value Type      | Number | String | Boolean |
|-----------------|--------|--------|---------|
| "123"           | 123    | "123"  | true    |
| ""              | 0      | ""     | false   |
| 0               | 0      | "0"    | false   |
| 1               | 1      | "1"    | true    |
| null            | 0      | "null" | false   |
| undefined       | NaN    | "undefined" | false |
| true            | 1      | "true" | true    |
| false           | 0      | "false"| false   |
| []              | 0      | ""     | true    |
| {}              | NaN    | "[object Object]" | true |
*/

/* ===========================================
10️⃣ SUMMARY OF RULES
-------------------------------------------
1. `+` → string concatenation if one operand is string
2. `- * / % **` → operands converted to number
3. Boolean → 1 or 0 in arithmetic
4. null → 0 in arithmetic, undefined → NaN
5. Falsy values: false, 0, "", null, undefined, NaN
6. Truthy: everything else
7. `==` → allows coercion, `===` → strict equality
8. Double NOT (!!) → convert any value to boolean
9. Arrays and objects are converted to primitives in arithmetic/comparison
10. Be careful with tricky cases like [] + {} or {} + []
*/





/*
===========================================
🔥 JAVASCRIPT TRICKY TYPE COERCION: ARRAYS & OBJECTS
===========================================
*/

/*
1️⃣ OVERVIEW
-------------------------------------------
- These expressions are tricky because of **type coercion** + **JavaScript parsing rules**.
- `+` operator:
  - If **any operand is a string**, converts the other to string → concatenation
  - Otherwise, tries numeric addition
- Arrays and objects are **converted to primitive values** when used with `+`:
  - Array → `toString()` → elements joined by commas → empty array → ""
  - Object → `toString()` → "[object Object]"
- Special case: `{}` at the start of a line can be interpreted as **block statement**, not object literal
*/

/* ===========================================
2️⃣ EXAMPLES AND EXPLANATIONS
------------------------------------------- */

// Example 1: [] + 1
console.log([] + 1);
// Step by step:
// [] → empty array → "" (empty string) via toString()
// "" + 1 → string concatenation → "1"
// ✅ Result: "1"

// Example 2: {} + 1
console.log({} + 1);
// Step by step:
// {} at start of line → treated as block statement, not object
// +1 → unary plus converts number → 1
// In some consoles, {} may be interpreted as object → "[object Object]" + 1 → "[object Object]1"
// ✅ Result (common): "[object Object]1"

// Example 3: [] + {}
console.log([] + {});
// Step by step:
// [] → "" (empty string)
// {} → object → "[object Object]" via toString()
// "" + "[object Object]" → "[object Object]"
// ✅ Result: "[object Object]"

// Example 4: {} + []
console.log({} + []);
// Step by step:
// {} at start → block statement, ignored
// +[] → unary plus converts [] → 0
// ✅ Result: 0

// Alternative way to force {} as object literal:
console.log(({}) + []); 
// Step by step:
// {} → object → "[object Object]"
// [] → "" → string
// "[object Object]" + "" → "[object Object]"
// ✅ Result: "[object Object]"

/* ===========================================
3️⃣ KEY POINTS / RULES
-------------------------------------------
1. Array → toString() → elements joined by commas
   - [] → ""
   - [1,2] → "1,2"
2. Object → toString() → "[object Object]"
3. + operator:
   - If either side is string → string concatenation
   - Otherwise → numeric addition
4. {} at start of a line → block statement, not object literal
   - Wrap in parentheses to force as object literal
5. Unary + converts value to number:
   - +[] → 0
   - +{} → NaN
6. Always use parentheses for clarity:
   - `({} + [])` → object + array → "[object Object]"
   - `([] + {})` → array + object → "[object Object]"
*/











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
