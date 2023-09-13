import { FC } from "react";

const TrueAnswerBlock: FC<{ rightAnswer: number[]; userAnswer: number[] }> = ({
  rightAnswer,
  userAnswer,
}) => {
  return <>{userAnswer}</>;
};
export default TrueAnswerBlock;
