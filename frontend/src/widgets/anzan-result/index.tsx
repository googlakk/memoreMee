import { FC } from "react";

const AnzanResult: FC<{ rightAnswer: number; userAnwer: number }> = ({
  userAnwer,
  rightAnswer,
}) => {
  return <>{userAnwer == rightAnswer ? "Ответ верный" : "Game over!"}</>;
};

export default AnzanResult;
