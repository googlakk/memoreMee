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
      num1 = new Array(numberDepth + 1)
        .fill(0)
        .reduce((acc) => acc * 10 + usedNumber1[random(usedNumber1.length)], 0);
      if (!usedNumber2 || usedNumber2.length === 0) {
        num2 = random(1, 10);
      } else {
        do {
          num2 = new Array(numberDepth)
            .fill(0)
            .reduce(
              (acc) => acc * 10 + usedNumber2[random(usedNumber2.length)],
              0
            );
        } while (num1 % num2 === 0 || num2 === 0);
      }
      this.answer = num1 / num2;
    } else {
      num1 = new Array(numberDepth)
        .fill(0)
        .reduce((acc) => acc * 10 + usedNumber1[random(usedNumber1.length)], 0);
      if (usedNumber2) {
        num2 = new Array(numberDepth)
          .fill(0)
          .reduce(
            (acc) => acc * 10 + usedNumber2[random(usedNumber2.length)],
            0
          );
      }
    }

    if (operation === OPERATIONS.MULTIPLY) {
      this.answer = num1 * num2;
    } else if (operation === OPERATIONS.SQUAERE) {
      this.answer = Math.pow(num1, 2);
      num2 = NaN;
    } else if (operation === OPERATIONS.CUBE) {
      this.answer = Math.pow(num1, 3);
      num2 = NaN;
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

const con: MultiConfig = {
  usedNumber1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  usedNumber2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  numberDepth: 3,
  operation: OPERATIONS.DIVIDE,
};

const core = new MultiCore(con);

for (let i = 0; i < 20; i++) {
  core.generateNumbers();
  const { num1, num2 } = core.generateNumbers();
  console.log(
    `Iteration ${
      i + 1
    }: num1 = ${num1}, num2 = ${num2}, result=${core.getResult()}`
  );
}
