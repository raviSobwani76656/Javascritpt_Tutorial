/*
=============================================
🕒 setInterval() in JavaScript / Node.js
=============================================

📘 Definition:
---------------
`setInterval()` is a built-in JavaScript function that repeatedly executes 
a callback function at a fixed time interval (in milliseconds).

✅ Syntax:
    let intervalId = setInterval(callback, delay, ...args);

Parameters:
------------
1️⃣ callback → The function to execute repeatedly.
2️⃣ delay → Time in milliseconds between executions.
3️⃣ ...args → Optional arguments to pass to the callback.

Returns:
---------
- A unique interval ID, which can be used to cancel the interval using `clearInterval(intervalId)`.
- `setInterval` is **asynchronous** — it schedules the callback to run after each interval.

*/

console.log("Start");

// Example: basic interval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`🔁 Interval count: ${count}`);
}, 1000);

/*
Output (every 1 second):
Interval count: 1
Interval count: 2
Interval count: 3
...
*/

// --------------------------------------
// Stopping an interval
// --------------------------------------

// The interval keeps running indefinitely unless cleared
// Use clearInterval() to stop it
setTimeout(() => {
  clearInterval(intervalId); // stop the interval
  console.log("✅ Interval cleared after 5 seconds");
}, 5000);

// --------------------------------------
// Correct way to stop interval inside the callback
// --------------------------------------

let counter = 0;
const intervalId2 = setInterval(() => {
  counter++;
  console.log(`🔁 Count: ${counter}`);

  if (counter === 5) {
    clearInterval(intervalId2); // stop after 5 runs
    console.log("✅ Interval cleared inside callback");
  }
}, 1000);

/*
Key points:
- Always check the stopping condition inside the callback.
- `if` is synchronous, but setInterval schedules the callback asynchronously.
- The callback runs after each delay.
*/

// --------------------------------------
// Passing arguments to setInterval
// --------------------------------------

function greet(name) {
  console.log(`Hello, ${name}!`);
}

const greetInterval = setInterval(greet, 2000, "Ravi"); // passes "Ravi" to greet()
setTimeout(() => clearInterval(greetInterval), 7000); // stop after 7 seconds

// --------------------------------------
// Common pitfalls
// --------------------------------------

// ❌ Mistake: checking condition outside callback
let counter2 = 0;
const wrongInterval = setInterval(() => {
  counter2++;
  console.log(`Counter2: ${counter2}`);
}, 1000);

if (counter2 === 5) {
  clearInterval(wrongInterval); // ❌ This runs immediately, counter2 is still 0
}

// ✅ Correct: check inside callback (see intervalId2 example)

// ❌ Mistake: using setInterval for heavy computations
// The callback may overlap if execution takes longer than interval
// Solution: use setTimeout recursively for precise timing

// --------------------------------------
// Use cases
// --------------------------------------

// 1️⃣ Timers / countdown clocks
// 2️⃣ Repeated polling / API calls
// 3️⃣ Animations / progress bars
// 4️⃣ Repeating notifications / reminders

// --------------------------------------
// Summary
// --------------------------------------

/*
✅ Executes a function repeatedly at fixed intervals
✅ Returns an interval ID to cancel using clearInterval()
✅ Callback runs asynchronously
✅ Always stop intervals to avoid memory leaks or infinite loops
✅ Check stopping conditions inside the callback
*/
