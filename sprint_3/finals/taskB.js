/*

// Задача: B.Эффективная быстрая сортировка
// Компилятор: Node.js 14.15.5
// Вердикт: OK
// Статус: Полное решение
// https://contest.yandex.ru/contest/23815/run-report/109738768/


-- ПРИНЦИП РАБОТЫ --
Боль, а не задача. 
Что ж, исходя из поставленной задачи, там нужно сортировать in-place. 
Для этого мы создаем функцию, которая работает при условии left<right (пока)
Мы находим индекс через функцию partition - данная функция позвояляет нам
1) Разделить исходный массив, взять за основу начало и конец и проверять значения для сортировки, которая впоследствии
происходит через функцию swap 
2) вернуть индекс для левой и для правой стороы, чтобы продолжить рекурсию 

После выполнения мы выводить имена из отсортированного массива

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Исходя из таска - нужно было реализовать in-place, что и сделано через описанный
алгоритм действий, мы не выделяем доп память для этого 

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Тут, исходя из теории - лучший вариант O(nlogn), средний O(logn) и худший O(n^2)


-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Тут в худшем случае O(n) из-за глубины рекурсии

*/

const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

let usersResultsArray = [];
let currentLine = 0;

inputInterface.on("line", function (line) {
  if (currentLine > 0) {
    const userLine = line.split(" ").map((el) => {
      const num = Number(el);
      return isNaN(num) ? el : num;
    });
    usersResultsArray.push(userLine);
  }
  currentLine++;
});

process.stdin.on("end", solve);

function sorting(firstUser, secondUser) {
  if (!firstUser || !secondUser) {
    return NaN;
  }

  const [firstUserName, firstUserScore, firstUserPenalty] = firstUser;
  const [secondUserName, secondUserScore, secondUserPenalty] = secondUser;

  if (firstUserScore !== secondUserScore) {
    return secondUserScore - firstUserScore;
  }

  if (firstUserPenalty !== secondUserPenalty) {
    return firstUserPenalty - secondUserPenalty;
  }

  return firstUserName.localeCompare(secondUserName);
}

function swap(array, x, y) {
  [array[x], array[y]] = [array[y], array[x]];
}

function getRankedList(array, comparator, left = 0, right = array.length - 1) {
  if (left < right) {
    const index = partition(array, comparator, left, right);
    if (left < index - 1) {
      getRankedList(array, comparator, left, index - 1);
    }
    if (index < right) {
      getRankedList(array, comparator, index, right);
    }
  }
}

function partition(array, comparator, left, right) {
  const pivot = array[left + Math.floor(Math.random() * (right - left + 1))];
  let start = left;
  let end = right;
  while (start <= end) {
    while (comparator(array[start], pivot) < 0) {
      start++;
    }
    while (comparator(array[end], pivot) > 0) {
      end--;
    }
    if (start <= end) {
      swap(array, start, end);
      start++;
      end--;
    }
  }
  return start;
}

function solve() {
  getRankedList(usersResultsArray, sorting);
  usersResultsArray.forEach(([name]) => process.stdout.write(`${name}\n`));
}
