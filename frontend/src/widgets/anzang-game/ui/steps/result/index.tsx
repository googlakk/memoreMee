import { Button, Card } from "react-daisyui";
import { FC, useEffect } from "react";
import {
  useCrateGameHistoryMutation,
  useUpdateUserScoreMutation,
} from "@app/api/mutations.gen";

import { useAuthContext } from "@app/hooks";

interface FuncProps {
  onStart: () => void;
  onSettings: () => void;
  rightAnswer: number;
  userAnwer: number;
  numbers: number[];
  visible: boolean;
  onSetVisible: (t: boolean) => void;
  name: string;
}

const AnzanResult: FC<FuncProps> = ({
  userAnwer,
  rightAnswer,
  onStart,
  onSettings,
  numbers,
  onSetVisible,
  name,
}) => {
  const clickListner = () => {
    onSettings();
    onSetVisible(false);
  };

  const { user } = useAuthContext();

  const [createGameHistory] = useCrateGameHistoryMutation();
  const [upaateUserScore] = useUpdateUserScoreMutation();

  useEffect(() => {
    if (!user) return;

    createGameHistory({
      variables: {
        data: {
          game: "1",
          isWin: userAnwer === rightAnswer,
          user: user.id,
          score: 1,
          publishedAt: new Date(),
          result: { gameSettings: {}, numbers: [1, 2, 3] },
        },
      },
    });

    upaateUserScore({ variables: { id: user.id, score: 1 } });
  }, []);

  return (
    <>
      <Card className="card w-[100%] mx-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]   bg-[#0284c7] glass text-base-100">
        <Card.Body className=" card-body justify-center items-center">
          <div className="flex justify-around w-full">
            <div>
              <h1 className=" font-bold text-3xl ">Правильный ответ</h1>
              <h1>{rightAnswer}</h1>
              <h1
                className="font-bold text-3xl "
                style={{
                  color: `${rightAnswer == userAnwer ? `green` : `red`}`,
                }}
              >
                Ваш ответ
              </h1>
              <h2>{userAnwer}</h2>
            </div>
          </div>
          <div className="w-full flex justify-around">
            <Button onClick={() => onStart()}>Start</Button>
            <Button onClick={() => clickListner()}>Настройки</Button>
            <label htmlFor="my_modal_7" className="btn">
              Задание
            </label>
          </div>
        </Card.Body>
        <Card.Title className="mx-auto pb-5">
          <div
            className=" text-sm ml-2"
            style={{ color: `${rightAnswer == userAnwer ? `green` : `blue`}` }}
          >
            {userAnwer == rightAnswer
              ? `${name}, молодец!`
              : `${name}, попробуй еще раз`}
          </div>
        </Card.Title>
      </Card>
      <div>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box mx-auto flex flex-wrap gap-5 ">
            {numbers.map((num, numIndex) => (
              <>
                <div className="flex gap-2">
                  <div className="text-2xl font-arena ">[{numIndex}] - </div>
                  <div className="text-xl ">{num},</div>
                </div>
              </>
            ))}
            <h1>Результат</h1> {rightAnswer}
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </>
  );
};

export default AnzanResult;
