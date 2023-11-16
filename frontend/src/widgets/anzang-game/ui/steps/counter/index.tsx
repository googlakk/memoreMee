import { FC, useEffect, useMemo, useState } from "react";

import { AnzanCore } from "@shared/core";
import { Card } from "react-daisyui";
import { ENTER_STATE } from "@app/providers/withActiveComponentProvider";
import { Howl } from "howler";
import { useActiveComponent } from "@app/hooks";

interface FuncProps {
  onFinish: () => void;
  game: AnzanCore;
  name: string;
  speed: number;
  playersCount?: number;
  muted: boolean;
}
const Counter: FC<FuncProps> = ({
  onFinish,
  game,
  speed,
  muted,
  playersCount,
}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numberIndex, setNumberIndex] = useState<number>(0);
  const { setActiveComponent } = useActiveComponent();
  useEffect(() => {
    setActiveComponent(ENTER_STATE.STOP);
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
    else if (lenght === 4) return `112px`;
    else if (lenght === 3) return `132px`;
    else if (lenght === 2) return `152px`;
    else if (lenght === 1) return `162px`;
  };
  colculatingSize();

  return (
    <Card className="rounded-3xl overflow-hidden relative card w-[100%] mx-0 lg:mx-3 xl:mx-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-[url('/img/colorGradientBg.jpg')] bg-center bg-cover brightness-90 ">
      <Card.Body className="  card-body items-center justify-center p-0 m-0">
        <div
          key={numberIndex}
          className="font-bold "
          style={{
            fontSize: colculatingSize(),
            color: `${numberIndex % 2 ? `#3D30A2` : `white`}`,
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
  const { activeComponent, setActiveComponent } = useActiveComponent();
  useEffect(() => {
    setActiveComponent(ENTER_STATE.STOP);
  }, []);
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
      className={`text-[48px] md:text-6xl lg:text-[5rem]  rounded-3xl overflow-hidden relative card w-full lg:w-full xl:w-full items-center justify-center font-arena  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mx-3 text-base-100 bg-[url('/img/colorGradientBg.jpg')] bg-center bg-cover brightness-90`}
    >
      <Card.Body className=" card-body items-center justify-center text-primary">
        {steps[0]}
      </Card.Body>
    </Card>
  );
};

export default Counter;
