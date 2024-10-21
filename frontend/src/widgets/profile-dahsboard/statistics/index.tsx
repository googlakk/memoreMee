import { FC, useEffect } from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";
import moment from "moment";
import { useAuthContext } from "@app/hooks";
import { useGetGameHistoryLazyQuery } from "@app/api/queries.gen";

const Statics: FC = () => {
  const [getGameHistory, { data }] = useGetGameHistoryLazyQuery();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getGameHistory({ variables: { userID: user.id } });
    }
  }, [user]);

  return (
    <>
      <div>
        {data?.gameHistrories?.data.slice(-6).map((data) => (
          <>
            <div
              className={`${
                data.attributes?.isWin ? "bg-accent" : "bg-primary"
              }  rounded-xl p-2 mb-2 glass`}
            >
              <h1 className="font-arena">
                {data?.attributes?.game?.data?.attributes?.name}
              </h1>
              <div className="flex justify-center font-arena text-3xl">
                <div className=" font-light text-xl">
                  {moment(data.attributes?.publishedAt).format(
                    "DD-MM-yy -  HH:mm:ss"
                  )}
                </div>
              </div>
              <div className="flex"></div>

              <div></div>
              <div className="flex"></div>
              <div className="flex"></div>
            </div>
          </>
        ))}
        <Link to={ROUTES.STATICPAGE}>Узнать более подробно </Link>
      </div>
    </>
  );
};
export default Statics;
