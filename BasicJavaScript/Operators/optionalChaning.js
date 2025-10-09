/*
===========================================
🔥 JAVASCRIPT OPTIONAL CHAINING (?.) NOTES
===========================================
*/

/*
1️⃣ DEFINITION
-------------------------------------------
- The optional chaining operator `?.` allows you to safely access **nested properties** of an object.
- If the object before `?.` is `null` or `undefined`, it **short-circuits** and returns `undefined` instead of throwing an error.
- Helps avoid runtime errors when accessing deep properties.
*/

/* ===========================================
2️⃣ NORMAL PROPERTY ACCESS
------------------------------------------- */
const obj1 = {};
console.log(obj1.profile); // undefined → property doesn't exist

const obj2 = null;
// console.log(obj2.profile); // ❌ Error: Cannot read property 'profile' of null

/*
- Normal access works fine if the object exists.
- Throws an error if the object is null or undefined.
*/

/* ===========================================
3️⃣ OPTIONAL CHAINING (?.)
------------------------------------------- */
const obj3 = {};
console.log(obj3?.profile); // undefined → safe access

const obj4 = null;
console.log(obj4?.profile); // undefined → safe, no error

/*
- The ?. operator **prevents errors** when accessing properties of null/undefined.
- Returns undefined instead of throwing.
*/

/* ===========================================
4️⃣ NESTED OBJECTS EXAMPLE
------------------------------------------- */
const user = {
  name: "Alice",
  profile: {
    age: 25,
  },
};

// Normal access
console.log(user.profile.age); // 25

// If profile may not exist
console.log(user.profile?.age); // 25 → safe if profile exists
console.log(user?.profile?.age); // 25 → safe if user exists too

// If profile doesn't exist
const user2 = { name: "Bob" };
console.log(user2.profile?.age); // undefined → safe, no error
// console.log(user2.profile.age); // ❌ Error: Cannot read property 'age' of undefined

/* ===========================================
5️⃣ FUNCTION CALLS WITH OPTIONAL CHAINING
------------------------------------------- */
const user3 = {
  greet: function () {
    return "Hello";
  },
};

console.log(user3.greet?.()); // "Hello" → safe
const user4 = {};
console.log(user4.greet?.()); // undefined → safe, no error

/* ===========================================
6️⃣ ARRAYS AND OPTIONAL CHAINING
------------------------------------------- */
const arr = [{ name: "Alice" }];
console.log(arr[0]?.name); // "Alice"
console.log(arr[1]?.name); // undefined → safe

/* ===========================================
7️⃣ KEY POINTS
-------------------------------------------
1. `obj?.prop` → safe access, returns undefined if obj is null/undefined.
2. Useful for **nested objects**, arrays, or functions that may not exist.
3. Prevents runtime errors like "Cannot read property 'x' of undefined".
4. Normal access (`obj.prop`) works only if object exists.
*/

/* ===========================================
8️⃣ QUICK COMPARISON
------------------------------------------- */
const obj5 = {};
console.log(obj5.prop); // undefined → normal access
console.log(obj5?.prop); // undefined → optional chaining

const obj6 = null;
console.log(obj6?.prop); // undefined → safe
// console.log(obj6.prop); // ❌ Error: Cannot read property 'prop' of null
