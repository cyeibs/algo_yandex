const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let num = 0;

_reader.on("line", (line) => {
  num = Number(line);
});

function getFactor(num) {
  let factors = [];
  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }

  let n = 3;
  while (num !== 1) {
    if (num % n === 0) {
      factors.push(n);
      num /= n;
    } else {
      n += 2;
    }
  }

  return factors.join(" ");
}

process.stdin.on("end", solve);

function solve() {
  const factor = getFactor(num);
  process.stdout.write(`${factor}`);
}
