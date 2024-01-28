import { Button, Card, Form, Input } from "react-daisyui";
import { FC, useCallback, useEffect, useState } from "react";

import { MultiCore } from "@shared/core/games/multiplication";
import StopWatches from "@widgets/stopwatches";
import { getClassFontSizeStarter } from "@widgets/anzang-game/ui/steps/counter/stylesUttils";

interface MultiTusksProps {
  game: MultiCore;
  playersCount: number;
  name: string;
  onAnswer: (answer: number) => void;
  setTotalSeconds: (sec: number) => void;
}
const MultiTusk: FC<MultiTusksProps> = ({
  game,
  playersCount,
  onAnswer,
  name,
  setTotalSeconds,
}) => {
  const [answer, setAnswer] = useState<string>("");
  const [autoStartWatches, setAutoStartWatches] = useState(true);
  const [nums, setNums] = useState({
    num1: 0,
    num2: 0,
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const classFontSizeStarter = getClassFontSizeStarter(playersCount);
  useEffect(() => {
    const { operand1, operand2 } = game.generateNumbers();
    setNums({ num1: operand1, num2: operand2 });
  }, []);

  useEffect(() => {
    const handleClickEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onAnswer(Number(answer));
      }
    };
    document.addEventListener("keydown", handleClickEnter);
    return () => {
      document.removeEventListener("keydown", handleClickEnter);
    };
  }, [onAnswer, answer]);
  const handleAnswer = useCallback(
    (e: any) => {
      e.preventDefault();
      onAnswer(Number(answer));
      setAutoStartWatches(!autoStartWatches);
    },
    [onAnswer, answer]
  );

  if (!isGameStarted)
    return (
      <StarterCounter
        playersCount={playersCount}
        onDone={() => setIsGameStarted(true)}
      />
    );
  const handleTotalSecondsChange = (value: number) => {
    // Передаем значение в родительский компонент
    setTotalSeconds(value);
  };
  return (
    <Card
      className={`   rounded-3xl overflow-hidden relative card w-full lg:w-full xl:w-full items-center justify-center font-arena  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-base-100 bg-[#E0F4FF] brightness-90`}
    >
      <div className="absolute left-5 top-0 font-jura text-xl text-primary ">
        {name}
      </div>
      <div className="absolute right-5 top-0 font-jura text-2xl font-bold text-primary">
        <StopWatches
          setTotalSeconds={handleTotalSecondsChange}
          isStarting={autoStartWatches}
        />
      </div>
      <Card.Body className=" card-body items-center  justify-center text-primary leading-none">
        <div className=" font-roboto">
          <div className={`${classFontSizeStarter} m-0 p-0 `}>{nums.num1}</div>
          <h3 className="font-roboto text-3xl">{}</h3>
          <div className={`${classFontSizeStarter} m-0 p-0 `}>{nums.num2}</div>
        </div>
        <div className=" w-full ">
          <Form
            className=" text-center flex flex-col items-center"
            onSubmit={handleAnswer}
          >
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="number"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs text-primary h-10"
            />
            <Button
              className="mt-5 btn-outline hover:bg-primary p-3 w-fit text-[14px]"
              type="submit"
            >
              Ответить
            </Button>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

const StarterCounter: FC<{
  onDone: () => void;
  playersCount?: number;
}> = ({ onDone, playersCount }) => {
  const [steps, setSteps] = useState(["На старт", "Внимание", "Марш!"]);

  const SoundCount = new Howl({
    src: ["/sounds/countdown.mp3"],
    volume: 0.1,
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
export default MultiTusk;
