/*
========================================================================
📘 JavaScript DOM: cloneNode() Method
========================================================================
*/

/*
1️⃣ Definition:
- The `cloneNode()` method creates a **copy of a DOM element**.
- Can create either a **shallow** or **deep** copy.
- Syntax:
  element.cloneNode(deep);

- Parameters:
  deep (Boolean, optional):
    - true  → clones the element **and all its children** (deep copy)
    - false → clones only the element **without children** (shallow copy)
*/

/*
2️⃣ Basic Example: Shallow Copy
*/
const originalDiv = document.createElement("div");
originalDiv.textContent = "Original Div";

const shallowCopy = originalDiv.cloneNode(false); // no children
shallowCopy.textContent = "Shallow Copy";

document.body.append(originalDiv, shallowCopy);

/*
3️⃣ Example: Deep Copy
*/
const parentDiv = document.createElement("div");
parentDiv.innerHTML = "<p>Child 1</p><p>Child 2</p>";

const deepCopy = parentDiv.cloneNode(true); // copies children as well
document.body.append(parentDiv, deepCopy);

/*
📝 Output:
- parentDiv and deepCopy both contain 2 paragraph children.
*/

/*
4️⃣ Use Cases:
1. Duplicate elements dynamically (e.g., list items, cards, tables)
2. Keep a template element in the DOM, clone it whenever needed
3. Preserve structure and content of elements without manually creating each child
*/

/*
5️⃣ Important Notes:
- cloneNode does **not copy event listeners** attached to the element.
- Attributes, inline styles, and child elements are copied depending on `deep`.
- To copy event listeners, you need to reattach them manually after cloning.

Example:
originalDiv.addEventListener("click", () => alert("Clicked!"));
const copy = originalDiv.cloneNode(true);
document.body.append(copy);
// Note: copy has no click listener
*/

/*
6️⃣ Example with Template and Dynamic Cloning
*/
const templateDiv = document.createElement("div");
templateDiv.innerHTML = "<p>Template Paragraph</p>";

// Clone and append multiple times
for (let i = 1; i <= 3; i++) {
  const clone = templateDiv.cloneNode(true);
  clone.querySelector("p").textContent += ` #${i}`;
  document.body.append(clone);
}

/*
✅ Tips:
- Use cloneNode(true) for copying elements with children.
- Use cloneNode(false) for copying only the element itself.
- Reattach event listeners manually if needed.
- Often used with <template> elements for dynamic content.
*/
