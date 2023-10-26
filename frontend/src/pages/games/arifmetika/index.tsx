import { FC } from "react";
import GameCard from "@pages/home/ui/card";
import { ROUTES } from "@pages/routes";
import mental from "/img/mental.svg";
import { withMainLayout } from "@app/hocs/withMainLayout";

const Arifmetika: FC = () => {
  return (
    <div className="container mx-auto flex mt-[2%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap mb-10 ">
      <GameCard titleGame="Anzan" imgGame={mental} routes={ROUTES.ANZAN} />
      <GameCard
        titleGame="multiply"
        imgGame={mental}
        routes={ROUTES.ARIFMETIKA}
      />
    </div>
  );
};
export default withMainLayout(Arifmetika);
