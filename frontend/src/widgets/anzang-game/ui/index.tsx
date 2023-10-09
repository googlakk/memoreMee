import { useEffect, useMemo, useState } from "react";

import AnzanAnswerForm from "./steps/answer-form";
import { AnzanCore } from "@shared/core/games/anzan";
import { AnzanGamePreview } from "./steps/preview";
import { AnzanGameSettings } from "./steps/settings";
import AnzanResult from "./steps/result";
import Counter from "./steps/counter";

enum ANZAN_STEPS {
  PREVIEW,
  COUNTER,
  ANSWER_FORM,
  RESULT,
}

interface AnzanGameProps {
  game: AnzanCore;
  autostart?: number;
  playersCount?: number;
}

export const AnzanGame: React.FC<AnzanGameProps> = ({
  game,
  autostart,
  playersCount,
}) => {
  const [step, setStep] = useState<ANZAN_STEPS>(ANZAN_STEPS.PREVIEW);
  const [userAnswer, setUserAnswer] = useState<number>(0);
  const [useGame, setUseGame] = useState<AnzanCore>(game);
  const [visible, setVisible] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [name, setName] = useState<string>("Участник ");
  useEffect(() => {
    if (autostart) {
      setStep(ANZAN_STEPS.COUNTER);
    }
  }, [autostart]);

  const numbers = useMemo(() => {
    return useGame.getNumbers();
  }, [useGame]);

  const steps = {
    [ANZAN_STEPS.PREVIEW]: (
      <AnzanGamePreview
        onStart={() => setStep(ANZAN_STEPS.COUNTER)}
        onSettings={() => setIsOpenSettings(true)}
        name={name}
        setName={setName}
      />
    ),
    [ANZAN_STEPS.COUNTER]: (
      <Counter
        onFinish={() => setStep(ANZAN_STEPS.ANSWER_FORM)}
        numbers={numbers}
        name={name}
        speed={useGame.config.speed}
        playersCount={playersCount}
      />
    ),
    [ANZAN_STEPS.ANSWER_FORM]: (
      <AnzanAnswerForm
        onSetVisible={setVisible}
        onAnswer={(answer) => {
          setUserAnswer(answer);
          setStep(ANZAN_STEPS.RESULT);
        }}
      />
    ),
    [ANZAN_STEPS.RESULT]: (
      <AnzanResult
        onSetVisible={setVisible}
        onStart={() => setStep(ANZAN_STEPS.COUNTER)}
        onSettings={() => setIsOpenSettings(true)}
        rightAnswer={useGame.getAnswer()}
        userAnwer={userAnswer}
        numbers={numbers}
        visible={visible}
        name={name}
        game={useGame}
      />
    ),
  };

  console.log(useGame);
  return (
    <>
      {steps[step]}

      <AnzanGameSettings
        open={isOpenSettings}
        onSave={(config) => {
          setUseGame(new AnzanCore(config));
          setIsOpenSettings(false);
        }}
        onCancel={() => {
          setIsOpenSettings(false);
        }}
        defaultSettings={useGame.config}
      />
    </>
  );
};
