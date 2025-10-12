/**
 * 📘 THEORY: JAVASCRIPT ARRAYS
 *
 * ▶️ What is an Array?
 * An array is a special variable that can hold more than one value at a time.
 * It’s a list-like object used to store multiple values under a single variable.
 *
 * Arrays are **ordered**, **indexed starting from 0**, and can store:
 * - Numbers
 * - Strings
 * - Objects
 * - Even other arrays (multidimensional)
 *
 * -----------------------------------------------------------------------------
 * 🔹 1. WAYS TO CREATE AN ARRAY
 * -----------------------------------------------------------------------------
 */

// ✅ Method 1: Using square brackets []
const arr1 = [23, 4, 5, 33, 4];

// ✅ Method 2: Using Array constructor
const arr2 = new Array(34, 3, 4, 4, 5, 6, 45);

// ✅ Method 3: Using Array.of()
const arr3 = Array.of(1, 2, 3, 4, 8);

// ✅ Method 4: Using Array.from() to convert iterables
const str = "RaVi Sobwani";
console.log(Array.from(str));
// Output: ['R', 'a', 'V', 'i', ' ', 'S', 'o', 'b', 'w', 'a', 'n', 'i']

// ❌ Invalid from() usage — doesn't work with non-iterable objects
console.log(Array.from({ name: "Taciviai" })); // Output: []

console.log(arr1);
console.log(arr2);
console.log(arr3);

// ----------------------------------------------------------------------------
// 🔹 2. ACCESSING ARRAY ELEMENTS
// ----------------------------------------------------------------------------

console.log(arr2[4]); // Access value at index 4 → 5
console.log(arr3.at(4)); // Modern .at() method → 8

// ----------------------------------------------------------------------------
// 🔹 3. MODIFYING ARRAYS
// ----------------------------------------------------------------------------

// arr2.push(100);       // Adds 100 to the end
// arr2.pop();           // Removes last element
// arr2.shift();         // Removes first element
// arr2.unshift(999);    // Adds 999 to the beginning

// ----------------------------------------------------------------------------
// 🔹 4. NESTED ARRAYS (2D and 3D)
// ----------------------------------------------------------------------------

// ✅ 2D Array – Array of arrays
const nestedArray = [
  [2, 3, 53, 5],
  [34, 5, 35, 563, 5],
  [3, 5, 4, 6, 46],
];

console.log(nestedArray[2][4]); // 46 (3rd row, 5th column)
console.log(nestedArray[1][3]); // 563 (2nd row, 4th column)

// ✅ 3D Array – Array of arrays of arrays
const array2D = [
  [[3, 2, 1, 2, 2122]],
  [[1, 5, 34, 5, 34, 5]],
  [[2, 5, 3, 6, 35, 6, 3]],
];

console.log(array2D[0][0][4]); // 2122

const array3DD = [
  [2, 4, [34, 35, 3, 5, 6, 35, 5]],
  [[2, 3, 4, 3, 5, 5, 3]],
  [[34, 3, 6, 4, 64, 46, 6]],
];

console.log(array3DD[2][0][3]); // 4

// ----------------------------------------------------------------------------
// 🔹 5. MERGING ARRAYS
// ----------------------------------------------------------------------------

const a = [2, 4, 53, 43, 5, 5];
const b = [3523, 5, 6, 6, 44, 64];

// Method 1: Using concat()
const c = a.concat(b);
console.log(c);

// Method 2: Using spread operator
const d = [...a, ...b];
console.log(d);

// ----------------------------------------------------------------------------
// 🔹 6. FLATTENING ARRAYS
// ----------------------------------------------------------------------------

const y = [34, 4, 6, 45, [34, 3, 6, 35, 63, [3, 5, 345, 3]]];

// .flat(level) flattens nested arrays to the specified depth
console.log(y.flat(3));

// ----------------------------------------------------------------------------
// 🔹 7. 3x3 Example (Grid-style 2D array)
const array3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(array3x3[0][1]); // 2
console.log(array3x3[2][2]); // 9

// ----------------------------------------------------------------------------
// ✅ SUMMARY: Array Key Concepts
// ----------------------------------------------------------------------------
/**
 * 1. Arrays store multiple values in a single variable.
 * 2. Indexing starts at 0.
 * 3. You can use [], Array(), Array.of(), and Array.from() to create them.
 * 4. Arrays can be nested to form 2D or 3D arrays.
 * 5. Use methods like push(), pop(), shift(), unshift(), concat(), and flat().
 * 6. Access elements using arr[i] or arr[i][j] or arr[i][j][k] for nested arrays.
 * 7. Array.from() converts iterable objects (like strings) into arrays.
 */

const arr33 = [
  [
    // Layer 0
    [2, 4, 23, 2], // Row 0
    [23, 4, 63, 63, 6], // Row 1
  ],
  [
    // Layer 1
    [3, 53, 53, 5], // Row 0
    [5, 3, 35, 35, 35], // Row 1
  ],
];

console.log(arr33[0][0][1]);

const oo = [3, 52, 35, 25, 2];
const ii = [363, 6, 33, 6, 3, 6];

const cc = oo.concat(ii);

console.log(cc);



const array =[2,3,2,52,2,4,35,34,34,34]

const freq={}


for(let i=0; i<array.length;i++){

  let num= array[i]

  if(freq[num]){
    freq
  }
}