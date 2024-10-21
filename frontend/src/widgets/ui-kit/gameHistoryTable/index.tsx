import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React from "react";
import { VscError } from "react-icons/vsc";
import { formatDate } from "@app/uttils";

export type GameHistory = {
  id: number;
  isWin: boolean;
  createdAt: string;
  score: number;
  result: {
    gameSettings: {
      numberDepth: number;
      numbersCount: number;
      operations: string[];
      speed: number;
      usedNumber: number[];
    };
    numbers: number[];
    rightAnswer: number;
    userAnswer: number;
  };
};

interface GameHistoriesProps {
  gameHistories: GameHistory[];
}

const GameHistoryTable: React.FC<GameHistoriesProps> = ({
  gameHistories = [],
}) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Дата</th>
              <th>Количество действий</th>
              <th>Разрядность чисел </th>
              <th>Использованные числа (+)</th>
              <th>Использованные числа (-)</th>
              <th>Скорость</th>
              <th>Выбранная операция</th>
              <th>Ваш ответ</th>
              <th>Правильный ответ</th>
            </tr>
          </thead>
          <tbody className="">
            {gameHistories.map((game, idx) => (
              <>
                <tr key={idx}>
                  <td>
                    <label>
                      {game.isWin ? (
                        <label className=" text-success text-3xl">
                          <IoMdCheckmarkCircleOutline />
                        </label>
                      ) : (
                        <label className=" text-3xl text-error">
                          <VscError />
                        </label>
                      )}
                    </label>
                  </td>
                  <td>{formatDate(game.createdAt)}</td>
                  <td>
                    <div className=" font-bold">
                      {game.result.gameSettings.numbersCount}
                    </div>
                  </td>
                  <td className=" font-bold">
                    {game.result.gameSettings.numberDepth}
                  </td>
                  <td className=" font-bold">
                    {game.result.gameSettings.usedNumber.join(", ")}
                  </td>
                  <td className=" font-bold">
                    {game.result.gameSettings.usedNumber.join(", ")}
                  </td>
                  <td className=" font-bold">
                    {game.result.gameSettings.speed}
                  </td>
                  <td className=" font-bold">
                    {game.result.gameSettings.operations.join(" & ")}
                  </td>
                  <td className=" font-bold">{game.result.userAnswer}</td>
                  <td className=" font-bold">{game.result.rightAnswer}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GameHistoryTable;
