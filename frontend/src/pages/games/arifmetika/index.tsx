import { FC } from "react";
import HomePageCard from "@pages/home/ui/HomeCards";
import { ROUTES } from "@pages/routes";
import anzan from "@assets/newImg/Button-Anzan.png";
import collums from "@assets/newImg/Button-Collums.png";
import { compose } from "ramda";
import generator from "@assets/newImg/Button-Quest-Generator.png";
import logo from "@assets/newImg/logo-intellect.png";
import multiply from "@assets/newImg/Button-multiply.png";
import { withMainLayout } from "@app/hocs/withMainLayout";

const Arifmetika: FC = () => {
  return (
    <div className="w-full min-h-[calc(100vh+50px)]  bg-anzanMenuBg bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center ">
      <div className=" absolute top-[5em] w-72">
        <img src={logo} />
      </div>
      <div className=" flex flex-col items-center mt-10 w-full ">
        <HomePageCard width="64" imgGame={anzan} routes={ROUTES.ANZAN} />
        <HomePageCard width="64" imgGame={multiply} routes={ROUTES.MULTIPLY} />
        <HomePageCard width="64" imgGame={generator} routes={ROUTES.MULTIPLY} />
        <HomePageCard width="64" imgGame={collums} routes={ROUTES.MULTIPLY} />
      </div>
    </div>
  );
};
export default compose(withMainLayout)(Arifmetika);
