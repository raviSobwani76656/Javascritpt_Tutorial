function checkPrime(num) {
  if (num < 2) {
    console.log(num, "this is not a prime number");
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(num, "is not a prime number");
      return;
    }
  }
  console.log(num, "prime number");
}
checkPrime(7);
