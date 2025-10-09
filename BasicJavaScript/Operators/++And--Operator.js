/*
===========================================
🔥 JAVASCRIPT INCREMENT & DECREMENT OPERATORS
===========================================
*/

/*
1️⃣ OVERVIEW
-------------------------------------------
- Increment (++) and Decrement (--) operators are **unary operators**.
- They operate on **a single variable** to increase or decrease its value by 1.
- Can be used in **prefix** or **postfix** form.
*/

/* ===========================================
2️⃣ TYPES OF OPERATORS
------------------------------------------- */

// 1. Postfix Increment: a++
let a = 1;
console.log(a++); // 1 → returns original value
console.log(a); // 2 → then increments

// 2. Prefix Increment: ++a
let b = 1;
console.log(++b); // 2 → increments first, then returns

// 3. Postfix Decrement: a--
let c = 3;
console.log(c--); // 3 → returns original value
console.log(c); // 2 → then decrements

// 4. Prefix Decrement: --a
let d = 3;
console.log(--d); // 2 → decrements first, then returns

/* ===========================================
3️⃣ COMBINED EXPRESSIONS
------------------------------------------- */

let x = 1,
  y = 2,
  z = 3;

// Using postfix
let result1 = x++ + y++ + z++;
// Step by step:
// x++ → 1 (then x=2)
// y++ → 2 (then y=3)
// z++ → 3 (then z=4)
// result1 = 1 + 2 + 3 = 6
console.log(result1); // 6
console.log(x, y, z); // 2 3 4

// Using prefix
let p = 1,
  q = 2,
  r = 3;
let result2 = ++p + ++q + ++r;
// Step by step:
// ++p → 2 (p=2)
// ++q → 3 (q=3)
// ++r → 4 (r=4)
// result2 = 2 + 3 + 4 = 9
console.log(result2); // 9
console.log(p, q, r); // 2 3 4

/* ===========================================
4️⃣ KEY POINTS
-------------------------------------------
1. Postfix (a++, a--) → returns **original value**, then changes variable
2. Prefix (++a, --a) → changes variable first, then returns **new value**
3. Unary operators → act on a single operand
4. Can be used in complex arithmetic expressions
5. Order matters in expressions:
   - Postfix: use value first, then increment/decrement
   - Prefix: increment/decrement first, then use value
6. Commonly used in loops and counters
*/

/* ===========================================
5️⃣ QUICK REFERENCE TABLE
-------------------------------------------
| Operator | Prefix/Postfix | Returns Value | Variable After |
|----------|----------------|---------------|----------------|
| a++      | Postfix        | original a    | a+1            |
| ++a      | Prefix         | a+1           | a+1            |
| a--      | Postfix        | original a    | a-1            |
| --a      | Prefix         | a-1           | a-1            |
*/

/* ===========================================
6️⃣ TRICKY TIP
-------------------------------------------
- When combining multiple ++ or -- in a single expression:
  - Evaluate **left to right**
  - Apply **postfix/prefix rules**
- Always use parentheses to make expression clear

Example:
let a = 2, b = 3;
let d = a++ + ++b; // d = 2 + 4 = 6
console.log(a, b); // 3 4
*/
