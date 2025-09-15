/* ========================================
   📘 PROMISE .then() IN JAVASCRIPT
   ========================================

🔹 .then() is used to handle the result of a Promise once it is resolved.
🔹 It takes a callback function that receives the resolved value.

------------------------------------------
   1. Syntax
------------------------------------------
promise.then(
   function(result) { ... }  // runs when the promise resolves
)

- `result` is the value passed from resolve().

------------------------------------------
   2. Multiple .then() chaining
------------------------------------------
- .then() itself returns a Promise.
- You can chain multiple .then() to handle values step by step.

------------------------------------------
   3. Error Handling
------------------------------------------
- If something goes wrong, use .catch() at the end of the chain.
- Or throw an error inside .then() to trigger .catch().
------------------------------------------
*/

// -------------------------
// Example 1: Basic .then()
// -------------------------
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Operation successful!");
  } else {
    reject("❌ Something went wrong!");
  }
});

myPromise.then((data) => {
  console.log("Resolved value:", data);
});

// -------------------------
// Example 2: Chaining .then()
// -------------------------
const chainPromise = new Promise((resolve) => {
  resolve(349);
});

chainPromise
  .then((num) => {
    console.log("First:", num);
    return num * 2; // Pass value to next .then()
  })
  .then((num) => {
    console.log("Second:", num);
    return num * 3;
  })
  .then((num) => {
    console.log("Third:", num);
  });

// -------------------------
// Example 3: Handling errors with .then() + .catch()
// -------------------------
const errorPromise = new Promise((resolve, reject) => {
  reject("❌ Failed to load data");
});

errorPromise
  .then((data) => {
    console.log("This will not run");
  })
  .catch((error) => {
    console.error("Caught error:", error);
  })
  .finally(() => {
    console.log("Always runs");
  });


