"use client";
import { scrollToAnchor } from "./scrollToAnchor";

// the highlighted html is injected rather than rendered, so a link inside a
// comment has no react handler of its own. one delegated listener covers them
const NotebookCode: React.FC<{ html: string }> = ({ html }) => (
  <div
    className="notebook-code"
    onClick={(event) => {
      const link = (event.target as HTMLElement).closest("a[href^='#']");
      const id = link?.getAttribute("href")?.slice(1);
      if (id && scrollToAnchor(id)) event.preventDefault();
    }}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default NotebookCode;
