import SpellSteps from "@widgets/spellingBee-game";
import { withMainLayout } from "@app/hocs/withMainLayout";

const SpellingGame = () => {
  return (
    <>
      <SpellSteps />
    </>
  );
};
export default withMainLayout(SpellingGame);
