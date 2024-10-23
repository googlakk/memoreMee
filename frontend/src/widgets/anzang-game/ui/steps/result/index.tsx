import { AnzanConfig, AnzanCore } from "@shared/core";
import { Button, Card } from "react-daisyui";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { FaEquals, FaNotEqual } from "react-icons/fa";
import { reSizes, toggleBackgroundImage } from "@app/uttils";
import {
  useCrateGameHistoryMutation,
  useUpdateUserScoreMutation,
} from "@app/api/mutations.gen";

import { ANZAN_STEPS } from "../..";
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
  onChangeConfig: (config: AnzanConfig) => void;
  points: number,
  setPoints:  React.Dispatch<React.SetStateAction<number>>
}

const AnzanResult: FC<FuncProps> = ({
  userAnwer,
  onSettings,
  onSetVisible,
  name,
  game: _game,
  playersCount,
  setStep,
  setName,
  onStart,
  onChangeConfig,
  points,
  setPoints
}) => {
  const { user } = useAuthContext();

  const [createGameHistory] = useCrateGameHistoryMutation();
  const [upaateUserScore] = useUpdateUserScoreMutation();
  
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [config, setConfig] = useState<AnzanConfig>(_game.config);

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
  const handleNameChange = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      setName(event.currentTarget.textContent || "");
    },
    []
  );
  useEffect(() => {
    if (game.getAnswer() === userAnwer) {
      SoundRight.play();

      setPoints((prevPoint) => prevPoint + 10);;
    } else {
      console.log("Неправильный ответ. Очки остаются:", points);
      SoundWrong.play();
    }
  }, [userAnwer]);
  // useEffect(() => {
  //   if (game.getAnswer() === userAnwer) {
  //     SoundRight.play();
  //     game.incrementScore();
  //     setPoints(game.getScore());
  //     console.log(game.getScore());
  //   } else {
  //     setPoints(game.getScore());
  //     SoundWrong.play();
  //   }
  // }, [userAnwer, game]);

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
  const handleOpenResult = () => {
    setIsOpenResult(!isOpenResult);
  };
  const OpenSettings = () => {
    onSettings();
    onSetVisible(false);
  };
  const handleSpeedIncrement = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      speed: Math.max(Math.round((prevConfig.speed + 0.1) * 10) / 10, 0.1),
    }));
  };
  const handleSpeedDecrement = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      speed: Math.max(Math.round((prevConfig.speed - 0.1) * 10) / 10, 0.1),
    }));
  };
  const handleNumberCountPlus = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numbersCount: prevConfig.numbersCount + 1,
    }));
  };
  const handleNumberCountMinus = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      numberDepthMinus: prevConfig.numbersCount - 1,
    }));
  };
  useEffect(() => {
    onChangeConfig(config);
  }, [config]);
  const classFontSizeText = cn(
    "font-jura font-light text-center",
    playersCount === 1 && "lg:text-3xl md::text-3xl text-xl",
    playersCount === 2 && "text-3xl",
    playersCount === 3 && "text-[22px]",
    playersCount === 4 && "text-[18px]",
    playersCount === 5 && "text-[18px]",
    playersCount === 6 && "text-[18px]",
    playersCount === 7 && "text-[17px]",
    playersCount === 8 && "text-[17px]",
    playersCount === 9 && "text-[16px]",
    playersCount === 10 && "text-[14px]"
  );
  const classFontSizeNumber = cn(
    "font-jura font-bold text-center",
    playersCount === 1 && "lg:text-7xl md::text-7xl text-4xl ",
    playersCount === 2 && "text-5xl",
    playersCount === 3 && "text-5xl",
    playersCount === 4 && "text-3xl",
    playersCount === 5 && "text-2xl",
    playersCount === 6 && "text-2xl",
    playersCount === 7 && "text-2xl",
    playersCount === 8 && "text-[20px]",
    playersCount === 9 && "text-[18px]",
    playersCount === 10 && "text-[18px]"
  );

  const backgroundSize = reSizes(playersCount);
  const backgroundImage = toggleBackgroundImage(playersCount);
  return (
    <>
      <Card className="rounded-3xl flex flex-col items-center  p-0 card w-[100%]    text-base-100">
        <Card.Title className=" w-fit top-10 py-3 text-left bg-btnLongBg bg-contain bg-no-repeat bg-center ">
          <div className="grid w-64 rounded-xl place-items-center">{name}</div>
        </Card.Title>
        <Card.Body
          className={`w-full relative p-0 card-body flex justify-center items-center ${backgroundImage} bg-no-repeat bg-center`}
          style={{ backgroundSize: backgroundSize }}
        >
          <div className="w-fit  absolute top-0">
            <div className="h-12 w-56 flex justify-between items-start gap-x-9">
              <div className="flex bg-btnLongBg bg-contain bg-no-repeat bg-center text-center ">
                <label className="absolute  -top-1 text-base-100 font-semibold text-[12px]">
                  Скорость
                </label>
                <Button
                  className=" border-none flex items-center hover:bg-transparent hover:border-none   hover:text-base-100"
                  onClick={handleSpeedIncrement}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <span className=" bg-center w-4 font-bold ">{`+`}</span>
                </Button>
                <Button
                  className=" border-none flex items-center hover:bg-transparent hover:border-none   hover:text-base-100"
                  onClick={handleSpeedDecrement}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <span className=" bg-center w-4  ">{`-`}</span>
                </Button>
              </div>

              <div className="flex bg-btnLongBg bg-contain bg-no-repeat bg-center">
                <label className="absolute -top-1 text-[12px] font-semibold text-base-100 w-full">
                  Кол-во действий
                </label>
                <Button
                  className="  border-none flex items-center hover:bg-transparent hover:border-none   hover:text-base-100"
                  onClick={handleNumberCountPlus}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <span className=" bg-center w-4  ">{`+`}</span>
                </Button>
                <Button
                  className=" border-none flex items-center hover:bg-transparent hover:border-none   hover:text-base-100"
                  onClick={handleNumberCountMinus}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <span className=" bg-center w-4  ">{`-`}</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full h-fit relative  mt-6">
            <div className={""}>
              <div className="flex flex-col items-center justify-center mb-0 text-primary">
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
                <h1
                  className={classFontSizeNumber}
                  style={{
                    color: `${
                      game.getAnswer() == userAnwer ? `#16a34a` : `#991b1b`
                    }`,
                  }}
                >
                  {game.getAnswer()}
                </h1>

                <div className="text-xl sLaptop:text-sm ">
                  {game.getAnswer() == userAnwer ? (
                    <FaEquals className="text-[#16a34a]" />
                  ) : (
                    <FaNotEqual className="text-[#991b1b]" />
                  )}
                </div>
                <h1
                  className={classFontSizeNumber}
                  style={{
                    color: `${
                      game.getAnswer() == userAnwer ? `#16a34a` : `#991b1b`
                    }`,
                  }}
                >
                  {userAnwer}
                </h1>
              </div>
              <div
                className={classFontSizeText}
                style={{
                  color: `${
                    game.getAnswer() == userAnwer ? `#064e3b` : `#991b1b`
                  }`,
                }}
              >
                {userAnwer == game.getAnswer() ? (
                  <>
                    {`${name}, молодец!`} <br></br>
                    <span className=" text-xl">{points}</span>
                  </>
                ) : (
                  <>
                    {"Ошибочка - бывает. Попробуй еще"}
                    <div
                      className=" text-primary text-center font-jura font-light  text-l lg:text-[18px] xl:text-[16px] l:text-[16px] ml-2"
                      contentEditable
                      onBlur={handleNameChange}
                      suppressContentEditableWarning={true}
                    >
                      {name} <br></br>
                      <span className=" text-xl">{points}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="w-fit bg-btnLongBg bg-contain bg-no-repeat bg-center  absolute -bottom-2 ">
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
              <Button
                onClick={handleOpenResult}
                className=" btn bg-transparent border-none hover:bg-transparent hover:border-none text-xl hover:text-base-100"
              >
                <IoMdCheckmarkCircleOutline />
              </Button>
            </div>
          </div>

          <div className=" absolute left-0 top-0 bg-primary mask mask-squircle p-2 m-0 flex justify-center items-center">
            <div className={classFontSizeNumber}></div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default AnzanResult;
