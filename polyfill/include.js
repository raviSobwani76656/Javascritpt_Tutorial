// 1. Check if the native method exists.
if (!Array.prototype.includes) {
  // 2. If it doesn't, define the new function on the Array prototype.
  //    This makes it available on all array instances (e.g., myArray.includes()).
  Array.prototype.includes = function (searchElement, fromIndex) {
    "use strict";

    // 3. Ensure "this" is actually an array-like object.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    // 4. Convert the object to a proper object and get its length.
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;

    // 5. If the array is empty, it can't include anything.
    if (len === 0) {
      return false;
    }

    // 6. Determine the starting position (fromIndex).
    var n = parseInt(fromIndex, 10) || 0;
    var k;

    // Handle negative starting index (counts from the end of the array).
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }

    // 7. Iterate through the array starting from 'k'.
    while (k < len) {
      // NOTE: Using "===" here for strict comparison.
      // Some polyfills use a special check for "SameValueZero"
      // to correctly handle negative zero and NaN, but a simple '==='
      // works for most common cases and clearly illustrates the concept.
      if (O[k] === searchElement) {
        return true;
      }
      k++;
    }

    // 8. If the loop completes without finding the element, return false.
    return false;
  };
}
