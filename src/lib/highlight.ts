import { createHighlighter, type Highlighter } from "shiki";

// dark-plus is vscode's Dark+, so notebook code matches the monaco blocks elsewhere
const THEME = "dark-plus";
const LANGS = ["python", "typescript", "javascript", "json", "bash"] as const;

let highlighterPromise: Promise<Highlighter> | undefined;

const getHighlighter = () => {
  highlighterPromise ??= createHighlighter({ themes: [THEME], langs: [...LANGS] });
  return highlighterPromise;
};

const escapeHtml = (code: string) =>
  code
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export async function highlightToHtml(code: string, language: string) {
  const lang = (LANGS as readonly string[]).includes(language)
    ? language
    : undefined;

  if (!lang) {
    return `<pre class="shiki" style="background-color:#1E1E1E;color:#D4D4D4"><code>${escapeHtml(
      code,
    )}</code></pre>`;
  }

  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, { lang, theme: THEME });
}
