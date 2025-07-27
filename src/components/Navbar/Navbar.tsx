import { ModeToggle } from "../Shared/ModeToggle";
import { SidebarTrigger } from "../ui/sidebar";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="p-4 flex justify-between items-center border border-b">
      <SidebarTrigger />
      <ModeToggle />
    </nav>
  );
};
export default Navbar;
