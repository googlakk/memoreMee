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
  MULTIPLY = "*",
  DIVIDE = "/",
  SQUAERE = "^^",
  CUBE = "^^^",
  QUAEREROOT = "#",
  CUBEROOT = "##",
}

export type MultiConfig = {
  operations: OPERATIONS[]; // Математические операции
  numberDepth: number; // разрядность цифр (однозначные, двузначные и т.д.)
  usedNumber1: number[]; // числа для первого множителя
  usedNumber2: number[]; // числа для второго множителя
};

export class MultiCore {
  public config: MultiConfig;
  private answer = 0;

  constructor(config: MultiConfig) {
    this.config = config;
  }

  setConfig(config: MultiConfig) {
    this.config = config;
  }

  setAnswer(newAnswer: number) {
    this.answer = newAnswer;
  }

  generateNumber(): { num1: number; num2: number } {
    const { operations, numberDepth, usedNumber1, usedNumber2 } = this.config;

    const operation = operations[random(operations.length)];

    let num1: number;
    let num2: number = 0;
    if (operation === OPERATIONS.DIVIDE) {
      num1 = new Array(numberDepth)
        .fill(0)
        .reduce((acc) => acc * 10 + usedNumber1[random(usedNumber1.length)], 0);

      do {
        num2 = new Array(numberDepth - 1)
          .fill(0)
          .reduce(
            (acc) => acc * 10 + usedNumber2[random(usedNumber2.length)],
            0
          );
      } while (num1 % num2 !== 0 || num2 === 0);
    } else {
      num1 = new Array(numberDepth)
        .fill(0)
        .reduce((acc) => acc * 10 + usedNumber1[random(usedNumber1.length)], 0);
      num2 = new Array(numberDepth - 1)
        .fill(0)
        .reduce((acc) => acc * 10 + usedNumber2[random(usedNumber2.length)], 0);
    }

    if (operation === OPERATIONS.MULTIPLY) {
      this.answer = num1 * num2;
    } else if (operation === OPERATIONS.DIVIDE) {
      this.answer = num1 / num2;
    } else if (operation === OPERATIONS.SQUAERE) {
      this.answer = Math.pow(num1, 2);
    } else if (operation === OPERATIONS.CUBE) {
      this.answer = Math.pow(num1, 3);
    } else if (operation == OPERATIONS.QUAEREROOT) {
      this.answer = Math.floor(usedNumber1[random(usedNumber1.length)]);
    }

    return { num1, num2 };
  }

  generateNumbers() {
    this.resetAnswer();
    return this.generateNumber();
  }

  getAnswer() {
    return this.answer;
  }

  resetAnswer() {
    this.answer = 0;
  }
  getResult(): number {
    return this.answer;
  }
}

export type MultiGameManagerSettings = {
  players: number;
};

export class MultiGameManager {
  private settings: MultiGameManagerSettings;

  private games: MultiCore[];

  private config: MultiConfig;
  private subscribers: Array<() => void> = [];
  private onFinishSubscribers: Array<() => void> = [];
  private count = 1;
  constructor(settings: MultiGameManagerSettings, config: MultiConfig) {
    this.settings = settings;
    this.config = config;
    this.games = new Array(settings.players)
      .fill(null)
      .map(() => new MultiCore(config));
  }

  start() {
    this.notifySubscribers();
    this.count++;
    this.getNumbers();
    return "";
  }

  getNumbers() {
    return this.games.map((game) => {
      game.resetAnswer();
      return game.generateNumber();
    });
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
const config: MultiConfig = {
  operations: [OPERATIONS.DIVIDE],
  numberDepth: 3,
  usedNumber1: [2, 3, 4, 5, 6],
  usedNumber2: [1, 2, 4, 8, 9],
};

const playersCount = 2; // Задаем количество игроков

const gameManager = new MultiGameManager({ players: playersCount }, config);

// Запускаем игру
gameManager.start();

// Получаем числа и ответы для каждого игрока
const numbers = gameManager.getNumbers();
const answers = gameManager.getAnswers();

console.log("Числа:", numbers);
console.log("Ответы:", answers);
