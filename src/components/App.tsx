"use client";
import Navbar from "@/components/Navbar/Navbar";
import { AppSidebar } from "@/components/Sidebars/AppSidebar";
import { ControlsSidebar } from "@/components/Sidebars/ControlsSidebar";
import useGlobalContext from "@/hooks/useGlobalContext";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import useMeasure from "react-use-measure";
const hideNavbarUrls = "/piano";

// the scroll reset has to land in the commit phase, before the browser paints
// the new page — a useEffect would paint one frame at the old offset first.
// there is no dom to scroll while server rendering, hence the fallback.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
interface AppProps {
  children: any;
}
const App: React.FC<AppProps> = ({ children }) => {
  const { showAppSidebar, showControlsSidebar } = useGlobalContext();
  const [navbarContainerRef, navbarContainerBounds] = useMeasure();
  const pathname = usePathname();
  const mainContainerRef = useRef<HTMLDivElement>(null);

  // next's scroll-to-top on navigation assumes the document is the scroller;
  // here it is #main-container, so reset it ourselves. a hash target is left
  // alone so anchor links can do their own scrolling.
  useIsomorphicLayoutEffect(() => {
    if (window.location.hash) return;
    mainContainerRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex w-full">
      {showAppSidebar && <AppSidebar />}
      {hideNavbarUrls.includes(pathname) ? (
        <>
          <main className="flex-1">{children}</main>
        </>
      ) : (
        <>
          <div className="flex-1 min-w-0 relative overflow-hidden">
            <div className="absolute top-0 w-full" ref={navbarContainerRef}>
              <Navbar />
            </div>
            {navbarContainerBounds.height > 0 && (
              <div
                id="main-container"
                ref={mainContainerRef}
                className="absolute bottom-0 w-full overflow-auto"
                style={{ top: navbarContainerBounds.height }}
              >
                <main>{children}</main>
              </div>
            )}
          </div>
        </>
      )}

      {showControlsSidebar && <ControlsSidebar />}
    </div>
  );
};
export default App;
