"use client";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";

export const noSidebarPaths = ["/", "/practice"];
interface AppProps {
  children: any;
}
const App: React.FC<AppProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {!noSidebarPaths.includes(pathname) && <AppSidebar />}
      <div className="w-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};
export default App;
