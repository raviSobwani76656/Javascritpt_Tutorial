/*
===========================================
🔥 JAVASCRIPT COMMA OPERATOR NOTES
===========================================
*/

/*
1️⃣ DEFINITION
-------------------------------------------
- The comma operator (,) allows you to **evaluate multiple expressions** in a single statement.
- It **returns the value of the last expression**.
- Useful in loops, assignments, and complex expressions.
*/

/* ===========================================
2️⃣ BASIC EXAMPLES
------------------------------------------- */
let a = (1, 2, 3);
console.log(a); // 3 → last expression value

let b;
b = (10 + 5, 20 + 10, 50);
console.log(b); // 50 → last expression value

/*
Explanation:
- All expressions before the last one are evaluated, but their results are ignored.
- Only the last expression's value is returned.
*/

/* ===========================================
3️⃣ COMMA OPERATOR IN VARIABLE ASSIGNMENT
------------------------------------------- */
let x = (5, 10, 15);
console.log(x); // 15

let y = 100;
y = (y + 1, y + 2, y + 3);
console.log(y); // 103 → last expression value

/* ===========================================
4️⃣ COMMA OPERATOR IN FUNCTION CALLS
------------------------------------------- */
function sayHi(val) {
  console.log("Received:", val);
}

sayHi((1, 2, 3)); // Received: 3
sayHi((true, false, "Hello")); // Received: "Hello"

/*
Explanation:
- Only the **last expression** is passed to the function.
*/

/* ===========================================
5️⃣ COMMA OPERATOR IN LOOPS
------------------------------------------- */
for (let i = 0, j = 10; i <= 5; i++, j--) {
  console.log(i, j);
}
/*
Output:
0 10
1 9
2 8
3 7
4 6
5 5
Explanation:
- Comma allows **multiple expressions** in loop headers.
*/

/* ===========================================
6️⃣ COMPLEX EXPRESSIONS
------------------------------------------- */
let result = (console.log("Step 1"), console.log("Step 2"), 42);
console.log("Result:", result);
/*
Output:
Step 1
Step 2
Result: 42
Explanation:
- Multiple expressions executed left to right.
- Only the last expression (42) is returned.
*/

/* ===========================================
7️⃣ COMMON MISTAKE WITH console.log
------------------------------------------- */
console.log(1, 2, 1, 42, 24);
/*
Output: 1 2 1 42 24
Explanation:
- Here commas **separate function arguments**, not the comma operator.
- To use the comma operator, wrap in parentheses and assign:
  let lastValue = (1, 2, 1, 42, 24);
  console.log(lastValue); // 24
*/

/* ===========================================
8️⃣ KEY POINTS TO REMEMBER
-------------------------------------------
1. Comma operator evaluates expressions **left-to-right**.
2. Returns **the last expression's value**.
3. Often used in:
   - Loop headers
   - Variable assignment
   - Function arguments (last value matters)
4. Commas in function arguments are NOT the comma operator.
5. Can make code concise, but overuse may reduce readability.
*/

/* ===========================================
9️⃣ QUIZ QUESTIONS
-------------------------------------------
Q1: console.log((1 + 2, 3 + 4, 5)); // ?  
Q2: let x = (10, 20, 30, 40); console.log(x); // ?  
Q3: function test(val) { console.log(val); } test((100, 200, 300)); // ?  
Q4: for(let i=0,j=5; i<3; i++, j--) { console.log(i,j); }  
Q5: let result = (console.log("A"), console.log("B"), 99); console.log(result); // ?  
*/
