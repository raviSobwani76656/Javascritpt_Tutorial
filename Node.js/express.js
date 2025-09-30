/*
===============================
EXPRESS.JS NOTES
===============================

Express.js is a **minimal and flexible Node.js web framework**.
It provides robust features for building web and mobile applications:
- Routing
- Middleware support
- HTTP utilities
- Easy handling of requests and responses

*/

/* 
-------------------------------
1. INSTALLING EXPRESS
-------------------------------
1. Initialize npm project:
   npm init -y

2. Install Express:
   npm install express
*/

/* 
-------------------------------
2. IMPORT AND CREATE APP
-------------------------------
*/

const express = require("express");
const app = express(); // Create an instance of Express

/* 
-------------------------------
3. BASIC ROUTING
-------------------------------
*/

// GET request
app.get("/", (req, res) => {
  res.send("Hello from Express GET route");
});

// POST request
app.post("/submit", (req, res) => {
  res.send("Data submitted successfully");
});

// PUT request
app.put("/update", (req, res) => {
  res.send("Data updated successfully");
});

// DELETE request
app.delete("/delete", (req, res) => {
  res.send("Data deleted successfully");
});

/* 
-------------------------------
4. ROUTE PARAMETERS
-------------------------------
*/

app.get("/user/:id", (req, res) => {
  const userId = req.params.id; // Access route parameter
  res.send(`User ID: ${userId}`);
});

/* 
-------------------------------
5. QUERY PARAMETERS
-------------------------------
*/

app.get("/search", (req, res) => {
  const query = req.query.q; // Access query parameter ?q=value
  res.send(`Search query: ${query}`);
});

/* 
-------------------------------
6. MIDDLEWARE IN EXPRESS
-------------------------------
- Middleware functions have access to req, res, and next()
- Can execute code, modify req/res, end response, or call next()

// Example: logging middleware
*/

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to next middleware/route
});

/* 
-------------------------------
7. BUILT-IN MIDDLEWARE
-------------------------------
- express.json() → Parse JSON request bodies
- express.urlencoded() → Parse URL-encoded request bodies
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 
-------------------------------
8. ROUTER-LEVEL MIDDLEWARE
-------------------------------
*/

const router = express.Router();

router.use((req, res, next) => {
  console.log("Router-level middleware triggered");
  next();
});

router.get("/profile", (req, res) => {
  res.send("Profile page in router");
});

app.use("/api", router);

/* 
-------------------------------
9. ERROR-HANDLING MIDDLEWARE
-------------------------------
- Middleware with 4 parameters: (err, req, res, next)
*/

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

/* 
-------------------------------
10. STATIC FILES
-------------------------------
- Serve static files like HTML, CSS, JS, images
*/

app.use(express.static("public")); // Serve files from 'public' folder

/* 
-------------------------------
11. START EXPRESS SERVER
-------------------------------
*/

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});

/* 
-------------------------------
12. KEY FEATURES OF EXPRESS
-------------------------------
1. Routing: Handles HTTP methods and URLs.
2. Middleware: Functions executed during request processing.
3. Request & Response: Easy access and manipulation.
4. Template engines support: e.g., Pug, EJS, Handlebars.
5. Static file serving: CSS, JS, images.
6. Lightweight & fast: Minimal overhead compared to other frameworks.
*/

/* 
-------------------------------
13. BEST PRACTICES
-------------------------------
1. Use middleware for logging, authentication, error handling.
2. Keep routes organized using express.Router().
3. Avoid blocking operations (use async/await or callbacks).
4. Separate app configuration, routes, and middleware into different files.
5. Handle errors using centralized error-handling middleware.
*/
