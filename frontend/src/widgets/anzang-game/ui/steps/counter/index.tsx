import { FC, useEffect, useMemo, useState } from "react";

import { ANZAN_STEPS } from "../..";
import { AnzanCore } from "@shared/core";
import { Card } from "react-daisyui";
import { Howl } from "howler";

interface FuncProps {
  onFinish: () => void;
  game: AnzanCore;
  name: string;
  speed: number;
  playersCount?: number;
  muted: boolean;
  setStep: (s: ANZAN_STEPS) => void;
}
const Counter: FC<FuncProps> = ({
  onFinish,
  game,
  speed,
  muted,
  playersCount,
  setStep,
}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numberIndex, setNumberIndex] = useState<number>(0);

  useEffect(() => {
    const handleClickEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        console.log("counter");
        setStep(ANZAN_STEPS.PREVIEW);
      }
    };
    document.addEventListener("keydown", handleClickEnter);
    return () => {
      document.removeEventListener("keydown", handleClickEnter);
    };
  }, []);

  const numbers = useMemo(() => {
    game.generateNumbers();
    return game.getNumbers();
  }, [game]);

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
      if (!muted) SoundPip.play();
      const timerId = window.setInterval(() => {
        if (!muted) SoundPip.play();

        setNumberIndex((num) => num + 1);
      }, 1000 * speed);
      return () => {
        SoundPip.stop();
        window.clearInterval(timerId);
      };
    }
  }, [isGameStarted, muted]);

  if (!isGameStarted)
    return (
      <StarterCounter
        playerCount={playersCount}
        onDone={() => setIsGameStarted(true)}
      />
    );
  const colculatingSize = () => {
    const lenght = String(numbers[numberIndex]).replace(/-/g, "").length;

    if (lenght === 6) return `72px`;
    else if (lenght === 5) return `82px`;
    else if (lenght === 4) return `102px`;
    else if (lenght === 3) return `112px`;
    else if (lenght === 2) return `122px`;
    else if (lenght === 1) return `132px `;
  };
  colculatingSize();

  return (
    <Card className="rounded-3xl overflow-hidden relative card w-[100%] m-0 p-0 lg:mx-3 xl:mx-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-[#E0F4FF] brightness-90 ">
      <Card.Body className="  card-body items-center justify-center p-0 m-0">
        <div
          key={numberIndex}
          className="font-bold p-0 m-0"
          style={{
            fontSize: colculatingSize(),
            color: `${numberIndex % 2 ? `#3a51ff` : `#08125a`}`,
          }}
        >
          {numbers[numberIndex]}
        </div>
      </Card.Body>
    </Card>
  );
};

const StarterCounter: FC<{ onDone: () => void; playerCount?: number }> = ({
  onDone,
}) => {
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
    <Card
      className={`text-[48px] md:text-6xl lg:text-[5rem]  rounded-3xl overflow-hidden relative card w-full lg:w-full xl:w-full items-center justify-center font-arena  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mx-3 text-base-100 bg-[#E0F4FF] brightness-90`}
    >
      <Card.Body className=" card-body items-center justify-center text-primary">
        {steps[0]}
      </Card.Body>
    </Card>
  );
};

export default Counter;
