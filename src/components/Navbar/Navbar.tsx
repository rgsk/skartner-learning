import useGlobalContext from "@/hooks/useGlobalContext";
import { HomeIcon, PanelRightIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../Shared/ModeToggle";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  const { showAppSidebar, setShowControlsSidebar } = useGlobalContext();
  return (
    <nav className="p-4 flex justify-between items-center border border-b">
      <div className="flex gap-2">
        {showAppSidebar ? <SidebarTrigger /> : <div></div>}
        <Link href="/">
          <Button size="icon" variant="outline">
            <HomeIcon />
          </Button>
        </Link>
      </div>
      <div className="flex gap-2">
        <ModeToggle />
        <Button
          data-sidebar="trigger"
          data-slot="right-sidebar-trigger"
          variant="outline"
          size="icon"
          onClick={() => {
            setShowControlsSidebar((prev) => !prev);
          }}
        >
          <PanelRightIcon />
          <span className="sr-only">Toggle Right Sidebar</span>
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
