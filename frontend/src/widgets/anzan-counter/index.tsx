import { FC, useEffect, useState } from "react";

import { AnzanGameManager } from "@shared/core";

interface FuncProps {
  onFinish: () => void;
  manager: AnzanGameManager;
}
const AnzanCounter: FC<FuncProps> = ({ onFinish, manager }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);

  const [numColor, setNumColor] = useState("black");

  useEffect(() => {
    return manager.subscribe(() => {
      setNumbers(manager.getNumbers());
      setNumColor((prev) => (prev === "black" ? "blue" : "black"));
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
      <div
        key={num}
        style={{ fontSize: 100, color: numColor, fontWeight: 900 }}
      >
        {num}
      </div>
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

  return steps[0];
};

export default AnzanCounter;
