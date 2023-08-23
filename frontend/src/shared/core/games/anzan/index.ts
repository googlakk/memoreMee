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
  private config: AnzanConfig;
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
    return number;
  }

  getAnswer() {
    return this.answer;
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

  private subscribers: Array<() => void> = [];
  private onFinishSubscribers: Array<() => void> = [];

  constructor(settings: AnzanGameManagerSettings, config: AnzanConfig) {
    this.settings = settings;

    this.games = new Array(settings.players)
      .fill(null)
      .map(() => new AnzanCore(config));
  }

  start() {
    let count = 1;

    this.notifySubscribers();

    const timerId = window.setInterval(() => {
      if (count + 1 > this.settings.numsCount) {
        window.clearInterval(timerId);
        return this.finish();
      }

      this.notifySubscribers();

      count++;
    }, this.settings.speed);

    return () => window.clearInterval(timerId);
  }

  getNumbers() {
    return this.games.map((game) => game.generateNumber());
  }

  getAnswers() {
    return this.games.map((game) => game.getAnswer());
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
