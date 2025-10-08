/* 
=========================================
        📘 JAVASCRIPT LEXICAL SCOPE
=========================================

👉 Definition:
Lexical Scope (also known as Static Scope) means the scope of a variable 
is determined by where it is defined in the source code — 
NOT by where the function is called.

Inner functions can access variables defined in their outer functions, 
but outer functions CANNOT access inner variables.

JavaScript decides variable accessibility during compilation, 
based on the structure of the code (not runtime).

-----------------------------------------
*/

/* 
=========================================
1️⃣ BASIC EXAMPLE OF LEXICAL SCOPE
=========================================
*/

function outer() {
  let name = "Ravi";

  function inner() {
    console.log(name); // ✅ Accessible due to lexical scope
  }

  inner();
}

outer();

/*
💡 Explanation:
- `inner()` is defined inside `outer()`.
- Because of lexical scope, `inner()` can access `name` from `outer()`.
- The relationship is established at definition time, not at execution.
*/

/* 
=========================================
2️⃣ LEXICAL VS DYNAMIC SCOPE
=========================================
*/

let city = "Delhi";

function outer() {
  let city = "Mumbai";
  inner(); // call inner from outer
}

function inner() {
  console.log(city);
}

outer(); // Output: Delhi ✅

/*
💡 Explanation:
- JavaScript uses LEXICAL SCOPE (not dynamic).
- So it checks where `inner()` is DEFINED, not where it's CALLED.
- Since `inner` is defined globally, it uses the global `city` variable.
*/

/* 
=========================================
3️⃣ NESTED FUNCTIONS & SCOPE CHAIN
=========================================
*/

function outer() {
  let a = 10;

  function middle() {
    let b = 20;

    function inner() {
      let c = 30;
      console.log(a, b, c); // ✅ Accesses all outer variables
    }

    inner();
  }

  middle();
}

outer();

/*
💡 Explanation:
- `inner()` can access `a` (outermost), `b` (middle), and `c` (itself).
- The connection between these scopes is called the SCOPE CHAIN.
*/

/* 
=========================================
4️⃣ OUTER CANNOT ACCESS INNER VARIABLES
=========================================
*/

function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a, b); // ✅ 10 20
  }

  inner();
  console.log(a); // ✅ accessible
  // console.log(b); // ❌ ReferenceError
}

/*
💡 Explanation:
- Outer functions can’t access variables declared inside inner functions.
- Inner functions can access everything in their lexical parent scopes.
*/

/* 
=========================================
5️⃣ LEXICAL SCOPE + CLOSURE
=========================================
*/

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

/*
💡 Explanation:
- Even after `outer()` is done executing, `inner()` still remembers `count`.
- This is possible because of LEXICAL SCOPE + CLOSURE.
- `inner()` keeps a reference to its lexical environment.
*/

/* 
=========================================
6️⃣ LEXICAL SCOPE IN LOOPS
=========================================
*/

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

/*
✅ Output:
1
2
3

💡 Explanation:
- Each arrow function remembers its lexical scope (block) with its own `i`.
- If 'var' was used, output would be 4 4 4 due to function scope.
*/

/* 
=========================================
7️⃣ LEXICAL ENVIRONMENT (UNDER THE HOOD)
=========================================
*/

function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a + b);
  }

  inner();
}

outer();

/*
💡 Explanation:
Each function creates a LEXICAL ENVIRONMENT:
1. Environment Record → Stores local variables.
2. Outer Lexical Environment Reference → Points to the scope where the function was defined.

inner() → has access to its own variable `b` and the outer variable `a`.
*/

/* 
=========================================
8️⃣ VISUAL REPRESENTATION
=========================================

Global Scope
 └── outer() Scope
       └── inner() Scope

Each nested function forms a chain that connects to its outer scope.
This chain of accessible environments is called the SCOPE CHAIN.
*/

/* 
=========================================
9️⃣ KEY TAKEAWAYS
=========================================
| Concept           | Description |
|-------------------|--------------|
| Lexical Scope     | Scope decided by where the function is defined |
| Scope Chain       | Chain of accessible parent scopes |
| Inner Functions   | Can access variables from outer functions |
| Outer Functions   | Cannot access inner variables |
| Closures          | Functions that remember variables from their lexical scope |

-----------------------------------------
⚡ Lexical Scope = "WHERE it’s written"
NOT = "WHERE it’s called"
-----------------------------------------
*/
