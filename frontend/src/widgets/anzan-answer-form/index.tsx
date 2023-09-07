import { Button, Card, Form, Input, Link } from "react-daisyui";
import { FC, useCallback, useState } from "react";

import st from "../../pages/home/style.module.css";

type AnzanAnswerFormProps = {
  playersCount: number;
  onAnswer: (answer: number[]) => void;
};

const AnzanAnswerForm: FC<AnzanAnswerFormProps> = ({
  playersCount,
  onAnswer,
}) => {
  const [answer, setAnswer] = useState<string[]>(
    new Array(playersCount).fill("")
  );

  const handleAnswer = useCallback(
    (e: any) => {
      e.preventDefault();
      onAnswer(answer.map(Number));
    },
    [onAnswer, answer]
  );

  return (
    <div className={`${st.bg} items-center flex justify-center text-center `}>
      <div className="flex w-full justify-center h-screen">
        <Card className="w-3/4 h-3/4 flex items-center mt-10 justify-center  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-indigo-200  bg-opacity-10  text-primary-content  ">
          <Card.Body className="flex items-center">
            <Form onSubmit={handleAnswer}>
              {answer.map((a, index) => (
                <Input
                  type="number"
                  placeholder="Введите ответ"
                  className="input-bordered"
                  value={a}
                  onChange={(e) =>
                    setAnswer((ans) =>
                      ans.map((n, i) => {
                        if (i === index) return e.target.value;
                        return n;
                      })
                    )
                  }
                />
              ))}
              <Button className="mt-5" type="submit">
                Готово
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AnzanAnswerForm;
