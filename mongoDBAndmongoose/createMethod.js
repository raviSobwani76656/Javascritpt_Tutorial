/*
===========================
MONGOOSE: CREATE VS NEW + SAVE
===========================

In Mongoose, there are two main ways to create and save documents in MongoDB:

1️⃣ Model.create()
-----------------
- Syntax:
    const doc = await Model.create({ field1: value1, field2: value2 });

- Behavior:
    • Creates a new document instance internally.
    • Saves it immediately to the database.

- Pros:
    • Short and convenient.
    • Automatically persists to DB.

- Cons:
    • Less flexible for modifying before save.
    • Cannot easily run instance methods before saving.

- Example:
    const user = await User.create({ name: "Alice", email: "alice@example.com" });
    console.log(user);

--------------------------------------------------

2️⃣ new Model() + save()
-----------------------
- Syntax:
    const doc = new Model({ field1: value1, field2: value2 });
    await doc.save();

- Behavior:
    • Creates a document instance in memory (not saved yet).
    • Allows modifications, method calls, or pre-save hooks.
    • Save() persists it to the database.

- Pros:
    • Flexible; can modify or call methods before saving.
    • Works well with pre-save hooks.

- Cons:
    • Slightly longer code.
    • Must remember to call save().

- Example:
    const user = new User({ name: "Bob", email: "bob@example.com" });
    user.age = 30; // modify before saving
    await user.save();
    console.log(user);

--------------------------------------------------

