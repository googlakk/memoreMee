import { AnzanGameManager } from "@shared/core";
import Counter from "./counter";
import { FC } from "react";
interface FuncProps {
  onFinish: () => void;
  manager: AnzanGameManager;
}
const AnzanCounter: FC<FuncProps> = ({ onFinish, manager }) => {
  return (
    <>
      <div className="w-screen max-h-screen pb-5 grid grid-flow-col grid-rows-2 gap-5 ">
        <Counter onFinish={onFinish} manager={manager} />
      </div>
    </>
  );
};
export default AnzanCounter;
