/*
============================================================
📚 QUERYING DATA IN MONGODB – DETAILED NOTES
============================================================

1️⃣ INTRODUCTION
- MongoDB stores data in **documents** inside **collections**.
- To retrieve data, we use queries like `find()` and `findOne()`.
- Queries can include conditions, sorting, limiting, projections, and logical operators.
- MongoDB queries return a **cursor**, which is iterable. You can convert it to an array using `.toArray()` or use Mongoose methods in Node.js.

------------------------------------------------------------
2️⃣ BASIC FIND QUERIES

- Find all documents in a collection:
*/
db.users.find(); // Returns all documents in users collection

/*
- Find documents with a specific field value:
*/
db.users.find({ name: "Alice" });

/*
- Equivalent SQL: SELECT * FROM users WHERE name = 'Alice';
*/

/*
3️⃣ MULTIPLE CONDITIONS

- MongoDB default behavior is **AND** when multiple fields are provided:
*/
db.users.find({ name: "Alice", age: 25 });
// Finds users where name = "Alice" AND age = 25

/*
- Using OR condition with $or operator:
- $or expects an **array of condition objects**
*/
db.users.find({
  $or: [{ name: "Alice" }, { age: 30 }],
});
// Returns documents where name = "Alice" OR age = 30

/*
- Using explicit $and operator (optional):
*/
db.users.find({
  $and: [{ name: "Alice" }, { age: 25 }],
});
// Same as default AND behavior

/*
4️⃣ COMPARISON OPERATORS

- $eq  → equal to
- $ne  → not equal to
- $gt  → greater than
- $gte → greater than or equal
- $lt  → less than
- $lte → less than or equal
- $in  → value is in an array
- $nin → value is not in an array
*/

db.users.find({ age: { $gt: 25 } }); // age > 25
db.users.find({ age: { $gte: 25, $lte: 30 } }); // 25 <= age <= 30
db.users.find({ name: { $in: ["Alice", "Bob"] } }); // name = Alice OR Bob
db.users.find({ age: { $ne: 30 } }); // age != 30

/*
5️⃣ LOGICAL OPERATORS

- $and   → logical AND
- $or    → logical OR
- $not   → negates a condition
- $nor   → none of the conditions must match
- $expr  → allows aggregation expressions in queries
*/

db.users.find({ age: { $not: { $gt: 30 } } }); // age <= 30
db.users.find({
  $nor: [{ age: 25 }, { name: "Bob" }],
}); // age != 25 AND name != Bob

/*
6️⃣ PATTERN MATCHING / REGEX

- $regex → matches string patterns
- $options → i for case-insensitive, m for multiline

Examples:
*/
db.users.find({ name: { $regex: "^A" } }); // names starting with A
db.users.find({ name: { $regex: "alice", $options: "i" } }); // case-insensitive match

/*
7️⃣ SELECTING SPECIFIC FIELDS (PROJECTION)

- By default, find() returns all fields.
- Projection allows including or excluding specific fields.

- Include fields (set to 1):
*/
db.users.find({ name: "Alice" }, { name: 1, age: 1 });
// Returns only name and age

/*
- Exclude fields (set to 0):
*/
db.users.find({ name: "Alice" }, { _id: 0, email: 0 });
// Returns all fields except _id and email

/*
8️⃣ SORTING RESULTS

- sort() method sorts results by one or more fields
- 1 → ascending, -1 → descending
*/
db.users.find().sort({ age: 1 }); // Sort by age ascending
db.users.find().sort({ age: -1, name: 1 }); // age descending, then name ascending

/*
9️⃣ LIMIT AND SKIP

- limit() → number of documents to return
- skip()  → skip first N documents
*/

db.users.find().limit(5); // Returns first 5 documents
db.users.find().skip(5).limit(5); // Returns documents 6 to 10

/*
🔟 FIND ONE DOCUMENT

- findOne() returns the **first matching document**.
- Automatically returns a single document, not a cursor.
*/
db.users.findOne({ name: "Alice" });

/*
- Equivalent to find({ ... }).limit(1).next()
*/

/*
1️⃣1️⃣ COUNTING DOCUMENTS

- countDocuments() → count documents matching a query
- estimatedDocumentCount() → faster, counts all documents without filter
*/
db.users.countDocuments({ age: { $gte: 25 } });
db.users.estimatedDocumentCount();

/*
1️⃣2️⃣ USING INDEXES WITH QUERIES

- Indexes speed up queries when searching by indexed fields
- Example: If `age` has an index:
  db.users.find({ age: 25 }) → uses IXSCAN (fast)
- Compound indexes are used if query matches **prefix fields**
*/

/*
1️⃣3️⃣ SUMMARY

- find() → retrieves all documents matching query
- findOne() → retrieves first matching document
- $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin → comparison operators
- $and, $or, $nor, $not → logical operators
- $regex → string pattern matching
- Projection → include or exclude specific fields
- sort() → sort results
- limit(), skip() → control the number of returned documents
- countDocuments(), estimatedDocumentCount() → count documents
- Indexes → improve query performance
*/
/*
============================================================
📚 FINDING / QUERYING DATA IN MONGOOSE – DETAILED NOTES
============================================================

1️⃣ INTRODUCTION
- Mongoose is an ODM for MongoDB in Node.js.
- Queries in Mongoose are built on top of MongoDB queries.
- Common methods:
  - find(): returns multiple documents (as a Query object)
  - findOne(): returns first matching document
  - findById(): find document by _id
- Queries return a **Query object** → can be executed using .exec() or awaited in async/await.
- Supports chaining: sort(), limit(), skip(), select(), populate()
*/

const mongoose = require("mongoose");

// Sample User schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  city: String,
  hobbies: [String],
  friendIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

/*
2️⃣ FINDING ALL DOCUMENTS
*/
async function findAllUsers() {
  const users = await User.find(); // Returns all users
  console.log(users);
}

/*
3️⃣ FINDING DOCUMENTS WITH CONDITIONS
- Simple equality
*/
async function findUsersByName() {
  const users = await User.find({ name: "Alice" });
  console.log(users);
}

/*
- Multiple conditions (AND logic)
*/
async function findUsersByNameAndAge() {
  const users = await User.find({ name: "Alice", age: 25 });
  console.log(users);
}

/*
- OR logic using $or
- Must pass an array of condition objects
*/
async function findUsersByNameOrAge() {
  const users = await User.find({
    $or: [{ name: "Alice" }, { age: 30 }],
  });
  console.log(users);
}

/*
- Comparison operators:
  $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
*/
async function findUsersWithComparison() {
  const users = await User.find({ age: { $gte: 25, $lte: 30 } });
  console.log(users);

  const specificNames = await User.find({ name: { $in: ["Alice", "Bob"] } });
  console.log(specificNames);
}

/*
- Regex / pattern matching
*/
async function findUsersByPattern() {
  const users = await User.find({ name: { $regex: "^A", $options: "i" } }); // Starts with A, case-insensitive
  console.log(users);
}

/*
4️⃣ FIND ONE DOCUMENT
- Returns the first matching document
*/
async function findOneUser() {
  const user = await User.findOne({ age: 25 });
  console.log(user);
}

/*
5️⃣ FIND BY ID
- Shortcut to find document by _id
*/
async function findUserById(id) {
  const user = await User.findById(id);
  console.log(user);
}

/*
6️⃣ PROJECTION / SELECTING FIELDS
- Include specific fields
*/
async function findUsersWithProjection() {
  const users = await User.find({ age: { $gte: 25 } }).select("name age email"); // Only returns these fields
  console.log(users);
}

/*
- Exclude fields
*/
async function findUsersExcludingFields() {
  const users = await User.find({ age: { $gte: 25 } }).select(
    "-email -friendIds"
  ); // Excludes these fields
  console.log(users);
}

/*
7️⃣ SORTING RESULTS
- sort({ field: 1 }) → ascending
- sort({ field: -1 }) → descending
*/
async function findUsersWithSort() {
  const users = await User.find().sort({ age: -1, name: 1 }); // Age descending, name ascending
  console.log(users);
}

/*
8️⃣ LIMIT AND SKIP
- limit() → number of documents to return
- skip() → skip first N documents
*/
async function findUsersWithLimitSkip() {
  const users = await User.find().skip(5).limit(5); // Returns users 6-10
  console.log(users);
}

/*
9️⃣ POPULATE REFERENCES
- Replace ObjectId reference with actual document
*/
async function findUsersWithFriends() {
  const users = await User.find().populate("friendIds", "name age"); // Populates only name and age of friends
  console.log(users);
}

/*
10️⃣ USING lean() FOR PERFORMANCE
- Returns plain JS objects instead of Mongoose documents
- Faster for read-only queries
*/
async function findUsersLean() {
  const users = await User.find().lean();
  console.log(users);
}

/*
11️⃣ COUNTING DOCUMENTS
- countDocuments() → count documents matching query
*/
async function countUsersAbove25() {
  const count = await User.countDocuments({ age: { $gt: 25 } });
  console.log(count);
}

/*
12️⃣ USING INDEXES
- Queries using indexed fields are faster
- Compound indexes in schema can be used if query matches prefix fields
*/
