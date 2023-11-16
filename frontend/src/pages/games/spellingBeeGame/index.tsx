import React from "react";
import SpellStages from "@widgets/spellStages";
import { withMainLayout } from "@app/hocs/withMainLayout";

const SpellingBeeGame: React.FC = () => {
  return (
    <>
      <SpellStages />
    </>
  );
};

export default withMainLayout(SpellingBeeGame);
