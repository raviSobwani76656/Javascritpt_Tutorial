// 📘================================================================
// 🧠 Event Loop — Complete Node.js & Browser Notes
// 📘================================================================

// -------------------------------------------------------------
// 🔹 Overview
// -------------------------------------------------------------
// - JavaScript is single-threaded: only one thing runs on the call stack at a time.
// - Event Loop allows JS to perform async operations (timers, I/O, DOM events, Promises)
//   without blocking the thread.
// - Node.js and browsers both have event loops, but differ in host APIs and phases.
// - Core components:
//   ✅ Call Stack (synchronous code)
//   ✅ Task Queues (microtasks/macrotasks)
//   ✅ Host Environment (Browser APIs or Node/libuv)

// -------------------------------------------------------------
// 🔹 Two main types of tasks
// -------------------------------------------------------------
/*
1️⃣ Microtasks (high priority):
   - Run after the current operation completes but *before* the next macrotask.
   - Examples (Browser & Node):
     - Promise.then/catch/finally
     - queueMicrotask()
     - MutationObserver (Browser)
     - process.nextTick() (Node, runs before other microtasks)

2️⃣ Macrotasks (tasks):
   - Run in event loop phases.
   - Examples:
     - setTimeout, setInterval
     - setImmediate (Node only)
     - I/O callbacks (fs, net)
     - DOM events (Browser)
*/

// -------------------------------------------------------------
// 🔹 Browser Event Loop (simplified)
// -------------------------------------------------------------
/*
Phases / cycle (Browser):
1. Execute current JS (call stack)
2. Drain microtask queue (Promises, queueMicrotask, MutationObserver)
3. Execute one macrotask (timer, UI event, XHR callback)
4. Drain microtask queue again
5. Rendering / repaint (if needed)
6. Repeat
*/

console.log("Browser example start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise then"));

console.log("Browser example end");

// Likely output:
// Browser example start
// Browser example end
// Promise then
// setTimeout

// -------------------------------------------------------------
// 🔹 Node.js Event Loop (libuv) Phases
// -------------------------------------------------------------
/*
1️⃣ Timers        → setTimeout, setInterval (whose delay has expired)
2️⃣ Pending callbacks → some system I/O callbacks
3️⃣ Idle, prepare → internal, Node handles housekeeping
4️⃣ Poll phase    → retrieve new I/O events; run I/O callbacks
5️⃣ Check phase   → setImmediate callbacks run here
6️⃣ Close callbacks → e.g., socket.on('close')

⚡ Microtasks (Promises, queueMicrotask)
   - Run immediately after the current operation, before moving to next phase
⚡ Node special: process.nextTick()
   - Highest priority, runs before any other microtasks
*/

// -------------------------------------------------------------
// 🔹 Example: process.nextTick vs Promise vs setTimeout vs setImmediate
// -------------------------------------------------------------
console.log("Start");

process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise"));
setTimeout(() => console.log("timeout 0"), 0);
setImmediate(() => console.log("setImmediate"));

console.log("End");

// Likely output (Node):
// Start
// End
// nextTick
// promise
// setImmediate
// timeout 0

// -------------------------------------------------------------
// 🔹 Top-level vs inside I/O callbacks
// -------------------------------------------------------------
const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("File read complete");

  setTimeout(() => console.log("timeout in I/O"), 0);
  setImmediate(() => console.log("setImmediate in I/O"));
});

// Output:
// File read complete
// setImmediate in I/O
// timeout in I/O

// Explanation:
// - I/O callback finishes during poll phase
// - Event loop moves to check phase → setImmediate runs
// - Next timers phase → setTimeout runs

// Top-level setImmediate vs setTimeout(0) order is NOT guaranteed
// It depends on poll phase timing and OS scheduling

// -------------------------------------------------------------
// 🔹 Microtasks vs Macrotasks Example
// -------------------------------------------------------------
console.log("sync start");

setTimeout(() => console.log("timeout 1"), 0);
Promise.resolve().then(() => console.log("promise 1"));
queueMicrotask(() => console.log("queueMicrotask 1"));
process.nextTick(() => console.log("nextTick 1"));

console.log("sync end");

// Output:
// sync start
// sync end
// nextTick 1
// promise 1
// queueMicrotask 1
// timeout 1

// -------------------------------------------------------------
// 🔹 process.nextTick warning
// -------------------------------------------------------------
function blockLoop() {
  process.nextTick(blockLoop); // keeps running, blocks event loop
}
// blockLoop(); // ❌ Do not run in production

// -------------------------------------------------------------
// 🔹 Microtasks summary
// -------------------------------------------------------------
/*
| Task                     | Runs In Phase                  | Priority |
|--------------------------|--------------------------------|----------|
| process.nextTick()        | Node special microtask queue   | 🥇 High  |
| Promise.then / queueMicrotask | Microtask queue             | 🥈 Medium|
| MutationObserver (Browser) | Microtask queue               | 🥈 Medium|
*/

// -------------------------------------------------------------
// 🔹 Macrotasks summary
// -------------------------------------------------------------
/*
| Task                       | Event Loop Phase              | Notes |
|-----------------------------|-------------------------------|-------|
| setTimeout / setInterval    | Timers phase                  | Next iteration if delay=0 |
| setImmediate (Node)         | Check phase                   | After poll/I/O callbacks |
| I/O callbacks               | Poll phase                    | fs, net, HTTP callbacks  |
| DOM events (Browser)        | Macrotask queue               | Click, input, etc.       |
*/

// -------------------------------------------------------------
// 🔹 Practical tips
// -------------------------------------------------------------
// 1. Microtasks always run before next macrotask.
// 2. process.nextTick() is highest priority in Node.
// 3. Top-level setImmediate vs setTimeout(0) → order not guaranteed.
// 4. Inside I/O callback → setImmediate usually runs before setTimeout(0).
// 5. Avoid long synchronous code or recursive nextTick → blocks event loop.
// 6. Use Promises / async-await for readable async code.
// 7. Use setImmediate() for deferring work after I/O without starving I/O.
