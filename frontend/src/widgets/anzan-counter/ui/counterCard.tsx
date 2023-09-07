import { Card } from "react-daisyui";
import { FC } from "react";
import st from "../../../pages/home/style.module.css";
interface CounterProps {
  num: number;
  numColor: string;
}

const CounterCard: FC<CounterProps> = ({ num, numColor }) => {
  return (
    <Card className=" h-[500px] w-96 flex items-center justify-center text-center mt-10 bg-opacity-10 bg-indigo-200 font-bold text-white text-9xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">
      <Card.Body>
        <div
          key={num}
          style={{
            fontSize: 300,
            color: numColor,
            fontWeight: 900,
          }}
        >
          {num}
        </div>
      </Card.Body>
    </Card>
  );
};
export default CounterCard;
