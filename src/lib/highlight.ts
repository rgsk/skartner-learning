import type { ElementContent } from "hast";
import {
  bundledThemes,
  createHighlighter,
  type Highlighter,
  type ThemeRegistration,
} from "shiki";

const LANGS = ["python", "typescript", "javascript", "json", "bash"] as const;

// the python grammar tags a trailing semicolon as invalid.deprecated, and both
// themes paint that red. it is legal python, so it should read as punctuation.
const SEMICOLON_SCOPE = "invalid.deprecated.semicolon.python";

const THEMES = {
  light: { base: "github-light", name: "github-light-nb", plain: "#24292E" },
  dark: { base: "dark-plus", name: "dark-plus-nb", plain: "#D4D4D4" },
} as const;

async function loadTheme({
  base,
  name,
  plain,
}: (typeof THEMES)["light" | "dark"]) {
  const theme = structuredClone(
    (await bundledThemes[base]()).default,
  ) as ThemeRegistration;

  theme.name = name;
  theme.tokenColors = [
    ...(theme.tokenColors ?? []),
    { scope: [SEMICOLON_SCOPE], settings: { foreground: plain, fontStyle: "" } },
  ];
  return theme;
}

let highlighterPromise: Promise<Highlighter> | undefined;

const getHighlighter = () => {
  highlighterPromise ??= (async () =>
    createHighlighter({
      themes: await Promise.all([
        loadTheme(THEMES.light),
        loadTheme(THEMES.dark),
      ]),
      langs: [...LANGS],
    }))();
  return highlighterPromise;
};

// `#| anchor: id` on any line makes that line a link target. it is a comment in
// every language here, so it never changes what the cell does, and it moves with
// the code when lines shift around it. it stays visible in the rendered cell -
// the same directive is visible in markdown, and an anchor nobody can see is an
// anchor nobody can find with ctrl+f
const ANCHOR_LINE = /^[ \t]*#\|[ \t]*anchor:[ \t]*([\w-]+)[ \t]*$/;

const anchoredLines = (code: string) => {
  const ids = new Map<number, string>();
  code.split("\n").forEach((line, index) => {
    const match = line.match(ANCHOR_LINE);
    if (match) ids.set(index + 1, match[1]);
  });
  return ids;
};

// a markdown link written anywhere in a cell becomes a real link - a comment,
// a docstring, either one:
//
//   # [the trace this count came from](#value-iteration-trace)
//
// the shape carries the intent, so there is no test for which kind of token it
// landed in: `[text](#id)` is not something that occurs in code by accident, and
// a string that did contain it would only render blue. python gives a whole
// comment, and each line of a docstring, as one span, so the text arrives here
// intact and splits without crossing token boundaries
const INLINE_LINK = /\[([^\]\n]+)\]\((#[\w-]+)\)/g;

const linkifyComment = (text: string) => {
  const nodes: ElementContent[] = [];
  let cursor = 0;

  for (const match of text.matchAll(INLINE_LINK)) {
    const start = match.index;

    if (start > cursor) nodes.push({ type: "text", value: text.slice(cursor, start) });
    nodes.push({
      type: "element",
      tagName: "a",
      properties: { href: match[2] },
      children: [{ type: "text", value: match[1] }],
    });
    cursor = start + match[0].length;
  }

  if (!nodes.length) return undefined;
  if (cursor < text.length) nodes.push({ type: "text", value: text.slice(cursor) });
  return nodes;
};

const escapeHtml = (code: string) =>
  code.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const COMMENT_LINKS = {
  name: "comment-links",
  span(node: { children: ElementContent[] }) {
    const [child] = node.children;
    if (node.children.length !== 1 || child?.type !== "text") return;

    const replacement = linkifyComment(child.value);
    if (replacement) node.children = replacement;
  },
};

export async function highlightToHtml(code: string, language: string) {
  const lang = (LANGS as readonly string[]).includes(language)
    ? language
    : undefined;

  if (!lang) {
    return `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;
  }

  const highlighter = await getHighlighter();
  const ids = anchoredLines(code);

  return highlighter.codeToHtml(code, {
    lang,
    themes: { light: THEMES.light.name, dark: THEMES.dark.name },
    // leaves colours as --shiki-light / --shiki-dark rather than baking one in
    defaultColor: false,
    transformers: ids.size
      ? [
          {
            line(node, line) {
              const id = ids.get(line);
              if (id) node.properties.id = id;
            },
          },
          COMMENT_LINKS,
        ]
      : [COMMENT_LINKS],
  });
}
