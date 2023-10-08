import { Route, Routes } from "react-router-dom";

import Anzan from "./games/arifmetika/anzan";
import Arifmetika from "./games/arifmetika";
import HomePage from "./home";
import LoginPage from "./login";
import { ROUTES } from "./routes";
import RegisterPage from "./register";
import StaticsPage from "./statics";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ARIFMETIKA} element={<Arifmetika />} />
      <Route path={ROUTES.ANZAN} element={<Anzan />} />
      <Route path={ROUTES.STATICPAGE} element={<StaticsPage />} />
    </Routes>
  );
};

export default Routing;
