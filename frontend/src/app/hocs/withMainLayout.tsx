import { Header } from "@widgets/header";

export const withMainLayout =
  (Component: React.FC): React.FC =>
  () => {
    return (
      <div>
        <Header />
        <div>
          <Component />
        </div>
      </div>
    );
  };
