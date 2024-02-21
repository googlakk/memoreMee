import { FC } from "react";
import GameCard from "./ui/card";
import { ROUTES } from "@pages/routes";
import { compose } from "ramda";
import memoryImg from "/img/memory.svg";
import mental from "/img/mental.svg";
import spellImg from "/img/bee.svg";
import { withAuthMiddleware } from "@app/hocs";
import { withMainLayout } from "@app/hocs/withMainLayout";

const HomePage: FC = () => {
  return (
    <div
      className={`container mx-auto flex mt-[2%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap`}
    >
      <h1>{}</h1>
      <GameCard
        titleGame="Ментальная арифметика"
        imgGame={mental}
        routes={ROUTES.ARIFMETIKA}
      />
      <GameCard
        titleGame="spelling bee"
        imgGame={spellImg}
        routes={ROUTES.SPELLINGBEE}
      />
      <GameCard titleGame="memory" imgGame={memoryImg} routes={ROUTES.LOGIN} />
    </div>
  );
};

export default compose(withMainLayout, withAuthMiddleware)(HomePage);
