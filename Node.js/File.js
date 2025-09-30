const fs = require("fs");

fs.writeFileSync("./test.txt", "hello nigga");

fs.writeFile("./test.txt", "jejjlsdf0", (err) => {
  console.log(err);
});

let result = fs.readFileSync("./test.txt", "utf-8");

console.log(result);

fs.readFile("./test.txt", "utf-8", (err, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

try {
  fs.readFileSync("./test.txt", "utf-8");
} catch (error) {
  console.log(error);
}

fs.appendFile("/test.txt", "35l532jl352532", (err) => {
  console.log(err);
});

const ppp = fs.appendFileSync("./test.txt", "535q3623", (err, result) => {
  if (err) {
    console.log(err);
  }
});

fs.cpSync("./test.txt", "copy.txt");

try {
  fs.unlinkSync("./test.txt");
  console.log("file deleted successfully");
} catch (error) {
  console.log(error);
}
