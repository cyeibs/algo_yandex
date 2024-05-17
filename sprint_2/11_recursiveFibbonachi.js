const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let num = 0;

inputInterface.on("line", function (line) {
  num = Number(line);
});

process.stdin.on("end", solve);

function getFibSum(num, lhs = 1, rhs = 1) {
  if (num === 0 || num === 1) {
    return rhs;
  }
  return getFibSum(num - 1, rhs, lhs + rhs);
}

function solve() {
  const fib = getFibSum(num);
  process.stdout.write(`${fib}`);
}
