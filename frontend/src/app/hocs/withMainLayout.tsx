import { Header } from "@widgets/header";
import MyFooter from "@widgets/footer";
import neiro from "/img/neiro.svg";
import neiro2 from "/img/neiro2.svg";

export const withMainLayout =
  (Component: React.FC): React.FC =>
  () => {
    return (
      <div
        className={`flex flex-col min-h-screen bg-gradient-to-r from-[#1f0071] via-[#3f12c5] to-[#021e8b]`}
      >
        <img src={neiro} className="absolute z-0 h-full" alt="" />

        <div className="z-20 w-full flex flex-col justify-between min-h-screen mx-auto">
          <Header />
          <div className="flex-1">
            {/* flex-1 занимает всю доступную высоту */}

            <Component />
          </div>
          <MyFooter />
        </div>

        <img
          src={neiro2}
          className="absolute right-0 bottom-0 z-0 h-full"
          alt=""
        />
      </div>
    );
  };
