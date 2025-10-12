const array = [23, 53, 25, 23, 2, 2, 3, 23];
const target = 48;

function twoSum() {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
}

console.log(twoSum());
// Output: [ [23, 25], [25, 23], [46, 2], etc. depending on data ]
