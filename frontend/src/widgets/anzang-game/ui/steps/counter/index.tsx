import { FC, useEffect, useMemo, useState } from "react";
import {
  getClassFontSizeNumber,
  getClassFontSizeStarter,
} from "./stylesUttils";

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
  isTextToSpeach: boolean;
}
const Counter: FC<FuncProps> = ({
  onFinish,
  game,
  speed,
  muted,
  playersCount,
  setStep,
  name,
  isTextToSpeach,
}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [numberIndex, setNumberIndex] = useState<number>(0);

  useEffect(() => {
    const handleClickEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
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

  const Numlenght = String(numbers[numberIndex]).replace(/-/g, "").length;
  useEffect(() => {
    if (numberIndex >= numbers.length) {
      onFinish();
    }
  }, [numberIndex]);

  const textToSpeach = () => {
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance();
      let number = numbers[numberIndex];
      utterance.text = String(number);
      synthesis.speak(utterance);
    } else {
      console.error("Браузер не поддерживает Web Speech API");
    }
  };
  const SoundPip = new Howl({
    src: ["/sounds/pip.mp3"],
    volume: 1,
  });
  useEffect(() => {
    if (isGameStarted) {
      if (!muted) {
        if (
          isTextToSpeach &&
          Numlenght <= 3 &&
          speed >= 1.1 &&
          playersCount === 1
        ) {
          textToSpeach();
        } else {
          SoundPip.play();
        }
      }
      const timerId = window.setInterval(() => {
        if (!muted && Numlenght >= 4) {
          SoundPip.play();
        }

        setNumberIndex((num) => num + 1);
      }, 1000 * speed);
      return () => {
        SoundPip.stop();
        window.clearInterval(timerId);
      };
    }
  }, [isGameStarted, muted, numberIndex]);

  const classFontSizeNumber = getClassFontSizeNumber(Numlenght, playersCount);
  if (!isGameStarted)
    return (
      <StarterCounter
        numLenght={Numlenght}
        playersCount={playersCount}
        onDone={() => setIsGameStarted(true)}
      />
    );

  return (
    <Card className="rounded-3xl overflow-hidden relative card w-[100%] m-0 p-0  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  bg-[#E0F4FF] brightness-90 ">
      <div className="absolute left-5 top-0 font-jura text-xl ">{name}</div>
      <Card.Body className=" w-full  card-body items-center justify-center p-0 m-0">
        <div
          key={numberIndex}
          className={classFontSizeNumber}
          style={{
            color: `${numberIndex % 2 ? `#3a51ff` : `#08125a`}`,
          }}
        >
          {numbers[numberIndex]}
        </div>
      </Card.Body>
    </Card>
  );
};

const StarterCounter: FC<{
  onDone: () => void;
  playersCount?: number;
  numLenght: number;
}> = ({ onDone, playersCount }) => {
  const [steps, setSteps] = useState(["На старт", "Внимание", "Марш!"]);

  const SoundCount = new Howl({
    src: ["/sounds/countdown.mp3"],
    volume: 0.8,
  });

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSteps((prev) => prev.slice(1));
    }, 1100);
    SoundCount.play();
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
  const classFontSizeStarter = getClassFontSizeStarter(playersCount);
  return (
    <Card
      className={`   rounded-3xl overflow-hidden relative card w-full lg:w-full xl:w-full items-center justify-center font-arena  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-base-100 bg-[#E0F4FF] brightness-90`}
    >
      <Card.Body className=" card-body items-center justify-center text-primary">
        <div className={classFontSizeStarter}>{steps[0]}</div>
      </Card.Body>
    </Card>
  );
};

export default Counter;
