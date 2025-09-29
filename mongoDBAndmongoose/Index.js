/*
============================================================
📚 DETAILED NOTES ON INDEXES IN MONGODB
============================================================

1️⃣ WHAT IS AN INDEX?

- An **index** is a special data structure in MongoDB that stores a portion of a collection’s data in a **sorted order**.
- Purpose: To make queries faster, especially on **large collections**.
- Without an index:
    - MongoDB performs a **COLLSCAN** (collection scan) → reads every document until it finds matches.
    - This is slow for thousands or millions of documents.
- With an index:
    - MongoDB can perform an **IXSCAN** (index scan) → quickly jump to matching documents.
- Analogy: Index = **table of contents** in a book. Instead of reading every page, you jump directly to the page with the topic you want.

------------------------------------------------------------
2️⃣ WHY INDEX IS IMPORTANT

- Improves **query performance**:
    - `find`, `findOne`, `sort`, `distinct`, `countDocuments`
- Supports **unique constraints** (e.g., no duplicate emails)
- Speeds up **range queries** (e.g., `age > 25`)
- Enables **covered queries**:
    - A query where all the fields it needs are in the index → MongoDB doesn’t even need to read the full documents (faster).

------------------------------------------------------------
3️⃣ TYPES OF INDEXES

1. **Default `_id` index**
   - Every collection automatically has an index on `_id`.
   - Ensures uniqueness of `_id` field.

2. **Single-field index**
   - Index on a single field.
   - Syntax:
     ```js
     db.users.createIndex({ age: 1 }) // ascending
     db.users.createIndex({ age: -1 }) // descending
     db.books.createIndex({pageNo:1})
     ```
   - Use case: Queries that filter or sort by **age**.

3. **Compound index**
   - Index on **multiple fields**.
   - Syntax:
     ```js
     db.users.createIndex({ age: 1, city: -1 })
     ```
   - Rules:
     - Order matters (prefix rule).
     - Query can use index only if it includes **the first field(s) of the index**.

4. **Unique index**
   - Ensures no two documents have the same value in a field (or combination of fields if compound).
   - Syntax:
     ```js
     db.users.createIndex({ email: 1 }, { unique: true })
     db.users.createIndex({ email: 1, username: 1 }, { unique: true })
     ```

5. **Text index**
   - For **full-text search** on string fields.
   - Syntax:
     ```js
     db.posts.createIndex({ content: "text" })
     db.posts.find({ $text: { $search: "mongodb" } })
     ```

6. **Hashed index**
   - Useful for **sharding** and equality queries.
   - Syntax:
     ```js
     db.users.createIndex({ username: "hashed" })
     ```

7. **Geospatial index**
   - For **location queries** like `near`, `within`.
   - Syntax:
     ```js
     db.places.createIndex({ location: "2dsphere" })
     ```

------------------------------------------------------------
4️⃣ COMPOUND INDEX RULES

- If you create:
  ```js
  db.users.createIndex({ age: 1, city: 1, score: 1 })


  /*
============================================================
📚 DETAILED NOTES ON INDEXES & COMPOUND INDEXES IN MONGOOSE
============================================================

1️⃣ WHAT IS AN INDEX IN MONGOOSE?
- An index is a special data structure that stores field(s) in a sorted order.
- Purpose: Makes queries faster by allowing MongoDB to search efficiently.
- Without an index → MongoDB performs a collection scan (COLLSCAN), checking every document.
- With an index → MongoDB can perform an index scan (IXSCAN), jumping directly to relevant documents.
- Analogy: Like a "table of contents" in a book.

------------------------------------------------------------
2️⃣ WHY INDEX IS IMPORTANT
- Speeds up read queries: find, findOne, sort, distinct, countDocuments
- Allows **uniqueness enforcement** (e.g., email)
- Supports **range queries** (age > 25)
- Enables **covered queries**: when query fields exist in the index, MongoDB does not read full documents.

------------------------------------------------------------
3️⃣ TYPES OF INDEXES IN MONGOOSE

1. Default `_id` index
   - Every collection automatically has an `_id` index.
   - Ensures uniqueness.

2. Single-field index
   - Index on one field only.
   - Syntax: { age: 1 } → ascending, { age: -1 } → descending.

3. Compound index
   - Index on multiple fields together.
   - Useful when queries filter or sort on more than one field.

4. Unique index
   - Ensures no duplicate values in a field or combination of fields.
   - Can be applied to single or compound indexes.

5. Text, Hashed, Geospatial
   - Special indexes for full-text search, equality sharding, or location queries.

------------------------------------------------------------
4️⃣ HOW TO DEFINE INDEXES IN MONGOOSE

- Single-field index in schema:
*/

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number, index: true }, // Single-field index
  email: { type: String, unique: true }, // Unique single-field index
});

/*
- Compound index is defined using schema.index()
- Order matters (prefix rule):
  db.users.createIndex({ age: 1, city: 1 }) 
  - Queries on { age } ✅
  - Queries on { age, city } ✅
  - Queries on { city } ❌ (index cannot be fully used)
*/

userSchema.index({ age: 1, name: 1 }); // Compound index
userSchema.index({ email: 1, name: 1 }, { unique: true }); // Unique compound index

/*
- Text index example
- Useful for full-text search
*/
userSchema.index({ name: "text", email: "text" });

/*
- Auto-indexing in Mongoose
- By default, Mongoose builds indexes when app starts
- For production, you can disable and build manually for performance:
*/
const autoSchema = new mongoose.Schema({ field: String }, { autoIndex: false });
autoSchema.index({ field: 1 });

/*
- Manual index building:
*/
const User = mongoose.model("User", userSchema);
User.syncIndexes(); // Syncs schema indexes to DB

/*
5️⃣ CHECKING INDEX USAGE
- List all indexes in Mongoose:
*/
User.listIndexes().then(console.log);

/*
- Check if query uses index:
*/
User.find({ age: 25, name: "Alice" })
  .explain("executionStats")
  .then(console.log);

/*
6️⃣ EXAMPLE: REVIEWS COLLECTION WITH COMPOUND INDEX
- Suppose we have a Review schema where each user can only review a product once
*/

const ReviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
      minlength: [3, "Comment needs to be at least 3 character long"],
      maxLength: [500, "Comment cannot exceed more than 500 characters"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    helpfulVotes: {
      type: Number,
      default: 0,
    },
    verifiedPurchase: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Compound unique index ensures a user can only rev
