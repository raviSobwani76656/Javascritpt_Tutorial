/*
========================================================================
📘 JavaScript DOM: insertAdjacent Methods Cheat Sheet
========================================================================
*/

/*
--------------------------------------------------------
1️⃣ insertAdjacentElement()
--------------------------------------------------------
🧠 Definition:
Inserts a **DOM element** at a precise position relative to another element.
- Does not replace the element, just inserts relative to it.

🔹 Syntax:
element.insertAdjacentElement(position, element);

Positions:
- 'beforebegin' → Before the element itself (as previous sibling)
- 'afterbegin'  → Inside element, at start (first child)
- 'beforeend'   → Inside element, at end (last child)
- 'afterend'    → After the element itself (as next sibling)

🔹 Example:
*/
const divBox = document.createElement("div");
divBox.textContent = "Original Div";
document.body.append(divBox);

const strong = document.createElement("strong");
strong.textContent = "🔥 Important: ";

// Insert as previous sibling
divBox.insertAdjacentElement("beforebegin", strong);

// Insert as first child
const span = document.createElement("span");
span.textContent = "Start Text — ";
divBox.insertAdjacentElement("afterbegin", span);

/*
--------------------------------------------------------
2️⃣ insertAdjacentHTML()
--------------------------------------------------------
🧠 Definition:
Inserts an **HTML string** at a precise position relative to an element.
- The string is parsed as HTML and inserted into the DOM.

🔹 Syntax:
element.insertAdjacentHTML(position, htmlString);

Positions: same as insertAdjacentElement

🔹 Example:
const container = document.createElement("div");
container.textContent = "Container";
document.body.append(container);

// Insert HTML string at the end
container.insertAdjacentHTML("beforeend", "<p>Inserted Paragraph</p>");

// Insert HTML string before container
container.insertAdjacentHTML("beforebegin", "<h3>Heading Before Container</h3>");

/*
--------------------------------------------------------
3️⃣ insertAdjacentText()
--------------------------------------------------------
🧠 Definition:
Inserts **plain text** at a precise position relative to an element.
- Text is automatically converted into a text node.
- No HTML parsing occurs.

🔹 Syntax:
element.insertAdjacentText(position, text);

Positions: same as insertAdjacentElement

🔹 Example:
const footer = document.createElement("footer");
footer.textContent = "Footer";
document.body.append(footer);

// Insert text after the footer
footer.insertAdjacentText("afterend", "Text After Footer");

// Insert text at the beginning of the footer
footer.insertAdjacentText("afterbegin", "Start Text — ");

/*
--------------------------------------------------------
4️⃣ Comparison Table
--------------------------------------------------------
| Method                   | Inserts       | Input Type      | Notes                           |
|---------------------------|---------------|----------------|---------------------------------|
| insertAdjacentElement()   | DOM element   | Node            | Precise positioning relative to element |
| insertAdjacentHTML()      | HTML content  | String (HTML)   | Parses HTML string              |
| insertAdjacentText()      | Text node     | String (Text)   | Plain text only, no HTML parsing |

--------------------------------------------------------
5️⃣ Position Options Summary
--------------------------------------------------------
| Position        | Where it Inserts                                     |
|-----------------|-----------------------------------------------------|
| beforebegin     | Before the element itself (as previous sibling)     |
| afterbegin      | Inside element, at start (first child)             |
| beforeend       | Inside element, at end (last child)                |
| afterend        | After the element itself (as next sibling)         |

--------------------------------------------------------
6️⃣ Developer Tips
--------------------------------------------------------
1. Use insertAdjacentElement when you have a DOM Node to insert.
2. Use insertAdjacentHTML when you want to insert **HTML strings dynamically**.
3. Use insertAdjacentText when inserting **plain text only**.
4. More precise than append, prepend, before, after for dynamic positioning.
5. Supports inserting content without removing or overwriting existing children.

*/
