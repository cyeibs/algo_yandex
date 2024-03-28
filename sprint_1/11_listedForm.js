const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let list = 0;
let num = 0;
let currentLine = 0;

_reader.on("line", (line) => {
  if (currentLine == 1) {
    list = line.split(" ").map(Number);
  } else if (currentLine == 2) {
    num = Number(line);
  }
  currentLine++;
});

function getListedFormSum(list, num) {
  let i = list.length - 1;
  let carry = 0;
  let sumList = [];
  let numAsList = Array.from(String(num), Number).reverse();

  while (i >= 0 || numAsList.length > 0 || carry != 0) {
    let sum =
      (i >= 0 ? list[i] : 0) +
      (numAsList.length > 0 ? numAsList.shift() : 0) +
      carry;
    carry = Math.floor(sum / 10);
    sumList.push(sum % 10);
    i--;
  }

  return sumList.reverse().join(" ");
}

process.stdin.on("end", solve);

function solve() {
  console.log("list", list);
  const listedFormSum = getListedFormSum(list, num);
  process.stdout.write(`${listedFormSum}`);
}
