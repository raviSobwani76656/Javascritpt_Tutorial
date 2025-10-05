// 1. Check if the native Object.keys method exists.
if (!Object.keys) {
  // 2. If it doesn't, define it.
  Object.keys = (function () {
    "use strict";

    // Internal variables needed to handle IE8 bug and filtering
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString");

    // Properties that are not enumerated in IE < 9 even when defined
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor",
    ];
    var dontEnumsLength = dontEnums.length;

    return function (obj) {
      // 3. Ensure the argument is a proper object.
      if (
        typeof obj !== "object" &&
        (typeof obj !== "function" || obj === null)
      ) {
        throw new TypeError("Object.keys called on non-object");
      }

      var result = [];
      var prop, i;

      // 4. Iterate over all properties and check if they are "own" properties.
      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      // 5. Handle the IE < 9 "dontEnum" bug.
      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  })();
}
