/*
==========================
MongoDB Insert Operations
==========================

This file covers insertOne() and insertMany() methods in MongoDB.

1. insertOne()
---------------
- Used to insert a single document into a collection.
- If _id is not provided, MongoDB generates a unique _id automatically.
- Returns acknowledgment and the insertedId.
- Syntax:
    db.collection.insertOne(document, options)
*/

use myDatabase; // Switch to your database

// Example: Insert one document
db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com"
});

/*
Result:
{
  "acknowledged" : true,
  "insertedId" : ObjectId("652f1c3f6d1e8a3a7c123456")
}

Key Points:
- Inserts a single document
- Returns insertedId
- Stops on error if insertion fails
*/

/*
2. insertMany()
----------------
- Used to insert multiple documents at once.
- More efficient than using insertOne() in loops for bulk inserts.
- Returns acknowledgment and all insertedIds.
- Can set options like ordered: false to continue inserting even if some documents fail.
- Syntax:
    db.collection.insertMany([doc1, doc2, ...], options)
*/

// Example: Insert multiple documents
db.users.insertMany([
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 28, email: "charlie@example.com" },
  { name: "David", age: 35, email: "david@example.com" }
]);

/*
Result:
{
  "acknowledged" : true,
  "insertedIds" : {
    "0" : ObjectId("652f1d4f6d1e8a3a7c123457"),
    "1" : ObjectId("652f1d4f6d1e8a3a7c123458"),
    "2" : ObjectId("652f1d4f6d1e8a3a7c123459")
  }
}

Key Points:
- Inserts multiple documents efficiently
- Returns insertedIds
- ordered: false option allows insertion to continue on errors
*/

/*
3. Differences between insertOne and insertMany
------------------------------------------------
| Feature             | insertOne          | insertMany          |
|--------------------|------------------|-------------------|
| Number of documents | 1                 | Multiple (array)   |
| Return              | insertedId        | insertedIds        |
| Efficiency          | Less efficient    | More efficient     |
| Ordered option      | N/A               | Can set ordered    |
| Stop on error       | Throws immediately| Can continue       |
*/

/*
4. Node.js / Mongoose Example
--------------------------------
- Shows how to use insertOne (via create) and insertMany in Node.js
*/

const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// Create model
const User = mongoose.model('User', userSchema);

// Insert one document
const insertOneUser = async () => {
  const user = await User.create({ name: "Alice", age: 25, email: "alice@example.com" });
  console.log("Inserted One User ID:", user._id);
};

// Insert multiple documents
const insertManyUsers = async () => {
  const users = await User.insertMany([
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
  ]);
  console.log("Inserted Many User IDs:", users.map(u => u._id));
};

// Connect to MongoDB and run examples
mongoose.connect('mongodb://localhost:27017/myDatabase')
  .then(async () => {
    console.log("MongoDB connected");

    await insertOneUser();
    await insertManyUsers();

    mongoose.disconnect();
  })
  .catch(err => console.error(err));
