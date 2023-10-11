import React from "react";
import SpellingBee from "@widgets/spellingBee-game";
import { withMainLayout } from "@app/hocs/withMainLayout";

const SpeechComponent: React.FC = () => {
  return <SpellingBee />;
};

export default withMainLayout(SpeechComponent);
