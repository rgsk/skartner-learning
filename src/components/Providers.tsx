import { GlobalContextProvider } from "@/app/providers/GlobalContextProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

interface ProvidersProps {
  children: any;
}
const Providers: React.FC<ProvidersProps> = async ({ children }) => {
  // const cookieStore = await cookies();
  // const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <GlobalContextProvider>
        <SidebarProvider defaultOpen={true}>{children}</SidebarProvider>
      </GlobalContextProvider>
    </ThemeProvider>
  );
};
export default Providers;
