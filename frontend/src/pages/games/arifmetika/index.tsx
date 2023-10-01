import { FC } from "react";
import GameCard from "@pages/home/ui/card";
import { ROUTES } from "@pages/routes";
import mental from "/mental.svg";
import mentalTitle from "/public/анзан.svg";
import umnozhTitle from "/Умножайка.svg";
import { useAuthContext } from "@app/hooks";
import { withMainLayout } from "@app/hocs/withMainLayout";

const Arifmetika: FC = () => {
  return (
    <div className="container flex mt-[10%]">
      <GameCard
        titleGame={mentalTitle}
        imgGame={mental}
        routes={ROUTES.ANZAN}
      />

      <GameCard
        titleGame={umnozhTitle}
        imgGame={mental}
        routes={ROUTES.ARIFMETIKA}
      />
    </div>
  );
};
export default withMainLayout(Arifmetika);
