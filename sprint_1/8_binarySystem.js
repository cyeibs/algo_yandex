const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

let firstNum = 0;
let secondNum = 0;
let currentLine = 0;
_reader.on("line", (line) => {
  if (currentLine === 0) {
    firstNum = line;
  } else {
    secondNum = line;
  }
  currentLine++;
});

process.stdin.on("end", solve);

function getBinarySum(num1, num2) {
  let num1Bin = num1.toString(2);
  console.log("num1Bin", num1Bin);
  let num2Bin = num2.toString(2);

  let maxLength = Math.max(num1Bin.length, num2Bin.length);
  num1Bin = num1Bin.padStart(maxLength, "0");
  num2Bin = num2Bin.padStart(maxLength, "0");

  let carry = 0;
  let sum = [];

  for (let i = maxLength - 1; i >= 0; i--) {
    let bit1 = parseInt(num1Bin.charAt(i), 2);
    let bit2 = parseInt(num2Bin.charAt(i), 2);

    let bitSum = bit1 + bit2 + carry;
    sum.unshift(bitSum % 2);
    carry = Math.floor(bitSum / 2);
  }

  if (carry) sum.unshift(carry);

  return sum.join("");
}

function solve() {
  const binarySum = getBinarySum(firstNum, secondNum);
  process.stdout.write(`${binarySum}`);
}
