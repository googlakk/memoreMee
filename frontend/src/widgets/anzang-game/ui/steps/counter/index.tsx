import { FC, useEffect, useState } from "react";

import { Card } from "react-daisyui";

interface FuncProps {
  onFinish: () => void;
  numbers: number[];
}
const Counter: FC<FuncProps> = ({ onFinish, numbers }) => {
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

  return (
    <Card>
      <Card.Body>
        <div
          key={numberIndex}
          className="text"
          style={{
            color: `${numberIndex % 2 ? `green` : `black`}`,
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
    <Card>
      <Card.Body>{steps[0]}</Card.Body>
    </Card>
  );
};

export default Counter;
