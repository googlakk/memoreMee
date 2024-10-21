import { FC, useState } from "react";

import Profile from "./profile";
import Statics from "./statistics";

const ProfileDashboard: FC = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="tabs ">
        <div
          onClick={() => setActive(1)}
          className={`tab tab-lifted text-xs ${
            active === 1 ? "tab-active" : " "
          } `}
        >
          Профиль
        </div>

        <div
          onClick={() => setActive(2)}
          className={`tab tab-lifted text-xs ${
            active === 2 ? "tab-active" : " "
          }`}
        >
          Статистика
        </div>
      </div>
      <div className="tabs-content">
        {active === 1 ? <Profile /> : active === 2 ? <Statics /> : ""}
      </div>
    </>
  );
};
export default ProfileDashboard;
