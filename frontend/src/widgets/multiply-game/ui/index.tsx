import { Button, ButtonGroup } from "react-daisyui";
import { FC, useState } from "react";
import {
  MultiConfig,
  MultiCore,
  OPERATIONS,
} from "@shared/core/games/multiplication";

import MultiAnswerForm from "./steps/answer-form";
import MultiPreview from "./steps/preview";
import MultiResult from "./steps/result";
import MultiTusk from "./steps/counter";

enum GAME_STEPS {
  PREVIEW,
  TUSKS,
  ANSWER_FORM,
  RESULT,
}

interface MultiplicationStepsProps {
  defaultConfig: MultiConfig;
}
const MultiplicationSteps: FC<MultiplicationStepsProps> = ({
  defaultConfig,
}) => {
  const [config, setConfig] = useState<MultiConfig>(defaultConfig);
  const [answer, setAnswer] = useState<number>(0);
  const [operands, setOperands] = useState({
    num1: NaN,
    num2: NaN,
  });
  const { num1, num2 } = operands;
  const game = new MultiCore(config);

  const steps = {
    [GAME_STEPS.PREVIEW]: <MultiPreview />,
    [GAME_STEPS.TUSKS]: <MultiTusk />,
    [GAME_STEPS.ANSWER_FORM]: <MultiAnswerForm />,
    [GAME_STEPS.RESULT]: <MultiResult />,
  };

  return <>{steps[GAME_STEPS.PREVIEW]}</>;
};
export default MultiplicationSteps;
