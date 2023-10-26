import { FC, useState } from "react";
import { LEVELS, words } from "@widgets/spellingBee-game/words";
import { useNavigate, useParams } from "react-router-dom";

import SpellingAudioPlayer from "@widgets/spellingBee-game/VoiceSelection";
import { withMainLayout } from "@app/hocs/withMainLayout";

const AudioPage: FC = () => {
  const { stage } = useParams();
  const { level } = useParams();
  const selectedStage = stage as keyof typeof words;

  return <SpellingAudioPlayer words={words[selectedStage][level]} />;
};
export default withMainLayout(AudioPage);
