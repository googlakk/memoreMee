import { FC } from "react";
import { GameHistory } from "../gameHistoryTable";

interface AccordionProps {
  game: GameHistory;
}
const MyAccordion: FC<AccordionProps> = ({ game }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Количество действий</th>
              <th>Количество цифр </th>
              <th>Использованные числа (+)</th>
              <th>Использованные числа (-)</th>
              <th>Скорость</th>
              <th>Ответил</th>
              <th>Правильный ответ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3 font-bold">
                  {game.result.gameSettings.numbersCount}
                </div>
              </td>
              <td>{game.result.gameSettings.numberDepth}</td>
              <td>{game.result.gameSettings.usedNumber.join(", ")}</td>
              <td>{game.result.gameSettings.usedNumber.join(", ")}</td>
              <td>{game.result.gameSettings.speed}</td>
              <td>{game.result.userAnswer}</td>
              <td>{game.result.rightAnswer}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyAccordion;
