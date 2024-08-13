import { AnzanConfig, AnzanCore } from "@shared/core/games/anzan";
import { useEffect, useState } from "react";

import AnzanAnswerForm from "./steps/answer-form";
import { AnzanGamePreview } from "./steps/preview";
import { AnzanGameSettings } from "./steps/settings";
import AnzanResult from "./steps/result";
import Counter from "./steps/counter";

export enum ANZAN_STEPS {
  PREVIEW,
  COUNTER,
  ANSWER_FORM,
  RESULT,
}

interface AnzanGameProps {
  game: AnzanCore;
  autostart?: number;
  playersCount: number;
  onChangeConfig: (config: AnzanConfig) => void;
  isSpeedEquals: boolean;
  autoAnswer?: number;
  setAutoAnser?: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

export const AnzanGame: React.FC<AnzanGameProps> = ({
  game,
  autostart,
  playersCount,
  onChangeConfig,
  isSpeedEquals,
  autoAnswer,
}) => {
  const [step, setStep] = useState<ANZAN_STEPS>(ANZAN_STEPS.PREVIEW);
  const [userAnswer, setUserAnswer] = useState<number>(0);
  const [visible, setVisible] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [name, setName] = useState<string>(`Игрок`);
  const [textToSpeachMuted, setTextToSpeachMuted] = useState(false);

  useEffect(() => {
    if (autostart) {
      setStep(ANZAN_STEPS.COUNTER);
    }
  }, [autostart]);
  useEffect(() => {
    if (autoAnswer) {
      setStep(ANZAN_STEPS.RESULT);
    }
  }, [autoAnswer]);
  const onChangeTextToSpeach = () => {
    setTextToSpeachMuted(!textToSpeachMuted);
  };

  const steps = {
    [ANZAN_STEPS.PREVIEW]: (
      <AnzanGamePreview
        onStart={() => setStep(ANZAN_STEPS.COUNTER)}
        onSettings={() => setIsOpenSettings(true)}
        name={name}
        setName={setName}
        setStep={setStep}
        playersCount={playersCount}
        game={game}
      />
    ),
    [ANZAN_STEPS.COUNTER]: (
      <Counter
        isTextToSpeach={textToSpeachMuted}
        onFinish={() => setStep(ANZAN_STEPS.ANSWER_FORM)}
        game={game}
        name={name}
        speed={game.config.speed}
        playersCount={playersCount}
        muted={!isSpeedEquals}
        setStep={setStep}
      />
    ),
    [ANZAN_STEPS.ANSWER_FORM]: (
      <AnzanAnswerForm
        playersCount={playersCount}
        name={name}
        setStep={setStep}
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
        userAnwer={userAnswer}
        visible={visible}
        name={name}
        game={game}
        playersCount={playersCount}
        setStep={setStep}
        setName={setName}
      />
    ),
  };

  return (
    <>
      {steps[step]}

      <AnzanGameSettings
        playersCount={playersCount}
        open={isOpenSettings}
        onSave={(config) => {
          onChangeConfig(config);
          setIsOpenSettings(false);
        }}
        onChangeChacked={onChangeTextToSpeach}
        textToSpeachChecked={textToSpeachMuted}
        onCancel={() => {
          setIsOpenSettings(false);
        }}
        defaultSettings={game.config}
      />
    </>
  );
};
