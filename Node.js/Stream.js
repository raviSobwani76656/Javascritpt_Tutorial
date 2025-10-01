/*
==========================================================
📌 Streams in Node.js (Detailed Notes + Examples)
==========================================================

👉 Streams are objects that let you read or write data 
   piece by piece (chunks) instead of loading everything 
   into memory at once.

⚡ Why Streams?
- Efficient: Handle large files/data without using too much memory.
- Faster: Process data while still receiving it.
- Used in: File I/O, HTTP requests/responses, video/audio streaming, zlib compression.
*/

// -------------------------------------------------------
// 🔹 Types of Streams in Node.js
// -------------------------------------------------------

/*
1. Readable Streams  → For reading data (e.g., fs.createReadStream).
2. Writable Streams  → For writing data (e.g., fs.createWriteStream).
3. Duplex Streams    → Both readable and writable (e.g., TCP sockets).
4. Transform Streams → Duplex + can modify data as it passes (e.g., zlib compression).
*/

// -------------------------------------------------------
// 🔹 Example 1: Readable Stream (Reading a file chunk by chunk)
// -------------------------------------------------------

const fs = require("fs");

// Create a readable stream
const readableStream = fs.createReadStream("largeFile.txt", {
  encoding: "utf8",
  highWaterMark: 16 * 1024, // read 16KB at a time
});

// Listen for events
readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length, "bytes");
});

readableStream.on("end", () => {
  console.log("Finished reading file.");
});

readableStream.on("error", (err) => {
  console.error("Error:", err);
});

/*
✅ Instead of reading entire file in memory, 
   it reads in chunks (default: 64KB).
*/

// -------------------------------------------------------
// 🔹 Example 2: Writable Stream (Writing data to a file)
// -------------------------------------------------------

const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello, this is the first line.\n");
writableStream.write("Writing another line using stream.\n");

// Always end the stream
writableStream.end(() => {
  console.log("Finished writing to file.");
});

// -------------------------------------------------------
// 🔹 Example 3: Pipe (Connecting Readable → Writable)
// -------------------------------------------------------

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("copy.txt");

// Pipe data directly (no need to handle 'data' events manually)
readStream.pipe(writeStream);

console.log("File is being copied using pipe...");

/*
✅ The pipe() method connects two streams.
   Useful for copying files, streaming HTTP responses, etc.
*/

// -------------------------------------------------------
// 🔹 Example 4: Transform Stream (Compression using zlib)
// -------------------------------------------------------

const zlib = require("zlib");

const gzip = zlib.createGzip(); // Transform stream
const source = fs.createReadStream("input.txt");
const destination = fs.createWriteStream("input.txt.gz");

// Pipe through transform
source.pipe(gzip).pipe(destination);

console.log("File compressed to input.txt.gz");

/*
✅ Transform stream modifies the data while passing through.
   Common use cases: compression, encryption, data manipulation.
*/

// -------------------------------------------------------
// 🔹 Events in Streams
// -------------------------------------------------------

/*
Readable Streams:
- 'data' → emits chunks of data
- 'end'  → emitted when no more data
- 'error' → on errors

Writable Streams:
- 'drain' → when it's ready for more data
- 'finish' → when all writes are done
- 'error'  → on errors
*/

// -------------------------------------------------------
// 🔹 Key Points for Interview
// -------------------------------------------------------

/*
1. Streams = Efficient way to handle large data.
2. Types: Readable, Writable, Duplex, Transform.
3. Pipe() → connects readable to writable.
4. HighWaterMark → controls buffer size for streams.
5. Backpressure → mechanism to prevent overwhelming writable streams:
   - If writeStream.write() returns false → pause readable stream.
   - Resume when 'drain' event fires.
6. Streams are EventEmitter objects (use .on() to listen).
7. Real-world use:
   - Video/audio streaming
   - Large file uploads/downloads
   - HTTP request/response handling
   - Data compression (zlib)
   - Logs processing
*/
