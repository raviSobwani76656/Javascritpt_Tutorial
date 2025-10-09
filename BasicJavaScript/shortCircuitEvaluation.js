







/* 
===========================================
⚡ SHORT-CIRCUIT EVALUATION IN JAVASCRIPT
===========================================

🔹 WHAT IS SHORT-CIRCUIT EVALUATION?
--------------------------------------------
Short-circuit evaluation is a JavaScript behavior where logical operators (`&&` and `||`)
**stop evaluating** as soon as the result is determined.

JavaScript reads expressions **from left to right** and stops once it knows the final outcome.

This helps improve performance and allows using logical operators
for conditional assignments or function calls.

--------------------------------------------
🔹 OPERATORS THAT USE SHORT-CIRCUITING
--------------------------------------------
1️⃣ Logical AND (&&)
2️⃣ Logical OR (||)
3️⃣ Nullish Coalescing (??)

--------------------------------------------
🔹 1. LOGICAL AND (&&)
--------------------------------------------
- Returns the **first falsy** value it finds.
- If all values are truthy, returns the **last** value.
- If the first value is falsy, it stops right there — short-circuiting.

✅ Example:
----------------------------------
console.log(true && "Hello");   // "Hello"
console.log(false && "Hello");  // false
console.log("Hi" && 0 && "Bye"); // 0
console.log("Hi" && "Bye");     // "Bye"
----------------------------------

Explanation:
- In `true && "Hello"`, since both are truthy, the result is `"Hello"`.
- In `false && "Hello"`, the first operand is falsy → stops immediately, returns `false`.

💡 USE CASE:
Only run a function if a condition is true.
----------------------------------
let isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");
// Output: Welcome back!
----------------------------------
If `isLoggedIn` is false → nothing runs.

--------------------------------------------
🔹 2. LOGICAL OR (||)
--------------------------------------------
- Returns the **first truthy** value it finds.
- If all values are falsy, returns the **last falsy** value.
- If the first value is truthy, it stops right there — short-circuiting.

✅ Example:
----------------------------------
console.log(false || "Guest");     // "Guest"
console.log("Admin" || "Guest");   // "Admin"
console.log(0 || "" || "Hello");   // "Hello"
console.log(null || undefined);    // undefined
----------------------------------

Explanation:
- `false || "Guest"` → stops at `"Guest"` (first truthy).
- `0 || "" || "Hello"` → both 0 and "" are falsy, so returns `"Hello"`.

💡 USE CASE:
Provide **default values**.
----------------------------------
let username = "";
let displayName = username || "Guest";
console.log(displayName); // "Guest"
----------------------------------

--------------------------------------------
🔹 3. NULLISH COALESCING (??)
--------------------------------------------
Introduced in ES2020.

- Returns the **right-hand** value only if the **left-hand** is `null` or `undefined`.
- Unlike `||`, it does **not** treat `0`, `false`, or `""` as falsy.

✅ Example:
----------------------------------
console.log(null ?? "Default");      // "Default"
console.log(undefined ?? "Default"); // "Default"
console.log(0 ?? 100);               // 0
console.log("" ?? "Empty");          // ""
----------------------------------

💡 USE CASE:
Use `??` when you only want to replace `null` or `undefined`, not all falsy values.

--------------------------------------------
🔹 DIFFERENCE BETWEEN || AND ??
--------------------------------------------
| Expression          | Result  |
|---------------------|----------|
| 0 || 100            | 100      |
| 0 ?? 100            | 0        |
| "" || "Hello"       | "Hello"  |
| "" ?? "Hello"       | ""       |

--------------------------------------------
🔹 CHAINING EXAMPLES
--------------------------------------------
✅ With AND (&&)
----------------------------------
console.log(true && "A" && "B");  // "B"
console.log(true && 0 && "B");    // 0
----------------------------------

✅ With OR (||)
----------------------------------
console.log(false || 0 || "Hi");  // "Hi"
console.log(false || "" || null); // null
----------------------------------

✅ Mixed Example:
----------------------------------
console.log((false || "User") && "Logged in");
// "User" || ... → returns "User"
// "User" && "Logged in" → returns "Logged in"
----------------------------------

--------------------------------------------
🔹 SUMMARY
--------------------------------------------
✔ Short-circuiting = stopping evaluation early.  
✔ `&&` → returns first falsy or last truthy.  
✔ `||` → returns first truthy or last falsy.  
✔ `??` → returns right-hand side only for null/undefined.  
✔ Used for conditional execution and default values.  

--------------------------------------------
💡 PRO TIP:
Short-circuiting is commonly used in React and Node.js
for conditional rendering or safe function calls like:
    user && user.profile && user.profile.name
Now with optional chaining, you can simplify:
    user?.profile?.name
--------------------------------------------
*/











/*
===========================================
🔥 JAVASCRIPT — TRUTHY, FALSY & SHORT-CIRCUIT EVALUATION
✅ Questions + Answers + Explanations
===========================================
*/


// Q1️⃣
console.log(false || 0 || null || "Hello" || undefined);
// Answer: "Hello"
// Explanation: OR (||) returns the first truthy value. false, 0, null are falsy → "Hello" is first truthy → returned.


// Q2️⃣
console.log("Hi" && 0 && "World");
// Answer: 0
// Explanation: AND (&&) stops at the first falsy value. "Hi" is truthy, 0 is falsy → returns 0.


// Q3️⃣
console.log("" || false || 10 || null);
// Answer: 10
// Explanation: All values before 10 are falsy → OR returns first truthy value.


// Q4️⃣
console.log("JavaScript" && "is" && "awesome");
// Answer: "awesome"
// Explanation: All are truthy → AND returns the last value when no falsy is found.


// Q5️⃣
console.log(0 && "Hello" || "World");
// Answer: "World"
// Explanation: 0 && "Hello" → 0 (falsy). 0 || "World" → "World" (first truthy).


// Q6️⃣
console.log(null || undefined || 0 || "");
// Answer: ""
// Explanation: All values are falsy → OR returns the last falsy value.


// Q7️⃣
console.log("Hi" && false || "Bye");
// Answer: "Bye"
// Explanation: "Hi" && false → false (falsy). false || "Bye" → "Bye".


// Q8️⃣
console.log(null && "Test" || "Done");
// Answer: "Done"
// Explanation: null && "Test" → null (falsy). null || "Done" → "Done".


// Q9️⃣
console.log(0 || false || null || undefined);
// Answer: undefined
// Explanation: All are falsy → OR returns the last falsy value.


// Q🔟
console.log(1 && 2 && 3 && 4);
// Answer: 4
// Explanation: All truthy → AND returns last value.


// Q11️⃣
console.log(1 && 0 && 3);
// Answer: 0
// Explanation: Stops at first falsy (0).


// Q12️⃣
console.log(false && "Hello" && "World");
// Answer: false
// Explanation: First value is falsy → stops immediately.


// Q13️⃣ — Function does NOT run due to short-circuit
function sayHi() {
  console.log("sayHi() called");
  return true;
}
console.log(false && sayHi());
// Answer: false
// Explanation: Left-hand side is falsy → short-circuit → function not called.


// Q14️⃣ — Function runs because left-hand side is truthy
function greet() {
  console.log("Greet called");
  return "Hello";
}
console.log(true && greet());
// Output:
// Greet called
// "Hello"
// Explanation: Left-hand side is truthy → function executes → returns its value.


// Q15️⃣
console.log("" || "0" || 0);
// Answer: "0"
// Explanation: "" is falsy → "0" (string) is truthy → returned.


// Q16️⃣ — Nullish coalescing vs OR
console.log(0 || 10);  // Answer: 10 → OR sees 0 as falsy
console.log(0 ?? 10);  // Answer: 0  → ?? only checks null/undefined


// Q17️⃣ — Mix of &&, ||, ??
console.log(null ?? undefined || false && "JS" || "END");
// Answer: "END"
// Explanation:
// null ?? undefined → undefined
// undefined || false → false
// false && "JS" → false
// false || "END" → "END"


// Q18️⃣ — Default value example
let username = "";
let displayName = username || "Guest";
console.log(displayName);
// Answer: "Guest"
// Explanation: username is falsy → OR returns default value.


// Q19️⃣ — Arrays and objects
console.log([] && "Yes"); // "Yes"
console.log({} && "Yes"); // "Yes"
console.log([] || "No");  // []
console.log({} || "No");  // {}
// Explanation: [] and {} are truthy → AND returns right-hand value, OR returns first truthy.


// Q20️⃣ — NaN examples
console.log(NaN || "Hello"); // "Hello"
// Explanation: NaN is falsy → OR returns first truthy
console.log(NaN && "World"); // NaN
// Explanation: AND stops at first falsy → returns NaN


/*
===========================================
💡 TRUTHY & FALSY REMINDERS
===========================================

Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
Everything else → truthy

Logical OR (||) → returns first truthy, or last falsy if none
Logical AND (&&) → returns first falsy, or last truthy if all truthy
Nullish Coalescing (??) → returns right-hand value only if left is null/undefined

Short-circuiting → stops evaluation once result is determined
Functions in short-circuit expressions may or may not run depending on left-hand value
*/
