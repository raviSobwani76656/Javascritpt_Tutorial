// ===========================================================
// 📦 JavaScript Math Object — Complete Summary with Examples
// ===========================================================

// ✅ The Math object is built-in and provides mathematical constants and functions.
// ❗ You don't create a Math instance — use methods directly like: Math.round(x), Math.max(...), etc.

// ===========================================================
// 🔢 Rounding Methods
// ===========================================================

console.log(Math.round(4.6));  // 5   → Rounds to nearest integer
console.log(Math.ceil(4.2));   // 5   → Rounds UP to nearest integer
console.log(Math.floor(4.9));  // 4   → Rounds DOWN to nearest integer
console.log(Math.trunc(4.9));  // 4   → Removes decimal part (no rounding)

// ===========================================================
// 🎲 Random Number Generation
// ===========================================================

console.log(Math.random());  // Random number between 0 (inclusive) and 1 (exclusive)

// Example: Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// ===========================================================
// ➕ Absolute Value, Power, and Roots
// ===========================================================

console.log(Math.abs(-10));        // 10
console.log(Math.pow(2, 3));       // 8  → 2³
console.log(Math.sqrt(16));        // 4
console.log(Math.cbrt(27));        // 3  → Cube root

// ===========================================================
// 📈 Min and Max Values
// ===========================================================

console.log(Math.max(10, 50, 30)); // 50
console.log(Math.min(10, 50, 30)); // 10

// ✅ Using arrays with Math.max() and Math.min()
// ❗ These methods do NOT accept arrays directly — use spread syntax (...)

const numbers = [34, 3, 6, 4, 54, 363, 46, 3246, 234, 6];

console.log(Math.max(...numbers)); // 3246
console.log(Math.min(...numbers)); // 3

// ===========================================================
// 📐 Useful Constants
// ===========================================================

console.log(Math.PI);    // 3.141592653589793
console.log(Math.E);     // 2.718281828459045
console.log(Math.LN2);   // 0.6931471805599453
console.log(Math.LN10);  // 2.302585092994046

// ===========================================================
// 🔁 Logarithmic and Exponential Functions
// ===========================================================

console.log(Math.log(10));        // Natural log of 10
console.log(Math.log10(1000));    // Log base 10 of 1000 → 3
console.log(Math.exp(1));         // e^1 = 2.718...
console.log(Math.expm1(1));       // e^1 - 1

// ===========================================================
// 📉 Trigonometric Functions (in radians)
// ===========================================================

console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // ~1

// ✅ Convert degrees to radians
const deg = 90;
const rad = deg * (Math.PI / 180);
console.log(Math.sin(rad)); // 1

// ===========================================================
// 🧮 Rounding to Specific Decimal Places (Manual)
// ===========================================================

let num = 1.23456;
console.log(Math.round(num * 100) / 100); // 1.23  → Rounded to 2 decimal places

// ===========================================================
// 📊 Additional Math Utilities
// ===========================================================

console.log(Math.sign(-10)); // -1
console.log(Math.sign(0));   // 0
console.log(Math.sign(5));   // 1

console.log(Math.hypot(3, 4)); // 5 → √(3² + 4²) — Pythagoras

// ===========================================================
// ✅ Summary
// ===========================================================

// • Math object is globally available and does not require instantiation.
// • Use spread syntax (...) for arrays with Math.max() and Math.min().
// • Useful for rounding, power, roots, trigonometry, randomness, logs, etc.
// • Angles for trigonometry must be in radians (convert degrees using: deg * PI/180)
// • Useful constants: Math.PI, Math.E, Math.LN2, Math.LN10
// • Returns are always numbers, except for cases like Math.random() which needs conversion to range

