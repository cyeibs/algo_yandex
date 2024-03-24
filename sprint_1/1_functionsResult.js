const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let _inputLines = {
  a: 0,
  b: 0,
  c: 0,
  x: 0,
};

_reader.on("line", (line) => {
  const tmp = line.split(" ").map((num) => Number(num));
  _inputLines.a |= tmp[0];
  _inputLines.b |= tmp[2];
  _inputLines.c |= tmp[3];
  _inputLines.x |= tmp[1];
});

process.stdin.on("end", solve);

function getFunctionValue(array) {
  return array.a * Math.pow(array.x, 2) + array.b * array.x + array.c;
}

function solve() {
  const functionValue = getFunctionValue(_inputLines);
  process.stdout.write(`${functionValue}`);
}
