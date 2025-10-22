// 📘============================================================
// 🧠 process.nextTick() in Node.js
// 📘============================================================

// -------------------------------------------------------------
// 🔹 Definition:
// -------------------------------------------------------------
// process.nextTick() is a special asynchronous function in Node.js
// that schedules a callback to be executed *after the current operation*
// and *before* the event loop continues to the next phase.
//
// In other words, it runs *immediately after the current function*
// finishes execution, but before any I/O, timers, or other events.
//
// -------------------------------------------------------------
// 🔹 Syntax:
// -------------------------------------------------------------
// process.nextTick(callback)
//
// callback → A function to be executed in the next tick of the event loop.
//

// -------------------------------------------------------------
// 🔹 Basic Example
// -------------------------------------------------------------
console.log("Start");

process.nextTick(() => {
  console.log("Inside process.nextTick()");
});

console.log("End");

// 🧾 Output:
// Start
// End
// Inside process.nextTick()
//
// Explanation:
// 1️⃣ "Start" and "End" run first (synchronous).
// 2️⃣ Node checks the nextTick queue and runs it before any other async task.

// -------------------------------------------------------------
// 🔹 How it fits in the Event Loop
// -------------------------------------------------------------
//
// process.nextTick() is *not part of any event loop phase*.
// It runs in a separate queue called the "next tick queue".
// This queue is processed *immediately after* the current operation
// and *before* the event loop moves to the next phase.
//
// Order of execution:
//   ✅ Run current code block
//   ✅ Run all process.nextTick() callbacks
//   ▶️ Move to next event loop phase (Timers, Poll, Check, etc.)

// -------------------------------------------------------------
// 🔹 Comparison with setTimeout() and setImmediate()
// -------------------------------------------------------------
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));

// 🧾 Output:
// nextTick
// setTimeout
// setImmediate
//
// Explanation:
// nextTick runs before the event loop continues.
// setTimeout runs in the Timers Phase.
// setImmediate runs in the Check Phase.

// -------------------------------------------------------------
// ⚠️ Warning: Avoid Recursive nextTick Calls
// -------------------------------------------------------------
//
// process.nextTick() always runs before moving to the next event loop phase.
// If you schedule nextTick() inside itself, Node will never move forward!
// This can freeze your application.
//
// ❌ Example (DON'T DO THIS):
function infiniteLoop() {
  process.nextTick(infiniteLoop);
}

// infiniteLoop(); // 🚫 Uncommenting this will hang your Node.js program.

// -------------------------------------------------------------
// ✅ When to Use process.nextTick()
// -------------------------------------------------------------
//
// Use it when you need to:
// 1️⃣ Execute code immediately after the current operation completes.
// 2️⃣ Handle errors asynchronously but as soon as possible.
// 3️⃣ Ensure cleanup happens before I/O or other events.
//
// Example:
function readConfig(callback) {
  const configLoaded = false;
  const configData = { key: "value" };

  if (!configLoaded) {
    // Runs callback asynchronously, but before other I/O tasks
    return process.nextTick(() => callback(new Error("Config not loaded")));
  }

  callback(null, configData);
}

readConfig((err, data) => {
  if (err) console.error(err.message);
  else console.log("Config:", data);
});

// -------------------------------------------------------------
// 🧾 Summary Table
// -------------------------------------------------------------
/*
| Function              | Runs In                 | Timing                                  | Priority |
|------------------------|------------------------|------------------------------------------|-----------|
| process.nextTick()     | Microtask Queue (before Event Loop) | After current op, before I/O | 🥇 Highest |
| setTimeout()           | Timers Phase           | After specified delay                   | 🥈 Medium  |
| setImmediate()         | Check Phase            | After I/O events complete               | 🥉 Lower   |
*/

// -------------------------------------------------------------
// 💡 Analogy:
// -------------------------------------------------------------
// Think of Node.js as a worker going through tasks:
//
// 🧍 Worker finishes one job.
// 📝 You tell them: “Before you start your next shift, just do this quick task.”
// That quick task = process.nextTick().
// -------------------------------------------------------------
