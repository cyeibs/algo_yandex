const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let num = 0;

_reader.on("line", (line) => {
  num = Number(line);
});

function isPowerOfFour(n) {
  if (n < 1) {
    return false;
  }

  while (n % 4 == 0) {
    n /= 4;
  }

  return n == 1;
}

process.stdin.on("end", solve);

function solve() {
  const powerOfFour = isPowerOfFour(num);
  process.stdout.write(`${powerOfFour}`);
}
