/*
=============================
       GETTERS & SETTERS
=============================

1. What are Getters & Setters?
-------------------------------
- **Getters** are special methods that **allow you to access object properties**.
- **Setters** are special methods that **allow you to set or update object properties**.
- They provide **controlled access** to private or internal properties.
- Syntax uses `get` and `set` keywords.

2. Benefits
------------
- Encapsulation: hide internal representation of data.
- Validation: control what values can be set.
- Read-only properties: getter without setter.
*/

class Person {
  // Private-ish property (underscore by convention)
  _name = "";
  _age = 0;

  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be positive");
    }
  }
}

// Creating object
const person1 = new Person("Alice", 25);

// Using getters
console.log(person1.name); // Alice
console.log(person1.age); // 25

// Using setters
person1.name = "Bob";
person1.age = 30;

console.log(person1.name); // Bob
console.log(person1.age); // 30

// Trying invalid values
person1.name = ""; // Name cannot be empty
person1.age = -5; // Age must be positive
