/* 
=============================
📘 JAVASCRIPT EVENTS - NOTES
=============================
*/

/*
🧠 What are JavaScript Events?
----------------------------------
An event is an action or occurrence in the browser that JavaScript can detect and respond to.
Examples:
- Clicking a button
- Typing in an input field
- Submitting a form
- Loading a web page

You can "listen" and "react" to these events using event listeners.
*/

// ===========================
// ⚙️ COMMON EVENT CATEGORIES
// ===========================

/* 
1️⃣ MOUSE EVENTS
----------------------------------
Triggered by mouse actions.
----------------------------------
click          → Element is clicked
dblclick       → Element is double-clicked
mousedown      → Mouse button pressed
mouseup        → Mouse button released
mouseover      → Pointer enters element
mouseout       → Pointer leaves element
mousemove      → Pointer moves inside element
contextmenu    → Right-click context menu
*/

document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});

/* 
2️⃣ KEYBOARD EVENTS
----------------------------------
Triggered by keyboard actions.
----------------------------------
keydown  → Key pressed down
keyup    → Key released
keypress → Deprecated (use keydown instead)
*/

document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

/*
3️⃣ FORM EVENTS
----------------------------------
Triggered by interactions with forms.
----------------------------------
submit  → Form submitted
change  → Value changed (after losing focus)
input   → Value changed instantly
focus   → Element gains focus
blur    → Element loses focus
reset   → Form reset
*/

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted!");
});

/*
4️⃣ WINDOW EVENTS
----------------------------------
Triggered by actions related to the browser window.
----------------------------------
load             → Page fully loaded
resize           → Window resized
scroll           → User scrolls
unload           → Leaving the page
DOMContentLoaded → HTML loaded but before images/styles
*/

window.addEventListener("load", () => {
  console.log("Page fully loaded");
});

/*
5️⃣ CLIPBOARD EVENTS
----------------------------------
copy  → Content copied
cut   → Content cut
paste → Content pasted
*/

document.addEventListener("copy", () => {
  console.log("Content copied!");
});

/*
6️⃣ DRAG & DROP EVENTS
----------------------------------
dragstart → Dragging starts
dragover  → Dragging over an element
drop      → Item dropped on target
dragend   → Dragging stops
*/

const box = document.getElementById("box");
box.addEventListener("dragover", (e) => e.preventDefault());
box.addEventListener("drop", () => alert("Item dropped!"));

/*
7️⃣ TOUCH EVENTS (Mobile)
----------------------------------
touchstart → Finger touches screen
touchmove  → Finger moves
touchend   → Finger leaves screen
*/

document.addEventListener("touchstart", () => {
  console.log("Screen touched!");
});

/*
==========================
🔁 EVENT FLOW (PHASES)
==========================
1. Capturing Phase  → Event travels from root → target
2. Target Phase     → Event reaches the target
3. Bubbling Phase   → Event bubbles back up to root
*/

document.body.addEventListener(
  "click",
  () => console.log("Body clicked"),
  true
); // Capturing
document
  .getElementById("btn")
  .addEventListener("click", () => console.log("Button clicked")); // Bubbling

/*
==========================
🚫 EVENT PROPAGATION CONTROL
==========================
event.stopPropagation() → Stops bubbling
event.preventDefault()  → Prevents default behavior (like form submission)
*/

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link click prevented");
});

/*
==========================
💡 EVENT HANDLING METHODS
==========================
| Type           | Example                                 | Description                        |
|----------------|------------------------------------------|------------------------------------|
| Inline         | <button onclick="sayHello()">Click</button> | Not recommended (mixes JS & HTML) |
| Property-based | btn.onclick = sayHello;                  | Only one handler can be attached   |
| addEventListener | btn.addEventListener("click", sayHello); | Preferred way, allows multiple listeners |
*/

// ✅ Example - addEventListener (recommended)
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Button clicked using addEventListener");
});
