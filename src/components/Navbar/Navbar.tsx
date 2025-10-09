import useGlobalContext from "@/hooks/useGlobalContext";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../Shared/ModeToggle";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = ({}) => {
  const { showSidebar } = useGlobalContext();
  return (
    <nav className="p-4 flex justify-between items-center border border-b">
      <div className="flex gap-2">
        {showSidebar ? <SidebarTrigger /> : <div></div>}
        <Link href="/">
          <Button size="icon" variant="outline">
            <HomeIcon />
          </Button>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
};
export default Navbar;
