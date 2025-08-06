// Encapsulation means wrapping the data (variables ) and methods (functions) that are going to work
// on that data in a single unit called object and also restricting access to the direct access to some
// object components

class User {
  #password; // private field are declared using #

  constructor(name, password) {
    (this.name = name), (this.#password = password);
  }

  comparing(input) {
    return input === this.#password;
  }
}
const User1 = new User("Ravi ", 2323);
console.log(User1.name);
console.log(User1.password);
console.log(User1.comparing(2323));

// 🟩 OOPS Concept: Encapsulation

// ✅ Definition:
// Encapsulation is the process of wrapping data (variables) and methods (functions) into a single unit (class).
// It helps to protect data from outside interference and misuse by using private variables and controlled access methods.

// In JavaScript (ES6+), we use the '#' symbol to create private fields.

class BankAccount {
  #balance = 0; // private field

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Public method to access balance
  getBalance() {
    return `Balance for ${this.owner}: ₹${this.#balance}`;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `₹${amount} deposited successfully.`;
    } else {
      return "Invalid deposit amount.";
    }
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return `₹${amount} withdrawn successfully.`;
    } else {
      return "Insufficient balance.";
    }
  }
}

// Testing encapsulation
const myAccount = new BankAccount("Ravi", 1000);

console.log(myAccount.getBalance()); // Balance for Ravi: ₹1000
console.log(myAccount.deposit(500)); // ₹500 deposited successfully.
console.log(myAccount.withdraw(300)); // ₹300 withdrawn successfully.
console.log(myAccount.getBalance()); // Balance for Ravi: ₹1200

// ❌ Trying to access private field directly
console.log(myAccount.#balance); // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class
