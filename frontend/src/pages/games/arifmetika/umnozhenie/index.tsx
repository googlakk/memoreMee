// import {
//   MultiGameManager,
//   OPERATIONS,
// } from "@shared/core/games/multiplication";
// import React, { useState } from "react";

// const MultiGameManagerComponent = ({ players: number }) => {
//   const [gameManager, setGameManager] = useState<MultiGameManager | null>(null);
//   const [selectedOperation, setSelectedOperation] = useState(null);
//   const [selectedNumbers, setSelectedNumbers] = useState({ num1: 0, num2: 0 });
//   const [userAnswer, setUserAnswer] = useState("");

//   const handleStartGame = () => {
//     if (selectedOperation && selectedNumbers.num1 && selectedNumbers.num2) {
//       const gameConfig = {
//         operations: [OPERATIONS.MULTIPLY],
//         numberDepth: 2, // Задайте желаемую глубину числа
//         usedNumber1: [1, 2, 3, 4, 5], // Задайте желаемые используемые числа для num1
//         usedNumber2: [1, 2, 3, 4, 5], // Задайте желаемые используемые числа для num2
//       };

//       const newGameManager = new MultiGameManager({ players }, gameConfig);
//       setGameManager(newGameManager);

//       // Подпишитесь на событие завершения игры
//       newGameManager.onFinish(() => {
//         alert(
//           `Игра завершена! Ваш ответ: ${userAnswer}, Правильный ответ: ${
//             newGameManager.getAnswers()[0]
//           }`
//         );
//       });
//     } else {
//       alert("Пожалуйста, выберите операцию и числа перед началом игры.");
//     }
//   };

//   const handleOperationChange = (e: any) => {
//     setSelectedOperation(e.target.value);
//   };

//   const handleNumberChange = (e: any, numberType: any) => {
//     const selectedNum = parseInt(e.target.value, 10);
//     setSelectedNumbers((prevNumbers) => ({
//       ...prevNumbers,
//       [numberType]: selectedNum,
//     }));
//   };

//   const handleAnswerChange = (e: any) => {
//     setUserAnswer(e.target.value);
//   };

//   const handleSubmitAnswer = () => {
//     if (gameManager) {
//       gameManager.setAnswer(parseInt(userAnswer, 10));
//       gameManager.finish();
//     }
//   };

//   return (
//     <div>
//       <h2>Компонент MultiGameManager</h2>
//       <label>
//         Выберите операцию:
//         <select value={selectedOperation} onChange={handleOperationChange}>
//           <option value={null}>Выберите операцию</option>
//           {Object.values(OPERATIONS).map((operation) => (
//             <option key={operation} value={operation}>
//               {operation}
//             </option>
//           ))}
//         </select>
//       </label>
//       <br />
//       <label>
//         Выберите Число 1:
//         <input
//           type="number"
//           value={selectedNumbers.num1}
//           onChange={(e) => handleNumberChange(e, "num1")}
//         />
//       </label>
//       <br />
//       <label>
//         Выберите Число 2:
//         <input
//           type="number"
//           value={selectedNumbers.num2}
//           onChange={(e) => handleNumberChange(e, "num2")}
//         />
//       </label>
//       <br />
//       <button onClick={handleStartGame}>Начать игру</button>
//       <br />
//       {gameManager && (
//         <>
//           <h3>Задание:</h3>
//           <p>{`Умножьте ${selectedNumbers.num1} на ${selectedNumbers.num2}`}</p>
//           <label>
//             Ваш ответ:
//             <input
//               type="number"
//               value={userAnswer}
//               onChange={handleAnswerChange}
//             />
//           </label>
//           <button onClick={handleSubmitAnswer}>Отправить ответ</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default MultiGameManagerComponent;
