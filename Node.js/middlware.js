/*
===============================
MIDDLEWARE IN NODE.JS / EXPRESS
===============================

Middleware functions are functions that have access to:
1. req (request object)
2. res (response object)
3. next() function

They are executed **in the order they are defined** in the application.
Middleware can:
- Execute code
- Modify req and res objects
- End the request-response cycle
- Call next() to pass control to the next middleware

*/

/* 
-------------------------------
1. TYPES OF MIDDLEWARE
-------------------------------

1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware
*/

/* 
1. Application-level middleware
-------------------------------
- Defined using app.use() or app.METHOD()
- Executes for every request or for a specific route
*/

const express = require("express");
const app = express();

// Example: Middleware that logs every request
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to next middleware/route
});

// Route
app.get("/", (req, res) => {
  res.send("Hello from middleware example!");
});

/* 
2. Router-level middleware
-------------------------------
- Used with express.Router()
- Middleware specific to a router
*/

const router = express.Router();

// Middleware for router
router.use((req, res, next) => {
  console.log("Router middleware triggered");
  next();
});

// Route in router
router.get("/user", (req, res) => {
  res.send("User route accessed");
});

// Use router in app
app.use("/api", router);

/* 
3. Error-handling middleware
-------------------------------
- Middleware with 4 parameters: (err, req, res, next)
- Used to catch errors
*/

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

/* 
4. Built-in middleware
-------------------------------
- Express has built-in middleware like:
  1. express.json() → Parse JSON request body
  2. express.urlencoded() → Parse URL-encoded data
*/

app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses form data

/* 
5. Third-party middleware
-------------------------------
- Examples: morgan, cors, helmet
- Install via npm and use with app.use()
*/

// Example: using morgan for logging
// npm install morgan
const morgan = require("morgan");
app.use(morgan("dev"));

/* 
-------------------------------
6. EXECUTION FLOW
-------------------------------
1. Client sends request
2. Application-level middleware runs
3. Router-level middleware runs (if route matches)
4. Route handler executes
5. Error-handling middleware executes if there is an error
*/

/* 
-------------------------------
7. SUMMARY
-------------------------------
- Middleware = functions that process requests before sending response
- Always call next() unless ending the request-response cycle
- Types: application-level, router-level, error-handling, built-in, third-party
- Can modify req and res objects
- Use middleware for authentication, logging, error handling, parsing request data, etc.
*/
