const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let firstWord = 0;
let secondWord = [];
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine === 0) {
    firstWord = line;
  } else {
    secondWord = line;
  }
  currentLine++;
});

process.stdin.on("end", solve);

function checkEqualWords(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return "NO";
  }

  const dictionaryMapOne = new Map();
  const dictionaryMapTwo = new Map();

  for (let i = 0; i < firstWord.length; i++) {
    if (dictionaryMapOne.has(firstWord[i])) {
      if (dictionaryMapOne.get(firstWord[i]) !== secondWord[i]) {
        return "NO";
      }
    } else {
      dictionaryMapOne.set(firstWord[i], secondWord[i]);
    }

    if (dictionaryMapTwo.has(secondWord[i])) {
      if (dictionaryMapTwo.get(secondWord[i]) !== firstWord[i]) {
        return "NO";
      }
    } else {
      dictionaryMapTwo.set(secondWord[i], firstWord[i]);
    }
  }

  return "YES";
}

function solve() {
  const equality = checkEqualWords(firstWord, secondWord);
  process.stdout.write(`${equality}`);
}
