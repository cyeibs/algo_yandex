const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let arr = [],
  currentLine = 0,
  length = 0;

inputInterface.on("line", function (line) {
  if (currentLine == 0) {
    length = Number(line);
  }
  if (currentLine == 1) {
    arr = [...line.split(" ").map(Number)];
  }
  currentLine++;
});

process.stdin.on("end", solve);

function sortArrayWithTwoPointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  let current = 0;

  while (current <= right) {
    if (arr[current] === 0) {
      [arr[left], arr[current]] = [arr[current], arr[left]];
      left++;
      current++;
    } else if (arr[current] === 2) {
      [arr[current], arr[right]] = [arr[right], arr[current]];
      right--;
    } else {
      current++;
    }
  }
  return arr.join(" ");
}

function solve() {
  if (length > 0) {
    let result = sortArrayWithTwoPointers(arr);
    process.stdout.write(`${result}`);
  }
}
