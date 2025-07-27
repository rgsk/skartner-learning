import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

interface ProvidersProps {
  children: any;
}
const Providers: React.FC<ProvidersProps> = async ({ children }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
    </ThemeProvider>
  );
};
export default Providers;
