const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let sequence = "";

inputInterface.on("line", function (line) {
  sequence = line;
});

process.stdin.on("end", solve);

function is_correct_bracket_seq(string) {
  let stack = [];
  let openingBrackets = "([{";
  let closingBrackets = ")]}";
  let matchingBrackets = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < string.length; i++) {
    if (openingBrackets.includes(string[i])) {
      stack.push(string[i]);
    } else if (closingBrackets.includes(string[i])) {
      if (stack.length === 0) {
        return "False";
      }
      let lastBracket = stack.pop();
      if (matchingBrackets[string[i]] !== lastBracket) {
        return "False";
      }
    }
  }

  return stack.length === 0 ? "True" : "False";
}

function solve() {
  const isCorrectSeq = is_correct_bracket_seq(sequence);
  process.stdout.write(`${isCorrectSeq}`);
}
