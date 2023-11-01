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
}

export type MathConfig = {
  operations: [OPERATIONS, ...OPERATIONS[]]; // Математические операции
  maxNumber: number; // Максимальное значение числа
  minNumber: number; // Минимальное значение числа
  numbersCount: number; // Сколько чисел будет участвовать в операции
};

export class MathCore {
  public config: MathConfig;

  constructor(config: MathConfig) {
    this.config = config;
  }

  generateNumber(): number {
    const { maxNumber, minNumber } = this.config;
    return random(minNumber, maxNumber);
  }

  multiply(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc * num, 1);
  }

  divide(numbers: number[]): number {
    if (numbers.some((num) => num === 0)) {
      throw new Error("Division by zero is not allowed.");
    }
    return numbers.reduce((acc, num) => acc / num);
  }

  generateNumbers() {
    const { numbersCount } = this.config;
    const numbers = new Array(numbersCount).fill(null).map(() => {
      return this.generateNumber();
    });
    return numbers;
  }
}
