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
    themes: { light: THEMES.light.name, dark: THEMES.dark.name },
    // leaves colours as --shiki-light / --shiki-dark rather than baking one in
    defaultColor: false,
  });
}
