/* 
=======================================
📘 NOTES ON MODULES IN NODE.JS
=======================================

👉 A module in Node.js is a reusable block of code that has its own scope. 
👉 Modules help organize code into smaller, maintainable files.

Types of Modules:
1. Core (Built-in) Modules
2. Local (User-defined) Modules
3. Third-Party Modules (installed using npm)
*/

/* -------------------------------
1. CORE (BUILT-IN) MODULES
   - These come pre-installed with Node.js
   - Examples: fs, path, os, http
-------------------------------- */

// Example: Using 'fs' module to write a file
const fs = require("fs");
fs.writeFileSync("example.txt", "Hello Node.js Core Module!");

// Example: Using 'path' module
const path = require("path");
console.log("File extension:", path.extname("example.txt")); // .txt


/* -------------------------------
2. LOCAL (USER-DEFINED) MODULES
   - You create these yourself
   - Export code from one file and import it in another
-------------------------------- */

// File: math.js

function add(a, b) {
  return a + b;
}
module.exports = add;

// File: app.js

const add = require("./math");
console.log(add(5, 3)); // 8



/* -------------------------------
3. THIRD-PARTY MODULES
   - Installed using npm
   - Examples: express, mongoose, lodash
-------------------------------- */

// Install express before using: npm install express

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(3000, () => console.log("Server running on port 3000"));



/* -------------------------------
EXPORTING AND IMPORTING MODULES
-------------------------------- */

// CommonJS (Default in Node.js)

module.exports = { add, subtract }; // exporting
const math = require("./math");     // importing


// ES Modules (need "type": "module" in package.json)

export function add(a, b) { return a + b; }
import { add } from "./math.js";



/* 
=======================================
✅ SUMMARY
- Core Modules → come with Node.js (fs, path, http, etc.)
- Local Modules → your own code files
- Third-Party Modules → installed using npm
- Two systems of modules:
   1. CommonJS → require/module.exports (default)
   2. ES Modules → import/export (modern JS)
=======================================
*/
