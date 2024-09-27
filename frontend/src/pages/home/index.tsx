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
    <div
      className={`container   mx-auto flex justify-center items-center mt-[5%] flex-col sm:flex-row sm:mt-[10%] md:flex-wrap`}
    >
      <div className=" flex flex-col items-center">
       <div className=" w-70">
       <img src={logo} alt="" />
       </div>

        <div className="flex mt-10  ">
          <HomePageCard width="52" routes={ROUTES.ARIFMETIKA} imgGame={anzan} />
          <HomePageCard width="52" routes={ROUTES.SPELLINGBEE} imgGame={english} />
          <HomePageCard width="52" routes={ROUTES.ARIFMETIKA} imgGame={memory} />
        </div>
      </div>
    </div>
  );
};

export default compose(withMainLayout)(HomePage);
