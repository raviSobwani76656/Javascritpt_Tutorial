// // 📘 JavaScript Inheritance - Full Notes

// // 🔷 What is Inheritance?
// // Inheritance allows one class (child/subclass) to inherit properties and methods from another class (parent/superclass).
// // This promotes code reuse and specialization.

// // 🔹 Syntax:
// class Parent {
//   constructor() {
//     // parent constructor
//   }

//   parentMethod() {
//     console.log("This is from the parent");
//   }
// }

// class Child extends Parent {
//   constructor() {
//     super(); // ✅ Must call parent constructor
//   }

//   childMethod() {
//     console.log("This is from the child");
//   }
// }

// // 🔸 Creating an instance
// const obj = new Child();
// obj.parentMethod(); // inherited
// obj.childMethod(); // own method

// // --------------------------------------------------------
// // 🔹 constructor()
// // Special method that runs when a new object is created from a class.
// // It is used to initialize object properties.

// class Animal {
//   constructor(name) {
//     this.name = name; // this refers to the object being created
//   }
// }

// // --------------------------------------------------------
// // 🔹 this
// // Refers to the current object instance.
// // Used to assign or access properties/methods of the object.

// class Example {
//   constructor(value) {
//     this.value = value; // 'this.value' is the property; 'value' is the parameter
//   }
// }

// // --------------------------------------------------------
// // 🔹 extends
// // Used to make one class inherit from another.

// class Dog extends Animal {
//   // Dog now has access to Animal's properties and methods
// }

// // --------------------------------------------------------
// // 🔹 super()
// // Used inside a child class:
// // 1. To call the parent class's constructor → super(...)
// // 2. To call a parent method → super.methodName()

// class DogWithColor extends Animal {
//   constructor(name, color) {
//     super(name); // ✅ calls Animal's constructor
//     this.color = color;
//   }

//   describe() {
//     superSpeak(); // calling parent method (if needed)
//     console.log(`${this.name} is a ${this.color} dog`);
//   }
// }

// // --------------------------------------------------------
// // 🔹 Method Overriding
// // The child class can define the same method name as the parent to override it.

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// // --------------------------------------------------------
// // 🔹 Calling Parent Method from Overridden Method

// class LoudDog extends Animal {
//   speak() {
//     super.speak(); // ✅ Call parent method first
//     console.log(`${this.name} barks louder`);
//   }
// }

// // --------------------------------------------------------
// // 🧪 Full Example

// class AnimalFull {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound: ${this.sound}`);
//   }

//   info() {
//     console.log(`${this.name} is an animal.`);
//   }
// }

// class DogFull extends AnimalFull {
//   constructor(name, sound, color) {
//     super(name, sound); // Call parent constructor
//     this.color = color;
//   }

//   speak() {
//     super.speak(); // Call parent method
//     console.log(`${this.name} also barks loudly`);
//   }

//   describe() {
//     console.log(`${this.name} is a ${this.color} dog`);
//   }
// }

// const dog = new DogFull("Buddy", "Woof", "brown");

// dog.speak();
// // Output:
// // Buddy makes a sound: Woof
// // Buddy also barks loudly

// dog.info();
// // Output: Buddy is an animal.

// dog.describe();
// // Output: Buddy is a brown dog

// // --------------------------------------------------------
// // ✅ Summary Table (Comment Reference Only)

// /*
// Concept             | Keyword/Usage       | Description
// --------------------|---------------------|---------------------------------------------
// Inheritance         | extends             | Child class inherits from parent
// Constructor         | constructor()       | Initializes object properties
// Object Context      | this                | Refers to the current object
// Parent Constructor  | super()             | Calls parent constructor
// Parent Method Call  | super.method()      | Calls method from parent class
// Override Method     | method() in child   | Replaces parent's method with own version
// */

// // --------------------------------------------------------
// // 🚫 Common Mistakes (Comment Reference Only)

// /*
// ❌ Using this before super()
// ✅ Fix: Always call super() first inside child constructor

// ❌ Not passing arguments to super()
// ✅ Fix: Pass the required parameters that parent constructor expects

// ❌ Calling instance method on class
// ✅ Fix: Use object to call instance methods (e.g., obj.method()), not Class.method()
// */

// // --------------------------------------------------------
// // ✅ Pro Tip (Comment Reference Only)
// /*
// Even when inside the parent class constructor,
// "this" refers to the final object being created (usually an instance of the child class).
// So both parent and child methods/properties apply to the same object.
// */

class AirCraft {
  constructor(brand, weight) {
    (this.brand = brand), (this.weight = weight);
  }
  speed() {
    console.log(this.brand);
    console.log(this.weight);
  }
}

const aircraft23 = new AirCraft("Bond", 34);

aircraft23.speed();

class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  introduction() {
    console.log(this.name);
  }
}

const dog = new Animal("chichuala", 34);

dog.introduction();

class Cat extends Animal {
  constructor(name, cost) {
    super(name);
    this.cost = cost;
  }

  greet() {
    console.log(` the name is ${this.name} and cost is ${this.cost}`);
  }
}

const cat3 = new Cat("shelly", 34);

cat3.greet();

class AnimalKingdom {
  constructor(name, breed) {
    (this.name = name), (this.breed = breed);
  }

  animalIntro() {
    console.log(`the animal name is ${this.name} and ${this.breed}`);
  }
}

class rat extends AnimalKingdom {
  constructor(name, speed) {
    super(name);
    this.speed;
  }

  speed() {
    console.log(`rat has a speed of 1km/hr `);
  }
}

const Giraffe = new AnimalKingdom("tat", "Giraffe");

Giraffe.animalIntro();

const ratt = new rat("Robert", "1km/hr");

ratt.speed();
