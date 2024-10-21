import { FC } from "react";
import { RegisterForm } from "@widgets/register-form";
import { withGuestMiddleware } from "@app/hocs";

const RegisterPage: FC = () => {
  return <RegisterForm />;
};

export default withGuestMiddleware(RegisterPage);
