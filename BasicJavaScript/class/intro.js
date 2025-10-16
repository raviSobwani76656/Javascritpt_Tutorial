/*
=============================
        JAVASCRIPT CLASSES
=============================

1. What is a Class?
-------------------
- A class is a blueprint for creating objects.
- Defines properties (data) and methods (functions) for the objects.
- Think of it as a template from which multiple objects can be created.
*/

// Defining a Class
class Person {
  // constructor is used to initialize object properties
  constructor(name, age) {
    this.name = name; // instance property
    this.age = age; // instance property
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  // Method to increment age
  haveBirthday() {
    this.age += 1;
    console.log(`I am now ${this.age} years old.`);
  }
}

/*
2. Creating Objects (Instances)
-------------------------------
- Use the 'new' keyword to create an object from the class.
- Each object has its own copy of properties but shares methods via prototype.
*/
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Accessing properties
console.log(person1.name); // Alice
console.log(person2.age); // 30

/*
3. Using Methods
----------------
- Methods operate on the specific object instance.
- Changing one object does not affect other instances.
*/
person1.greet(); // Hello, my name is Alice.
person1.haveBirthday(); // I am now 26.

person2.greet(); // Hello, my name is Bob.
person2.haveBirthday(); // I am now 31

/*
4. Key Points
-------------
- 'constructor()' runs automatically when a new object is created.
- 'this' refers to the current object instance.
- Methods inside the class are added to the object's prototype.
- Use 'new ClassName()' to create an object.
- Each object has its own properties but shares methods.
*/

/*
5. Optional Next Steps (Advanced)
---------------------------------
- Static methods: Call methods directly on the class without creating an object.
- Private properties & methods: Use '#' to hide data inside the class.
- Inheritance: Classes can extend other classes to reuse code.
*/
