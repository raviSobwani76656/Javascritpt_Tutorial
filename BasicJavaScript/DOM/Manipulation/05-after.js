/*
--------------------------------------------------------
📘 JavaScript DOM: after()
--------------------------------------------------------

🧠 Definition:
The `after()` method inserts nodes or text **immediately after** 
the element it is called on — i.e., it adds **siblings after the element** 
in the DOM tree.

Think of it as:  
👉 "Insert this content right after me in the DOM."

--------------------------------------------------------
🔹 Syntax:
--------------------------------------------------------
  element.after(node1, node2, ..., text);

- node1, node2, ... → Any DOM Node (e.g., div, p, span)
- text → Plain string (automatically converted to a text node)
- You can insert multiple nodes or strings at once

--------------------------------------------------------
✅ Example 1: Basic Usage
--------------------------------------------------------
*/
const para1 = document.createElement("p");
para1.textContent = "Paragraph 1";
document.body.append(para1);

const para2 = document.createElement("p");
para2.textContent = "Paragraph 2 inserted after paragraph 1";

para1.after(para2);

/*
📝 Output:
<p>Paragraph 1</p>
<p>Paragraph 2 inserted after paragraph 1</p>

💡 Notes:
- `para2` becomes a sibling immediately after `para1`.
- The original `para1` remains unchanged.
*/

/*
--------------------------------------------------------
✅ Example 2: Inserting Multiple Nodes and Text
--------------------------------------------------------
*/
const div = document.createElement("div");
div.textContent = "I am the div";
document.body.append(div);

const strong = document.createElement("strong");
strong.textContent = "Important: ";

div.after("Text after div — ", strong, " — More text");

/*
📝 Output:
Text after div — <strong>Important: </strong> — More text
<div>I am the div</div>

💡 Notes:
- You can combine text and elements together.
- They appear in the same order as passed.
*/

/*
--------------------------------------------------------
✅ Example 3: Real-World Use Case
--------------------------------------------------------
*/
const article = document.querySelector(".article");
const adBanner = document.createElement("div");
adBanner.className = "banner";
adBanner.textContent = "🔥 Special Offer — Limited Time!";

// Add an ad banner after the article
article.after(adBanner);

/*
💡 Use Case:
Useful for dynamically adding elements like ads, alerts, 
or sections immediately after an existing DOM node.
*/

/*
--------------------------------------------------------
✅ Example 4: after() vs append()
--------------------------------------------------------
| Method        | Adds Where?                         | Notes |
|---------------|-------------------------------------|-------|
| after()       | Immediately after the element       | Sibling insertion |
| append()      | Inside element, at the end          | Child insertion |

Example:

<div id="box">Hello</div>

box.after("Text");
👉 Result: <div id="box">Hello</div> Text

box.append("Text");
👉 Result: <div id="box">HelloText</div>
*/

/*
--------------------------------------------------------
🔹 Browser Support
--------------------------------------------------------
- Modern browsers support `after()` (Chrome, Firefox, Edge, Safari)
- Not supported in old browsers (like IE 11)
- For old browser compatibility, you can use:
  element.parentNode.insertBefore(newNode, element.nextSibling);
*/

/*
--------------------------------------------------------
⚙️ Developer Tips
--------------------------------------------------------
1️⃣ Use `after()` when you want to insert something as a sibling *after* an element.  
2️⃣ Use `before()` when you want to insert something as a sibling *before* an element.  
3️⃣ Use `prepend()` and `append()` when you want to insert content *inside* an element.  
4️⃣ Can insert multiple nodes or text in a single call.  
5️⃣ Sibling insertion does not remove the original element.  
--------------------------------------------------------
*/
