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
    <>
      {showSidebar && <AppSidebar />}
      <div className="w-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};
export default App;
