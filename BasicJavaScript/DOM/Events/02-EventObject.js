/*
===========================================
🔥 JAVASCRIPT EVENT OBJECT NOTES
===========================================
*/

/*
1️⃣ DEFINITION
-------------------------------------------
- The Event Object is automatically passed to an event handler in JavaScript.
- It contains **all information** about the event: type, target element, timestamp, mouse/keyboard info, propagation phase, and methods to control the event.
- It is the **bridge between the user action and your code**, allowing dynamic responses.
*/

/* ===========================================
2️⃣ ACCESSING THE EVENT OBJECT
------------------------------------------- */
const button = document.getElementById("myButton");

button.addEventListener("click", (event) => {
  console.log(event);            // Logs the full event object
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
  console.log("Listener attached to:", event.currentTarget);
  console.log("Timestamp:", event.timeStamp);
});

/* HTML for example:
<button id="myButton">Click Me</button>
*/

/* ===========================================
3️⃣ COMMON EVENT PROPERTIES
-------------------------------------------
1. event.type → Type of event (click, keydown, etc.)
2. event.target → Element where the event occurred
3. event.currentTarget → Element the listener is attached to
4. event.bubbles → Boolean, true if event bubbles
5. event.cancelable → Boolean, true if default action can be prevented
6. event.defaultPrevented → Boolean, true if preventDefault() called
7. event.timeStamp → Time (ms) since page load
8. event.eventPhase → Event phase: 1 = Capturing, 2 = Target, 3 = Bubbling
*/

/* ===========================================
4️⃣ MOUSE EVENT PROPERTIES
-------------------------------------------
- event.clientX / clientY → Coordinates relative to viewport
- event.pageX / pageY → Coordinates relative to document
- event.offsetX / offsetY → Coordinates relative to target element
- event.button → Mouse button (0 = left, 1 = middle, 2 = right)
- event.ctrlKey / shiftKey / altKey / metaKey → Modifier keys
*/

const box = document.getElementById("box");

box.addEventListener("click", (event) => {
  console.log(`Mouse clicked at: ${event.clientX}, ${event.clientY}`);
  console.log(`Ctrl pressed? ${event.ctrlKey}`);
});

/* HTML for example:
<div id="box" style="width:100px;height:100px;background:lightgreen;">Click Me</div>
*/

/* ===========================================
5️⃣ KEYBOARD EVENT PROPERTIES
-------------------------------------------
- event.key → The key pressed (e.g., "a", "Enter")
- event.code → Physical key on the keyboard (e.g., "KeyA", "Enter")
- event.keyCode → Deprecated numeric code of key
- event.altKey / ctrlKey / shiftKey / metaKey → Modifier keys
*/

const input = document.getElementById("myInput");

input.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);
  console.log(`Shift pressed? ${event.shiftKey}`);
});

/* HTML for example:
<input id="myInput" type="text" placeholder="Type something"/>
*/

/* ===========================================
6️⃣ EVENT METHODS
-------------------------------------------
1. event.preventDefault() → Prevent default action
2. event.stopPropagation() → Stop event from bubbling or capturing
3. event.stopImmediatePropagation() → Stops other listeners on same element
*/

const link = document.getElementById("myLink");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Link clicked, but navigation prevented!");
});

/* HTML for example:
<a href="https://example.com" id="myLink">Visit Example</a>
*/

/* ===========================================
7️⃣ EVENT DELEGATION WITH EVENT OBJECT
-------------------------------------------
- event.target identifies the actual child element clicked.
- Useful when attaching a listener to a parent for multiple children.
*/

const list = document.getElementById("fruits");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on: ${event.target.textContent}`);
  }
});

/* HTML for example:
<ul id="fruits">
  <li>Apple</li>
  <li>Mango</li>
  <li>Pineapple</li>
</ul>
*/

/* ===========================================
8️⃣ EVENT PHASES AND EVENT OBJECT
-------------------------------------------
- event.eventPhase property tells the propagation phase:
  1 → Capturing Phase
  2 → Target Phase
  3 → Bubbling Phase

Example:
*/

list.addEventListener("click", (event) => {
  console.log("Current phase:", event.eventPhase);
});

/* ===========================================
9️⃣ KEY TAKEAWAYS
-------------------------------------------
1. Event object provides **all details** about an event.
2. Use event.type, event.target, event.currentTarget to understand the event.
3. Mouse and keyboard events have specialized properties.
4. Methods like preventDefault() and stopPropagation() control behavior.
5. Event delegation relies heavily on event.target.
6. event.currentTarget is alw
