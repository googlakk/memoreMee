import AnzanResult from "@widgets/anzan-result";
import { FC } from "react";

const AnzanAnswerForm: FC<{ onAnswer: (answer: number) => void }> = ({
  answer,
}) => {
  return (
    <>
      <input type="number" />
      <AnzanResult answer={answer} />
    </>
  );
};

export default AnzanAnswerForm;
