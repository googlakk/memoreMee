import { FC } from "react";
import GameCard from "./ui/card";
import { ROUTES } from "@pages/routes";
import memoryImg from "/img/memory.svg";
import memoryTitle from "/img/MemoryTitile.svg";
import mental from "/img/mental.svg";
import mentalTitle from "/img/MentalArif.svg";
import spellImg from "/img/bee.svg";
import spellingTitile from "/img/SpellBee.svg";
import { withAuthMiddleware } from "@app/hocs";
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
