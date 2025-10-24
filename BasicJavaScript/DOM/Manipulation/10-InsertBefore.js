/*
========================================================================
📘 JavaScript DOM: insertBefore() Method
========================================================================
*/

/*
1️⃣ Definition:
- The `insertBefore()` method inserts a **new node** before a **specified existing child node** of a parent.
- Works only with a **parent reference**.
- Syntax:
  parentNode.insertBefore(newNode, referenceNode);

- Parameters:
  1. newNode: The node you want to insert.
  2. referenceNode: The existing child node before which newNode will be inserted.
     - If referenceNode is null, newNode is added at the **end of the children list**.
*/

/*
2️⃣ Basic Example
*/
const parentDiv = document.createElement("div");
parentDiv.id = "container";
document.body.append(parentDiv);

const para1 = document.createElement("p");
para1.textContent = "Paragraph 1";

const para2 = document.createElement("p");
para2.textContent = "Paragraph 2";

parentDiv.append(para2); // Append second first

// Insert para1 before para2
parentDiv.insertBefore(para1, para2);

/*
📝 Output:
- DOM order:
  <div id="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
*/

/*
3️⃣ Inserting at the end
*/
const para3 = document.createElement("p");
para3.textContent = "Paragraph 3";

// referenceNode = null adds at the end
parentDiv.insertBefore(para3, null);

/*
4️⃣ Use Cases:
1. Insert elements at a specific position in a parent element.
2. Dynamically reorder elements.
3. Useful when combined with arrays/lists of elements for sorting or inserting.
*/

/*
5️⃣ Important Notes:
- Must have **parent reference** to use insertBefore.
- `referenceNode` must be a **child of the parent**.
- Modern alternatives:
  - `parent.append()` → add at the end
  - `parent.prepend()` → add at the start
  - `referenceNode.before()` → add relative to a node (simpler syntax in modern browsers)
*/

/*
6️⃣ Example: Dynamic insertion in a list
*/
const ul = document.createElement("ul");
document.body.append(ul);

["Banana", "Apple", "Mango"].forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;

  // Insert sorted: find first item greater than current fruit
  let inserted = false;
  for (let child of ul.children) {
    if (child.textContent > fruit) {
      ul.insertBefore(li, child);
      inserted = true;
      break;
    }
  }
  if (!inserted) {
    ul.appendChild(li); // insert at the end if no greater element
  }
});
