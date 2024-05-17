const readline = require("readline");

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr1 = [],
  arr2 = [];
let currentLine = 0;

inputInterface.on("line", (line) => {
  if (currentLine === 1) {
    arr1 = line.split(" ").map(Number);
  } else if (currentLine === 3) {
    arr2 = line.split(" ").map(Number);
    inputInterface.close();
  }
  currentLine++;
});

inputInterface.on("close", solve);

function greedyCookies(arr1, arr2) {
  let kidsArr = [...arr1].sort((a, b) => b - a);
  let cookiesArr = [...arr2].sort((a, b) => b - a);

  let count = 0;

  while (kidsArr.length > 0 && cookiesArr.length > 0) {
    if (cookiesArr[cookiesArr.length - 1] >= kidsArr[kidsArr.length - 1]) {
      count++;
      kidsArr.pop();
    }
    cookiesArr.pop();
  }

  return count;
}

function solve() {
  const result = greedyCookies(arr1, arr2);
  process.stdout.write(`${result}\n`);
}
