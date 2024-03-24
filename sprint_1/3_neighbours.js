const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

let matrix = [],
  line_number = 0,
  parameters = {
    rows: 0,
    columns: 0,
  },
  coordinates = [];

io_interface.on("line", function (line) {
  if (line_number === 0) {
    parameters.rows = parseInt(line);
  } else if (line_number === 1) {
    parameters.columns = parseInt(line);
  } else if (line_number < parameters.rows + 2) {
    matrix.push(line.split(" ").map((num) => Number(num)));
  } else {
    coordinates.push(Number(line));
  }
  line_number++;
});

process.stdin.on("end", solve);

function isValidIndex(row, col) {
  return (
    row >= 0 && row < parameters.rows && col >= 0 && col < parameters.columns
  );
}

function getNeighbours(matrix, coordinates) {
  let a =
    isValidIndex(coordinates[0] + 1, coordinates[1]) &&
    matrix[coordinates[0] + 1][coordinates[1]];
  let b =
    isValidIndex(coordinates[0], coordinates[1] + 1) &&
    matrix[coordinates[0]][coordinates[1] + 1];
  let c =
    isValidIndex(coordinates[0] - 1, coordinates[1]) &&
    matrix[coordinates[0] - 1][coordinates[1]];
  let d =
    isValidIndex(coordinates[0], coordinates[1] - 1) &&
    matrix[coordinates[0]][coordinates[1] - 1];
  return [a, b, c, d]
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
}

function solve() {
  const neighbours = getNeighbours(matrix, coordinates);
  process.stdout.write(`${neighbours.join(" ")}`);
}
