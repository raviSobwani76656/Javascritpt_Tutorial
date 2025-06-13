/* 🔥 COMPLETE TRUTHY & FALSY MASTER FILE 🔥 */

// ✅ WHAT IS TRUTHY AND FALSY?

// In JavaScript, every value automatically becomes either truthy or falsy
// when evaluated inside conditional statements (like IF).

// 🔥 FALSY VALUES (exactly 8 in modern JavaScript):

console.log(Boolean(false)); // Falsy
console.log(Boolean(0)); // Falsy
console.log(Boolean(-0)); // Falsy
console.log(Boolean(0n)); // Falsy (BigInt zero)
console.log(Boolean("")); // Falsy (empty string)
console.log(Boolean(null)); // Falsy
console.log(Boolean(undefined)); // Falsy
console.log(Boolean(NaN)); // Falsy

// 🔥 TRUTHY VALUES:
// Everything else that is NOT falsy is automatically truthy.

// ✅ Examples of Truthy:
console.log(Boolean(true)); // Truthy
console.log(Boolean(1)); // Truthy
console.log(Boolean(-1)); // Truthy
console.log(Boolean(42)); // Truthy
console.log(Boolean("hello")); // Truthy (non-empty string)
console.log(Boolean([])); // Truthy (empty array)
console.log(Boolean({})); // Truthy (empty object)
console.log(Boolean(function () {})); // Truthy (functions)
console.log(Boolean(BigInt(10))); // Truthy (non-zero BigInt)

// ✅ How IF statement works:

let value = "some string";

if (value) {
  console.log("IF block runs because value is truthy");
} else {
  console.log("ELSE block runs because value is falsy");
}

// ✅ Common pattern: checking for undefined / empty

let username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username missing"); // This will run because "" is falsy
}

/* 🔥 QUICK SUMMARY:

  Falsy Values (total 8):
  - false
  - 0
  - -0
  - 0n (BigInt zero)
  - ""
  - null
  - undefined
  - NaN

  Truthy Values:
  - Everything else
  - Any number except 0
  - Non-empty strings
  - Arrays (even empty ones)
  - Objects (even empty ones)
  - Functions
  - BigInt non-zero values
*/
