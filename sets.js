const mySet = new Set([
  23, 3, 6, 34, 43, 53, 5, 6, 4, 434, 5, 345, 345, 345, 34,
]);

mySet.add;
console.log(mySet);

console.log(mySet.has(3));

console.log(mySet.size);

for (const [key, element] of mySet) {
  console.log(key + ":-" + element);
}
