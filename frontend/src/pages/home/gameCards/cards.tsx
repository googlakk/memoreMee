import { FC } from "react";
import arif from "/arif.png";
import st from "./style.module.css";
interface FuncProps {
  src: string;
  title: string;
  time: number;
  color: string;
}
const Card: FC<FuncProps> = ({ src, title, time, color }) => {
  return (
    <>
      <div className={st.card} style={{ background: `${color}` }}>
        <div className={st.circle}>
          <img className={st.logo} src={src} alt="" />
        </div>

        <div>{title}</div>
        <div>{time}</div>
      </div>
    </>
  );
};
export default Card;
