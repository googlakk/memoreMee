import React, { useEffect, useState } from "react";

export enum ENTER_STATE {
  START = "START",
  OPEN = "OPEN",
  STOP = "STOP",
}
type ActiveComponentPayload = {
  activeComponent: ENTER_STATE;
  setActiveComponent: (activeComponent: ENTER_STATE) => void;
};

export const ActiveComponentContext =
  React.createContext<ActiveComponentPayload>({
    activeComponent: ENTER_STATE.START,
    setActiveComponent: () => {},
  });

export const withActiveComponentProvider =
  (Component: React.FC): React.FC =>
  () => {
    const [activeComponent, setActiveComponent] = useState<ENTER_STATE>(
      ENTER_STATE.START
    );

    return (
      <ActiveComponentContext.Provider
        value={{ activeComponent, setActiveComponent }}
      >
        <Component />
      </ActiveComponentContext.Provider>
    );
  };
