/*
===================================================
📌 Node.js Notes: Why Single-Threaded & Concurrency
===================================================

👉 These notes explain WHY Node.js is single-threaded,
   and HOW it still handles multiple concurrent requests.
*/

// -------------------------------------------------
// 🔹 Why is Node.js Single-Threaded?
// -------------------------------------------------

/*
1. Node.js runs on Google’s V8 engine → JavaScript is single-threaded by design.
2. Node.js was built to be lightweight and efficient.
3. Traditional languages (Java, PHP, .NET) create a thread per request → costly (memory + context switching).
4. Instead, Node.js uses ONE main thread with async non-blocking I/O → can handle thousands of connections.
5. Perfect for I/O-heavy apps (APIs, chat servers, real-time apps, streaming).
*/

// -------------------------------------------------
// 🔹 How does Node.js handle concurrency?
// -------------------------------------------------

/*
✅ Even though Node.js is single-threaded for JavaScript execution, 
   it achieves concurrency using:

   1. Event Loop (manages async operations)
   2. Libuv library (handles I/O, thread pool, timers, etc.)
   3. Callback/Promise/Async-await system

⚙ Flow:
- JS code runs on main thread.
- Async tasks (DB query, file read, HTTP request) → delegated to Libuv.
- Libuv internally uses a thread pool (default: 4 threads).
- When async task finishes, callback/promise is queued in Event Loop.
- Event Loop executes it when the main thread is free.
*/

// -------------------------------------------------
// 🔹 Example 1: Non-blocking File Read
// -------------------------------------------------

const fs = require("fs");

console.log("Start"); // This prints immediately

// Async I/O → This is delegated to Libuv's thread pool
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;

  // This runs later when file reading is complete
  console.log("File content:", data);
});

console.log("End"); // This prints before file content

/*
📌 Expected Output:
Start
End
File content: (data from file)

✅ Why "End" comes before file content?
   - Because `fs.readFile` is async (non-blocking).
   - The main thread continues executing.
   - File read is offloaded to Libuv’s thread pool.
   - Once ready, callback is pushed into Event Loop queue.
*/

// -------------------------------------------------
// 🔹 Example 2: Blocking vs Non-blocking
// -------------------------------------------------

// Blocking version (synchronous)
const data = fs.readFileSync("file.txt", "utf8");
console.log("Sync File content:", data); // Blocks here until file is read

// Non-blocking version (asynchronous)
fs.readFile("file.txt", "utf8", (err, asyncData) => {
  console.log("Async File content:", asyncData);
});

/*
📌 Difference:
- readFileSync → Blocks the event loop → Bad for concurrency.
- readFile     → Non-blocking → Preferred for scalable apps.
*/

// -------------------------------------------------
// 🔹 Key Interview Points
// -------------------------------------------------

/*
1. Node.js is single-threaded for JS execution → keeps it simple + efficient.
2. Concurrency is achieved using Event Loop + Libuv (not multiple threads per request).
3. Event Loop processes callbacks/promises in phases (timers, I/O, check, close).
4. Libuv provides a thread pool for heavy tasks (file I/O, crypto, DNS).
5. For CPU-intensive tasks:
   - Use Worker Threads (worker_threads module).
   - Use Child Processes (child_process module).
   - Or split into Microservices.

✅ Interview Answer:
"Node.js is single-threaded to stay lightweight and efficient. 
It uses an event-driven, non-blocking I/O model where asynchronous tasks 
are handled by Libuv’s thread pool and queued back into the Event Loop. 
This lets Node.js manage thousands of concurrent requests without blocking the main thread."
*/
