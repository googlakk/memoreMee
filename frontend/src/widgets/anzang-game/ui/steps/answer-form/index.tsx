import { Button, Card, Form, Input } from "react-daisyui";
import { FC, useCallback, useState } from "react";

type AnzanAnswerFormProps = {
  onAnswer: (answer: number) => void;
  onSetVisible: (t: boolean) => void;
};

const AnzanAnswerForm: FC<AnzanAnswerFormProps> = ({
  onAnswer,
  onSetVisible,
}) => {
  const [answer, setAnswer] = useState<string>("");

  const handleAnswer = useCallback(
    (e: any) => {
      e.preventDefault();
      onAnswer(Number(answer));
    },
    [onAnswer, answer]
  );
  const toggleVisible = () => {
    onSetVisible(true);
  };
  return (
    <Card className="card shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-[100%] mx-3 bg-[#0284c7] glass text-black">
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
          />

          <Button className="mt-5" type="submit" onClick={toggleVisible}>
            Готово
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AnzanAnswerForm;
