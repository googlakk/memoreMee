import { Countdown, Stats } from "react-daisyui";
import { FC, useEffect, useState } from "react";

import MyCard from "./gameCards/cards";
import MyNavbar from "./navbar/navbar";
import st from "./style.module.css";
import style from "./container.module.css";
import { useNavigate } from "react-router-dom";
import { withAuthMiddleware } from "@app/hocs";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const args = {};
  return (
    <>
      <div>
        <div className={style.width}>
          <MyNavbar />

          <div className={st.container}>
            <div>
              <div className={st.title}>
                <h2 className={st.name}>Привет, Эмир!👋</h2>
                <h3 className={st.description}>Давай развиваться вместе!:)</h3>
              </div>
              <div className={st.cards_container}>
                <MyCard bgColor="bg-info" title="Анзан" />
                <MyCard bgColor="bg-accent" title="Умножайка" />
                <MyCard bgColor="bg-primary" title="SpellingBee" />
                <MyCard bgColor="bg-error" title="Memory" />
              </div>
            </div>
            <div className={st.profile}>
              <div className={st.avatar_container}>
                <div className="avatar">
                  <div className=" w-16 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                    <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" />
                  </div>
                </div>
              </div>
              <div className={st.name}>Эмир</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthMiddleware(HomePage);
