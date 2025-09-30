/*
===============================
EXPRESS.JS: REQUEST (req) AND RESPONSE (res)
===============================

In Express.js:
- `req` represents the HTTP **request** sent by the client.
- `res` represents the HTTP **response** sent by the server.

Understanding `req` and `res` is essential for handling routes, sending data, and building APIs.
*/

/* 
-------------------------------
1. REQUEST OBJECT (req)
-------------------------------
Contains information about the client’s request:

Common properties:
- req.params   → Route parameters (:id)
- req.query    → Query string parameters (?q=search)
- req.body     → Body of POST/PUT requests (requires express.json())
- req.method   → HTTP method (GET, POST, etc.)
- req.url      → Requested URL
- req.headers  → HTTP headers
- req.cookies  → Cookies (requires cookie-parser)

Example:
*/

const express = require("express");
const app = express();
app.use(express.json());

app.get("/user/:id", (req, res) => {
  console.log("Route parameter:", req.params.id); // e.g., /user/123 → 123
  console.log("Query parameter:", req.query.q); // e.g., /user/123?q=node → node
  res.send("Request object example");
});

/* 
-------------------------------
2. RESPONSE OBJECT (res)
-------------------------------
Used to send data back to the client. Common methods:

1. res.send(data) 
   - Sends string, buffer, object, array.
   - Automatically sets Content-Type.
2. res.json(object)
   - Sends JSON response.
   - Equivalent to res.send(JSON.stringify(obj)) with correct headers.
3. res.status(code)
   - Sets HTTP status code (e.g., 200, 404, 500).
4. res.end()
   - Ends the response. Usually not needed in Express.
5. res.set(field, value)
   - Sets HTTP headers.

*/

/* Example using res.send and res.json */
app.get("/", (req, res) => {
  res.send("Hello world"); // Sends string
});

app.get("/api", (req, res) => {
  res.json({ message: "Success", data: [1, 2, 3] }); // Sends JSON
});

app.get("/notfound", (req, res) => {
  res.status(404).send("Page not found"); // Sets status and sends response
});

/* 
-------------------------------
3. TYPICAL API FLOW
-------------------------------
app.post("/submit", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  res.status(201).json({ message: "Data received", name });
});
*/

/* 
-------------------------------
4. SUMMARY
-------------------------------
1. req → Client request info (params, query, body, headers, etc.)
2. res → Server response methods to send data
3. res.send() → Sends any data type, ends response
4. res.json() → Sends JSON, commonly used in APIs
5. res.status() → Sets HTTP status code
6. Always send a response to prevent request hanging
7. Chain res.status() with res.send() or res.json() for proper HTTP responses
*/

/* 
-------------------------------
5. QUICK CHEAT SHEET
-------------------------------
GET parameter: req.params.id
Query string: req.query.q
Request body: req.body
Send string: res.send("text")
Send JSON: res.json({ key: "value" })
Set status: res.status(404).send("Not found")
*/
