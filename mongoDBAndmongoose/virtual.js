/*
==========================
MONGOOSE VIRTUALS - NOTES
==========================

1. WHAT ARE VIRTUALS?
- Virtuals are **fields that are not persisted in MongoDB**.
- They are computed dynamically based on existing document data.
- Useful for derived values, convenience fields, or API responses without storing extra data.

2. SYNTAX:
schema.virtual("virtualName").get(function() {
    // 'this' refers to the current document
    return someComputationUsingThis;
});

3. EXAMPLE:

orderSchema.virtual("calculatedTotal").get(function() {
    Calculates total price of order items dynamically
    return this.orderItems.reduce(
        (acc, item) => acc + item.productQuantity * item.price,
        0
    );
});

4. ADVANTAGES:
- Keeps database normalized (no redundant storage).
- Always up-to-date: reflects changes in underlying data automatically.
- Can be included in API responses via toJSON/toObject options.
- Improves consistency: derived data matches actual document data.

5. USAGE WITH toJSON/toObject:
To include virtuals in API responses:
schema.set("toJSON", { virtuals: true });
schema.set("toObject", { virtuals: true });

6. CAUTIONS:
- Virtuals **cannot be used in MongoDB queries** because they are not stored in the database.
- Should be used only for **computed or derived fields**, not essential persisted data.

7. TYPICAL USE CASES:
- Calculated totals (e.g., order total, invoice total)
- Full name from firstName + lastName
- Formatted dates
- Any derived property you don’t want to store permanently

*/
