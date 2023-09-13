import { Button, Card, Form, Input } from "react-daisyui";
import { FC, useCallback, useState } from "react";

type AnzanAnswerFormProps = {
  onAnswer: (answer: number) => void;
};

const AnzanAnswerForm: FC<AnzanAnswerFormProps> = ({ onAnswer }) => {
  const [answer, setAnswer] = useState<string>("");

  const handleAnswer = useCallback(
    (e: any) => {
      e.preventDefault();
      onAnswer(Number(answer));
    },
    [onAnswer, answer]
  );

  return (
    <div className="w-screen justify-center h-screen grid grid-flow-col grid-rows-2 gap-5">
      <Card className="  items-center mt-10  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-indigo-200  bg-opacity-10   ">
        <Card.Body className="flex items-center ">
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
            />

            <Button className="mt-5" type="submit">
              Готово
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AnzanAnswerForm;
