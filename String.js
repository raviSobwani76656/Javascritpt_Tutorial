const str = "Hello";

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse = reverse + str[i];
}

console.log(reverse);

let reverse2 = "";

function palindromCheck(strr) {
  for (let i = str.length - 1; i >= 0; i--) {
    reverse2 = reverse2 + strr[i];
  }

  return reverse2 === strr;
}

console.log(palindromCheck("TENET"));
