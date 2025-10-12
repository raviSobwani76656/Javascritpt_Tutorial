/********************************************************************
 *                        JAVASCRIPT OBJECTS
 * ------------------------------------------------------------------
 * This file contains detailed notes and examples covering all
 * important aspects of JavaScript objects.
 ********************************************************************/

/**
 * ----------------------------
 * 1️⃣ What is a JavaScript Object?
 * ----------------------------
 * A JavaScript object is a collection of key-value pairs.
 * Keys are strings or Symbols, values can be any data type:
 * numbers, strings, booleans, arrays, functions, or objects.
 * Objects are reference types.
 */

const user = {
  name: "Ravi",
  age: 25,
  skills: ["JavaScript", "React"],
  address: {
    city: "Kota",
    state: "Rajasthan",
  },
};

/**
 * ----------------------------
 * 2️⃣ Accessing Object Properties
 * ----------------------------
 */

// Dot notation
console.log(user.name); // Ravi
console.log(user.address.city); // Kota

// Bracket notation
console.log(user["age"]);
const key = "name";
console.log(user[key]); // Ravi

/**
 * ----------------------------
 * 3️⃣ Adding or Updating Properties
 * ----------------------------
 */
user.email = "ravi@example.com"; // Add
user.age = 26; // Update
console.log(user);

/**
 * ----------------------------
 * 4️⃣ Deleting Properties
 * ----------------------------
 */
delete user.skills;
console.log(user);

/**
 * ----------------------------
 * 5️⃣ Checking if Property Exists
 * ----------------------------
 */
console.log("name" in user); // true
console.log(user.hasOwnProperty("age")); // true

/**
 * ----------------------------
 * 6️⃣ Looping Over Objects
 * ----------------------------
 */

// 1. for...in loop
for (let key in user) {
  console.log(key, ":", user[key]);
}

// 2. Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

/**
 * ----------------------------
 * 7️⃣ Copying Objects
 * ----------------------------
 */

// Shallow Copy
const shallowCopy = { ...user };
shallowCopy.name = "Rahul";
console.log(user.name); // Ravi ✅
console.log(shallowCopy.name); // Rahul

// Nested objects still share reference
shallowCopy.address.city = "Delhi";
console.log(user.address.city); // Delhi ⚠️

/**
 * Deep Copy using JSON
 */
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "Mumbai";
console.log(user.address.city); // Delhi ✅
console.log(deepCopy.address.city); // Mumbai ✅

/**
 * ----------------------------
 * 8️⃣ Comparing Objects
 * ----------------------------
 */
const obj1 = { name: "Ravi", age: 25 };
const obj2 = { name: "Ravi", age: 25 };

console.log(obj1 === obj2); // false
const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(isEqual); // true (order-sensitive)

let objA = {
  a: 34,
  b: 45,
};

let objB = {
  a: 34,
  b: 45,
};

const json1 = JSON.stringify(obj1);

const json2 = JSON.stringify(obj2);

const equal = json1 === json2;

console.log(equal);

/**
 * ----------------------------
 * 9️⃣ Nested Objects Example
 * ----------------------------
 */
const product = {
  name: "Laptop",
  specs: {
    cpu: "i7",
    ram: "16GB",
    storage: {
      type: "SSD",
      size: "512GB",
    },
  },
};

console.log(product.specs.cpu); // i7
console.log(product.specs.storage.type); // SSD

/**
 * ----------------------------
 * 1️⃣0️⃣ Object Methods (Functions inside objects)
 * ----------------------------
 */
const calculator = {
  a: 5,
  b: 3,
  sum() {
    return this.a + this.b;
  },
  multiply: function () {
    return this.a * this.b;
  },
};

console.log(calculator.sum()); // 8
console.log(calculator.multiply()); // 15

/**
 * ----------------------------
 * 1️⃣1️⃣ Object Destructuring
 * ----------------------------
 */
const { name, age } = user;
console.log(name, age); // Ravi 26

const {
  address: { city },
} = user;
console.log(city); // Delhi

/**
 * ----------------------------
 * 1️⃣2️⃣ Merge Objects
 * ----------------------------
 */
const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };
const merged = { ...objA, ...objB }; // { a:1, b:3, c:4 }
console.log(merged);

/**
 * ----------------------------
 * 1️⃣3️⃣ Optional Chaining & Nullish Coalescing
 * ----------------------------
 */
console.log(user.address?.city); // Delhi
console.log(user.contact?.phone ?? "N/A"); // N/A

/**
 * ----------------------------
 * 1️⃣4️⃣ Summary Table
 * ----------------------------
 * Concept        | Example                     | Notes
 * ---------------|---------------------------- |---------------------------------
 * Create Object  | const obj = {a:1}           | Key-value pairs
 * Access         | obj.a / obj["a"]             | Dot or bracket notation
 * Add/Update     | obj.b=2                      | Simple assignment
 * Delete         | delete obj.a                 | Removes property
 * Check          | "a" in obj / obj.hasOwnProperty("a") | true/false
 * Loop           | for..in / Object.keys()      | Iterate properties
 * Shallow Copy   | { ...obj }                   | Only top-level copy
 * Deep Copy      | JSON.parse(JSON.stringify(obj)) | Full nested copy
 * Compare        | JSON.stringify(a)===JSON.stringify(b) | Order-sensitive
 * Nested         | obj.nested.key               | Access inner objects
 * Methods        | obj.func = ()=>{}            | Functions inside objects
 * Destructuring  | const {a} = obj              | Extract variables
 * Merge          | {...obj1,...obj2}            | Later keys overwrite
 * Optional Chain | obj?.nested?.key ?? default  | Safe access
 */
