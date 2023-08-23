import { Button, Heading } from "@chakra-ui/react";

import Card from "./gameCards/cards";
import { FC } from "react";
import avatar from "/avatar.png";
import slon from "/slon.png";
import st from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { withAuthMiddleware } from "@app/hocs";

const HomePage: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={st.bg}>
        <div className={st.borders}>
          <nav className={st.menu}>
            <nav>
              <img src={slon} alt="" />{" "}
            </nav>
            <div>
              <ul className={st.menuList}>
                <li>О нас</li>
                <li>Тарифы</li>
                <li>Новости</li>
                <li>Рейтинг</li>
                <li>Контакты</li>
              </ul>
            </div>
            <nav>
              <img src={avatar} alt="" />
            </nav>
          </nav>
        </div>
        <div className={st.container}>
          <div>
            <div className={st.title}>
              <h2 className={st.name}>Привет, Айназик!👋</h2>
              <h3 className={st.description}>Давай развиваться вместе!:)</h3>
            </div>
            <div className={st.cards_container}>
              <Card
                color="#EB9DFF"
                src="/arif.png"
                title="Ментальная арифметика"
                time={234}
              />
              <Card
                color="#7583FF"
                src="/spellingBee.png"
                title="Spelling bee"
                time={234}
              />
              <Card
                color="#EB9DFF"
                src="/memore.png"
                title="Меmory"
                time={234}
              />
              <Card
                color="#7583FF"
                src="/memore.png"
                title="Меmory"
                time={234}
              />
              <Card
                color="#EB9DFF"
                src="/memore.png"
                title="Меmory"
                time={234}
              />
              <Card
                color="#7583FF"
                src="/spellingBee.png"
                title="Spelling bee"
                time={234}
              />
            </div>
          </div>
          <div className={st.profile}>
            <h2>Личный кабинет ученика</h2>
            <div className={st.avatar_container}>
              <img className={st.avatar} src={slon} alt="" />
            </div>
            <div className={st.name}>Мучаилов Эмир Болотович</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthMiddleware(HomePage);
