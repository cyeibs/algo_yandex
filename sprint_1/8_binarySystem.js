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
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }

  let delta = num1.length - num2.length;
  num2 = num2.padStart(num1.length, "0");

  let carry = 0;
  let sum = "";

  for (let i = num1.length - 1; i >= 0; i--) {
    let bitSum = Number(num1[i]) + Number(num2[i]) + carry;
    if (bitSum > 1) {
      bitSum = bitSum - 2;
      carry = 1;
    } else {
      carry = 0;
    }

    sum = bitSum + sum;
  }

  if (carry) {
    sum = "1" + sum;
  }

  return sum;
}

function solve() {
  const binarySum = getBinarySum(firstNum, secondNum);
  process.stdout.write(`${binarySum}`);
}
