function swap(a, b) {
  console.log(`before swapping ${a} and ${b}`);
  let temp;
  temp = a;
  a = b;
  b = temp;
  console.log(`Affter swapping ${a} and ${b}`);
}

console.log(swap(6, 3));

function SwappingUsingThidVariables(a, b) {
  console.log(`BEfore swapping ${a} and ${b}`);

  a = a - b;
  b = b + a;

  a = b - a;

  console.log(`After swqapping ${a} and ${b}`);
}

SwappingUsingThidVariables(7, 3);


