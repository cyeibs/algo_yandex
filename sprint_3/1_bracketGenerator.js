const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let parenthesisCount = 0;

inputInterface.on("line", function (line) {
  parenthesisCount = Number(line);
});

process.stdin.on("end", solve);

function generateParenthesisInOrder(
  n,
  open = 0,
  close = 0,
  str = "",
  arr = []
) {
  if (str.length === n * 2) {
    return arr.push(str);
  }

  if (open < n) {
    generateParenthesisInOrder(n, open + 1, close, str + "(", arr);
  }
  if (close < open) {
    generateParenthesisInOrder(n, open, close + 1, str + ")", arr);
  }

  return arr.join("\n");
}

function solve() {
  const parenthesisInOrder = generateParenthesisInOrder(parenthesisCount);
  process.stdout.write(`${parenthesisInOrder}`);
}
