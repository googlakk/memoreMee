export const withMainLayout =
  (Component: React.FC): React.FC =>
  () => {
    return (
      <div
        className={`flex flex-col w-full min-h-screen bg-mainBg bg-no-repeat bg-cover bg-center `}
      >
        <div className="z-20 w-full flex flex-col justify-between min-h-screen mx-auto">
          <div className="flex-1">
            <Component />
          </div>
        </div>
      </div>
    );
  };
