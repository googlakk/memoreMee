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
  QUAEREROOT = "##",
  CUBEROOT = "###",
}

export type MultiConfig = {
  operation: OPERATIONS; // Математические операции
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
    const { operation, numberDepth, usedNumber1, usedNumber2 } = this.config;

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
      num2 = new Array(numberDepth)
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
      this.answer = Math.floor(usedNumber1[random(usedNumber1.length)]) ** 2;
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
const multiConfig: MultiConfig = {
  operation: OPERATIONS.MULTIPLY,
  numberDepth: 2,
  usedNumber1: [1, 2, 3, 4],
  usedNumber2: [2, 3, 4],
};

const core = new MultiCore(multiConfig);

console.log(core.generateNumber());
console.log(core.getResult());
