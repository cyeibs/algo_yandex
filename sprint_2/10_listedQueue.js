const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class MyQueueSized {
  constructor() {
    this.queue = new Array();
    this.size = 0;
    this.head = 0;
  }
  put(x) {
    this.queue.push(x);
    this.size += 1;
  }
  get() {
    if (this.size == 0) {
      return "error";
    }
    let x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = this.head + 1;
    this.size -= 1;
    return x;
  }
}

const commands = [];
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine > 0) {
    commands.push(line);
  }
  currentLine++;
});

process.stdin.on("end", solve);

function solve() {
  const stack = new MyQueueSized();
  for (const command of commands) {
    if (command.startsWith("put")) {
      const [, item] = command.split(" ");
      const result = stack.put(item);
      if (result === "error") {
        process.stdout.write(`${result}\n`);
      }
    } else if (command === "get") {
      const result = stack.get();
      process.stdout.write(`${result}\n`);
    } else if (command === "size") {
      process.stdout.write(`${stack.size}\n`);
    }
  }
}
