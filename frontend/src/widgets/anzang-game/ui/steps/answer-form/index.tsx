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
    <Card>
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
  );
};

export default AnzanAnswerForm;
