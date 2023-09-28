import { FC, useState } from "react";

const ProfileDashboard: FC = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="tabs">
        <div
          onClick={() => setActive(!active)}
          className={`tab tab-lifted text-xs ${active ? "tab-active" : " "} `}
        >
          Профиль
        </div>
        <div className={`tab tab-lifted text-xs`}>Статистика</div>
        <div className={`tab tab-lifted text-xs  `}>Помощь</div>
      </div>
    </>
  );
};
export default ProfileDashboard;
