// 🔒 Abstraction in JavaScript (OOP Notes)

// ✅ What is Abstraction?
// Abstraction is the concept of hiding internal implementation details
// and showing only the essential features to the user.
// It helps reduce complexity and increases security by exposing only what is necessary.

// ✅ Real-Life Example
// Think of an ATM machine – you interact with buttons, not the internal logic of how money is processed.

// ✅ How it is achieved in JavaScript:
// In JavaScript, abstraction is implemented using:
// - Classes
// - Private fields (using # symbol)
// - Public methods to interact with private data

// ✅ Example:

class Account {
  // #balance is a private field (not directly accessible from outside)
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // Public method to add money
  addingMoney(money) {
    if (money > 0) {
      this.#balance += money;
    }
  }

  // Public method to withdraw money
  withdawMoney(money) {
    if (money > 0 && money < this.#balance) {
      this.#balance -= money;
    }
  }

  // Public method to get current balance
  getbalance() {
    console.log(`Current balance: ₹${this.#balance}`);
  }
}

// ✅ Usage:

const newAccount = new Account("Ravi Sobwani", 37473);
newAccount.withdawMoney(473);
newAccount.getbalance(); // Output: Current balance: ₹37000

// ❌ newAccount.#balance; // ❌ Error: Private field '#balance' must be declared in an enclosing class

// 🔁 Summary:
// - Users interact only with public methods: `addingMoney`, `withdawMoney`, `getbalance`
// - Internal logic and balance storage is abstracted using private field `#balance`
