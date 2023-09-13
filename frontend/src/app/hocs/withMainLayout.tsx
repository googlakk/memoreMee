import { Header } from "@widgets/header";

export const withMainLayout =
  (Component: React.FC): React.FC =>
  () => {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="h-full">
          <Component />
        </div>
      </div>
    );
  };
