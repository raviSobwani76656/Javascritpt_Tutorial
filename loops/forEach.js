const arr = [2, 4, 5];

arr.forEach((element, index, array) => {
  console.log(element, index, array);
});

const arr1 = [
  {
    language: "python",
    filename: "py",
  },
  { language: "jabadcsript", filename: "js" },
  { language: "ed", filename: "edd" },
];

arr1.forEach((item) => {
  console.log(item.language);
});

const mySet = new Set([
  23, 3, 6, 34, 43, 53, 5, 6, 4, 434, 5, 345, 345, 345, 34,
]);

mySet.forEach((value, item) => {
  console.log(item, value);
});
