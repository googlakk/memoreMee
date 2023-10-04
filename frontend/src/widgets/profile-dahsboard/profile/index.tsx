import { FC } from "react";
import { useAuthContext } from "@app/hooks";

const Profile: FC = () => {
  const { user } = useAuthContext();
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
      </div>
    </>
  );
};
export default Profile;
