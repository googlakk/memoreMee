import { Button, Card, Form, Input } from "react-daisyui";
import { FC, useCallback, useEffect, useState } from "react";
import { MultiCore, OPERATIONS } from "@shared/core/games/multiplication";
import {
  getClassFontSizeMultiplyNumber,
  getClassFontSizeStarter,
} from "@widgets/anzang-game/ui/steps/counter/stylesUttils";

import { FaCheck } from "react-icons/fa6";
import StopWatches from "@widgets/ui-kit/stopwatches";
import { reSizes } from "@app/uttils";

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
  const classFontSizeNUmber = getClassFontSizeMultiplyNumber(playersCount);
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
  const renderTask = () => {
    switch (game.config.operation) {
      case OPERATIONS.QUAEREROOT:
        return (
          <>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>
              {`√${nums.num1}`}
            </div>
          </>
        );
      case OPERATIONS.DIVIDE:
        return (
          <>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>{nums.num1}</div>
            <h3 className="font-roboto text-3xl">{`/`}</h3>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>{nums.num2}</div>
          </>
        );
      case OPERATIONS.SQUAERE:
        return (
          <>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>{nums.num1}</div>
          </>
        );
      case OPERATIONS.MULTIPLY:
        return (
          <>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>{nums.num1}</div>
            <h3 className="font-roboto text-3xl">{`x`}</h3>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>{nums.num2}</div>
          </>
        );
      case OPERATIONS.CUBE:
        return (
          <>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>{nums.num1}</div>
          </>
        );
      case OPERATIONS.CUBEROOT:
        return (
          <>
            <div className={`${classFontSizeNUmber} m-0 p-0 `}>
              {`√${nums.num1}`}
            </div>
          </>
        );
      default:
        return null;
    }
  };
  const backgroundSize = reSizes(playersCount);
  return (
    <Card
      className={` rounded-3xl flex flex-col items-center overflow-hidden relative card w-[100%] m-0 p-0 `}
    >
      <div
        className={`flex flex-col items-center rounded-3xl overflow-hidden relative card w-[100%] h-full  mx-0  `}
      >
        <Card.Title className=" w-fit top-10 py-3 text-left bg-btnLongBg bg-contain bg-no-repeat bg-center ">
          <div className="grid w-64 rounded-xl place-items-center">{name}</div>
          <div className="indicator-item badge badge-secondary absolute top-0">
            <StopWatches
              setTotalSeconds={handleTotalSecondsChange}
              isStarting={autoStartWatches}
            />
          </div>
        </Card.Title>
        <Card.Body
          className={` relative card-body w-full bg-no-repeat bg-contain bg-manyCounterBg bg-center  items-center justify-center p-0 m-0   text-center`}
          style={{
            backgroundSize: backgroundSize,
          }}
        >
          <div className=" font-roboto">{renderTask()}</div>

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
                className="border-b-2  focus:outline-none focus:ring-0 focus:border-primary w-[80%] max-w-xs text-primary h-10"
              />

              <Button
                className="btn btn-ghost bg-transparent bg-btnWideBg bg-contain bg-no-repeat bg-center hover:bg-transparent  "
                type="submit"
              >
                <FaCheck className=" w-8 font-bold text-xl text-[#CA1028]" />
              </Button>
            </Form>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

const StarterCounter: FC<{
  onDone: () => void;
  playersCount: number;
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
  const backgroundSize = reSizes(playersCount);
  return (
    <Card
      className={` rounded-3xl flex flex-col items-center overflow-hidden relative card w-[100%] m-0 p-0 `}
    >
      <div
        className={`flex flex-col items-center rounded-3xl overflow-hidden relative card w-[100%] h-full  mx-0  `}
      >
        <Card.Title className=" w-fit top-10 py-3 text-left bg-btnLongBg bg-contain bg-no-repeat bg-center ">
          <div className="grid w-64 rounded-xl place-items-center"></div>
        </Card.Title>
        <Card.Body
          className={` relative card-body w-full bg-no-repeat bg-contain bg-manyCounterBg bg-center  items-center justify-center p-0 m-0   text-center`}
          style={{ backgroundSize: backgroundSize }}
        >
          <div className={classFontSizeStarter}>{steps[0]}</div>
        </Card.Body>
      </div>
    </Card>
  );
};
export default MultiTusk;
