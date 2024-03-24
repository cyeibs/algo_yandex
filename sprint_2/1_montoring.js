const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

let columnLength,
  rowLength,
  array = [],
  currentLine = 1;

io_interface.on("line", function (line) {
  if (currentLine === 1) {
    columnLength = Number(line);
  } else if (currentLine === 2) {
    rowLength = Number(line);
  } else {
    array.push(line.split(" ").map(Number));
  }
  currentLine++;
});

process.stdin.on("end", solve);

function getTranspilateSource(columnLength, rowLength, array) {
  let transpilatedArray = new Array(rowLength);
  for (let i = 0; i < rowLength; i++) {
    transpilatedArray[i] = new Array(columnLength);
  }

  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      transpilatedArray[j][i] = array[i][j];
    }
  }

  return transpilatedArray;
}

function solve() {
  const transpilated = getTranspilateSource(columnLength, rowLength, array);
  const result = transpilated.map((row) => row.join(" ")).join("\n");
  process.stdout.write(result);
}
