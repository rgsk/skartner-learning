// context/GlobalContext.tsx

import { createContext, useContext, useRef } from "react";

export const useGlobalContextValue = () => {
  const currentExecuteCodeRef = useRef<any>(null);

  return {
    currentExecuteCodeRef,
  };
};

export const GlobalContext = createContext<ReturnType<
  typeof useGlobalContextValue
> | null>(null);

const useGlobalContext = () => {
  const value = useContext(GlobalContext)!;
  return value;
};
export default useGlobalContext;
