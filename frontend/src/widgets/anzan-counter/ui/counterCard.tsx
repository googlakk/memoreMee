import { Card } from "react-daisyui";
import { FC } from "react";
interface CounterProps {
  num: number;
  numColor: string;
}

const CounterCard: FC<CounterProps> = ({ num, numColor }) => {
  const number = num;

  return (
    <Card className=" flex items-center justify-center text-center p-30 bg-opacity-10 bg-indigo-200 text-9xl font-bold text-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">
      <Card.Body>
        <div
          key={num}
          className="text"
          style={{
            fontSize: ``,
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
