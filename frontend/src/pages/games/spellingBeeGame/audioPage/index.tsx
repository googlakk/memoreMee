import { FC } from "react";
import SpellingAudioPlayer from "@widgets/spell-VoiceSelection";
import { useParams } from "react-router-dom";
import { withMainLayout } from "@app/hocs/withMainLayout";
import { words } from "@widgets/spell-SubLevel/words";
const AudioPage: FC = () => {
  const { stage } = useParams();
  const { level } = useParams();
  const selectedStage = stage as keyof typeof words;
  const selectedLevel = level as keyof typeof stage;
  const selectedWords = words[selectedStage][selectedLevel];

  return <SpellingAudioPlayer words={selectedWords} />;
};
export default withMainLayout(AudioPage);
