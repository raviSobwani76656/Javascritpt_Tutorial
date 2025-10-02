/**************************************************************
 *                  JavaScript Error Handling Notes
 **************************************************************/

/*
1. What is an Error in JavaScript?
   - An Error is an object representing an unexpected condition.
   - Interrupts normal program flow unless handled.
   - Helps in debugging and graceful failure handling.
*/

/* ----------------- Throwing Errors ----------------- */
// Use 'throw' to raise an error
function checkUsername(username) {
  if (!username) throw new Error("Username cannot be empty");
}

try {
  checkUsername(""); // Will throw
} catch (err) {
  console.error(err.name + ": " + err.message); // Error: Username cannot be empty
}

/*
2. Built-in Error Types
   - Error         → General error
   - TypeError     → Invalid data type
   - ReferenceError→ Undefined variable access
   - SyntaxError   → Invalid syntax
   - RangeError    → Number out of range
   - EvalError     → eval() misuse
   - URIError      → encodeURI/decodeURI issues
*/

// Example: TypeError
try {
  let num = 5;
  num.toUpperCase(); // TypeError
} catch (err) {
  if (err instanceof TypeError) {
    console.log("Caught TypeError:", err.message);
  }
}

/*
3. Using try...catch...finally
   - try     → Wrap code that may fail
   - catch   → Handles the error
   - finally → Runs regardless of error
*/

try {
  let age = -5;
  if (age < 0) throw new RangeError("Age cannot be negative");
  console.log("Age is valid");
} catch (err) {
  console.error(err.name + ": " + err.message);
} finally {
  console.log("Validation complete");
}

/*
4. Custom Errors
   - Extend Error class for project-specific errors
*/
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input) throw new ValidationError("Input cannot be empty");
}

try {
  validateInput(""); // Will throw ValidationError
} catch (err) {
  console.error(err.name + ": " + err.message);
}

/*
5. Best Practices
   - Always throw Error objects (not strings)
   - Use specific error types for clarity
   - Provide descriptive messages
   - Catch errors at appropriate level
   - Use custom errors for complex projects
*/
