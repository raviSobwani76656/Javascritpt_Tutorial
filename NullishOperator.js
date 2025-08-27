/* ============================
   NULLISH COALESCING OPERATOR (??)
   Introduced in ES2020
=============================*/

/*
✅ What does it do?

- Provides a default value only when the left-hand value is null or undefined.
- Does NOT treat falsy values (0, "", false) as nullish.
- Safer than || when you want to keep valid falsy values.

SYNTAX:
let result = value ?? defaultValue;
*/

/* ✅ Basic Example */

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Output: Guest

let name = undefined;
let realName = name ?? "Anonymous";
console.log(realName); // Output: Anonymous

let country = "India";
let finalCountry = country ?? "Unknown";
console.log(finalCountry); // Output: India

/* ✅ Difference between || and ?? */

let count = 0;

let resultWithOr = count || 10;
console.log(resultWithOr); // Output: 10 (0 is falsy for ||)

let resultWithNullish = count ?? 10;
console.log(resultWithNullish); // Output: 0 (0 is not null/undefined)

/* ✅ Works only for null or undefined */

let value1 = null;
let value2 = undefined;
let value3 = false;
let value4 = "";

console.log(value1 ?? "Default"); // Default
console.log(value2 ?? "Default"); // Default
console.log(value3 ?? "Default"); // false
console.log(value4 ?? "Default"); // ""

/* ✅ Nested usage */

let user = {
  name: "Ravi",
  city: null,
  age: 0,
};

console.log(user.city ?? "City not provided"); // City not provided

const a = null;

console.log(a ?? 345);
