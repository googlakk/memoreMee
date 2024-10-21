import { FC } from "react";
import HomePageCard from "./ui/HomeCards";
import { ROUTES } from "@pages/routes";
import anzan from "@assets/newImg/Button-Mental-arifmetic.png";
import { compose } from "ramda";
import english from "@assets/newImg/Button-Spelling-Bee.png";
import logo from "@assets/newImg/logo-intellect.png";
import memory from "@assets/newImg/Button-Memory.png";
import { withMainLayout } from "@app/hocs/withMainLayout";

const HomePage: FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full px-4 mb-40 h-[500px]">
        <div className=" w-44 mb-16 sm:w-60 md:w-72 ">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        <div className=" flex flex-col sm:flex-row sm:mt-8 gap-4  ">
          <HomePageCard
            width="170"
            routes={ROUTES.ARIFMETIKA}
            imgGame={anzan}
          />
          <HomePageCard
            width="170"
            routes={ROUTES.SPELLINGBEE}
            imgGame={english}
          />
          <HomePageCard
            width="170"
            routes={ROUTES.ARIFMETIKA}
            imgGame={memory}
          />
        </div>
      </div>
    </div>
  );
};

export default compose(withMainLayout)(HomePage);
