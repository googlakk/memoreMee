import { FC, useEffect } from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";
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
        {data?.gameHistrories?.data.slice(-3).map((data) => (
          <>
            <div
              className={`${
                data.attributes?.isWin ? "bg-accent" : "bg-primary"
              }  rounded-xl p-2 mb-2 glass`}
            >
              {data?.attributes?.game?.data?.attributes?.name}
              <div className="flex justify-center font-arena text-3xl">
                -{" "}
                <div className=" font-light text-xl">
                  {data.attributes?.game?.data?.attributes?.createdAt}
                </div>
              </div>
              <div className="flex">
                Numbers -{JSON.stringify(data.attributes?.result["numbers"])}
              </div>
              <div>
                Operations -{" "}
                {JSON.stringify(
                  data.attributes?.result?.gameSettings?.operations
                )}
              </div>
              <div>
                Speed -{" "}
                {JSON.stringify(data.attributes?.result?.gameSettings?.speed)}
              </div>
              <div className="flex">
                Right Answer -
                {JSON.stringify(data.attributes?.result["rightAnswer"])}
              </div>
              <div className="flex">
                User Answer -
                {JSON.stringify(data.attributes?.result["userAnwer"])}
              </div>
            </div>
          </>
        ))}
        <Link to={ROUTES.STATICPAGE}>Узнать более подробно </Link>
      </div>
    </>
  );
};
export default Statics;
