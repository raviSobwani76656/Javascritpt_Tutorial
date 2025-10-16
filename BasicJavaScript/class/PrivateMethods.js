/*
=============================
   PRIVATE PROPERTIES & METHODS
=============================

1. What are Private Properties/Methods?
---------------------------------------
- Private properties or methods are only accessible **inside the class**.
- Cannot be accessed from outside the class or by class instances.
- Use the `#` prefix to define private members (modern JavaScript feature).

2. Syntax
---------
class ClassName {
  #privateProperty;       // private property
  #privateMethod() { ... } // private method
}
*/

class BankAccount {
  // Private property
  #balance = 0;

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
    else console.log("Deposit amount must be positive");
  }

  // Public method to get balance
  getBalance() {
    return this.#balance;
  }

  // Private method
  #secretMessage() {
    console.log("This is a secret method!");
  }

  // Public method that can use private method
  showSecret() {
    this.#secretMessage();
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100

// Trying to access private property/method directly
// console.log(account.#balance);    // ❌ SyntaxError
// account.#secretMessage();         // ❌ SyntaxError

// Accessing private method via public method
account.showSecret(); // This is a secret method!

/*
3. Key Points
-------------
- Private members start with `#`.
- Only accessible **inside the class**.
- Cannot be accessed from instances or outside the class.
- Useful for **hiding internal state or implementation details**.
- Works with **methods and properties**.

4. Notes
--------
- Private members are **different from conventionally “private”** (like _underscore _prop), which is only a naming convention.
- True privacy is enforced by JavaScript runtime with `#`.
*/
