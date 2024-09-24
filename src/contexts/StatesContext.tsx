"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface StatesContextType {
  stateSideBar: number;
  setStateSideBar: React.Dispatch<React.SetStateAction<number>>;
}

const StatesContext = createContext<StatesContextType | null>(null);

interface StatesProviderProps {
  children: ReactNode;
}

export const StatesProvider = ({ children }: StatesProviderProps) => {
  const [stateSideBar, setStateSideBar] = useState<number>(1);

  const contextValues: StatesContextType = {
    stateSideBar,
    setStateSideBar,
  };

  return (
    <StatesContext.Provider value={contextValues}>
      {children}
    </StatesContext.Provider>
  );
};

export const useStatesContext = () => {
  const context = useContext(StatesContext);

  if (!context) {
    throw new Error("useStatesContext must be used within a StatesProvider");
  }

  return context;
};
