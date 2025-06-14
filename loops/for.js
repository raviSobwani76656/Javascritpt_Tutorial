for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) break;
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(`the value of the ining is ${i}`);

  for (let j = 0; j <= 10; j++) {
    console.log(`the value of inner loop ${j} and ${i}`);
  }
}
