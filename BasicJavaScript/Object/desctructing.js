// ======================================================
// 🧠 OBJECT DESTRUCTURING IN JAVASCRIPT — COMPLETE NOTES
// ======================================================

// 🔹 1️⃣ Basic Object Destructuring
const user = { name: "Ravi", age: 25 };

const { name, age } = user;
console.log(name); // Ravi
console.log(age); // 25

// 🔹 2️⃣ Renaming Variables
// You can rename the variables while destructuring using the syntax:
// propertyName: newVariableName

const person = { name: "Ravi", age: 25 };

const { name: fullName, age: years } = person;
console.log(fullName); // Ravi
console.log(years); // 25

// 🔹 3️⃣ Default Values
// If a property doesn't exist, we can assign a default value

const employee = { name: "John" };

const { name: empName, salary = 30000 } = employee;
console.log(empName); // John
console.log(salary); // 30000

// 🔹 4️⃣ Nested Object Destructuring
const student = {
  id: 101,
  details: {
    name: "Ravi",
    marks: 95,
  },
};

const {
  details: { name: studentName, marks },
} = student;
console.log(studentName); // Ravi
console.log(marks); // 95

// 🔹 5️⃣ Combining Default + Renaming
const product = { price: 250 };

const { price: itemPrice = 100, stock: itemStock = 50 } = product;
console.log(itemPrice); // 250
console.log(itemStock); // 50

// 🔹 6️⃣ Using Rest Operator in Object Destructuring
// The rest operator collects remaining properties into a new object
const car = { brand: "BMW", model: "X5", color: "Black", year: 2023 };

const { brand, ...otherDetails } = car;
console.log(brand); // BMW
console.log(otherDetails); // { model: "X5", color: "Black", year: 2023 }

// 🔹 7️⃣ Nested with Rest Operator
const userDetails = {
  name: "Ravi",
  address: {
    city: "Mumbai",
    pincode: 400001,
  },
  contact: "9999999999",
};

const {
  address: { city, ...restAddress },
} = userDetails;
console.log(city); // Mumbai
console.log(restAddress); // { pincode: 400001 }

// 🔹 8️⃣ Destructuring in Function Parameters
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const info = { name: "Ravi", age: 25 };
displayUser(info); // Name: Ravi, Age: 25

// 🔹 9️⃣ Default Values in Function Destructuring
function greet({ name = "Guest", age = 18 } = {}) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Ravi" }); // Hello Ravi, age 18
greet(); // Hello Guest, age 18

// 🔹 🔟 Combining Nested + Renaming + Default
const employeeDetails = {
  emp: {
    name: "Ravi",
    dept: "IT",
  },
};

const {
  emp: { name: empFullName = "No Name", dept: empDept = "NA" },
} = employeeDetails;
console.log(empFullName); // Ravi
console.log(empDept); // IT

// 🔹 11️⃣ Real Use Case Example (API Response)
const apiResponse = {
  success: true,
  data: {
    id: 101,
    username: "ravi123",
    email: "ravi@example.com",
  },
};

const {
  data: { username, email },
} = apiResponse;
console.log(username); // ravi123
console.log(email); // ravi@example.com

// ======================================================
// 🔸 INTERVIEW QUESTIONS
// ======================================================

/*
1. What is object destructuring in JavaScript?
2. How do you rename a variable while destructuring an object?
3. How can you set a default value while destructuring?
4. What happens if a property does not exist in the object?
5. Can you destructure nested objects? Give an example.
6. How do you use the rest operator with object destructuring?
7. How can destructuring be used inside function parameters?
8. What happens if you destructure an object but the key doesn’t exist?
9. Can you combine default, renaming, and nested destructuring together?
10. What is the difference between `name` and `name: newName` syntax?
*/

// ======================================================
// 🔸 MEMORY CONCEPT
// ======================================================

/*
- Object destructuring doesn’t clone or copy the data.
- It just creates variables that reference the same memory for object values.
- For primitive values (string, number, boolean) → value is copied.
- For objects/arrays inside → reference is shared.
*/

const obj = { a: 1, b: { c: 2 } };
const { b } = obj;

b.c = 10;
console.log(obj.b.c); // 10 (✅ because same reference)
