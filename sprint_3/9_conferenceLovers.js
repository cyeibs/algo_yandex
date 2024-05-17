const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let data = [];
let count = 0;
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine === 1) {
    data = line.split(" ").map(Number);
  } else if (currentLine === 2) {
    count = Number(line);
  }
  currentLine++;
});

process.stdin.on("end", solve);

function getTop(data, count) {
  const counter = new Map();
  data.forEach((val) => {
    counter.set(val, (counter.get(val) || 0) + 1);
  });

  const sortedData = Array.from(counter.entries()).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  const result = [];
  for (let i = 0; i < Math.min(count, sortedData.length); i++) {
    result.push(sortedData[i][0]);
  }

  return result.join(" ");
}

function solve() {
  const top = getTop(data, count);
  process.stdout.write(`${top}`);
}
