const arr = [23, 4, 5, 33, 4];

const arr2 = new Array(34, 3, 4, 4, 5, 6, 45);

const arr3 = Array.of(1, 2, 3, 4, 8);

const str = "RaVi Sobwani";

console.log(Array.from(str));

console.log(Array.from({ name: "Taciviai" }));

console.log(arr);

console.log(arr2);

console.log(arr3);

console.log(arr2[4]);

console.log(arr3.at(4));

// arr2.push(344, 3, 22, 2, 1);
// arr2.pop();

// arr2.shift(343, 43);

const nestedArray = [
  [2, 3, 53, 5],
  [34, 5, 35, 563, 5],
  [3, 5, 4, 6, 46],
];

console.log(nestedArray[2][4]);

console.log(nestedArray[1][3]);

//merging Array

const a = [2, 4, 53, 43, 5, 5];

const b = [3523, 5, 6, 6, 44, 64];

const c = a.concat(b);

console.log(c);

const d = [...a, ...b];

console.log(d);

const y = [34, 4, 6, 45, [34, 3, 6, 35, 63, [3, 5, 345, 3]]];

console.log(y.flat(3));

const array3D = [
  [3, 2, 1, 2, 2122],
  [1, 5, 34, 5, 34, 5],

  [2, 5, 3, 6, 35, 6, 3],
];

console.log(array3D[2][4]);

const array2D = [
  [[3, 2, 1, 2, 2122]], // array2D[0]
  [[1, 5, 34, 5, 34, 5]], // array2D[1]
  [[2, 5, 3, 6, 35, 6, 3]], // array2D[2]
];

console.log(array2D[0][0][4]);

const array3DD = [
  [2, 4, [34, 35, 3, 5, 6, 35, 5]],
  [[2, 3, 4, 3, 5, 5, 3]],
  [[34, 3, 6, 4, 64, 46, 6]],
];

console.log(array3DD[2][0][3]);
