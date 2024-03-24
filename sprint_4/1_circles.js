const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class Pair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Mappa {
  constructor() {
    this.pairs = [];
  }

  get() {
    return this.pairs.reduce((acc, cur) => {
      acc.push(cur.key);
      return acc;
    }, []);
  }

  set(key, value) {
    for (const pair of this.pairs) {
      if (pair.key === key) {
        pair.value = value;
        return;
      }
    }
    const newPair = new Pair(key, value);
    this.pairs.push(newPair);
  }
}

const mappa = new Mappa();

let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine > 0) {
    mappa.set(line);
  }
  currentLine++;
});

process.stdin.on("end", solve);

function solve() {
  const result = mappa.get();
  result.forEach((el) => process.stdout.write(`${el}\n`));
}
