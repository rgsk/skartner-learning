"use client";
import Navbar from "@/components/Navbar/Navbar";
import { AppSidebar } from "@/components/Sidebars/AppSidebar";
import { ControlsSidebar } from "@/components/Sidebars/ControlsSidebar";
import useGlobalContext from "@/hooks/useGlobalContext";

interface AppProps {
  children: any;
}
const App: React.FC<AppProps> = ({ children }) => {
  const { showAppSidebar, showControlsSidebar } = useGlobalContext();
  return (
    <div className="flex w-full">
      {showAppSidebar && <AppSidebar />}
      <div className="flex-1 min-w-0">
        <Navbar />
        <main>{children}</main>
      </div>
      {showControlsSidebar && <ControlsSidebar />}
    </div>
  );
};
export default App;
