// breathing room between the target and the top of the scroll container
const SCROLL_OFFSET = 24;

// an inline <a id="..."></a> sits inside the paragraph it names and has no size
// of its own, and a heading's id lives on a span inside it. either way the thing
// worth putting at the top of the view is the block around it.
const BLOCKS = "p, h1, h2, h3, h4, h5, h6, li, pre, table, blockquote";

export const scrollToAnchor = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return false;

  const block = target.closest(BLOCKS) ?? target;

  const container = document.getElementById("main-container");
  if (!container) {
    block.scrollIntoView({ behavior: "instant", block: "start" });
    return true;
  }

  // claim only whitespace that is actually there. asking for more room than the
  // gap above the block drags the tail of whatever precedes it into view, and a
  // half-clipped line of text reads as a mistake
  const previous = block.previousElementSibling;
  const gap = previous
    ? block.getBoundingClientRect().top - previous.getBoundingClientRect().bottom
    : SCROLL_OFFSET;

  container.scrollTop +=
    block.getBoundingClientRect().top -
    container.getBoundingClientRect().top -
    Math.max(0, Math.min(SCROLL_OFFSET, gap));

  return true;
};
