const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let nSize,
  mSize,
  n = [],
  m = [],
  currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine == 0) {
    nSize = Number(line);
  } else if (currentLine === 1) {
    mSize = Number(line);
  } else if (currentLine === 2) {
    n = [...line.split(" ").map(Number)];
  } else {
    m = [...line.split(" ").map(Number)];
  }
  currentLine++;
});

process.stdin.on("end", solve);

function getKElement(n, nSize, m, mSize, k) {
  if (nSize > mSize) {
    return getKElement(m, mSize, n, nSize, k);
  }

  if (nSize === 0) {
    return m[k - 1];
  }

  if (k === 1) {
    return Math.min(n[0], m[0]);
  }

  let i = Math.min(nSize, Math.floor(k / 2));
  let j = Math.min(mSize, Math.floor(k / 2));

  if (n[i - 1] > m[j - 1]) {
    return getKElement(n, nSize, m.slice(j), mSize - j, k - j);
  } else {
    return getKElement(n.slice(i), nSize - i, m, mSize, k - i);
  }
}

function solve() {
  let total = nSize + mSize;
  if (total % 2 === 1) {
    const result = getKElement(n, nSize, m, mSize, Math.floor(total / 2) + 1);
    process.stdout.write(`${result}`);
  } else {
    const k1 = total / 2;
    const k2 = k1 + 1;
    const med1 = getKElement(n, nSize, m, mSize, k1);
    const med2 = getKElement(n, nSize, m, mSize, k2);
    const result = (med1 + med2) / 2;
    process.stdout.write(`${result}`);
  }
}
