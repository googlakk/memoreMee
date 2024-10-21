import { FC, useState } from "react";

import Charts from "./charts";
import TableData from "./table";

const StaticsDashboard: FC = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="tabs tabs-boxed bg-base-100   ">
        <div
          onClick={() => setActive(1)}
          className={`tab  text-xs ${active === 1 ? "tab-active" : " "} `}
        >
          Графики
        </div>

        <div
          onClick={() => setActive(2)}
          className={`tab  text-xs ${active === 2 ? "tab-active" : " "}`}
        >
          Таблица
        </div>
        <div
          onClick={() => setActive(3)}
          className={`tab text-xs ${active === 3 ? "tab-active" : " "} `}
        >
          Рейтинг
        </div>
        <div
          onClick={() => setActive(4)}
          className={`tab text-xs ${active === 4 ? "tab-active" : " "} `}
        >
          Помощь
        </div>
      </div>
      <div className="tabs-content">
        {active === 1 ? <Charts /> : active === 2 ? <TableData /> : ""}
      </div>
    </>
  );
};
export default StaticsDashboard;
