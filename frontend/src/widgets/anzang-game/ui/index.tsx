import { useMemo, useState } from "react";

import AnzanAnswerForm from "./steps/answer-form";
import { AnzanCore } from "@shared/core/games/anzan";
import { AnzanGamePreview } from "./steps/preview";
import { AnzanGameSettings } from "./steps/settings";
import AnzanResult from "./steps/result";
import Counter from "./steps/counter";

enum ANZAN_STEPS {
  PREVIEW,
  SETTINGS,
  COUNTER,
  ANSWER_FORM,
  RESULT,
}

interface AnzanGameProps {
  game: AnzanCore;
}

export const AnzanGame: React.FC<AnzanGameProps> = ({ game }) => {
  const [step, setStep] = useState<ANZAN_STEPS>(ANZAN_STEPS.PREVIEW);
  const [userAnswer, setUserAnswer] = useState<number>(0);

  const numbers = useMemo(() => {
    return game.getNumbers();
  }, [game]);

  const steps = {
    [ANZAN_STEPS.PREVIEW]: (
      <AnzanGamePreview
        onStart={() => setStep(ANZAN_STEPS.COUNTER)}
        onSettings={() => setStep(ANZAN_STEPS.SETTINGS)}
      />
    ),
    [ANZAN_STEPS.SETTINGS]: (
      <AnzanGameSettings
        onSave={(config) => {
          game.setCofign(config);
          setStep(ANZAN_STEPS.PREVIEW);
        }}
        defaultSettings={game.config}
      />
    ),
    [ANZAN_STEPS.COUNTER]: (
      <Counter
        onFinish={() => setStep(ANZAN_STEPS.ANSWER_FORM)}
        numbers={numbers}
      />
    ),
    [ANZAN_STEPS.ANSWER_FORM]: (
      <AnzanAnswerForm
        onAnswer={(answer) => {
          setUserAnswer(answer);
          setStep(ANZAN_STEPS.RESULT);
        }}
      />
    ),
    [ANZAN_STEPS.RESULT]: (
      <AnzanResult rightAnswer={game.getAnswer()} userAnwer={userAnswer} />
    ),
  };

  return steps[step];
};
