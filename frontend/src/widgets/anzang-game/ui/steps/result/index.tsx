import { Button, Card } from "react-daisyui";
import { FC, useEffect, useMemo } from "react";
import { FaEquals, FaNotEqual } from "react-icons/fa";
import {
  useCrateGameHistoryMutation,
  useUpdateUserScoreMutation,
} from "@app/api/mutations.gen";

import { ANZAN_STEPS } from "../..";
import { AnzanCore } from "@shared/core";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdRestartAlt } from "react-icons/md";
import cn from "clsx";
import { useAuthContext } from "@app/hooks";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
  userAnwer: number;
  visible: boolean;
  onSetVisible: (t: boolean) => void;
  name: string;
  game: AnzanCore;
  playersCount?: number;
  setStep: (s: ANZAN_STEPS) => void;
}

const AnzanResult: FC<FuncProps> = ({
  userAnwer,
  onStart,
  onSettings,
  onSetVisible,
  name,
  game: _game,
  playersCount,
  setStep,
}) => {
  const clickListner = () => {
    onSettings();
    onSetVisible(false);
  };

  const { user } = useAuthContext();

  const [createGameHistory] = useCrateGameHistoryMutation();
  const [upaateUserScore] = useUpdateUserScoreMutation();

  const game = useMemo(() => _game, []);

  useEffect(() => {
    const handleClickEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setStep(ANZAN_STEPS.COUNTER);
      }
    };
    document.addEventListener("keydown", handleClickEnter);
    return () => {
      document.removeEventListener("keydown", handleClickEnter);
    };
  }, []);

  useEffect(() => {
    if (!user) return;

    createGameHistory({
      variables: {
        data: {
          game: "1",
          isWin: userAnwer === game.getAnswer(),
          user: user.id,
          score: 1,
          publishedAt: new Date(),
          result: {
            gameSettings: game.config,
            numbers: game.getNumbers(),
            rightAnswer: game.getAnswer(),
            userAnswer: userAnwer,
          },
        },
      },
    });

    upaateUserScore({ variables: { id: user.id, score: 1 } });
  }, []);
  const classFontSizeText = cn(
    "font-jura font-bold text-center",
    playersCount === 1 && "lg:text-3xl md::text-3xl text-xl",
    playersCount === 2 && "text-3xl",
    playersCount === 3 && "text-[22px]",
    playersCount === 4 && "text-2xl",
    playersCount === 5 && "text-xl",
    playersCount === 6 && "text-xl",
    playersCount === 7 && "text-xl",
    playersCount === 8 && "text-[16px]",
    playersCount === 9 && "text-[14px]"
  );
  const classFontSizeNumber = cn(
    "font-jura font-bold text-center",
    playersCount === 1 && "lg:text-7xl md::text-7xl text-4xl ",
    playersCount === 2 && "text-5xl",
    playersCount === 3 && "text-5xl",
    playersCount === 4 && "text-4xl",
    playersCount === 5 && "text-4xl",
    playersCount === 6 && "text-4xl",
    playersCount === 7 && "text-4xl",
    playersCount === 8 && "text-[32px]",
    playersCount === 9 && "text-[32px]"
  );
  const classPosition = cn(
    "flex flex-col items-center  ",
    playersCount === 1 && "justify-center",
    playersCount === 2 && "justify-center",
    playersCount === 3 && "justify-center",
    playersCount === 4 && "justify-center",
    playersCount === 5 && "absolute top-0",
    playersCount === 6 && "absolute top-0",
    playersCount === 7 && "absolute top-0",
    playersCount === 8 && "absolute top-0",
    playersCount === 9 && "absolute top-0"
  );

  return (
    <>
      <Card className="rounded-3xl   p-0 card w-[100%] mx-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]   bg-[url('/img/colorGradientBg.jpg')] bg-center bg-cover brightness-90 text-base-100">
        <Card.Body className="p-0 card-body justify-center items-center">
          <div className="flex justify-center w-full ">
            {/* <div>
              <PieChart
                totalAnswers={totalAnswers}
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
              />
            </div> */}
            <div className={classPosition}>
              <div className="flex flex-col items-center justify-center mb-5 text-primary">
                <h1 className={classFontSizeNumber}>{game.getAnswer()}</h1>
                <div className="text-3xl ">
                  {game.getAnswer() == userAnwer ? (
                    <FaEquals />
                  ) : (
                    <FaNotEqual />
                  )}
                </div>
                <h1 className={classFontSizeNumber}>{userAnwer}</h1>
              </div>
              <div
                className={classFontSizeText}
                style={{
                  color: `${game.getAnswer() == userAnwer ? `green` : `black`}`,
                }}
              >
                {userAnwer == game.getAnswer() ? (
                  `${name}, молодец!`
                ) : (
                  <>
                    {`Ой-ой, ${name}!`}
                    <br />
                    {"Ошибочка - бывает. Попробуй еще"}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className=" bg-primary rounded-xl absolute right-0 top-0 flex-col flex justify-around ">
            <Button className="  btn-ghost text-3xl" onClick={() => onStart()}>
              <MdRestartAlt />
            </Button>
            <Button
              className="   btn-ghost text-3xl"
              onClick={() => clickListner()}
            >
              <GiSettingsKnobs />
            </Button>

            <Button className="btn-ghost text-3xl">
              <label htmlFor="my_modal_7">
                <IoMdCheckmarkCircleOutline />
              </label>
            </Button>
          </div>
        </Card.Body>
        <Card.Title className="mx-auto pb-5"></Card.Title>
      </Card>
      <div>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box mx-auto flex flex-wrap gap-5 ">
            {game.getNumbers().map((num) => (
              <>
                <div className="flex gap-2">
                  <div className="text-xl ">{num}</div>
                </div>
              </>
            ))}
            <h1>Результат</h1> {game.getAnswer()}
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </>
  );
};

export default AnzanResult;
