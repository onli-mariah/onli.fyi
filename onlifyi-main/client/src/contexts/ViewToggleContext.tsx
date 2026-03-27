import React, { createContext, useContext, useState, ReactNode } from "react";

interface ViewToggleContextType {
  forceDesktop: boolean;
  forceMobile: boolean;
  setForceDesktop: (force: boolean) => void;
  setForceMobile: (force: boolean) => void;
  resetView: () => void;
}

const ViewToggleContext = createContext<ViewToggleContextType | undefined>(undefined);

export function ViewToggleProvider({ children }: { children: ReactNode }) {
  const [forceDesktop, setForceDesktop] = useState(false);
  const [forceMobile, setForceMobile] = useState(false);

  const resetView = () => {
    setForceDesktop(false);
    setForceMobile(false);
  };

  return (
    <ViewToggleContext.Provider
      value={{
        forceDesktop,
        forceMobile,
        setForceDesktop,
        setForceMobile,
        resetView,
      }}
    >
      {children}
    </ViewToggleContext.Provider>
  );
}

export function useViewToggle() {
  const context = useContext(ViewToggleContext);
  if (context === undefined) {
    throw new Error("useViewToggle must be used within a ViewToggleProvider");
  }
  return context;
}
