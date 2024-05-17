const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let num;

inputInterface.on("line", function (line) {
  num = Number(line);
});

process.stdin.on("end", solve);

function toBinary(num) {
  if (num === 0) return "0";

  let str = "";
  while (num > 0) {
    let c = String(num % 2);
    str = c + str;
    num = Math.floor(num / 2);
  }
  return str;
}

function solve() {
  const getBinary = toBinary(num);
  process.stdout.write(`${getBinary}`);
}
