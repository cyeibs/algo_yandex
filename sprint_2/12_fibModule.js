const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let n;
let k;

_reader.on("line", (line) => {
  [n, k] = line.split(" ").map(Number);
});

function getFibModule(n, k) {
  let d = 10 ** k;
  let lhs = 1;
  let rhs = 1;

  for (let i = 0; i < n; ++i) {
    [lhs, rhs] = [rhs, lhs];
    rhs = (lhs + rhs) % d;
  }
  return lhs;
}

process.stdin.on("end", solve);

function solve() {
  const fibModule = getFibModule(n, k);
  process.stdout.write(`${fibModule}`);
}
