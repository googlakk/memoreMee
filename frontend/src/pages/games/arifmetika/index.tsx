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
    <div className="w-full min-h-screen bg-anzanMenuBg flex flex-col items-center justify-center bg-cover">
      <div className=" absolute top-36 w-96">
        <img src={logo} />
      </div>
      <div className=" flex flex-col items-center mt-10 w-full ">
        <HomePageCard imgGame={anzan} routes={ROUTES.ANZAN} />
        <HomePageCard imgGame={multiply} routes={ROUTES.MULTIPLY} />
        <HomePageCard imgGame={generator} routes={ROUTES.MULTIPLY} />
        <HomePageCard imgGame={collums} routes={ROUTES.MULTIPLY} />
      </div>
    </div>
  );
};
export default compose(withMainLayout)(Arifmetika);
