/* ========================================
   📘 ASYNC & AWAIT IN JAVASCRIPT
   ========================================

🔹 async and await make working with Promises easier.
   They allow asynchronous code to look and behave like synchronous code.

------------------------------------------
   1. async keyword
------------------------------------------
- Put `async` before a function to make it return a Promise automatically.
- Even if you return a normal value, it will be wrapped inside a Promise.

Example:
async function example() {
  return "Hello"; 
}
// Calling example() will return: Promise { "Hello" }

------------------------------------------
   2. await keyword
------------------------------------------
- Can ONLY be used inside an async function.
- Pauses the execution of the function until the Promise is resolved/rejected.
- Makes code look synchronous while still being asynchronous.

------------------------------------------
   3. Error Handling
------------------------------------------
- Use try/catch inside async functions to handle errors.
- Works just like synchronous error handling.
------------------------------------------
*/

// -------------------------
// Example 1: async returns a Promise automatically
// -------------------------
async function sayHello() {
  return "Hello World";
}

sayHello().then((msg) => console.log(msg));
// Output: Hello World

// -------------------------
// Example 2: await with a Promise
// -------------------------
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  const result = await fetchData(); // waits here until resolved
  console.log(result); // Output after 2 sec: "Data received!"
}

getData();

// -------------------------
// Example 3: Error handling with async/await
// -------------------------
async function fetchWithError() {
  try {
    const response = await fetch("https://wrong-url.com/api");
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error caught with try/catch:", error);
  } finally {
    console.log("Request completed");
  }
}

fetchWithError();
