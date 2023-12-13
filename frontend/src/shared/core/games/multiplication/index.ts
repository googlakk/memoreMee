// import { random } from "@shared/utils/random";

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
  numberDepth1: number; // разрядность цифр (однозначные, двузначные и т.д.)
  numberDepth2: number; // разрядность цифр (однозначные, двузначные и т.д.)
  usedNumbers1: number[]; // числа для первого множителя
  usedNumbers2: number[]; // числа для второго множителя
};

export class MultiCore {
  public config: MultiConfig;
  private answer: number = 0;

  constructor(config: MultiConfig) {
    this.config = config;
  }

  setConfig(config: MultiConfig) {
    this.config = config;
  }

  setAnswer(newAnswer: number) {
    this.answer = newAnswer;
  }

  generateNumbers(): { num1: number; num2: number } {
    const {
      operation,
      numberDepth1,
      numberDepth2,
      usedNumbers1,
      usedNumbers2,
    } = this.config;

    let num1: number, num2: number;

    switch (operation) {
      case OPERATIONS.MULTIPLY:
        if (numberDepth2 > numberDepth1) {
          throw new Error("Number depth 2 cannot be more then number depth 1");
        }

        num1 = this.generateRandomNumber(usedNumbers1, numberDepth1);
        num2 = this.generateRandomNumber(usedNumbers2, numberDepth2);

        this.answer = num1 * num2;

        return { num1, num2 };
      case OPERATIONS.DIVIDE:
        if (numberDepth2 > numberDepth1) {
          throw new Error("Number depth 2 cannot be more then number depth 1");
        }

        num2 = this.generateRandomNumber(usedNumbers1, numberDepth2);

        const minAnswer = Math.max(
          Math.floor(10 ** (numberDepth1 - 1) / num2),
          1
        );
        const maxAnswer = Math.max(
          Math.floor((10 ** numberDepth1 - 1) / num2),
          1
        );

        this.answer = random(minAnswer, maxAnswer);

        num1 = num2 * this.answer;

        return { num1, num2 };
      case OPERATIONS.SQUAERE:
        num1 = this.generateRandomNumber(usedNumbers1, numberDepth1);

        this.answer = num1 ** 2;

        return { num1, num2: 0 };
      case OPERATIONS.CUBE:
        num1 = this.generateRandomNumber(usedNumbers1, numberDepth1);

        this.answer = num1 ** 3;

        return { num1, num2: 0 };
      case OPERATIONS.QUAEREROOT:
        this.answer = this.generateRandomNumber(usedNumbers1, numberDepth1);

        num1 = this.answer ** 2;

        return { num1, num2: 0 };
      case OPERATIONS.CUBEROOT:
        this.answer = this.generateRandomNumber(usedNumbers1, numberDepth1);

        num1 = this.answer ** 3;

        return { num1, num2: 0 };
    }
  }

  private generateRandomNumber(numbers: number[], depth: number): number {
    const numbersWithoutZero = numbers.filter((num) => num !== 0);

    return Number(
      new Array(depth)
        .fill(null)
        .map((_, idx) => {
          const _numbers = idx === 0 ? numbersWithoutZero : numbers;

          return _numbers[random(0, _numbers.length - 1)];
        })
        .join("")
    );
  }

  getAnswer() {
    return this.answer;
  }
}

const core = new MultiCore({
  numberDepth1: 1,
  numberDepth2: 1,
  operation: OPERATIONS.DIVIDE,
  usedNumbers1: [1],
  usedNumbers2: [1],
});

const { num1, num2 } = core.generateNumbers();
const answer = core.getAnswer();

const test = answer === Math.cbrt(num1);

num1;
num2;

answer;

test;
