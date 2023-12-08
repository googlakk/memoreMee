import { Button, Card, Form, Input } from "react-daisyui";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import { ANZAN_STEPS } from "../..";

type AnzanAnswerFormProps = {
  name: string;
  onAnswer: (answer: number) => void;
  setStep: (s: ANZAN_STEPS) => void;
};

const AnzanAnswerForm: FC<AnzanAnswerFormProps> = ({ onAnswer, name }) => {
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

  return (
    <Card className="bg-[url('/img/colorGradientBg.jpeg')] bg-center bg-cover rounded-3xl overflow-hidden relative card w-[100%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] brightness-90 ">
      <Card.Body className="flex m-0 p-0 items-center justify-center">
        <div className=" font-jura text-xl font-bold">{name}</div>
        <Form
          className="flex items-center justify-center flex-col"
          onSubmit={handleAnswer}
        >
          <Input
            type="number"
            placeholder="введите ответ"
            className="input-bordered w-auto placeholder:text-[12px] font-bold text-center tracking-wider font-jura input-primary input-ghost text-[15px] h-auto p-2 "
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
