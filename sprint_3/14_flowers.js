const readline = require("readline");

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let intervalsArr = [];
let currentLine = 0;

inputInterface.on("line", (line) => {
  if (currentLine > 0) {
    intervalsArr.push(line.split(" ").map(Number));
  }
  currentLine++;
});

inputInterface.on("close", solve);

function getIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let merged = [];

  for (let [start, end] of intervals) {
    if (merged.length === 0 || merged[merged.length - 1][1] < start) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        end
      );
    }
  }

  return merged;
}

function solve() {
  const result = getIntervals(intervalsArr);
  process.stdout.write(`${result.map((el) => el.join(" ")).join("\n")}`);
}
