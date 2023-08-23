import AnzanAnswerForm from "@widgets/anzan-answer-form";
import { FC } from "react";
import { number } from "yup";
import { prop } from "ramda";

interface FuncProps {
  counts: number | null;
}
const AnzanCounter: FC<FuncProps> = ({ counts }) => {
  return (
    <>
      <h1>{counts}</h1>
    </>
  );
};

export default AnzanCounter;
