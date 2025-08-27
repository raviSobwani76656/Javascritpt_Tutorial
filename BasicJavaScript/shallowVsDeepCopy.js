/*
===========================
SHALLOW COPY vs DEEP COPY
===========================

Shallow Copy:
- Copies only the top-level properties of an object or array.
- Nested objects/arrays are copied by reference.
- Changes in nested structures affect the original.
- Common methods: spread operator, Object.assign(), slice(), concat()
*/

// Example of Shallow Copy
const original = { name: "John", address: { city: "NY" } };
const shallowCopy = { ...original }; // Shallow copy

shallowCopy.name = "Mike"; // Only top-level primitive changed
shallowCopy.address.city = "LA"; // Nested object changed → original affected

console.log(original); // { name: "John", address: { city: "LA" } }
console.log(shallowCopy); // { name: "Mike", address: { city: "LA" } }

/*
Deep Copy:
- Creates a fully independent copy, including nested objects/arrays.
- Changes in the copy do NOT affect the original.
- Common methods: JSON.parse(JSON.stringify()), structuredClone(), Lodash _.cloneDeep()
*/

// Example of Deep Copy
const original3 = { name: "John", address: { city: "NY" } };
const deepCopy = JSON.parse(JSON.stringify(original3)); // Deep copy

deepCopy.name = "Mike";
deepCopy.address.city = "LA";

console.log(original3.address.city); // NY → original unaffected
console.log(deepCopy.address.city); // LA → copy changed
