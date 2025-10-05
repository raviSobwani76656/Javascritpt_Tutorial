/***************************************************************
 * JAVASCRIPT NOTES: toString()
 ***************************************************************/

/*
  1. What is toString()?
  --------------------------------
  - `toString()` is a built-in JavaScript method.
  - Converts a value to a string representation.
  - Available on almost all data types: numbers, arrays, objects, booleans, dates, etc.
  - Default behavior can be overridden in objects using a custom `toString()` method.
*/

/* Example: Number to string */
let num = 123;
console.log(num.toString()); // "123"
console.log(typeof num.toString()); // "string"

/* Example: Boolean to string */
let bool = true;
console.log(bool.toString()); // "true"
console.log(typeof bool.toString()); // "string"

/* Example: Array to string */
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
console.log(typeof arr.toString()); // "string"

/* Example: Date to string */
let date = new Date("2025-10-04T00:00:00Z");
console.log(date.toString());
// Output example: "Sat Oct 04 2025 05:30:00 GMT+0530 (India Standard Time)"

/* Example: Object to string */
let obj = { name: "Shubham", age: 25 };
console.log(obj.toString()); // "[object Object]"
/*
  - By default, objects return "[object Object]"
  - To get a more useful string, use JSON.stringify(obj)
*/
console.log(JSON.stringify(obj)); // '{"name":"Shubham","age":25}'

/*
  2. Number-specific usage: radix/base
  ------------------------------------
  - You can pass a base (2-36) to convert numbers to different numeral systems
*/
let n = 255;
console.log(n.toString(2)); // "11111111"  -> binary
console.log(n.toString(8)); // "377"       -> octal
console.log(n.toString(16)); // "ff"        -> hexadecimal

/*
  3. Custom toString() in objects
  --------------------------------
  - You can override toString() method to return a custom string representation
*/
let person = {
  name: "Shubham",
  age: 25,
  toString: function () {
    return `Person: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.toString()); // "Person: Shubham, Age: 25"

/*
  4. Key Points / Gotchas
  --------------------------------
  - null.toString()  -> Error! (Cannot read property 'toString' of null)
  - undefined.toString() -> Error! (Cannot read property 'toString' of undefined)
  - Always safe: String(value) or value?.toString()
  - Arrays: elements are joined by commas by default
  - Objects: default "[object Object]", override for useful string
  - Numbers: can convert to different bases (binary, octal, hex)
*/

/* 5. Quick Type Conversions using toString */
let a = 100;
let b = true;
let c = [1, 2, 3];
console.log(a.toString()); // "100"
console.log(b.toString()); // "true"
console.log(c.toString()); // "1,2,3"

/* 6. Using toString safely with null/undefined */
let x = null;
let y = undefined;
console.log(String(x)); // "null"
console.log(String(y)); // "undefined"
// or using optional chaining
// console.log(x?.toString()); // undefined
// console.log(y?.toString()); // undefined

/*
  7. Summary:
  --------------------------------
  - toString() converts a value to string.
  - Works on numbers, booleans, arrays, dates, objects (default: "[object Object]").
  - Can override in objects for custom behavior.
  - Numbers support radix/base conversion.
  - Use String(value) for safe conversion if value might be null/undefined.
*/
