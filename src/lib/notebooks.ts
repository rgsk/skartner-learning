export interface NotebookSource {
  title: string;
  owner: string;
  repo: string;
  // branch, tag or commit sha - pin to a sha to freeze a page at a verified version
  ref: string;
  path: string;
}

// keyed by `${category}/${topic}/${problem}`, matching the route
const notebooks: Record<string, NotebookSource> = {
  "llm/fundamentals/attention": {
    title: "Attention",
    owner: "rgsk",
    repo: "llm",
    ref: "main",
    path: "src/walkthroughs/attention.ipynb",
  },
  "rl/tabular/value-and-policy-iteration": {
    title: "Value and Policy Iteration",
    owner: "rgsk",
    repo: "ml-tracks",
    ref: "rgsk/practice",
    path: "nb/rl/final/value_and_policy_iteration.ipynb",
  },
};

export const getNotebook = (
  category: string,
  topic: string,
  problem: string,
) => notebooks[`${category}/${topic}/${problem}`];

export const notebookRawUrl = (n: NotebookSource) =>
  `https://raw.githubusercontent.com/${n.owner}/${n.repo}/${n.ref}/${n.path}`;

export const notebookGithubUrl = (n: NotebookSource) =>
  `https://github.com/${n.owner}/${n.repo}/blob/${n.ref}/${n.path}`;

export interface NotebookOutputRef {
  category: string;
  topic: string;
  problem: string;
  cell: number;
  out: number;
}

// serves the untruncated text of one output, so long outputs stay off the page payload
export const notebookOutputUrl = (ref: NotebookOutputRef) =>
  `/api/notebook-output?${new URLSearchParams({
    category: ref.category,
    topic: ref.topic,
    problem: ref.problem,
    cell: String(ref.cell),
    out: String(ref.out),
  })}`;

export const notebookRoutes = (category: string) =>
  Object.keys(notebooks)
    .filter((key) => key.startsWith(`${category}/`))
    .map((key) => {
      const [, topic, problem] = key.split("/");
      return { topic, problem };
    });
