const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class MyQueueSized {
  constructor() {
    this.queue = new Array();
    this.size = 0;
    this.head = new Node();
    this.tail = new Node();
  }
  put(x) {
    let node = new Node(x, null);
    if (this.size == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  get() {
    if (this.size == 0) {
      return "error";
    }
    let value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
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
