/*
===========================================
🔥 JAVASCRIPT EVENT KEY METHODS
===========================================
*/

/*
1️⃣ event.preventDefault()
-------------------------------------------
- Prevents the **default action** the browser would normally take for that event.
- Common use cases:
  - Prevent a link from navigating
  - Prevent a form from submitting
  - Stop browser shortcuts

Example:
*/
const link = document.getElementById("myLink");

link.addEventListener("click", (event) => {
  event.preventDefault(); // Stop default navigation
  console.log("Link clicked, but page did not navigate!");
});

/* HTML:
<a href="https://example.com" id="myLink">Visit Example</a>
*/

/* ===========================================
2️⃣ event.stopPropagation()
-------------------------------------------
- Stops the event from **bubbling up** or **capturing down** the DOM.
- Useful when you want a parent element **not to respond** to the event triggered by a child.

Example:
*/
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked!");
});

child.addEventListener("click", (event) => {
  event.stopPropagation(); // Stops bubbling to parent
  console.log("Child clicked!");
});

/* HTML:
<div id="parent" style="padding:20px;background:#f0f0f0;">
  Parent
  <button id="child">Child</button>
</div>
*/

/* ===========================================
3️⃣ event.stopImmediatePropagation()
-------------------------------------------
- Stops the event from propagating **further**.
- Also prevents **other listeners on the same element** from executing.

Example:
*/
const button = document.getElementById("myBtn");

button.addEventListener("click", (event) => {
  console.log("First listener executed");
  event.stopImmediatePropagation();
});

button.addEventListener("click", (event) => {
  console.log("Second listener executed"); // Will NOT execute
});

/* HTML:
<button id="myBtn">Click Me</button>
*/

/* ===========================================
4️⃣ Other useful methods (less commonly used)
-------------------------------------------
- event.initEvent(type, bubbles, cancelable) → Used to **initialize custom events** (legacy)
- event.preventDefault() + stopPropagation → Often used together for custom behavior
*/

/* ===========================================
5️⃣ KEY TAKEAWAYS
-------------------------------------------
1. preventDefault() → Stops default browser action
2. stopPropagation() → Stops event from reaching ancestors or capturing
3. stopImmediatePropagation() → Stops event propagation AND other listeners on same element
4. Combine these methods to **control event behavior** fully
5. Crucial for forms, links, nested elements, and event delegation
*/
