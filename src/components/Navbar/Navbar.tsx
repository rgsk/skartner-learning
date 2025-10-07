import useGlobalContext from "@/hooks/useGlobalContext";
import { ModeToggle } from "../Shared/ModeToggle";
import { SidebarTrigger } from "../ui/sidebar";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  const { showSidebar } = useGlobalContext();
  return (
    <nav className="p-4 flex justify-between items-center border border-b">
      {showSidebar ? <SidebarTrigger /> : <div></div>}
      <ModeToggle />
    </nav>
  );
};
export default Navbar;
