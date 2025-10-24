/*
========================================================================
📘 JavaScript DOM: removeChild() Method
========================================================================
*/

/*
1️⃣ Definition:
- The removeChild() method removes a **specific child node** from a parent node.
- Returns the removed node.
- Only works for **direct children** of the parent.

🔹 Syntax:
parentNode.removeChild(childNode);
*/

/*
2️⃣ Example: Removing a specific child
*/
const parentDiv = document.createElement("div");
parentDiv.id = "parent";
document.body.append(parentDiv);

const childPara = document.createElement("p");
childPara.textContent = "This is a child paragraph";
parentDiv.append(childPara);

// Remove the child
parentDiv.removeChild(childPara);

/*
3️⃣ Removing using child index or first/last element
*/
// Remove first child
parentDiv.removeChild(parentDiv.firstElementChild);

// Remove last child
parentDiv.removeChild(parentDiv.lastElementChild);

// Remove second child (index 1)
parentDiv.removeChild(parentDiv.children[1]);

/*
4️⃣ Error Handling:
- If the node is not a child of the parent, removeChild() will throw an error.
if (parentDiv.contains(childPara)) {
  parentDiv.removeChild(childPara);
}

/*
5️⃣ Tips:
- Useful when you have a parent reference and want to remove specific children.
- Returns the removed node, so you can reuse it.
- Works only on direct children.
- Modern alternative: element.remove()
*/

/*
========================================================================
📘 JavaScript DOM: remove() Method
========================================================================
*/

/*
1️⃣ Definition:
- The remove() method removes the element **itself** from the DOM.
- No need to reference the parent element.
- Simpler and cleaner than removeChild().

🔹 Syntax:
element.remove();
*/

/*
2️⃣ Example: Removing a single element
*/
const para = document.createElement("p");
para.textContent = "Hello World";
document.body.append(para);

// Remove element directly
para.remove();

/*
3️⃣ Removing first or last child using parent only
*/
const container = document.getElementById("container");

// Remove first child
container.firstElementChild.remove();

// Remove last child
container.lastElementChild.remove();

/*
4️⃣ Removing all children dynamically
*/
while (container.firstElementChild) {
  container.firstElementChild.remove();
}

/*
5️⃣ Comparison: remove() vs removeChild()

| Feature               | remove()                        | removeChild()                         |
|-----------------------|---------------------------------|--------------------------------------|
| Requires parent?      | ❌ No                          | ✅ Yes (need parent)                  |
| Removes element itself?| ✅ Yes                         | ❌ No (removes child from parent)    |
| Returns removed node?  | ❌ No                          | ✅ Yes                                |
| Cleaner syntax?       | ✅ Simple and modern            | ❌ Slightly verbose                   |
| Browser support       | IE ❌, modern browsers ✅       | ✅ All browsers                        |

6️⃣ Tips:
- Use remove() for direct element removal.
- Use removeChild() when you have the parent and want to remove a specific child.
- For dynamic removal of multiple children, combine remove() with a while loop.
*/
