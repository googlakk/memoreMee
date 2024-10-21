import { Button, Card } from "react-daisyui";
import { reSizes, toggleBackgroundImage } from "@app/uttils";
import { useCallback, useEffect, useMemo, useState } from "react";

import { ANZAN_STEPS } from "../..";
import { AnzanCore } from "@shared/core";
import { MdSettingsSuggest } from "react-icons/md";
import btnStart from "@assets/newImg/Button-START.png";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
  name: string;
  setName: (s: string) => void;
  setStep: (s: ANZAN_STEPS) => void;
  playersCount: number;
  game: AnzanCore;
  index: number;
}

export const AnzanGamePreview: React.FC<FuncProps> = ({
  onStart,
  onSettings,
  name,
  setName,
  setStep,
  playersCount,
  game: _game,
}) => {
  const game = useMemo(() => _game, []);
  const namePlayer = `${name}`;
  const [, setDisplayText] = useState<string | null>(null);
  const [, setPoints] = useState<number | null>(null);
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
  }, [setStep]);
  const handleNameChange = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      setName(event.currentTarget.textContent || "");
    },
    []
  );

  useEffect(() => {
    const showTimeoutId = setTimeout(() => {
      setDisplayText("Введите имя");
      setPoints(null);
    }, 1000);

    const hiddenTimeoutId = setTimeout(() => {
      setDisplayText(null);
      setPoints(game.getScore());
    }, 5000);

    return () => {
      clearTimeout(hiddenTimeoutId);
      clearTimeout(showTimeoutId);
    };
  }, []);

  const backgroundSize = reSizes(playersCount);
  const backgroundImage = toggleBackgroundImage(playersCount);

  return (
    <Card className="rounded-3xl flex flex-col items-center overflow-hidden relative card w-[100%] m-0 p-0  ">
      <div
        className={`flex flex-col items-center rounded-3xl overflow-hidden relative card w-[100%] h-full  mx-0  `}
      >
        <Card.Title className=" w-fit top-10 py-3 text-left bg-btnLongBg bg-contain bg-no-repeat bg-center ">
          <div className="grid w-64 rounded-xl place-items-center">
            <div
              className=" text-primary font-jura font-bold text-left text-l lg:text-[18px] xl:text-[16px] l:text-[16px] ml-2"
              contentEditable
              onBlur={handleNameChange}
              suppressContentEditableWarning={true}
            >
              {namePlayer}
            </div>
          </div>
        </Card.Title>
        <Card.Body
          className={`card-body w-full bg-no-repeat bg-contain ${backgroundImage}  bg-center  items-center justify-center p-0 m-0   text-center`}
          style={{
            backgroundSize: backgroundSize,
          }}
        >
          <Button
            className=" border-none bg-transparent text-xl px-2 rounded-xl w-28 mb-5 hover:bg-transparent"
            onClick={() => onStart()}
          >
            <img src={btnStart} alt="" />
          </Button>
          <Button
            className="btn btn-ghost bg-transparent bg-btnWideBg bg-contain bg-no-repeat bg-center hover:bg-transparent  "
            onClick={() => onSettings()}
          >
            <MdSettingsSuggest className="w-8  text-[#CA1028] text-[20px]" />
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
};
