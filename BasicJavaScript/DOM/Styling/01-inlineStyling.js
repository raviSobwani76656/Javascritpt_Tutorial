/*
========================================================================
📘 JavaScript DOM: Inline Styling
========================================================================
*/

/*
1️⃣ What is Inline Styling?
- Inline styling is when you directly apply CSS styles to an element using JavaScript.
- Uses the `.style` property of the element.
- Only affects the specific element (does not touch CSS classes or external stylesheets).
*/

/*
2️⃣ Basic Syntax
*/
element.style.propertyName = "value";

/*
- Use camelCase for CSS properties with hyphens.
  Examples:
  background-color  → backgroundColor
  font-size        → fontSize
  text-align       → textAlign
*/

/*
3️⃣ Example: Styling a Div
*/
const div = document.createElement("div");
div.textContent = "Hello World";

// Inline styles
div.style.color = "white";
div.style.backgroundColor = "blue";
div.style.fontSize = "20px";
div.style.padding = "10px";
div.style.borderRadius = "5px";

document.body.append(div);

/*
4️⃣ Changing Styles Dynamically
*/
div.style.color = "yellow"; // Change text color
div.style.backgroundColor = "green"; // Change background

/*
5️⃣ Adding Multiple Properties
*/
div.style.cssText =
  "color: red; background-color: black; font-size: 18px; padding: 8px;";

/*
6️⃣ Event-Based Inline Styling
*/
div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "orange";
});
div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "blue";
});

/*
7️⃣ Notes & Best Practices
- Inline styles are **overridden by CSS classes** if those classes have higher specificity.
- Use camelCase for multi-word CSS properties.
- Use `cssText` to set multiple styles at once.
- Inline styling is fine for **dynamic or temporary styling**, but for large projects, use classes and CSS files for maintainability.
- Inline styles **cannot access pseudo-classes** like :hover or :active.
*/
