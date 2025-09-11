/* =========================================================
   🌀 EVENT LOOP MADE SIMPLE
   =========================================================

   🟢 The problem:
   - JavaScript is SINGLE-THREADED (only one thing runs at a time).
   - So how does it handle async tasks (timers, fetch, etc.) without blocking?

   🟢 The answer: EVENT LOOP
   - Think of it as a manager that decides *what runs next*.

   📌 How it works step by step:
   1. JS runs code line by line (Call Stack).
   2. If it sees async code (setTimeout, fetch, promises):
        → It sends it to the Browser APIs/Node APIs to handle in background.
   3. When async work finishes:
        → Its callback is moved to a QUEUE (waiting line).
   4. Event Loop checks:
        - If Call Stack is empty → it takes a task from the queue → runs it.
   5. Important: There are 2 queues
        - Microtask Queue → Promises, queueMicrotask (HIGH priority)
        - Macrotask Queue → setTimeout, setInterval, setImmediate, I/O, etc.
   6. Rule:
        - After the main code runs,
        - Run ALL microtasks first,
        - Then run ONE macrotask,
        - Then repeat.

   🟢 So Order is:
   - Sync code (normal JS)
   - Microtasks (Promises etc.)
   - Macrotasks (setTimeout etc.)
   ========================================================= */

/* ------------------------------
   EXAMPLE 1: Normal order
------------------------------- */
console.log("1. Start");

setTimeout(() => console.log("4. Timeout (macrotask)"), 0);

Promise.resolve().then(() => console.log("3. Promise (microtask)"));

console.log("2. End");

// Output:
// 1. Start
// 2. End
// 3. Promise (microtask)
// 4. Timeout (macrotask)

/* ------------------------------
   EXAMPLE 2: Multiple microtasks
------------------------------- */
Promise.resolve().then(() => console.log("Microtask 1"));
Promise.resolve().then(() => console.log("Microtask 2"));
setTimeout(() => console.log("Macrotask (timeout)"), 0);

// Output:
// Microtask 1
// Microtask 2
// Macrotask (timeout)

/* ------------------------------
   EXAMPLE 3: Why setTimeout(0) is NOT instant
------------------------------- */
setTimeout(() => console.log("Macrotask (timeout)"), 0);

console.log("Synchronous work first");

Promise.resolve().then(() => console.log("Microtask before timeout"));

// Output:
// Synchronous work first
// Microtask before timeout
// Macrotask (timeout)

/* ------------------------------
   EXAMPLE 4: Microtask starvation (⚠️ bad!)
------------------------------- */
function badLoop() {
  Promise.resolve().then(() => {
    console.log("Microtask again!");
    badLoop(); // keeps adding itself → starves macrotasks
  });
}
// Uncomment to see endless microtasks
// badLoop();

/* =========================================================
   📝 TAKEAWAYS
   =========================================================
   - JS runs one thing at a time (single-threaded).
   - Event Loop decides what runs next.
   - Order:
     1. Normal code (synchronous)
     2. All Microtasks (Promises, queueMicrotask)
     3. One Macrotask (setTimeout, setInterval)
     4. Repeat
   - setTimeout(0) ≠ immediate → must wait for stack + microtasks.
   - Don’t create infinite microtasks → it blocks macrotasks.
   ========================================================= */
