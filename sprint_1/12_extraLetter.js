const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let firstString, secondString;
let currentLine = 0;

_reader.on("line", (line) => {
  if (currentLine == 0) {
    firstString = line;
  } else if (currentLine == 1) {
    secondString = line;
  }
  currentLine++;
});

function getExtraLetter(firstString, secondString) {
  let charCountMap = new Map();

  for (let char of firstString) {
    let count = charCountMap.get(char) || 0;
    charCountMap.set(char, count + 1);
  }

  for (let char of secondString) {
    if (!charCountMap.has(char)) {
      return char;
    }
    let count = charCountMap.get(char);
    if (count === 1) {
      charCountMap.delete(char);
    } else {
      charCountMap.set(char, count - 1);
    }
  }
  return "";
}

process.stdin.on("end", solve);

function solve() {
  const extraLetter = getExtraLetter(firstString, secondString);
  process.stdout.write(`${extraLetter}`);
}
