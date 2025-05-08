import { Button, Card } from "react-daisyui";
import { FC, useEffect, useMemo } from "react";
import { FaEquals, FaNotEqual } from "react-icons/fa";
import {
  useCrateGameHistoryMutation,
  useUpdateUserScoreMutation,
} from "@app/api/mutations.gen";

import { GAME_STEPS } from "../..";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdRestartAlt } from "react-icons/md";
import { MultiCore } from "@shared/core/games/multiplication";
import cn from "clsx";
import { reSizes } from "@app/uttils";
import { useAuthContext } from "@app/hooks";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
  onSetVisible: (t: boolean) => void;
  visible: boolean;
  userAnwer: number;
  name: string;
  game: MultiCore;
  playersCount: number;
  setStep: (s: GAME_STEPS) => void;
  setName: (s: string) => void;
  totalSeconds: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  points: number;
}

const MultiResult: FC<FuncProps> = ({
  onSetVisible,
  onSettings,
  game: _game,
  setStep,
  totalSeconds,
  name,
  playersCount,
  userAnwer,
  onStart,
  setPoints,
  points,
}) => {
  
  const game = useMemo(() => _game, []);
  const { user } = useAuthContext();
  const [createGameHistory] = useCrateGameHistoryMutation();
  const [upaateUserScore] = useUpdateUserScoreMutation();
  const SoundWrong = new Howl({
    src: ["/sounds/wrongPip.mp3"],
    volume: 0.4,
  });
  const SoundRight = new Howl({
    src: ["/sounds/win.mp3"],
    volume: 0.3,
    rate: 1.5,
  });

  useEffect(() => {
    const handleClickEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setStep(GAME_STEPS.TUSKS);
      }
    };
    document.addEventListener("keydown", handleClickEnter);
    return () => {
      document.removeEventListener("keydown", handleClickEnter);
    };
  }, []);
  useEffect(() => {
    if (game.getAnswer() === userAnwer) {
      SoundRight.play();

      setPoints((prevPoint) => prevPoint + 10);
    } else {
      SoundWrong.play();
    }
  }, [userAnwer]);
  useEffect(() => {
    if (!user || playersCount > 1) return;

    createGameHistory({
      variables: {
        data: {
          game: "2",
          isWin: userAnwer === game.getAnswer(),
          user: user.id,
          score: 1,
          publishedAt: new Date(),
          result: {
            gameSettings: game.config,
            numbers: [...game.numbers],
            rightAnswer: game.getAnswer(),
            userAnswer: userAnwer,
          },
        },
      },
    });

    upaateUserScore({ variables: { id: user.id, score: 1 } });
  }, []);

  const lengthNumber = game.getAnswer().toString().length;
  const OpenSettings = () => {
    onSettings();
    onSetVisible(false);
  };
  const classFontSizeNumber = cn(
    "p-0 card-body justify-center items-center text-primary font-jura font-bold text-center",
    lengthNumber <= 21 &&
      playersCount === 1 &&
      "lg:text-7xl md::text-7xl text-4xl tracking-2 ",
    lengthNumber <= 18 && playersCount === 2 && "text-5xl",
    lengthNumber <= 16 && playersCount === 3 && "text-5xl",
    lengthNumber <= 14 && playersCount === 4 && "text-4xl",
    playersCount === 5 && "text-4xl",
    playersCount === 6 && "text-4xl",
    playersCount === 7 && "text-4xl",
    playersCount === 8 && "text-[32px]",
    playersCount === 9 && "text-[32px]"
  );
  const backgroundSize = reSizes(playersCount);
  return (
    <>
      <Card className="rounded-3xl flex flex-col items-center overflow-hidden relative card w-[100%] m-0 p-0  ">
        <div
          className={`flex flex-col items-center rounded-3xl overflow-hidden relative card w-[100%] h-full  mx-0  `}
        >
          <Card.Title className=" w-fit top-10 py-3 text-left bg-btnLongBg bg-contain bg-no-repeat bg-center ">
            <div className="grid w-64 rounded-xl place-items-center">
              {name}
            </div>
          </Card.Title>
          <Card.Body
            className={`card-body relative w-full bg-no-repeat bg-contain bg-manyCounterBg bg-center  items-center justify-center p-0 m-0  ${classFontSizeNumber}  text-center`}
            style={{
              backgroundSize: backgroundSize,
            }}
          >
            {game.getAnswer()}

            {game.getAnswer() !== userAnwer ? (
              <>
                {" "}
                <FaNotEqual />{" "}
              </>
            ) : (
              <FaEquals />
            )}
            {userAnwer}

            <div className=" mt-0 text-primary text-center font-jura font-light  text-l lg:text-[18px] xl:text-[16px] l:text-[16px] ml-2">
              {name}, решил(а) за {totalSeconds} секунд<br></br>
                      <span className=" text-xl">{points}</span>
            </div>
            <div className="w-fit bg-btnLongBg bg-contain bg-no-repeat bg-center  absolute bottom-0 ">
              <div className="h-12 w-48 flex justify-around items-start">
                <Button
                  className="btn bg-transparent border-none hover:bg-transparent hover:border-none text-xl hover:text-base-100"
                  onClick={() => onStart()}
                >
                  <MdRestartAlt />
                </Button>
                <Button
                  className="btn bg-transparent border-none hover:bg-transparent hover:border-none text-xl hover:text-base-100"
                  onClick={() => OpenSettings()}
                >
                  <GiSettingsKnobs />
                </Button>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default MultiResult;
