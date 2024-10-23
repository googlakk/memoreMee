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
}) => {
  const clickListner = () => {
    onSettings();
    onSetVisible(false);
  };
  const game = useMemo(() => _game, []);
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

  const { user } = useAuthContext();

  const [createGameHistory] = useCrateGameHistoryMutation();
  const [upaateUserScore] = useUpdateUserScoreMutation();

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
  return (
    <>
      <Card className="rounded-3xl  p-0 card w-[100%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]   bg-[url('/img/colorGradientBg.jpeg')] bg-center bg-cover brightness-90 text-base-100">
        <Card.Body className={`${classFontSizeNumber} font-roboto`}>
          <h2 className="font-jura">Ответ:</h2>
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
          <div className=" bg-primary rounded-xl text-base-100 absolute right-0 top-0 flex-col   flex justify-around ">
            <Button className="  btn-ghost text-xl">
              <MdRestartAlt onClick={() => onStart()} />
            </Button>
            <Button
              onClick={() => clickListner()}
              className="   btn-ghost text-xl"
            >
              <GiSettingsKnobs />
            </Button>
          </div>
        </Card.Body>
        <Card.Title className="mx-auto pb-5 text-primary">
          {name}, решил(а) за {totalSeconds} секунд
          <div></div>
        </Card.Title>
      </Card>
    </>
  );
};

export default MultiResult;
