/**
 * =============================================
 * MongoDB / Mongoose find() Method Notes
 * =============================================
 *
 * 1. Purpose:
 *    - `find()` is used to retrieve documents from a collection.
 *    - In MongoDB shell, it returns a cursor.
 *    - In Mongoose, it returns a Promise that resolves to an array of documents.
 *
 * 2. Syntax (MongoDB shell):
 *    db.collection.find(query, projection)
 *    - query: filter criteria
 *    - projection (optional): select which fields to return
 *
 * 3. Basic Example:
 *    // Fetch all orders for a specific user
 *    db.orders.find({ userId: ObjectId("64f2a3c9d5e5f123abc45678") })
 *
 * 4. Projection Example:
 *    // Return only orderItems and totalAmount, exclude _id
 *    db.orders.find(
 *      { status: "pending" },
 *      { orderItems: 1, totalAmount: 1, _id: 0 }
 *    )
 *
 * 5. Operators:
 *    - $eq : equal
 *    - $ne : not equal
 *    - $gt : greater than
 *    - $gte: greater than or equal
 *    - $lt : less than
 *    - $lte: less than or equal
 *    - $in : value in array
 *    - $nin: value not in array
 *
 *    Example:
 *    db.orders.find({
 *      totalAmount: { $gt: 100 },
 *      status: { $ne: "cancelled" }
 *    })
 *
 * 6. Sorting & Limiting:
 *    db.orders.find({ userId: ObjectId("...") })
 *             .sort({ createdAt: -1 }) // descending
 *             .limit(5)                // return only 5 documents
 *
 * 7. Counting:
 *    db.orders.find({ status: "pending" }).count();
 *
 * =============================================
 * Mongoose find() Method Notes
 * =============================================
 *
 * 1. Basic syntax:
 */
const orders = await Order.find({ userId: "64f2a3c9d5e5f123abc45678" });
// Returns an array of orders (empty array [] if no match)

/**
 * 2. Projection in Mongoose:
 */
const ordersProjected = await Order.find(
  { status: "pending" },
  { orderItems: 1, totalAmount: 1, _id: 0 }
);

/**
 * 3. Sorting & Limiting:
 */
const latestOrders = await Order.find({ userId: "..." })
  .sort({ createdAt: -1 })
  .limit(10);

/**
 * 4. Using Query Operators:
 */
const filteredOrders = await Order.find({
  totalAmount: { $gt: 100 },
  status: { $in: ["pending", "shipped"] },
});

/**
 * 5. Populating References:
 */
const populatedOrders = await Order.find({ userId: "..." })
  .populate("userId", "name email")
  .populate("orderItems.productId", "name price");

/**
 * 6. Important Notes:
 *    - find() always returns an array (even if empty)
 *    - findOne() or findById() returns a single document (or null)
 *    - Logical operators:
 *       - $or: { $or: [{ status: "pending" }, { totalAmount: { $gt: 500 } }] }
 *       - $and: { $and: [{ status: "pending" }, { totalAmount: { $gt: 500 } }] }
 *    - Use array.length === 0 to check if no documents found
 */

/**
 * 7. Practical Example: Get all orders for a user, latest first, populated products
 */
const getAllOrders = async (userId) => {
  const orders = await Order.find({ userId })
    .sort({ createdAt: -1 })
    .populate("orderItems.productId", "name price");
  if (!orders || orders.length === 0) {
    return "No orders found";
  }
  return orders;
};
