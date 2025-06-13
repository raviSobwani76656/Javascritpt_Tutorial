/* 🔥 SWITCH CASE IN JAVASCRIPT 🔥 */

// ✅ What is switch case?
// switch is used to compare a variable against multiple possible values.
// It is an alternative to multiple if-else statements when you're checking for exact matches.
// switch uses strict comparison (===).

// ✅ Basic Syntax:
switch (expression) {
  case value1:
    // code if expression === value1
    break;

  case value2:
    // code if expression === value2
    break;

  default:
    // code if no case matches
    break;
}

// ✅ Example 1: Simple switch case
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;

  case "banana":
    console.log("It's a banana");
    break;

  default:
    console.log("Unknown fruit");
    break;
}

// ✅ Example 2: Numbers with switch
const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
    break;
}

/* 🔥 IMPORTANT NOTE 🔥 */

// ❌ Common mistake: DO NOT write condition (>, <, >=) inside switch cases
const Age = 25;
switch (Age) {
  case Age > 18: // ❌ this is wrong (not allowed)
    console.log("He is an adult");
    break;
}

// ✅ Correct way: match exact values only
switch (Age) {
  case 18:
    console.log("He just became an adult");
    break;
  case 25:
    console.log("He is an adult");
    break;
  default:
    console.log("No matching case");
    break;
}

// ✅ If you want to handle conditions, use if-else
if (Age > 18) {
  console.log("He is an adult");
} else if (Age < 18) {
  console.log("He is not an adult");
} else {
  console.log("Age not specified");
}

// ✅ ADVANCED: switch with true (can handle conditions like if-else)
switch (true) {
  case Age > 18:
    console.log("He is an adult");
    break;
  case Age < 18:
    console.log("He is not an adult");
    break;
  case Age > 29:
    console.log("He is also not an adult");
    break;
  default:
    console.log("No matching case");
    break;
}

/* 🔥 QUICK RULES 🔥
- switch === strict comparison
- use it for exact value matching
- don't use conditions (>, <) directly in case
- for conditions, use if-else
- switch(true) is a workaround for condition-based switches
*/

const num1 = 3;
let num2 = 3;
operator = "*";

switch (operator) {
  case "*":
    console.log(num1 * num2);
    break;
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;

  default:
    console.log("Invalid operator");
    break;
}

/*******************************IF statements*********************************************** */

/* 🔥 JavaScript IF-ELSE Master File 🔥 */

// ✅ Basic IF statement
let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day");
}

// ✅ IF-ELSE
if (temperature > 25) {
  console.log("It's hot");
} else {
  console.log("It's not very hot");
}

// ✅ IF-ELSE IF-ELSE ladder
let score = 85;

if (score < 50) {
  console.log("Fail");
} else if (score >= 50 && score <= 75) {
  console.log("Pass");
} else {
  console.log("Excellent");
}

// ✅ Single line IF (only for one statement)
let speed = 80;
if (speed > 60) console.log("You are overspeeding");

// ✅ Multiple conditions using logical operators
let marks = 92;

if (marks >= 90 && marks <= 100) {
  console.log("Grade: A");
} else if (marks >= 80 && marks < 90) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// ✅ Nested IF (IF inside IF)
let number = 10;

if (number > 0) {
  if (number % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else {
  console.log("Not a positive number");
}

// ✅ Ternary Operator (short version of IF-ELSE)
let balance = 500;
const status = balance > 0 ? "Account has funds" : "Account is empty";
console.log(status);

// ✅ NOTE:
// - Use {} if you have more than one statement inside if.
// - Use () carefully for multiple conditions (group them for clarity).
// - Single line if-else is OK for simple cases, but use {} for clean readable code.
