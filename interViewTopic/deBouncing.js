// Debouncing means making a function run only after a pause in activity,
// instead of every time the event happens.

/*
==========================
Debouncing in JavaScript
==========================

Definition:
Debouncing is a technique to make a function execute only 
AFTER a specified delay has passed without it being called again.
It prevents functions from running too often (e.g., on every keystroke or scroll).

Why use it?
- Improves performance
- Avoids unnecessary function calls
- Common in search bars, resizing events, scroll tracking

How it works:
1. Every time the function is called, cancel (clear) any previously scheduled execution.
2. Start a new timer for the delay.
3. Only execute the function when no new calls happen during that delay.

Key methods:
- clearTimeout(timer) → Cancels the previously set timeout.
- setTimeout(fn, delay) → Schedules the function to run after the delay.

Syntax:
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // cancel previous timer
        timer = setTimeout(() => {
            fn(...args); // run function after delay
        }, delay);
    };
}

Example:
---------------------------------------
*/

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function searchQuery(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 500);

// Simulating fast typing
debouncedSearch("F");
debouncedSearch("Fa");
debouncedSearch("Fan");
debouncedSearch("Fant");
debouncedSearch("Fanta");
debouncedSearch("Fantast");
debouncedSearch("Fantastic");
debouncedSearch("Fantastic Four");

/*
Expected Output:
---------------------------------------
(After 500ms pause from the last call)
Searching for: Fantastic Four

Explanation of Output:
Even though we called 'debouncedSearch' multiple times,
it cleared the old timer each time and only executed once,
after typing stopped for 500ms.
*/
