/*

* Array.prototype.forEach - Polyfill (ES5-compatible)
*
* Paste this into VS Code and use for study or in legacy environments.
*
* Theory (in comments):
* * forEach executes a provided function once for each array element.
* * It does NOT mutate the array (the callback may).
* * It DOES NOT iterate over holes in sparse arrays (i.e., it skips missing indices).
* * It accepts an optional thisArg to use as `this` when calling the callback.
* * If callback is not a function, a TypeError is thrown.
* * The callback receives three args: (currentValue, index, array).
* * It works on array-like objects (objects with numeric indices and a length property).
* * If the array is modified during iteration, behavior follows the ECMAScript spec:
* ```
   - elements added beyond the initial length are not visited,
  ```
* ```
   - elements deleted before being visited are skipped,
  ```
* ```
   - elements changed before being visited are visited with their new value.
  ```
*
* Implementation below follows the ES5 specification behavior (and mirrors MDN's approach).
  */

if (!Array.prototype.forEach) {
Object.defineProperty(Array.prototype, 'forEach', {
configurable: true,
writable: true,
value: function forEach(callback /*, thisArg */) {
'use strict';

```
  // 1. Let O be ToObject(this value).
  if (this == null) { // covers both null and undefined
    throw new TypeError('Array.prototype.forEach called on null or undefined');
  }
  var O = Object(this);

  // 2. Let len be ToLength(Get(O, "length")).
  // To emulate ToLength: convert to integer and clamp to >= 0
  var len = O.length >>> 0; // >>>0 forces to Uint32 (ToUint32) which is fine for length

  // 3. If IsCallable(callback) is false, throw a TypeError exception.
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  // 4. Let T be undefined. If thisArg is present, T is thisArg.
  var T = arguments.length > 1 ? arguments[1] : undefined;

  // 5. Let k be 0.
  var k = 0;

  // 6. Repeat while k < len
  while (k < len) {
    // a. Let Pk be ToString(k).
    // b. Let kPresent be HasProperty(O, Pk).
    // c. If kPresent is true, then
    if (k in O) {
      // i. Let kValue be Get(O, Pk).
      var kValue = O[k];
      // ii. Call the callback with T as this and arguments (kValue, k, O)
      callback.call(T, kValue, k, O);
    }
    // d. Increase k by 1.
    k++;
  }

  // 7. Return undefined.
  return undefined;
}
```

});
}

/*

* Examples / Tests
  */

// Basic usage
[1, 2, 3].forEach(function (x, i) {
console.log('value[' + i + '] =', x);
});

// Using thisArg
var obj = {
factor: 10
};
[1, 2, 3].forEach(function (x) {
// "this" inside callback is obj
console.log(x * this.factor);
}, obj);

// Sparse arrays: holes are skipped
var sparse = [0, , 2]; // index 1 is a hole
var visited = [];
sparse.forEach(function (v, i) {
visited.push(i);
});
console.log('visited indices:', visited); // [0, 2]

// Array-like object
var arrayLike = {
0: 'a',
1: 'b',
length: 2
};
Array.prototype.forEach.call(arrayLike, function (v, i) {
console.log('arrayLike[' + i + '] =', v);
});

// Mutations during iteration
var a = [1, 2, 3];
a.forEach(function (v, i, arr) {
console.log('visit', i, v);
if (i === 0) {
arr[1] = 99;        // changed before visit -> visited with new value
arr.push(4);        // added beyond initial length -> NOT visited
}
});
console.log('final array:', a);

/*

* Edge cases / notes:
* * Calling Array.prototype.forEach on null or undefined throws a TypeError.
* * Using String, Number, or other primitives: they are boxed (Object(this)), allowing .forEach via call/apply on array-like objects.
* * The polyfill uses `k in O` to skip holes in sparse arrays.
* * The length is taken once at the start via ToUint32 semantics (>>>0). This matches common implementations:
* ```
   - elements appended beyond that initial length are not visited.
  ```
* ```
   - elements removed before their turn are skipped because `k in O` will be false.
  ```
*
* Recommended exercises:
* 1. Implement a polyfill for map() using the same spec approach.
* 2. Compare behavior of forEach with for...of and for loop on sparse arrays.
* 3. Test callback throws—ensure exceptions propagate out of forEach (they should).
     */
