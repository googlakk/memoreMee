export function random(min: number, max?: number): number {
  if (max && min >= max) {
    throw new Error("Min value must be smaller than max value");
  }

  const randomNumber = max
    ? Math.random() * (max - min) + min
    : Math.random() * min;
  return Math.floor(randomNumber);
}

export enum OPERATIONS {
  PLUS = "+",
  MINUS = "-",
}

export type AnzanConfig = {
  operations: [OPERATIONS, ...OPERATIONS[]]; // Математические операции
  // speed: number, // скольк секунд будет высвечиваться одна цифра 0.1 - 9.9
  // numbersCount: number; // сколько цифр будет появляться
  numberDepth: number; // разрядность цифр (однозначне, двузначные и тд)
  usedNumber: number[]; // какие цифры будем использовать
};

export class AnzanCore {
  protected config: AnzanConfig;
  private answer = 0;

  constructor(config: AnzanConfig) {
    this.config = config;
  }

  generateNumber(): number {
    const { operations, numberDepth, usedNumber } = this.config;

    const operation = operations[random(operations.length)];
    const numbers = new Array(numberDepth)
      .fill(0)
      .map(() => usedNumber[random(usedNumber.length)]);

    const number = Number.parseInt(`${operation}${numbers.join("")}`);

    this.answer = this.answer + number;
    console.log(this.answer);
    return number;
  }

  getAnswer() {
    return this.answer;
  }
}

const game = new AnzanCore({
  operations: [OPERATIONS.PLUS],
  numberDepth: 2,
  usedNumber: [2, 3, 9],
});

console.log(game.generateNumber());
console.log(game.generateNumber());
console.log(game.generateNumber());
console.log(game.getAnswer());
