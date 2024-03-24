// Задача: A.Ближайший ноль
// Компилятор: Node.js 14.15.5
// Вердикт: OK
// https://contest.yandex.ru/contest/22450/run-report/107483869/

const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let houseNumbers = [];
let isFirstLine = true;
let numHouses;

inputInterface.on("line", function (line) {
  if (isFirstLine) {
    numHouses = parseInt(line);
    if (isNaN(numHouses)) {
      console.error("Первая строка должна быть длиной улицы");
      process.exit(1);
    }
    isFirstLine = false;
  } else {
    houseNumbers = line.split(" ").map(Number);
  }
});

process.stdin.on("end", solve);

function getNearestZero(numHouses, houseNumbers) {
  let leftDistances = [];
  let rightDistances = [];
  let currentDistance = Infinity;

  for (let i = 0; i < numHouses; i++) {
    if (houseNumbers[i] === 0) {
      currentDistance = 0;
      leftDistances.push(currentDistance);
    } else {
      ++currentDistance;
      leftDistances.push(currentDistance);
    }
  }

  for (let j = numHouses - 1; j >= 0; j--) {
    if (houseNumbers[j] === 0) {
      currentDistance = 0;
      rightDistances.push(currentDistance);
    } else {
      ++currentDistance;
      rightDistances.push(currentDistance);
    }
  }

  rightDistances.reverse();

  let minDistances = leftDistances.map((value, index) =>
    Math.min(value, rightDistances[index])
  );
  return minDistances.join(" ");
}

function solve() {
  const nearestZeroDistances = getNearestZero(numHouses, houseNumbers);
  process.stdout.write(`${nearestZeroDistances}`);
}
