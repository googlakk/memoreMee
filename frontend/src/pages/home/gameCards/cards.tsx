import { FC } from "react";
import arif from "/arif.png";
import st from "./style.module.css";
const Card: FC = () => {
  return (
    <>
      <div className={st.card}>
        <div>
          <img src={arif} alt="" />
        </div>
        <div>Ментальная арифметика</div>
        <div>time</div>
      </div>
    </>
  );
};
export default Card;
