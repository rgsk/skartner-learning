import { createHighlighter, type Highlighter } from "shiki";

// both themes are emitted at once as css variables, and globals.css picks one
// based on the .dark class - dark-plus keeps notebook code matching vscode
const THEMES = { light: "github-light", dark: "dark-plus" } as const;
const LANGS = ["python", "typescript", "javascript", "json", "bash"] as const;

let highlighterPromise: Promise<Highlighter> | undefined;

const getHighlighter = () => {
  highlighterPromise ??= createHighlighter({
    themes: [THEMES.light, THEMES.dark],
    langs: [...LANGS],
  });
  return highlighterPromise;
};

const escapeHtml = (code: string) =>
  code.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export async function highlightToHtml(code: string, language: string) {
  const lang = (LANGS as readonly string[]).includes(language)
    ? language
    : undefined;

  if (!lang) {
    return `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;
  }

  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang,
    themes: THEMES,
    // leaves colours as --shiki-light / --shiki-dark rather than baking one in
    defaultColor: false,
  });
}
