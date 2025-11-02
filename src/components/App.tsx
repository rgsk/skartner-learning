"use client";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import Navbar from "@/components/Navbar/Navbar";
import useGlobalContext from "@/hooks/useGlobalContext";

interface AppProps {
  children: any;
}
const App: React.FC<AppProps> = ({ children }) => {
  const { showSidebar } = useGlobalContext();
  return (
    <div className="flex w-full">
      {showSidebar && <AppSidebar />}
      <div className="flex-1 min-w-0">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default App;
