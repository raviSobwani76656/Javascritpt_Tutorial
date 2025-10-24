/* 
--------------------------------------------------------
📘 JavaScript DOM: Creating Elements
--------------------------------------------------------

🧠 Definition:
Creating elements dynamically allows you to build and 
manipulate HTML structure directly using JavaScript.

--------------------------------------------------------
🔹 1. document.createElement()
--------------------------------------------------------

🧩 Syntax:
  const element = document.createElement(tagName);

🧠 Description:
- Creates a new HTML element (Node) based on the tag name provided.
- The element is created in memory (not visible until appended to the DOM).

✅ Example:
*/
const heading = document.createElement("h1");  // Creates <h1>
heading.textContent = "Welcome to JavaScript DOM!"; // Adds text content
document.body.appendChild(heading); // Appends it to the body

/*
📝 Output:
<body>
  <h1>Welcome to JavaScript DOM!</h1>
</body>

⚙️ Key Points:
- The element is NOT displayed until appended.
- tagName must be a valid HTML tag (like div, span, p, etc.).
*/


/*
--------------------------------------------------------
🔹 2. document.createTextNode()
--------------------------------------------------------

🧩 Syntax:
  const text = document.createTextNode("Some text");

🧠 Description:
- Creates a *text node* manually (useful when you don’t want HTML parsing).
- Often used with appendChild().

✅ Example:
*/
const para = document.createElement("p");
const textNode = document.createTextNode("This is created using createTextNode().");

para.appendChild(textNode);
document.body.appendChild(para);

/*
📝 Output:
<p>This is created using createTextNode().</p>
*/


/*
--------------------------------------------------------
🔹 3. Setting Attributes
--------------------------------------------------------

🧩 Syntax:
  element.setAttribute(name, value);

✅ Example:
*/
const link = document.createElement("a");
link.textContent = "Visit Google";
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");

document.body.appendChild(link);

/*
📝 Output:
<a href="https://www.google.com" target="_blank">Visit Google</a>
*/


/*
--------------------------------------------------------
🔹 4. Adding Classes & IDs
--------------------------------------------------------

✅ Using className and id:
*/
const box = document.createElement("div");
box.className = "container"; // Adds a class
box.id = "mainBox";          // Adds an id
box.textContent = "I am a box!";
document.body.appendChild(box);

/*
✅ Using classList (modern way):
*/
box.classList.add("shadow", "rounded"); // Adds multiple classes
box.classList.remove("rounded");        // Removes a class
box.classList.toggle("active");         // Toggles a class


/*
--------------------------------------------------------
🔹 5. Adding Inline Styles
--------------------------------------------------------

✅ Example:
*/
const btn = document.createElement("button");
btn.textContent = "Click Me!";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.padding = "10px 20px";
btn.style.borderRadius = "5px";
document.body.appendChild(btn);

/*
📝 Output:
<button style="background-color: blue; color: white; ...">Click Me!</button>
*/


/*
--------------------------------------------------------
🔹 6. Nesting Elements
--------------------------------------------------------

✅ Example:
*/
const div = document.createElement("div");
const strong = document.createElement("strong");
strong.textContent = "Class 12th";

div.append("Hi, I am studying in ", strong, " and my age is 14 years.");
document.body.append(div);

/*
📝 Output:
<div>Hi, I am studying in <strong>Class 12th</strong> and my age is 14 years.</div>
*/


/*
--------------------------------------------------------
🔹 7. Cloning Elements
--------------------------------------------------------

🧩 Syntax:
  const clone = element.cloneNode(deep);

- deep = true → clones the element and its children.
- deep = false → clones only the element itself.

✅ Example:
*/
const original = document.createElement("p");
original.textContent = "I am the original paragraph.";

const clone = original.cloneNode(true); // Deep clone
document.body.append(original, clone);

/*
📝 Output:
<p>I am the original paragraph.</p>
<p>I am the original paragraph.</p>
*/


/*
--------------------------------------------------------
🔹 8. Removing Elements
--------------------------------------------------------

✅ Example:
*/
const msg = document.createElement("p");
msg.textContent = "This will be removed soon.";
document.body.appendChild(msg);

setTimeout(() => msg.remove(), 2000); // Removes after 2 seconds


/*
--------------------------------------------------------
⚙️ Summary of Common Methods
--------------------------------------------------------

| Action               | Method / Property               | Description                                |
|----------------------|---------------------------------|--------------------------------------------|
| Create element       | document.createElement()        | Creates a new HTML element                 |
| Create text          | document.createTextNode()       | Creates plain text node                    |
| Set attribute        | element.setAttribute()          | Adds or modifies an attribute              |
| Add class            | element.classList.add()         | Adds one or more classes                   |
| Add inline style     | element.style.property          | Applies inline CSS                         |
| Append element       | parent.append() / appendChild() | Adds element/text to parent                |
| Clone element        | element.cloneNode(true/false)   | Duplicates a node                          |
| Remove element       | element.remove()                | Deletes node from DOM                      |

--------------------------------------------------------
✅ In Practice
--------------------------------------------------------
const divBox = document.createElement("div");
divBox.classList.add("card");

const title = document.createElement("h2");
title.textContent = "Learning DOM Manipulation";

const desc = document.createElement("p");
desc.textCon
