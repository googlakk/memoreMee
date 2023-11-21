import { Button, Card } from "react-daisyui";
import { useCallback, useEffect, useState } from "react";

import { ANZAN_STEPS } from "../..";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdSettingsSuggest } from "react-icons/md";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
  name: string;
  setName: (s: string) => void;
  setStep: (s: ANZAN_STEPS) => void;
}

export const AnzanGamePreview: React.FC<FuncProps> = ({
  onStart,
  onSettings,
  name,
  setName,
  setStep,
}) => {
  useEffect(() => {
    const handleClickEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        console.log("preview");
        setStep(ANZAN_STEPS.COUNTER);
      }
    };
    document.addEventListener("keydown", handleClickEnter);
    return () => {
      document.removeEventListener("keydown", handleClickEnter);
    };
  }, []);

  const [displayText, setDisplayText] = useState<string | null>(null);
  const handleContentChange = useCallback(
    (event: React.FormEvent<HTMLDivElement>) => {
      setName(event.currentTarget.innerHTML);
    },
    []
  );
  useEffect(() => {
    // После монтирования компонента, устанавливаем текст

    const showTimeoutId = setTimeout(() => {
      setDisplayText("Введите имя");
    }, 1000);
    // Через три секунды сбрасываем текст
    const hiddenTimeoutId = setTimeout(() => {
      setDisplayText(null);
    }, 5000);

    // Очистка таймера при размонтировании компонента
    return () => {
      clearTimeout(hiddenTimeoutId);
      clearTimeout(showTimeoutId);
    };
  }, []);
  return (
    <Card className="rounded-3xl overflow-hidden relative card w-[100%] mx-0 lg:mx-3 xl:mx-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[url('/img/colorGradientBg.jpg')] bg-center bg-cover brightness-90">
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
            </div>
          </span>
          <div className="grid w-32 mt-2 rounded-xl bg-base-300 place-items-center">
            <div
              className=" text-primary font-bold text-left text-l lg:text-[24px] xl:text-[18px] l:text-[16px] ml-2"
              contentEditable
              onBlur={handleContentChange}
              dangerouslySetInnerHTML={{ __html: name }}
            ></div>
          </div>
        </div>
      </Card.Title>
      <Card.Body className="card-body items-center justify-center   text-center">
        <Button
          className="btn btn-primary text-4xl px-5 rounded-xl"
          onClick={() => onStart()}
        >
          <FaRegCirclePlay />
        </Button>
        <Button
          className="btn btn-ghost xl:text-[40px] text-[30px]"
          onClick={() => onSettings()}
        >
          <MdSettingsSuggest />
        </Button>
      </Card.Body>
    </Card>
  );
};
