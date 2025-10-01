/*
===============================
FILE HANDLING IN NODE.JS
===============================

Node.js provides a built-in module 'fs' (File System) to work with files.
It allows you to read, write, update, delete, append, rename, and copy files.
There are two types of methods: Asynchronous (non-blocking) and Synchronous (blocking).
*/

const fs = require("fs"); // Import fs module

/* 
-------------------------------
1. READING FILES
-------------------------------

a) Asynchronous (non-blocking, uses callback)
*/
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) console.error(err);
  else console.log("Async Read:", data);
});

/*
b) Synchronous (blocking, returns result immediately)
*/
try {
  const data = fs.readFileSync("example.txt", "utf-8");
  console.log("Sync Read:", data);
} catch (err) {
  console.error(err);
}

/* 
-------------------------------
2. WRITING FILES
-------------------------------

a) Asynchronous (non-blocking, uses callback)
*/
fs.writeFile("example.txt", "Hello Node.js!", (err) => {
  if (err) console.error(err);
  else console.log("Async Write: File written successfully");
});

/*
b) Synchronous (blocking, no callback)
*/
try {
  fs.writeFileSync("example.txt", "Hello Node.js Sync!");
  console.log("Sync Write: File written successfully");
} catch (err) {
  console.error(err);
}

/* 
-------------------------------
3. APPENDING DATA TO FILES
-------------------------------

a) Asynchronous
*/
fs.appendFile("example.txt", "\nAppended text", (err) => {
  if (err) console.error(err);
  else console.log("Async Append: Text appended successfully");
});

/*
b) Synchronous
*/
try {
  fs.appendFileSync("example.txt", "\nSync appended text");
  console.log("Sync Append: Text appended successfully");
} catch (err) {
  console.error(err);
}

/* 
-------------------------------
4. DELETING FILES
-------------------------------

a) Asynchronous
*/
fs.unlink("example.txt", (err) => {
  if (err) console.error(err);
  else console.log("Async Delete: File deleted successfully");
});

/*
b) Synchronous
*/
try {
  fs.unlinkSync("example.txt");
  console.log("Sync Delete: File deleted successfully");
} catch (err) {
  console.error(err);
}

/* 
-------------------------------
5. RENAMING FILES
-------------------------------

a) Asynchronous
*/
fs.rename("old.txt", "new.txt", (err) => {
  if (err) console.error(err);
  else console.log("Async Rename: File renamed successfully");
});

/*
b) Synchronous
*/
try {
  fs.renameSync("old.txt", "new.txt");
  console.log("Sync Rename: File renamed successfully");
} catch (err) {
  console.error(err);
}

/* 
-------------------------------
6. CHECKING FILE EXISTENCE
-------------------------------

Asynchronous
*/
fs.access("example.txt", fs.constants.F_OK, (err) => {
  console.log(err ? "File does not exist" : "File exists");
});

// Synchronous
const exists = fs.existsSync("example.txt");
console.log(exists ? "File exists" : "File does not exist");

/* 
-------------------------------
7. COPYING FILES
-------------------------------

// Synchronous copy
try {
  fs.cpSync('example.txt', 'copy.txt');
  console.log('Sync Copy: File copied successfully');
} catch (err) {
  console.error(err);
}

/* 
-------------------------------
8. USING PROMISES / ASYNC-AWAIT
-------------------------------

Modern Node.js allows fs.promises for async-await syntax:
*/
const fsPromises = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile("example.txt", "utf-8");
    console.log("Async-Await Read:", data);
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();

/*
===============================
KEY POINTS
===============================
1. Async methods use callbacks to handle completion/errors.
2. Sync methods block execution and return results directly.
3. Use async methods for server apps or large files.
4. Use sync methods for scripts, startup tasks, or small files.
5. fs.promises allows cleaner async-await code instead of callbacks.
*/
