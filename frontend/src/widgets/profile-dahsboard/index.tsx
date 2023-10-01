import { FC, useState } from "react";

import { useAuthContext } from "@app/hooks";

const ProfileDashboard: FC = () => {
  const [active, setActive] = useState(0);
  const { user } = useAuthContext();

  return (
    <>
      <div className="tabs">
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
        <div
          onClick={() => setActive(3)}
          className={`tab tab-lifted text-xs ${
            active === 3 ? "tab-active" : " "
          } `}
        >
          Помощь
        </div>
      </div>
      <div className="tabs-content">
        {active === 1 ? (
          <div>
            {" "}
            <h1> {user?.username}</h1>
            {user?.email}
            {user?.confirmed}
            {user?.confirmed}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default ProfileDashboard;
