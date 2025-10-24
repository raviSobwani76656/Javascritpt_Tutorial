/*
--------------------------------------------------------
📘 JavaScript DOM: before()
--------------------------------------------------------

🧠 Definition:
The `before()` method inserts nodes or text **immediately before**
the element it is called on — that means it adds *siblings before* 
the current element in the DOM.

Think of it like saying:
👉 “Insert this content right before me in the DOM tree.”

--------------------------------------------------------
🔹 Syntax:
--------------------------------------------------------
  element.before(node1, node2, ..., text);

--------------------------------------------------------
🧩 Parameters:
- node: Any DOM Node (like <div>, <p>, <span>, etc.)
- text: Plain string (automatically converted to a text node)
- Multiple nodes/text values can be added at once

--------------------------------------------------------
✅ Example 1: Basic Usage
--------------------------------------------------------
*/
const para = document.createElement("p");
para.textContent = "This is a paragraph.";

document.body.append(para); // <p>This is a paragraph.</p>

const heading = document.createElement("h2");
heading.textContent = "Heading Before Paragraph";

para.before(heading);

/*
📝 Output in DOM:
<h2>Heading Before Paragraph</h2>
<p>This is a paragraph.</p>

🧠 Explanation:
- `heading` is added *before* `para` as its sibling.
*/

/*
--------------------------------------------------------
✅ Example 2: Adding Multiple Nodes or Text
--------------------------------------------------------
*/
const div = document.createElement("div");
div.textContent = "I am the div";
document.body.append(div);

div.before(
  "This is text before div — ",
  document.createElement("hr"),
  " — More text"
);

/*
📝 Output:
This is text before div — 
<hr>
 — More text
<div>I am the div</div>

🧠 You can combine text and elements together.
They are inserted in the same order they are passed.
*/

/*
--------------------------------------------------------
✅ Example 3: Using before() Dynamically
--------------------------------------------------------
*/
const list = document.createElement("ul");
document.body.append(list);

const li1 = document.createElement("li");
li1.textContent = "Item 1";

const li2 = document.createElement("li");
li2.textContent = "Item 2";

list.append(li1);
li1.after(li2);

const newItem = document.createElement("li");
newItem.textContent = "🔥 New Item before Item 1";

li1.before(newItem);

/*
📝 Output:
<ul>
  <li>🔥 New Item before Item 1</li>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
*/

/*
--------------------------------------------------------
✅ Example 4: before() vs prepend()
--------------------------------------------------------

| Feature               | before()                               | prepend()                           |
|------------------------|----------------------------------------|-------------------------------------|
| Inserts inside element?| ❌ No (inserts outside, before element) | ✅ Yes (inserts inside, at beginning)|
| Affects parent element?| ✅ Yes (changes parent’s children order)| ✅ Yes                              |
| Adds multiple elements?| ✅ Yes                                 | ✅ Yes                              |

Example:

<div id="box">Hello</div>

box.before("Text");
👉 Result: "Text <div id='box'>Hello</div>"

box.prepend("Text");
👉 Result: "<div id='box'>Text Hello</div>"
*/

/*
--------------------------------------------------------
✅ Example 5: Real-World Use Case
--------------------------------------------------------
*/
const article = document.querySelector(".article");
const adBanner = document.createElement("div");
adBanner.className = "banner";
adBanner.textContent = "🔥 Special Offer — Limited Time!";

// Add an ad banner before an article
article.before(adBanner);

/*
🧠 Use Case:
Useful for dynamically adding elements like ads, alerts, 
section dividers, or headings before existing DOM nodes.
*/

/*
--------------------------------------------------------
✅ Example 6: before() with Text Nodes
--------------------------------------------------------
*/
const footer = document.createElement("footer");
footer.textContent = "This is the footer.";
document.body.append(footer);

footer.before("-----------");

/*
📝 Output:
-----------
<footer>This is the footer.</footer>

🧠 The string automatically becomes a text node.
*/

/*
--------------------------------------------------------
🔸 before() vs insertBefore()
--------------------------------------------------------

| Feature             | before()                              | insertBefore()                      |
|----------------------|---------------------------------------|------------------------------------|
| Simplicity           | ✅ Easier syntax (no reference needed) | ❌ Requires specifying parent + ref |
| Multiple Elements     | ✅ Yes                                | ❌ No                              |
| Text support         | ✅ Yes                                | ❌ No (only nodes)                 |
| Browser support       | Modern browsers only                 | All browsers (including old IE)   |

✅ Example using insertBefore():
parent.insertBefore(newNode, existingNode);

✅ Same thing using before():
existingNode.before(newNode);
*/

/*
--------------------------------------------------------
⚙️ Summary
--------------------------------------------------------
| Method      | Adds Content Where?           | Allows Multiple | Works with Text | Typical Use Case |
|--------------|------------------------------|-----------------|-----------------|------------------|
| before()     | Before current element       | ✅ Yes           | ✅ Yes           | Insert sibling before an element |
| after()      | After current element        | ✅ Yes           | ✅ Yes           | Insert sibling after an element |
| prepend()    | Inside, at start             | ✅ Yes           | ✅ Yes           | Add content to top of element |
| append()     | Inside, at end               | ✅ Yes           | ✅ Yes           | Add content to bottom of element |
| insertBefore()| Before existing child (old) | ❌ No            | ❌ No            | Old browser support |

--------------------------------------------------------
🧭 Developer Tip:
- Use `before()` when you need to add elements outside (as siblings).
- Use `prepend()` when you want to add elements inside (as children).
- `before()` is part of modern DOM APIs (no need for parent references).
--------------------------------------------------------
*/
