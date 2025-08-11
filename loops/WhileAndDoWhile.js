/*
===========================================
  JavaScript Loops - while & do...while
===========================================

🧠 WHILE LOOP:

- The condition is checked before every iteration.
- The loop runs as long as the condition is true.
- If condition is false at the start, loop never runs.

SYNTAX:
while (condition) {
  // code to execute
}

EXAMPLE 1 - Simple counting:
*/

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

/*
OUTPUT:
1
2
3
4
5
*/

/*
EXAMPLE 2 - Infinite loop warning:
while (true) {
  // runs forever unless break is used
}
*/

/*
EXAMPLE 3 - Using break inside while loop:
*/

let count = 1;
while (count <= 10) {
  if (count === 6) break;
  console.log(count);
  count++;
}

/*
OUTPUT:
1
2
3
4
5
*/

/*
EXAMPLE 4 - Using continue inside while loop:
*/

let num = 1;
while (num <= 5) {
  if (num === 3) {
    num++; // increment BEFORE continue to avoid infinite loop
    continue;
  }
  console.log(num);
  num++;
}

/*
OUTPUT:
1
2
4
5

⚠ IMPORTANT:
- If you don't increment before continue, you may create infinite loop.
*/

/*
===========================================
  DO...WHILE LOOP:
===========================================

- Executes the block at least once, even if condition is false.
- The condition is checked after each execution.

SYNTAX:
do {
  // code to execute
} while (condition);

EXAMPLE 1:
*/

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

/*
OUTPUT:
1
2
3
4
5
*/

/*
EXAMPLE 2 - Condition false initially:
*/

let k = 10;
do {
  console.log(k);
  k++;
} while (k <= 5);

/*
OUTPUT:
10
(Loop runs once even though condition is false at start)
*/

/*
EXAMPLE 3 - Using break inside do...while:
*/

let m = 1;
do {
  if (m === 4) break;
  console.log(m);
  m++;
} while (m <= 5);

/*
OUTPUT:
1
2
3
*/

/*
EXAMPLE 4 - Using continue inside do...while:
*/

let n = 1;
do {
  if (n === 3) {
    n++;
    continue;
  }
  console.log(n);
  n++;
} while (n <= 5);

/*
OUTPUT:
1
2
4
5
*/

/*
===========================================
  CHEAT SHEET SUMMARY
===========================================

- while loop:
  -> Condition checked BEFORE loop body
  -> May not run at all if condition is false initially

- do...while loop:
  -> Condition checked AFTER loop body
  -> Always runs at least once

- break:
  -> Immediately exits the loop

- continue:
  -> Skips current iteration and moves to next loop check
  -> Be careful to increment loop variable before continue to avoid infinite loops
*/
