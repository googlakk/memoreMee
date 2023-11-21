export const withAuthMiddleware =
  (Component: React.FC): React.FC =>
  () => {
    // const jwt = window.localStorage.getItem("jwt");

    // // if (!jwt) {
    // //   return <Navigate to={ROUTES.LOGIN} />;
    // // }

    return <Component />;
  };
