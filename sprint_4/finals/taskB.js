/*

-- Привет --
Четвертый спринт пока кажется очень поверхностным для меня, будто я что-то не понял, ибо прошел он (значительно) проще прыдудщего.

// Задача: B.Хеш-таблица
// Компилятор: Node.js 14.15.5
// Вердикт: OK
// Статус: Полное решение
// https://contest.yandex.ru/contest/24414/run-report/110700525/


-- ПРИНЦИП РАБОТЫ --
В целом, такой же формат, как и во 2 спринте, только теперь с хэшированием. Реализовываем класс, в котором задаем дефолтный эррей

реализовываем метод _hash - который по модулю (положительное число) вычисляется хэш;
метод put - хэширует индекс по ключу, добавляем новый элемент или обновляет его значение
метод get - снова хеширует ключ, получает значение по индексу, либо возвращает None, если не нашел
метод delete - снова хеширует, удаляет элемент, возвращая то значение, которое там лежало, либо возвращает None, если элемент не был найден


-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Каждый метод реализован следуя условия, а средняя сложность реализации - O(1), посколько доступ к каждому элементу происходит по ключу


-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Для реализции методов средняя сложность O(1)


-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Для хранения O(n) - размер хеш--таблицы задается первой переданной строкой 

*/

const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class HashTable {
  constructor(size = 10000) {
    this.size = size;
    this.table = new Array(size).fill(null).map((el) => []);
  }

  _hash(key) {
    return Math.abs(key) % this.size;
  }

  put(key, value) {
    const hashIndex = this._hash(key);
    const bucket = this.table[hashIndex];
    const foundIndex = bucket.findIndex(([k, v]) => k === key);

    if (foundIndex !== -1) {
      bucket[foundIndex] = [key, value];
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const hashIndex = this._hash(key);
    const bucket = this.table[hashIndex];
    const found = bucket.find(([k, v]) => k === key);
    return found ? found[1] : "None";
  }

  delete(key) {
    const hashIndex = this._hash(key);
    const bucket = this.table[hashIndex];
    const foundIndex = bucket.findIndex(([k, v]) => k === key);

    if (foundIndex !== -1) {
      const deletedItem = bucket.splice(foundIndex, 1);
      return deletedItem[0][1];
    } else {
      return "None";
    }
  }
}

let currentLine = 0;
let ht;
let resArr = [];

inputInterface.on("line", function (line) {
  if (currentLine === 0) {
    ht = new HashTable(Number(line));
  } else {
    if (line.startsWith("get")) {
      const [, item] = line.split(" ");
      const result = ht.get(item);
      resArr.push(result);
    } else if (line.startsWith("put")) {
      const [, key, value] = line.split(" ");
      ht.put(key, value);
    } else if (line.startsWith("delete")) {
      const [, item] = line.split(" ");
      const result = ht.delete(item);
      resArr.push(result);
    }
  }
  currentLine++;
});

process.stdin.on("end", solve);

function solve() {
  process.stdout.write(resArr.join("\n"));
}
