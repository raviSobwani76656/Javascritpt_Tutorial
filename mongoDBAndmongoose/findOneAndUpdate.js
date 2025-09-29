// ================================
// MONGOOSE: findOneAndUpdate
// ================================

// In Mongoose, findOneAndUpdate is used to find a single document matching a condition
// and update it in a single operation. It can return either the old document or the updated one
// depending on options.

// Syntax:
// Model.findOneAndUpdate(filter, update, options, callback);

// ================================
// Example in Mongoose
// ================================

const mongoose = require("mongoose");
const User = require("./models/User"); // assuming you have a User model

async function updateUser() {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: "abc@example.com" }, // filter: find user with this email
      { $set: { name: "Shubham", age: 30 } }, // update: set new name and age
      { new: true, upsert: false, runValidators: true } // options
    );
    console.log("Updated User:", updatedUser);
  } catch (error) {
    console.error(error);
  }
}

// ================================
// Important Options in Mongoose
// ================================

// new: true            -> return the updated document instead of the old one
// upsert: true         -> create a new document if none is found
// runValidators: true  -> apply schema validation on the update
// lean: true           -> return a plain JS object instead of Mongoose document

// ================================
// Equivalent in MongoDB
// ================================

// In MongoDB shell or driver, the equivalent method is also called findOneAndUpdate

/*
db.collection.findOneAndUpdate(
  <filter>,
  <update>,
  <options>
)
*/

async function updateUserMongoDB(db) {
  const result = await db.collection("users").findOneAndUpdate(
    { email: "abc@example.com" }, // filter
    { $set: { name: "Shubham", age: 30 } }, // update
    { returnDocument: "after", upsert: false } // options
  );
  console.log("Updated User in MongoDB:", result);
}

// ================================
// Differences between Mongoose & MongoDB
// ================================

// 1. Mongoose supports schema validation, middleware (pre/post hooks), and simpler options.
// 2. MongoDB driver does not enforce schema validation unless defined in DB.
// 3. Mongoose option 'new: true' is equivalent to MongoDB option 'returnDocument: "after"'.
// 4. Both support atomic update operators like $set, $inc, $push, etc.

// ================================
// Why use findOneAndUpdate?
// ================================

// - Efficient: single operation instead of separate find + update
// - Atomic: prevents race conditions
// - Flexible: supports MongoDB update operators
