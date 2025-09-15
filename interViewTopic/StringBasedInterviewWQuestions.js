function comparingString(string1, string2) {
  if ((string1, string2)) {
    return string1 === string2;
  }
}

console.log(comparingString("TOTHE", "TOTHE"));

function comparingAnalygam(string1, string2) {
  if (string1.length !== string2.length) return false;

  if (string1.split("").sort().join("") === string2.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(comparingAnalygam("TOTHEBAT", "TOTHETAT"));

function stringCharacterReverse(string) {
  const newArrray = string.split(" ");

  charArray = newArrray.map((word) => {
    return word.split("").reverse().join("");
  });

  const result = charArray.join(" ");

  return result;
}

console.log(stringCharacterReverse("HI There Rajesh"));

function vowelsCount(string) {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
  };

  for (let i = 0; i < string.length; i++) {
    if (string[i] in vowels) {
      vowels[string[i]]++;
    }
  }
  return vowels;
}

console.log(vowelsCount("To the batman"));

function vowelsCount(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}

console.log(vowelsCount("Hi There Ravi"));

function charReverse(string) {
  let reverse = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      reverse = reverse + string[i].toLowerCase();
    } else {
      reverse = reverse + string[i].toUpperCase();
    }
  }
  return reverse;
}

console.log(charReverse("Hi There"));

function findingLongestWord(string) {
  const arrayOfString = string.split(" ");

  let longestWord = arrayOfString[0];

  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > longestWord.length) {
      longestWord = arrayOfString[i];
    }
  }
  return longestWord;
}

console.log(findingLongestWord("Hi there Ravi SObwani"));

function firstLetterCapital(string) {
  const newarray = string.split(" ");

  const newString = newarray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return newString.join(" ");
}

console.log(firstLetterCapital("to thte nantna"));

function countingWords(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i]) {
      count++;
    }
  }
  return count;
}

console.log(countingWords("TO the batmnan"));

function stringDuplicate(string) {
  let unique = "";

  for (let i = 0; i < string.length; i++) {
    if (!unique.includes(string[i])) {
      unique = unique + string[i];
    }
  }
  return unique;
}

console.log(stringDuplicate("Programmingtttttttt"));

const obj = {};

obj["name"] = "Ravi";

console.log(obj);

function findingFrequency(string) {
  const frequency = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      frequency[string[i]] = (frequency[string[i]] || 0) + 1;
    }
  }
  return frequency;
}

console.log(findingFrequency("tothestring"));

function findingFrequencyAndReturningTheHighestOne(string) {
  let freq = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      freq[string[i]] = (freq[string[i]] || 0) + 1;
    }
  }

  let max = 0;
  let 

  for (const key in freq) {
    if (freq[key] > max) {
      max = object[key];
    }
  }
  return max;
}

console.log(findingFrequencyAndReturningTheHighestOne("HI THERE"));
