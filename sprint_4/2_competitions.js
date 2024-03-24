const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let length = 0;
let array = [];
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine === 0) {
    length = Number(line);
  } else {
    array.push(...line.split(" ").map(Number));
  }
  currentLine++;
});

process.stdin.on("end", solve);

function getCompetitionResult(length, array) {
  array = array.map((el) => {
    if (el === 0) {
      return (el = -1);
    }
    return el;
  });

  const mappa = new Map();
  mappa.set(0, -1);

  let overallSum = 0;
  let res = 0;
  let tmp = 0;

  for (let i = 0; i < array.length; i++) {
    overallSum += array[i];
    if (mappa.has(overallSum)) {
      tmp = i - mappa.get(overallSum);
    } else {
      mappa.set(overallSum, i);
    }
    if (tmp > res) {
      res = tmp;
    }
  }

  return res;
}
function solve() {
  const competitionResult = getCompetitionResult(length, array);
  process.stdout.write(`${competitionResult}`);
}
