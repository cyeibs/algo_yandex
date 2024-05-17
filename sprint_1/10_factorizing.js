const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let num = 0;

_reader.on("line", (line) => {
  num = Number(line);
});

function getFactor(num) {
  let prime_factors = [];
  let div = 2;

  while (div * div <= num) {
    if (num % div) {
      div++;
    } else {
      num /= div;
      prime_factors.push(div);
    }
  }

  if (num > 1) {
    prime_factors.push(num);
  }

  return prime_factors.join(" ");
}

process.stdin.on("end", solve);

function solve() {
  const factor = getFactor(num);
  process.stdout.write(`${factor}`);
}
