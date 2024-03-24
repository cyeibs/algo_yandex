// Задача: B.Ловкость рук
// Компилятор: Node.js 14.15.5
// Вердикт: OK
// https://contest.yandex.ru/contest/22450/run-report/107483770/

var readline = require("readline");
var inputInterface = readline.createInterface({ input: process.stdin });

let filteredChars = [];
let actionsPerPlayer = 0;
let isFirstLine = true;

inputInterface.on("line", function (line) {
  if (isFirstLine) {
    actionsPerPlayer = parseInt(line);
    if (isNaN(actionsPerPlayer)) {
      console.error(
        "Первая строка должна быть кол-вом одновременных кликов игроком"
      );
      process.exit(1);
    }
    isFirstLine = false;
  } else {
    filteredChars.push(...line.split("").filter((el) => el !== "."));
  }
});

process.stdin.on("end", solve);

function getMaxPoints(actionsPerPlayer, filteredChars) {
  let totalClicks = actionsPerPlayer * 2;
  let setOfGames = [...new Set(filteredChars)].filter((a) => a);
  let counter = 0;
  let result = 0;

  for (let i = 0; i < setOfGames.length; i++) {
    counter = 0;
    for (let j = 0; j < filteredChars.length; j++) {
      if (filteredChars[j] === setOfGames[i]) {
        ++counter;
      }
      if (counter > totalClicks) {
        counter = 0;
        break;
      }
    }
    if (counter <= totalClicks && counter > 0) {
      result = result + 1;
    }
  }

  return result;
}

function solve() {
  const maxPoints = getMaxPoints(actionsPerPlayer, filteredChars);
  process.stdout.write(`${maxPoints}`);
}
