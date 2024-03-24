const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

let weatherData = [],
  length = 0,
  line_number = 0;

io_interface.on("line", function (line) {
  if (line_number === 0) {
    length = parseInt(line);
  } else {
    weatherData = line.split(" ").map((num) => Number(num));
  }
  line_number++;
});

process.stdin.on("end", solve);

function getWeatherChaos(length, array) {
  let counter = 0;
  for (let i = 0; i < length; i++) {
    if (length === 1) {
      counter++;
    }
    if (
      (i === 0 || i === length - 1) &&
      (array[i] > array[i + 1] || array[i] > array[i - 1])
    ) {
      counter++;
    } else if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      counter++;
    }
  }
  return counter;
}
function solve() {
  const weatherChaos = getWeatherChaos(length, weatherData);
  process.stdout.write(`${weatherChaos}`);
}
