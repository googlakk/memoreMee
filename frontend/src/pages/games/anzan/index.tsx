import { AnzanConfig, AnzanGameManager } from "@shared/core";
import { FC, useMemo, useState } from "react";

import AnzanAnswerForm from "@widgets/anzan-answer-form";
import AnzanCounter from "@widgets/anzan-counter";
import AnzanResult from "@widgets/anzan-result";
import AnzanSettingForm from "@widgets/anzan-setting-form/ui";

enum ANZAN_STEPS {
  SETUP,
  QUESTIONS,
  ANSWER,
  RESULTS,
}

const Anzan: FC = () => {
  const [step, setStep] = useState<ANZAN_STEPS>(ANZAN_STEPS.SETUP);
  const [speed, setSpeed] = useState<number | null>(null);
  const [numsCount, setNumsCount] = useState<number | null>(null);

  const [config, setConfig] = useState<null | AnzanConfig>(null);

  const [answer, setAnswer] = useState<number[]>([]);

  const [playersCount, setPlayersCount] = useState(1);

  const manager = useMemo(() => {
    if (!playersCount || !speed || !numsCount || !config) return null;

    return new AnzanGameManager(
      { players: playersCount, speed: speed * 1000, numsCount },
      config
    );
  }, [playersCount, speed, config]);

  const steps = {
    [ANZAN_STEPS.SETUP]: (
      <AnzanSettingForm
        onSave={(settings) => {
          setConfig(settings.config);
          setSpeed(settings.speed);
          setNumsCount(settings.numsCount);
          setPlayersCount(settings.playersCount);
          setStep(ANZAN_STEPS.QUESTIONS);
        }}
      />
    ),
    [ANZAN_STEPS.QUESTIONS]: !!manager && (
      <AnzanCounter
        manager={manager}
        onFinish={() => {
          setStep(ANZAN_STEPS.ANSWER);
        }}
      />
    ),
    [ANZAN_STEPS.ANSWER]: (
      <AnzanAnswerForm
        playersCount={playersCount}
        onAnswer={(answer) => {
          setAnswer(answer);
          setStep(ANZAN_STEPS.RESULTS);
        }}
      />
    ),
    [ANZAN_STEPS.RESULTS]: answer !== null && !!manager && (
      <AnzanResult userAnwer={answer} rightAnswer={manager.getAnswers()} />
    ),
  };

  return steps[step];
};

export default Anzan;
