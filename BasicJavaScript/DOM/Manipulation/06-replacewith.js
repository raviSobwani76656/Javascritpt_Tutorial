/*
--------------------------------------------------------
📘 JavaScript DOM: replaceWith()
--------------------------------------------------------

🧠 Definition:
The `replaceWith()` method **replaces an element itself** with one or more new nodes or text.
- The original element is **removed** from the DOM.
- The new content takes its place.

--------------------------------------------------------
🔹 Syntax:
--------------------------------------------------------
element.replaceWith(node1, node2, ..., text);

- node1, node2, ... → Any DOM Node (div, p, span, etc.)
- text → Plain string (automatically converted to a text node)
- Can replace with multiple nodes/text at once

--------------------------------------------------------
✅ Example 1: Replace a Single Element
--------------------------------------------------------
*/
const oldDiv = document.createElement("div");
oldDiv.textContent = "Old Content";
document.body.append(oldDiv);

const newDiv = document.createElement("div");
newDiv.textContent = "New Content";

oldDiv.replaceWith(newDiv);

/*
📝 Output:
<div>New Content</div>

💡 Notes:
- The original "Old Content" div is removed from the DOM.
- "New Content" div takes its position.
*/

/*
--------------------------------------------------------
✅ Example 2: Replace with Text
--------------------------------------------------------
*/
const para = document.createElement("p");
para.textContent = "This paragraph will be replaced";
document.body.append(para);

para.replaceWith("This is replacement text");

/*
📝 Output:
This is replacement text

💡 Notes:
- Strings are converted to text nodes automatically.
- Useful for simple replacements without creating elements.
*/

/*
--------------------------------------------------------
✅ Example 3: Replace with Multiple Elements
--------------------------------------------------------
*/
const container = document.createElement("div");
container.textContent = "Container to replace";
document.body.append(container);

const newH2 = document.createElement("h2");
newH2.textContent = "Heading";

const newP = document.createElement("p");
newP.textContent = "Paragraph replacing container";

container.replaceWith(newH2, newP);

/*
📝 Output:
<h2>Heading</h2>
<p>Paragraph replacing container</p>

💡 Notes:
- The original container is removed.
- Multiple nodes can replace it at once.
*/

/*
--------------------------------------------------------
✅ Example 4: Real-World Use Case
--------------------------------------------------------
*/
// Replacing an alert box with a confirmation message
const alertBox = document.createElement("div");
alertBox.className = "alert";
alertBox.textContent = "Old Alert!";
document.body.append(alertBox);

const confirmBox = document.createElement("div");
confirmBox.className = "confirm";
confirmBox.textContent = "New Confirmation Message";

alertBox.replaceWith(confirmBox);

/*
💡 Use Case:
- Dynamically replace notifications, modal content, or sections in SPA applications.
*/

/*
--------------------------------------------------------
🔹 Key Points
--------------------------------------------------------
1️⃣ The original element is **removed** from the DOM.  
2️⃣ Can insert one or multiple nodes or text at the same position.  
3️⃣ Useful for dynamic content replacement without manually removing the node first.  
4️⃣ Works only on the element itself (not a parent container).  
5️⃣ Modern DOM API (not supported in IE 11).  

--------------------------------------------------------
⚡ Quick Tip:
- To replace content **inside an element**, use `innerHTML` or `replaceChild`.  
- To replace the element itself in the DOM, `replaceWith()` is cleaner and more modern.  
--------------------------------------------------------
*/
