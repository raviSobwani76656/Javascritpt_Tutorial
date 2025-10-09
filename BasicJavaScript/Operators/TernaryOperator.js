/*
===========================================
🔥 JAVASCRIPT TERNARY OPERATOR ( ? : ) NOTES
===========================================
*/

/*
1️⃣ DEFINITION
-------------------------------------------
- The ternary operator is a **short-hand if-else statement**.
- Syntax: 
    condition ? expression_if_true : expression_if_false
- Evaluates the condition:
  - If true → returns the first expression
  - If false → returns the second expression
- Can be used in variable assignment, function calls, or expressions.
*/

/* ===========================================
2️⃣ BASIC EXAMPLES
------------------------------------------- */
let age = 20;

let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

let number = 5;
console.log(number % 2 === 0 ? "Even" : "Odd"); // "Odd"

/* ===========================================
3️⃣ NESTED TERNARY
------------------------------------------- */
let score = 85;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";

console.log(grade); // "B"

/*
- Nested ternaries are allowed but can reduce readability.
- Use parentheses for clarity if needed.
*/

/* ===========================================
4️⃣ IN FUNCTION CALLS
------------------------------------------- */
function greet(user) {
  console.log(user ? `Hello, ${user}` : "Hello, Guest");
}

greet("Alice"); // Hello, Alice
greet(); // Hello, Guest

/* ===========================================
5️⃣ INLINE USAGE
------------------------------------------- */
let isLoggedIn = true;
console.log(isLoggedIn ? "Dashboard" : "Login"); // "Dashboard"

/* ===========================================
6️⃣ KEY POINTS
-------------------------------------------
1. Syntax: condition ? value_if_true : value_if_false
2. Returns a value based on the condition.
3. Can be **nested**, but readability may decrease.
4. Ideal for **short, inline conditional logic**.
5. Can be used in assignments, console logs, function arguments, JSX (React), etc.
*/

/* ===========================================
7️⃣ QUICK COMPARISON WITH IF-ELSE
------------------------------------------- */
let x = 10;
let result;

// Using if-else
if (x > 5) {
  result = "Greater";
} else {
  result = "Smaller or equal";
}
console.log(result); // "Greater"

// Using ternary operator
result = x > 5 ? "Greater" : "Smaller or equal";
console.log(result); // "Greater"
