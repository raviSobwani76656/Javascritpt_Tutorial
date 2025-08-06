//Polymorphism is one of the core concepts of Object-Oriented Programming (OOP).
//  It means “many forms.” In JavaScript, polymorphism allows different classes to define methods
// that have the same name but behave differently.

class Animal {
  speed() {
    console.log("runs at the speed of 45km/hr");
  }
}

class Dog extends Animal {
  speed() {
    console.log("runs at the speed of 60 km/he");
  }
}

class Cat extends Animal {
  speed() {
    console.log("runs at the speed at 75km/hr");
  }
}

const animalArray = [new Dog(), new Cat()];

animalArray.forEach((animal) => animal.speed());

// ✅ Function Polymorphism in JavaScript

// A single function behaves differently based on arguments
function greet(name) {
  if (typeof name === "string") {
    console.log(`Hello, ${name}!`);
  } else if (Array.isArray(name)) {
    name.forEach((n) => console.log(`Hello, ${n}!`));
  } else {
    console.log("Hello, Guest!");
  }
}

// Calling greet with a string
greet("Alice"); // Output: Hello, Alice!

// Calling greet with an array of names
greet(["Bob", "Charlie"]);
// Output:
// Hello, Bob!
// Hello, Charlie!

// Calling greet with no argument
greet(); // Output: Hello, Guest!

/*
✅ This is function polymorphism:
- The same function name "greet"
- Behaves differently depending on the input type
- This is achieved using JavaScript’s dynamic typing
*/
