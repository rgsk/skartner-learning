import { resolveCategory, resolveNotebookRoute } from "@/lib/topics";
import { NextResponse, type NextRequest } from "next/server";

// retired urls are redirected here rather than in the page, because a page-level
// redirect() is delivered inside the streamed payload - the browser follows it,
// but the response is still a 200, so search engines never see the move.
// middleware runs before rendering and can answer with a real 308.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  const canonical = canonicalPath(segments);
  if (!canonical || canonical === pathname) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = canonical;
  return NextResponse.redirect(url, 308);
}

// undefined for anything this app does not own - dsa, cses and random keep
// their own routes and never move through here
const canonicalPath = (segments: string[]) => {
  if (segments.length === 3) {
    const [category, topic, problem] = segments;
    return resolveNotebookRoute(category, topic, problem)?.canonicalLink;
  }

  if (segments.length === 1) {
    const slug = resolveCategory(segments[0])?.slug;
    return slug && `/${slug}`;
  }
};

export const config = {
  // everything but next's own assets and the api, narrowed further above
  matcher: ["/((?!_next/|api/|favicon.ico).*)"],
};
