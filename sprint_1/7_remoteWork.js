const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let num;

inputInterface.on("line", function (line) {
  num = Number(line);
});

process.stdin.on("end", solve);

function toBinary(num) {
  let str = "";

  while (num >= 1) {
    str += Math.floor(num) % 2;
    num = num / 2;
  }

  return +str.split("").reverse().join("");
}

function solve() {
  const getBinary = toBinary(num);
  process.stdout.write(`${getBinary}`);
}
