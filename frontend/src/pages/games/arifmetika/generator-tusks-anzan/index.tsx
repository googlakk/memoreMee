import {
  AnzanConfig,
  AnzanGameManager,
  AnzanGameManagerSettings,
  OPERATIONS,
} from "@shared/core";
import React, { useState } from "react";

const GeneratorTusks: React.FC = () => {
  const [speed, setSpeed] = useState(1000);
  const [players, setPlayers] = useState(1);
  const [numsCount, setNumsCount] = useState(10);

  const [numberDepth, setNumberDepth] = useState(2);
  const [usedNumbers, setUsedNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const [numbers, setNumbers] = useState<number[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    const gameSettings: AnzanGameManagerSettings = {
      speed,
      players,
      numsCount,
    };

    const gameConfig: AnzanConfig = {
      operations: [OPERATIONS.PLUS], // Можете настроить операции по вашему желанию
      speed: 0.5,
      numbersCount: 2,
      numberDepth,
      usedNumber: usedNumbers,
    };

    const gameManager = new AnzanGameManager(gameSettings, gameConfig);

    // Подписываемся на обновления чисел
    gameManager.subscribe(() => {
      setNumbers((prevNumbers) => [
        ...prevNumbers,
        ...gameManager.getNumbers(),
      ]);
    });

    // Завершение игры
    gameManager.onFinish(() => {
      setIsGameStarted(false);
    });

    // Запуск игры
    const stopGame = gameManager.start();

    // Обновление состояния, чтобы показать числа
    setIsGameStarted(true);

    // Очистка ресурсов при размонтировании компонента
    return () => {
      stopGame();
    };
  };

  return (
    <div>
      <h2>Настройки игры</h2>
      <div>
        <label>Скорость (миллисекунды): </label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Количество игроков: </label>
        <input
          type="number"
          value={players}
          onChange={(e) => setPlayers(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Количество раундов: </label>
        <input
          type="number"
          value={numsCount}
          onChange={(e) => setNumsCount(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Разрядность цифр: </label>
        <input
          type="number"
          value={numberDepth}
          onChange={(e) => setNumberDepth(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Используемые цифры (через запятую): </label>
        <input
          type="text"
          value={usedNumbers.join(",")}
          onChange={(e) =>
            setUsedNumbers(e.target.value.split(",").map(Number))
          }
        />
      </div>
      <button onClick={handleStartGame}>Начать</button>

      {isGameStarted && (
        <div>
          <h3>Числа:</h3>
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeneratorTusks;
