// 📘================================================================
// 🧠 HTML Attributes & JavaScript DOM Manipulation Notes
// 📘================================================================

// -------------------------------------------------------------
// 🔹 What are Attributes?
// -------------------------------------------------------------
// - Attributes provide **additional information** about HTML elements.
// - They appear in the HTML tag and can be accessed or modified via JS.
// - Examples: id, class, src, href, alt, title, data-* attributes

// Example HTML:
// <img id="myImg" src="image.jpg" alt="My Image" title="Image Title">

// -------------------------------------------------------------
// 🔹 Accessing Attributes in JS
// -------------------------------------------------------------
const img = document.getElementById("myImg");

// 1️⃣ Using getAttribute()
console.log(img.getAttribute("src")); // "image.jpg"
console.log(img.getAttribute("alt")); // "My Image"

// 2️⃣ Using property directly (works for standard attributes)
console.log(img.src); // Full URL of image
console.log(img.alt); // "My Image"

// 3️⃣ data-* attributes
// HTML: <div id="user" data-name="Ravi" data-age="24"></div>
const userDiv = document.getElementById("user");
console.log(userDiv.getAttribute("data-name")); // "Ravi"
console.log(userDiv.dataset.name); // "Ravi"
console.log(userDiv.dataset.age); // "24"

// -------------------------------------------------------------
// 🔹 Setting / Modifying Attributes
// -------------------------------------------------------------
const link = document.createElement("a");

// Using setAttribute()
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");
link.textContent = "Visit Example";
document.body.appendChild(link);

// Using properties directly (preferred for standard attributes)
link.href = "https://newexample.com";
link.target = "_self";

// Setting data-* attributes
link.dataset.id = "12345"; // Creates data-id="12345"

// -------------------------------------------------------------
// 🔹 Removing Attributes
// -------------------------------------------------------------
link.removeAttribute("target"); // removes the target attribute
console.log(link.hasAttribute("target")); // false

// -------------------------------------------------------------
// 🔹 Checking if an attribute exists
// -------------------------------------------------------------
console.log(link.hasAttribute("href")); // true
console.log(link.hasAttribute("class")); // false

// -------------------------------------------------------------
// 🔹 Common Use-Cases / Best Practices
// -------------------------------------------------------------
// ✅ Use getAttribute() / setAttribute() for **all attributes**, including non-standard or custom ones
// ✅ Use element.property for **standard HTML attributes** (id, className, src, href, etc.)
// ✅ Use dataset for data-* attributes: element.dataset.key
// ✅ Always ensure parent exists before appending a new element

// Example: Creating a div dynamically with id, class, and data attributes
const div = document.createElement("div");
div.id = "sayHi"; // sets id
div.className = "greeting"; // sets class
div.dataset.user = "Ravi"; // sets data-user="Ravi"
div.textContent = "Hello There";
document.body.appendChild(div);

// -------------------------------------------------------------
// 🔹 Summary Table
// -------------------------------------------------------------
/*
| Method / Property         | Description                               | Notes |
|---------------------------|-------------------------------------------|-------|
| element.getAttribute(name)| Get attribute value                        | Works for standard & custom |
| element.setAttribute(name, value) | Set attribute value                    | Works for standard & custom |
| element.removeAttribute(name) | Remove attribute                          | N/A |
| element.hasAttribute(name) | Check if attribute exists                  | N/A |
| element.property           | Access standard attributes (id, class, src, href, etc.) | More modern approach |
| element.dataset.key        | Access data-* attributes                   | key is camelCase |
*/
