import { FC, useEffect } from "react";

import { useAuthContext } from "@app/hooks";
import { useGetGameHistoryLazyQuery } from "@app/api/queries.gen";

const Profile: FC = () => {
  const { user } = useAuthContext();
  const [getGameHistory, { data }] = useGetGameHistoryLazyQuery();
  useEffect(() => {
    if (user) {
      getGameHistory({ variables: { userID: user.id } });
    }
  }, [user]);
  const filteredGame = data?.gameHistrories?.data.filter(
    (data) => data.attributes?.isWin === true
  );
  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className=" font-arena text-2  xl text-center mt-2">профиль</h3>
        <div className="avatar w-40 h-40 ">
          <img
            className="rounded-full"
            src="https://media.radaronline.com/brand-img/dvOfEmbPz/0x0/2019/04/celebrities-with-the-highest-SAT-scores-Will-Smith-featured-photo.jpg"
            alt="avatar.png"
          />
        </div>
        <div className="flex gap-3">
          <p className=" opacity-40">email:</p> {user?.email}
        </div>
        <div className="flex gap-3">
          <p className=" opacity-40">username:</p> {user?.username}
        </div>
        <div className="flex gap-3">
          <p className=" opacity-40">Выпалнено заданий:</p>{" "}
          {data?.gameHistrories?.data.length}
        </div>
        <div className="flex gap-3">
          <p className=" opacity-40">Правильно выполненных:</p>{" "}
          {filteredGame?.length}
        </div>
      </div>
    </>
  );
};
export default Profile;
