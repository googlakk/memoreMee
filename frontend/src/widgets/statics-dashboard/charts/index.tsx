import { FC, useEffect } from "react";

import AreaChart from "./area-chart";
import LineChart from "./line-chart";
import { useAuthContext } from "@app/hooks";
import { useGetGameHistoryLazyQuery } from "@app/api/queries.gen";

const Charts: FC = () => {
  const { user } = useAuthContext();
  const [getGameHistory, { data }] = useGetGameHistoryLazyQuery();
  useEffect(() => {
    if (user) {
      getGameHistory({ variables: { userID: user.id } });
    }
  }, [user]);
  return (
    <>
      <div className="bg-base-100 grid grid-cols-2 mt-2 rounded-2xl ">
        <LineChart />
        <AreaChart data={data} />
      </div>
    </>
  );
};
export default Charts;
