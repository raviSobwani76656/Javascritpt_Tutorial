//A closure is a function that retains access to its outer
// function’s variables even after the outer function has finished executing.
//  In other words, a closure is formed when an inner
// function uses variables defined in its outer function’s scope.

function outer() {
  let count = 0; // variable inside outer function

  function inner() {
    count++; // inner function uses outer function's variable
    console.log(count);
  }

  return inner; // return inner function so it can be used later
}

const counter = outer(); // outer runs once and returns inner

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

function adder() {
  let num = 5;
  function add(num3) {
    console.log(num + num3);
  }

  return add;
}

const addfunction = adder();
addfunction(34);

function addOutterfunction(num) {
  function addInnerFunction(numinner) {
    console.log(num + numinner);
  }
  return addInnerFunction;
}

const neededFunction = addOutterfunction(32);

neededFunction(4);
