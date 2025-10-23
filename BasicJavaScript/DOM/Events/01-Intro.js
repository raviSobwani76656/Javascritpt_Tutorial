/*
===========================================
🔥 JAVASCRIPT EVENTS - COMPLETE INTRODUCTION
===========================================
*/

/*
1️⃣ WHAT IS AN EVENT?
-------------------------------------------
- An **event** is an action or occurrence that happens in the browser, which the JavaScript code can respond to.
- Examples include:
  - User actions: click, keypress, mouseover
  - Browser actions: page load, resize, scroll
  - Form actions: submit, focus, blur
- Events allow **interaction** between the user and the webpage.
*/

/* ===========================================
2️⃣ HOW TO LISTEN TO EVENTS
-------------------------------------------
There are two main ways to handle events in JavaScript:

1️⃣ Using HTML Attributes (Inline)
-----------------------------------
<button onclick="alert('Clicked!')">Click Me</button>

2️⃣ Using JavaScript addEventListener (Recommended)
---------------------------------------------------
const btn = document.getElementById("myButton");
btn.addEventListener("click", () => {
  console.log("Button clicked!");
});
*/

/* ===========================================
3️⃣ COMMON EVENT TYPES
-------------------------------------------
1. **Mouse Events** → click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
2. **Keyboard Events** → keydown, keyup, keypress (deprecated)
3. **Form Events** → submit, focus, blur, change, input
4. **Window Events** → load, resize, scroll, unload
5. **Clipboard Events** → copy, cut, paste
6. **Drag & Drop Events** → drag, dragstart, dragend, drop
7. **Touch Events (Mobile)** → touchstart, touchmove, touchend
*/

/* ===========================================
4️⃣ EVENT OBJECT
-------------------------------------------
- When an event occurs, the browser creates an **Event Object** and passes it to the handler.
- It contains:
  - event type (click, keydown)
  - target element
  - timestamp
  - mouse or keyboard properties
  - propagation info
  - methods like preventDefault() and stopPropagation()

Example:
*/
const btn = document.getElementById("myButton");

btn.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
  console.log("Listener attached to:", event.currentTarget);
  console.log("Timestamp:", event.timeStamp);
});

/* HTML:
<button id="myButton">Click Me</button>
*/

/* ===========================================
5️⃣ MOUSE EVENT OBJECT PROPERTIES
-------------------------------------------
- clientX / clientY → coordinates relative to viewport
- pageX / pageY → coordinates relative to document
- offsetX / offsetY → coordinates relative to target element
- button → mouse button (0=left,1=middle,2=right)
- ctrlKey / shiftKey / altKey / metaKey → modifier keys
*/

/* ===========================================
6️⃣ KEYBOARD EVENT OBJECT PROPERTIES
-------------------------------------------
- key → value of key pressed
- code → physical key location
- keyCode → deprecated numeric code
- altKey / ctrlKey / shiftKey / metaKey → modifier keys
*/

/* ===========================================
7️⃣ EVENT PHASES (Propagation)
-------------------------------------------
Every event goes through **three phases**:
1. Capturing Phase → from document down to target element
2. Target Phase → event reaches the target
3. Bubbling Phase → event bubbles up to ancestors

- event.eventPhase → 1=capturing, 2=target, 3=bubbling
- event.stopPropagation() → stops bubbling/capturing
- event.stopImmediatePropagation() → stops other listeners on same element
*/

/* ===========================================
8️⃣ EVENT DELEGATION
-------------------------------------------
- Attach a single listener to a parent element instead of multiple child elements.
- Uses event.target to find which child triggered the event.
- Works for dynamically added children.

Example:
*/
const list = document.getElementById("fruits");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`Clicked on: ${event.target.textContent}`);
  }
});

/* HTML:
<ul id="fruits">
  <li>Apple</li>
  <li>Mango</li>
  <li>Pineapple</li>
</ul>
*/

/* ===========================================
9️⃣ COMMON EVENT METHODS
-------------------------------------------
1. preventDefault() → prevent default browser action
2. stopPropagation() → stop event from bubbling/capturing further
3. stopImmediatePropagation() → stops other listeners on same element
*/

/* ===========================================
🔟 KEY TAKEAWAYS
-------------------------------------------
1. Events are actions in the browser that JavaScript can respond to.
2. Use addEventListener() to handle events (recommended over inline HTML).
3. event object provides all details of the event.
4. Event propagation phases: Capturing → Target → Bubbling
5. Event delegation allows handling many children with one listener.
6. Methods like preventDefault() and stopPropagation() give control over behavior.
7. Mouse and keyboard events have specialized properties.
*/
