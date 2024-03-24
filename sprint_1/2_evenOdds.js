const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let _inputLines = [];

_reader.on("line", (line) => {
  _inputLines = line.split(" ").map((num) => Number(num));
});

process.stdin.on("end", solve);

function isEvenOrOdd(array) {
  let isEvenA = array[0] % 2 === 0;
  let isEvenB = array[1] % 2 === 0;
  let isEvenC = array[2] % 2 === 0;
  if ((isEvenA && isEvenB && isEvenC) || (!isEvenA && !isEvenB && !isEvenC)) {
    return "WIN";
  } else {
    return "FAIL";
  }
}

function solve() {
  const result = isEvenOrOdd(_inputLines);
  process.stdout.write(`${result}`);
}
