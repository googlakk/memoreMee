import { FC, useEffect, useState } from "react";

import { Card } from "react-daisyui";
import { Howl } from "howler";

interface FuncProps {
  onFinish: () => void;
  numbers: number[];
  name: string;
  speed: number;
  playersCount?: number;
}
const Counter: FC<FuncProps> = ({
  onFinish,
  numbers,
  name,
  speed,
  playersCount,
}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numberIndex, setNumberIndex] = useState<number>(0);

  useEffect(() => {
    if (numberIndex >= numbers.length) {
      onFinish();
    }
  }, [numberIndex]);
  const SoundPip = new Howl({
    src: ["/sounds/pip.mp3"],
    volume: 1,
  });
  useEffect(() => {
    if (isGameStarted) {
      if (playersCount === 1) SoundPip.play();
      const timerId = window.setInterval(() => {
        if (playersCount === 1) SoundPip.play();
        setNumberIndex((num) => num + 1);
      }, 1000 * speed);
      return () => {
        SoundPip.stop();
        window.clearInterval(timerId);
      };
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

  const SoundCount = new Howl({
    src: ["/sounds/countdown.mp3"],
    volume: 1,
  });

  useEffect(() => {
    SoundCount.play();
    const timerId = window.setInterval(() => {
      setSteps((prev) => prev.slice(1));
    }, 1000);

    return () => {
      SoundCount.stop();
      window.clearInterval(timerId);
    };
  });

  useEffect(() => {
    if (steps.length === 0) {
      onDone();
    }
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
