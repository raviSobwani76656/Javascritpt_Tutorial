/* =====================================================
   📘 SYNCHRONOUS vs ASYNCHRONOUS JAVASCRIPT
   =====================================================

🔹 Synchronous JavaScript
- Executes line by line (sequentially).
- Each statement waits for the previous one to complete.
- Blocking in nature.

*/
console.log("Synchronous Example:");
console.log("Start");
for (let i = 0; i < 16; i++) {} // long blocking loop
console.log("End");

/* =====================================================
🔹 Asynchronous JavaScript
- Code does not block execution.
- Tasks run in background (handled by Web APIs).
- Once finished, they are queued and executed later.
*/
console.log("\nAsynchronous Example:");
console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 2000);

console.log("End");

/* =====================================================
🔹 Key Components of Async JS
1. Call Stack  → Runs code line by line.
2. Web APIs   → Handle async operations (setTimeout, fetch, DOM events).
3. Task Queue → Stores completed async callbacks.
4. Event Loop → Pushes tasks from queue to stack when stack is free.

👉 Together, they allow JS (which is single-threaded) to handle async tasks.
===================================================== */
