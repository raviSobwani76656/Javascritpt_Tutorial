function largest(num) {
  let largest = num[0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }
  return largest;
}

console.log(largest([2, 6, 435, 3, 36, 43, 6, 6]));
