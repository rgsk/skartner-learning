"use client";
import Navbar from "@/components/Navbar/Navbar";
import { AppSidebar } from "@/components/Sidebars/AppSidebar";
import { ControlsSidebar } from "@/components/Sidebars/ControlsSidebar";
import useGlobalContext from "@/hooks/useGlobalContext";
import useMeasure from "react-use-measure";

interface AppProps {
  children: any;
}
const App: React.FC<AppProps> = ({ children }) => {
  const { showAppSidebar, showControlsSidebar } = useGlobalContext();
  const [navbarContainerRef, navbarContainerBounds] = useMeasure();
  return (
    <div className="flex w-full">
      {showAppSidebar && <AppSidebar />}
      <div className="flex-1 min-w-0 relative overflow-hidden">
        <div className="absolute top-0 w-full" ref={navbarContainerRef}>
          <Navbar />
        </div>
        <div
          className="absolute h-full w-full overflow-auto"
          style={{ top: navbarContainerBounds.height }}
        >
          <main>{children}</main>
        </div>
      </div>
      {showControlsSidebar && <ControlsSidebar />}
    </div>
  );
};
export default App;
