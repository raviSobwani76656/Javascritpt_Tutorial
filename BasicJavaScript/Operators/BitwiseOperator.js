/*
===========================================
🔥 JAVASCRIPT BITWISE OPERATORS NOTES
===========================================
*/

/*
1️⃣ DEFINITION
-------------------------------------------
- Bitwise operators operate **on the binary representation** of integers.
- They convert numbers to **32-bit signed integers**, perform the operation, and return a result.
*/

/* ===========================================
2️⃣ BITWISE AND (&)
------------------------------------------- */
let a = 5; // 0101 in binary
let b = 3; // 0011 in binary
console.log(a & b); // 1 → 0001 (only bits set in both numbers)

/* ===========================================
3️⃣ BITWISE OR (|)
------------------------------------------- */
console.log(a | b); // 7 → 0111 (bits set in either number)

/* ===========================================
4️⃣ BITWISE XOR (^)
------------------------------------------- */
console.log(a ^ b); // 6 → 0110 (bits set in one number but not both)

/* ===========================================
5️⃣ BITWISE NOT (~)
------------------------------------------- */
console.log(~a); // -6
/*
- Works as -(x + 1)
- 5 → 0000 0000 0000 0101
- ~5 → 1111 1111 1111 1010 → -6 in 32-bit signed integer
*/

/* ===========================================
6️⃣ LEFT SHIFT (<<)
------------------------------------------- */
let c = 2; // 0010
console.log(c << 1); // 4 → 0100 (shift bits left by 1, multiply by 2)
console.log(c << 2); // 8 → 1000

/* ===========================================
7️⃣ SIGNED RIGHT SHIFT (>>)
------------------------------------------- */
let d = 8; // 1000
console.log(d >> 1); // 4 → 0100 (divide by 2)
console.log(d >> 2); // 2 → 0010

/* ===========================================
8️⃣ UNSIGNED RIGHT SHIFT (>>>)
------------------------------------------- */
let e = -8;
console.log(e >> 1); // -4 → keeps the sign bit
console.log(e >>> 1); // 2147483644 → treats as unsigned 32-bit integer

/* ===========================================
9️⃣ EXAMPLES IN REAL USE CASES
------------------------------------------- */
// Example 1: Check if a number is even
let num = 10;
console.log((num & 1) === 0); // true → even

// Example 2: Swap two numbers without temp variable
let x = 5,
  y = 3;
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(x, y); // 3 5

// Example 3: Masking bits
let flags = 0b1101;
let mask = 0b0100;
console.log(flags & mask); // 0100 → checks if third bit is set

/* ===========================================
🔟 KEY POINTS
-------------------------------------------
1. Operates on **binary representation** of numbers.
2. Convert numbers to 32-bit signed integers before operation.
3. Common operators:
   &  → AND
   |  → OR
   ^  → XOR
   ~  → NOT
   << → Left Shift
   >> → Signed Right Shift
   >>> → Unsigned Right Shift
4. Useful for **flags, masks, low-level operations, and performance tricks**.
*/
