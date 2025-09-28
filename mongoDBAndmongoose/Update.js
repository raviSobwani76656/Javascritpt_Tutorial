/*
==============================
MongoDB & Mongoose Update Operations
==============================

This file contains:
- Theory (in comments)
- Actual code examples
- MongoDB native updates
- Mongoose updates with Node.js
*/

// =====================================================
// 1. MongoDB Update Operations
// =====================================================

// -----------------------------------------------------
// 1.1 updateOne()
// - Updates the first document that matches the filter.
// - Does NOT return the updated document.
// - Use $set to modify only specific fields.
db.employees.updateOne(
  { empId: 2 }, // filter: find employee with empId 2
  { $set: { name: "Kiddo" } } // update: set name to "Kiddo"
);

// -----------------------------------------------------
// 1.2 updateMany()
// - Updates all documents matching the filter.
// - Useful for bulk updates.
db.employees.updateMany(
  { dept: "Sales" }, // filter: all employees in Sales
  { $set: { status: "Active" } } // update: set status to Active
);

// -----------------------------------------------------
// 1.3 findOneAndUpdate()
// - Finds one document, updates it, and can return updated document.
// - Useful when you need the updated doc immediately.
db.employees.findOneAndUpdate(
  { empId: 2 }, // filter
  { $set: { name: "Kiddo" } }, // update
  { returnDocument: "after" } // options: "after" returns updated doc
);

// -----------------------------------------------------
// 1.4 Update Operators
// - $set: set a field
// - $unset: remove a field
// - $inc: increment/decrement numbers
// - $push: add element to array
// - $pull: remove element from array

db.employees.updateOne({ empId: 2 }, { $inc: { age: 1 } }); // increment age
db.employees.updateOne({ empId: 2 }, { $push: { hobbies: "swimming" } }); // add hobby
db.employees.updateOne({ empId: 2 }, { $pull: { hobbies: "swimming" } }); // remove hobby

// =====================================================
// 2. Mongoose Update Operations
// =====================================================

// Assuming User model is defined:
// const User = require('./models/User');

// -----------------------------------------------------
// 2.1 updateOne()
// - Updates the first document matching filter
// - Returns info about update, not the updated document
await User.updateOne(
  { email: "john@example.com" }, // filter: find user by email
  { $set: { name: "John Doe" } } // update: set name
);

// -----------------------------------------------------
// 2.2 updateMany()
// - Updates all documents matching filter
await User.updateMany(
  { active: false }, // filter: all inactive users
  { $set: { active: true } } // update: set active true
);

// -----------------------------------------------------
// 2.3 findOneAndUpdate()
// - Finds one document, updates it, returns the updated document
// - Options:
//   new: true -> return updated doc
//   runValidators: true -> validate against schema
const updatedUser = await User.findOneAndUpdate(
  { email: "john@example.com" }, // filter
  { $set: { age: 31 } }, // update
  { new: true, runValidators: true }
);
console.log(updatedUser);

// -----------------------------------------------------
// 2.4 Document instance update
// - Fetch document, modify, save
// - Triggers pre/post save middleware
const user = await User.findById(userId); // get user by ID
user.name = "Updated Name"; // modify field
user.age = 32;
await user.save(); // save changes

// -----------------------------------------------------
// 2.5 Array operations
// - $push to add element
// - $pull to remove element
await User.updateOne(
  { _id: userId },
  { $push: { hobbies: "reading" } } // add to array
);

await User.updateOne(
  { _id: userId },
  { $pull: { hobbies: "reading" } } // remove from array
);

/*
=====================================================
Key Notes / Tips
=====================================================
- MongoDB native methods are used in shell; Mongoose methods in Node.js.
- updateOne -> single document, updateMany -> multiple documents
- findOneAndUpdate -> returns updated document if needed
- Document.save() -> triggers validation and middleware
- Use $set for specific fields to avoid overwriting whole document
- Array updates: $push adds, $pull removes
- Mongoose adds schema validation, middleware, and async/await support
*/
