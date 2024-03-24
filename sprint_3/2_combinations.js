const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let numButtons = [];

inputInterface.on("line", function (line) {
  numButtons = line.split("").map(Number);
});

process.stdin.on("end", solve);

let alphabet = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function generateCombinations(numsCombination, currentIndex = 0, str = "") {
  if (currentIndex === numsCombination.length) {
    return str;
  }

  let result = "";
  let letters = alphabet[numsCombination[currentIndex]];

  for (let index = 0; index < letters.length; index++) {
    let tmp = generateCombinations(
      numsCombination,
      currentIndex + 1,
      str + letters[index]
    );
    result += (result ? " " : "") + tmp;
  }

  return result;
}

function solve() {
  const combinations = generateCombinations(numButtons);
  process.stdout.write(`${combinations}`);
}
