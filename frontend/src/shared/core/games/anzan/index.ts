import { number } from "yup";

export function random(min: number, max?: number): number {
  if (max && min >= max) {
    throw new Error("Min value must be smaller than max value");
  }
  const randomNumber = max
    ? Math.random() * (max - min) + min
    : Math.random() * min;
  return Math.floor(randomNumber);
}
1;

export enum OPERATIONS {
  PLUS = "+",
  MINUS = "-",
}

export type AnzanConfig = {
  operations: [OPERATIONS, ...OPERATIONS[]]; // Математические операции
  speed: number; // сколько секунд будет высвечиваться одна цифра 0.1 - 9.9
  numbersCount: number; // сколько цифр будет появляться
  numberDepth: number; // разрядность цифр (однозначне, двузначные и тд)
  usedNumber: number[]; // какие цифры будем использовать
};

export class AnzanCore {
  public config: AnzanConfig;
  private answer = 0;
  private numbers: number[] = [];
  private score = 0;
  constructor(config: AnzanConfig) {
    this.config = config;
  }
  setScore(newScore: number) {
    this.score = newScore;
  }
  incrementScore() {
    this.score += 10;
  }
  setCofign(config: AnzanConfig) {
    this.config = config;
  }

  setAnswer(newAnswer: number) {
    this.answer = newAnswer;
  }
  generateNumber(): number {
    const { operations, numberDepth, usedNumber } = this.config;

    let number = -Infinity;

    if (
      this.config.operations.includes(OPERATIONS.MINUS) &&
      this.config.operations.length === 1 &&
      this.answer === 0
    ) {
      number =
        Number(
          new Array(this.config.numberDepth)
            .fill(Math.max(...this.config.usedNumber))
            .join("")
        ) * this.config.numbersCount;
    } else {
      while (this.answer + number < 0) {
        const operation = operations[random(operations.length)];

        const numbers = new Array(numberDepth).fill(0).map((_, numIndex) => {
          const newUsedNumbers = [...usedNumber];
          if (numberDepth != 1 && numIndex != 0) {
            newUsedNumbers.push(0);
          }
          return newUsedNumbers[random(newUsedNumbers.length)];
        });
        number = Number.parseInt(`${operation}${numbers.join("")}`);
      }
    }
    this.answer = this.answer + number;
    return number;
  }
  generateNumbers() {
    this.resetAnswer();
    let firstNum: number;
    if (this.config.operations.includes(OPERATIONS.MINUS)) {
      firstNum = this.generateNumber();
    } else {
      firstNum = parseInt(
        new Array(this.config.numberDepth)
          .fill(0)
          .map(() => random(9) + 1) // Генерация случайных цифр от 1 до 9
          .join(""),
        10
      );
    }
    this.numbers = new Array(this.config.numbersCount)
      .fill(null)
      .map((_, numIndex) => {
        if (numIndex === 0) {
          this.numbers[0] = firstNum; // Установка значения в первый элемент массива
          return firstNum;
        }
        return this.generateNumber();
      });
    this.answer = this.answer + firstNum;
  }

  getNumbers() {
    return this.numbers;
  }
  getScore() {
    return this.score;
  }
  getAnswer() {
    return this.answer;
  }
  resetAnswer() {
    // Добавил обнуление ответа
    this.answer = 0;
  }
}

export type AnzanGameManagerSettings = {
  speed: number;
  players: number;
  numsCount: number;
};

export class AnzanGameManager {
  private settings: AnzanGameManagerSettings;

  private games: AnzanCore[];

  private config: AnzanConfig;
  private subscribers: Array<() => void> = [];
  private onFinishSubscribers: Array<() => void> = [];
  private count = 1;
  constructor(settings: AnzanGameManagerSettings, config: AnzanConfig) {
    this.settings = settings;
    this.config = config;
    this.games = new Array(settings.players)
      .fill(null)
      .map(() => new AnzanCore(config));
  }

  start() {
    this.notifySubscribers();
    this.count++;

    const timerId = window.setInterval(() => {
      if (this.count > this.settings.numsCount) {
        window.clearInterval(timerId);
        return this.finish();
      }
      this.games.forEach((game) => game.resetAnswer()); // Вызываю метод обнулния ответа, перед каждой игрой. Но не работает
      this.notifySubscribers();

      this.count++;
    }, this.settings.speed);

    return () => window.clearInterval(timerId);
  }

  getNumbers() {
    if (
      this.config.operations.includes(OPERATIONS.MINUS) &&
      this.config.operations.length === 1 &&
      this.count === 1
    ) {
      return this.games.map((game) => {
        const newAnswer =
          Math.max(...this.config.usedNumber) * this.settings.numsCount;
        game.setAnswer(newAnswer);
        return newAnswer;
      });
    }
    return this.games.map((game) => game.generateNumber());
  }

  getAnswers() {
    return this.games.map((game) => game.getAnswer());
  }
  getScore() {
    return this.games.map((game) => game.getScore);
  }
  subscribe(cb: () => void) {
    this.subscribers.push(cb);
  }

  notifySubscribers() {
    this.subscribers.forEach((cb) => cb());
  }

  onFinish(cb: () => void) {
    this.onFinishSubscribers.push(cb);
  }

  finish() {
    this.onFinishSubscribers.forEach((cb) => cb());
  }
}
