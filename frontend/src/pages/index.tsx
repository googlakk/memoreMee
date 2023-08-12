import { Route, Routes } from "react-router-dom";

import Anzan from "./games/anzan";
import HomePage from "./home";
import LoginPage from "./login";
import { ROUTES } from "./routes";
import RegisterPage from "./register";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ANZAN} element={<Anzan />} />
    </Routes>
  );
};

export default Routing;
