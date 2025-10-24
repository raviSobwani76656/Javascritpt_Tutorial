/* 
--------------------------------------------------------
📘 JavaScript DOM Methods: append() vs appendChild()
--------------------------------------------------------

👉 Both methods are used to add new content (elements or text) 
   to a parent element in the DOM, but they differ in flexibility 
   and behavior.

--------------------------------------------------------
🔹 appendChild()
--------------------------------------------------------

🧠 Definition:
- Adds a single *Node object* (Element, Text, Comment, etc.)
  as the last child of a parent element.

🧩 Syntax:
  parentElement.appendChild(childNode)

✅ Example:
*/
const div1 = document.createElement("div");
const p = document.createElement("p");
p.textContent = "Hello World";

div1.appendChild(p);
document.body.appendChild(div1);

/*
📝 Output:
<body>
  <div><p>Hello World</p></div>
</body>

⚙️ Key Points:
- Accepts only one argument → must be a Node.
- Returns the appended node.
- Throws an error if you try to pass a string.
- Moves the node (does not clone it).
- Supported in all browsers, including old ones (like IE).

❌ Invalid Example:
  document.body.appendChild("Hello"); // ❌ TypeError
*/

/* 
--------------------------------------------------------
🔹 append()
--------------------------------------------------------

🧠 Definition:
- A more modern and flexible method for adding 
  text and/or multiple nodes at once.

🧩 Syntax:
  parentElement.append(...nodesOrStrings)

✅ Example:
*/
const div2 = document.createElement("div");
const strong = document.createElement("strong");
strong.textContent = "Class 12th";

div2.append("Hi there, I am studying in ", strong, " and my age is 14 years.");
document.body.append(div2);

/*
📝 Output:
<body>
  <div>Hi there, I am studying in <strong>Class 12th</strong> and my age is 14 years.</div>
</body>

⚙️ Key Points:
- Accepts multiple arguments (Nodes + Strings).
- Automatically converts strings into text nodes.
- Returns undefined (does not return appended node).
- Does not throw error when using strings.
- Not supported in very old browsers (like IE).

*/

/*
--------------------------------------------------------
⚖️ Comparison Table
--------------------------------------------------------

| Feature                     | appendChild()           | append()                         |
|------------------------------|--------------------------|----------------------------------|
| Accepts only Node objects    | ✅ Yes                   | ❌ No (also accepts text)        |
| Accepts multiple arguments   | ❌ No                    | ✅ Yes                           |
| Can append text directly     | ❌ No                    | ✅ Yes                           |
| Returns appended node        | ✅ Yes                   | ❌ No (returns undefined)        |
| Throws error for strings     | ✅ Yes                   | ❌ No                            |
| Browser compatibility (IE)   | ✅ Yes                   | ❌ No                            |

--------------------------------------------------------
🔸 Practical Tips
--------------------------------------------------------
1️⃣ Use appendChild() → when you need maximum browser support.
2️⃣ Use append() → for modern code, especially if you want to 
    append both text and elements together.
3️⃣ Both methods move existing nodes (they do not clone).
4️⃣ To duplicate a node, use node.cloneNode(true).

--------------------------------------------------------
✅ Example: Difference Demonstration
--------------------------------------------------------
*/
const container = document.createElement("div");
const span = document.createElement("span");
span.textContent = "World";

// Using appendChild()
container.appendChild(span);
// container.appendChild("Hello"); ❌ Error

// Using append()
container.append("Hello ", span, "!!!"); // ✅ Works perfectly
document.body.append(container);

/*
Final Output:
<div>Hello <span>World</span>!!!</div>
--------------------------------------------------------
*/
