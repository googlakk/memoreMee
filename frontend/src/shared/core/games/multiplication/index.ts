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
  numberDepth1: number;
  numberDepth2: number; // разрядность цифр (однозначные, двузначные и т.д.)
  usedNumbers1: number[]; // числа для первого множителя
  usedNumbers2: number[]; // числа для второго множителя
};

export class MultiCore {
  public config: MultiConfig;
  public numbers: number[];

  private answer = 0;
  private score = 0;
  constructor(config: MultiConfig) {
    this.config = config;
    this.numbers = [];
  }

  setConfig(config: MultiConfig) {
    this.config = config;
  }

  setAnswer(newAnswer: number) {
    this.answer = newAnswer;
  }
  setScore(newScore: number) {
    this.score = newScore;
  }
  incrementScore() {
    this.score += 10;
  }

  generateNumbers(): { operand1: number; operand2: number } {
    const {
      operation,
      numberDepth1,
      numberDepth2,
      usedNumbers1,
      usedNumbers2,
    } = this.config;

    let operand1: number = 0;
    let operand2: number = 0;

    switch (operation) {
      case OPERATIONS.MULTIPLY:
        if (numberDepth2 > numberDepth1) {
          throw new Error("Number depth 2 cannot be more then number depth 1");
        }
        operand1 = this.generateRandomNumber(usedNumbers1, numberDepth1);
        operand2 = this.generateRandomNumber(usedNumbers2, numberDepth2);
        this.answer = operand1 * operand2;
        this.numbers = [operand1, operand2];
        return { operand1, operand2 };

      case OPERATIONS.DIVIDE:
        if (numberDepth2 > numberDepth1) {
          throw new Error("NUmber depth 2 cannot be more then depth 1");
        }
        do {
          operand2 = this.generateRandomNumber(usedNumbers1, numberDepth2);
          const minAnswer = Math.max(
            Math.floor(10 ** (numberDepth1 - 1) / operand2),
            1
          );
          const maxAnswer = Math.max(Math.floor(10 ** numberDepth1 - 1 / 2), 1);
          this.answer = random(minAnswer, maxAnswer);

          operand1 = operand2 * this.answer;
        } while (this.answer === 1);

        this.numbers = [operand1, operand2];
        return { operand1, operand2 };
      case OPERATIONS.SQUAERE:
        operand1 = this.generateRandomNumber(usedNumbers1, numberDepth1);
        this.answer = operand1 ** 2;
        this.numbers = [operand1, operand2];
        return { operand1, operand2: 0 };
      case OPERATIONS.CUBE:
        operand1 = this.generateRandomNumber(usedNumbers1, numberDepth1);
        this.answer = operand1 ** 3;
        this.numbers = [operand1];
        return { operand1, operand2: 0 };
      case OPERATIONS.QUAEREROOT:
        operand1 = this.generateRandomNumber(usedNumbers1, numberDepth1) ** 2;
        this.answer = Math.sqrt(operand1);
        this.numbers = [operand1];
        return { operand1, operand2: 0 };
      case OPERATIONS.CUBEROOT:
        operand1 = this.generateRandomNumber(usedNumbers1, numberDepth1) ** 3;
        this.answer = Math.cbrt(operand1);
        this.numbers = [operand1];
        return { operand1, operand2: 0 };
    }
  }

  private generateRandomNumber(numbers: number[], depth: number) {
    const numberWithputZero = numbers.filter((num) => num !== 0);
    return Number(
      new Array(depth)
        .fill(null)
        .map((_, idx) => {
          const _numbers = idx === 0 ? numberWithputZero : numbers;
          return _numbers[random(0, numbers.length - 1)];
        })
        .join("")
    );
  }
  getScore() {
    return this.score;
  }
  getAnswer() {
    return this.answer;
  }

  resetAnswer() {
    this.answer = 0;
  }
}
const Test = new MultiCore({
  usedNumbers1: [1],
  usedNumbers2: [1],
  numberDepth1: 2,
  numberDepth2: 2,
  operation: OPERATIONS.DIVIDE,
});
const { operand1, operand2 } = Test.generateNumbers();
const answer = Test.getAnswer();
let testing = operand1 / operand2 === answer;
operand1;
operand2;
answer;
testing;

/*
  1) Установка настроек. first render компонент "Setup", где также можно выбрать кол-во игроков->
  -> После нажатия на кнопку start ->
  -> Показать компонент "Tasks", с полем для ввода ответа->
  -> После ввода ответа ->
  -> Показать компонент "Result", с результатом того правильно или не правильно решили задание.
  2) States for games: 
  
  PREVIEW
  GAME
  ANSWER
  RESULT
  SETTINGS

*/
