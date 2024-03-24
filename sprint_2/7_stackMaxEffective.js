const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class StackMaxEffective {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(item) {
    const max =
      this.maxStack.length > 0 ? this.maxStack[this.maxStack.length - 1] : item;
    this.maxStack.push(Number(item) > max ? item : max);
    this.stack.push(Number(item));
  }

  pop() {
    if (this.stack.length === 0) {
      return "error";
    } else {
      this.maxStack[this.maxStack.length - 1] >=
        this.stack[this.maxStack.length - 1] && this.maxStack.pop();
      this.stack.pop();
    }
  }

  get_max() {
    if (this.maxStack.length === 0) {
      return "None";
    } else {
      return this.maxStack[this.maxStack.length - 1];
    }
  }

  top() {
    if (this.stack.length === 0) {
      return "error";
    } else {
      return this.stack[this.maxStack.length - 1];
    }
  }
}

const commands = [];

inputInterface.on("line", function (line) {
  commands.push(line);
});

process.stdin.on("end", solve);

function solve() {
  const stack = new StackMaxEffective();
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
    } else if (command === "top") {
      process.stdout.write(`${stack.top()}\n`);
    }
  }
}
