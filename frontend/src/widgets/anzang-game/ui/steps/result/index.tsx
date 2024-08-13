import { Button, Card } from "react-daisyui";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { FaEquals, FaNotEqual } from "react-icons/fa";
import { reSizes, toggleBackgroundImage } from "@app/uttils";
import {
  useCrateGameHistoryMutation,
  useUpdateUserScoreMutation,
} from "@app/api/mutations.gen";

import { ANZAN_STEPS } from "../..";
import { AnzanCore } from "@shared/core";
import { FaArrowDown } from "react-icons/fa6";
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
  playersCount: number;
  setStep: (s: ANZAN_STEPS) => void;
  setName: (s: string) => void;
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
  setName,
}) => {
  const clickListner = () => {
    onSettings();
    onSetVisible(false);
  };

  const { user } = useAuthContext();

  const [createGameHistory] = useCrateGameHistoryMutation();
  const [upaateUserScore] = useUpdateUserScoreMutation();
  const [points, setPoints] = useState<number>(0);
  const [isOpenResult, setIsOpenResult] = useState(false);
  const game = useMemo(() => _game, []);

  const handleOpenResult = () => {
    setIsOpenResult(!isOpenResult);
  };
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
  const handleNameChange = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      setName(event.currentTarget.textContent || "");
    },
    []
  );

  useEffect(() => {
    if (game.getAnswer() === userAnwer) {
      SoundRight.play();
      game.incrementScore();
      setPoints(game.getScore());
    } else {
      SoundWrong.play();
    }
  }, []);

  useEffect(() => {
    if (!user || playersCount > 1) return;

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
  const SoundWrong = new Howl({
    src: ["/sounds/wrongPip.mp3"],
    volume: 0.4,
  });
  const SoundRight = new Howl({
    src: ["/sounds/win.mp3"],
    volume: 0.3,
    rate: 1.5,
  });

  const classFontSizeText = cn(
    "font-jura font-light text-center",
    playersCount === 1 && "lg:text-3xl md::text-3xl text-xl",
    playersCount === 2 && "text-3xl",
    playersCount === 3 && "text-[22px]",
    playersCount === 4 && "text-2xl",
    playersCount === 5 && "text-xl",
    playersCount === 6 && "text-xl",
    playersCount === 7 && "text-xl",
    playersCount === 8 && "text-[14px]",
    playersCount === 9 && "text-[12px]"
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
  const backgroundSize = reSizes(playersCount);
  const backgroundImage = toggleBackgroundImage(playersCount);
  return (
    <>
      <Card className="rounded-3xl flex flex-col items-center   p-0 card w-[100%] s   text-base-100">
        <Card.Title className=" w-fit top-10 py-3 text-left bg-btnLongBg bg-contain bg-no-repeat bg-center ">
          <div className="grid w-64 rounded-xl place-items-center">{name}</div>
        </Card.Title>
        <Card.Body
          className={`w-full  p-0 card-body flex justify-center items-center ${backgroundImage} bg-no-repeat bg-center`}
          style={{ backgroundSize: backgroundSize }}
        >
          <div className="flex justify-center w-full h-fit">
            <div className={""}>
              <div className="flex flex-col items-center justify-center mb-5 text-primary">
                <div
                  className={`${
                    isOpenResult
                      ? `flex flex-col items-center justify-center`
                      : `hidden`
                  } `}
                >
                  <div
                    className={`${classFontSizeText} flex flex-wrap px-2 text-center justify-center `}
                  >
                    {game.getNumbers().map((num, idx) => (
                      <h3 key={idx} className="ml-4">
                        {num},
                      </h3>
                    ))}
                  </div>
                  <FaArrowDown />
                </div>
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
                    {`Ой-ой!`}
                    <br />
                    {"Ошибочка - бывает. Попробуй еще"}
                    <div
                      className=" text-primary text-center font-jura font-light  text-l lg:text-[18px] xl:text-[16px] l:text-[16px] ml-2"
                      contentEditable
                      onBlur={handleNameChange}
                      suppressContentEditableWarning={true}
                    >
                      {name}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* <div className=" bg-primary rounded-xl absolute right-0 top-0 flex-col   flex justify-around ">
            <Button className="  btn-ghost text-xl" onClick={() => onStart()}>
              <MdRestartAlt />
            </Button>
            <Button
              className="   btn-ghost text-xl"
              onClick={() => clickListner()}
            >
              <GiSettingsKnobs />
            </Button>

            <Button onClick={handleOpenResult} className="btn-ghost text-xl">
              <label>
                <IoMdCheckmarkCircleOutline />
              </label>
            </Button>
          </div>

          <div className=" absolute left-0 top-0 bg-primary mask mask-squircle p-2 m-0 flex justify-center items-center">
            <div className={classFontSizeNumber}>
              {game.getAnswer() === userAnwer ? points : game.getScore()}
            </div>
          </div> */}
        </Card.Body>
        <Card.Title className="mx-auto pb-5"></Card.Title>
      </Card>
    </>
  );
};

export default AnzanResult;
