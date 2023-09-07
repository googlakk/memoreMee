import { FC, useEffect, useState } from "react";

import { Countdown } from "react-daisyui";
import MyCard from "./gameCards/cards";
import MyNavbar from "./navbar/navbar";
import st from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { withAuthMiddleware } from "@app/hocs";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={st.bg}>
        <MyNavbar />

        <div className={st.container}>
          <div>
            <div className={st.title}>
              <h2 className={st.name}>Привет, Айназик!👋</h2>
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
            <h2 className=" text-cyan-300">Личный кабинет ученика</h2>
            <div className={st.avatar_container}>
              <div className="avatar">
                <div className=" w-14 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                  <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" />
                </div>
              </div>
            </div>
            <div className={st.name}>Мучаилов Эмир Болотович</div>
            <div
              className="radial-progress mt-10 bg-primary text-primary-content border-4 border-primary"
              style={{ "--value": 70 }}
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthMiddleware(HomePage);
