/********************************************************************
 *                          JSON Notes
 * ------------------------------------------------------------------
 * This file contains detailed explanations and examples of JSON
 * usage in JavaScript, Express (res.json), Fetch API, and deep copy.
 ********************************************************************/

/**
 * ----------------------------
 * 1️⃣ What is JSON?
 * ----------------------------
 * JSON (JavaScript Object Notation) is a lightweight data format
 * used to exchange data between server and client.
 * It is text-based, human-readable, and language-independent.
 * JSON looks like JavaScript objects but has stricter rules.
 *
 * Valid JSON types: string, number, boolean, null, object, array
 * Invalid types: functions, undefined, symbols, circular references
 */

/**
 * Example JSON object
 */
const userJSONExample = {
  name: "Ravi",
  age: 25,
  skills: ["JavaScript", "Node.js"],
  address: {
    city: "Kota",
    state: "Rajasthan",
  },
};

/**
 * ----------------------------
 * 2️⃣ JSON.stringify()
 * ----------------------------
 * Converts a JavaScript object into a JSON string.
 * Used when sending data to server or storing as text.
 */
const userObj = { name: "Ravi", age: 25 };
const jsonString = JSON.stringify(userObj);
console.log("JSON.stringify() Example:", jsonString);
// Output: '{"name":"Ravi","age":25}'

/**
 * ----------------------------
 * 3️⃣ JSON.parse()
 * ----------------------------
 * Converts a JSON string into a JavaScript object.
 * Used when receiving data from server.
 */
const receivedString = '{"name":"Ravi","age":25}';
const parsedObject = JSON.parse(receivedString);
console.log("JSON.parse() Example:", parsedObject.name); // Output: Ravi

/**
 * ----------------------------
 * 4️⃣ Using JSON in Deep Copy
 * ----------------------------
 * JSON.stringify + JSON.parse can be used to create a deep copy
 * of an object (nested objects included).
 */
let user = {
  name: "Ravi",
  address: { city: "Kota", state: "Rajasthan" },
};

// Deep copy using JSON
let deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = "Delhi";

console.log("Original object:", user.address.city); // Kota ✅
console.log("Deep copied object:", deepCopy.address.city); // Delhi ✅

/**
 * ----------------------------
 * 5️⃣ Limitations of JSON deep copy
 * ----------------------------
 * JSON cannot handle:
 *  - undefined
 *  - functions
 *  - Symbols
 *  - Date objects (become strings)
 *  - RegExp objects
 *  - Map / Set
 *  - Circular references
 */
const objWithFunction = {
  date: new Date(),
  greet: function () {
    console.log("Hi");
  },
};

const deepCopyFail = JSON.parse(JSON.stringify(objWithFunction));
console.log(deepCopyFail.date); // string
console.log(deepCopyFail.greet); // undefined

/**
 * ----------------------------
 * 6️⃣ Alternatives for Deep Copy
 * ----------------------------
 */

// 1️⃣ structuredClone (modern JS)
const structuredCopy = structuredClone(user);
console.log("structuredClone Example:", structuredCopy);

// 2️⃣ Lodash cloneDeep (npm install lodash)
const _ = require("lodash");
const lodashCopy = _.cloneDeep(user);
console.log("Lodash cloneDeep Example:", lodashCopy);

/**
 * ----------------------------
 * 7️⃣ Server-side res.json() (Express)
 * ----------------------------
 * Express's res.json() method:
 *  - Converts JS object to JSON string using JSON.stringify()
 *  - Sets Content-Type header to application/json
 *  - Sends JSON data to client
 */
const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  const user = { name: "Ravi", age: 25 };
  res.json(user); // internally uses JSON.stringify()
});

app.listen(3000, () => console.log("Server running on port 3000"));

/**
 * ----------------------------
 * 8️⃣ Client-side fetch() + res.json()
 * ----------------------------
 * Fetch API receives JSON as string and converts it to JS object
 * using response.json() (internally calls JSON.parse())
 */
fetch("http://localhost:3000/user")
  .then((res) => res.json()) // Uses JSON.parse internally
  .then((data) => console.log("Fetched data:", data));

/**
 * ----------------------------
 * 9️⃣ Key Differences: Server vs Client
 * ----------------------------
 * Server (Express) res.json(): Object → JSON string → Sent
 * Client (Fetch) response.json(): JSON string → Object → JS
 *
 * Visual Flow:
 * [Server Object] --stringify--> [JSON String] --HTTP--> [Fetch]
 * --parse--> [Client Object]
 */

/**
 * ----------------------------
 * 10️⃣ Summary
 * ----------------------------
 * - JSON is used to exchange data between server and client
 * - JSON.stringify() converts JS object to string
 * - JSON.parse() converts JSON string to JS object
 * - res.json() (Express) uses stringify to send data
 * - res.json() (Fetch) uses parse to receive data
 * - JSON deep copy works but has limitations
 * - Use structuredClone or Lodash cloneDeep for robust deep copies
 */
