import { FC } from "react";
import GameCard from "./ui/card";
import { ROUTES } from "@pages/routes";
import memoryImg from "/img/memory.svg";
import mental from "/img/mental.svg";
import spellImg from "/img/bee.svg";
import { withMainLayout } from "@app/hocs/withMainLayout";

const HomePage: FC = () => {
  return (
    <div
      className={`container mx-auto flex mt-[2%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap `}
    >
      <GameCard
        titleGame="Ментальная арифметика"
        imgGame={mental}
        routes={ROUTES.ARIFMETIKA}
      />
      <GameCard
        titleGame="spelling bee"
        imgGame={spellImg}
        routes={"https://spell-int-1b45e42d7717.herokuapp.com/"}
      />
      <GameCard titleGame="memory" imgGame={memoryImg} routes={ROUTES.LOGIN} />
    </div>
  );
};

export default withMainLayout(HomePage);
