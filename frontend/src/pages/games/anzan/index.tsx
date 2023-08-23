import { AnzanConfig, AnzanCore, OPERATIONS } from "@shared/core";
import { FC, useEffect, useState } from "react";

import AnzanAnswerForm from "@widgets/anzan-answer-form";
import AnzanCounter from "@widgets/anzan-counter";
import AnzanResult from "@widgets/anzan-result";
import AnzanSettingForm from "@widgets/anzan-setting-form/ui";

const Anzan: FC = () => {
  const [step, setStep] = useState<"setup" | "counter" | "answer" | "result">(
    "setup"
  );

  return (
    <>
      {step === "setup" && (
        <AnzanSettingForm
          onSave={() => {
            // set config

            setStep("counter");
          }}
        />
      )}
      {step === "counter" && <AnzanCounter counts={2} />}
      {step === "answer" && (
        <AnzanAnswerForm
          onAnswer={(answer) => {
            // return answer
          }}
        />
      )}
      {step === "result" && <AnzanResult userAnwer={5} rightAnswer={3} />}
    </>
  );
};

export default Anzan;
