/*
==============================
PURE FUNCTION vs IMPURE FUNCTION
==============================

1. PURE FUNCTION:
   - Always returns the same output for the same input.
   - Does not modify external variables or have any side effects.
   - Predictable and easy to test.

   Example:
*/
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (Same output for same input)

/*
2. IMPURE FUNCTION:
   - May return different outputs for the same input.
   - Can modify external variables or depend on external state.
   - Harder to test and less predictable.

   Example:
*/
let count = 0;

function increment() {
  count++; // modifies external variable (side effect)
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2 (Different output for same input due to side effect)

/*
KEY DIFFERENCE:
- Pure Functions are deterministic and side-effect free.
- Impure Functions depend on or modify external factors.

USE CASES:
- Pure functions are preferred in functional programming (React, Redux)
  because they make code predictable and easier to debug.
*/

function impure(a) {
  const resul = Math.random() + a;
  return resul;
}

console.log(impure(8));

let count = 0;

function counterIncreament() {
  count++;
  return count;
}

console.log(counterIncreament());
console.log(counterIncreament());
