/*

-- Привет --
Четвертый спринт пока кажется очень поверхностным для меня, будто я что-то не понял, ибо прошел он (значительно) проще прыдудщего.

// Задача: A.Поисковая система
// Компилятор: Node.js 14.15.5
// Вердикт: OK
// Статус: Полное решение
// https://contest.yandex.ru/contest/24414/run-report/110670883/


-- ПРИНЦИП РАБОТЫ --
Изначально мы сразу делаем словарик со словами и индексами документов
Потом проходимся по реквеству и проверяем - где и сколько раз каждое слово встречалось (вдруг оно встречалось в одном документе несколько раз)
после чего прямо на месте сортируем и выдаем резалт
Так как нам нужно получить индексы начиная с единицы: а не с нуля - при выводе делаем +1 

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
В задаче было необходимо проверять на предмет релеваностности к запросу и в последствии сортировать по количеству совпадений, либо если совпадений одинаково - 
вывести в порядке увеличения индекса, что также реализовано в алгоритме

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Так как у нас есть цикл в цикле на моменте прохода по реквесту, внутри которого делается проход по словарику - общая сложность O(n^2)

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
В данном случае простраственная сложность равна O(n), поскольку мы работаем с данными определенной длины

*/

const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let maxDocuments = 0;
let maxRequests = 0;
let requests = [];
let currentLine = 0;
let docId = 0;
const index = {};
const firstRelevanceIndex = 0;
const lastRelevanceIndex = 5;

inputInterface.on("line", function (line) {
  if (currentLine === 0) {
    maxDocuments = Number(line);
  } else if (currentLine > 0 && currentLine <= maxDocuments) {
    line.split(" ").forEach((word) => {
      if (!index[word]) {
        index[word] = [];
      }
      const lastEntry = index[word][index[word].length - 1];
      if (lastEntry && lastEntry[0] === docId) {
        lastEntry[1] += 1;
      } else {
        index[word].push([docId, 1]);
      }
    });
    docId++;
  } else if (currentLine === maxDocuments + 1) {
    maxRequests = line;
  } else {
    requests.push(line);
  }

  currentLine++;
});

process.stdin.on("end", solve);

function processQueries(index, queries) {
  const results = queries.map((query) => {
    const relevance = {};
    new Set(query.split(" ")).forEach((word) => {
      if (index[word]) {
        index[word].forEach(([docId, count]) => {
          if (relevance[docId]) {
            relevance[docId] += count;
          } else {
            relevance[docId] = count;
          }
        });
      }
    });
    const sortedDocs = Object.entries(relevance)
      .sort((a, b) => b[1] - a[1] || a[0] - b[0])
      .slice(firstRelevanceIndex, lastRelevanceIndex)
      .map(([docId]) => parseInt(docId));
    return sortedDocs;
  });
  return results;
}

function solve() {
  const queryResults = processQueries(index, requests);
  queryResults.forEach((result) => {
    if (result.length > 0) {
      const resultStr = result.map((docId) => docId + 1).join(" ");
      process.stdout.write(`${resultStr}\n`);
    }
  });
}
