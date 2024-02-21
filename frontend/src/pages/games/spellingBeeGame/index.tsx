import React from "react";
import SpellStages from "@widgets/spellStages";
import { compose } from "ramda";
import { withAuthMiddleware } from "@app/hocs";
import { withMainLayout } from "@app/hocs/withMainLayout";

const SpellingBeeGame: React.FC = () => {
  return (
    <>
      <SpellStages />
    </>
  );
};

export default compose(withMainLayout, withAuthMiddleware)(SpellingBeeGame);
