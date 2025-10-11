// =============================================================
// 🧠 JAVASCRIPT ARRAY-BASED INTERVIEW QUESTIONS — COMPLETE NOTES
// =============================================================

// =============================================================
// 🔹 1️⃣ FIND DUPLICATES IN AN ARRAY
// =============================================================

const nums = [1, 2, 3, 4, 3, 2, 5];

// ✅ Using filter and indexOf
const duplicates = nums.filter((item, index) => nums.indexOf(item) !== index);
console.log("Duplicates:", duplicates); // [3, 2]

// ✅ Using Set
const hasDuplicate = nums.length !== new Set(nums).size;
console.log("Contains Duplicates:", hasDuplicate); // true

// =============================================================
// 🔹 2️⃣ REMOVE DUPLICATES FROM AN ARRAY
// =============================================================

// ✅ Using Set
const unique = [...new Set(nums)];
console.log("Unique Elements:", unique); // [1, 2, 3, 4, 5]

// ✅ Using filter
const uniqueUsingFilter = nums.filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log("Unique (filter):", uniqueUsingFilter);

// =============================================================
// 🔹 3️⃣ REVERSE AN ARRAY WITHOUT USING reverse()
// =============================================================

const arr1 = [1, 2, 3, 4];
const reversed = [];
for (let i = arr1.length - 1; i >= 0; i--) {
  reversed.push(arr1[i]);
}
console.log("Reversed:", reversed); // [4, 3, 2, 1]

// =============================================================
// 🔹 4️⃣ FIND MAX AND MIN ELEMENT
// =============================================================

const numbers = [5, 1, 8, 3, 9];

// ✅ Using Math methods
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log("Max:", max, "Min:", min);

// ✅ Using reduce
const maxReduce = numbers.reduce((a, b) => (a > b ? a : b));
console.log("Max using reduce:", maxReduce);

// =============================================================
// 🔹 5️⃣ SUM OF ALL ELEMENTS
// =============================================================

const arr2 = [10, 20, 30, 40];
const sum = arr2.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum); // 100

// =============================================================
// 🔹 6️⃣ SECOND LARGEST NUMBER
// =============================================================

const arr3 = [10, 20, 30, 40, 30];
const uniqueNums = [...new Set(arr3)];
uniqueNums.sort((a, b) => b - a);
console.log("Second Largest:", uniqueNums[1]); // 30

// =============================================================
// 🔹 7️⃣ MERGE TWO ARRAYS & REMOVE DUPLICATES
// =============================================================

const a = [1, 2, 3];
const b = [3, 4, 5];
const mergedUnique = [...new Set([...a, ...b])];
console.log("Merged Unique:", mergedUnique); // [1, 2, 3, 4, 5]

// =============================================================
// 🔹 8️⃣ FLATTEN NESTED ARRAYS
// =============================================================

const nested = [1, [2, [3, [4, 5]]]];

// ✅ ES6 method
const flat1 = nested.flat(2);
console.log("Flat (depth 2):", flat1);

// ✅ Using recursion
function flatten(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
}
console.log("Flatten Recursive:", flatten(nested)); // [1, 2, 3, 4, 5]

// =============================================================
// 🔹 9️⃣ CHECK IF ARRAY IS SORTED
// =============================================================

const sortedArr = [1, 2, 3, 4, 5];
const isSorted = sortedArr.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
console.log("Is Sorted:", isSorted); // true

// =============================================================
// 🔹 🔟 ROTATE AN ARRAY (Right Rotation)
// =============================================================

const rotateArr = [1, 2, 3, 4, 5];
const k = 2;
const rotated = rotateArr.slice(-k).concat(rotateArr.slice(0, -k));
console.log("Rotated:", rotated); // [4, 5, 1, 2, 3]

// =============================================================
// 🔹 11️⃣ COUNT OCCURRENCES OF EACH ELEMENT
// =============================================================

const countArr = ["apple", "banana", "apple", "orange", "banana"];
const count = countArr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log("Counts:", count);
// { apple: 2, banana: 2, orange: 1 }

// =============================================================
// 🔹 12️⃣ FIND MISSING NUMBER (1 to n)
// =============================================================

const numArr = [1, 2, 3, 5];
const n = 5;
const missing = (n * (n + 1)) / 2 - numArr.reduce((a, b) => a + b, 0);
console.log("Missing Number:", missing); // 4

// =============================================================
// 🔹 13️⃣ FIND INTERSECTION OF TWO ARRAYS
// =============================================================

const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
const intersection = arrA.filter((num) => arrB.includes(num));
console.log("Intersection:", intersection); // [3, 4]

// =============================================================
// 🔹 14️⃣ REMOVE FALSY VALUES (false, 0, "", null, undefined, NaN)
// =============================================================

const messyArr = [0, "hello", false, 42, "", null, undefined, "JS"];
const cleanArr = messyArr.filter(Boolean);
console.log("Clean Array:", cleanArr); // ["hello", 42, "JS"]

// =============================================================
// 🔹 15️⃣ FIND COMMON ELEMENTS IN MULTIPLE ARRAYS
// =============================================================

const x = [1, 2, 3, 4];
const y = [2, 3, 5];
const z = [3, 4, 2];

const common = x.filter((val) => y.includes(val) && z.includes(val));
console.log("Common Elements:", common); // [2, 3]

// =============================================================
// 🔹 16️⃣ SHUFFLE AN ARRAY (Fisher–Yates Algorithm)
// =============================================================

const shuffleArr = [1, 2, 3, 4, 5];
for (let i = shuffleArr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffleArr[i], shuffleArr[j]] = [shuffleArr[j], shuffleArr[i]];
}
console.log("Shuffled:", shuffleArr);

// =============================================================
// 🔹 17️⃣ TWO SUM (RECAP)
// =============================================================

const arrNums = [23, 53, 25, 23, 2, 2, 3, 23];
const target = 48;
const resultPairs = [];

for (let i = 0; i < arrNums.length; i++) {
  for (let j = i + 1; j < arrNums.length; j++) {
    if (arrNums[i] + arrNums[j] === target) {
      resultPairs.push([arrNums[i], arrNums[j]]);
    }
  }
}
console.log("Two Sum Pairs:", resultPairs);

// =============================================================
// 🔹 18️⃣ SPLIT ARRAY INTO CHUNKS
// =============================================================

const chunkArr = [1, 2, 3, 4, 5, 6, 7];
const size = 3;

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log("Chunks:", chunkArray(chunkArr, size));
// [[1,2,3],[4,5,6],[7]]

// =============================================================
// 🔹 19️⃣ REMOVE SPECIFIC ELEMENTS
// =============================================================

const removeArr = [1, 2, 3, 4, 2];
const removeVal = 2;
const filteredArr = removeArr.filter((item) => item !== removeVal);
console.log("Removed Value:", filteredArr); // [1, 3, 4]

// =============================================================
// 🔹 20️⃣ FIND INDEX OF MAX ELEMENT
// =============================================================

const arrMax = [10, 25, 5, 30];
const maxIndex = arrMax.indexOf(Math.max(...arrMax));
console.log("Index of Max:", maxIndex); // 3
