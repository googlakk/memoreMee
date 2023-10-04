import { FC, useEffect } from "react";
import {
  useGetGameHistoryLazyQuery,
  useGetGameHistoryQuery,
} from "@app/api/queries.gen";

import { Button } from "react-daisyui";
import { useAuthContext } from "@app/hooks";

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
        {data?.gameHistrories?.data.map((data) => (
          <>
            <div
              className={`${
                data.attributes?.isWin ? "bg-accent" : "bg-primary"
              }  rounded-xl p-2 mb-2`}
            >
              <div className="flex justify-center font-arena text-3xl">
                -{" "}
                <div className=" font-light text-xl">
                  {data.attributes?.game?.data?.attributes?.createdAt}
                </div>
              </div>
              <div className="flex">
                Numbers -{JSON.stringify(data.attributes?.result["numbers"])}
              </div>
              <div className="flex">
                Right Answer -
                {JSON.stringify(data.attributes?.result["rightAnswer"])}
              </div>
            </div>
          </>
        ))}
      </div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};
export default Statics;
