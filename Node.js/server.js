/*
===============================
NODE.JS SERVER NOTES
===============================

This note explains how to create servers in Node.js using:
1. Built-in 'http' module
2. Express framework
*/

/* 
-------------------------------
1. CREATE SERVER USING HTTP MODULE
-------------------------------
*/

const http = require("http"); // Import http module

// Create the server
const server = http.createServer((req, res) => {
  console.log("HTTP Server received a request");

  // Access request info
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);

  // Set response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Write response body
  res.write("Hello from Node.js HTTP server!");

  // End response
  res.end();
});

// Start the server
server.listen(3000, () => {
  console.log("HTTP Server running at http://localhost:3000/");
});

/* 
Key Points:
- http.createServer() takes a callback with req and res objects.
- res.writeHead() sets HTTP status code and headers.
- res.write() writes response body.
- res.end() ends the response.
- Async operations keep the server non-blocking.
*/

/* 
-------------------------------
2. CREATE SERVER USING EXPRESS
-------------------------------
*/

const express = require("express"); // Import express
const app = express(); // Create express app

// Middleware to parse JSON (for POST requests)
app.use(express.json());

// Define GET route for root
app.get("/", (req, res) => {
  console.log("Root route hit");
  res.send("Hello from Express!");
});

// Define GET route for /about
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// Define POST route
app.post("/data", (req, res) => {
  console.log("Received POST data:", req.body);
  res.send("Data received!");
});

// Start Express server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});

/*
Key Points:
- app.get() defines routes for GET requests.
- app.post() defines routes for POST requests.
- res.send() sends response to client.
- Express simplifies routing and middleware handling.
- app.listen(PORT) starts the server on given port.
*/

/* 
-------------------------------
3. HTTP vs Express
-------------------------------
| Feature                  | Node http Module       | Express Framework            |
|---------------------------|---------------------|------------------------------|
| Setup                     | Manual setup         | Simplified, built-in routing |
| Routing                   | Manual (check req.url)| Built-in app.get(), app.post()|
| Middleware support        | Needs manual coding  | Built-in and easy to add     |
| Response handling         | res.writeHead(), res.write(), res.end() | res.send(), res.json() |
| Code complexity           | Higher for multiple routes | Lower, more readable      |
*/

/*
-------------------------------
4. Tips
-------------------------------
1. Always send a response to prevent client hanging.
2. Use console.log() to debug requests.
3. Async operations make Node.js non-blocking.
4. Use Express for easier routing and multiple routes.
*/
