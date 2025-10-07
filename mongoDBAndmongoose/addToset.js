/****************************************************
 * MONGOOSE / MONGODB NOTES: $addToSet, $each, $in
 ****************************************************/

/*
  1. $addToSet
  ----------------
  - $addToSet is an update operator in MongoDB.
  - It adds a value to an array only if the value does not already exist.
  - It prevents duplicates automatically.
  - Works with both single value and multiple values (using $each).
*/

/* Example: $addToSet with single value */
const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

async function addSingleProduct(wishlistId, productId) {
  await Wishlist.updateOne(
    { _id: wishlistId }, // Find document
    { $addToSet: { products: productId } } // Add if not exists
  );
}

/* Example: $addToSet with multiple values using $each */
async function addMultipleProducts(wishlistId, productIds) {
  await Wishlist.updateOne(
    { _id: wishlistId },
    { $addToSet: { products: { $each: productIds } } } // Add multiple without duplicates
  );
}

/*
  2. $each
  ----------------
  - $each is used with $addToSet or $push to add multiple elements at once.
  - With $addToSet, $each adds all items that are not already present.
*/

/* Example with $each */
async function addProductsWithEach(wishlistId, productIds) {
  await Wishlist.updateOne(
    { _id: wishlistId },
    { $addToSet: { products: { $each: productIds } } }
  );
}

/*
  3. $in
  ----------------
  - $in is a query operator used to match any value in an array.
  - Often used in find queries to check if a field's value exists in a given array.
*/

/* Example: Using $in in find query */
async function findWishlistsWithProducts(productIds) {
  const wishlists = await Wishlist.find({
    products: { $in: productIds }, // Find all wishlists that contain any of the given product IDs
  });
  return wishlists;
}

/* Notes / Tips:
  - $addToSet is ideal when you want to avoid duplicates in arrays.
  - $each is required when adding multiple values at once.
  - $in is used in queries, not in updates, to filter documents that match any value in an array.
  - For objects, $addToSet checks full object equality.
*/

/* Advanced example: Combining $addToSet and $in */
async function addProductsIfNotExists(wishlistId, productIds) {
  // Suppose we want to add only products not already in the wishlist
  const wishlist = await Wishlist.findById(wishlistId);
  const newProducts = productIds.filter(
    (pid) => !wishlist.products.includes(pid) // Filter only non-existing products
  );

  await Wishlist.updateOne(
    { _id: wishlistId },
    { $addToSet: { products: { $each: newProducts } } }
  );
}

/*
  Summary:
  ----------------
  1. $addToSet -> Add unique values to array (no duplicates).
  2. $each -> Add multiple values at once.
  3. $in -> Query operator to check if a value exists in an array.
*/
