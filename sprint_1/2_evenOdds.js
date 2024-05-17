const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let _inputLines = [];

_reader.on("line", (line) => {
  _inputLines = line.split(" ").map((num) => Number(num));
});

process.stdin.on("end", solve);

function evenAndOdds(array) {
  let y =
    Math.abs(array[0] % 2) + Math.abs(array[1] % 2) + Math.abs(array[2] % 2);

  if (y === 0 || y === 3) {
    return "WIN";
  } else {
    return "FAIL";
  }
}

function solve() {
  const array = _inputLines;
  const ans = evenAndOdds(array);
  process.stdout.write(`${ans}`);
}
