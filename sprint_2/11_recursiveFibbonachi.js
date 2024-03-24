const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let num = 0;

inputInterface.on("line", function (line) {
  num = Number(line);
});

process.stdin.on("end", solve);

function getFibSum(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return getFibSum(num - 1) + getFibSum(num - 2);
}

function solve() {
  const fibSum = getFibSum(num);
  process.stdout.write(`${fibSum}`);
}
