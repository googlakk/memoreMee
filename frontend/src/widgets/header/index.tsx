import { FC } from "react";
import { Link } from "react-router-dom";
import ProfileDashboard from "@widgets/profile-dahsboard";
import { ROUTES } from "@pages/routes";

interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
  const logo = "/img/IntelGroup.png";
  const avatar = "/img/avatar.png";

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link to={ROUTES.HOME}>
            <img className="w-[80px]" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="drawer-menu z-10 drawer-end ">
            <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mx-auto ">
              {/* Page content here */}
              <label htmlFor="menu-drawer" className="btn  drawer-button">
                <img src={avatar} />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="menu-drawer" className="drawer-overlay"></label>
              <ul className="p-4 w-80 min-h-full bg-base-200  text-base-content">
                <li>
                  <ProfileDashboard />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
