import Routing from "@pages";
import st from "../pages/home/style.module.css";
import { withProviders } from "./providers";
const App: React.FC = () => (
  <div className={st.bg}>
    {" "}
    <Routing />{" "}
  </div>
);
export default withProviders(App);
