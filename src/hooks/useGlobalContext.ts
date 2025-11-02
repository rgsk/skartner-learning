// context/GlobalContext.tsx

import { usePathname } from "next/navigation";
import { createContext, useContext, useRef, useState } from "react";
const sidebarPaths = ["/dsa", "/cses"];

export const useGlobalContextValue = () => {
  const currentExecuteCodeRef = useRef<any>(null);
  const pathname = usePathname();
  const showAppSidebar = sidebarPaths.some((p) => pathname.startsWith(p));
  const [showControlsSidebar, setShowControlsSidebar] = useState(false);

  return {
    currentExecuteCodeRef,
    showAppSidebar,
    showControlsSidebar,
    setShowControlsSidebar,
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
