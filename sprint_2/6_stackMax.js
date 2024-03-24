const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class StackMax {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(Number(item));
  }

  pop() {
    if (this.items.length === 0) {
      return "error";
    } else {
      this.items.pop();
    }
  }

  get_max() {
    if (this.items.length === 0) {
      return "None";
    } else {
      return Math.max(...this.items);
    }
  }
}

const commands = [];

inputInterface.on("line", function (line) {
  commands.push(line);
});

process.stdin.on("end", solve);

function solve() {
  const stack = new StackMax();
  for (const command of commands) {
    if (command.startsWith("push")) {
      const [, item] = command.split(" ");
      stack.push(item);
    } else if (command === "pop") {
      const result = stack.pop();
      if (result === "error") {
        process.stdout.write(`${result}\n`);
      }
    } else if (command === "get_max") {
      process.stdout.write(`${stack.get_max()}\n`);
    }
  }
}
