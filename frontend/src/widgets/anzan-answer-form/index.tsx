import { Button, Form, Input } from "react-daisyui";
import { FC, useCallback, useState } from "react";

type AnzanAnswerFormProps = { onAnswer: (answer: number) => void };

const AnzanAnswerForm: FC<AnzanAnswerFormProps> = ({ onAnswer }) => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = useCallback(
    (e: any) => {
      e.preventDefault();
      onAnswer(Number(answer));
    },
    [onAnswer, answer]
  );

  return (
    <Form onSubmit={handleAnswer}>
      <Input
        type="number"
        placeholder="Введите ответ"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <Button type="submit">Готово</Button>
    </Form>
  );
};

export default AnzanAnswerForm;
