import { AnzanConfig, AnzanCore } from "@shared/core/games/anzan";
import { useEffect, useState } from "react";

import AnzanAnswerForm from "./steps/answer-form";
import { AnzanGamePreview } from "./steps/preview";
import { AnzanGameSettings } from "./steps/settings";
import AnzanResult from "./steps/result";
import Counter from "./steps/counter";
import { ENTER_STATE } from "@app/providers/withActiveComponentProvider";
import { useActiveComponent } from "@app/hooks";

enum ANZAN_STEPS {
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
  const { activeComponent, setActiveComponent } = useActiveComponent();
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
  useEffect(() => {
    const handleClickEnter = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" && activeComponent === ENTER_STATE.STOP) {
        console.log(activeComponent, "pressed enter");
        setStep(ANZAN_STEPS.PREVIEW);
      } else if (
        event.key === "Enter" &&
        activeComponent === ENTER_STATE.OPEN
      ) {
        console.log(activeComponent, "pressed enter");
        setStep(ANZAN_STEPS.RESULT);
      } else if (
        event.key === "Enter" &&
        activeComponent === ENTER_STATE.START
      ) {
        setStep(ANZAN_STEPS.COUNTER);
      }
    };
    document.addEventListener("keydown", handleClickEnter);

    // Возвращаем функцию для уда ления слушателя
    return () => {
      document.removeEventListener("keydown", handleClickEnter);
    };
  }, [activeComponent]);

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
        game={game}
        name={name}
        speed={game.config.speed}
        playersCount={playersCount}
        muted={!isSpeedEquals}
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
      <AnzanResult
        onSetVisible={setVisible}
        onStart={() => setStep(ANZAN_STEPS.COUNTER)}
        onSettings={() => setIsOpenSettings(true)}
        userAnwer={userAnswer}
        visible={visible}
        name={name}
        game={game}
        playersCount={playersCount}
      />
    ),
  };

  return (
    <>
      {steps[step]}

      <AnzanGameSettings
        open={isOpenSettings}
        onSave={(config) => {
          onChangeConfig(config);
          setIsOpenSettings(false);
        }}
        onCancel={() => {
          setIsOpenSettings(false);
        }}
        defaultSettings={game.config}
      />
    </>
  );
};
