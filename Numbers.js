const num = 18.77;

console.log(num);

const fixed_num = num.toFixed(14);

console.log(num.toFixed(0));

console.log(fixed_num);

const r = 3;

console.log(Number.isInteger(r));

console.log(Number.isFinite(3));

console.log(Number.isNaN(4));

let numbr = 100000000;

const numString = numbr.toLocaleString("en-IN");

console.log(typeof numString);

// ====================================================
// 📌 JavaScript Number Formatting: toFixed() vs toPrecision()
// ====================================================

// 🔸 toFixed(digits):
// Returns a string with a number formatted to exactly `digits` digits after the decimal.
// Commonly used for currency or consistent decimal formatting.

let price = 123.456;

// ✅ Examples of toFixed()
console.log(price.toFixed(0)); // "123"
console.log(price.toFixed(1)); // "123.5"
console.log(price.toFixed(2)); // "123.46"
console.log(price.toFixed(3)); // "123.456"
console.log(price.toFixed(4)); // "123.4560"
console.log((1.2345).toFixed(2)); // "1.23"
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
console.log((99.99).toFixed(1)); // "100.0"
console.log((5).toFixed(2)); // "5.00"
console.log((0.004).toFixed(3)); // "0.004"

// 🔸 toPrecision(digits):
// Returns a string with a number formatted to `digits` total significant digits.
// May use scientific notation if needed. Useful for scientific or precise numeric display.

let value = 123.456;

// ✅ Examples of toPrecision()
console.log(value.toPrecision(1)); // "1e+2"
console.log(value.toPrecision(2)); // "1.2e+2"
console.log(value.toPrecision(3)); // "123"
console.log(value.toPrecision(4)); // "123.5"
console.log(value.toPrecision(5)); // "123.46"
console.log((0.004567).toPrecision(1)); // "0.005"
console.log((0.004567).toPrecision(2)); // "0.0046"
console.log((0.004567).toPrecision(3)); // "0.00457"
console.log((0.004567).toPrecision(4)); // "0.004567"
console.log((98765.4321).toPrecision(3)); // "9.88e+4"

// ℹ️ Summary:
// - toFixed(n) → Controls decimal places only.
// - toPrecision(n) → Controls total number of significant digits.
// - Both return strings.
// - toPrecision can switch to scientific notation when needed.

// JavaScript Number Type Summary for Chef Claude
// Overview: The Number type represents integers (e.g., 42) and floating-point numbers (e.g., 3.14).
// - Used in Chef Claude for: Counting ingredients (e.g., ingredients.length), validating quantities (e.g., 2.5 cups).
// - Primitive (42) vs. Object (new Number(42)). Prefer primitives for efficiency.
// - Special values: NaN, Infinity, -Infinity.
// - Use typeof to check return types of methods.

// --- Number Prototype Methods (called on number instances, e.g., 42.toFixed(2)) ---

// 1. toFixed(digits): Formats number to fixed decimal places, returns string.
// Use: Display quantities (e.g., 2.5 -> "2.50" cups in recipes).
const num1 = 3.14159;
console.log(num1.toFixed(2)); // Output: "3.14"
console.log(typeof num1.toFixed(2)); // Output: "string"

// 2. toPrecision(precision): Formats to specified total digits, returns string.
// Use: Precise measurements (e.g., 123.456 -> "123.5").
const num2 = 123.456;
console.log(num2.toPrecision(4)); // Output: "123.5"
console.log(typeof num2.toPrecision(4)); // Output: "string"

// 3. toString([radix]): Converts number to string, optionally in a base (e.g., 16 for hex).
// Use: Display numbers or prepare API payloads.
const num3 = 42;
console.log(num3.toString()); // Output: "42"
console.log(num3.toString(16)); // Output: "2a" (hexadecimal)
console.log(typeof num3.toString()); // Output: "string"

// 4. toExponential(fractionDigits): Converts to exponential notation, returns string.
// Use: Format large/small quantities (e.g., scientific measurements, rare in Chef Claude).
const num4 = 1234.56;
console.log(num4.toExponential(2)); // Output: "1.23e+3"
console.log(typeof num4.toExponential(2)); // Output: "string"

// 5. valueOf(): Returns primitive number from Number object.
// Use: Rarely needed (use primitives), but ensures number type.
const num5 = new Number(42);
console.log(num5.valueOf()); // Output: 42
console.log(typeof num5.valueOf()); // Output: "number"

// --- Static Number Methods (called on Number constructor, e.g., Number.isNaN()) ---

// 6. Number.isNaN(value): Checks if value is NaN (stricter than global isNaN).
// Use: Validate numerical inputs (e.g., ensure quantity isn’t NaN).
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(42)); // Output: false
console.log(typeof Number.isNaN(NaN)); // Output: "boolean"

// 7. Number.isFinite(value): Checks if value is a finite number (not Infinity/NaN).
// Use: Ensure valid quantities (e.g., recipe servings).
console.log(Number.isFinite(42)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false
console.log(typeof Number.isFinite(42)); // Output: "boolean"

// 8. Number.isInteger(value): Checks if value is an integer.
// Use: Validate whole-number inputs (e.g., number of servings).
console.log(Number.isInteger(42)); // Output: true
console.log(Number.isInteger(3.14)); // Output: false
console.log(typeof Number.isInteger(42)); // Output: "boolean"

// 9. Number.parseInt(string, [radix]): Parses string to integer.
// Use: Convert string inputs (e.g., "4" servings) to numbers.
console.log(Number.parseInt("42")); // Output: 42
console.log(Number.parseInt("42px")); // Output: 42
console.log(typeof Number.parseInt("42")); // Output: "number"

// 10. Number.parseFloat(string): Parses string to floating-point number.
// Use: Parse decimal inputs (e.g., "2.5" cups).
console.log(Number.parseFloat("3.14")); // Output: 3.14
console.log(Number.parseFloat("3.14px")); // Output: 3.14
console.log(typeof Number.parseFloat("3.14")); // Output: "number"

// --- Number Properties (static, accessed via Number constructor) ---

// 11. Number.MAX_VALUE: Largest representable number (~1.79e+308).
// Use: Check for overflow in calculations.
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(typeof Number.MAX_VALUE); // Output: "number"

// 12. Number.MIN_VALUE: Smallest positive number (~5e-324).
// Use: Handle very small quantities.
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(typeof Number.MIN_VALUE); // Output: "number"

// 13. Number.NaN: Represents NaN.
// Use: Identify invalid calculations.
console.log(Number.NaN); // Output: NaN
console.log(typeof Number.NaN); // Output: "number"

// 14. Number.POSITIVE_INFINITY: Represents Infinity.
// Use: Handle edge cases in calculations.
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(typeof Number.POSITIVE_INFINITY); // Output: "number"

// 15. Number.NEGATIVE_INFINITY: Represents -Infinity.
// Use: Handle negative edge cases.
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
console.log(typeof Number.NEGATIVE_INFINITY); // Output: "number"

// --- Application in Chef Claude ---
// Example: Validate quantity in IngredientInput.jsx
// - Use Number.parseFloat to parse quantity input (e.g., "2.5" -> 2.5).
// - Use Number.isFinite to ensure valid number.
// - Use toFixed(2) to display quantities (e.g., 2.5 -> "2.50").
// See IngredientInput.jsx for implementation.
