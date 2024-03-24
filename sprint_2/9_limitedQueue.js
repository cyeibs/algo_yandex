const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class MyQueueSized {
  constructor(max_size) {
    this.queue = new Array(max_size).fill(null);
    this.head = 0;
    this.tail = 0;
    this.max_n = max_size;
    this.size = 0;
  }
  is_empty() {
    return this.size == 0;
  }
  push(x) {
    if (this.size != this.max_n) {
      this.queue[this.tail] = x;
      this.tail = (this.tail + 1) % this.max_n;
      this.size += 1;
    } else return "error";
  }
  pop() {
    if (this.is_empty()) {
      return "None";
    }
    let x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = [this.head + 1] % this.max_n;
    this.size -= 1;
    return x;
  }
  peek() {
    if (this.is_empty()) {
      return "None";
    }
    return this.queue[this.head];
  }
}

const commands = [];
let maxSize = 0;
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine === 1) {
    maxSize = Number(line);
  } else if (currentLine > 1) {
    commands.push(line);
  }
  currentLine++;
});

process.stdin.on("end", solve);

function solve() {
  const stack = new MyQueueSized(maxSize);
  for (const command of commands) {
    if (command.startsWith("push")) {
      const [, item] = command.split(" ");
      const result = stack.push(item);
      if (result === "error") {
        process.stdout.write(`${result}\n`);
      }
    } else if (command === "pop") {
      const result = stack.pop();
      process.stdout.write(`${result}\n`);
    } else if (command === "peek") {
      process.stdout.write(`${stack.peek()}\n`);
    } else if (command === "size") {
      process.stdout.write(`${stack.size}\n`);
    }
  }
}
