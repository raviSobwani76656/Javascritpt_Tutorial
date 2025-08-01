/*
=========================================
        JavaScript - FOR LOOP NOTES
=========================================

FOR LOOP SYNTAX:
for(initialization; condition; increment/decrement){
    // code to execute on each iteration
}

=========================================
        SIMPLE COUNTING LOOPS
=========================================

// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Counting backward from 10 to 1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

=========================================
        LOOPING OVER ARRAYS
=========================================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

=========================================
        BREAK STATEMENT EXAMPLE
=========================================

// Stops the loop when i equals 5
for (let i = 0; i <= 10; i++) {
  if (i == 5) break;
  console.log(i);
}

=========================================
        NESTED FOR LOOPS
=========================================

// Outer loop runs from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(`The value of outer loop is ${i}`);

  // Inner loop also runs from 0 to 10
  for (let j = 0; j <= 10; j++) {
    console.log(`The value of inner loop is ${j}, outer is ${i}`);
  }
}

=========================================
        IMPORTANT NOTES
=========================================

1️⃣ Initialization runs only once at the start.
2️⃣ Condition is checked before each iteration.
3️⃣ Increment (or decrement) runs after each iteration.
4️⃣ If condition becomes false, loop exits.
5️⃣ Use 'break' to stop loop early.
6️⃣ Use 'continue' to skip current iteration.
7️⃣ Use nested loops carefully; they grow in time complexity (O(n²)).

=========================================
        SMALL CHEAT SHEET

- for loop: Use when you know how many times you want to run.
- for...of: Iterate over arrays & strings.
- for...in: Iterate over object keys.
- while loop: Condition is checked first, may not run.
- do...while: Always runs at least once.

=========================================
        BONUS EXAMPLES FOR PRACTICE

// Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Sum of first 5 natural numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum:", sum);

























for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) break;
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(`the value of the ining is ${i}`);

  for (let j = 0; j <= 10; j++) {
    console.log(`the value of inner loop ${j} and ${i}`);
  }
}


