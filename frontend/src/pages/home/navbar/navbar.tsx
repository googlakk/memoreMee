const MyNavbar = () => {
  const slon =
    "https://atlas.memorymee.org/static/media/logo_memoryMee.e68ef1ef.png";
  return (
    <div className="navbar shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-white rounded-3xl mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="">О нас</a>
            </li>
            <li>
              <a href="">Тарифы</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Тренажеры</summary>
                <ul className="">
                  <li>
                    <a>Анзан</a>
                  </li>
                  <li>
                    <a href="">Умножайка</a>
                  </li>
                  <li>
                    <a>SpellingBee</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="">Новости</a>
            </li>
            <li>
              <a href="">Рейтинг</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost w-20">
          <img src={slon} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden  justify-center lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="">О нас</a>
          </li>
          <li>
            <a href="">Тарифы</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Тренажеры</summary>
              <ul className="">
                <li>
                  <a>Анзан</a>
                </li>
                <li>
                  <a href="">Умножайка</a>
                </li>
                <li>
                  <a>SpellingBee</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="">Новости</a>
          </li>
          <li>
            <a href="">Рейтинг</a>
          </li>
          <li>
            <a href="">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MyNavbar;
