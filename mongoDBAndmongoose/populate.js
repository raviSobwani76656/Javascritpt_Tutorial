/*
==============================
MONGOOSE POPULATE NOTES
==============================

1. WHAT IS POPULATE?
-------------------
- `populate` is a Mongoose method used to **replace the specified paths in a document with documents from other collections**.
- It is commonly used for **referencing related documents**.
- Example: You have an Order collection with a reference to Product collection. `populate` lets you fetch full Product details while querying the Order.

2. BASIC USAGE
--------------
Assume you have these schemas:

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  price: Number,
});

const OrderSchema = new Schema({
  user: String,
  items: [{ product: { type: Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
});

const Product = mongoose.model('Product', ProductSchema);
const Order = mongoose.model('Order', OrderSchema);

Now, to fetch orders with product details:

Order.find()
  .populate('items.product') // replaces product ObjectId with actual Product document
  .exec((err, orders) => {
    console.log(orders);
  });

3. POPULATE MULTIPLE FIELDS
---------------------------
- You can populate multiple paths in a single query:

Order.find()
  .populate('items.product')
  .populate('user') // if user is referenced in schema
  .exec(...);

- OR use an array:

Order.find().populate([
  { path: 'items.product' },
  { path: 'user' }
]);

4. SELECT SPECIFIC FIELDS
-------------------------
- Sometimes you don’t need the entire document, just specific fields:

Order.find()
  .populate('items.product', 'name price') // only fetch name and price
  .exec(...);

5. NESTED POPULATE
------------------
- You can populate **nested documents** as well:

Order.find()
  .populate({
    path: 'items.product',
    populate: { path: 'category', select: 'name' } // nested populate
  });

6. FILTER POPULATED DOCUMENTS
-----------------------------
- You can apply match conditions to populate:

Order.find()
  .populate({
    path: 'items.product',
    match: { price: { $gt: 100 } }, // only include products with price > 100
    select: 'name price'
  });

7. POPULATE VS MANUAL JOIN
--------------------------
- `populate` is similar to SQL JOIN.
- Without populate, you would need to manually query related collections and merge data.

8. IMPORTANT NOTES
-----------------
- Always define `ref` in schema for the field you want to populate.
- `populate` only works on **ObjectId references**.
- Overusing populate in large collections can impact performance—use **lean()** when possible:

Order.find().populate('items.product').lean().exec();

- `populate` is chainable with `find()`, `findOne()`, `findById()`, etc.

9. ASYNC/AWAIT USAGE
--------------------
const orders = await Order.find()
  .populate('items.product')
  .exec();

console.log(orders);

10. POPULATE WITH VIRTUALS
--------------------------
- You can also use **virtual populate** if the reference is not stored in the document but exists logically.

Example:
UserSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'user',
});

const user = await User.findById(userId).populate('orders');

==============================
REFERENCE:
- https://mongoosejs.com/docs/populate.html
==============================
*/
