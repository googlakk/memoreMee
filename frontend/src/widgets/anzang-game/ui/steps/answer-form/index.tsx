import { Button, Card, Form, Input } from "react-daisyui";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { reSizes, toggleBackgroundImage } from "@app/uttils";

import { ANZAN_STEPS } from "../..";
import { AnzanCore } from "@shared/core";

type AnzanAnswerFormProps = {
  name: string;
  onAnswer: (answer: number) => void;
  setStep: (s: ANZAN_STEPS) => void;
  playersCount: number;
  game: AnzanCore;
};

const AnzanAnswerForm: FC<AnzanAnswerFormProps> = ({
  onAnswer,
  name,
  playersCount,
  game: _game,
}) => {
  const [answer, setAnswer] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleAnswer = useCallback(
    (e: any) => {
      e.preventDefault();
      onAnswer(Number(answer));
  
    },
    [onAnswer, answer]
  );
  const backgroundSize = reSizes(playersCount);
  const backgroundImage = toggleBackgroundImage(playersCount);

  return (
    <Card className=" flex flex-col items-center rounded-3xl overflow-hidden relative card w-[100%]   ">
      <Card.Title className=" w-fit top-10 py-3 text-left bg-btnLongBg bg-contain bg-no-repeat bg-center ">
        <div className="grid w-64 rounded-xl place-items-center">{name}</div>
      </Card.Title>
      <Card.Body
        className={`flex m-0 p-0 w-full items-center justify-center ${backgroundImage} bg-no-repeat bg-center`}
        style={{ backgroundSize: backgroundSize }}
      >
        <Form
          className="flex items-center justify-center flex-col"
          onSubmit={handleAnswer}
        >
          <Input
            type="number"
            placeholder="введите ответ"
            className="input-bordered w-auto placeholder:text-[16px] font-bold text-center tracking-wider font-jura input-primary input-ghost text-[24px] h-auto p-2 "
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            ref={inputRef}
          />

          <Button
            className="mt-5 btn-outline hover:bg-primary p-3 text-[10px]"
            type="submit"
          >
            Готово
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AnzanAnswerForm;
