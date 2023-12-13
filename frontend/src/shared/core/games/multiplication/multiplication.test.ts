// import { MultiCore, OPERATIONS } from "./index";

// describe("MultiCore", () => {
//   test("Multiplication", () => {
//     const core = new MultiCore({
//       numberDepth: 3,
//       operation: OPERATIONS.MULTIPLY,
//       usedNumbers1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       usedNumbers2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     });

//     const { num1, num2 } = core.generateNumbers();
//     const answer = core.getAnswer();

//     expect(answer).toBe(num1 * num2);
//   });

//   test("Division", () => {
//     const core = new MultiCore({
//       numberDepth: 3,
//       operation: OPERATIONS.DIVIDE,
//       usedNumbers1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       usedNumbers2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     });

//     const { num1, num2 } = core.generateNumbers();
//     const answer = core.getAnswer();

//     expect(answer).toBe(num1 / num2);
//   });

//   test("Square", () => {
//     const core = new MultiCore({
//       numberDepth: 3,
//       operation: OPERATIONS.SQUAERE,
//       usedNumbers1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       usedNumbers2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     });

//     const { num1 } = core.generateNumbers();
//     const answer = core.getAnswer();

//     expect(answer).toBe(num1 ** 2);
//   });

//   test("Cube", () => {
//     const core = new MultiCore({
//       numberDepth: 3,
//       operation: OPERATIONS.SQUAERE,
//       usedNumbers1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       usedNumbers2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     });

//     const { num1 } = core.generateNumbers();
//     const answer = core.getAnswer();

//     expect(answer).toBe(num1 ** 3);
//   });

//   test("Quarteroot", () => {
//     const core = new MultiCore({
//       numberDepth: 3,
//       operation: OPERATIONS.QUAEREROOT,
//       usedNumbers1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       usedNumbers2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     });

//     const { num1 } = core.generateNumbers();
//     const answer = core.getAnswer();

//     expect(answer).toBe(Math.sqrt(num1));
//   });

//   test("Cuberoot", () => {
//     const core = new MultiCore({
//       numberDepth: 3,
//       operation: OPERATIONS.CUBEROOT,
//       usedNumbers1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       usedNumbers2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     });

//     const { num1 } = core.generateNumbers();
//     const answer = core.getAnswer();

//     expect(answer).toBe(Math.cbrt(num1));
//   });
// });
