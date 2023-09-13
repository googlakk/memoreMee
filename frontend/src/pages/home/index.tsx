import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@pages/routes";
import { withMainLayout } from "@app/hocs/withMainLayout";

const HomePage: FC = () => {
  return (
    <div className="container mx-auto">
      <Link to={ROUTES.ANZAN}>Anzan Game</Link>
    </div>
  );
};

export default withMainLayout(HomePage);
