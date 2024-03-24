const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let length = 0;
let array = [];
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine === 0) {
    length = Number(line);
  } else if (currentLine === 1) {
    array.push(...line.split(" ").map(Number));
  }
  currentLine++;
});

process.stdin.on("end", solve);

function doBubbleSort(length, array) {
  let resArr = [];
  for (let i = 0; i < length - 1; i++) {
    let f = 0;
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        f = 1;
      }
    }
    if (!f) {
      break;
    }
    resArr.push([...array]);
  }
  return resArr.length === 0
    ? array.join(" ")
    : resArr.map((el) => el.join(" ")).join("\n");
}

function solve() {
  const sortedArrays = doBubbleSort(length, array);
  process.stdout.write(`${sortedArrays}`);
}
