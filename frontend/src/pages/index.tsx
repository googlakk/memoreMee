import { Route, Routes } from "react-router-dom";

import Anzan from "./games/arifmetika/anzan";
import Arifmetika from "./games/arifmetika";
import AudioPage from "./games/spellingBeeGame/audioPage";

import HomePage from "./home";
import LoginPage from "./login";

import OlimpPage from "./games/spellingBeeGame/olimpPage";
import { ROUTES } from "./routes";
import RegisterPage from "./register";
import SpellingBeeGame from "./games/spellingBeeGame";
import SpellingGame from "./games/spellingBeeGame/game";
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
      <Route path={ROUTES.SPELLINGBEE} element={<SpellingBeeGame />} />
      <Route path={ROUTES.SPELLING} element={<SpellingGame />} />
      <Route path={ROUTES.OLIMPING} element={<SpellingGame />} />
      <Route path={ROUTES.SPELLINGLEVEL} element={<AudioPage />} />
      <Route path={ROUTES.OLIMPINGLEVEL} element={<OlimpPage />} />
    </Routes>
  );
};

export default Routing;
