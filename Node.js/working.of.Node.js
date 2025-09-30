/*
===============================
HOW NODE.JS WORKS
===============================

Node.js is a **JavaScript runtime environment** built on Chrome's V8 engine.
It allows JavaScript to be run on the **server-side**. Unlike traditional servers, Node.js uses **non-blocking, event-driven architecture**.

*/

/* 
-------------------------------
1. KEY COMPONENTS OF NODE.JS
-------------------------------
1. V8 Engine:
   - Node.js uses Google’s V8 engine to execute JavaScript.
   - Converts JS code into machine code for execution.

2. libuv:
   - Provides Node.js with an **event loop** and **asynchronous I/O**.
   - Handles file system operations, networking, timers, etc.

3. Node.js API:
   - Provides built-in modules like fs, http, path, os, etc.
   - Allows interaction with file system, network, streams, etc.

4. Event Loop:
   - Core feature of Node.js
   - Handles **non-blocking I/O operations**
   - Keeps the server running without waiting for operations to finish
*/

/* 
-------------------------------
2. SINGLE-THREADED EVENT LOOP
-------------------------------
- Node.js runs on a single thread.
- Uses **non-blocking I/O** to handle multiple requests concurrently.
- Operations like file reads, database calls, and network requests are **asynchronous**.

Example flow:
1. Client sends request
2. Node.js checks if it can handle it immediately
3. If operation is I/O bound, Node.js registers a callback
4. Node.js continues to handle other requests
5. When I/O completes, callback is executed

*/

// Example of non-blocking I/O
const fs = require("fs");

// Asynchronous read (non-blocking)
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) console.error(err);
  else console.log("File content:", data);
});

console.log("This log comes before file content because readFile is async");

/*
Output:
This log comes before file content because readFile is async
File content: <actual file data>
*/

/* 
-------------------------------
3. BLOCKING vs NON-BLOCKING
-------------------------------

Blocking (Sync):
- Node.js waits for the operation to finish
- Example: fs.readFileSync()

Non-blocking (Async):
- Node.js does NOT wait
- Uses callbacks, promises, or async/await
- Example: fs.readFile()

*/

/* 
-------------------------------
4. HOW NODE.JS HANDLES MULTIPLE REQUESTS
-------------------------------
- Node.js can handle thousands of concurrent requests.
- Event loop + non-blocking I/O avoids thread-per-request overhead (like in traditional servers).
- Heavy computation can block the event loop → should offload to worker threads.

*/

/* 
-------------------------------
5. NODE.JS ARCHITECTURE
-------------------------------
Client → Server → Node.js Runtime
- Node.js runtime includes V8, libuv, and built-in modules
- Handles requests asynchronously
- Uses callback queue & event loop
- Executes I/O operations in the background

*/

/* 
-------------------------------
6. USE CASES OF NODE.JS
-------------------------------
- Real-time applications (chat apps, gaming)
- REST APIs
- Streaming applications
- Server-side rendering
- Microservices

*/

/* 
-------------------------------
7. SUMMARY
-------------------------------
1. Node.js is **single-threaded, event-driven, and non-blocking**.
2. Uses **V8 engine** to execute JS on the server.
3. **libuv** provides event loop and async I/O.
4. Handles thousands of concurrent connections efficiently.
5. Best for I/O-bound applications (not CPU-heavy operations).
6. Async code can be written using **callbacks, promises, or async/await**.
*/
