import { FC, useEffect, useState } from "react";

import { AnzanGameManager } from "@shared/core";
import { Card } from "react-daisyui";

interface FuncProps {
  onFinish: () => void;
  manager: AnzanGameManager;
}
const Counter: FC<FuncProps> = ({ onFinish, manager }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);

  const [numColor, setNumColor] = useState("black");

  useEffect(() => {
    return manager.subscribe(() => {
      setNumbers(manager.getNumbers());
      setNumColor((prev) => (prev === "white" ? "#f0bd60" : "white"));
    });
  }, [manager]);

  useEffect(() => {
    return manager.onFinish(() => {
      onFinish();
    });
  }, [manager]);

  useEffect(() => {
    if (isGameStarted) {
      return manager.start();
    }
  }, [isGameStarted]);

  if (!isGameStarted)
    return <StarterCounter onDone={() => setIsGameStarted(true)} />;

  return numbers.map((num) => {
    return (
      <>
        <div className={``}>
          <CounterCard num={num} numColor={numColor} />
        </div>
      </>
    );
  });
};

const StarterCounter: FC<{ onDone: () => void }> = ({ onDone }) => {
  const [steps, setSteps] = useState(["На старт", "Внимание", "Марш!"]);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSteps((prev) => prev.slice(1));
    }, 1000);

    return () => window.clearInterval(timerId);
  });

  useEffect(() => {
    if (steps.length === 0) onDone();
  }, [steps]);

  return (
    <>
      <div className={`items-center text-center`}>
        <div className="flex justify-center h-screen">
          <Card className=" w-3/4 h-3/4 flex items-center mt-10 justify-center  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-indigo-200  bg-opacity-10  text-primary-content  ">
            <Card.Body className="font-bold text-white text-9xl">
              {steps[0]}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

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

export default Counter;
