/*
========================================================================
📘 JavaScript DOM: getComputedStyle
========================================================================
*/

/*
1️⃣ What is getComputedStyle?
- `getComputedStyle()` returns a **CSSStyleDeclaration object** containing the **final computed styles** of an element.
- Includes styles from:
  - External CSS
  - Internal <style> tags
  - Inline styles
  - Browser defaults
- Cannot set styles using this; only for reading.
*/

/*
2️⃣ Syntax
*/
const styles = window.getComputedStyle(element);

/*
Optional second parameter:
- pseudoElt (string) → for pseudo-elements like ::before, ::after
Example: window.getComputedStyle(element, '::before')
*/

/*
3️⃣ Example: Reading styles
*/
const div = document.createElement("div");
div.textContent = "Hello World";
div.style.color = "red"; // inline style
div.style.fontSize = "20px"; // inline style

document.body.append(div);

// Get computed styles
const styles = window.getComputedStyle(div);
console.log(styles.color); // rgb(255, 0, 0)
console.log(styles.fontSize); // 20px
console.log(styles.backgroundColor); // rgb(0, 0, 0, 0) (default transparent)

/*
4️⃣ Example: Using pseudo-elements
*/
const pseudoStyle = window.getComputedStyle(div, "::before");
console.log(pseudoStyle.content);

/*
5️⃣ Notes & Best Practices
- `getComputedStyle()` **returns all resolved styles**, including inherited and default values.
- Always returns **values in pixels or computed units**, not necessarily the value you wrote in CSS.
- Useful for calculations, animations, or dynamic adjustments.
- Cannot modify styles; use `.style` or `.classList` for that.
*/

/*
6️⃣ Example: Dynamic width calculation
*/
const box = document.createElement("div");
box.style.width = "200px";
box.style.padding = "20px";
document.body.append(box);

const computed = window.getComputedStyle(box);
const width = parseInt(computed.width); // 200
const padding = parseInt(computed.padding); // 20
console.log("Total width including padding:", width + padding * 2); // 240
