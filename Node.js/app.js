/*
===============================
EXPRESS.JS: APP OBJECT
===============================

In Express.js:
- `app` is an instance of the Express application.
- It represents your entire Express server.
- Through `app`, you define routes, middleware, settings, static files, and start the server.
*/

/* 
-------------------------------
1. CREATING AN EXPRESS APP
-------------------------------
*/

const express = require("express");
const app = express(); // Create an Express application instance

/* 
-------------------------------
2. ROUTING METHODS
-------------------------------
- Used to define endpoints for HTTP methods
*/

app.get("/", (req, res) => {
  res.send("Home Page"); // GET request
});

app.post("/submit", (req, res) => {
  res.json({ message: "Data submitted" }); // POST request
});

app.put("/update", (req, res) => {
  res.send("Data updated"); // PUT request
});

app.delete("/delete", (req, res) => {
  res.send("Data deleted"); // DELETE request
});

/* 
-------------------------------
3. ROUTE PARAMETERS AND QUERY
-------------------------------
*/

app.get("/user/:id", (req, res) => {
  const id = req.params.id; // Route parameter
  const query = req.query.q; // Query parameter
  res.send(`User ID: ${id}, Query: ${query}`);
});

/* 
-------------------------------
4. MIDDLEWARE WITH APP
-------------------------------
- app.use() attaches middleware globally or to a specific path
*/

app.use(express.json()); // Parse JSON bodies

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to next middleware or route
});

/* 
-------------------------------
5. APP SETTINGS
-------------------------------
- Configure app-level variables
*/

app.set("view engine", "ejs"); // Set template engine
app.set("port", 3000); // Set default port

// Retrieve settings
const port = app.get("port");

/* 
-------------------------------
6. STATIC FILES
-------------------------------
- Serve static assets from a folder
*/

app.use(express.static("public")); // Files in 'public' folder are accessible directly

/* 
-------------------------------
7. ERROR-HANDLING MIDDLEWARE
-------------------------------
- Middleware for catching errors
*/

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

/* 
-------------------------------
8. STARTING THE SERVER
-------------------------------
*/

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/* 
-------------------------------
9. SUMMARY
-------------------------------
1. `app` is the core Express application object.
2. Used for defining routes: app.get(), app.post(), app.put(), app.delete()
3. Used for middleware: app.use()
4. Used for app-level settings: app.set(), app.get()
5. Used for serving static files: app.use(express.static())
6. Starts the server: app.listen()
7. Everything in Express revolves around the `app` object.
*/
