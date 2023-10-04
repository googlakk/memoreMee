export function random(min: number, max?: number): number {
  if (max && min >= max) {
    throw new Error("Min value must be smaller than max value");
  }

  const randomNumber = max
    ? Math.random() * (max - min) + min
    : Math.random() * min;
  return Math.floor(randomNumber);
}

enum OPERATIONS {
  MULTI = "*",
  DIVISION = "/",
}

export type MultiplicationConfig = {
  operations: [OPERATIONS, ...OPERATIONS[]];
  usedNumber: number[];
  numberDepth: number;
};

export class MultiCore {
  public multiConfig: MultiplicationConfig;
  private answer = 0;
  private firstDigits = 0;
  private secondDigits = 0;
  constructor(multiConfig: MultiplicationConfig) {
    this.multiConfig = multiConfig;
  }

  setConfig(multiConfig: MultiplicationConfig) {
    this.multiConfig = multiConfig;
  }

  setAnswer(newAnswer: number) {
    this.answer = newAnswer;
  }

  generateNumber(): number {
    const { numberDepth, usedNumber } = this.multiConfig;
    let number = 0;
    const numbers = new Array(numberDepth)
      .fill(0)
      .map(() => usedNumber[random(usedNumber.length)]);
    number = Number.parseInt(`${numbers.join("")}`);
    return number;
  }

  multiply(): number {
    this.firstDigits = this.generateNumber();
    this.secondDigits = this.generateNumber();
    return (this.answer = this.firstDigits * this.secondDigits);
  }
  getAnswer() {
    return this.answer;
  }
}
