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
    <div className="w-full min-h-[calc(100vh)]   bg-anzanMenuBg bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center  ">
      <div className=" absolute  w-72 desktops:top-44 sLaptop:top-24">
        <img src={logo} />
      </div>
      <div className=" flex flex-col items-center mt-10 w-full ">
        <HomePageCard width="282" imgGame={anzan} routes={ROUTES.ANZAN} />
        <HomePageCard width="282" imgGame={multiply} routes={ROUTES.MULTIPLY} />
        <HomePageCard width="282" imgGame={generator} routes={ROUTES.MULTIPLY} />
        <HomePageCard width="282" imgGame={collums} routes={ROUTES.MULTIPLY} />
      </div>
    </div>
  );
};
export default compose(withMainLayout)(Arifmetika);
