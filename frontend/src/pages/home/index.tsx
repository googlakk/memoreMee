import { gql, useQuery } from "@apollo/client";

import { FC } from "react";
import GameCard from "./ui/card";
import { ROUTES } from "@pages/routes";
import memoryImg from "/public/memory.svg";
import memoryTitle from "/public/MemoryTitile.svg";
import mental from "/mental.svg";
import mentalTitle from "/public/Ментальная арифметика.svg";
import spellImg from "/public/bee.svg";
import spellingTitile from "/public/Spelling Bee.svg";
import { withMainLayout } from "@app/hocs/withMainLayout";

const HomePage: FC = () => {
  return (
    <div className={`container mx-auto flex mt-[10%]`}>
      <GameCard
        titleGame={mentalTitle}
        imgGame={mental}
        routes={ROUTES.ARIFMETIKA}
      />
      <GameCard
        titleGame={spellingTitile}
        imgGame={spellImg}
        routes={"https://spell-int-1b45e42d7717.herokuapp.com/"}
      />
      <GameCard
        titleGame={memoryTitle}
        imgGame={memoryImg}
        routes={ROUTES.LOGIN}
      />
    </div>
  );
};

export default withMainLayout(HomePage);
