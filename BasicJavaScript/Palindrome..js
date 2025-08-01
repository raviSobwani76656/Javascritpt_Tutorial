function checkPalindrome(str) {
  let reverse = "";

  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }

  console.log(reverse === str);
}

checkPalindrome("Ravi");
