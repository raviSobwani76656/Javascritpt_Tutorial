/*
=============================================
🕒 setTimeout() and clearTimeout() in JavaScript
=============================================

📘 1️⃣ What is setTimeout?
---------------------------------------------
- setTimeout() is a built-in JavaScript function
  used to schedule the execution of a function 
  after a specified delay (in milliseconds).

✅ Syntax:
    let timeoutId = setTimeout(callback, delay, ...args);

    - callback: The function to execute after delay.
    - delay: Time in milliseconds before the function runs.
    - ...args: Optional arguments to pass to the callback.

📦 Example:
---------------------------------------------
*/

let timer = setTimeout(() => {
  console.log("⏳ Hello after 3 seconds!");
}, 3000);

/*
Here:
- "Hello after 3 seconds!" will print after 3 seconds.
- setTimeout() returns a unique ID (stored in 'timer'),
  which can be used later to cancel the timeout.

-----------------------------------------------------
📘 2️⃣ What is clearTimeout()?
-----------------------------------------------------
- clearTimeout() cancels a timeout set with setTimeout().
- It prevents the callback from running if it hasn't yet.

✅ Syntax:
    clearTimeout(timeoutId);
*/

// Cancel the timeout before it executes
clearTimeout(timer);

/*
This cancels the previously scheduled timeout.
So, "Hello after 3 seconds!" will never print.

-----------------------------------------------------
📘 3️⃣ Why schedule something only to cancel it?
-----------------------------------------------------
At first glance, it might seem useless to schedule 
a timeout and then cancel it — but in *real-world code*,
this is extremely common and powerful!

Below are common use cases 👇
*/

/* =====================================================
🧠 USE CASE 1: Conditional Execution (Auto Logout Example)
====================================================== */

// Automatically log out a user after 5 seconds of inactivity
let logoutTimer = setTimeout(() => {
  console.log("⚠️ Auto-logout due to inactivity");
}, 5000);

// But if the user interacts with the app, cancel it
document.addEventListener("mousemove", () => {
  clearTimeout(logoutTimer);
  console.log("✅ User is active — canceling logout");
});

/*
💡 Explanation:
- We schedule an "auto logout" after inactivity.
- If user activity is detected (like mouse movement),
  we cancel the scheduled logout using clearTimeout().
*/

/* =====================================================
🧠 USE CASE 2: Debouncing (Typing / Search Input Example)
====================================================== */

/*
Debouncing is a technique to limit how often a function runs.
It’s used to improve performance for events that fire rapidly 
(e.g., typing, scrolling, resizing).

In this example, we only run the search function 
AFTER the user has stopped typing for 500ms.
*/

let debounceTimer;

function handleSearchInput() {
  // cancel the previous timeout before scheduling a new one
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    console.log("🔍 Searching...");
  }, 500);
}

// Simulate typing:
handleSearchInput(); // starts 1st timer
handleSearchInput(); // cancels previous, restarts timer
handleSearchInput(); // cancels previous again

/*
💡 Explanation:
- Each keystroke clears the previous timer and starts a new one.
- The function runs only once — 500ms after the user stops typing.
*/

/* =====================================================
🧠 USE CASE 3: Fallback or Delayed Warning Example
====================================================== */

/*
Sometimes we use setTimeout() to schedule a "backup" message
or warning in case a process takes too long.

We can cancel it if the operation finishes early.
*/

let loadingTimeout = setTimeout(() => {
  console.log("⚠️ Taking longer than expected...");
}, 3000);

// Simulate fast operation (like a network request)
setTimeout(() => {
  clearTimeout(loadingTimeout);
  console.log("✅ Data loaded quickly!");
}, 1000);

/*
💡 Explanation:
- The fallback message ("Taking longer...") is set to appear after 3s.
- But if the data loads in 1s, we cancel the fallback message.
*/

/* =====================================================
🧠 USE CASE 4: Controlled Retry Example
====================================================== */

/*
We can schedule a retry in case of a failure and cancel 
it if success occurs before the delay.
*/

let retryTimeout = setTimeout(() => {
  console.log("🔁 Retrying connection...");
}, 5000);

let connectionSuccess = true;

if (connectionSuccess) {
  clearTimeout(retryTimeout);
  console.log("✅ Connected successfully before retry!");
}

/* =====================================================
⚙️ Summary
======================================================

| Purpose           | Why use setTimeout + clearTimeout?               |
|-------------------|--------------------------------------------------|
| Auto Logout       | Schedule logout, cancel if user active           |
| Debounce Input    | Wait for user to stop typing before running code |
| Fallback Message  | Schedule warning, cancel if task finishes early  |
| Retry Logic       | Schedule retry, cancel if success occurs         |

======================================================
🧩 In Short:
======================================================
✅ setTimeout() → schedules code to run after a delay  
❌ clearTimeout() → cancels that scheduled code  

🧠 You schedule something “just in case,” 
   then cancel it when conditions change.
======================================================
*/
