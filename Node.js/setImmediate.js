/*
===============================
NODE.JS TIMING FUNCTIONS NOTES
===============================
This file covers setImmediate, setTimeout, setInterval, and process.nextTick.
These are used for scheduling tasks in Node.js Event Loop.
*/

/* 
-------------------------------
1. setImmediate
-------------------------------
- Schedules a callback to run **after the current event loop phase**.
- Runs in the **check phase** of the Node.js event loop.
- Ideal for **I/O-heavy tasks**.

Syntax:
setImmediate(callback, [arg1, arg2, ...])

Example:
*/
console.log("Start");

setImmediate(() => {
  console.log("Executed in setImmediate");
});

console.log("End");

// Output:
// Start
// End
// Executed in setImmediate

/* 
With I/O operations:
*/
const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => console.log("Timeout callback"), 0);
  setImmediate(() => console.log("Immediate callback"));
});

// Output:
// Immediate callback
// Timeout callback

/* 
-------------------------------
2. setTimeout
-------------------------------
- Schedules a callback after a minimum delay.
- Runs in the **timers phase** of the event loop.

Syntax:
setTimeout(callback, delay, [arg1, arg2, ...])

Example:
*/
setTimeout(() => {
  console.log("Executed in setTimeout after 100ms");
}, 100);

/* 
-------------------------------
3. setInterval
-------------------------------
- Repeatedly executes a callback every given interval (ms).
- Runs in the **timers phase**.

Syntax:
setInterval(callback, interval, [arg1, arg2, ...])

Example:
*/
let count = 0;
const interval = setInterval(() => {
  console.log("Interval executed");
  count++;
  if (count === 3) clearInterval(interval); // Stop after 3 runs
}, 1000);

/* 
-------------------------------
4. process.nextTick
-------------------------------
- Schedules a callback to run **before the next event loop phase**, but after the current operation.
- Runs **before setImmediate and setTimeout**.
- Useful for deferring execution without leaving the current phase.

Example:
*/
console.log("Start nextTick");

process.nextTick(() => {
  console.log("Executed in nextTick");
});

console.log("End nextTick");

// Output:
// Start nextTick
// End nextTick
// Executed in nextTick

/* 
-------------------------------
5. Summary / Comparison
-------------------------------
| Function           | Phase          | Executes                     |
|-------------------|----------------|------------------------------|
| process.nextTick   | Next tick queue| After current operation      |
| setImmediate       | Check phase    | After poll phase / I/O       |
| setTimeout         | Timers phase   | After delay                  |
| setInterval        | Timers phase   | Repeats every interval       |

- **Use process.nextTick** to defer execution before other I/O.
- **Use setImmediate** to execute after I/O callbacks.
- **Use setTimeout/setInterval** for delays and repeating tasks.
*/
