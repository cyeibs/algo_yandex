/*
// Задача: A.Дек
// Компилятор: Node.js 14.15.5
// Вердикт: OK
// Статус: Полное решение
// https://contest.yandex.ru/contest/22781/run-report/108230804/


-- ПРИНЦИП РАБОТЫ --
Изначально я брал за основу материал из теории практикума, однако, мне чего-то не хватало и я нашел следующую подсказку,
хоть и реализовал так, как более понятно мне и, как мне кажется, более читаемо - https://www.programiz.com/dsa/deque

В данном случае, необходимо было реализовать деку с ее основным функионалом. Поэтому 
я задал хэд, тейл, максимальную длину, текущий размер. Для лаконичности создал отдельные функции 
is_empty и is_full для проверок на пустой и заполнненый дек соответсвенно. 
Первой реализовал push_front - сначала проверял, не заполнен ли полностью дек, после чего делал поиск текущего хеда 
и переставлял его на -1 значение с проверкой на значение хэда <1 - если так, то мы берем значение с "конца максимальной длины деки"
если же >1, то берем хэд - 1 с деление по модулю.
Далее более простые случаи - вставка значения в конец - смотрим на тейл и вставляем туда, передвигая значения тейла на +1,
при этом проверяя изначально на is_full

pop_front - достаем элемент из начала деки (head), проверяя на is_empty. Очищаем head - null, 
переставляем значение head на +1 и уменьшаем текущий размер на -1

pop_back - также проверяем на is_empty, если tail -1 < 0, то значение берем с конца максимальной длины деки и переставляем деку на -1,
если же >0, то берем значение this.tail - 1 и после меняем значение this.queue[this.tail] на null

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
По заданию необходимо было реализовать следуюдие команды
push_back(value) – добавить элемент в конец дека. Если в деке уже находится максимальное число элементов, вывести «error».
push_front(value) – добавить элемент в начало дека. Если в деке уже находится максимальное число элементов, вывести «error».
pop_front() – вывести первый элемент дека и удалить его. Если дек был пуст, то вывести «error».
pop_back() – вывести последний элемент дека и удалить его. Если дек был пуст, то вывести «error».

Из алгоритма деки следует, что мы можем  добавлять, и извлекать элементы с обоих концов за константную сложность O(1)

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Добавление и удаление в/из деки стоит O(1), поскольку каждый раз начало и конец смещается, что не побуждает "массив"
переставлять значения при его изменении

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
В данном случае простраственная сложность равна O(n), поскольку задается фиксированная длина при создании деки
*/

const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });

class Deque {
  constructor(n) {
    this.queue = new Array(n).fill(null);
    this.head = 0;
    this.tail = 0;
    this.max_n = n;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }
  isFull() {
    return this.size == this.max_n;
  }

  pushFront(value) {
    if (this.isFull()) {
      return "error";
    }
    if (this.head < 1) {
      this.head = this.max_n - 1;
    } else {
      this.head = (this.head - 1) % this.max_n;
    }

    this.queue[this.head] = value;
    this.size += 1;
  }

  pushBack(value) {
    if (this.isFull()) {
      return "error";
    }
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.max_n;
    this.size += 1;
  }

  popFront() {
    if (this.isEmpty()) {
      return "error";
    }
    let x = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.max_n;
    this.size -= 1;
    return x;
  }

  popBack() {
    if (this.isEmpty()) {
      return "error";
    }
    let x;
    if (this.tail - 1 < 0) {
      x = this.queue[this.max_n - 1];
      this.queue[this.max_n - 1] = null;
      this.tail = this.max_n - 1;
    } else {
      x = this.queue[this.tail - 1];
      this.queue[this.tail - 1] = null;
      this.tail = this.tail - 1;
    }
    this.size -= 1;
    return x;
  }
}

const commands = [];
let currentLine = 0;
let maxArrayLength = 0;
let commandsQuantity = 0;

inputInterface.on("line", function (line) {
  if (currentLine == 0) {
    commandsQuantity = Number(line);
  } else if (currentLine == 1) {
    maxArrayLength = Number(line);
  } else {
    commands.push(line);
  }
  currentLine++;
});

process.stdin.on("end", solve);

function solve() {
  const stack = new Deque(maxArrayLength);
  for (const command of commands) {
    if (command.startsWith("pushBack")) {
      ////добавить элемент в конец дека
      const [, item] = command.split(" ");
      const result = stack.pushBack(item);
      if (result === "error") {
        process.stdout.write(`${result}\n`);
      }
    } else if (command.startsWith("pushFront")) {
      ////добавить элемент в начало дека
      const [, item] = command.split(" ");
      const result = stack.pushFront(item);
      if (result === "error") {
        process.stdout.write(`${result}\n`);
      }
    } else if (command === "popFront") {
      ////вывести первый элемент дека и удалить его
      process.stdout.write(`${stack.popFront()}\n`);
    } else if (command === "popBack") {
      ////вывести последний элемент дека и удалить его
      process.stdout.write(`${stack.popBack()}\n`);
    }
  }
}
