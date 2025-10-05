// Check if the native map() method exists.
if (!Array.prototype.map) {
  // Define the map() function on the Array prototype.
  Array.prototype.map = function (callback, thisArg) {
    // Error checking for null/undefined array
    if (this == null) {
      throw new TypeError("Array.prototype.map called on null or undefined");
    }

    // Setup the array and length
    var T, A, k;
    var O = Object(this);
    var len = O.length >>> 0; // unsigned right shift for positive integer length

    // Set the optional 'this' value for the callback
    if (arguments.length > 1) {
      T = thisArg;
    }

    // Create the new array that will be returned
    A = new Array(len);

    // Iterate and apply the callback
    k = 0;
    while (k < len) {
      var kValue, mappedValue;

      if (k in O) {
        kValue = O[k];
        // Call the callback function and store the result
        mappedValue = callback.call(T, kValue, k, O);
        A[k] = mappedValue;
      }
      k++;
    }

    return A;
  };
}
