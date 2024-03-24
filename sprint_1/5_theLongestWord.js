const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

let stringArray = [],
  length = 0,
  line_number = 0;

io_interface.on("line", function (line) {
  if (line_number === 0) {
    length = parseInt(line);
  } else {
    stringArray = line.split(" ");
  }
  line_number++;
});

process.stdin.on("end", solve);

function getLongestWord(stringArray) {
  let wordResult = { word: "", length: 0 };
  for (const word of stringArray) {
    if (word.length > wordResult.length) {
      wordResult.length = word.length;
      wordResult.word = word;
    }
  }
  return `${wordResult.word}\n${wordResult.length}`;
}

function solve() {
  const longestWord = getLongestWord(stringArray);
  process.stdout.write(`${longestWord}`);
}
