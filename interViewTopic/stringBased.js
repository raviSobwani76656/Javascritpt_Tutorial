/*
====================================================================
🧵 JAVASCRIPT STRING — MAJOR QUESTIONS & EXPLANATIONS
====================================================================

📘 OVERVIEW:
Strings in JavaScript are sequences of characters used to store and manipulate text.
They are **immutable** (cannot be changed directly).

Example:
------------------------------------------------------------
const str = "Hello World";
------------------------------------------------------------

====================================================================
🔹 1️⃣ What are the ways to create strings in JavaScript?
====================================================================

✅ Using single quotes:
const str1 = 'Hello';

✅ Using double quotes:
const str2 = "World";

✅ Using template literals (ES6):
const name = 'Shubham';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Shubham!

Template literals allow:
- String interpolation
- Multi-line strings

Example:
------------------------------------------------------------
const msg = `This is
a multi-line
string.`;
console.log(msg);
------------------------------------------------------------

====================================================================
🔹 2️⃣ What does it mean when we say strings are immutable?
====================================================================

- Once a string is created, it cannot be modified.
- Operations like replace, toUpperCase, etc. return **a new string**.

Example:
------------------------------------------------------------
let text = "hello";
text.toUpperCase(); // returns "HELLO"
console.log(text); // still "hello"
------------------------------------------------------------

✅ To actually update:
text = text.toUpperCase();

====================================================================
🔹 3️⃣ Major String Methods (with examples)
====================================================================

------------------------------------------------------------
1️⃣ length → Returns string length
------------------------------------------------------------
const str = "Hello";
console.log(str.length); // 5

------------------------------------------------------------
2️⃣ toUpperCase() / toLowerCase()
------------------------------------------------------------
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"

------------------------------------------------------------
3️⃣ charAt(index)
------------------------------------------------------------
console.log(str.charAt(1)); // "e"

------------------------------------------------------------
4️⃣ indexOf(value) / lastIndexOf(value)
------------------------------------------------------------
console.log(str.indexOf("l")); // 2
console.log(str.lastIndexOf("l")); // 3

------------------------------------------------------------
5️⃣ includes(value)
------------------------------------------------------------
console.log(str.includes("He")); // true

------------------------------------------------------------
6️⃣ startsWith() / endsWith()
------------------------------------------------------------
console.log(str.startsWith("He")); // true
console.log(str.endsWith("lo"));   // true

------------------------------------------------------------
7️⃣ slice(start, end)
------------------------------------------------------------
console.log(str.slice(0, 4)); // "Hell"

------------------------------------------------------------
8️⃣ substring(start, end)
------------------------------------------------------------
console.log(str.substring(1, 4)); // "ell"

⚠️ Difference:
- slice() accepts negative indexes.
- substring() treats negative as 0.

------------------------------------------------------------
9️⃣ substr(start, length) — deprecated (but still seen)
------------------------------------------------------------
console.log(str.substr(1, 3)); // "ell"

------------------------------------------------------------
🔟 replace() / replaceAll()
------------------------------------------------------------
const msg = "Hello World";
console.log(msg.replace("World", "JS")); // "Hello JS"

const test = "apple apple";
console.log(test.replaceAll("apple", "banana")); // "banana banana"

------------------------------------------------------------
11️⃣ trim(), trimStart(), trimEnd()
------------------------------------------------------------
const spaced = "   Hello   ";
console.log(spaced.trim()); // "Hello"

------------------------------------------------------------
12️⃣ split()
------------------------------------------------------------
const text = "a,b,c";
console.log(text.split(",")); // ["a","b","c"]

------------------------------------------------------------
13️⃣ repeat()
------------------------------------------------------------
console.log("Hi".repeat(3)); // "HiHiHi"

------------------------------------------------------------
14️⃣ concat()
------------------------------------------------------------
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

------------------------------------------------------------
15️⃣ padStart() / padEnd()
------------------------------------------------------------
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"

====================================================================
🔹 4️⃣ How to reverse a string in JavaScript?
====================================================================

Strings are immutable — so we convert them to an array first.

Example:
------------------------------------------------------------
const str = "hello";
const reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"
------------------------------------------------------------

====================================================================
🔹 5️⃣ How to check if a string is palindrome?
====================================================================

Palindrome → Same when reversed (e.g. "madam")

Example:
------------------------------------------------------------
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("Madam")); // true
------------------------------------------------------------

====================================================================
🔹 6️⃣ How to count vowels in a string?
====================================================================

Example:
------------------------------------------------------------
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}
console.log(countVowels("Hello World")); // 3
------------------------------------------------------------

====================================================================
🔹 7️⃣ How to find the frequency of characters in a string?
====================================================================

Example:
------------------------------------------------------------
function charFrequency(str) {
  const freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("hello"));
// { h:1, e:1, l:2, o:1 }
------------------------------------------------------------

====================================================================
🔹 8️⃣ How to capitalize the first letter of each word?
====================================================================

Example:
------------------------------------------------------------
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world from javascript"));
// "Hello World From Javascript"
------------------------------------------------------------

====================================================================
🔹 9️⃣ How to check if two strings are anagrams?
====================================================================

Anagram → Same characters, different order ("listen" → "silent")

Example:
------------------------------------------------------------
function isAnagram(str1, str2) {
  const clean = s => s.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
  return clean(str1) === clean(str2);
}
console.log(isAnagram("listen", "silent")); // true
------------------------------------------------------------

====================================================================
🔹 🔟 What is the difference between slice(), substring(), and substr()?
====================================================================

| Method     | Params                 | Supports Negative? | Description |
|-------------|------------------------|--------------------|--------------|
| slice()     | (start, end)           | ✅ Yes             | Extracts part of string |
| substring() | (start, end)           | ❌ No              | Swaps if start > end |
| substr()    | (start, length)        | ✅ Yes (start)     | Deprecated |

Example:
------------------------------------------------------------
let str = "JavaScript";
console.log(str.slice(4, 10));     // "Script"
console.log(str.substring(4, 10)); // "Script"
console.log(str.substr(4, 6));     // "Script"
------------------------------------------------------------

====================================================================
🔹 11️⃣ How to remove duplicate characters from a string?
====================================================================

Example:
------------------------------------------------------------
function removeDuplicates(str) {
  return [...new Set(str)].join("");
}
console.log(removeDuplicates("programming")); // "progamin"
------------------------------------------------------------

====================================================================
🔹 12️⃣ How to find the longest word in a string?
====================================================================

Example:
------------------------------------------------------------
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log(longestWord("I love JavaScript programming"));
// "programming"
------------------------------------------------------------

====================================================================
🔹 13️⃣ How to count occurrences of a substring in a string?
====================================================================

Example:
------------------------------------------------------------
function countOccurrences(str, sub) {
  return str.split(sub).length - 1;
}
console.log(countOccurrences("banana", "na")); // 2
------------------------------------------------------------

====================================================================
🔹 14️⃣ How to check if a string contains only digits?
====================================================================

Example:
------------------------------------------------------------
function isNumeric(str) {
  return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); // true
console.log(isNumeric("12a45")); // false
------------------------------------------------------------

====================================================================
🔹 15️⃣ How to convert a string to title case?
====================================================================

Example:
------------------------------------------------------------
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(toTitleCase("javascript is powerful"));
// "Javascript Is Powerful"
------------------------------------------------------------

====================================================================
📎 SUMMARY OF KEY STRING METHODS
====================================================================

✅ Accessing: charAt(), charCodeAt(), [index]
✅ Searching: indexOf(), lastIndexOf(), includes()
✅ Extracting: slice(), substring(), substr()
✅ Modifying: replace(), toUpperCase(), toLowerCase(), trim()
✅ Splitting: split(), join()
✅ Padding: padStart(), padEnd()
✅ Repeating: repeat()
✅ Checking: startsWith(), endsWith(), match(), search()
✅ Concatenation: concat(), + operator
✅ Template literals: `${}` interpolation

====================================================================
⭐ INTERVIEW HIGHLIGHTS:
====================================================================
- Strings are immutable.
- slice() vs substring() difference.
- How to reverse a string.
- Palindrome & Anagram problems.
- Using RegEx with strings.
- Template literals and interpolation.
====================================================================
*/
