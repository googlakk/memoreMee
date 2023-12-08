import { Button, Card } from "react-daisyui";
import { useCallback, useEffect, useMemo, useState } from "react";

import { ANZAN_STEPS } from "../..";
import { AnzanCore } from "@shared/core";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
  name: string;
  setName: (s: string) => void;
  setStep: (s: ANZAN_STEPS) => void;
  playersCount: number;
  game: AnzanCore;
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
  const namePlayer = `${name}  ${playersCount}`;
  const [displayText, setDisplayText] = useState<string | null>(null);
  const [points, setPoints] = useState<number | null>(null);
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

  return (
    <Card className=" rounded-3xl overflow-hidden relative card w-[100%] h-full mx-0  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[url('/img/colorGradientBg.jpeg')] bg-center bg-cover brightness-90">
      <Card.Title className=" absolute left-2 text-left mt-5">
        <div className="indicator">
          <span
            className={`indicator-item badge badge-primary opacity-100  transition-opacity duration-[5000] ${
              displayText ? "opacity-100" : "opacity-10"
            }`}
          >
            <div
              className={`opacity-100  transition-opacity duration-[5000] ${
                displayText ? "opacity-100" : "opacity-10"
              }`}
            >
              {displayText}
              {points}
            </div>
          </span>
          <div className="grid w-32 mt-2 rounded-xl bg-base-300 place-items-center">
            <div
              className=" text-primary font-jura font-light text-left text-l lg:text-[18px] xl:text-[16px] l:text-[16px] ml-2"
              contentEditable
              onBlur={handleNameChange}
              suppressContentEditableWarning={true}
            >
              {namePlayer}
            </div>
          </div>
        </div>
      </Card.Title>
      <Card.Body className="card-body items-center justify-center   text-center">
        <Button
          className="btn bg-transparent text-xl px-2 rounded-xl"
          onClick={() => onStart()}
        >
          <FaRegCirclePlay />
        </Button>
        <Button
          className="btn btn-ghost xl:text-[30px] text-[16px]"
          onClick={() => onSettings()}
        >
          <MdSettingsSuggest />
        </Button>
      </Card.Body>
    </Card>
  );
};
