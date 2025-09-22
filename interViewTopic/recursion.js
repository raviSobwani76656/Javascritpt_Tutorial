/*
==================================
📌 JavaScript Recursion - Quick Notes
==================================

🔹 What is Recursion?
- A function that calls itself to solve a problem.
- Always needs a **base case** to stop recursion.

----------------------------------
1. Factorial Example
----------------------------------
function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1);       // Recursive case
}
console.log(factorial(5)); // 120

----------------------------------
2. Fibonacci Example
----------------------------------
function fibonacci(n) {
  if (n === 0) return 0; // Base case
  if (n === 1) return 1; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
console.log(fibonacci(6)); // 8

----------------------------------
3. Sum of Array Elements
----------------------------------
function sumArray(arr, n) {
  if (n <= 0) return 0;            // Base case
  return sumArray(arr, n - 1) + arr[n - 1]; // Recursive case
}
console.log(sumArray([1,2,3,4,5], 5)); // 15

----------------------------------
4. Tips for Recursion
----------------------------------
- Always define a base case.
- Ensure each call moves toward the base case.
- Recursion can be visualized as a **stack of function calls**.
- For large inputs, recursion may cause stack overflow; consider iteration or memoization.
*/
