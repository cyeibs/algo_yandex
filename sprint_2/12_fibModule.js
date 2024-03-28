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
  let ab = [1, 1];
  let d = 10 ** k;
  let fib;

  if (n < 2) {
    fib = 1;
  } else {
    n -= 1;
    for (let i = 0; i < n; i++) {
      let s = (ab[0] + ab[1]) % d;
      ab[0] = ab[1];
      ab[1] = s;
      fib = ab[1];
    }
  }
  return fib;
}

process.stdin.on("end", solve);

function solve() {
  const fibModule = getFibModule(n, k);
  process.stdout.write(`${fibModule}`);
}
