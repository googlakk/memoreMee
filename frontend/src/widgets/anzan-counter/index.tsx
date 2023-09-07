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
      <div className="flex justify-around w-full">
        <Counter onFinish={onFinish} manager={manager} />
      </div>
    </>
  );
};
export default AnzanCounter;
