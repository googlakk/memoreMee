import { Card } from "react-daisyui";
import { FC } from "react";

const AnzanResult: FC<{ rightAnswer: number; userAnwer: number }> = ({
  userAnwer,
  rightAnswer,
}) => {
  return (
    <Card>
      <Card.Body>
        {userAnwer == rightAnswer ? "Ответ верный" : "Game over!"}
        <h1 className=" font-bold text-3xl ">Правильный ответ</h1>
        <h1>{rightAnswer}</h1>
        <h1 className="font-bold text-3xl ">Ваш ответ</h1>
        <h2>{userAnwer}</h2>
      </Card.Body>
    </Card>
  );
};

export default AnzanResult;
