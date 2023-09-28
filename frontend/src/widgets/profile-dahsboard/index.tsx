import { FC, useState } from "react";

import { useAuthContext } from "@app/hooks";

const ProfileDashboard: FC = () => {
  const { user } = useAuthContext();
  const [active, setActive] = useState(false);

  console.log(user);

  return (
    <>
      <div className="tabs">
        <div
          onClick={() => setActive(!active)}
          className={`tab tab-lifted text-xs ${active ? "tab-active" : " "} `}
        >
          Профиль ({user?.email})
        </div>
        <div className={`tab tab-lifted text-xs`}>Статистика</div>
        <div className={`tab tab-lifted text-xs  `}>Помощь</div>
      </div>
    </>
  );
};
export default ProfileDashboard;
