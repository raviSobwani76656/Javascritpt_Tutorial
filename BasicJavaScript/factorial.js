function FactorialCal(num) {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(FactorialCal(4));

// ---------------------------------------------------------------------------------------------------------------------------
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

let x = factorial(5); // x = 120
console.log(x);

/*------------------------------------------------------------------------------------------------------------------ */

function factorialCalculate(Num) {
  let fac = 1;
}
