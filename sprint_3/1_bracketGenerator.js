const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let parenthesisCount = 0;

inputInterface.on("line", function (line) {
  parenthesisCount = Number(line);
});

process.stdin.on("end", solve);

function generateParenthesisInOrder(
  result = [],
  current = "",
  open = n,
  close = 0
) {
  if (open === 0 && close === 0) {
    return result.push(current);
  }

  if (open > 0) {
    generateParenthesisInOrder(result, current + "(", open - 1, close + 1);
  }
  if (close > 0) {
    generateParenthesisInOrder(result, current + ")", open, close - 1);
  }

  return result;
}

function solve() {
  const result = [];
  const parenthesisInOrder = generateParenthesisInOrder(
    result,
    "",
    parenthesisCount,
    0
  );
  process.stdout.write(`${result.join("\n")}`);
}
