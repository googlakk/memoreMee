import { FC, useEffect, useState } from "react";

import { Card } from "react-daisyui";

interface FuncProps {
  onFinish: () => void;
  numbers: number[];
  name: string;
}
const Counter: FC<FuncProps> = ({ onFinish, numbers, name }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numberIndex, setNumberIndex] = useState<number>(0);

  useEffect(() => {
    if (numberIndex >= numbers.length) {
      onFinish();
    }
  }, [numberIndex]);

  useEffect(() => {
    if (isGameStarted) {
      const timerId = window.setInterval(() => {
        setNumberIndex((num) => num + 1);
      }, 1000);
      return () => window.clearInterval(timerId);
    }
  }, [isGameStarted]);

  if (!isGameStarted)
    return <StarterCounter onDone={() => setIsGameStarted(true)} />;
  const colculatingSize = () => {
    const lenght = String(numbers[numberIndex]).replace(/-/g, "").length;
    if (lenght === 6) return `72px`;
    else if (lenght === 5) return `82px`;
    else if (lenght === 4) return `92px`;
    else if (lenght === 3) return `122px`;
    else if (lenght === 2) return `152px`;
    else if (lenght === 1) return `192px`;
  };
  colculatingSize();
  return (
    <Card className=" card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-[100%] mx-3 items-center justify-center bg-[#0284c7] glass text-base-100">
      <Card.Body className="  card-body items-center justify-center ">
        <div
          key={numberIndex}
          className="font-bold "
          style={{
            fontSize: colculatingSize(),
            color: `${numberIndex % 2 ? `#071952` : `white`}`,
          }}
        >
          {numbers[numberIndex]}
        </div>
      </Card.Body>
    </Card>
  );
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
    <Card className="card items-center justify-center font-arena text-7xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-[100%] mx-3  bg-[#0284c7] glass text-base-100">
      <Card.Body className=" card-body items-center justify-center">
        {steps[0]}
      </Card.Body>
    </Card>
  );
};

export default Counter;
