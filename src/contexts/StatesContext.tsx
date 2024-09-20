"use client";
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Definimos el tipo del contexto
interface StatesContextType {
  stateSideBar: number;
  setStateSideBar: Dispatch<SetStateAction<number>>;
}

// Tipamos el contexto para evitar el error de "no arguments"
const StatesContext = createContext<StatesContextType | undefined>(undefined);

// Definimos el tipo de `children` que debe ser un ReactNode
interface StatesProviderProps {
  children: ReactNode;
}

const StatesProvider = ({ children }: StatesProviderProps) => {
  const [stateSideBar, setStateSideBar] = useState<number>(1);

  return (
    <StatesContext.Provider
      value={{
        stateSideBar,
        setStateSideBar,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export { StatesProvider };
export default StatesContext;
