const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

let string = [];

io_interface.on("line", function (line) {
  string = line;
});

process.stdin.on("end", solve);

function isPalindrom(string) {
  const result =
    string
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "")
      .split("")
      .join("") ===
    string
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "")
      .split("")
      .reverse()
      .join("");
  return result ? "True" : "False";
}

function solve() {
  const result = isPalindrom(string);
  process.stdout.write(`${result}`);
}
