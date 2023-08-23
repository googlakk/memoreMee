import { FC } from "react";

const AnzanResult: FC<{ rightAnswer: number; userAnwer: number }> = ({
  answer,
}) => {
  return (
    <>
      <h1>{answer}</h1>
    </>
  );
};

export default AnzanResult;
