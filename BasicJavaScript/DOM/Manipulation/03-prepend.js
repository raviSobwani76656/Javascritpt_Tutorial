/*
--------------------------------------------------------
📘 JavaScript DOM: prepend()
--------------------------------------------------------

🧠 Definition:
The `prepend()` method inserts content (elements or text) 
**at the beginning** of a parent element — before its first child.

That means: 
→ append() adds content at the *end*,  
→ prepend() adds content at the *start*.

--------------------------------------------------------
🔹 Syntax:
--------------------------------------------------------
  parentElement.prepend(node1, node2, ..., text);

--------------------------------------------------------
🧩 Parameters:
- node: Any DOM Node (like <div>, <p>, <span>, etc.)
- text: Plain text string (automatically converted to a text node)

--------------------------------------------------------
✅ Example 1: Basic Usage
--------------------------------------------------------
*/
const container = document.createElement("div");
container.id = "container";

const para = document.createElement("p");
para.textContent = "This is the last paragraph.";

const heading = document.createElement("h2");
heading.textContent = "I am prepended at the top!";

document.body.append(container); // Add container first
container.append(para); // Add paragraph at end
container.prepend(heading); // Add heading at the beginning

/*
📝 Output in DOM:
<div id="container">
  <h2>I am prepended at the top!</h2>
  <p>This is the last paragraph.</p>
</div>
*/

/*
--------------------------------------------------------
✅ Example 2: Prepending Multiple Elements and Text
--------------------------------------------------------
*/
const strong = document.createElement("strong");
strong.textContent = "Important!";

container.prepend("Read this first: ", strong, " — then continue reading.");

/*
📝 Output:
<div id="container">
  Read this first: <strong>Important!</strong> — then continue reading.
  <h2>I am prepended at the top!</h2>
  <p>This is the last paragraph.</p>
</div>

🧠 Explanation:
You can prepend multiple nodes or strings at once.
They appear in the same order as passed.
*/

/*
--------------------------------------------------------
✅ Example 3: Using prepend() on Existing Elements
--------------------------------------------------------
*/
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Item 1";

const li2 = document.createElement("li");
li2.textContent = "Item 2";

ul.append(li1, li2);
document.body.append(ul);

const newItem = document.createElement("li");
newItem.textContent = "🔥 New First Item";
ul.prepend(newItem);

/*
📝 Output:
<ul>
  <li>🔥 New First Item</li>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
*/

/*
--------------------------------------------------------
✅ Example 4: Prepending Plain Text
--------------------------------------------------------
*/
const div = document.createElement("div");
div.textContent = "This is existing content.";
document.body.append(div);

div.prepend("Hello, "); // Adds text at the beginning

/*
📝 Output:
<div>Hello, This is existing content.</div>
*/

/*
--------------------------------------------------------
🔸 Difference Between prepend() and append()
--------------------------------------------------------

| Feature             | prepend()                          | append()                           |
|----------------------|------------------------------------|------------------------------------|
| Position             | Adds at the *start* of the element | Adds at the *end* of the element   |
| Can add text?        | ✅ Yes                             | ✅ Yes                             |
| Can add multiple?    | ✅ Yes                             | ✅ Yes                             |
| Modern method?       | ✅ Modern (introduced in ES6+)      | ✅ Modern (introduced in ES6+)      |

✅ Example:
div.prepend("Start ");  → text appears before content
div.append(" End");     → text appears after content

Result:
<div>Start existing content End</div>
*/

/*
--------------------------------------------------------
🔸 prepend() vs insertBefore()
--------------------------------------------------------

| Feature             | prepend()                                | insertBefore()                      |
|----------------------|------------------------------------------|------------------------------------|
| Simplicity           | Easier to use (no need to specify ref)   | Needs reference node               |
| Syntax               | parent.prepend(newNode)                  | parent.insertBefore(newNode, ref)  |
| Multiple elements     | ✅ Can insert multiple                   | ❌ Only one element at a time      |

✅ Example with insertBefore():
parent.insertBefore(newNode, parent.firstChild);

✅ Same thing with prepend():
parent.prepend(newNode);
*/

/*
--------------------------------------------------------
✅ Example 5: Real-World Use Case
--------------------------------------------------------
*/
const chatBox = document.querySelector(".chat-box");

function addNewMessage(text) {
  const msg = document.createElement("p");
  msg.textContent = text;
  chatBox.prepend(msg);
}

// Every new message appears at the top (like notifications or chat)
addNewMessage("New message received!");
addNewMessage("Welcome back!");
addNewMessage("You have 3 unread messages!");

/*
--------------------------------------------------------
⚙️ Summary
--------------------------------------------------------
| Method       | Adds Content        | Allows Multiple | Works with Text | Typical Use Case |
|---------------|--------------------|-----------------|-----------------|------------------|
| prepend()     | At the beginning   | ✅ Yes           | ✅ Yes           | Chat, Logs, News |
| append()      | At the end         | ✅ Yes           | ✅ Yes           | Lists, Comments  |
| insertBefore()| Custom position    | ❌ No            | ❌ No            | Controlled insert|

--------------------------------------------------------
🧭 Developer Tip:
- If you only need to insert one element at the top, use prepend().
- If you need compatibility with older browsers (IE), use insertBefore().
- prepend() is more flexible because it can take multiple nodes or strings.
--------------------------------------------------------
*/
