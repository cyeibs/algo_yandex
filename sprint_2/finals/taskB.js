/*

// Задача: B.Калькулятор
// Компилятор: Node.js 14.15.5
// Вердикт: OK
// Статус: Полное решение
// https://contest.yandex.ru/contest/22781/run-report/108230984/


-- ПРИНЦИП РАБОТЫ --
В данном случае, мы создаем стек, в который кладем только числа, как только мы встречаем операцию из заранее 
известного списка (+, -, *, /) - мы сразу запускаем функцию с свитч кейсом, выполняя необходимые нам действия.
Так как среди тестов был один, где подаются только числа, без арифметических операций, то возвращается
 последний добавленный элемент из стек

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
В данном случае основной сутью решения является извлечение послелних двух добавленных числовых элементов.
При этом "b" - это последний, а "a" - это предпоследний, также стоит учесть, что деление должно происходить с округлением вниз


-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Так как мы всегда вставляем в конец стека и извлекаем также с конца, а работа с операциями происходит на моменте обработке 
входных данных - сложность равняется O(n), так как нам необходимо пройтись по всему набору входных данных для получения резульата

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Сложность здесь также связана с набором входных данных - O(n)

*/
const readline = require("readline");
const inputInterface = readline.createInterface({ input: process.stdin });
class CalcStack {
  constructor() {
    this.stack = new Array();
  }

  performOperation(operation) {
    const b = this.stack.pop();
    const a = this.stack.pop();

    switch (operation) {
      case "+":
        this.stack.push(a + b);
        break;
      case "-":
        this.stack.push(a - b);
        break;
      case "*":
        this.stack.push(a * b);
        break;
      case "/":
        this.stack.push(Math.floor(a / b));
        break;
    }
  }

  result() {
    return this.stack[this.stack.length - 1];
  }
}

const calculationStack = new CalcStack();

inputInterface.on("line", function (line) {
  line.split(" ").map((el) => {
    if (isNaN(Number(el))) {
      calculationStack.performOperation(el);
    } else {
      calculationStack.stack.push(Number(el));
    }
  });
});

process.stdin.on("end", solve);

function solve() {
  process.stdout.write(`${calculationStack.result()}\n`);
}
