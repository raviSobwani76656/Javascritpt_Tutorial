function Fibonacci(num) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < num; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

Fibonacci(10);
