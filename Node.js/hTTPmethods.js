/*
===============================
HTTP METHODS NOTES
===============================

HTTP methods define the type of action a client wants to perform on a server resource.
Common HTTP methods include: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD.
*/

/* 
-------------------------------
1. GET
-------------------------------
- Purpose: Retrieve data from a server.
- Safe and idempotent (does not modify data, can be called multiple times safely).
- Parameters are often sent in the URL as query strings.

Example using Express:
*/
const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  // Retrieve users from database
  res.send("List of users");
});

/*
-------------------------------
2. POST
-------------------------------
- Purpose: Send data to the server to create a new resource.
- Not idempotent (calling multiple times may create multiple resources).
- Data is sent in the request body (JSON, form-data, etc.).

Example:
*/
app.use(express.json()); // Parse JSON request body

app.post("/users", (req, res) => {
  const newUser = req.body; // { name: "John", age: 30 }
  // Save newUser to database
  res.status(201).send(`User ${newUser.name} created successfully`);
});

/*
-------------------------------
3. PUT
-------------------------------
- Purpose: Update a resource completely (replace it).
- Idempotent (multiple identical requests produce the same result).
- Data sent in request body.

Example:
*/
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  // Replace existing user data with updatedData
  res.send(`User ${userId} updated successfully`);
});

/*
-------------------------------
4. PATCH
-------------------------------
- Purpose: Partially update a resource (only specific fields).
- Idempotent (applying same patch multiple times has same effect).

Example:
*/
app.patch("/users/:id", (req, res) => {
  const userId = req.params.id;
  const fieldsToUpdate = req.body;
  // Update only specified fields for the user
  res.send(`User ${userId} patched successfully`);
});

/*
-------------------------------
5. DELETE
-------------------------------
- Purpose: Remove a resource from the server.
- Idempotent (deleting same resource multiple times has same effect).

Example:
*/
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  // Delete user from database
  res.send(`User ${userId} deleted successfully`);
});

/*
-------------------------------
6. OPTIONS
-------------------------------
- Purpose: Describe the communication options for a resource.
- Often used in **CORS preflight requests** to check allowed HTTP methods.
- Does not return resource data.

Example:
*/
app.options("/users", (req, res) => {
  res.set("Allow", "GET,POST,PUT,PATCH,DELETE");
  res.send("Allowed HTTP methods sent in headers");
});

/*
-------------------------------
7. HEAD
-------------------------------
- Purpose: Same as GET but only returns **headers**, not the response body.
- Useful to check metadata, resource existence, or content type.

Example:
*/
app.head("/users", (req, res) => {
  res.set("Content-Type", "application/json");
  res.end(); // No response body
});

/*
-------------------------------
8. Summary of HTTP Methods
-------------------------------
| Method  | Purpose                  | Idempotent | Data Location     | Use Case                    |
|---------|-------------------------|------------|-----------------|-----------------------------|
| GET     | Retrieve resource       | Yes        | URL/Query params | Fetch data                  |
| POST    | Create new resource     | No         | Body             | Add new item                |
| PUT     | Replace resource        | Yes        | Body             | Full update                 |
| PATCH   | Partially update        | Yes        | Body             | Partial update              |
| DELETE  | Remove resource         | Yes        | URL              | Delete item                 |
| OPTIONS | Check allowed methods   | Yes        | None             | CORS preflight              |
| HEAD    | Get headers only        | Yes        | URL              | Check resource metadata     |
*/

/*
-------------------------------
9. Tips
-------------------------------
1. Always use appropriate status codes:
   - 200 OK → Successful GET, PUT, PATCH, DELETE
   - 201 Created → Successful POST
   - 204 No Content → Successful DELETE with no body
   - 400 Bad Request → Invalid request
   - 404 Not Found → Resource not found
2. GET requests should not modify data.
3. Use PUT for full updates, PATCH for partial updates.
4. DELETE should be idempotent.
*/
``;
