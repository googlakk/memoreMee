import { BrowserRouter } from "react-router-dom";

export const withRouterProvider =
  (Component: React.FC): React.FC =>
  () => {
    return (
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
  };
