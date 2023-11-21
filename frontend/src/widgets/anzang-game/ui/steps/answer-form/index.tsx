import { Button, Card, Form, Input } from "react-daisyui";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import { ANZAN_STEPS } from "../..";

type AnzanAnswerFormProps = {
  onAnswer: (answer: number) => void;
  setStep: (s: ANZAN_STEPS) => void;
};

const AnzanAnswerForm: FC<AnzanAnswerFormProps> = ({ onAnswer }) => {
  const [answer, setAnswer] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        console.log("answer-form");
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
    <Card className="bg-[url('/img/colorGradientBg.jpg')] bg-center bg-cover rounded-3xl overflow-hidden relative card w-[100%] mx-0 lg:mx-3 xl:mx-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] brightness-90 ">
      <Card.Body className="flex items-center justify-center">
        <Form
          className="flex items-center justify-center flex-col"
          onSubmit={handleAnswer}
        >
          <Input
            type="number"
            placeholder="Введите ответ"
            className="input-bordered w-auto text-2xl h-auto p-2 "
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            ref={inputRef}
          />

          <Button className="mt-5" type="submit">
            Готово
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AnzanAnswerForm;
