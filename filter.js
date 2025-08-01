const ar1 = [2, 5, 35, 36, 36, 324634, 6];
const result = ar1.filter((num) => num <= 35);

console.log(result);

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
];

const result1 = users.filter((item) => {
  return item.age >= 30;
});

console.log(result1);

console.log(users);
