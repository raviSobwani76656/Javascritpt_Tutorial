/*
===========================================================================
MongoDB Notes - VS Code Ready
===========================================================================

1️⃣ What is MongoDB?
- MongoDB is a NoSQL database (non-relational)
- Stores data in JSON-like documents called BSON
- Schema-less: Each document can have different fields
- High performance, scalable, and flexible
- Good for modern web apps, real-time apps, and big data

2️⃣ Key MongoDB Terminology
- Database: Container for collections
- Collection: Like a table, contains documents
- Document: JSON-like object storing data
- Field: Key-value pair inside a document
- _id: Unique identifier automatically added to each document

===========================================================================
3️⃣ Creating a Database in MongoDB
===========================================================================

// Using Mongo Shell
use myDatabase           // Switch or create a database
db                       // Check current database
db.users.insertOne({     // Create a collection and insert a document
  name: "John",
  age: 30
});
show collections         // Check all collections
db.users.find().pretty() // View documents in a collection

===========================================================================
4️⃣ Inserting Multiple Documents
===========================================================================

db.users.insertMany([
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 28, email: "bob@example.com" },
  { name: "Charlie", age: 22, email: "charlie@example.com" }
]);

===========================================================================
5️⃣ Querying Documents
===========================================================================

// Find all documents
db.users.find().pretty()

// Find users older than 25
db.users.find({ age: { $gt: 25 } })

// Find users with specific name
db.users.find({ name: "Alice" })

===========================================================================
6️⃣ Updating Documents
===========================================================================

// Update a single document
db.users.updateOne(
  { name: "John" },
  { $set: { age: 31 } }
);

// Update multiple documents
db.users.updateMany(
  { age: { $lt: 28 } },
  { $set: { status: "young" } }
);

// Increment a numeric field
db.users.updateMany(
  {},
  { $inc: { age: 1 } }
);

===========================================================================
7️⃣ Deleting Documents
===========================================================================

// Delete one document
db.users.deleteOne({ name: "Alice" })

// Delete multiple documents
db.users.deleteMany({ age: { $lt: 25 } })

===========================================================================
8️⃣ Node.js Example: Creating DB, Collection & Inserting Document
===========================================================================

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017"; // MongoDB server
const client = new MongoClient(url);
const dbName = "myDatabase";

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);           // Create or use database
    const collection = db.collection("users"); // Create collection

    // Insert a document
    const insertResult = await collection.insertOne({ name: "John", age: 30 });
    console.log("Inserted document:", insertResult);

    // Find documents
    const findResult = await collection.find({}).toArray();
    console.log("Documents in collection:", findResult);

  } finally {
    await client.close();
  }
}

main().catch(console.error);

===========================================================================
9️⃣ Key Notes
===========================================================================
// - MongoDB is schema-less, flexible, and scalable
// - Database is created when a collection is created and a document is inserted
// - Use db.collection.insertOne or insertMany to add documents
// - Use db.collection.find() to query documents
// - Use updateOne, updateMany to update
// - Use deleteOne, deleteMany to delete
// - Node.js can interact with MongoDB using mongodb driver
// - For production, use connection URI, authentication, and indexes for performance
===========================================================================
