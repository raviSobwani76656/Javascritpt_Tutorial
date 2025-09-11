/* ========================================
   📘 PROMISES IN JAVASCRIPT - NOTES
   ========================================

🔹 What is a Promise?
- A Promise is an object that represents the eventual completion (success) or failure (error) of an asynchronous task.

🔹 States of a Promise:
1. Pending   → waiting
2. Fulfilled → success (resolve called)
3. Rejected  → failure (reject called)

🔹 The Executor Function
- When you create a Promise, you pass a function (executor) into it:
    new Promise((resolve, reject) => { ... });
- This executor runs immediately when the Promise is created.
- It receives two special functions from JavaScript:
    ✔ resolve(value) → mark the Promise as fulfilled and pass a result
    ✔ reject(error)  → mark the Promise as rejected and pass an error

🔹 Important methods:
- .then()    → handles success (resolved value)
- .catch()   → handles errors (rejected reason)
- .finally() → always runs (cleanup)

------------------------------------------
   🔑 KEY IDEA
------------------------------------------
- You decide WHEN and HOW to call resolve() or reject()
- A Promise can only be resolved or rejected ONCE
- After that, its state is settled forever
*/

// -------------------------
// Example 1: Creating a Promise
// -------------------------
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Promise resolved"); // goes to .then()
  } else {
    reject("❌ Promise rejected"); // goes to .catch()
  }
});

myPromise
  .then((result) => console.log(result)) // success case
  .catch((error) => console.log(error)) // error case
  .finally(() => console.log("Always runs"));

// -------------------------
// Example 2: Promise Chaining
// -------------------------
const multiplyPromise = new Promise((resolve, reject) => {
  resolve(10);
});

multiplyPromise
  .then((data) => data * 2) // 20
  .then((data) => data * 3) // 60
  .then((result) => console.log("Chained Result:", result));

// -------------------------
// Example 3: Fetch with Promises
// -------------------------
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // convert response to JSON
  .then((data) => console.log(data)) // handle the JSON data
  .catch((error) => console.error("Error:", error))
  .finally(() => console.log("Request finished"));

// -------------------------
// Example 4: Using Async/Await
// -------------------------
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Request finished with async/await");
  }
}

/* ========================================
   📘 ERROR HANDLING IN PROMISES & ASYNC/AWAIT
   ========================================

🔹 Two main ways to handle errors in async code:

1. Using .catch() with Promise chaining
   - Style: promise.then(...).catch(...)
   - catch() takes a callback function
   - Best for simple promise chains

2. Using try/catch with async/await
   - Style: try { await something } catch (error) { ... }
   - catch block is part of normal JS error handling
   - Best for cleaner, synchronous-looking async code

------------------------------------------
   🔑 KEY DIFFERENCE
------------------------------------------
- .catch() → belongs to Promises
- catch {} → belongs to try/catch blocks in async/await

⚡ Both do the SAME job: catching errors!
Use .catch() if you are chaining .then().
Use try/catch if you are using async/await.
*/

// -------------------------
// Example 1: Using .catch() with Promise chaining
// -------------------------
fetch("https://wrong-url.com/data")
  .then((response) => response.json())
  .then((data) => console.log("Data:", data))
  .catch((error) => console.error("Error with .catch():", error))
  .finally(() => console.log("Promise chain finished"));

// -------------------------
// Example 2: Using try/catch with async/await
// -------------------------
async function getDataWithError() {
  try {
    const response = await fetch("https://wrong-url.com/data");
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error with try/catch:", error);
  } finally {
    console.log("Async/Await finished");
  }
}

getDataWithError();
