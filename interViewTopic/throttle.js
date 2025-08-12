// ==========================
// Throttling in JavaScript
// ==========================
//
// Definition:
// Throttling limits a function to run at most once every specified delay.
// It ensures the function executes immediately, then ignores subsequent calls
// until the delay period has passed.
//
// Why use it?
// - Improve performance during high-frequency events like scrolling, resizing, or mouse movement.
// - Prevents functions from running too often and overwhelming system resources.
//
// How it works:
// 1. Track the timestamp of the last execution.
// 2. On each call, check if enough time has passed since the last run.
// 3. If yes, execute the function and update the last execution time.
// 4. If not, ignore the call.
//
// Key methods:
// - Date.now() → Gets current time in milliseconds.
// - If current time - lastCall >= delay → allow function to run.
//
// Syntax and Example:
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    return fn(...args);
  };
}

function logMessage(message) {
  console.log("Logged:", message, "at", new Date().toLocaleTimeString());
}

const throttledLog = throttle(logMessage, 2000);

// Simulate rapid calls every 500ms
let count = 1;
const interval = setInterval(() => {
  throttledLog(`Call ${count}`);
  count++;
  if (count > 5) clearInterval(interval);
}, 500);

// Expected output:
// Logged: Call 1 at 10:00:01 AM
// Logged: Call 5 at 10:00:09 AM
//
// Explanation:
// Even though throttledLog is called every 500ms,
// the function actually runs only once every 2000ms due to throttling.
