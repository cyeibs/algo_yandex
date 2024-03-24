const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let a = 0;
let m = 0;
let s = 0;
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine === 0) {
    a = Number(line);
  } else if (currentLine === 1) {
    m = Number(line);
  } else {
    s = line;
  }
  currentLine++;
});

process.stdin.on("end", solve);

function getPolinomialHash(a, m, s) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash * a + s.charCodeAt(i)) % m;
  }
  return hash;
}

function solve() {
  const polinomialHash = getPolinomialHash(a, m, s);
  process.stdout.write(`${polinomialHash}`);
}
