const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let arr = [],
  x,
  left = 0,
  right,
  currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine == 0) {
  } else if (currentLine === 1) {
    arr = line.split(" ").map(Number);
    right = arr.length;
  } else {
    x = Number(line);
  }
  currentLine++;
});

process.stdin.on("end", solve);

function binarySearch(arr, x, left, right) {
  if (right <= left && left != 0) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] >= x && (arr[mid - 1] < x || mid == 0)) {
    return mid + 1;
  } else if (x <= arr[mid]) {
    return binarySearch(arr, x, left, mid);
  } else {
    return binarySearch(arr, x, mid + 1, right);
  }
}

function solve() {
  const firstDay = binarySearch(arr, x, left, right);
  const secondDay = binarySearch(arr, x * 2, left, right);
  process.stdout.write(`${firstDay} ${secondDay}`);
}
