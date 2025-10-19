/*
=============================================
⚡ setImmediate() in Node.js
=============================================

📘 Definition:
---------------
`setImmediate()` is a Node.js function that executes a callback **immediately after the current event loop phase**.
It is different from `setTimeout(fn, 0)` because it runs in the **check phase** of the event loop, not the timers phase.

✅ Syntax:
    let immediateId = setImmediate(callback, ...args);

Parameters:
------------
1️⃣ callback → Function to execute.
2️⃣ ...args → Optional arguments to pass to the callback.

Returns:
---------
- A unique Immediate ID, which can be canceled using `clearImmediate(immediateId)`.

-----------------------------------------------------
*/

/* =====================================================
1️⃣ Basic Example
------------------------------------------------------ */

console.log("Start");

setImmediate(() => {
  console.log("⚡ Runs immediately after the current event loop phase");
});

console.log("End");

/*
Output:
Start
End
⚡ Runs immediately after the current event loop phase

Explanation:
- Code outside setImmediate runs synchronously first.
- setImmediate schedules the callback to run **after the current event loop phase**, not immediately in the current stack.
*/

/* =====================================================
2️⃣ Passing arguments to setImmediate
------------------------------------------------------ */

function greet(name) {
  console.log(`Hello, ${name}!`);
}

let immediateId = setImmediate(greet, "Ravi"); // passes "Ravi" to greet()

/* =====================================================
3️⃣ Cancelling a setImmediate
------------------------------------------------------ */

let cancelImmediate = setImmediate(() => {
  console.log("This will never run");
});

clearImmediate(cancelImmediate); // cancels the scheduled immediate

/* =====================================================
4️⃣ Difference between setImmediate() and setTimeout(fn, 0)
------------------------------------------------------ */

setTimeout(() => console.log("setTimeout 0ms"), 0);
setImmediate(() => console.log("setImmediate"));

/*
Output (Node.js, usually):
setImmediate
setTimeout 0ms

Explanation:
- setTimeout(fn, 0) runs in the **timers phase**.
- setImmediate runs in the **check phase**, which occurs after I/O events are processed.
- If no I/O is happening, their order may appear random, but generally setImmediate runs first.
*/

/* =====================================================
5️⃣ Use cases for setImmediate
------------------------------------------------------
✅ Defer execution until after I/O events
✅ Avoid blocking the event loop
✅ Execute callbacks after current operation finishes
✅ Prevent stack overflow in recursive functions

Example: Breaking large loops
*/

function printNumbers(n) {
  if (n === 0) return;
  console.log(n);
  setImmediate(() => printNumbers(n - 1)); // defer next iteration
}

printNumbers(5);

/* =====================================================
6️⃣ Summary
------------------------------------------------------

| Function            | Executes when?                     | Can be cancelled? |
|--------------------|-----------------------------------|-----------------|
| setTimeout(fn, 0)   | Timers phase, after 0ms delay     | clearTimeout()  |
| setImmediate(fn)    | Check phase, after current event loop | clearImmediate() |
| process.nextTick(fn)| Before next event loop iteration, highest priority | N/A |

💡 Key Points:
- setImmediate is **Node.js-only**; not available in browsers.
- It is faster than setTimeout(fn, 0) in most cases.
- Use it to **defer execution** without blocking the main event loop.
*/
