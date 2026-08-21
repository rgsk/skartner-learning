// context/GlobalContext.tsx

import { topics } from "@/lib/topics";
import { usePathname } from "next/navigation";
import { createContext, useContext, useRef, useState } from "react";

// every category with a content tree gets the sidebar, so renaming one does not
// need a matching edit here
const sidebarPaths = Object.keys(topics).map((category) => `/${category}`);

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
