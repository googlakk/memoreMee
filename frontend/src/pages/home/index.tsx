import { Button, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { FC } from "react";
import { withAuthMiddleware } from "@app/hocs";

const HomePage: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Heading>Dashboard</Heading>
      <Button onClick={() => navigate("/login")}>Login</Button>

      <Link to="/anzan">Anzan</Link>
    </>
  );
};

export default withAuthMiddleware(HomePage);
