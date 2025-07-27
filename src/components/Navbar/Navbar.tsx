import { usePathname } from "next/navigation";
import { noSidebarPaths } from "../App";
import { ModeToggle } from "../Shared/ModeToggle";
import { SidebarTrigger } from "../ui/sidebar";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  const pathname = usePathname();
  return (
    <nav className="p-4 flex justify-between items-center border border-b">
      {!noSidebarPaths.includes(pathname) ? <SidebarTrigger /> : <div></div>}
      <ModeToggle />
    </nav>
  );
};
export default Navbar;
