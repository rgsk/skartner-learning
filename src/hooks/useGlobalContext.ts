// context/GlobalContext.tsx

import { usePathname } from "next/navigation";
import { createContext, useContext, useRef } from "react";
const sidebarPaths = ["/dsa", "/cses"];

export const useGlobalContextValue = () => {
  const currentExecuteCodeRef = useRef<any>(null);
  const pathname = usePathname();
  const showSidebar = sidebarPaths.some((p) => pathname.startsWith(p));
  return {
    currentExecuteCodeRef,
    showSidebar,
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
