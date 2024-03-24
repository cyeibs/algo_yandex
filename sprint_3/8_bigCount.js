const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let array = [];
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine === 0) {
  } else if (currentLine === 1) {
    array.push(...line.split(" ").map(Number));
  }
  currentLine++;
});

process.stdin.on("end", solve);

function getLargest(array) {
  return array
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
}

function solve() {
  const sortedArrays = getLargest(array);
  process.stdout.write(`${sortedArrays}`);
}
