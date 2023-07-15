import { Navigate } from "react-router-dom";
import { ROUTES } from "@pages/routes";

export const withGuestMiddleware =
  (Component: React.FC): React.FC =>
  () => {
    const jwt = window.localStorage.getItem("jwt");

    if (jwt) {
      return <Navigate to={ROUTES.HOME} />;
    }

    return <Component />;
  };
