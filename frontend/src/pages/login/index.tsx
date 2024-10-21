import { FC } from "react";
import { LoginForm } from "@widgets/login-form/ui";
import { withGuestMiddleware } from "@app/hocs";

const LoginPage: FC = () => {
  return <LoginForm />;
};

export default withGuestMiddleware(LoginPage);
