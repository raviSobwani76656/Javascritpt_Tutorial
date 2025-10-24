/*
========================================================================
📘 JavaScript DOM: cssText
========================================================================
*/

/*
1️⃣ What is cssText?
- The `cssText` property of an element’s `.style` allows you to **set or get multiple CSS properties at once**.
- Works like writing inline CSS in the HTML element.
*/

/*
2️⃣ Syntax
*/
// Set multiple styles
element.style.cssText = "property1: value1; property2: value2; ...";

// Get current inline styles as a string
console.log(element.style.cssText);

/*
3️⃣ Example: Setting multiple inline styles
*/
const div = document.createElement("div");
div.textContent = "Hello World";

div.style.cssText =
  "color: white; background-color: blue; font-size: 20px; padding: 10px; border-radius: 5px;";

document.body.append(div);

/*
4️⃣ Example: Updating cssText dynamically
*/
div.style.cssText += " border: 2px solid red;"; // Add new style without overwriting previous ones

/*
5️⃣ Notes & Best Practices
- `cssText` **overwrites all inline styles** if assigned directly. Use += to add without removing previous styles.
- Styles must be written as a **semicolon-separated string**.
- CamelCase is **not required** here; use standard CSS syntax with hyphens.
- Best for **setting multiple properties at once** instead of writing many `.style.property = value`.
- `cssText` only affects **inline styles**, not external CSS or class-based styles.
*/

/*
6️⃣ Example: Reading inline styles
*/
console.log(div.style.cssText);
// Output: "color: white; background-color: blue; font-size: 20px; padding: 10px; border-radius: 5px; border: 2px solid red;"
