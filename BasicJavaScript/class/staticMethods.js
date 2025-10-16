/*
=============================
       STATIC METHODS
=============================

1. What is a Static Method?
---------------------------
- A static method is a method that belongs to the class itself.
- It does NOT belong to object instances.
- You can call it directly using the class name.
- Commonly used for utility/helper functions that do not rely on instance properties.

2. Syntax
---------
class ClassName {
  static methodName() {
    // code
  }
}

- Use the 'static' keyword before the method name.
- Call it as ClassName.methodName().
*/

/* Example: Static Methods */
class Maths {
  // Static method to add numbers
  static add(a, b) {
    return a + b;
  }

  // Static method to subtract numbers
  static subtract(a, b) {
    return a - b;
  }

  // Regular instance method
  greet() {
    console.log("Hello from an instance!");
  }
}

// Calling static methods on the class
console.log(Maths.add(4, 5)); // 9
console.log(Maths.subtract(44, 55)); // -11

// Creating an object
const mathInstance = new Maths();

// Calling regular instance method
mathInstance.greet(); // Hello from an instance!

// ❌ Static methods cannot be called on instances
// mathInstance.add(1,2); // TypeError: mathInstance.add is not a function

/*
3. Static Properties
--------------------
- Static properties belong to the class, not instances.
- Shared across all instances.
*/
class Counter {
  static count = 0;

  static increment() {
    Counter.count += 1;
    return Counter.count;
  }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2

/*
4. Key Points
-------------
- Static methods/properties belong to the class, not instances.
- Cannot use 'this' to access instance properties inside static methods.
- Ideal for utility functions, helper methods, or shared data.
- Call with ClassName.method() or ClassName.property.
*/
