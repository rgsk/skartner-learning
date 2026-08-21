export interface NotebookSource {
  title: string;
  owner: string;
  repo: string;
  // branch, tag or commit sha - pin to a sha to freeze a page at a verified version
  ref: string;
  path: string;
}

// keyed by `${topic}/${problem}`, matching the /llm/[topic]/[problem] route
const notebooks: Record<string, NotebookSource> = {
  "fundamentals/attention": {
    title: "Attention",
    owner: "rgsk",
    repo: "llm",
    ref: "main",
    path: "src/walkthroughs/attention.ipynb",
  },
};

export const getNotebook = (topic: string, problem: string) =>
  notebooks[`${topic}/${problem}`];

export const notebookRawUrl = (n: NotebookSource) =>
  `https://raw.githubusercontent.com/${n.owner}/${n.repo}/${n.ref}/${n.path}`;

export const notebookGithubUrl = (n: NotebookSource) =>
  `https://github.com/${n.owner}/${n.repo}/blob/${n.ref}/${n.path}`;

export const notebookRoutes = Object.keys(notebooks).map((key) => {
  const [topic, problem] = key.split("/");
  return { topic, problem };
});
